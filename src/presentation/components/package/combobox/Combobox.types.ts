import { ReactNode } from "react";

export interface ComboboxOption {
  value: string;
  label: string;
  disabled?: boolean;
  icon?: ReactNode;
}

/**
 * Combobox size variants
 */
export type ComboboxSize = "sm" | "md" | "lg";

/**
 * Main Combobox props
 */
export interface ComboboxProps {
  /** Array of options */
  options: ComboboxOption[];
  /** Selected value */
  value?: string;
  /** External search query from Input component */
  searchQuery?: string;
  /** Placeholder text for search */
  placeholder?: string;
  /** Disabled state */
  disabled?: boolean;
  /** Loading state */
  loading?: boolean;
  /** Size variant */
  size?: ComboboxSize;
  /** Custom class name */
  className?: string;
  /** Custom background class name */
  backgroundClassName?: string;
  /** Custom border class name */
  borderClassName?: string;
  /** Custom item hover class name */
  itemHoverClassName?: string;
  /** Change handler */
  onChange?: (value: string, option: ComboboxOption) => void;
  /** Search handler for async options */
  onSearch?: (query: string) => void;
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
  /** Max height of options list */
  maxHeight?: string;
}
