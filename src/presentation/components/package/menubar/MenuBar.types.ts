import { ReactNode, MouseEvent } from "react";
import { LucideIcon } from "lucide-react";

/**
 * Menu item type
 */
export interface MenuItem {
  /** Unique identifier for the menu item */
  id: string;

  /** Display label for the menu item */
  label: string;

  /** Optional icon (LucideIcon, emoji, SVG, or text) */
  icon?: LucideIcon | ReactNode;

  /** Whether the item is disabled */
  disabled?: boolean;

  /** Optional click handler for the item */
  onClick?: (event: MouseEvent) => void;

  /** Optional submenu items */
  items?: MenuItem[];

  /** Optional badge or status indicator */
  badge?: string | number;

  /** Optional keyboard shortcut */
  shortcut?: string;
}

/**
 * Menu bar orientation
 */
export type MenuBarOrientation = "horizontal" | "vertical";

/**
 * Menu bar size (percentage scale)
 */
export type MenuBarSize = number;

/**
 * Main MenuBar props
 */
export interface MenuBarProps {
  /** Array of menu items */
  items?: MenuItem[];

  /** Size of the menu bar (percentage scale) */
  size?: MenuBarSize;

  /** Orientation of the menu bar */
  orientation?: MenuBarOrientation;

  /** Custom class name */
  className?: string;

  /** Click handler for menu items */
  onItemClick?: (
    item: MenuItem,
    event: MouseEvent,
    parentItem?: MenuItem
  ) => void;

  /** Currently active item ID */
  activeItem?: string;

  /** Additional props */
  [key: string]: any;
}

/**
 * Menu bar style configuration
 */
export interface MenuBarStyleConfig {
  /** Height of menu bar */
  height: string;

  /** Padding */
  padding: string;

  /** Font size */
  fontSize: string;

  /** Border radius */
  borderRadius: string;

  /** Gap between items */
  gap: string;
}

/**
 * Menu item style configuration
 */
export interface MenuItemStyleConfig {
  /** Height */
  height: string;

  /** Padding */
  padding: string;

  /** Font size */
  fontSize: string;

  /** Border radius */
  borderRadius: string;

  /** Gap between icon and label */
  gap: string;
}
