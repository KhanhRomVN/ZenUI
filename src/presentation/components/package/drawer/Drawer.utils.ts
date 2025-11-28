import { CSSProperties } from "react";
import {
  DrawerDirection,
  DrawerAnimationType,
  DrawerSize,
  DrawerSpacing,
  DrawerBorder,
  DrawerShadow,
} from "./Drawer.types";

/**
 * Convert fraction string to percentage
 * @example parseSize("1/2") => "50%"
 * @example parseSize(400) => "400px"
 * @example parseSize("33%") => "33%"
 */
export const parseSize = (
  size: DrawerSize | undefined,
  defaultValue: string
): string => {
  if (!size) return defaultValue;

  if (typeof size === "number") {
    return `${size}px`;
  }

  // Handle fractions like "1/2", "1/3", "1/4"
  if (size.includes("/")) {
    const [numerator, denominator] = size.split("/").map(Number);
    if (!isNaN(numerator) && !isNaN(denominator) && denominator !== 0) {
      return `${(numerator / denominator) * 100}%`;
    }
  }

  // Handle special values
  if (size === "full") return "100%";
  if (size === "screen") return "100vw";
  if (size === "auto") return "auto";

  return size;
};

/**
 * Parse spacing values (padding, margin)
 */
export const parseSpacing = (spacing: DrawerSpacing | undefined): string => {
  if (!spacing) return "";

  if (spacing.all !== undefined) {
    const value = parseSize(spacing.all, "");
    return value;
  }

  const top = spacing.top ? parseSize(spacing.top, "0") : "0";
  const right = spacing.right ? parseSize(spacing.right, "0") : "0";
  const bottom = spacing.bottom ? parseSize(spacing.bottom, "0") : "0";
  const left = spacing.left ? parseSize(spacing.left, "0") : "0";

  return `${top} ${right} ${bottom} ${left}`;
};

/**
 * Parse border properties
 */
export const parseBorder = (
  border: DrawerBorder | undefined
): CSSProperties => {
  if (!border) return {};

  const styles: CSSProperties = {};

  // Border width
  if (border.width) {
    (styles as any).borderWidth = parseSpacing(border.width);
  }

  // Border style
  if (border.style) {
    (styles as any).borderStyle = border.style;
  }

  // Border color
  if (border.color) {
    (styles as any).borderColor = border.color;
  }

  // Border radius
  if (border.radius) {
    (styles as any).borderRadius = parseSpacing(border.radius);
  }

  return styles;
};

/**
 * Parse shadow properties
 */
export const parseShadow = (
  shadow: DrawerShadow | DrawerShadow[] | undefined
): string => {
  if (!shadow) return "";

  if (Array.isArray(shadow)) {
    return shadow.map((s) => parseSingleShadow(s)).join(", ");
  }

  return parseSingleShadow(shadow);
};

const parseSingleShadow = (shadow: DrawerShadow): string => {
  const offsetX = parseSize(shadow.offsetX, "0");
  const offsetY = parseSize(shadow.offsetY, "0");
  const blur = parseSize(shadow.blur, "0");
  const spread = parseSize(shadow.spread, "0");
  const color = shadow.color || "rgba(0, 0, 0, 0.1)";
  const inset = shadow.inset ? "inset " : "";

  return `${inset}${offsetX} ${offsetY} ${blur} ${spread} ${color}`;
};

/**
 * Parse blur value
 */
export const parseBlur = (blur: string | number | undefined): string => {
  if (!blur) return "none";

  if (typeof blur === "number") {
    return `blur(${blur}px)`;
  }

  return `blur(${blur})`;
};

/**
 * Get animation variants based on direction and animation type
 */
export const getDrawerVariants = (
  direction: DrawerDirection,
  animationType: DrawerAnimationType
): any => {
  const baseVariants: Record<string, any> = {
    slide: {
      hidden: {
        x: direction === "right" ? "100%" : direction === "left" ? "-100%" : 0,
        y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
      },
      visible: { x: 0, y: 0 },
    },
    scale: {
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1 },
    },
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    bounce: {
      hidden: {
        x: direction === "right" ? "100%" : direction === "left" ? "-100%" : 0,
        y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
        scale: 0.8,
      },
      visible: {
        x: 0,
        y: 0,
        scale: 1,
        transition: {
          type: "spring",
          damping: 15,
          stiffness: 300,
        },
      },
    },
    elastic: {
      hidden: {
        x: direction === "right" ? "100%" : direction === "left" ? "-100%" : 0,
        y: direction === "top" ? "-100%" : direction === "bottom" ? "100%" : 0,
      },
      visible: {
        x: 0,
        y: 0,
        transition: {
          type: "spring",
          damping: 20,
          stiffness: 100,
          mass: 0.8,
        },
      },
    },
  };

  return baseVariants[animationType] || baseVariants.slide;
};

/**
 * Animation variants for overlay
 */
export const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

/**
 * Animation variants for header
 */
export const headerVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

/**
 * Calculate drawer style based on direction and size props
 */
export const getDrawerStyle = (
  direction: DrawerDirection,
  width: DrawerSize | undefined,
  height: DrawerSize | undefined,
  marginLeft: number,
  marginRight: number,
  marginTop: number,
  marginBottom: number,
  padding: DrawerSpacing | undefined,
  margin: DrawerSpacing | undefined,
  border: DrawerBorder | undefined,
  shadow: DrawerShadow | DrawerShadow[] | undefined,
  opacity: number | undefined,
  backdropBlur: string | number | undefined,
  backgroundColor: string | undefined
): CSSProperties => {
  const baseStyle: CSSProperties = {
    position: "fixed",
    zIndex: 1000,
    backgroundColor: backgroundColor || "var(--drawer-background, #ffffff)",
    backdropFilter: parseBlur(backdropBlur),
    WebkitBackdropFilter: parseBlur(backdropBlur),
    boxShadow: parseShadow(shadow) || "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    display: "flex",
    flexDirection: "column",
  };

  // Apply opacity if provided
  if (opacity !== undefined) {
    (baseStyle as any).opacity = opacity;
  }

  // Apply padding if provided
  const paddingValue = parseSpacing(padding);
  if (paddingValue) {
    (baseStyle as any).padding = paddingValue;
  }

  // Apply margin if provided
  const marginValue = parseSpacing(margin);
  if (marginValue) {
    (baseStyle as any).margin = marginValue;
  }

  // Apply border styles if provided
  const borderStyles = parseBorder(border);
  Object.assign(baseStyle, borderStyles);

  switch (direction) {
    case "right": {
      const drawerWidth = parseSize(width, "25%");
      const drawerHeight = parseSize(height, "100%");
      const hasCustomHeight = height !== undefined;
      const topPosition = hasCustomHeight
        ? `calc(50% - (${drawerHeight} / 2) + ${marginTop}px - ${marginBottom}px)`
        : `${marginTop}px`;

      return {
        ...baseStyle,
        top: topPosition,
        right: `${marginRight}px`,
        width: `calc(${drawerWidth} - ${marginLeft + marginRight}px)`,
        height: hasCustomHeight
          ? `calc(${drawerHeight} - ${marginTop + marginBottom}px)`
          : `calc(100% - ${marginTop + marginBottom}px)`,
      };
    }

    case "left": {
      const drawerWidth = parseSize(width, "25%");
      const drawerHeight = parseSize(height, "100%");
      const hasCustomHeight = height !== undefined;
      const topPosition = hasCustomHeight
        ? `calc(50% - (${drawerHeight} / 2) + ${marginTop}px - ${marginBottom}px)`
        : `${marginTop}px`;

      return {
        ...baseStyle,
        top: topPosition,
        left: `${marginLeft}px`,
        width: `calc(${drawerWidth} - ${marginLeft + marginRight}px)`,
        height: hasCustomHeight
          ? `calc(${drawerHeight} - ${marginTop + marginBottom}px)`
          : `calc(100% - ${marginTop + marginBottom}px)`,
      };
    }

    case "top": {
      const drawerHeight = parseSize(height, "25%");
      const drawerWidth = parseSize(width, "100%");
      const hasCustomWidth = width !== undefined;
      const leftPosition = hasCustomWidth
        ? `calc(50% - (${drawerWidth} / 2) + ${marginLeft}px - ${marginRight}px)`
        : `${marginLeft}px`;

      return {
        ...baseStyle,
        top: `${marginTop}px`,
        left: leftPosition,
        width: hasCustomWidth
          ? `calc(${drawerWidth} - ${marginLeft + marginRight}px)`
          : `calc(100% - ${marginLeft + marginRight}px)`,
        height: `calc(${drawerHeight} - ${marginTop + marginBottom}px)`,
      };
    }

    case "bottom": {
      const drawerHeight = parseSize(height, "25%");
      const drawerWidth = parseSize(width, "100%");
      const hasCustomWidth = width !== undefined;
      const leftPosition = hasCustomWidth
        ? `calc(50% - (${drawerWidth} / 2) + ${marginLeft}px - ${marginRight}px)`
        : `${marginLeft}px`;

      return {
        ...baseStyle,
        bottom: `${marginBottom}px`,
        left: leftPosition,
        width: hasCustomWidth
          ? `calc(${drawerWidth} - ${marginLeft + marginRight}px)`
          : `calc(100% - ${marginLeft + marginRight}px)`,
        height: `calc(${drawerHeight} - ${marginTop + marginBottom}px)`,
      };
    }

    default:
      return baseStyle;
  }
};
