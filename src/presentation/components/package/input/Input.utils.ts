import { CSSProperties } from "react";
import { InputSize } from "./Input.types";

/**
 * Get input size styles based on size percentage
 */
export const getInputSizeStyles = (size: InputSize): CSSProperties => {
  const scale = size / 100;

  // Base dimensions at 100% scale
  const baseHeight = 40;
  const basePaddingX = 12;
  const basePaddingY = 8;
  const baseFontSize = 14;
  const baseBorderRadius = 6;

  // Calculate scaled values
  const height = baseHeight * scale;
  const paddingX = basePaddingX * scale;
  const paddingY = basePaddingY * scale;
  const fontSize = baseFontSize * scale;
  const borderRadius = baseBorderRadius * scale;

  return {
    height: `${height}px`,
    padding: `${paddingY}px ${paddingX}px`,
    fontSize: `${fontSize}px`,
    borderRadius: `${borderRadius}px`,
  };
};

/**
 * Get base input styles
 */
export const getBaseInputStyles = (
  isFocused: boolean,
  isDisabled: boolean
): CSSProperties => {
  return {
    border: "1px solid",
    borderColor: isFocused
      ? "var(--primary, #3b82f6)"
      : "var(--border-default, #e5e7eb)",
    backgroundColor: isDisabled
      ? "var(--input-background-disabled, #f9fafb)"
      : "var(--input-background, #ffffff)",
    color: "var(--text-primary, #000000)",
  };
};

/**
 * Parse multi-text values from string
 */
export const parseMultiTextValues = (
  value: string,
  separator: string = ","
): string[] => {
  return value
    .split(separator)
    .map((v) => v.trim())
    .filter((v) => v.length > 0);
};

/**
 * Format multi-text values to string
 */
export const formatMultiTextValues = (
  values: string[],
  separator: string = ","
): string => {
  return values.join(`${separator} `);
};

/**
 * Get icon size based on input size
 */
export const getIconSize = (size: InputSize): number => {
  const scale = size / 100;
  const baseSize = 16;
  return Math.max(Math.round(baseSize * scale), 12);
};

/**
 * Check if left icon should be shown
 */
export const shouldShowLeftIcon = (
  icon: React.ReactNode | undefined,
  loading: boolean
): boolean => {
  return !!(icon || loading);
};

/**
 * Check if right icons should be shown
 */
export const shouldShowRightIcons = (
  icons: React.ReactNode | React.ReactNode[] | undefined
): boolean => {
  if (Array.isArray(icons)) {
    return icons.length > 0;
  }
  return !!icons;
};

/**
 * Normalize right icons to array
 */
export const normalizeRightIcons = (
  icons: React.ReactNode | React.ReactNode[] | undefined
): React.ReactNode[] => {
  if (!icons) return [];
  return Array.isArray(icons) ? icons : [icons];
};

/**
 * Validate input props
 */
export const validateInputProps = (
  props: any
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (props.size && (props.size < 50 || props.size > 200)) {
    errors.push("Size should be between 50% and 200%");
  }

  if (
    props.type === "dropdown_selector" &&
    (!props.dropdownOptions || props.dropdownOptions.length === 0)
  ) {
    errors.push("dropdownOptions is required when type is 'dropdown_selector'");
  }

  if (
    props.type === "combobox" &&
    (!props.comboboxOptions || props.comboboxOptions.length === 0)
  ) {
    errors.push("comboboxOptions is required when type is 'combobox'");
  }

  if (props.type === "multi_text" && !props.multiTextSeparator) {
    errors.push("multiTextSeparator is recommended for type 'multi_text'");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
