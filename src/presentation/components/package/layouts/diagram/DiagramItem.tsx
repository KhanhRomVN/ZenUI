import React from "react";
import { DiagramItemProps } from "./Diagram.types";
import { cn } from "../../../../../shared/utils/cn";

const DiagramItem: React.FC<DiagramItemProps> = ({
  children,
  className = "",
  style = {},
  fit = true,
  maxWidth,
  maxHeight,
  ...props
}) => {
  const containerStyles: React.CSSProperties = {
    maxWidth: maxWidth,
    maxHeight: maxHeight,
    width: fit ? "fit-content" : undefined,
    height: fit ? "fit-content" : undefined,
    ...style,
  };

  const dotClass =
    "absolute w-3 h-3 bg-blue-500 rounded-full border-2 border-white hover:bg-blue-600 transition-colors cursor-pointer z-10";

  return (
    <div
      className={cn(
        "relative bg-white border border-gray-200 rounded-lg shadow-sm p-4",
        className
      )}
      style={containerStyles}
      {...props}
    >
      {/* Top Dot */}
      <div
        className={cn(
          dotClass,
          "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        )}
      />

      {/* Right Dot */}
      <div
        className={cn(
          dotClass,
          "top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
        )}
      />

      {/* Bottom Dot */}
      <div
        className={cn(
          dotClass,
          "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
        )}
      />

      {/* Left Dot */}
      <div
        className={cn(
          dotClass,
          "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"
        )}
      />

      {children}
    </div>
  );
};

export default DiagramItem;
