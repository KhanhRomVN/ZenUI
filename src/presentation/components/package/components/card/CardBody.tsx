import React from "react";
import { CardBodyProps } from "./Card.types";
import { cn } from "../../../../../shared/utils/cn";

const CardBody: React.FC<CardBodyProps> = ({
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

export default CardBody;
