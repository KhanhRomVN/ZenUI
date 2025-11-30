import React from "react";
import { BadgeProps } from "./Badge.types";
import {
  getBadgeSizeStyles,
  getBadgeVariantStyles,
  shouldShowDot,
} from "./Badge.utils";

const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "default",
  size = 100,
  dot = false,
  dotColor,
  className = "",
  ...props
}) => {
  const showDot = shouldShowDot(dot, variant);

  // Get base size styles
  const sizeStyles = getBadgeSizeStyles(size);

  // Get variant-specific styles
  const variantStyles = getBadgeVariantStyles(variant);

  return (
    <span
      className={`badge-base ${className}`.trim()}
      style={{
        ...sizeStyles,
        ...variantStyles,
        display: "inline-flex",
        alignItems: "center",
        gap: "4px",
        whiteSpace: "nowrap" as const,
      }}
      {...props}
    >
      {showDot && (
        <span
          className="badge-dot"
          style={{
            width: "6px",
            height: "6px",
            borderRadius: "50%",
            backgroundColor: dotColor || variantStyles.color,
            flexShrink: 0,
          }}
        />
      )}
      {children}
    </span>
  );
};

export default Badge;
