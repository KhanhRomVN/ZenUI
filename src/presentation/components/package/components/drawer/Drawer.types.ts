import { ReactNode } from "react";

/**
 * Hướng mở của drawer
 */
export type DrawerDirection = "left" | "right" | "top" | "bottom";

/**
 * Loại hiệu ứng animation
 */
export type DrawerAnimationType =
  | "slide"
  | "scale"
  | "fade"
  | "bounce"
  | "elastic";

/**
 * Kiểu dữ liệu cho kích thước (có thể là string hoặc number)
 */
export type DrawerSize = string | number;

/**
 * Props của Drawer component (simplified)
 */
export interface DrawerProps {
  /** Trạng thái mở/đóng của drawer */
  isOpen: boolean;
  /** Callback được gọi khi drawer đóng */
  onClose: () => void;
  /** Nội dung chính của drawer */
  children: ReactNode;
  /** Hướng mở của drawer */
  direction?: DrawerDirection;
  /** Custom class name cho drawer wrapper */
  className?: string;
  /** Custom class name cho overlay */
  overlayClassName?: string;
  /** Chiều rộng drawer (cho left/right direction) */
  width?: DrawerSize;
  /** Chiều cao drawer (cho top/bottom direction) */
  height?: DrawerSize;
  /** Loại hiệu ứng animation */
  animationType?: DrawerAnimationType;
  /** Cho phép đóng khi click vào overlay */
  closeOnOverlayClick?: boolean;
}

/**
 * Interface định nghĩa animation variants
 * Dùng cho các thư viện animation như Framer Motion
 */
export interface DrawerVariants {
  /** Trạng thái ẩn */
  hidden: Record<string, any>;
  /** Trạng thái hiển thị */
  visible: Record<string, any>;
}
