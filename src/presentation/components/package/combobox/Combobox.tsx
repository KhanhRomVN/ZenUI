import React, { useState, useRef, useEffect, useCallback } from "react";
import { ChevronDown, X, Search, Loader2, Plus } from "lucide-react";
import {
  ComboboxProps,
  ComboboxOption,
  ComboboxContextType,
} from "./Combobox.types";
import {
  getComboboxSizeStyles,
  getComboboxVariantStyles,
  filterOptions,
  getOptionFromValue,
  generateId,
} from "./Combobox.utils";

// Create context for combobox state
const ComboboxContext = React.createContext<ComboboxContextType | null>(null);

const Combobox: React.FC<ComboboxProps> = ({
  options,
  value,
  defaultValue,
  placeholder = "Select an option",
  disabled = false,
  loading = false,
  error = false,
  errorMessage,
  success = false,
  size = "md",
  variant = "outline",
  className = "",
  onChange,
  onSearch,
  clearable = true,
  emptyMessage = "No options found",
  searchable = true,
  creatable = false,
  creatableMessage = 'Create "%s"',
  onCreate,
  customItems,
  renderOption,
  renderSelected,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<ComboboxOption | null>(
    getOptionFromValue(options, defaultValue || value) || null
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const listboxRef = useRef<HTMLUListElement>(null);
  const comboboxId = generateId("combobox");

  // Update selected option when value prop changes
  useEffect(() => {
    if (value !== undefined) {
      const option = getOptionFromValue(options, value);
      setSelectedOption(option);
      setInputValue(option?.label || "");
    }
  }, [value, options]);

  // Merge options with customItems
  const mergedOptions = React.useMemo(() => {
    if (customItems && customItems.length > 0) {
      return [
        ...options,
        ...customItems.map((item) => ({
          value: item.value,
          label: item.value,
          content: item.content,
          disabled: item.disabled,
        })),
      ];
    }
    return options;
  }, [options, customItems]);

  // Filter options based on search
  const filteredOptions = filterOptions(mergedOptions, inputValue, searchable);

  // Check if we should show create option
  const showCreateOption =
    creatable &&
    inputValue.trim() !== "" &&
    !filteredOptions.some(
      (opt) => opt.label.toLowerCase() === inputValue.toLowerCase()
    );

  // Handle option selection
  const handleSelect = useCallback(
    (option: ComboboxOption) => {
      if (option.disabled) return;

      setSelectedOption(option);
      setInputValue(option.label);
      setIsOpen(false);
      setHighlightedIndex(0);

      if (onChange) {
        onChange(option.value, option);
      }
    },
    [onChange]
  );

  // Handle creating new option
  const handleCreate = useCallback(() => {
    const newValue = inputValue.trim();
    if (!newValue) return;

    const newOption: ComboboxOption = {
      value: newValue,
      label: newValue,
    };

    setSelectedOption(newOption);
    setInputValue(newValue);
    setIsOpen(false);
    setHighlightedIndex(0);

    if (onCreate) {
      onCreate(newValue);
    }

    if (onChange) {
      onChange(newValue, newOption);
    }
  }, [inputValue, onChange, onCreate]);

  // Handle input change
  const handleInputChange = useCallback(
    (value: string) => {
      setInputValue(value);
      setIsOpen(true);
      setHighlightedIndex(0);

      if (onSearch) {
        onSearch(value);
      }
    },
    [onSearch]
  );

  // Handle clear selection
  const handleClear = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      setSelectedOption(null);
      setInputValue("");
      setIsOpen(false);

      if (onChange) {
        onChange("", {} as ComboboxOption);
      }

      if (inputRef.current) {
        inputRef.current.focus();
      }
    },
    [onChange]
  );

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;

    const maxIndex = filteredOptions.length + (showCreateOption ? 0 : -1);

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setHighlightedIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
        break;
      case "Enter":
        e.preventDefault();
        if (showCreateOption && highlightedIndex === filteredOptions.length) {
          handleCreate();
        } else if (filteredOptions[highlightedIndex]) {
          handleSelect(filteredOptions[highlightedIndex]);
        }
        break;
      case "Escape":
        e.preventDefault();
        setIsOpen(false);
        setHighlightedIndex(0);
        break;
    }
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node) &&
        listboxRef.current &&
        !listboxRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setHighlightedIndex(0);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Scroll highlighted option into view
  useEffect(() => {
    if (listboxRef.current && isOpen) {
      const highlightedElement = listboxRef.current.children[
        highlightedIndex
      ] as HTMLElement;
      if (highlightedElement) {
        highlightedElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [highlightedIndex, isOpen]);

  const sizeStyles = getComboboxSizeStyles(size);
  const variantStyles = getComboboxVariantStyles(variant);

  const contextValue: ComboboxContextType = {
    isOpen,
    selectedOption,
    inputValue,
    filteredOptions,
    highlightedIndex,
    setInputValue,
    setSelectedOption,
    setIsOpen,
    setHighlightedIndex,
    handleSelect,
    handleInputChange,
    size,
    variant,
    disabled,
    loading,
    searchable,
    creatable,
  };

  return (
    <ComboboxContext.Provider value={contextValue}>
      <div className={`relative ${className}`}>
        {/* Combobox Input */}
        <div
          className={`
            flex items-center w-full rounded-lg transition-all duration-200
            ${variantStyles.background}
            ${variantStyles.border}
            ${!disabled && variantStyles.hover}
            ${isOpen && variantStyles.focus}
            ${
              error
                ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200"
                : ""
            }
            ${success ? "border-green-500 focus:border-green-500" : ""}
            ${disabled ? "opacity-50 cursor-not-allowed" : ""}
          `}
          style={{
            height: sizeStyles.height,
            padding: sizeStyles.padding,
          }}
        >
          {/* Search Icon */}
          {searchable && (
            <Search
              size={sizeStyles.iconSize}
              className="text-text-secondary mr-2 flex-shrink-0"
            />
          )}

          {/* Input Field */}
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            placeholder={placeholder}
            disabled={disabled || loading}
            onChange={(e) => handleInputChange(e.target.value)}
            onKeyDown={handleKeyDown}
            onFocus={() => !disabled && !loading && setIsOpen(true)}
            onClick={() => !disabled && !loading && setIsOpen(true)}
            className={`
              flex-1 bg-transparent border-none outline-none
              placeholder-text-tertiary text-text-primary
              ${disabled ? "cursor-not-allowed" : ""}
            `}
            style={{ fontSize: sizeStyles.fontSize }}
            {...props}
          />

          {/* Loading Spinner */}
          {loading && (
            <Loader2
              size={sizeStyles.iconSize}
              className="animate-spin text-text-secondary ml-2 flex-shrink-0"
            />
          )}

          {/* Clear Button */}
          {clearable && selectedOption && !disabled && !loading && (
            <button
              type="button"
              onClick={handleClear}
              className="ml-2 flex-shrink-0 text-text-secondary hover:text-text-primary"
            >
              <X size={sizeStyles.iconSize} />
            </button>
          )}

          {/* Dropdown Arrow */}
          <ChevronDown
            size={sizeStyles.iconSize}
            className={`ml-2 flex-shrink-0 text-text-secondary transition-transform ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Error Message */}
        {error && errorMessage && (
          <p className="text-red-600 text-xs mt-1">{errorMessage}</p>
        )}

        {/* Dropdown Options */}
        {isOpen && !disabled && (
          <ul
            ref={listboxRef}
            className="
              absolute z-50 w-full mt-1 max-h-60 overflow-auto
              bg-card-background border border-border-default rounded-lg
              shadow-lg py-1
            "
            role="listbox"
            onMouseDown={(e) => e.preventDefault()}
          >
            {filteredOptions.length === 0 && !showCreateOption ? (
              <li className="px-4 py-2 text-text-secondary text-sm">
                {emptyMessage}
              </li>
            ) : (
              <>
                {filteredOptions.map((option, index) => (
                  <li
                    key={option.value}
                    role="option"
                    aria-selected={selectedOption?.value === option.value}
                    className={`
                      px-4 py-2 cursor-pointer transition-colors flex items-center
                      ${
                        index === highlightedIndex
                          ? "bg-sidebar-item-hover"
                          : ""
                      }
                      ${
                        selectedOption?.value === option.value
                          ? "bg-blue-50 text-blue-600"
                          : ""
                      }
                      ${
                        option.disabled
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-sidebar-item-hover"
                      }
                    `}
                    onClick={() => !option.disabled && handleSelect(option)}
                    onMouseEnter={() =>
                      !option.disabled && setHighlightedIndex(index)
                    }
                  >
                    {option.content ? (
                      option.content
                    ) : (
                      <>
                        {option.icon && (
                          <span className="mr-2 flex-shrink-0">
                            {option.icon}
                          </span>
                        )}
                        {renderOption ? renderOption(option) : option.label}
                      </>
                    )}
                  </li>
                ))}
                {showCreateOption && (
                  <li
                    role="option"
                    className={`
                      px-4 py-2 cursor-pointer transition-colors flex items-center
                      border-t border-border-default
                      ${
                        highlightedIndex === filteredOptions.length
                          ? "bg-sidebar-item-hover"
                          : ""
                      }
                      hover:bg-sidebar-item-hover
                    `}
                    onClick={handleCreate}
                    onMouseEnter={() =>
                      setHighlightedIndex(filteredOptions.length)
                    }
                  >
                    <Plus
                      size={sizeStyles.iconSize}
                      className="mr-2 flex-shrink-0 text-blue-600"
                    />
                    <span className="text-blue-600">
                      {creatableMessage.replace("%s", inputValue)}
                    </span>
                  </li>
                )}
              </>
            )}
          </ul>
        )}
      </div>
    </ComboboxContext.Provider>
  );
};

export default Combobox;
