import { CSSProperties } from "react";
import { MenuBarSize, MenuBarOrientation } from "./MenuBar.types";

/**
 * Get menu bar styles based on size and orientation
 */
export const getMenuBarStyles = (
  size: MenuBarSize,
  orientation: MenuBarOrientation
): CSSProperties => {
  const scale = size / 100;

  // Base dimensions at 100% scale
  const baseHeight = 40;
  const basePadding = 8;
  const baseFontSize = 14;
  const baseBorderRadius = 6;
  const baseGap = 4;

  // Calculate scaled values
  const height = baseHeight * scale;
  const padding = basePadding * scale;
  const fontSize = baseFontSize * scale;
  const borderRadius = baseBorderRadius * scale;
  const gap = baseGap * scale;

  return {
    height: `${height}px`,
    padding: `${padding}px`,
    fontSize: `${fontSize}px`,
    borderRadius: `${borderRadius}px`,
    gap: `${gap}px`,
    display: "flex",
    alignItems: "center",
    flexDirection: orientation === "horizontal" ? "row" : "column",
    backgroundColor: "var(--bg-primary)",
    border: "1px solid var(--border-default)",
    position: "relative",
    width: orientation === "vertical" ? "200px" : "fit-content",
  };
};

/**
 * Get menu item styles based on size
 */
export const getMenuItemStyles = (size: MenuBarSize): CSSProperties => {
  const scale = size / 100;

  // Base dimensions at 100% scale
  const baseHeight = 32;
  const basePaddingX = 12;
  const basePaddingY = 6;
  const baseFontSize = 14;
  const baseBorderRadius = 4;
  const baseGap = 8;

  // Calculate scaled values
  const height = baseHeight * scale;
  const paddingX = basePaddingX * scale;
  const paddingY = basePaddingY * scale;
  const fontSize = baseFontSize * scale;
  const borderRadius = baseBorderRadius * scale;
  const gap = baseGap * scale;

  return {
    height: `${height}px`,
    padding: `${paddingY}px ${paddingX}px`,
    fontSize: `${fontSize}px`,
    borderRadius: `${borderRadius}px`,
    gap: `${gap}px`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "none",
    backgroundColor: "transparent",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
    fontFamily: "inherit",
    fontWeight: 400,
    lineHeight: 1,
    whiteSpace: "nowrap" as const,
    width: "100%",
    minWidth: "120px",
  };
};

/**
 * Calculate submenu position based on parent item and orientation
 */
export const getSubMenuPosition = (
  parentElement: HTMLElement,
  orientation: MenuBarOrientation
): { top: number; left: number } => {
  const rect = parentElement.getBoundingClientRect();

  if (orientation === "horizontal") {
    return {
      top: rect.bottom,
      left: rect.left,
    };
  } else {
    return {
      top: rect.top,
      left: rect.right,
    };
  }
};

/**
 * Check if menu item has submenu
 */
export const hasSubMenu = (item: any): boolean => {
  return !!(item.items && item.items.length > 0);
};

/**
 * Validate menu bar props
 */
export const validateMenuBarProps = (
  props: any
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (props.size && (props.size < 50 || props.size > 200)) {
    errors.push("Size should be between 50% and 200%");
  }

  if (props.items && !Array.isArray(props.items)) {
    errors.push("Items should be an array");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Find menu item by ID
 */
export const findMenuItemById = (items: any[], id: string): any | null => {
  for (const item of items) {
    if (item.id === id) {
      return item;
    }
    if (item.items) {
      const found = findMenuItemById(item.items, id);
      if (found) return found;
    }
  }
  return null;
};
