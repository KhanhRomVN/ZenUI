import {
  DateTimePickerSize,
  DateTimePickerVariant,
  TimeSlot,
  CalendarDay,
} from "./DateTimePicker.types";

/**
 * Get date time picker size styles
 */
export const getDateTimePickerSizeStyles = (size: DateTimePickerSize) => {
  const sizes = {
    sm: {
      height: "32px",
      padding: "0 12px",
      fontSize: "14px",
      iconSize: 14,
    },
    md: {
      height: "40px",
      padding: "0 16px",
      fontSize: "14px",
      iconSize: 16,
    },
    lg: {
      height: "48px",
      padding: "0 20px",
      fontSize: "16px",
      iconSize: 18,
    },
  };

  return sizes[size];
};

/**
 * Get date time picker variant styles
 */
export const getDateTimePickerVariantStyles = (
  variant: DateTimePickerVariant
) => {
  const variants = {
    outline: {
      background: "bg-input-background",
      border: "border border-border-default",
      focus: "focus:border-blue-500 focus:ring-2 focus:ring-blue-200",
      hover: "hover:border-border-hover",
    },
    filled: {
      background: "bg-input-filled",
      border: "border border-transparent",
      focus: "focus:bg-input-background focus:border-blue-500",
      hover: "hover:bg-input-filledHover",
    },
    underline: {
      background: "bg-transparent",
      border:
        "border-b border-border-default border-t-0 border-l-0 border-r-0 rounded-none",
      focus: "focus:border-blue-500 focus:ring-0",
      hover: "hover:border-border-hover",
    },
  };

  return variants[variant];
};

/**
 * Format date to string based on format
 */
export const formatDate = (
  date: Date | null,
  format: string = "MM/dd/yyyy"
): string => {
  if (!date) return "";

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const seconds = date.getSeconds().toString().padStart(2, "0");

  return format
    .replace("dd", day)
    .replace("MM", month)
    .replace("yyyy", year.toString())
    .replace("HH", hours)
    .replace("mm", minutes)
    .replace("ss", seconds);
};

/**
 * Parse date string to Date object
 */
export const parseDate = (
  dateString: string,
  format: string = "MM/dd/yyyy"
): Date | null => {
  if (!dateString) return null;

  try {
    const formatParts = format.split(/[\/\-\.]/);
    const dateParts = dateString.split(/[\/\-\.]/);

    if (formatParts.length !== dateParts.length) return null;

    const dateObj: any = {};
    formatParts.forEach((part, index) => {
      if (part.includes("MM")) dateObj.month = parseInt(dateParts[index]) - 1;
      else if (part.includes("dd")) dateObj.day = parseInt(dateParts[index]);
      else if (part.includes("yyyy")) dateObj.year = parseInt(dateParts[index]);
    });

    return new Date(dateObj.year, dateObj.month, dateObj.day);
  } catch {
    return null;
  }
};

/**
 * Generate calendar days for a specific month
 */
export const generateCalendarDays = (
  year: number,
  month: number,
  selectedDate?: Date,
  minDate?: Date,
  maxDate?: Date
): CalendarDay[] => {
  const days: CalendarDay[] = [];
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);

  // Days from previous month
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  const firstDayOfWeek = firstDay.getDay();

  for (let i = firstDayOfWeek - 1; i >= 0; i--) {
    const date = new Date(year, month - 1, prevMonthLastDay - i);
    days.push({
      date,
      isCurrentMonth: false,
      isToday: isToday(date),
      isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
      isDisabled: isDateDisabled(date, minDate, maxDate),
    });
  }

  // Current month days
  for (let i = 1; i <= lastDay.getDate(); i++) {
    const date = new Date(year, month, i);
    days.push({
      date,
      isCurrentMonth: true,
      isToday: isToday(date),
      isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
      isDisabled: isDateDisabled(date, minDate, maxDate),
    });
  }

  // Days from next month
  const totalCells = 42; // 6 weeks
  const nextMonthDays = totalCells - days.length;
  for (let i = 1; i <= nextMonthDays; i++) {
    const date = new Date(year, month + 1, i);
    days.push({
      date,
      isCurrentMonth: false,
      isToday: isToday(date),
      isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
      isDisabled: isDateDisabled(date, minDate, maxDate),
    });
  }

  return days;
};

/**
 * Generate time slots for time picker
 */
export const generateTimeSlots = (
  interval: number = 30,
  minTime?: Date,
  maxTime?: Date
): TimeSlot[] => {
  const slots: TimeSlot[] = [];

  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += interval) {
      const time = new Date();
      time.setHours(hour, minute, 0, 0);

      const label = `${hour.toString().padStart(2, "0")}:${minute
        .toString()
        .padStart(2, "0")}`;
      const disabled = isTimeDisabled(time, minTime, maxTime);

      slots.push({ hour, minute, label, disabled });
    }
  }

  return slots;
};

/**
 * Check if date is today
 */
export const isToday = (date: Date): boolean => {
  const today = new Date();
  return isSameDay(date, today);
};

/**
 * Check if two dates are the same day
 */
export const isSameDay = (date1: Date, date2: Date): boolean => {
  return (
    date1.getDate() === date2.getDate() &&
    date1.getMonth() === date2.getMonth() &&
    date1.getFullYear() === date2.getFullYear()
  );
};

/**
 * Check if date is disabled
 */
export const isDateDisabled = (
  date: Date,
  minDate?: Date,
  maxDate?: Date
): boolean => {
  if (minDate && date < minDate) return true;
  if (maxDate && date > maxDate) return true;
  return false;
};

/**
 * Check if time is disabled
 */
export const isTimeDisabled = (
  time: Date,
  minTime?: Date,
  maxTime?: Date
): boolean => {
  if (minTime && time < minTime) return true;
  if (maxTime && time > maxTime) return true;
  return false;
};

/**
 * Validate date time picker props
 */
export const validateDateTimePickerProps = (
  props: any
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (props.minDate && props.maxDate && props.minDate > props.maxDate) {
    errors.push("minDate cannot be greater than maxDate");
  }

  if (props.value && !(props.value instanceof Date)) {
    errors.push("value must be a Date object");
  }

  if (props.defaultValue && !(props.defaultValue instanceof Date)) {
    errors.push("defaultValue must be a Date object");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};
