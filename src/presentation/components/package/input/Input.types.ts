import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

/**
 * Kích thước input (percentage scale)
 */
export type InputSize = number;

/**
 * Input type variants
 */
export type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "tel"
  | "url"
  | "search"
  | "dropdown_selector"
  | "combobox"
  | "calendar"
  | "multi_text";

/**
 * Helper box item for input validation hints
 */
export interface HelperBoxItem {
  id: string;
  label: string;
  isValid?: boolean;
}

/**
 * Icon type
 */
export type InputIcon = LucideIcon | ReactNode;

/**
 * Props chính của Input component
 */
export interface InputProps {
  /** Kích thước input */
  size?: InputSize;

  /** Loại input */
  type?: InputType;

  /** Placeholder */
  placeholder?: string;

  /** Giá trị */
  value?: string;

  /** Trạng thái disabled */
  disabled?: boolean;

  /** Trạng thái loading */
  loading?: boolean;

  /** Icon bên trái */
  leftIcon?: InputIcon;

  /** Icon hoặc danh sách icons bên phải */
  rightIcon?: InputIcon | InputIcon[];

  /** Custom class name */
  className?: string;

  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;

  /** Helper box items for validation hints */
  helperBox?: HelperBoxItem[];

  /** Dropdown selector options (for dropdown_selector type) */
  dropdownOptions?: Array<{ value: string; label: string }>;

  /** Combobox options (for combobox type) */
  comboboxOptions?: Array<{
    value: string;
    label: string;
    disabled?: boolean;
    icon?: React.ReactNode;
  }>;

  /** Combobox empty message */
  comboboxEmptyMessage?: string;

  /** Combobox creatable */
  comboboxCreatable?: boolean;

  /** Combobox create message */
  comboboxCreateMessage?: string;

  /** Combobox create handler */
  onComboboxCreate?: (value: string) => void;

  /** Date picker props (for calendar type) */
  datePickerProps?: {
    mode?: "date" | "time" | "datetime";
    dateFormat?: string;
    timeFormat?: string;
    minDate?: Date;
    maxDate?: Date;
    showTimePicker?: boolean;
  };

  /** Multi text separator (for multi_text type) */
  multiTextSeparator?: string;

  /** Multi text values array (for multi_text type) */
  multiTextValues?: string[];

  /** Multi text change handler */
  onMultiTextChange?: (values: string[]) => void;

  /** Các props HTML input khác */
  [key: string]: any;
}

/**
 * Interface cho input size configuration
 */
export interface InputSizeConfig {
  /** Chiều cao */
  height: string;

  /** Padding horizontal */
  paddingX: string;

  /** Padding vertical */
  paddingY: string;

  /** Font size */
  fontSize: string;

  /** Border radius */
  borderRadius: string;
}
