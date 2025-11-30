import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

/**
 * Kích thước input (percentage scale)
 */
export type InputSize = number;

/**
 * Variant của input
 */
export type InputVariant = "outline" | "filled" | "underline";

/**
 * Icon type
 */
export type InputIcon = LucideIcon | ReactNode;

/**
 * Props chính của Input component
 */
export interface InputProps {
  /** Kích thước input */
  size?: InputSize;

  /** Variant của input */
  variant?: InputVariant;

  /** Loại input */
  type?: "text" | "password" | "email" | "number" | "tel" | "url" | "search";

  /** Placeholder */
  placeholder?: string;

  /** Giá trị */
  value?: string;

  /** Trạng thái disabled */
  disabled?: boolean;

  /** Trạng thái loading */
  loading?: boolean;

  /** Icon */
  icon?: InputIcon;

  /** Vị trí icon */
  iconPosition?: "left" | "right";

  /** Hiển thị nút clear */
  showClearButton?: boolean;

  /** Hiển thị nút toggle password */
  showPasswordToggle?: boolean;

  /** Custom class name */
  className?: string;

  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** Clear handler */
  onClear?: () => void;

  /** Các props HTML input khác */
  [key: string]: any;
}

/**
 * Interface cho input size configuration
 */
export interface InputSizeConfig {
  /** Chiều cao */
  height: string;

  /** Padding horizontal */
  paddingX: string;

  /** Padding vertical */
  paddingY: string;

  /** Font size */
  fontSize: string;

  /** Border radius */
  borderRadius: string;
}
