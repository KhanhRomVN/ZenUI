import React from "react";
import { TableProps } from "./Table.types";
import { cn } from "../../../../../shared/utils/cn";
import TableHeader from "./TableHeader";
import TableBody from "./TableBody";
import TableFooter from "./TableFooter";
import TableRow from "./TableRow";
import TableCell from "./TableCell";

const Table: React.FC<TableProps> = ({ children, className = "" }) => {
  return (
    <div className={cn("w-full", className)}>
      <table className="w-full border-collapse">{children}</table>
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
