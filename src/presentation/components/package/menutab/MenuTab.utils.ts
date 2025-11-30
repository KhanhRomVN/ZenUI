import { CSSProperties } from "react";
import {
  MenuTabSize,
  MenuTabVariant,
  MenuTabOrientation,
} from "./MenuTab.types";

/**
 * Get menu tab styles based on size, orientation, and variant
 */
export const getMenuTabStyles = (
  size: MenuTabSize,
  orientation: MenuTabOrientation,
  variant: MenuTabVariant
): CSSProperties => {
  const scale = size / 100;

  // Base dimensions at 100% scale
  const baseHeight = 48;
  const basePadding = 8;
  const baseFontSize = 14;
  const baseBorderRadius = 8;
  const baseGap = 4;

  // Calculate scaled values
  const height = baseHeight * scale;
  const padding = basePadding * scale;
  const fontSize = baseFontSize * scale;
  const borderRadius = baseBorderRadius * scale;
  const gap = baseGap * scale;

  const baseStyles: CSSProperties = {
    height: `${height}px`,
    padding: `${padding}px`,
    fontSize: `${fontSize}px`,
    borderRadius: `${borderRadius}px`,
    gap: `${gap}px`,
    display: "flex",
    alignItems: "center",
    position: "relative",
    backgroundColor: "var(--bg-secondary)",
    border: variant === "cards" ? "1px solid var(--border-default)" : "none",
  };

  if (orientation === "horizontal") {
    baseStyles.flexDirection = "row";
    baseStyles.width = "fit-content";
  } else {
    baseStyles.flexDirection = "column";
    baseStyles.width = "200px";
    baseStyles.height = "fit-content";
  }

  return baseStyles;
};

/**
 * Get tab item styles based on size and variant
 */
export const getTabItemStyles = (
  size: MenuTabSize,
  variant: MenuTabVariant
): CSSProperties => {
  const scale = size / 100;

  // Base dimensions at 100% scale
  const baseHeight = 40;
  const basePaddingX = 16;
  const basePaddingY = 8;
  const baseFontSize = 14;
  const baseBorderRadius = 6;
  const baseGap = 8;

  // Calculate scaled values
  const height = baseHeight * scale;
  const paddingX = basePaddingX * scale;
  const paddingY = basePaddingY * scale;
  const fontSize = baseFontSize * scale;
  const borderRadius = baseBorderRadius * scale;
  const gap = baseGap * scale;

  const baseStyles: CSSProperties = {
    height: `${height}px`,
    padding: `${paddingY}px ${paddingX}px`,
    fontSize: `${fontSize}px`,
    borderRadius: `${borderRadius}px`,
    gap: `${gap}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    fontFamily: "inherit",
    fontWeight: 500,
    lineHeight: 1,
    whiteSpace: "nowrap" as const,
    position: "relative",
    zIndex: 1,
  };

  // Variant-specific styles
  switch (variant) {
    case "pills":
      baseStyles.borderRadius = "20px";
      break;
    case "underline":
      baseStyles.borderRadius = "0px";
      baseStyles.borderBottom = "2px solid transparent";
      break;
    case "cards":
      baseStyles.border = "1px solid transparent";
      break;
  }

  return baseStyles;
};

/**
 * Get active tab indicator styles
 */
export const getActiveTabIndicatorStyles = (
  activeIndex: number,
  totalItems: number,
  orientation: MenuTabOrientation
): CSSProperties => {
  const position = (100 / totalItems) * activeIndex;
  const size = 100 / totalItems;

  if (orientation === "horizontal") {
    return {
      position: "absolute",
      bottom: 0,
      left: `${position}%`,
      width: `${size}%`,
      height: "2px",
      backgroundColor: "var(--accent-primary)",
      transition: "all 0.3s ease-in-out",
      zIndex: 0,
    };
  } else {
    return {
      position: "absolute",
      right: 0,
      top: `${position}%`,
      height: `${size}%`,
      width: "2px",
      backgroundColor: "var(--accent-primary)",
      transition: "all 0.3s ease-in-out",
      zIndex: 0,
    };
  }
};

/**
 * Validate menu tab props
 */
export const validateMenuTabProps = (
  props: any
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (props.size && (props.size < 50 || props.size > 200)) {
    errors.push("Size should be between 50% and 200%");
  }

  if (props.items && !Array.isArray(props.items)) {
    errors.push("Items should be an array");
  }

  if (props.activeTab && props.items) {
    const activeItemExists = props.items.some(
      (item: any) => item.id === props.activeTab
    );
    if (!activeItemExists) {
      errors.push("Active tab must exist in items array");
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Get default active tab
 */
export const getDefaultActiveTab = (items: any[]): string | undefined => {
  const firstEnabledItem = items.find((item) => !item.disabled);
  return firstEnabledItem?.id;
};
