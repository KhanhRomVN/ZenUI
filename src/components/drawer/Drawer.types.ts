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
 * Interface định nghĩa khoảng cách (padding/margin)
 */
export interface DrawerSpacing {
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
export interface DrawerBorder {
  /** Độ rộng của border */
  width?: DrawerSpacing;
  /** Kiểu border */
  style?: "solid" | "dashed" | "dotted" | "double" | "none";
  /** Màu border */
  color?: string;
  /** Border radius */
  radius?: DrawerSpacing;
}

/**
 * Interface định nghĩa shadow (đổ bóng)
 */
export interface DrawerShadow {
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
 * Interface định nghĩa border cho các section (header/body/footer)
 */
export interface DrawerSectionBorder {
  /** Độ rộng border */
  width?: string | number;
  /** Kiểu border */
  style?: "solid" | "dashed" | "dotted" | "double" | "none";
  /** Màu border */
  color?: string;
  /** Box shadow */
  shadow?: DrawerShadow;
}

/**
 * Props chính của Drawer component
 */
export interface DrawerProps {
  // ==================== CORE PROPS (BẮT BUỘC) ====================

  /** Trạng thái mở/đóng của drawer */
  isOpen: boolean;
  /** Callback được gọi khi drawer đóng */
  onClose: () => void;
  /** Nội dung chính của drawer */
  children: ReactNode;

  // ==================== BASIC CONFIGURATION ====================

  /** Tiêu đề drawer */
  title?: string;
  /** Phụ đề drawer */
  subtitle?: string;
  /** Hướng mở của drawer */
  direction?: DrawerDirection;
  /** Các action buttons ở header */
  headerActions?: ReactNode;
  /** Các action buttons ở footer */
  footerActions?: ReactNode;
  /** Custom class name */
  className?: string;

  // ==================== VISIBILITY & BEHAVIOR ====================

  /** Ẩn header (bao gồm title và close button) */
  hideHeader?: boolean;
  /** Hiển thị nút đóng */
  showCloseButton?: boolean;
  /** Cho phép đóng khi click vào overlay */
  closeOnOverlayClick?: boolean;
  /** Độ mờ của overlay */
  overlayOpacity?: number;
  /** Bật hiệu ứng blur */
  enableBlur?: boolean;

  // ==================== ANIMATION ====================

  /** Loại hiệu ứng animation */
  animationType?: DrawerAnimationType;

  // ==================== DIMENSIONS ====================

  /** Chiều rộng drawer (cho left/right direction) */
  width?: DrawerSize;
  /** Chiều cao drawer (cho top/bottom direction) */
  height?: DrawerSize;
  /** Margin bên trái */
  marginLeft?: number;
  /** Margin bên phải */
  marginRight?: number;
  /** Margin phía trên */
  marginTop?: number;
  /** Margin phía dưới */
  marginBottom?: number;

  // ==================== ADVANCED STYLING ====================

  /** Padding bên trong drawer */
  padding?: DrawerSpacing;
  /** Margin bên ngoài drawer */
  margin?: DrawerSpacing;
  /** Border styling */
  border?: DrawerBorder;
  /** Shadow styling (có thể là single shadow hoặc array của multiple shadows) */
  shadow?: DrawerShadow | DrawerShadow[];
  /** Độ trong suốt của drawer */
  opacity?: number;
  /** Độ blur của backdrop */
  backdropBlur?: string | number;
  /** Màu nền của drawer */
  backgroundColor?: string;

  // ==================== SECTION-SPECIFIC STYLING ====================

  /** Màu nền riêng cho header */
  headerBackgroundColor?: string;
  /** Màu nền riêng cho body/content */
  bodyBackgroundColor?: string;
  /** Màu nền riêng cho footer */
  footerBackgroundColor?: string;

  /** Border bottom cho header */
  headerBorder?: DrawerSectionBorder;
  /** Border top cho footer */
  footerBorder?: DrawerSectionBorder;
}

/**
 * Interface cho style configuration của drawer
 * Dùng để tính toán styles cho component
 */
export interface DrawerStyleConfig {
  /** Vị trí fixed để cố định trên viewport */
  position: "fixed";
  /** Z-index để đảm bảo drawer hiển thị trên các content khác */
  zIndex: number;
  /** Màu nền */
  backgroundColor: string;
  /** Backdrop filter cho hiệu ứng blur */
  backdropFilter: string;
  /** Backdrop filter prefix cho Safari */
  WebkitBackdropFilter: string;
  /** Box shadow */
  boxShadow: string;
  /** Flex display để dễ dàng bố cục header/body/footer */
  display: "flex";
  /** Flex direction column để sắp xếp theo chiều dọc */
  flexDirection: "column";
  /** Vị trí từ trên xuống */
  top?: string;
  /** Vị trí từ dưới lên */
  bottom?: string;
  /** Vị trí từ trái sang */
  left?: string;
  /** Vị trí từ phải sang */
  right?: string;
  /** Chiều rộng */
  width?: string;
  /** Chiều cao */
  height?: string;
  /** Padding bên trong */
  padding?: string;
  /** Margin bên ngoài */
  margin?: string;
  /** Border styling */
  border?: string;
  /** Border radius */
  borderRadius?: string;
  /** Độ trong suốt */
  opacity?: number;
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
