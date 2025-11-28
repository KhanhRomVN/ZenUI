import { CSSProperties } from "react";
import {
  ButtonSize,
  ButtonDimension,
  ButtonSpacing,
  ButtonBorder,
  ButtonShadow,
  ButtonAnimation,
  ButtonStyleConfig,
} from "./Button.types";

/**
 * Convert dimension value to CSS string
 * @example parseDimension(16) => "16px"
 * @example parseDimension("100%") => "100%"
 * @example parseDimension("auto") => "auto"
 */
export const parseDimension = (
  value: ButtonDimension | undefined,
  defaultValue?: string
): string => {
  if (value === undefined) return defaultValue || "";

  if (typeof value === "number") {
    return `${value}px`;
  }

  return value;
};

/**
 * Parse spacing values (padding, margin)
 * @example parseSpacing({ all: 16 }) => "16px"
 * @example parseSpacing({ top: 8, bottom: 8, left: 16, right: 16 }) => "8px 16px 8px 16px"
 */
export const parseSpacing = (spacing: ButtonSpacing | undefined): string => {
  if (!spacing) return "";

  if (spacing.all !== undefined) {
    return parseDimension(spacing.all, "0");
  }

  const top = parseDimension(spacing.top, "0");
  const right = parseDimension(spacing.right, "0");
  const bottom = parseDimension(spacing.bottom, "0");
  const left = parseDimension(spacing.left, "0");

  return `${top} ${right} ${bottom} ${left}`;
};

/**
 * Parse border properties
 */
export const parseBorder = (
  border: ButtonBorder | undefined
): Partial<CSSProperties> => {
  if (!border) return {};

  const styles: Partial<CSSProperties> = {};

  // Border width
  if (border.width) {
    styles.borderWidth = parseSpacing(border.width);
  }

  // Border style
  if (border.style) {
    styles.borderStyle = border.style;
  }

  // Border color
  if (border.color) {
    styles.borderColor = border.color;
  }

  // Border radius
  if (border.radius) {
    styles.borderRadius = parseSpacing(border.radius);
  }

  return styles;
};

/**
 * Parse shadow properties
 */
export const parseShadow = (
  shadow: ButtonShadow | ButtonShadow[] | undefined
): string => {
  if (!shadow) return "";

  if (Array.isArray(shadow)) {
    return shadow.map((s) => parseSingleShadow(s)).join(", ");
  }

  return parseSingleShadow(shadow);
};

/**
 * Parse single shadow object
 */
const parseSingleShadow = (shadow: ButtonShadow): string => {
  const offsetX = parseDimension(shadow.offsetX, "0");
  const offsetY = parseDimension(shadow.offsetY, "0");
  const blur = parseDimension(shadow.blur, "0");
  const spread = parseDimension(shadow.spread, "0");
  const color = shadow.color || "rgba(0, 0, 0, 0.1)";
  const inset = shadow.inset ? "inset " : "";

  return `${inset}${offsetX} ${offsetY} ${blur} ${spread} ${color}`;
};

/**
 * Get default size styles
 */
export const getDefaultSizeStyles = (
  size: ButtonSize,
  hasText: boolean
): CSSProperties => {
  if (hasText) {
    // Button có text
    const sizeMap: Record<ButtonSize, CSSProperties> = {
      xs: { padding: "4px 8px", fontSize: "12px", minHeight: "28px" },
      sm: { padding: "6px 12px", fontSize: "14px", minHeight: "32px" },
      md: { padding: "8px 16px", fontSize: "16px", minHeight: "40px" },
      lg: { padding: "10px 20px", fontSize: "18px", minHeight: "48px" },
      xl: { padding: "12px 24px", fontSize: "20px", minHeight: "56px" },
    };
    return sizeMap[size];
  } else {
    // Button chỉ có icon (vuông)
    const sizeMap: Record<ButtonSize, CSSProperties> = {
      xs: { padding: "4px", width: "28px", height: "28px" },
      sm: { padding: "6px", width: "32px", height: "32px" },
      md: { padding: "8px", width: "40px", height: "40px" },
      lg: { padding: "10px", width: "48px", height: "48px" },
      xl: { padding: "12px", width: "56px", height: "56px" },
    };
    return sizeMap[size];
  }
};

/**
 * Get icon size based on button size
 */
export const getIconSize = (
  size: ButtonSize,
  hasText: boolean,
  customSize?: number
): number => {
  if (customSize) return customSize;

  if (hasText) {
    const sizeMap: Record<ButtonSize, number> = {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      xl: 20,
    };
    return sizeMap[size];
  } else {
    const sizeMap: Record<ButtonSize, number> = {
      xs: 16,
      sm: 18,
      md: 20,
      lg: 24,
      xl: 28,
    };
    return sizeMap[size];
  }
};

/**
 * Get default animation config
 */
export const getDefaultAnimation = (): ButtonAnimation => ({
  hover: true,
  click: true,
  loading: true,
  hoverScale: 1.02,
  clickScale: 0.98,
  duration: 200,
});

/**
 * Merge animation config with defaults
 */
export const mergeAnimation = (
  animation?: ButtonAnimation
): ButtonAnimation => {
  const defaults = getDefaultAnimation();
  if (!animation) return defaults;

  return {
    ...defaults,
    ...animation,
  };
};

/**
 * Build complete button styles
 */
export const buildButtonStyles = (
  size: ButtonSize,
  hasText: boolean,
  props: {
    width?: ButtonDimension;
    height?: ButtonDimension;
    minWidth?: ButtonDimension;
    maxWidth?: ButtonDimension;
    padding?: ButtonSpacing;
    margin?: ButtonSpacing;
    border?: ButtonBorder;
    shadow?: ButtonShadow | ButtonShadow[];
    backgroundColor?: string;
    color?: string;
    fontSize?: string | number;
    fontWeight?: string | number;
    opacity?: number;
    fullWidth?: boolean;
  }
): CSSProperties => {
  // Base styles
  const baseStyles: CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: hasText ? "8px" : "0",
    border: "none",
    cursor: "pointer",
    outline: "none",
    textDecoration: "none",
    userSelect: "none",
    transition: "all 0.2s ease-in-out",
    fontFamily: "inherit",
    ...getDefaultSizeStyles(size, hasText),
  };

  // Apply custom dimensions
  if (props.width) {
    baseStyles.width = parseDimension(props.width);
  }
  if (props.height) {
    baseStyles.height = parseDimension(props.height);
  }
  if (props.minWidth) {
    baseStyles.minWidth = parseDimension(props.minWidth);
  }
  if (props.maxWidth) {
    baseStyles.maxWidth = parseDimension(props.maxWidth);
  }

  // Full width
  if (props.fullWidth) {
    baseStyles.width = "100%";
  }

  // Apply custom spacing
  const paddingValue = parseSpacing(props.padding);
  if (paddingValue) {
    baseStyles.padding = paddingValue;
  }

  const marginValue = parseSpacing(props.margin);
  if (marginValue) {
    baseStyles.margin = marginValue;
  }

  // Apply border
  const borderStyles = parseBorder(props.border);
  Object.assign(baseStyles, borderStyles);

  // Apply shadow
  const shadowValue = parseShadow(props.shadow);
  if (shadowValue) {
    baseStyles.boxShadow = shadowValue;
  }

  // Apply colors
  if (props.backgroundColor) {
    baseStyles.backgroundColor = props.backgroundColor;
  }
  if (props.color) {
    baseStyles.color = props.color;
  }

  // Apply typography
  if (props.fontSize) {
    baseStyles.fontSize = parseDimension(props.fontSize);
  }
  if (props.fontWeight) {
    baseStyles.fontWeight = props.fontWeight;
  }

  // Apply opacity
  if (props.opacity !== undefined) {
    baseStyles.opacity = props.opacity;
  }

  return baseStyles;
};

/**
 * Build hover styles
 */
export const buildHoverStyles = (props: {
  hoverBackgroundColor?: string;
  hoverColor?: string;
  hoverBorder?: ButtonBorder;
  hoverShadow?: ButtonShadow | ButtonShadow[];
}): CSSProperties => {
  const styles: CSSProperties = {};

  if (props.hoverBackgroundColor) {
    styles.backgroundColor = props.hoverBackgroundColor;
  }
  if (props.hoverColor) {
    styles.color = props.hoverColor;
  }

  const borderStyles = parseBorder(props.hoverBorder);
  Object.assign(styles, borderStyles);

  const shadowValue = parseShadow(props.hoverShadow);
  if (shadowValue) {
    styles.boxShadow = shadowValue;
  }

  return styles;
};

/**
 * Build active styles
 */
export const buildActiveStyles = (props: {
  activeBackgroundColor?: string;
  activeColor?: string;
  activeBorder?: ButtonBorder;
  activeShadow?: ButtonShadow | ButtonShadow[];
}): CSSProperties => {
  const styles: CSSProperties = {};

  if (props.activeBackgroundColor) {
    styles.backgroundColor = props.activeBackgroundColor;
  }
  if (props.activeColor) {
    styles.color = props.activeColor;
  }

  const borderStyles = parseBorder(props.activeBorder);
  Object.assign(styles, borderStyles);

  const shadowValue = parseShadow(props.activeShadow);
  if (shadowValue) {
    styles.boxShadow = shadowValue;
  }

  return styles;
};

/**
 * Build disabled styles
 */
export const buildDisabledStyles = (): CSSProperties => ({
  opacity: 0.5,
  cursor: "not-allowed",
  pointerEvents: "none",
});

/**
 * Build loading styles
 */
export const buildLoadingStyles = (): CSSProperties => ({
  cursor: "wait",
  pointerEvents: "none",
});
