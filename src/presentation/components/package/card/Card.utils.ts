import { CSSProperties } from "react";
import { CardSize, CardAlign, CardSizeConfig } from "./Card.types";

/**
 * Get card size configuration based on size percentage
 */
export const getCardSizeConfig = (size: CardSize): CardSizeConfig => {
  const scale = size / 100;

  // Base dimensions at 100% scale
  const basePadding = 20;
  const baseBorderRadius = 8;

  // Calculate scaled values
  const padding = basePadding * scale;
  const borderRadius = baseBorderRadius * scale;

  return {
    padding: `${padding}px`,
    borderRadius: `${borderRadius}px`,
  };
};

/**
 * Get card alignment styles (căn card trong container cha)
 */
export const getCardAlignmentStyles = (
  cardAlign?: CardAlign
): CSSProperties => {
  const horizontal = cardAlign?.horizontal || "left";
  const vertical = cardAlign?.vertical || "top";

  const styles: CSSProperties = {};

  // Horizontal alignment
  switch (horizontal) {
    case "left":
      styles.marginRight = "auto";
      break;
    case "center":
      styles.marginLeft = "auto";
      styles.marginRight = "auto";
      break;
    case "right":
      styles.marginLeft = "auto";
      break;
  }

  // Vertical alignment
  switch (vertical) {
    case "top":
      styles.marginBottom = "auto";
      break;
    case "center":
      styles.marginTop = "auto";
      styles.marginBottom = "auto";
      break;
    case "bottom":
      styles.marginTop = "auto";
      break;
  }

  return styles;
};

/**
 * Get hover styles
 */
export const getHoverStyles = (hoverable: boolean): CSSProperties => {
  if (!hoverable) return {};

  return {
    transition: "all 0.2s ease-in-out",
    cursor: "pointer",
  };
};

/**
 * Validate card props
 */
export const validateCardProps = (
  props: any
): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];

  if (props.size && (props.size < 50 || props.size > 200)) {
    errors.push("Size should be between 50% and 200%");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
};

/**
 * Get framer-motion appear animation variants
 */
export const getAppearAnimationVariants = (variant?: string) => {
  const variants: Record<string, any> = {
    fade: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    },
    "slide-up": {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 },
    },
    "slide-down": {
      hidden: { opacity: 0, y: -50 },
      visible: { opacity: 1, y: 0 },
    },
    "slide-left": {
      hidden: { opacity: 0, x: 50 },
      visible: { opacity: 1, x: 0 },
    },
    "slide-right": {
      hidden: { opacity: 0, x: -50 },
      visible: { opacity: 1, x: 0 },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
    },
    rotate: {
      hidden: { opacity: 0, rotate: -10 },
      visible: { opacity: 1, rotate: 0 },
    },
    flip: {
      hidden: { opacity: 0, rotateY: 90 },
      visible: { opacity: 1, rotateY: 0 },
    },
    none: {
      hidden: {},
      visible: {},
    },
  };

  return variants[variant || "none"] || variants["none"];
};

/**
 * Get hover effect styles based on variant
 */
export const getHoverEffectStyles = (
  variant?: string
): { base: CSSProperties; hover: CSSProperties } => {
  const effects: Record<string, { base: CSSProperties; hover: CSSProperties }> =
    {
      lift: {
        base: { transition: "all 0.3s ease" },
        hover: {
          transform: "translateY(-8px)",
          boxShadow: "0 12px 24px rgba(0,0,0,0.15)",
        },
      },
      glow: {
        base: { transition: "all 0.3s ease" },
        hover: { boxShadow: "0 0 20px rgba(59, 130, 246, 0.5)" },
      },
      "border-glow": {
        base: { transition: "all 0.3s ease" },
        hover: {
          borderColor: "rgba(59, 130, 246, 0.8)",
          boxShadow: "0 0 15px rgba(59, 130, 246, 0.3)",
        },
      },
      glass: {
        base: { transition: "all 0.3s ease" },
        hover: {
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderColor: "rgba(255, 255, 255, 0.2)",
        },
      },
      tilt: {
        base: { transition: "all 0.3s ease" },
        hover: { transform: "perspective(1000px) rotateX(2deg) rotateY(2deg)" },
      },
      scale: {
        base: { transition: "all 0.3s ease" },
        hover: { transform: "scale(1.05)" },
      },
      shadow: {
        base: { transition: "all 0.3s ease" },
        hover: { boxShadow: "0 20px 40px rgba(0,0,0,0.2)" },
      },
      none: {
        base: {},
        hover: {},
      },
    };

  return effects[variant || "none"] || effects["none"];
};
