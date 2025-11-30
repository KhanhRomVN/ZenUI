import React from "react";
import { LucideIcon, Search, Eye, EyeOff } from "lucide-react";
import { InputProps } from "./Input.types";
import {
  getInputSizeStyles,
  getIconSize,
  shouldShowIcon,
  getInputVariantStyles,
} from "./Input.utils";

const Input: React.FC<InputProps> = ({
  size = 100,
  variant = "outline",
  type = "text",
  placeholder,
  value,
  disabled = false,
  loading = false,
  icon,
  iconPosition = "left",
  showClearButton = false,
  showPasswordToggle = false,
  className = "",
  onChange,
  onClear,
  ...props
}) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFocused, setIsFocused] = React.useState(false);

  const isDisabled = disabled || loading;
  const showIcon = shouldShowIcon(icon, loading);
  const sizeStyles = getInputSizeStyles(size);
  const variantStyles = getInputVariantStyles(variant, isFocused, isDisabled);
  const iconSize = getIconSize(size);

  const inputType =
    showPasswordToggle && type === "password"
      ? showPassword
        ? "text"
        : "password"
      : type;

  const handleClear = () => {
    if (onClear) {
      onClear();
    }
    if (onChange) {
      onChange({
        target: { value: "" },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isDisabled && onChange) {
      onChange(e);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const renderIcon = () => {
    if (loading) {
      return <div className="animate-spin">⟳</div>;
    }

    if (!icon) return null;

    if (typeof icon === "function") {
      const IconComponent = icon as LucideIcon;
      return <IconComponent size={iconSize} />;
    }

    return (
      <span
        className="input-icon-content"
        style={{
          fontSize: `${Math.max(iconSize - 2, 12)}px`,
          lineHeight: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
      </span>
    );
  };

  const renderAdornments = () => {
    const adornments = [];

    if (showClearButton && value && !isDisabled) {
      adornments.push(
        <button
          key="clear"
          type="button"
          onClick={handleClear}
          className="input-adornment clear-button"
          style={{ fontSize: `${iconSize}px` }}
        >
          ×
        </button>
      );
    }

    if (showPasswordToggle && type === "password" && !isDisabled) {
      adornments.push(
        <button
          key="toggle"
          type="button"
          onClick={togglePasswordVisibility}
          className="input-adornment password-toggle"
        >
          {showPassword ? <EyeOff size={iconSize} /> : <Eye size={iconSize} />}
        </button>
      );
    }

    return adornments.length > 0 ? adornments : null;
  };

  return (
    <div
      className={`input-container ${className}`.trim()}
      style={{
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        width: "100%",
      }}
    >
      {showIcon && iconPosition === "left" && (
        <div className="input-icon-left" style={{ marginRight: "8px" }}>
          {renderIcon()}
        </div>
      )}

      <input
        type={inputType}
        value={value}
        placeholder={placeholder}
        disabled={isDisabled}
        onChange={handleChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        style={{
          ...sizeStyles,
          ...variantStyles,
          width: "100%",
          outline: "none",
          fontFamily: "inherit",
          transition: "all 0.2s ease-in-out",
          opacity: isDisabled ? 0.6 : 1,
          cursor: isDisabled ? "not-allowed" : "text",
          paddingLeft:
            showIcon && iconPosition === "left"
              ? "40px"
              : sizeStyles.paddingLeft,
          paddingRight:
            showClearButton || showPasswordToggle
              ? "40px"
              : sizeStyles.paddingRight,
        }}
        {...props}
      />

      {showIcon && iconPosition === "right" && (
        <div className="input-icon-right" style={{ marginLeft: "8px" }}>
          {renderIcon()}
        </div>
      )}

      {(showClearButton || showPasswordToggle) && (
        <div
          className="input-adornments"
          style={{
            position: "absolute",
            right: "8px",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {renderAdornments()}
        </div>
      )}
    </div>
  );
};

export default Input;
