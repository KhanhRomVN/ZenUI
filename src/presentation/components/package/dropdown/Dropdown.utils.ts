import { CSSProperties } from "react";
import { DropdownPlacement, DropdownItem } from "./Dropdown.types";

/**
 * Get dropdown styles based on size
 */
export const getDropdownStyles = (
  size: number,
  disabled: boolean
): CSSProperties => {
  const scale = size / 100;

  // Base dimensions at 100% scale
  const baseHeight = 40;
  const basePaddingX = 16;
  const baseFontSize = 14;
  const baseBorderRadius = 6;
  const baseGap = 8;

  // Calculate scaled values
  const height = baseHeight * scale;
  const paddingX = basePaddingX * scale;
  const fontSize = baseFontSize * scale;
  const borderRadius = baseBorderRadius * scale;
  const gap = baseGap * scale;

  return {
    height: `${height}px`,
    padding: `0 ${paddingX}px`,
    fontSize: `${fontSize}px`,
    borderRadius: `${borderRadius}px`,
    gap: `${gap}px`,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid #d1d5db",
    backgroundColor: "white",
    outline: "none",
    transition: "all 0.2s ease-in-out",
    fontFamily: "inherit",
    fontWeight: 500,
    lineHeight: 1,
    whiteSpace: "nowrap" as const,
    opacity: disabled ? 0.6 : 1,
    cursor: disabled ? "not-allowed" : "pointer",
  };
};

/**
 * Get menu item styles
 */
export const getMenuItemStyles = (size: number): CSSProperties => {
  const scale = size / 100;
  const basePadding = 12;
  const baseFontSize = 14;

  const padding = basePadding * scale;
  const fontSize = baseFontSize * scale;

  return {
    padding: `${padding * 0.5}px ${padding}px`,
    fontSize: `${fontSize}px`,
    display: "flex",
    alignItems: "center",
    gap: "8px",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  };
};

/**
 * Get icon size
 */
export const getIconSize = (size: number, hasText: boolean): number => {
  const scale = size / 100;
  const baseSize = hasText ? 16 : 20;
  return Math.max(Math.round(baseSize * scale), 12);
};

/**
 * Check if icon should be shown
 */
export const shouldShowIcon = (icon: React.ReactNode | undefined): boolean => {
  return !!icon;
};

/**
 * Get placement styles for dropdown menu
 */
export const getPlacementStyles = (
  placement: DropdownPlacement
): CSSProperties => {
  const styles: CSSProperties = {
    position: "absolute",
    zIndex: 50,
  };

  switch (placement) {
    case "top":
      styles.bottom = "100%";
      styles.left = "50%";
      styles.transform = "translateX(-50%)";
      styles.marginBottom = "4px";
      break;
    case "top-left":
      styles.bottom = "100%";
      styles.left = "0";
      styles.marginBottom = "4px";
      break;
    case "top-right":
      styles.bottom = "100%";
      styles.right = "0";
      styles.marginBottom = "4px";
      break;
    case "bottom-left":
      styles.top = "100%";
      styles.left = "0";
      styles.marginTop = "4px";
      break;
    case "bottom-right":
      styles.top = "100%";
      styles.right = "0";
      styles.marginTop = "4px";
      break;
    case "bottom":
    default:
      styles.top = "100%";
      styles.left = "50%";
      styles.transform = "translateX(-50%)";
      styles.marginTop = "4px";
  }

  return styles;
};
