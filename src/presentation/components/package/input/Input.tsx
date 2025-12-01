import React, { useState, useRef, useEffect } from "react";
import { LucideIcon, Loader2 } from "lucide-react";
import { InputProps } from "./Input.types";
import {
  getInputSizeClasses,
  getIconSize,
  shouldShowLeftIcon,
  shouldShowRightIcons,
  normalizeRightIcons,
} from "./Input.utils";
import { cn } from "../../../../shared/utils/cn";

const Input: React.FC<InputProps> = ({
  size = "md",
  type = "text",
  placeholder,
  value,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  className = "",
  popoverOpen: controlledPopoverOpen,
  onChange,
  popoverContent,
  onPopoverOpenChange,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [internalPopoverOpen, setInternalPopoverOpen] = useState(false);
  const popoverOpen =
    controlledPopoverOpen !== undefined
      ? controlledPopoverOpen
      : internalPopoverOpen;

  const inputRef = useRef<HTMLInputElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const isDisabled = disabled || loading;
  const showLeftIcon = shouldShowLeftIcon(leftIcon, loading);
  const showRightIcons = shouldShowRightIcons(rightIcon);
  const rightIcons = normalizeRightIcons(rightIcon);
  const sizeClasses = getInputSizeClasses(size);
  const iconSize = getIconSize(size);

  // Close popover when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedOutsideInput =
        inputRef.current && !inputRef.current.contains(target);
      const clickedOutsidePopover =
        popoverRef.current && !popoverRef.current.contains(target);

      if (clickedOutsideInput && clickedOutsidePopover) {
        if (controlledPopoverOpen === undefined) {
          setInternalPopoverOpen(false);
        }
        if (onPopoverOpenChange) {
          onPopoverOpenChange(false);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onPopoverOpenChange]);

  // Notify parent when popover state changes
  useEffect(() => {
    if (onPopoverOpenChange) {
      onPopoverOpenChange(popoverOpen);
    }
  }, [popoverOpen, onPopoverOpenChange]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled && onChange) {
      onChange(e);
    }
  };

  // Handle popover open
  const handlePopoverOpen = () => {
    if (
      !disabled &&
      !loading &&
      (type === "combobox" || type === "calendar") &&
      !popoverOpen
    ) {
      if (controlledPopoverOpen === undefined) {
        setInternalPopoverOpen(true);
      }
      if (onPopoverOpenChange) {
        onPopoverOpenChange(true);
      }
    }
  };

  const renderLeftIcon = () => {
    if (loading) {
      return <Loader2 size={iconSize} className="animate-spin" />;
    }

    if (!leftIcon) return null;

    if (typeof leftIcon === "function") {
      const IconComponent = leftIcon as LucideIcon;
      return <IconComponent size={iconSize} />;
    }

    return <span className="flex items-center justify-center">{leftIcon}</span>;
  };

  const renderRightIcons = () => {
    return rightIcons.map((icon, index) => {
      if (typeof icon === "function") {
        const IconComponent = icon as LucideIcon;
        return (
          <IconComponent
            key={index}
            size={iconSize}
            className="cursor-pointer"
          />
        );
      }
      return (
        <span
          key={index}
          className="cursor-pointer flex items-center justify-center"
        >
          {icon}
        </span>
      );
    });
  };

  // Render different input types
  const renderInputContent = () => {
    if (type === "combobox" || type === "calendar") {
      return (
        <input
          ref={inputRef}
          type="text"
          value={value}
          placeholder={placeholder}
          disabled={isDisabled}
          readOnly={type === "calendar"}
          onChange={type === "combobox" ? handleChange : undefined}
          onFocus={() => {
            setIsFocused(true);
            handlePopoverOpen();
          }}
          onBlur={() => setIsFocused(false)}
          className={cn(
            "flex-1 bg-transparent border-none outline-none",
            type === "calendar" && "cursor-pointer"
          )}
          {...props}
        />
      );
    }

    return (
      <input
        ref={inputRef}
        type={type}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="flex-1 bg-transparent border-none outline-none"
        {...props}
      />
    );
  };

  return (
    <div className="w-full relative">
      <div
        className={cn(
          "flex items-center w-full transition-all duration-200 rounded-md",
          "border bg-transparent",
          "placeholder:text-gray-400",
          sizeClasses,
          isDisabled && "opacity-50 cursor-not-allowed pointer-events-none",
          type === "calendar" && !isDisabled && "cursor-pointer",
          className
        )}
        onFocus={(e) => {
          if (e.target === e.currentTarget) return;
          setIsFocused(true);
        }}
        onBlur={(e) => {
          if (e.target === e.currentTarget) return;
          setIsFocused(false);
        }}
      >
        {/* Left Icon */}
        {showLeftIcon && (
          <div className="flex-shrink-0 mr-2">{renderLeftIcon()}</div>
        )}

        {/* Input Content */}
        <div className="flex-1 flex items-center">{renderInputContent()}</div>

        {/* Right Icons */}
        {showRightIcons && (
          <div className="flex items-center gap-2 ml-2 flex-shrink-0">
            {renderRightIcons()}
          </div>
        )}
      </div>

      {/* Popover for combobox/calendar */}
      {(type === "combobox" || type === "calendar") &&
        popoverOpen &&
        !isDisabled &&
        popoverContent && (
          <div
            ref={popoverRef}
            className="absolute z-50 w-full top-[calc(100%+4px)] left-0"
          >
            {popoverContent}
          </div>
        )}
    </div>
  );
};

export default Input;
