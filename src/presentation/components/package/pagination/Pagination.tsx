import React, { useState } from "react";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import { PaginationProps, PageItem } from "./Pagination.types";
import {
  calculatePaginationInfo,
  generatePageItems,
  getPaginationSizeStyles,
  getPaginationAlignmentStyles,
  validatePaginationProps,
} from "./Pagination.utils";
import { cn } from "../../../../shared/utils/cn";

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
  variant = "numbers",
  size = "md",
  align = "center",
  showNavigation = true,
  showPageNumbers = true,
  maxVisiblePages = 7,
  className = "",
  previousButton,
  nextButton,
  showTotalPages = false,
  showJumper = false,
  showItemsPerPage = false,
  itemsPerPageOptions = [10, 20, 50, 100],
}) => {
  // Validate props
  const validation = validatePaginationProps({
    totalItems,
    itemsPerPage,
    currentPage,
    onPageChange,
  });

  if (!validation.isValid) {
    console.error("Pagination validation errors:", validation.errors);
    return null;
  }

  // State for page jumper and items per page
  const [jumperPage, setJumperPage] = useState("");
  const [selectedItemsPerPage, setSelectedItemsPerPage] =
    useState(itemsPerPage);

  // Calculate pagination info
  const paginationInfo = calculatePaginationInfo(
    totalItems,
    selectedItemsPerPage,
    currentPage
  );

  // Generate page items
  const pageItems = generatePageItems(
    currentPage,
    paginationInfo.totalPages,
    maxVisiblePages
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    if (
      page >= 1 &&
      page <= paginationInfo.totalPages &&
      page !== currentPage
    ) {
      onPageChange(page);
    }
  };

  // Handle items per page change
  const handleItemsPerPageChange = (value: number) => {
    setSelectedItemsPerPage(value);
    // Reset to first page when items per page changes
    onPageChange(1);
  };

  // Handle page jumper
  const handleJumperSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const page = parseInt(jumperPage);
    if (page >= 1 && page <= paginationInfo.totalPages) {
      handlePageChange(page);
      setJumperPage("");
    }
  };

  // Get styles
  const sizeStyles = getPaginationSizeStyles(size);
  const alignmentStyles = getPaginationAlignmentStyles(align);

  // Render page items based on variant
  const renderPageItems = () => {
    if (variant === "dots") {
      return Array.from({ length: paginationInfo.totalPages }, (_, i) => (
        <button
          key={i + 1}
          onClick={() => handlePageChange(i + 1)}
          className={`w-2 h-2 rounded-full transition-colors ${
            currentPage === i + 1
              ? "bg-blue-600"
              : "bg-gray-300 hover:bg-gray-400"
          }`}
          aria-label={`Go to page ${i + 1}`}
        />
      ));
    }

    if (variant === "simple") {
      return (
        <span className=" text-sm">
          Page {currentPage} of {paginationInfo.totalPages}
        </span>
      );
    }

    // Numbers variant (default)
    return pageItems.map((item, index) => {
      if (item.type === "ellipsis") {
        return (
          <span
            key={`ellipsis-${index}`}
            className="flex items-center justify-center "
          >
            <MoreHorizontal size={16} />
          </span>
        );
      }

      return (
        <button
          key={item.page}
          onClick={() => handlePageChange(item.page)}
          className={`flex items-center justify-center rounded-md transition-colors ${
            sizeStyles.pageNumber
          } ${
            item.isCurrent
              ? "bg-blue-600 text-white"
              : "bg-transparent  hover:bg-gray-100"
          }`}
          aria-current={item.isCurrent ? "page" : undefined}
          aria-label={`Go to page ${item.page}`}
        >
          {item.page}
        </button>
      );
    });
  };

  return (
    <div className={`pagination-container ${className}`.trim()}>
      {/* Main pagination */}
      <div
        className={`flex items-center ${alignmentStyles} ${sizeStyles.gap} flex-wrap`}
      >
        {/* Navigation buttons */}
        {showNavigation && (
          <>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={!paginationInfo.hasPrevious}
              className={`flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 bg-transparent  transition-colors hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed ${sizeStyles.button}`}
              aria-label="Previous page"
            >
              {previousButton || <ChevronLeft size={16} />}
            </button>

            {/* Page numbers */}
            {showPageNumbers && (
              <div className="flex items-center gap-1">{renderPageItems()}</div>
            )}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={!paginationInfo.hasNext}
              className={`flex items-center justify-center rounded-md border border-gray-200 dark:border-gray-700 bg-transparent  transition-colors hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed ${sizeStyles.button}`}
              aria-label="Next page"
            >
              {nextButton || <ChevronRight size={16} />}
            </button>
          </>
        )}
      </div>

      {/* Additional information and controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mt-4">
        {/* Total pages info */}
        {showTotalPages && (
          <div className="text-sm ">
            Showing {paginationInfo.startItem} to {paginationInfo.endItem} of{" "}
            {totalItems} entries
          </div>
        )}

        <div className="flex items-center gap-4">
          {/* Page jumper */}
          {showJumper && (
            <form
              onSubmit={handleJumperSubmit}
              className="flex items-center gap-2"
            >
              <span className="text-sm ">Go to:</span>
              <input
                type="number"
                value={jumperPage}
                onChange={(e) => setJumperPage(e.target.value)}
                min="1"
                max={paginationInfo.totalPages}
                className="w-16 px-2 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Page"
              />
              <button
                type="submit"
                className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Go
              </button>
            </form>
          )}

          {/* Items per page selector */}
          {showItemsPerPage && (
            <div className="flex items-center gap-2">
              <span className="text-sm ">Show:</span>
              <select
                value={selectedItemsPerPage}
                onChange={(e) =>
                  handleItemsPerPageChange(Number(e.target.value))
                }
                className="px-2 py-1 text-sm border border-gray-200 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {itemsPerPageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pagination;
