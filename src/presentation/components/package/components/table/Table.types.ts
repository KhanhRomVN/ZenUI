import { ReactNode } from "react";

export interface TableColumn<T = any> {
  key: string;
  title: string;
  width?: string | number;
  align?: "left" | "center" | "right";
  sortable?: boolean;
  sorter?: (a: T, b: T) => number;
  render?: (value: any, record: T, index: number) => ReactNode;
}

export interface TableSort {
  key: string;
  direction: "asc" | "desc";
}

export interface TablePagination {
  current: number;
  pageSize: number;
  total: number;
  showSizeChanger?: boolean;
  pageSizeOptions?: number[];
  showQuickJumper?: boolean;
}

export type TableSize = "sm" | "md" | "lg";

export interface TableProps {
  children?: ReactNode;
  className?: string;
}

export interface TableHeaderProps {
  children?: ReactNode;
  className?: string;
}

export interface TableBodyProps {
  children?: ReactNode;
  className?: string;
}

export interface TableFooterProps {
  children?: ReactNode;
  className?: string;
}

export interface TableRowProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
}

export interface TableCellProps {
  children?: ReactNode;
  className?: string;
  align?: "left" | "center" | "right";
  colSpan?: number;
  style?: React.CSSProperties;
  onClick?: () => void;
}
