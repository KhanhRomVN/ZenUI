import React, { useState, useMemo } from "react";
import { ButtonProps } from "./Button.types";
import {
  buildButtonStyles,
  buildHoverStyles,
  buildActiveStyles,
  buildDisabledStyles,
  buildLoadingStyles,
  getIconSize,
  mergeAnimation,
} from "./Button.utils";

/**
 * Button Component
 *
 * Component button linh hoạt với hỗ trợ:
 * - Custom styling (padding, margin, border, shadow)
 * - Animation (hover, click, loading)
 * - Icon support (từ packages hoặc emoji SVG)
 * - Multiple states (normal, hover, active, disabled, loading)
 */
const Button: React.FC<ButtonProps> = ({
  children,
  size = "md",
  align = "center",
  className = "",
  loading = false,
  disabled = false,
  fullWidth = false,
  iconConfig,
  animation: animationProp,
  onClick,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Merge animation config
  const animation = useMemo(
    () => mergeAnimation(animationProp),
    [animationProp]
  );

  // Check if button has text content
  const hasText =
    children !== undefined && children !== null && children !== "";

  // Get icon/emoji from config
  const IconComponent = iconConfig?.icon;
  const emoji = iconConfig?.emoji;
  const iconPosition = iconConfig?.position || "left";
  const iconSize = getIconSize(size, hasText, iconConfig?.size);

  // Build styles
  const baseStyles = useMemo(() => {
    return buildButtonStyles(size, hasText, {
      width: props.width,
      height: props.height,
      minWidth: props.minWidth,
      maxWidth: props.maxWidth,
      padding: props.padding,
      margin: props.margin,
      border: props.border,
      shadow: props.shadow,
      backgroundColor: props.backgroundColor,
      color: props.color,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight,
      opacity: props.opacity,
      fullWidth,
    });
  }, [size, hasText, props, fullWidth]);

  const hoverStyles = useMemo(() => {
    return buildHoverStyles({
      hoverBackgroundColor: props.hoverBackgroundColor,
      hoverColor: props.hoverColor,
      hoverBorder: props.hoverBorder,
      hoverShadow: props.hoverShadow,
    });
  }, [props]);

  const activeStyles = useMemo(() => {
    return buildActiveStyles({
      activeBackgroundColor: props.activeBackgroundColor,
      activeColor: props.activeColor,
      activeBorder: props.activeBorder,
      activeShadow: props.activeShadow,
    });
  }, [props]);

  const disabledStyles = useMemo(() => buildDisabledStyles(), []);
  const loadingStyles = useMemo(() => buildLoadingStyles(), []);

  // Compute final styles based on state
  const computedStyles = useMemo(() => {
    let styles = { ...baseStyles };

    // Apply alignment
    if (align === "left") {
      styles.justifyContent = "flex-start";
    } else if (align === "right") {
      styles.justifyContent = "flex-end";
    }

    // Apply hover styles
    if (isHovered && animation.hover && !disabled && !loading) {
      styles = { ...styles, ...hoverStyles };
      if (animation.hoverScale) {
        styles.transform = `scale(${animation.hoverScale})`;
      }
    }

    // Apply active styles
    if (isActive && animation.click && !disabled && !loading) {
      styles = { ...styles, ...activeStyles };
      if (animation.clickScale) {
        styles.transform = `scale(${animation.clickScale})`;
      }
    }

    // Apply disabled styles
    if (disabled) {
      styles = { ...styles, ...disabledStyles };
    }

    // Apply loading styles
    if (loading) {
      styles = { ...styles, ...loadingStyles };
    }

    // Apply animation duration
    if (animation.duration) {
      styles.transition = `all ${animation.duration}ms ease-in-out`;
    }

    return styles;
  }, [
    baseStyles,
    hoverStyles,
    activeStyles,
    disabledStyles,
    loadingStyles,
    isHovered,
    isActive,
    disabled,
    loading,
    animation,
    align,
  ]);

  // Loading spinner component
  const LoadingSpinner = () => (
    <svg
      className="animate-spin"
      style={{
        width: props.loadingSize || iconSize,
        height: props.loadingSize || iconSize,
      }}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke={props.loadingColor || "currentColor"}
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill={props.loadingColor || "currentColor"}
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  // Render icon or emoji
  const renderIcon = () => {
    // If both icon and emoji provided, prioritize icon
    if (IconComponent && emoji) {
      console.warn(
        "Button: Both icon and emoji provided in iconConfig. Only icon will be rendered."
      );
    }

    if (IconComponent) {
      return (
        <IconComponent className={iconConfig?.className} size={iconSize} />
      );
    }

    if (emoji) {
      return (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            width: iconSize,
            height: iconSize,
          }}
        >
          {emoji}
        </span>
      );
    }

    return null;
  };

  // Handle click with animation
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) return;

    if (animation.click) {
      setIsActive(true);
      setTimeout(() => setIsActive(false), animation.duration || 200);
    }

    onClick?.(e);
  };

  // Render content based on icon position and loading state
  const renderContent = () => {
    if (loading) {
      return (
        <>
          {animation.loading && <LoadingSpinner />}
          {props.loadingText || children}
        </>
      );
    }

    const icon = renderIcon();

    if (iconPosition === "left") {
      return (
        <>
          {icon}
          {children}
        </>
      );
    }

    return (
      <>
        {children}
        {icon}
      </>
    );
  };

  return (
    <button
      {...props}
      style={computedStyles}
      className={className}
      disabled={disabled || loading}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      onMouseDown={() => setIsActive(true)}
      onMouseUp={() => setIsActive(false)}
    >
      {renderContent()}
    </button>
  );
};

export default Button;
