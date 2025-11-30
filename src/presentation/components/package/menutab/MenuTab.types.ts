import { ReactNode, MouseEvent } from "react";
import { LucideIcon } from "lucide-react";

/**
 * Tab item type
 */
export interface TabItem {
  /** Unique identifier for the tab */
  id: string;

  /** Display label for the tab */
  label: string;

  /** Optional icon (LucideIcon, emoji, SVG, or text) */
  icon?: LucideIcon | ReactNode;

  /** Whether the tab is disabled */
  disabled?: boolean;

  /** Optional badge or status indicator */
  badge?: string | number;

  /** Optional content to display when tab is active */
  content?: ReactNode;

  /** Optional click handler (overrides onTabChange) */
  onClick?: (event: MouseEvent) => void;
}

/**
 * Menu tab variant
 */
export type MenuTabVariant = "default" | "pills" | "underline" | "cards";

/**
 * Menu tab orientation
 */
export type MenuTabOrientation = "horizontal" | "vertical";

/**
 * Menu tab size (percentage scale)
 */
export type MenuTabSize = number;

/**
 * Main MenuTab props
 */
export interface MenuTabProps {
  /** Array of tab items */
  items?: TabItem[];

  /** Currently active tab ID */
  activeTab?: string;

  /** Callback when tab changes */
  onTabChange?: (tabId: string, event: MouseEvent) => void;

  /** Size of the tabs (percentage scale) */
  size?: MenuTabSize;

  /** Visual variant of the tabs */
  variant?: MenuTabVariant;

  /** Orientation of the tabs */
  orientation?: MenuTabOrientation;

  /** Custom class name */
  className?: string;

  /** Additional props */
  [key: string]: any;
}

/**
 * Menu tab style configuration
 */
export interface MenuTabStyleConfig {
  /** Height of tab container */
  height: string;

  /** Padding */
  padding: string;

  /** Font size */
  fontSize: string;

  /** Border radius */
  borderRadius: string;

  /** Gap between tabs */
  gap: string;
}

/**
 * Tab item style configuration
 */
export interface TabItemStyleConfig {
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
