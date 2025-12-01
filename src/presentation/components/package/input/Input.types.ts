import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

export type InputSize = "sm" | "md" | "lg" | "xl";
export type InputType =
  | "text"
  | "password"
  | "email"
  | "number"
  | "tel"
  | "url"
  | "search"
  | "combobox"
  | "calendar";

export type InputIcon = LucideIcon | ReactNode;

export interface InputProps {
  /** interaction */
  /** state */
  /** status */
  /** content */
  /** validation */
  /** other */
  size?: InputSize;
  type?: InputType;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  loading?: boolean;
  leftIcon?: InputIcon;
  rightIcon?: InputIcon | InputIcon[];
  className?: string;
  popoverOpen?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  popoverContent?: ReactNode;
  onPopoverOpenChange?: (open: boolean) => void;
  [key: string]: any;
}
