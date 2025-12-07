import React from "react";
import { TableCellProps } from "./Table.types";
import { cn } from "../../../../../shared/utils/cn";

const TableCell: React.FC<TableCellProps> = ({
  children,
  className = "",
  align = "left",
  colSpan,
  style,
  onClick,
}) => {
  return (
    <td
      className={cn(
        "py-3 px-4",
        align === "center" && "text-center",
        align === "right" && "text-right",
        className
      )}
      colSpan={colSpan}
      style={style}
      onClick={onClick}
    >
      {children}
    </td>
  );
};

export default TableCell;
