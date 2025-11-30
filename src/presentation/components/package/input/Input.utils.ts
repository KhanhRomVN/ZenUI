import { CSSProperties } from "react";
import { InputSize, InputVariant } from "./Input.types";

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
 * Get input variant styles
 */
export const getInputVariantStyles = (
  variant: InputVariant,
  isFocused: boolean,
  isDisabled: boolean
): CSSProperties => {
  const baseStyles = {
    border: "1px solid",
    backgroundColor: "var(--input-background, #ffffff)",
    color: "var(--text-primary, #000000)",
  };

  switch (variant) {
    case "filled":
      return {
        ...baseStyles,
        borderColor: isFocused
          ? "var(--primary, #3b82f6)"
          : "var(--border-default, #e5e7eb)",
        backgroundColor: isDisabled
          ? "var(--input-background-disabled, #f9fafb)"
          : "var(--input-background, #f8fafc)",
      };
    case "underline":
      return {
        ...baseStyles,
        border: "none",
        borderBottom: `2px solid ${
          isFocused
            ? "var(--primary, #3b82f6)"
            : "var(--border-default, #e5e7eb)"
        }`,
        borderRadius: "0px",
        backgroundColor: "transparent",
      };
    case "outline":
    default:
      return {
        ...baseStyles,
        borderColor: isFocused
          ? "var(--primary, #3b82f6)"
          : "var(--border-default, #e5e7eb)",
        backgroundColor: isDisabled
          ? "var(--input-background-disabled, #f9fafb)"
          : "var(--input-background, #ffffff)",
      };
  }
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
 * Check if icon should be shown
 */
export const shouldShowIcon = (
  icon: React.ReactNode | undefined,
  loading: boolean
): boolean => {
  return !!(icon || loading);
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

  if (props.showPasswordToggle && props.type !== "password") {
    errors.push("showPasswordToggle should only be used with type='password'");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
