import React, { useState, useRef, useEffect } from "react";
import {
  LucideIcon,
  Loader2,
  X,
  ChevronDown,
  Calendar,
  Clock,
  Plus,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { InputProps } from "./Input.types";
import {
  getInputSizeStyles,
  getIconSize,
  shouldShowLeftIcon,
  shouldShowRightIcons,
  normalizeRightIcons,
  getBaseInputStyles,
  parseMultiTextValues,
  formatMultiTextValues,
} from "./Input.utils";

const Input: React.FC<InputProps> = ({
  size = 100,
  type = "text",
  placeholder,
  value,
  disabled = false,
  loading = false,
  leftIcon,
  rightIcon,
  className = "",
  onChange,
  helperBox,
  dropdownOptions = [],
  comboboxOptions = [],
  comboboxEmptyMessage = "No options found",
  comboboxCreatable = false,
  comboboxCreateMessage = 'Create "%s"',
  onComboboxCreate,
  datePickerProps,
  multiTextSeparator = ",",
  multiTextValues = [],
  onMultiTextChange,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedDropdownValue, setSelectedDropdownValue] = useState("");
  const [comboboxOpen, setComboboxOpen] = useState(false);
  const [comboboxHighlightIndex, setComboboxHighlightIndex] = useState(0);
  const [comboboxInputValue, setComboboxInputValue] = useState(value || "");
  const [calendarOpen, setCalendarOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [calendarView, setCalendarView] = useState<"calendar" | "time">(
    "calendar"
  );
  const [multiTextItems, setMultiTextItems] = useState<string[]>(
    multiTextValues.length > 0 ? multiTextValues : []
  );

  const inputRef = useRef<HTMLInputElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const comboboxListRef = useRef<HTMLUListElement>(null);
  const calendarPopupRef = useRef<HTMLDivElement>(null);

  const isDisabled = disabled || loading;
  const showLeftIcon = shouldShowLeftIcon(leftIcon, loading);
  const showRightIcons = shouldShowRightIcons(rightIcon);
  const rightIcons = normalizeRightIcons(rightIcon);
  const sizeStyles = getInputSizeStyles(size);
  const baseStyles = getBaseInputStyles(isFocused, isDisabled);
  const iconSize = getIconSize(size);

  // Close combobox/calendar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;
      const clickedOutsideInput =
        inputRef.current && !inputRef.current.contains(target);
      const clickedOutsideComboboxList =
        comboboxListRef.current && !comboboxListRef.current.contains(target);
      const clickedOutsideCalendarPopup =
        calendarPopupRef.current && !calendarPopupRef.current.contains(target);

      // Close combobox if clicked outside input and combobox list
      if (clickedOutsideInput && clickedOutsideComboboxList) {
        setComboboxOpen(false);
      }

      // Close calendar if clicked outside input and calendar popup
      if (clickedOutsideInput && clickedOutsideCalendarPopup) {
        setCalendarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Sync combobox input value with value prop
  useEffect(() => {
    if (type === "combobox" && value !== undefined) {
      setComboboxInputValue(value);
    }
  }, [value, type]);

  // Scroll highlighted option into view for combobox
  useEffect(() => {
    if (comboboxListRef.current && comboboxOpen && type === "combobox") {
      const highlightedElement = comboboxListRef.current.children[
        comboboxHighlightIndex
      ] as HTMLElement;
      if (highlightedElement) {
        highlightedElement.scrollIntoView({ block: "nearest" });
      }
    }
  }, [comboboxHighlightIndex, comboboxOpen, type]);

  // Handle dropdown selector
  const handleDropdownSelect = (option: { value: string; label: string }) => {
    setSelectedDropdownValue(option.value);
    setDropdownOpen(false);
    if (onChange) {
      onChange({
        target: { value: option.value },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  // Handle multi-text input
  const handleMultiTextKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === multiTextSeparator || e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      const currentValue = (e.target as HTMLInputElement).value.trim();
      if (currentValue && !multiTextItems.includes(currentValue)) {
        const newItems = [...multiTextItems, currentValue];
        setMultiTextItems(newItems);
        if (onMultiTextChange) {
          onMultiTextChange(newItems);
        }
        (e.target as HTMLInputElement).value = "";
      }
    } else if (
      e.key === "Backspace" &&
      (e.target as HTMLInputElement).value === ""
    ) {
      const newItems = multiTextItems.slice(0, -1);
      setMultiTextItems(newItems);
      if (onMultiTextChange) {
        onMultiTextChange(newItems);
      }
    }
  };

  const handleRemoveMultiTextItem = (index: number) => {
    const newItems = multiTextItems.filter((_, i) => i !== index);
    setMultiTextItems(newItems);
    if (onMultiTextChange) {
      onMultiTextChange(newItems);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled && onChange) {
      onChange(e);
    }
  };

  // Handle combobox keyboard navigation
  const handleComboboxKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (type !== "combobox" || !comboboxOpen) return;

    const filteredOptions = comboboxOptions.filter((opt) =>
      opt.label.toLowerCase().includes(comboboxInputValue.toLowerCase())
    );

    const showCreateOption =
      comboboxCreatable &&
      comboboxInputValue.trim() !== "" &&
      !filteredOptions.some(
        (opt) => opt.label.toLowerCase() === comboboxInputValue.toLowerCase()
      );

    const maxIndex = filteredOptions.length + (showCreateOption ? 0 : -1);

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        setComboboxHighlightIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
        break;
      case "ArrowUp":
        e.preventDefault();
        setComboboxHighlightIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
        break;
      case "Enter":
        e.preventDefault();
        if (
          showCreateOption &&
          comboboxHighlightIndex === filteredOptions.length
        ) {
          handleComboboxCreate();
        } else if (filteredOptions[comboboxHighlightIndex]) {
          const selected = filteredOptions[comboboxHighlightIndex];
          if (!selected.disabled) {
            handleComboboxSelect(selected);
          }
        }
        break;
      case "Escape":
        e.preventDefault();
        setComboboxOpen(false);
        setComboboxHighlightIndex(0);
        break;
    }
  };

  // Handle combobox select
  const handleComboboxSelect = (option: {
    value: string;
    label: string;
    disabled?: boolean;
  }) => {
    if (option.disabled) return;

    setComboboxInputValue(option.label);
    setComboboxOpen(false);
    setComboboxHighlightIndex(0);

    if (onChange) {
      onChange({
        target: { value: option.value },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  // Handle combobox create
  const handleComboboxCreate = () => {
    const newValue = comboboxInputValue.trim();
    if (!newValue) return;

    setComboboxOpen(false);
    setComboboxHighlightIndex(0);

    if (onComboboxCreate) {
      onComboboxCreate(newValue);
    }

    if (onChange) {
      onChange({
        target: { value: newValue },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  // Format calendar value for display
  const formatCalendarValue = (
    date: Date,
    mode: "date" | "time" | "datetime"
  ): string => {
    const dateFormat = datePickerProps?.dateFormat || "MM/dd/yyyy";
    const timeFormat = datePickerProps?.timeFormat || "HH:mm";

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    if (mode === "date") {
      return dateFormat
        .replace("dd", day)
        .replace("MM", month)
        .replace("yyyy", year.toString());
    } else if (mode === "time") {
      return timeFormat.replace("HH", hours).replace("mm", minutes);
    } else {
      const formattedDate = dateFormat
        .replace("dd", day)
        .replace("MM", month)
        .replace("yyyy", year.toString());
      const formattedTime = timeFormat
        .replace("HH", hours)
        .replace("mm", minutes);
      return `${formattedDate} ${formattedTime}`;
    }
  };

  // Generate calendar days
  const generateCalendarDays = () => {
    const days: Array<{
      date: Date;
      isCurrentMonth: boolean;
      isToday: boolean;
      isSelected: boolean;
      isDisabled: boolean;
    }> = [];

    const firstDay = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      1
    );
    const lastDay = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth() + 1,
      0
    );

    // Days from previous month
    const prevMonthLastDay = new Date(
      currentMonth.getFullYear(),
      currentMonth.getMonth(),
      0
    ).getDate();
    const firstDayOfWeek = firstDay.getDay();

    for (let i = firstDayOfWeek - 1; i >= 0; i--) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() - 1,
        prevMonthLastDay - i
      );
      days.push({
        date,
        isCurrentMonth: false,
        isToday: isToday(date),
        isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
        isDisabled: isDateDisabled(date),
      });
    }

    // Current month days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth(),
        i
      );
      days.push({
        date,
        isCurrentMonth: true,
        isToday: isToday(date),
        isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
        isDisabled: isDateDisabled(date),
      });
    }

    // Days from next month
    const totalCells = 42;
    const nextMonthDays = totalCells - days.length;
    for (let i = 1; i <= nextMonthDays; i++) {
      const date = new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + 1,
        i
      );
      days.push({
        date,
        isCurrentMonth: false,
        isToday: isToday(date),
        isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
        isDisabled: isDateDisabled(date),
      });
    }

    return days;
  };

  // Generate time slots
  const generateTimeSlots = () => {
    const slots: Array<{ hour: number; minute: number; label: string }> = [];
    const interval = 30;

    for (let hour = 0; hour < 24; hour++) {
      for (let minute = 0; minute < 60; minute += interval) {
        const label = `${hour.toString().padStart(2, "0")}:${minute
          .toString()
          .padStart(2, "0")}`;
        slots.push({ hour, minute, label });
      }
    }

    return slots;
  };

  // Check if date is today
  const isToday = (date: Date): boolean => {
    const today = new Date();
    return isSameDay(date, today);
  };

  // Check if two dates are the same day
  const isSameDay = (date1: Date, date2: Date): boolean => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  // Check if date is disabled
  const isDateDisabled = (date: Date): boolean => {
    const minDate = datePickerProps?.minDate;
    const maxDate = datePickerProps?.maxDate;

    if (minDate && date < minDate) return true;
    if (maxDate && date > maxDate) return true;
    return false;
  };

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    let newDate = new Date(date);

    if (selectedDate && datePickerProps?.mode === "datetime") {
      newDate.setHours(selectedDate.getHours());
      newDate.setMinutes(selectedDate.getMinutes());
    }

    setSelectedDate(newDate);

    const mode = datePickerProps?.mode || "datetime";
    if (mode === "date") {
      setCalendarOpen(false);
      if (onChange) {
        onChange({
          target: { value: formatCalendarValue(newDate, mode) },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    } else if (mode === "datetime" && datePickerProps?.showTimePicker) {
      setCalendarView("time");
    } else {
      setCalendarOpen(false);
      if (onChange) {
        onChange({
          target: { value: formatCalendarValue(newDate, mode) },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    }
  };

  // Handle time selection
  const handleTimeSelect = (hour: number, minute: number) => {
    if (selectedDate) {
      const newDate = new Date(selectedDate);
      newDate.setHours(hour, minute, 0, 0);
      setSelectedDate(newDate);
      setCalendarOpen(false);
      setCalendarView("calendar");

      if (onChange) {
        onChange({
          target: {
            value: formatCalendarValue(
              newDate,
              datePickerProps?.mode || "datetime"
            ),
          },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    }
  };

  // Navigate to previous month
  const prevMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1)
    );
  };

  // Navigate to next month
  const nextMonth = () => {
    setCurrentMonth(
      new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1)
    );
  };

  // Render calendar popup
  const renderCalendarPopup = () => {
    const mode = datePickerProps?.mode || "datetime";
    const calendarDays = generateCalendarDays();
    const timeSlots = generateTimeSlots();

    // Time only mode
    if (mode === "time") {
      return (
        <div className="p-4 w-48 max-h-60 overflow-auto">
          <div className="font-semibold text-text-primary mb-3 text-center">
            Select Time
          </div>
          <div className="space-y-1">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                onClick={() => {
                  const newDate = selectedDate || new Date();
                  newDate.setHours(slot.hour, slot.minute, 0, 0);
                  setSelectedDate(newDate);
                  setCalendarOpen(false);
                  if (onChange) {
                    onChange({
                      target: { value: formatCalendarValue(newDate, mode) },
                    } as React.ChangeEvent<HTMLInputElement>);
                  }
                }}
                className={`
                  w-full px-3 py-2 text-sm rounded transition-colors text-left
                  hover:bg-sidebar-item-hover
                  ${
                    selectedDate &&
                    selectedDate.getHours() === slot.hour &&
                    selectedDate.getMinutes() === slot.minute
                      ? "bg-blue-600 text-white"
                      : ""
                  }
                `}
              >
                {slot.label}
              </button>
            ))}
          </div>
        </div>
      );
    }

    // Calendar view
    if (calendarView === "calendar") {
      return (
        <div className="p-4 w-64">
          {/* Calendar Header */}
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={prevMonth}
              className="p-1 hover:bg-sidebar-item-hover rounded"
            >
              <ChevronLeft size={16} />
            </button>
            <div className="font-semibold text-text-primary">
              {currentMonth.toLocaleString("default", { month: "long" })}{" "}
              {currentMonth.getFullYear()}
            </div>
            <button
              onClick={nextMonth}
              className="p-1 hover:bg-sidebar-item-hover rounded"
            >
              <ChevronRight size={16} />
            </button>
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 gap-1 mb-2">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <div
                key={day}
                className="text-center text-xs text-text-secondary font-medium py-1"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-1">
            {calendarDays.map((day, index) => (
              <button
                key={index}
                onClick={() => !day.isDisabled && handleDateSelect(day.date)}
                disabled={day.isDisabled}
                className={`
                  h-8 rounded text-sm transition-colors
                  ${
                    day.isCurrentMonth
                      ? "text-text-primary"
                      : "text-text-secondary"
                  }
                  ${day.isToday ? "bg-blue-100 text-blue-600" : ""}
                  ${day.isSelected ? "bg-blue-600 text-white" : ""}
                  ${
                    !day.isSelected && !day.isToday && day.isCurrentMonth
                      ? "hover:bg-sidebar-item-hover"
                      : ""
                  }
                  ${day.isDisabled ? "opacity-30 cursor-not-allowed" : ""}
                `}
              >
                {day.date.getDate()}
              </button>
            ))}
          </div>

          {/* Time Picker Toggle for DateTime Mode */}
          {mode === "datetime" && datePickerProps?.showTimePicker && (
            <button
              onClick={() => setCalendarView("time")}
              className="w-full mt-3 px-3 py-2 text-sm bg-sidebar-item-hover hover:bg-sidebar-item-focus rounded"
            >
              Select Time
            </button>
          )}
        </div>
      );
    }

    // Time picker view for datetime mode
    if (calendarView === "time") {
      return (
        <div className="p-4 w-48 max-h-60 overflow-auto">
          <div className="font-semibold text-text-primary mb-3 text-center">
            Select Time
          </div>
          <div className="space-y-1">
            {timeSlots.map((slot, index) => (
              <button
                key={index}
                onClick={() => handleTimeSelect(slot.hour, slot.minute)}
                className={`
                  w-full px-3 py-2 text-sm rounded transition-colors text-left
                  hover:bg-sidebar-item-hover
                  ${
                    selectedDate &&
                    selectedDate.getHours() === slot.hour &&
                    selectedDate.getMinutes() === slot.minute
                      ? "bg-blue-600 text-white"
                      : ""
                  }
                `}
              >
                {slot.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setCalendarView("calendar")}
            className="w-full mt-3 px-3 py-2 text-sm bg-sidebar-item-hover hover:bg-sidebar-item-focus rounded"
          >
            Back to Calendar
          </button>
        </div>
      );
    }
  };

  // Handle combobox input change
  const handleComboboxInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newValue = e.target.value;
    setComboboxInputValue(newValue);
    setComboboxOpen(true);
    setComboboxHighlightIndex(0);

    if (onChange) {
      onChange(e);
    }
  };

  const renderLeftIcon = () => {
    if (loading) {
      return (
        <Loader2 size={iconSize} className="animate-spin text-text-secondary" />
      );
    }

    if (!leftIcon) return null;

    if (typeof leftIcon === "function") {
      const IconComponent = leftIcon as LucideIcon;
      return <IconComponent size={iconSize} className="text-text-secondary" />;
    }

    return (
      <span className="text-text-secondary flex items-center justify-center">
        {leftIcon}
      </span>
    );
  };

  const renderRightIcons = () => {
    return rightIcons.map((icon, index) => {
      if (typeof icon === "function") {
        const IconComponent = icon as LucideIcon;
        return (
          <IconComponent
            key={index}
            size={iconSize}
            className="text-text-secondary cursor-pointer hover:text-text-primary transition-colors"
          />
        );
      }
      return (
        <span
          key={index}
          className="text-text-secondary cursor-pointer hover:text-text-primary transition-colors flex items-center justify-center"
        >
          {icon}
        </span>
      );
    });
  };

  // Render different input types
  const renderInputContent = () => {
    switch (type) {
      case "dropdown_selector":
        return (
          <div className="relative w-full">
            <div
              className="flex items-center cursor-pointer"
              onClick={() => !isDisabled && setDropdownOpen(!dropdownOpen)}
            >
              <input
                ref={inputRef}
                type="text"
                value={
                  selectedDropdownValue
                    ? dropdownOptions.find(
                        (opt) => opt.value === selectedDropdownValue
                      )?.label || ""
                    : value || ""
                }
                placeholder={placeholder}
                disabled={isDisabled}
                readOnly
                className="flex-1 bg-transparent border-none outline-none cursor-pointer"
                style={{ fontSize: sizeStyles.fontSize }}
              />
              <ChevronDown
                size={iconSize}
                className={`ml-2 text-text-secondary transition-transform ${
                  dropdownOpen ? "rotate-180" : ""
                }`}
              />
            </div>

            {dropdownOpen && !isDisabled && (
              <div
                ref={dropdownRef}
                className="absolute z-50 w-full mt-1 max-h-60 overflow-auto bg-card-background border border-border-default rounded-lg shadow-lg py-1"
              >
                {dropdownOptions.map((option) => (
                  <div
                    key={option.value}
                    onClick={() => handleDropdownSelect(option)}
                    className="px-4 py-2 cursor-pointer hover:bg-sidebar-item-hover transition-colors"
                  >
                    {option.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        );

      case "combobox":
        return (
          <input
            ref={inputRef}
            type="text"
            value={comboboxInputValue}
            placeholder={placeholder}
            disabled={isDisabled}
            onChange={handleComboboxInputChange}
            onFocus={() => {
              setIsFocused(true);
              setComboboxOpen(true);
            }}
            onBlur={() => {
              setIsFocused(false);
            }}
            onKeyDown={handleComboboxKeyDown}
            className="flex-1 bg-transparent border-none outline-none"
            style={{ fontSize: sizeStyles.fontSize }}
            {...props}
          />
        );

      case "calendar":
        const displayValue = selectedDate
          ? formatCalendarValue(
              selectedDate,
              datePickerProps?.mode || "datetime"
            )
          : "";
        return (
          <input
            ref={inputRef}
            type="text"
            value={displayValue}
            placeholder={placeholder}
            disabled={isDisabled}
            readOnly
            onFocus={() => {
              setIsFocused(true);
              setCalendarOpen(true);
            }}
            onBlur={() => setIsFocused(false)}
            onClick={() => !isDisabled && setCalendarOpen(true)}
            className="flex-1 bg-transparent border-none outline-none cursor-pointer"
            style={{ fontSize: sizeStyles.fontSize }}
            {...props}
          />
        );

      case "multi_text":
        return (
          <div className="flex flex-wrap gap-2 items-center flex-1">
            {multiTextItems.map((item, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm"
              >
                {item}
                <X
                  size={14}
                  className="cursor-pointer hover:text-blue-900"
                  onClick={() => handleRemoveMultiTextItem(index)}
                />
              </span>
            ))}
            <input
              ref={inputRef}
              type="text"
              placeholder={
                multiTextItems.length === 0 ? placeholder : undefined
              }
              disabled={isDisabled}
              onKeyDown={handleMultiTextKeyDown}
              className="flex-1 min-w-[120px] bg-transparent border-none outline-none"
              style={{ fontSize: sizeStyles.fontSize }}
            />
          </div>
        );

      default:
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
            style={{ fontSize: sizeStyles.fontSize }}
            {...props}
          />
        );
    }
  };

  return (
    <div className={`w-full relative ${className}`.trim()}>
      <div
        className="flex items-center w-full rounded-lg transition-all duration-200"
        style={{
          ...sizeStyles,
          ...baseStyles,
          opacity: isDisabled ? 0.6 : 1,
          cursor: isDisabled
            ? "not-allowed"
            : type === "calendar"
            ? "pointer"
            : "text",
        }}
      >
        {/* Left Icon */}
        {showLeftIcon && (
          <div className="flex-shrink-0 mr-2">{renderLeftIcon()}</div>
        )}

        {/* Input Content */}
        {renderInputContent()}

        {/* Right Icons */}
        {showRightIcons && (
          <div className="flex items-center gap-2 ml-2 flex-shrink-0">
            {renderRightIcons()}
          </div>
        )}
      </div>

      {/* Helper Box */}
      {helperBox && helperBox.length > 0 && (
        <div className="mt-2 p-3 bg-input-background border border-border-default rounded-lg">
          {helperBox.map((item) => (
            <div key={item.id} className="flex items-center gap-2 text-sm py-1">
              <span
                className={`w-4 h-4 rounded-full flex items-center justify-center ${
                  item.isValid
                    ? "bg-green-100 text-green-600"
                    : "bg-gray-100 text-gray-400"
                }`}
              >
                {item.isValid ? "✓" : "○"}
              </span>
              <span
                className={
                  item.isValid ? "text-green-600" : "text-text-secondary"
                }
              >
                {item.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Combobox Dropdown */}
      {type === "combobox" && comboboxOpen && !isDisabled && (
        <ul
          ref={comboboxListRef}
          className="absolute z-50 w-full mt-1 max-h-60 overflow-auto bg-card-background border border-border-default rounded-lg shadow-lg py-1"
          style={{
            top: "calc(100% + 4px)",
            left: 0,
            right: 0,
          }}
          onMouseDown={(e) => e.preventDefault()}
        >
          {(() => {
            const filteredOptions = comboboxOptions.filter((opt) =>
              opt.label.toLowerCase().includes(comboboxInputValue.toLowerCase())
            );

            const showCreateOption =
              comboboxCreatable &&
              comboboxInputValue.trim() !== "" &&
              !filteredOptions.some(
                (opt) =>
                  opt.label.toLowerCase() === comboboxInputValue.toLowerCase()
              );

            if (filteredOptions.length === 0 && !showCreateOption) {
              return (
                <li className="px-4 py-2 text-text-secondary text-sm">
                  {comboboxEmptyMessage}
                </li>
              );
            }

            return (
              <>
                {filteredOptions.map((option, index) => (
                  <li
                    key={option.value}
                    className={`
                      px-4 py-2 cursor-pointer transition-colors flex items-center
                      ${
                        index === comboboxHighlightIndex
                          ? "bg-sidebar-item-hover"
                          : ""
                      }
                      ${
                        comboboxInputValue === option.label
                          ? "bg-blue-50 text-blue-600"
                          : ""
                      }
                      ${
                        option.disabled
                          ? "opacity-50 cursor-not-allowed"
                          : "hover:bg-sidebar-item-hover"
                      }
                    `}
                    onClick={() =>
                      !option.disabled && handleComboboxSelect(option)
                    }
                    onMouseEnter={() =>
                      !option.disabled && setComboboxHighlightIndex(index)
                    }
                  >
                    {option.icon && (
                      <span className="mr-2 flex-shrink-0">{option.icon}</span>
                    )}
                    {option.label}
                  </li>
                ))}
                {showCreateOption && (
                  <li
                    className={`
                      px-4 py-2 cursor-pointer transition-colors flex items-center
                      border-t border-border-default
                      ${
                        comboboxHighlightIndex === filteredOptions.length
                          ? "bg-sidebar-item-hover"
                          : ""
                      }
                      hover:bg-sidebar-item-hover
                    `}
                    onClick={handleComboboxCreate}
                    onMouseEnter={() =>
                      setComboboxHighlightIndex(filteredOptions.length)
                    }
                  >
                    <Plus
                      size={iconSize}
                      className="mr-2 flex-shrink-0 text-blue-600"
                    />
                    <span className="text-blue-600">
                      {comboboxCreateMessage.replace("%s", comboboxInputValue)}
                    </span>
                  </li>
                )}
              </>
            );
          })()}
        </ul>
      )}

      {/* Calendar Popup */}
      {type === "calendar" && calendarOpen && !isDisabled && (
        <div
          ref={calendarPopupRef}
          className="absolute z-50 mt-1 bg-card-background border border-border-default rounded-lg shadow-lg"
        >
          {renderCalendarPopup()}
        </div>
      )}
    </div>
  );
};

export default Input;
