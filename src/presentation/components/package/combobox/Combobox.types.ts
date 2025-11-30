import { ReactNode } from "react";

/**
 * Option type for combobox items
 */
export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
  /** Custom content to render instead of label */
  content?: ReactNode;
}

/**
 * Combobox size variants
 */
export type ComboboxSize = "sm" | "md" | "lg";

/**
 * Combobox variant styles
 */
export type ComboboxVariant = "outline" | "filled" | "underline";

/**
 * Main Combobox props
 */
export interface ComboboxProps {
  /** Array of options */
  options: ComboboxOption[];
  /** Selected value */
  value?: string;
  /** Default value */
  defaultValue?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Error state */
  error?: boolean;
  /** Error message */
  errorMessage?: string;
  /** Success state */
  success?: boolean;
  /** Size variant */
  size?: ComboboxSize;
  /** Style variant */
  variant?: ComboboxVariant;
  /** Custom class name */
  className?: string;
  /** Change handler */
  onChange?: (value: string, option: ComboboxOption) => void;
  /** Search handler for async options */
  onSearch?: (query: string) => void;
  /** Whether to allow clearing selection */
  clearable?: boolean;
  /** Custom empty state message */
  emptyMessage?: string;
  /** Whether combobox is searchable */
  searchable?: boolean;
  /** Allow creating new options when value doesn't exist */
  creatable?: boolean;
  /** Message shown when creating new option */
  creatableMessage?: string;
  /** Handler called when new option is created */
  onCreate?: (value: string) => void;
  /** Custom render function for options */
  renderOption?: (option: ComboboxOption) => ReactNode;
  /** Custom render function for selected value */
  renderSelected?: (option: ComboboxOption) => ReactNode;
  /** Array of custom ReactNode items to render as options */
  customItems?: Array<{
    value: string;
    content: ReactNode;
    disabled?: boolean;
  }>;
  /** Additional props */
  [key: string]: any;
}

/**
 * Combobox context type
 */
export interface ComboboxContextType {
  isOpen: boolean;
  selectedOption: ComboboxOption | null;
  inputValue: string;
  filteredOptions: ComboboxOption[];
  highlightedIndex: number;
  setInputValue: (value: string) => void;
  setSelectedOption: (option: ComboboxOption | null) => void;
  setIsOpen: (open: boolean) => void;
  setHighlightedIndex: (index: number) => void;
  handleSelect: (option: ComboboxOption) => void;
  handleInputChange: (value: string) => void;
  size: ComboboxSize;
  variant: ComboboxVariant;
  disabled?: boolean;
  loading?: boolean;
  searchable?: boolean;
  creatable?: boolean;
}
