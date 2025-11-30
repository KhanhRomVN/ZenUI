import { ReactNode } from "react";

/**
 * Kích thước card (percentage scale)
 */
export type CardSize = number;

/**
 * Căn chỉnh card trong container cha
 */
export interface CardAlign {
  /** Căn ngang: left, center, right */
  horizontal?: "left" | "center" | "right";
  /** Căn dọc: top, center, bottom */
  vertical?: "top" | "center" | "bottom";
}

/**
 * Chiều rộng card (percentage của container cha)
 */
export type CardWidth = number;

/**
 * Appear animation variants cho card
 */
export type AppearAnimationVariant =
  | "fade"
  | "slide-up"
  | "slide-down"
  | "slide-left"
  | "slide-right"
  | "scale"
  | "rotate"
  | "flip"
  | "none";

/**
 * Hover effect variants cho card
 */
export type HoverEffectVariant =
  | "lift"
  | "glow"
  | "border-glow"
  | "glass"
  | "tilt"
  | "scale"
  | "shadow"
  | "none";

/**
 * Custom hover effect configuration
 */
export interface HoverEffectConfig {
  /** Transform style khi hover */
  transform?: string;
  /** Box shadow khi hover */
  boxShadow?: string;
  /** Border style khi hover */
  border?: string;
  /** Background style khi hover */
  background?: string;
  /** Transition duration */
  transitionDuration?: string;
  /** Other CSS properties */
  [key: string]: any;
}

/**
 * Props chính của Card component
 */
export interface CardProps {
  /** Kích thước card */
  size?: CardSize;

  /** Chiều rộng card (% của container cha) */
  width?: CardWidth;

  /** Căn chỉnh card trong container cha */
  cardAlign?: CardAlign;

  /** Nội dung card */
  children?: ReactNode;

  /** Custom class name */
  className?: string;

  /** Custom style */
  style?: React.CSSProperties;

  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;

  /** Hiển thị hover effect */
  hoverable?: boolean;

  /** Appear animation variant */
  appearAnimationVariant?: AppearAnimationVariant;

  /** Hover effect variant (nếu set thì sẽ override hoverEffect) */
  hoverEffectVariant?: HoverEffectVariant;

  /** Custom hover effect (chỉ hoạt động khi hoverEffectVariant không được set) */
  hoverEffect?: HoverEffectConfig;

  /** Các props HTML div khác */
  [key: string]: any;
}

/**
 * Interface cho card size configuration
 */
export interface CardSizeConfig {
  /** Padding */
  padding: string;

  /** Border radius */
  borderRadius: string;
}
