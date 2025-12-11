import React from "react";
import { CardFooterProps } from "./Card.types";
import { cn } from "../../../../../shared/utils/cn";

const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={cn("px-4 py-3", className)} {...props}>
      {children}
    </div>
  );
};

export default CardFooter;
