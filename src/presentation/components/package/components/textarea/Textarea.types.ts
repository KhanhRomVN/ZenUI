import { TextareaHTMLAttributes } from "react";

export interface TextareaProps
  extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "onChange"> {
  /**
   * Current value of the textarea
   */
  value?: string;

  /**
   * Callback when value changes
   */
  onChange?: (value: string) => void;

  /**
   * Label for the textarea
   */
  label?: string;

  /**
   * Placeholder text
   */
  placeholder?: string;

  /**
   * Error message to display
   */
  error?: string;

  /**
   * Helper text to display below textarea
   */
  helperText?: string;

  /**
   * Maximum character length
   */
  maxLength?: number;

  /**
   * Show character count
   * @default false
   */
  showCount?: boolean;

  /**
   * Auto resize based on content
   * @default false
   */
  autoResize?: boolean;

  /**
   * Minimum height when auto-resize is enabled
   * @default "80px"
   */
  minHeight?: string;

  /**
   * Maximum height when auto-resize is enabled
   * @default "300px"
   */
  maxHeight?: string;

  /**
   * Number of rows
   * @default 4
   */
  rows?: number;

  /**
   * Disabled state
   * @default false
   */
  disabled?: boolean;

  /**
   * Read-only state
   * @default false
   */
  readOnly?: boolean;

  /**
   * Required field
   * @default false
   */
  required?: boolean;

  /**
   * Custom CSS class
   */
  className?: string;

  /**
   * Resize behavior
   * @default "vertical"
   */
  resize?: "none" | "both" | "horizontal" | "vertical";
}
