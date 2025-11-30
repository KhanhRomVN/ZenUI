import { ReactNode } from "react";

/**
 * Divider orientation
 */
export type DividerOrientation = "horizontal" | "vertical";

/**
 * Divider variant style
 */
export type DividerVariant = "solid" | "dashed" | "dotted";

/**
 * Divider text position (horizontal only)
 */
export type DividerTextPosition = "left" | "center" | "right";

/**
 * Props chính của Divider component
 */
export interface DividerProps {
  /** Hướng của divider */
  orientation?: DividerOrientation;

  /** Kiểu đường divider */
  variant?: DividerVariant;

  /** Độ dày của divider (px) */
  size?: number;

  /** Màu sắc divider */
  color?: string;

  /** Text hiển thị (chỉ horizontal) */
  text?: ReactNode;

  /** Vị trí text (chỉ horizontal) */
  textPosition?: DividerTextPosition;

  /** Custom class name */
  className?: string;

  /** Custom style */
  style?: React.CSSProperties;

  /** Các props HTML div khác */
  [key: string]: any;
}
