import React, { useState, useRef, useEffect } from "react";
import { Calendar, Clock, X, ChevronLeft, ChevronRight } from "lucide-react";
import {
  DateTimePickerProps,
  DateTimePickerMode,
  CalendarDay,
} from "./DateTimePicker.types";
import {
  getDateTimePickerSizeStyles,
  getDateTimePickerVariantStyles,
  formatDate,
  parseDate,
  generateCalendarDays,
  generateTimeSlots,
  isToday,
  isSameDay,
} from "./DateTimePicker.utils";

const DateTimePicker: React.FC<DateTimePickerProps> = ({
  value,
  defaultValue,
  placeholder = "Select date and time",
  disabled = false,
  loading = false,
  error = false,
  errorMessage,
  success = false,
  size = "md",
  variant = "outline",
  mode = "datetime",
  dateFormat = "MM/dd/yyyy",
  timeFormat = "HH:mm",
  minDate,
  maxDate,
  className = "",
  onChange,
  showTimePicker = true,
  clearable = true,
  icon,
  placement = "bottom",
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value || defaultValue || null
  );
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [inputValue, setInputValue] = useState("");
  const [view, setView] = useState<"calendar" | "time">("calendar");

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Update selected date when value prop changes
  useEffect(() => {
    if (value !== undefined) {
      setSelectedDate(value);
      setInputValue(value ? formatDate(value, getDisplayFormat()) : "");
    }
  }, [value]);

  // Initialize input value
  useEffect(() => {
    if (selectedDate) {
      setInputValue(formatDate(selectedDate, getDisplayFormat()));
    }
  }, [selectedDate]);

  // Get display format based on mode
  const getDisplayFormat = (): string => {
    switch (mode) {
      case "date":
        return dateFormat;
      case "time":
        return timeFormat;
      case "datetime":
        return `${dateFormat} ${timeFormat}`;
      default:
        return dateFormat;
    }
  };

  // Handle date selection
  const handleDateSelect = (date: Date) => {
    let newDate = new Date(date);

    if (selectedDate && mode === "datetime") {
      // Preserve time from previous selection
      newDate.setHours(selectedDate.getHours());
      newDate.setMinutes(selectedDate.getMinutes());
    }

    setSelectedDate(newDate);

    if (mode === "date" || (mode === "datetime" && !showTimePicker)) {
      setIsOpen(false);
      if (onChange) {
        onChange(newDate);
      }
    } else if (mode === "datetime" && showTimePicker) {
      setView("time");
    }
  };

  // Handle time selection
  const handleTimeSelect = (hour: number, minute: number) => {
    if (selectedDate) {
      const newDate = new Date(selectedDate);
      newDate.setHours(hour, minute, 0, 0);
      setSelectedDate(newDate);
      setIsOpen(false);

      if (onChange) {
        onChange(newDate);
      }
    }
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const parsedDate = parseDate(value, getDisplayFormat());
    if (parsedDate) {
      setSelectedDate(parsedDate);
      if (onChange) {
        onChange(parsedDate);
      }
    }
  };

  // Handle clear
  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelectedDate(null);
    setInputValue("");
    setIsOpen(false);

    if (onChange) {
      onChange(null);
    }

    if (inputRef.current) {
      inputRef.current.focus();
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

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setView("calendar");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sizeStyles = getDateTimePickerSizeStyles(size);
  const variantStyles = getDateTimePickerVariantStyles(variant);
  const calendarDays = generateCalendarDays(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    selectedDate,
    minDate,
    maxDate
  );
  const timeSlots = generateTimeSlots(30, minDate, maxDate);

  const defaultIcon =
    mode === "time" ? (
      <Clock size={sizeStyles.iconSize} />
    ) : (
      <Calendar size={sizeStyles.iconSize} />
    );

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      {/* Input Field */}
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
          ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
        `}
        style={{
          height: sizeStyles.height,
          padding: sizeStyles.padding,
        }}
        onClick={() => !disabled && !loading && setIsOpen(!isOpen)}
      >
        {/* Icon */}
        <div className="text-text-secondary mr-2 flex-shrink-0">
          {icon || defaultIcon}
        </div>

        {/* Input */}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled || loading}
          onChange={handleInputChange}
          onFocus={() => !disabled && setIsOpen(true)}
          className={`
            flex-1 bg-transparent border-none outline-none
            placeholder-text-tertiary text-text-primary
            ${disabled ? "cursor-not-allowed" : ""}
          `}
          style={{ fontSize: sizeStyles.fontSize }}
          {...props}
        />

        {/* Clear Button */}
        {clearable && selectedDate && !disabled && !loading && (
          <button
            type="button"
            onClick={handleClear}
            className="ml-2 flex-shrink-0 text-text-secondary hover:text-text-primary"
          >
            <X size={sizeStyles.iconSize} />
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && errorMessage && (
        <p className="text-red-600 text-xs mt-1">{errorMessage}</p>
      )}

      {/* Dropdown */}
      {isOpen && !disabled && (
        <div
          className={`
            absolute z-50 mt-1 bg-card-background border border-border-default rounded-lg shadow-lg
            ${placement === "top" ? "bottom-full mb-1" : "top-full"}
          `}
        >
          {/* Calendar View */}
          {view === "calendar" && (
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
                    onClick={() =>
                      !day.isDisabled && handleDateSelect(day.date)
                    }
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
              {mode === "datetime" && showTimePicker && (
                <button
                  onClick={() => setView("time")}
                  className="w-full mt-3 px-3 py-2 text-sm bg-sidebar-item-hover hover:bg-sidebar-item-focus rounded"
                >
                  Select Time
                </button>
              )}
            </div>
          )}

          {/* Time Picker View */}
          {view === "time" && (
            <div className="p-4 w-48 max-h-60 overflow-auto">
              <div className="font-semibold text-text-primary mb-3 text-center">
                Select Time
              </div>
              <div className="space-y-1">
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() =>
                      !slot.disabled && handleTimeSelect(slot.hour, slot.minute)
                    }
                    disabled={slot.disabled}
                    className={`
                      w-full px-3 py-2 text-sm rounded transition-colors text-left
                      ${
                        slot.disabled
                          ? "opacity-30 cursor-not-allowed"
                          : "hover:bg-sidebar-item-hover"
                      }
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
                onClick={() => setView("calendar")}
                className="w-full mt-3 px-3 py-2 text-sm bg-sidebar-item-hover hover:bg-sidebar-item-focus rounded"
              >
                Back to Calendar
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default DateTimePicker;
