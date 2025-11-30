import { LucideIcon } from "lucide-react";

/**
 * Kích thước breadcrumb (percentage scale)
 */
export type BreadcrumbSize = number;

/**
 * Loại separator
 */
export type BreadcrumbSeparator = "chevron" | "slash" | "arrow";

/**
 * Breadcrumb item
 */
export interface BreadcrumbItem {
  /** Unique identifier */
  id?: string;

  /** Label hiển thị */
  label: string;

  /** URL (optional) */
  href?: string;

  /** Custom icon */
  icon?: LucideIcon;

  /** Custom data */
  [key: string]: any;
}

/**
 * Props chính của Breadcrumb component
 */
export interface BreadcrumbProps {
  /** Danh sách breadcrumb items */
  items?: BreadcrumbItem[];

  /** Kích thước breadcrumb */
  size?: BreadcrumbSize;

  /** Loại separator */
  separator?: BreadcrumbSeparator;

  /** Hiển thị home icon */
  showHomeIcon?: boolean;

  /** Home URL */
  homeHref?: string;

  /** Custom class name */
  className?: string;

  /** Callback khi click vào item */
  onItemClick?: (item: BreadcrumbItem, index: number) => void;

  /** Các props HTML nav khác */
  [key: string]: any;
}

/**
 * Interface cho breadcrumb size configuration
 */
export interface BreadcrumbSizeConfig {
  /** Font size */
  fontSize: string;

  /** Line height */
  lineHeight: number;
}
