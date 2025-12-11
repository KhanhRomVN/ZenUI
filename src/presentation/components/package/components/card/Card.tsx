import React from "react";
import { CardProps } from "./Card.types";
import { getCardSizeConfig, getCardAlignmentStyles } from "./Card.utils";
import { cn } from "../../../../../shared/utils/cn";

const Card: React.FC<CardProps> = ({
  size = 100,
  width,
  cardAlign,
  children,
  className = "",
  onClick,
  ...props
}) => {
  // Lấy styles dựa trên size
  const sizeConfig = getCardSizeConfig(size);
  const cardAlignmentStyles = getCardAlignmentStyles(cardAlign);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div
      className={cn("border rounded-md", className)}
      onClick={handleClick}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
