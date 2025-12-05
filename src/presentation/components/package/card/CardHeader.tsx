import React from "react";
import { CardHeaderProps } from "./Card.types";
import { cn } from "../../../../shared/utils/cn";

const CardHeader: React.FC<CardHeaderProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={cn("px-4 py-3 border-b border-border-default", className)}
      {...props}
    >
      {children}
    </div>
  );
};

export default CardHeader;
