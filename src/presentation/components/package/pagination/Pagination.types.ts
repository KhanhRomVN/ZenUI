import { ReactNode } from "react";

/**
 * Pagination variant
 */
export type PaginationVariant = "numbers" | "dots" | "simple";

/**
 * Pagination size
 */
export type PaginationSize = "sm" | "md" | "lg";

/**
 * Pagination alignment
 */
export type PaginationAlign = "left" | "center" | "right";

/**
 * Props chính của Pagination component
 */
export interface PaginationProps {
  /** Tổng số items */
  totalItems: number;

  /** Số items mỗi trang */
  itemsPerPage: number;

  /** Trang hiện tại */
  currentPage: number;

  /** Callback khi trang thay đổi */
  onPageChange: (page: number) => void;

  /** Variant của pagination */
  variant?: PaginationVariant;

  /** Kích thước */
  size?: PaginationSize;

  /** Căn chỉnh */
  align?: PaginationAlign;

  /** Có hiển thị navigation buttons không */
  showNavigation?: boolean;

  /** Có hiển thị số trang không */
  showPageNumbers?: boolean;

  /** Số trang hiển thị tối đa */
  maxVisiblePages?: number;

  /** Custom class name */
  className?: string;

  /** Custom previous button text/icon */
  previousButton?: ReactNode;

  /** Custom next button text/icon */
  nextButton?: ReactNode;

  /** Có hiển thị tổng số trang không */
  showTotalPages?: boolean;

  /** Có hiển thị jumper không */
  showJumper?: boolean;

  /** Có hiển thị selector items per page không */
  showItemsPerPage?: boolean;

  /** Items per page options */
  itemsPerPageOptions?: number[];
}

/**
 * Pagination information
 */
export interface PaginationInfo {
  totalPages: number;
  startItem: number;
  endItem: number;
  hasPrevious: boolean;
  hasNext: boolean;
}

/**
 * Page item type
 */
export interface PageItem {
  type: "page" | "ellipsis";
  page: number;
  isCurrent: boolean;
  isDisabled: boolean;
}
