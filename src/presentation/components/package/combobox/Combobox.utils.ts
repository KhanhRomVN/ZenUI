import {
  ComboboxOption,
  ComboboxSize,
  ComboboxVariant,
} from "./Combobox.types";

/**
 * Get combobox size styles
 */
export const getComboboxSizeStyles = (size: ComboboxSize) => {
  const sizes = {
    sm: {
      height: "32px",
      padding: "0 12px",
      fontSize: "14px",
      iconSize: 14,
    },
    md: {
      height: "40px",
      padding: "0 16px",
      fontSize: "14px",
      iconSize: 16,
    },
    lg: {
      height: "48px",
      padding: "0 20px",
      fontSize: "16px",
      iconSize: 18,
    },
  };

  return sizes[size];
};

/**
 * Get combobox variant styles
 */
export const getComboboxVariantStyles = (variant: ComboboxVariant) => {
  const variants = {
    outline: {
      background: "bg-input-background",
      border: "border border-border-default",
      focus: "focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
      hover: "hover:border-border-hover",
    },
    filled: {
      background: "bg-input-filled",
      border: "border border-transparent",
      focus: "focus:bg-input-background focus:border-blue-500",
      hover: "hover:bg-input-filledHover",
    },
    underline: {
      background: "bg-transparent",
      border:
        "border-b border-border-default border-t-0 border-l-0 border-r-0 rounded-none",
      focus: "focus:border-blue-500 focus:ring-0",
      hover: "hover:border-border-hover",
    },
  };

  return variants[variant];
};

/**
 * Filter options based on search query
 */
export const filterOptions = (
  options: ComboboxOption[],
  query: string,
  searchable?: boolean
): ComboboxOption[] => {
  if (!searchable || !query) return options;

  return options.filter((option) =>
    option.label.toLowerCase().includes(query.toLowerCase())
  );
};

/**
 * Get option from value
 */
export const getOptionFromValue = (
  options: ComboboxOption[],
  value?: string
): ComboboxOption | null => {
  if (!value) return null;
  return options.find((option) => option.value === value) || null;
};

/**
 * Validate combobox props
 */
export const validateComboboxProps = (
  props: any
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (!Array.isArray(props.options)) {
    errors.push("Options must be an array");
  }

  if (
    props.value &&
    !props.options.find((opt: ComboboxOption) => opt.value === props.value)
  ) {
    errors.push("Value must be one of the provided options");
  }

  if (
    props.defaultValue &&
    !props.options.find(
      (opt: ComboboxOption) => opt.value === props.defaultValue
    )
  ) {
    errors.push("Default value must be one of the provided options");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Generate unique ID for combobox elements
 */
export const generateId = (prefix: string): string => {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
};
