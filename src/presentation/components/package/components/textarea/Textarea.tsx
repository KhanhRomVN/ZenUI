import React, { useState, useRef, useEffect } from "react";
import { TextareaProps } from "./Textarea.types";
import {
  getTextareaBaseStyles,
  getFocusStyles,
  getHoverStyles,
  getCountColor,
} from "./Textarea.utils";
import { cn } from "../../../../../shared/utils/cn";

const Textarea: React.FC<TextareaProps> = ({
  value = "",
  onChange,
  label,
  placeholder,
  error,
  helperText,
  maxLength,
  showCount = false,
  autoResize = false,
  minHeight = "80px",
  maxHeight = "300px",
  rows = 4,
  disabled = false,
  readOnly = false,
  required = false,
  className = "",
  resize = "vertical",
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;

    // Enforce maxLength if specified
    if (maxLength && newValue.length > maxLength) {
      return;
    }

    if (onChange) {
      onChange(newValue);
    }

    // Auto resize
    if (autoResize && textareaRef.current) {
      adjustHeight();
    }
  };

  const adjustHeight = () => {
    const textarea = textareaRef.current;
    if (!textarea) return;

    // Reset height to auto to get the correct scrollHeight
    textarea.style.height = "auto";

    // Calculate new height
    const newHeight = Math.min(
      Math.max(textarea.scrollHeight, parseInt(minHeight)),
      parseInt(maxHeight)
    );

    textarea.style.height = `${newHeight}px`;
  };

  // Adjust height on mount and when value changes
  useEffect(() => {
    if (autoResize) {
      adjustHeight();
    }
  }, [value, autoResize]);

  const baseStyles = getTextareaBaseStyles(!!error, disabled, readOnly, resize);

  const currentStyles = {
    ...baseStyles,
    ...(isFocused ? getFocusStyles(!!error) : {}),
    ...(isHovered && !isFocused ? getHoverStyles(!!error, disabled) : {}),
    ...(autoResize
      ? {
          minHeight,
          maxHeight,
          overflow: "auto",
        }
      : {}),
  };

  const characterCount = value.length;
  const showCharCount = showCount || !!maxLength;

  return (
    <div className={`textarea-container ${className}`.trim()}>
      {/* Label */}
      {label && (
        <label className="block mb-1.5 text-sm font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}

      {/* Textarea */}
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        placeholder={placeholder}
        disabled={disabled}
        readOnly={readOnly}
        required={required}
        rows={autoResize ? undefined : rows}
        style={currentStyles}
        {...props}
      />

      {/* Footer: Helper text and character count */}
      {(helperText || error || showCharCount) && (
        <div className="flex justify-between items-center mt-1.5 gap-2">
          {/* Helper text or error */}
          <div className="flex-1">
            {error ? (
              <p className="m-0 text-xs text-red-500">{error}</p>
            ) : helperText ? (
              <p className="m-0 text-xs">{helperText}</p>
            ) : null}
          </div>

          {/* Character count */}
          {showCharCount && (
            <p
              className="m-0 text-xs font-medium whitespace-nowrap"
              style={{
                color: getCountColor(characterCount, maxLength),
              }}
            >
              {characterCount}
              {maxLength && `/${maxLength}`}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default Textarea;
