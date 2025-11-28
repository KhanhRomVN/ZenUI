import { ReactNode, ButtonHTMLAttributes } from "react";

/**
 * Kích thước của button
 */
export type ButtonSize = "xs" | "sm" | "md" | "lg" | "xl";

/**
 * Căn chỉnh nội dung button
 */
export type ButtonAlign = "left" | "center" | "right";

/**
 * Vị trí của icon
 */
export type ButtonIconPosition = "left" | "right";

/**
 * Kiểu dữ liệu cho kích thước (có thể là string hoặc number)
 */
export type ButtonDimension = string | number;

/**
 * Interface định nghĩa khoảng cách (padding/margin)
 */
export interface ButtonSpacing {
  /** Khoảng cách phía trên */
  top?: string | number;
  /** Khoảng cách bên phải */
  right?: string | number;
  /** Khoảng cách phía dưới */
  bottom?: string | number;
  /** Khoảng cách bên trái */
  left?: string | number;
  /** Khoảng cách đồng đều cả 4 phía */
  all?: string | number;
}

/**
 * Interface định nghĩa border
 */
export interface ButtonBorder {
  /** Độ rộng của border */
  width?: ButtonSpacing;
  /** Kiểu border */
  style?: "solid" | "dashed" | "dotted" | "double" | "none";
  /** Màu border */
  color?: string;
  /** Border radius */
  radius?: ButtonSpacing;
}

/**
 * Interface định nghĩa shadow (đổ bóng)
 */
export interface ButtonShadow {
  /** Màu shadow */
  color?: string;
  /** Offset theo trục X */
  offsetX?: string | number;
  /** Offset theo trục Y */
  offsetY?: string | number;
  /** Độ mờ */
  blur?: string | number;
  /** Độ lan rộng */
  spread?: string | number;
  /** Shadow bên trong */
  inset?: boolean;
}

/**
 * Interface cho animation configuration
 */
export interface ButtonAnimation {
  /** Bật/tắt animation hover */
  hover?: boolean;
  /** Bật/tắt animation click */
  click?: boolean;
  /** Bật/tắt animation loading */
  loading?: boolean;
  /** Scale khi hover */
  hoverScale?: number;
  /** Scale khi click */
  clickScale?: number;
  /** Thời gian transition (ms) */
  duration?: number;
}

/**
 * Interface cho icon configuration
 */
export interface ButtonIconConfig {
  /** Icon component (từ lucide-react hoặc package khác) */
  icon?: React.ComponentType<{ className?: string; size?: number }>;
  /** Emoji dạng SVG hoặc text */
  emoji?: ReactNode;
  /** Vị trí icon */
  position?: ButtonIconPosition;
  /** Size của icon (px) */
  size?: number;
  /** Class name tùy chỉnh cho icon */
  className?: string;
}

/**
 * Props chính của Button component
 */
export interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "style"> {
  // ==================== CORE PROPS ====================

  /** Nội dung button */
  children?: ReactNode;
  /** Size mặc định của button */
  size?: ButtonSize;
  /** Căn chỉnh nội dung */
  align?: ButtonAlign;
  /** Custom class name */
  className?: string;

  // ==================== STATE & BEHAVIOR ====================

  /** Trạng thái loading */
  loading?: boolean;
  /** Trạng thái disabled */
  disabled?: boolean;
  /** Full width button */
  fullWidth?: boolean;

  // ==================== ICON CONFIGURATION ====================

  /** Configuration cho icon */
  iconConfig?: ButtonIconConfig;

  // ==================== ANIMATION ====================

  /** Animation configuration */
  animation?: ButtonAnimation;

  // ==================== DIMENSIONS ====================

  /** Chiều rộng button */
  width?: ButtonDimension;
  /** Chiều cao button */
  height?: ButtonDimension;
  /** Chiều rộng tối thiểu */
  minWidth?: ButtonDimension;
  /** Chiều rộng tối đa */
  maxWidth?: ButtonDimension;

  // ==================== STYLING ====================

  /** Padding bên trong button */
  padding?: ButtonSpacing;
  /** Margin bên ngoài button */
  margin?: ButtonSpacing;
  /** Border styling */
  border?: ButtonBorder;
  /** Shadow styling (có thể là single shadow hoặc array của multiple shadows) */
  shadow?: ButtonShadow | ButtonShadow[];

  /** Màu nền */
  backgroundColor?: string;
  /** Màu text */
  color?: string;
  /** Font size */
  fontSize?: string | number;
  /** Font weight */
  fontWeight?: string | number;
  /** Độ trong suốt */
  opacity?: number;

  // ==================== HOVER & ACTIVE STATES ====================

  /** Màu nền khi hover */
  hoverBackgroundColor?: string;
  /** Màu text khi hover */
  hoverColor?: string;
  /** Border khi hover */
  hoverBorder?: ButtonBorder;
  /** Shadow khi hover */
  hoverShadow?: ButtonShadow | ButtonShadow[];

  /** Màu nền khi active/click */
  activeBackgroundColor?: string;
  /** Màu text khi active/click */
  activeColor?: string;
  /** Border khi active */
  activeBorder?: ButtonBorder;
  /** Shadow khi active */
  activeShadow?: ButtonShadow | ButtonShadow[];

  // ==================== LOADING STATE ====================

  /** Màu của loading spinner */
  loadingColor?: string;
  /** Size của loading spinner */
  loadingSize?: number;
  /** Text hiển thị khi loading */
  loadingText?: string;
}

/**
 * Interface cho style configuration của button
 */
export interface ButtonStyleConfig {
  base: React.CSSProperties;
  hover?: React.CSSProperties;
  active?: React.CSSProperties;
  disabled?: React.CSSProperties;
  loading?: React.CSSProperties;
}
