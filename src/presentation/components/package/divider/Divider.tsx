import React from "react";
import { DividerProps } from "./Divider.types";
import {
  getDividerStyles,
  getDividerTextStyles,
  shouldShowText,
} from "./Divider.utils";

const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  variant = "solid",
  size = 1,
  color = "border-default",
  text,
  textPosition = "center",
  className = "",
  style,
  ...props
}) => {
  const showText = shouldShowText(text, orientation);

  const dividerStyles = getDividerStyles(
    orientation,
    variant,
    size,
    color,
    showText
  );

  const textStyles = getDividerTextStyles(orientation, textPosition);

  if (orientation === "vertical") {
    return (
      <div
        className={`divider-base ${className}`.trim()}
        style={{
          ...dividerStyles,
          ...style,
        }}
        role="separator"
        aria-orientation="vertical"
        {...props}
      />
    );
  }

  return (
    <div
      className={`divider-base ${className}`.trim()}
      style={{
        ...dividerStyles,
        ...style,
      }}
      role="separator"
      aria-orientation="horizontal"
      {...props}
    >
      {showText && (
        <span className="divider-text" style={textStyles}>
          {text}
        </span>
      )}
    </div>
  );
};

export default Divider;
