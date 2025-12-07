/**
 * Get textarea base styles
 */
export const getTextareaBaseStyles = (
  error: boolean,
  disabled: boolean,
  readOnly: boolean,
  resize: string
) => ({
  width: "100%",
  padding: "10px 12px",
  fontSize: "14px",
  lineHeight: "1.5",
  color: disabled ? "var(--text-secondary)" : "var(--text-primary)",
  backgroundColor: disabled
    ? "var(--input-background)"
    : readOnly
    ? "var(--card-background)"
    : "var(--input-background)",
  border: `1px solid ${
    error
      ? "#ef4444"
      : disabled
      ? "var(--border-default)"
      : "var(--input-border-default)"
  }`,
  borderRadius: "6px",
  outline: "none",
  transition: "all 0.2s ease",
  resize: resize as any,
  fontFamily: "inherit",
  cursor: disabled ? "not-allowed" : readOnly ? "default" : "text",
});

/**
 * Get focus styles
 */
export const getFocusStyles = (error: boolean) => ({
  borderColor: error ? "#dc2626" : "var(--input-border-focus)",
  boxShadow: error
    ? "0 0 0 3px rgba(239, 68, 68, 0.1)"
    : "0 0 0 3px rgba(59, 130, 246, 0.1)",
});

/**
 * Get hover styles
 */
export const getHoverStyles = (error: boolean, disabled: boolean) => {
  if (disabled) return {};
  return {
    borderColor: error ? "#ef4444" : "var(--input-border-hover)",
  };
};

/**
 * Calculate character count color
 */
export const getCountColor = (
  current: number,
  max?: number
): string => {
  if (!max) return "var(--text-secondary)";

  const percentage = (current / max) * 100;

  if (percentage >= 100) return "#ef4444";
  if (percentage >= 90) return "#f97316";
  if (percentage >= 75) return "#eab308";

  return "var(--text-secondary)";
};
