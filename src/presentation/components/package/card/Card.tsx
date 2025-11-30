import React, { useState } from "react";
import { motion } from "framer-motion";
import { CardProps } from "./Card.types";
import {
  getCardSizeConfig,
  getCardAlignmentStyles,
  getHoverStyles,
  getAppearAnimationVariants,
  getHoverEffectStyles,
} from "./Card.utils";

const Card: React.FC<CardProps> = ({
  size = 100,
  width,
  cardAlign,
  children,
  className = "",
  style = {},
  onClick,
  hoverable = false,
  appearAnimationVariant = "none",
  hoverEffectVariant,
  hoverEffect,
  ...props
}) => {
  const [isHovered, setIsHovered] = useState(false);

  // Lấy styles dựa trên size
  const sizeConfig = getCardSizeConfig(size);
  const cardAlignmentStyles = getCardAlignmentStyles(cardAlign);
  const hoverStyles = getHoverStyles(hoverable);

  // Lấy animation variants
  const animationVariants = getAppearAnimationVariants(appearAnimationVariant);

  // Lấy hover effect styles
  let hoverEffectStyles = { base: {}, hover: {} };
  if (hoverEffectVariant) {
    hoverEffectStyles = getHoverEffectStyles(hoverEffectVariant);
  } else if (hoverEffect) {
    hoverEffectStyles = {
      base: {
        transition: hoverEffect.transitionDuration || "all 0.3s ease",
      },
      hover: hoverEffect,
    };
  }

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  const baseStyles = {
    ...cardAlignmentStyles,
    ...hoverStyles,
    ...hoverEffectStyles.base,
    ...(width && { width: `${width}%` }),
    padding: sizeConfig.padding,
    borderRadius: sizeConfig.borderRadius,
    ...style,
  };

  const activeStyles = isHovered
    ? { ...baseStyles, ...hoverEffectStyles.hover }
    : baseStyles;

  return (
    <motion.div
      className={`card-base ${className}`.trim()}
      style={activeStyles}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      variants={animationVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeOut" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
