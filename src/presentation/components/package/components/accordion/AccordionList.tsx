import React from "react";
import { AccordionListProps } from "./Accordion.types";
import { cn } from "../../../../../shared/utils/cn";

const AccordionList: React.FC<AccordionListProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex flex-col",
        "divide-y",
        "border rounded-lg overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default AccordionList;
