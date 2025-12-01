import React, { useState, useRef, useEffect, useCallback } from "react";
import { X, Search, Loader2, Plus, Check } from "lucide-react";
import { cn } from "../../../../shared/utils/cn";
import { ComboboxProps, ComboboxOption } from "./Combobox.types";
import { getComboboxSizeStyles, filterOptions } from "./Combobox.utils";

const Combobox: React.FC<ComboboxProps> = ({
  options,
  value,
  searchQuery = "",
  placeholder = "Search...",
  disabled = false,
  loading = false,
  size = "md",
  className = "",
  backgroundClassName = "",
  borderClassName = "",
  itemHoverClassName = "",
  onChange,
  onSearch,
  emptyMessage = "No options found",
  searchable = true,
  creatable = false,
  creatableMessage = 'Create "%s"',
  onCreate,
  renderOption,
  maxHeight = "240px",
}) => {
  const [highlightedIndex, setHighlightedIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<ComboboxOption | null>(
    options.find((opt) => opt.value === value) || null
  );

  const listboxRef = useRef<HTMLUListElement>(null);

  // Update selected option when value prop changes
  useEffect(() => {
    if (value !== undefined) {
      const option = options.find((opt) => opt.value === value);
      setSelectedOption(option || null);
    }
  }, [value, options]);

  // Filter options based on search
  const filteredOptions = filterOptions(options, searchQuery, searchable);

  // Check if we should show create option
  const showCreateOption =
    creatable &&
    searchQuery.trim() !== "" &&
    !filteredOptions.some(
      (opt) => opt.label.toLowerCase() === searchQuery.toLowerCase()
    );

  // Handle option selection
  const handleSelect = useCallback(
    (option: ComboboxOption) => {
      if (option.disabled) return;

      setSelectedOption(option);
      setHighlightedIndex(0);

      if (onChange) {
        onChange(option.value, option);
      }
    },
    [onChange]
  );

  // Handle creating new option
  const handleCreate = useCallback(() => {
    const newValue = searchQuery.trim();
    if (!newValue) return;

    const newOption: ComboboxOption = {
      value: newValue,
      label: newValue,
    };

    setSelectedOption(newOption);
    setHighlightedIndex(0);

    if (onCreate) {
      onCreate(newValue);
    }

    if (onChange) {
      onChange(newValue, newOption);
    }
  }, [searchQuery, onChange, onCreate]);

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
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
    }
  };

  // Scroll highlighted option into view
  useEffect(() => {
    if (listboxRef.current) {
      const highlightedElement = listboxRef.current.children[
        highlightedIndex
      ] as HTMLElement;
      if (highlightedElement) {
        highlightedElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [highlightedIndex]);

  const sizeStyles = getComboboxSizeStyles(size);

  return (
    <div
      className={cn(
        "w-full rounded-lg shadow-lg",
        backgroundClassName || "bg-white dark:bg-gray-800",
        borderClassName || "border border-gray-200 dark:border-gray-700",
        className
      )}
    >
      {/* Options List */}
      <ul
        ref={listboxRef}
        className="py-1 overflow-auto"
        style={{ maxHeight }}
        role="listbox"
      >
        {filteredOptions.length === 0 && !showCreateOption ? (
          <li className="px-4 py-2 text-gray-500 text-sm">{emptyMessage}</li>
        ) : (
          <>
            {filteredOptions.map((option, index) => (
              <li
                key={option.value}
                role="option"
                aria-selected={selectedOption?.value === option.value}
                className={cn(
                  "px-4 py-2 cursor-pointer transition-colors flex items-center justify-between",
                  index === highlightedIndex &&
                    (itemHoverClassName || "bg-gray-100 dark:bg-gray-700"),
                  selectedOption?.value === option.value &&
                    "bg-blue-50 dark:bg-blue-900/20",
                  option.disabled
                    ? "opacity-50 cursor-not-allowed"
                    : `hover:${
                        itemHoverClassName || "bg-gray-100 dark:bg-gray-700"
                      }`
                )}
                onClick={() => !option.disabled && handleSelect(option)}
                onMouseEnter={() =>
                  !option.disabled && setHighlightedIndex(index)
                }
              >
                <div className="flex items-center gap-2">
                  {option.icon && (
                    <span className="flex-shrink-0">{option.icon}</span>
                  )}
                  {renderOption ? (
                    renderOption(option)
                  ) : (
                    <span
                      className={
                        selectedOption?.value === option.value
                          ? "text-blue-600 font-medium"
                          : ""
                      }
                    >
                      {option.label}
                    </span>
                  )}
                </div>
                {selectedOption?.value === option.value && (
                  <Check
                    size={sizeStyles.iconSize}
                    className="text-blue-600 flex-shrink-0"
                  />
                )}
              </li>
            ))}
            {showCreateOption && (
              <li
                role="option"
                className={cn(
                  "px-4 py-2 cursor-pointer transition-colors flex items-center gap-2",
                  "border-t",
                  borderClassName || "border-gray-200 dark:border-gray-700",
                  highlightedIndex === filteredOptions.length &&
                    (itemHoverClassName || "bg-gray-100 dark:bg-gray-700"),
                  itemHoverClassName
                    ? `hover:${itemHoverClassName}`
                    : "hover:bg-gray-100 dark:bg-gray-700"
                )}
                onClick={handleCreate}
                onMouseEnter={() => setHighlightedIndex(filteredOptions.length)}
              >
                <Plus
                  size={sizeStyles.iconSize}
                  className="flex-shrink-0 text-blue-600"
                />
                <span className="text-blue-600">
                  {creatableMessage.replace("%s", searchQuery)}
                </span>
              </li>
            )}
          </>
        )}
      </ul>
    </div>
  );
};

export default Combobox;
