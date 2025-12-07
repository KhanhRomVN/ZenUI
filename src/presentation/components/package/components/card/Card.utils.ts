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
