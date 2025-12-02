import React from "react";
import { DividerProps } from "./Divider.types";
import {
  getDividerStyleClass,
  getDividerThickness,
  getDividerAlignClass,
  getDividerLengthStyle,
  getDividerOrientationClass,
} from "./Divider.utils";
import { cn } from "../../../../shared/utils/cn";

const Divider: React.FC<DividerProps> = ({
  orientation = "horizontal",
  style = "solid",
  thickness = "medium",
  align = "center",
  length = 100,
  className = "",
  ...props
}) => {
  const styleClass = getDividerStyleClass(style);
  const thicknessClass = getDividerThickness(thickness, orientation);
  const alignClass = getDividerAlignClass(align, orientation);
  const orientationClass = getDividerOrientationClass(orientation);
  const lengthStyle = getDividerLengthStyle(length, orientation);

  return (
    <div
      className={cn(
        orientationClass,
        thicknessClass,
        styleClass,
        alignClass,
        "border-gray-300",
        className
      )}
      style={lengthStyle}
      role="separator"
      aria-orientation={orientation}
      {...props}
    />
  );
};

export default Divider;
