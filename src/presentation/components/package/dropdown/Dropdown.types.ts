import { ReactNode } from "react";

/**
 * Dropdown trigger type
 */
export type DropdownTrigger = "click" | "hover";

/**
 * Dropdown placement
 */
export type DropdownPlacement =
  | "top"
  | "top-left"
  | "top-right"
  | "bottom"
  | "bottom-left"
  | "bottom-right";

/**
 * Dropdown item types
 */
export type DropdownItemType = "item" | "divider";

/**
 * Dropdown item interface
 */
export interface DropdownItem {
  /** Loại item */
  type?: DropdownItemType;

  /** Label hiển thị */
  label?: string;

  /** Icon (optional) */
  icon?: ReactNode;

  /** Có bị disabled không */
  disabled?: boolean;

  /** Custom data */
  data?: any;

  /** Click handler */
  onClick?: () => void;
}

/**
 * Props chính của Dropdown component
 */
export interface DropdownProps {
  /** Danh sách items */
  items?: DropdownItem[];

  /** Cách kích hoạt dropdown */
  trigger?: DropdownTrigger;

  /** Vị trí hiển thị menu */
  placement?: DropdownPlacement;

  /** Kích thước dropdown */
  size?: number;

  /** Trạng thái disabled */
  disabled?: boolean;

  /** Trigger content (custom) */
  children?: ReactNode;

  /** Custom class name */
  className?: string;

  /** Custom style */
  style?: React.CSSProperties;

  /** Callback khi item được chọn */
  onSelect?: (item: DropdownItem, index: number) => void;

  /** Các props HTML div khác */
  [key: string]: any;
}
