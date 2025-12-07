import React, { useMemo } from "react";
import { AccordionItemProps, AccordionContextValue } from "./Accordion.types";
import { cn } from "../../../../../shared/utils/cn";
import { AccordionContext } from "./Accordion";

const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  value,
  className = "",
  ...props
}) => {
  const parentContext = React.useContext(AccordionContext);

  const contextValue: AccordionContextValue | null = useMemo(() => {
    if (!parentContext) return null;
    return {
      ...parentContext,
      currentValue: value,
    };
  }, [parentContext, value]);

  return (
    <AccordionContext.Provider value={contextValue}>
      <div
        className={cn("transition-colors duration-200", className)}
        data-value={value}
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export default AccordionItem;
