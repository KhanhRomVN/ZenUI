import { CSSProperties } from "react";
import { ChevronRight, Slash, ArrowRight } from "lucide-react";
import {
  BreadcrumbSize,
  BreadcrumbSeparator,
  BreadcrumbItem,
} from "./Breadcrumb.types";

/**
 * Get breadcrumb size styles based on size percentage
 */
export const getBreadcrumbSizeStyles = (
  size: BreadcrumbSize
): CSSProperties => {
  const scale = size / 100;

  // Base dimensions at 100% scale
  const baseFontSize = 14;

  // Calculate scaled values
  const fontSize = baseFontSize * scale;

  return {
    fontSize: `${fontSize}px`,
    lineHeight: 1,
  };
};

/**
 * Get separator icon based on type
 */
export const getSeparatorIcon = (separator: BreadcrumbSeparator) => {
  const icons = {
    chevron: ChevronRight,
    slash: Slash,
    arrow: ArrowRight,
  };

  return icons[separator];
};

/**
 * Check if home icon should be shown
 */
export const shouldShowHomeIcon = (
  showHomeIcon: boolean,
  items: BreadcrumbItem[]
): boolean => {
  return showHomeIcon;
};

/**
 * Validate breadcrumb props
 */
export const validateBreadcrumbProps = (
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
 * Generate breadcrumb items from path
 */
export const generateBreadcrumbItems = (
  path: string,
  labels?: { [key: string]: string }
): BreadcrumbItem[] => {
  const segments = path.split("/").filter((segment) => segment !== "");

  return segments.map((segment, index) => {
    const href = `/${segments.slice(0, index + 1).join("/")}`;
    const label =
      labels?.[segment] || segment.charAt(0).toUpperCase() + segment.slice(1);

    return {
      id: segment,
      label,
      href: index === segments.length - 1 ? undefined : href,
    };
  });
};

/**
 * Merge custom styles with base styles
 */
export const mergeStyles = (
  baseStyles: CSSProperties,
  customStyles?: CSSProperties
): CSSProperties => {
  if (!customStyles) return baseStyles;

  return {
    ...baseStyles,
    ...customStyles,
  };
};
