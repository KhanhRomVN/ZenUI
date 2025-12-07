import React from "react";
import { CheckboxProps, CheckboxState } from "./Checkbox.types";
import {
  getCheckboxSizeStyles,
  getCheckboxStateStyles,
  getLabelPosition,
  getCheckmarkIcon,
} from "./Checkbox.utils";

const Checkbox: React.FC<CheckboxProps> = ({
  size = 100,
  checked = false,
  indeterminate = false,
  label,
  labelPosition = "right",
  disabled = false,
  loading = false,
  className = "",
  onChange,
  ...props
}) => {
  const hasLabel = !!label;

  // Xác định trạng thái
  const state: CheckboxState = indeterminate
    ? "indeterminate"
    : checked
    ? "checked"
    : "unchecked";

  const isDisabled = disabled || loading;

  // Lấy styles
  const sizeStyles = getCheckboxSizeStyles(size, hasLabel);
  const stateStyles = getCheckboxStateStyles(state, isDisabled);
  const positionStyles = getLabelPosition(labelPosition);
  const checkmark = getCheckmarkIcon(state);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled && onChange) {
      onChange(e.target.checked);
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (!isDisabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <div
      className={`checkbox-container ${className}`.trim()}
      style={{
        ...sizeStyles.container,
        ...positionStyles,
        display: "inline-flex",
        alignItems: "center",
      }}
    >
      {/* Hidden input for form submission */}
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        disabled={isDisabled}
        style={{ display: "none" }}
        {...props}
      />

      {/* Custom checkbox */}
      <div
        className="checkbox-custom"
        style={{
          ...sizeStyles.checkbox,
          ...stateStyles,
          position: "relative",
        }}
        onClick={handleClick}
      >
        {checkmark && (
          <span
            style={{
              fontSize: `calc(${sizeStyles.checkbox.width} * 0.7)`,
              lineHeight: 1,
              fontWeight: "bold",
              userSelect: "none",
            }}
          >
            {checkmark}
          </span>
        )}

        {/* Loading spinner */}
        {loading && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: `calc(${sizeStyles.checkbox.width} * 0.6)`,
              height: `calc(${sizeStyles.checkbox.width} * 0.6)`,
              border: `2px solid transparent`,
              borderTop: `2px solid currentColor`,
              borderRadius: "50%",
              animation: "spin 1s linear infinite",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
      </div>

      {/* Label */}
      {label && (
        <label
          className="checkbox-label"
          style={{
            ...sizeStyles.label,
            color: isDisabled ? "" : "",
            cursor: isDisabled ? "not-allowed" : "pointer",
            userSelect: "none",
            margin: 0,
          }}
          onClick={handleClick}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default Checkbox;
