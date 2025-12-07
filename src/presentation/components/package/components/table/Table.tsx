import React, { useState, useMemo } from "react";
import { ChevronUp, ChevronDown, Loader2 } from "lucide-react";
import { TableProps, TableSort } from "./Table.types";
import {
  getTableSizeClasses,
  getTableVariantClasses,
  sortData,
  paginateData,
  generatePageNumbers,
} from "./Table.utils";
import { cn } from "../../../../../shared/utils/cn";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableRow from "./TableRow";
import TableCell from "./TableCell";

const Table: React.FC<TableProps> = ({
  data,
  columns,
  size = "md",
  variant = "default",
  pagination,
  loading = false,
  emptyMessage = "No data available",
  className = "",
  onRowClick,
  onSort,
  onPageChange,
  rowKey = "id",
  showHeader = true,
  showFooter = true,
  stickyHeader = false,
  children,
}) => {
  const [internalSort, setInternalSort] = useState<TableSort | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(
    pagination?.current || 1
  );
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [focusedRow, setFocusedRow] = useState<number | null>(null);

  const currentSort = onSort ? null : internalSort;

  // If used as wrapper component (with children), render directly
  if (children) {
    return (
      <div className={cn("w-full", className)}>
        <table
          className={cn(
            "w-full border-collapse",
            getTableSizeClasses(size),
            getTableVariantClasses(variant),
            stickyHeader && "overflow-hidden"
          )}
        >
          {children}
        </table>
      </div>
    );
  }

  // Handle sort state
  const handleSort = (key: string) => {
    let newSort: TableSort | null = null;

    if (!internalSort || internalSort.key !== key) {
      newSort = { key, direction: "asc" };
    } else if (internalSort.direction === "asc") {
      newSort = { key, direction: "desc" };
    } else {
      // Third click resets sort
      newSort = null;
    }

    // Reset về trang 1 khi sort
    setCurrentPage(1);
    setInternalSort(newSort);

    if (onSort) {
      onSort(newSort);
    }
  };

  // Process data (sort TOÀN BỘ trước, rồi mới paginate)
  const processedData = useMemo(() => {
    if (!data || !columns) return [];

    let result = [...data];

    // Bước 1: Sort TOÀN BỘ dữ liệu trước
    if (internalSort) {
      result = sortData(result, columns, internalSort);
    }

    // Bước 2: Sau đó mới phân trang từ dữ liệu đã sort
    if (pagination) {
      const paginationConfig = {
        ...pagination,
        current: currentPage,
      };
      result = paginateData(result, paginationConfig);
    }

    return result;
  }, [data, columns, internalSort, currentPage, pagination]);

  // Get row key value
  const getRowKey = (record: any, index: number): string => {
    if (typeof rowKey === "function") {
      return rowKey(record);
    }
    return record[rowKey] || `row-${index}`;
  };

  // Handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    if (pagination && onPageChange) {
      onPageChange(page, pagination.pageSize);
    }
  };

  const sizeClasses = getTableSizeClasses(size);
  const variantClasses = getTableVariantClasses(variant);
  // Tính tổng số trang dựa trên TOÀN BỘ data (sau khi sort)
  const totalPages = pagination
    ? Math.ceil((data?.length || 0) / pagination.pageSize)
    : 1;

  // Safety check for required props when not using as wrapper
  if (!data || !columns) {
    return null;
  }

  return (
    <div className={cn("w-full", className)}>
      <table
        className={cn(
          "w-full border-collapse",
          sizeClasses,
          variantClasses,
          stickyHeader && "overflow-hidden"
        )}
      >
        {/* Header */}
        {showHeader && (
          <thead className={cn(stickyHeader && "sticky top-0 z-10")}>
            <TableRow>
              {columns.map((column) => {
                const isSortable = column.sortable === true;
                const isSorted = internalSort?.key === column.key;

                return (
                  <TableCell
                    key={column.key}
                    align={column.align}
                    className={cn(
                      "font-medium py-3 px-4",
                      isSortable && "cursor-pointer select-none",
                      column.width && `w-[${column.width}]`
                    )}
                    style={column.width ? { width: column.width } : {}}
                    onClick={() => isSortable && handleSort(column.key)}
                  >
                    <div className="flex items-center justify-between">
                      <span>{column.title}</span>
                      {isSortable && (
                        <div className="flex flex-col ml-2">
                          <ChevronUp
                            size={12}
                            className={cn(
                              "mb-[-2px]",
                              isSorted && internalSort?.direction === "asc"
                                ? "text-blue-600"
                                : "text-gray-400"
                            )}
                          />
                          <ChevronDown
                            size={12}
                            className={cn(
                              "mt-[-2px]",
                              isSorted && internalSort?.direction === "desc"
                                ? "text-blue-600"
                                : "text-gray-400"
                            )}
                          />
                        </div>
                      )}
                    </div>
                  </TableCell>
                );
              })}
            </TableRow>
          </thead>
        )}

        {/* Body */}
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                align="center"
                className="py-20"
              >
                <Loader2
                  className="animate-spin mx-auto mb-2 text-gray-600"
                  size={24}
                />
                <div className="text-gray-600">Loading...</div>
              </TableCell>
            </TableRow>
          ) : processedData.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                align="center"
                className="py-20"
              >
                <div className="text-gray-600">{emptyMessage}</div>
              </TableCell>
            </TableRow>
          ) : (
            processedData.map((record, index) => (
              <TableRow
                key={getRowKey(record, index)}
                className={cn(
                  "transition-colors duration-200",
                  onRowClick && "cursor-pointer"
                )}
                onMouseEnter={() => setHoveredRow(index)}
                onMouseLeave={() => setHoveredRow(null)}
                onFocus={() => setFocusedRow(index)}
                onBlur={() => setFocusedRow(null)}
                onClick={() => onRowClick?.(record, index)}
              >
                {columns.map((column) => (
                  <TableCell
                    key={column.key}
                    align={column.align}
                    className="py-3 px-4 border-b border-gray-200"
                  >
                    {column.render
                      ? column.render(record[column.key], record, index)
                      : record[column.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>

        {/* Footer */}
        {showFooter && pagination && (
          <tfoot>
            <TableRow>
              <TableCell colSpan={columns.length} className="py-3 px-4">
                <div className="flex items-center justify-between">
                  <div className="text-gray-600 text-sm">
                    Showing {(currentPage - 1) * pagination.pageSize + 1} to{" "}
                    {Math.min(
                      currentPage * pagination.pageSize,
                      data?.length || 0
                    )}{" "}
                    of {data?.length || 0} entries
                  </div>

                  <div className="flex items-center gap-2">
                    {/* Previous button */}
                    <button
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                      className={cn(
                        "px-3 py-1 rounded-md text-sm transition-colors",
                        currentPage === 1
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                    >
                      Previous
                    </button>

                    {/* Page numbers */}
                    <div className="items-center gap-1">
                      {generatePageNumbers(currentPage, totalPages).map(
                        (page, index) => (
                          <React.Fragment key={index}>
                            {page === "..." ? (
                              <span className="px-2 text-gray-400">...</span>
                            ) : (
                              <button
                                onClick={() => handlePageChange(Number(page))}
                                className={cn(
                                  "min-w-[32px] h-8 rounded-md text-sm transition-colors",
                                  pagination.current === page
                                    ? "bg-blue-600 text-white"
                                    : "text-gray-700 hover:bg-gray-100"
                                )}
                              >
                                {page}
                              </button>
                            )}
                          </React.Fragment>
                        )
                      )}
                    </div>

                    {/* Next button */}
                    <button
                      disabled={currentPage === totalPages}
                      onClick={() => handlePageChange(currentPage + 1)}
                      className={cn(
                        "px-3 py-1 rounded-md text-sm transition-colors",
                        currentPage === totalPages
                          ? "text-gray-400 cursor-not-allowed"
                          : "text-gray-700 hover:bg-gray-100"
                      )}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </TableCell>
            </TableRow>
          </tfoot>
        )}
      </table>
    </div>
  );
};

// Export sub-components with type assertion
const TableComponent = Table as React.FC<TableProps> & {
  Header: typeof TableHeader;
  Body: typeof TableBody;
  Footer: typeof TableFooter;
  Row: typeof TableRow;
  Cell: typeof TableCell;
};

TableComponent.Header = TableHeader;
TableComponent.Body = TableBody;
TableComponent.Footer = TableFooter;
TableComponent.Row = TableRow;
TableComponent.Cell = TableCell;

export default TableComponent;
