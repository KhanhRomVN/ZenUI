import React from "react";
import { TableRowProps } from "./Table.types";
import { cn } from "../../../../shared/utils/cn";

const TableRow: React.FC<TableRowProps> = ({
  children,
  className = "",
  onClick,
  style,
  onMouseEnter,
  onMouseLeave,
  onFocus,
  onBlur,
}) => {
  return (
    <tr
      className={cn(
        "transition-colors duration-200",
        onClick && "cursor-pointer",
        className
      )}
      onClick={onClick}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      {children}
    </tr>
  );
};

export default TableRow;
