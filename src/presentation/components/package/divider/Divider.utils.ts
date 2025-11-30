import { CSSProperties } from "react";
import {
  DividerOrientation,
  DividerVariant,
  DividerTextPosition,
} from "./Divider.types";

/**
 * Get divider styles based on props
 */
export const getDividerStyles = (
  orientation: DividerOrientation,
  variant: DividerVariant,
  size: number,
  color: string,
  hasText: boolean
): CSSProperties => {
  const baseStyle: CSSProperties = {
    border: "none",
    backgroundColor: color,
  };

  if (orientation === "horizontal") {
    baseStyle.width = "100%";
    baseStyle.height = `${size}px`;
    baseStyle.margin = hasText ? "16px 0" : "8px 0";
    baseStyle.display = "flex";
    baseStyle.alignItems = "center";

    // Apply border style for horizontal
    switch (variant) {
      case "dashed":
        baseStyle.borderBottom = `${size}px dashed ${color}`;
        baseStyle.backgroundColor = "transparent";
        break;
      case "dotted":
        baseStyle.borderBottom = `${size}px dotted ${color}`;
        baseStyle.backgroundColor = "transparent";
        break;
      default:
        baseStyle.borderBottom = `${size}px solid ${color}`;
        baseStyle.backgroundColor = "transparent";
    }
  } else {
    // Vertical
    baseStyle.width = `${size}px`;
    baseStyle.height = "100%";
    baseStyle.margin = "0 8px";
    baseStyle.display = "inline-block";

    // Apply border style for vertical
    switch (variant) {
      case "dashed":
        baseStyle.borderRight = `${size}px dashed ${color}`;
        baseStyle.backgroundColor = "transparent";
        break;
      case "dotted":
        baseStyle.borderRight = `${size}px dotted ${color}`;
        baseStyle.backgroundColor = "transparent";
        break;
      default:
        baseStyle.borderRight = `${size}px solid ${color}`;
        baseStyle.backgroundColor = "transparent";
    }
  }

  return baseStyle;
};

/**
 * Get divider text styles
 */
export const getDividerTextStyles = (
  orientation: DividerOrientation,
  textPosition: DividerTextPosition
): CSSProperties => {
  if (orientation === "vertical") {
    return {};
  }

  const baseStyle: CSSProperties = {
    padding: "0 16px",
    fontSize: "14px",
    color: "inherit",
    whiteSpace: "nowrap" as const,
  };

  switch (textPosition) {
    case "left":
      return { ...baseStyle, marginRight: "auto" };
    case "right":
      return { ...baseStyle, marginLeft: "auto" };
    case "center":
    default:
      return baseStyle;
  }
};

/**
 * Check if text should be shown
 */
export const shouldShowText = (
  text: React.ReactNode | undefined,
  orientation: DividerOrientation
): boolean => {
  return !!text && orientation === "horizontal";
};

/**
 * Validate divider props
 */
export const validateDividerProps = (
  props: any
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (props.text && props.orientation === "vertical") {
    errors.push("Text is only supported for horizontal dividers");
  }

  if (props.size && (props.size < 1 || props.size > 10)) {
    errors.push("Size should be between 1px and 10px");
  }

  if (props.textPosition && !props.text) {
    errors.push("textPosition should only be used when text is provided");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
