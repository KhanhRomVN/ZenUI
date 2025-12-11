import { ReactNode } from "react";

/**
 * Kích thước card (percentage scale)
 */
export type CardSize = number;

/**
 * Căn chỉnh card trong container cha
 */
export interface CardAlign {
  horizontal?: "left" | "center" | "right";
  vertical?: "top" | "center" | "bottom";
}

/**
 * Chiều rộng card (percentage của container cha)
 */
export type CardWidth = number;

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

  /** Click handler */
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;

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

/**
 * Props cho CardHeader component
 */
export interface CardHeaderProps {
  /** Nội dung header */
  children?: ReactNode;

  /** Custom class name */
  className?: string;

  /** Các props HTML div khác */
  [key: string]: any;
}

/**
 * Props cho CardBody component
 */
export interface CardBodyProps {
  /** Nội dung body */
  children?: ReactNode;

  /** Custom class name */
  className?: string;

  /** Các props HTML div khác */
  [key: string]: any;
}

/**
 * Props cho CardFooter component
 */
export interface CardFooterProps {
  /** Nội dung footer */
  children?: ReactNode;

  /** Custom class name */
  className?: string;

  /** Các props HTML div khác */
  [key: string]: any;
}
