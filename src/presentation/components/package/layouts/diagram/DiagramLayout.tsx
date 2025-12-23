import React from "react";
import { DiagramLayoutProps } from "./Diagram.types";
import { cn } from "../../../../../shared/utils/cn";

const DiagramLayout: React.FC<DiagramLayoutProps> = ({
  children,
  className = "",
  style = {},
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden bg-gray-50/50",
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export default DiagramLayout;
