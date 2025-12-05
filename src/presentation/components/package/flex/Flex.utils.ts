import { FlexResponsiveProps, FlexProps, FlexItemProps } from "./Flex.types";

/**
 * Generate CSS class for flex container
 */
export const generateFlexClasses = (props: FlexProps): string => {
  const classes: string[] = [];

  // Flex display
  classes.push(props.inline ? "inline-flex" : "flex");

  // Direction
  if (props.direction) {
    classes.push(`flex-${props.direction}`);
  }

  // Wrap
  if (props.wrap) {
    classes.push(`flex-${props.wrap}`);
  }

  // Justify content
  if (props.justify) {
    const justifyMap: Record<string, string> = {
      "flex-start": "justify-start",
      "flex-end": "justify-end",
      center: "justify-center",
      "space-between": "justify-between",
      "space-around": "justify-around",
      "space-evenly": "justify-evenly",
    };
    classes.push(justifyMap[props.justify]);
  }

  // Align items
  if (props.align) {
    const alignMap: Record<string, string> = {
      stretch: "items-stretch",
      "flex-start": "items-start",
      "flex-end": "items-end",
      center: "items-center",
      baseline: "items-baseline",
    };
    classes.push(alignMap[props.align]);
  }

  // Align content
  if (props.alignContent) {
    const alignContentMap: Record<string, string> = {
      "flex-start": "content-start",
      "flex-end": "content-end",
      center: "content-center",
      "space-between": "content-between",
      "space-around": "content-around",
      stretch: "content-stretch",
    };
    classes.push(alignContentMap[props.alignContent]);
  }

  return classes.filter(Boolean).join(" ");
};

/**
 * Generate CSS class for flex item
 */
export const generateFlexItemClasses = (props: FlexItemProps): string => {
  const classes: string[] = [];

  // Grow
  if (props.grow !== undefined) {
    if (props.grow === "initial" || props.grow === "inherit") {
      classes.push(`grow-${props.grow}`);
    } else if (typeof props.grow === "number") {
      classes.push(`grow-${props.grow}`);
    }
  }

  // Shrink
  if (props.shrink !== undefined) {
    if (props.shrink === "initial" || props.shrink === "inherit") {
      classes.push(`shrink-${props.shrink}`);
    } else if (typeof props.shrink === "number") {
      classes.push(`shrink-${props.shrink}`);
    }
  }

  // Order
  if (props.order !== undefined) {
    classes.push(`order-${props.order}`);
  }

  // Align self
  if (props.alignSelf) {
    const alignSelfMap: Record<string, string> = {
      auto: "self-auto",
      "flex-start": "self-start",
      "flex-end": "self-end",
      center: "self-center",
      baseline: "self-baseline",
      stretch: "self-stretch",
    };
    classes.push(alignSelfMap[props.alignSelf]);
  }

  return classes.filter(Boolean).join(" ");
};

/**
 * Generate inline styles for flex container
 */
export const generateFlexStyles = (props: FlexProps): React.CSSProperties => {
  const styles: React.CSSProperties = {};

  // Gap
  if (props.gap !== undefined) {
    if (typeof props.gap === "number") {
      styles.gap = `${props.gap}px`;
    } else {
      styles.gap = props.gap;
    }
  }

  // Basis
  if (props.basis !== undefined) {
    styles.flexBasis =
      typeof props.basis === "number" ? `${props.basis}px` : props.basis;
  }

  return styles;
};

/**
 * Generate inline styles for flex item
 */
export const generateFlexItemStyles = (
  props: FlexItemProps
): React.CSSProperties => {
  const styles: React.CSSProperties = {};

  // Grow
  if (typeof props.grow === "number") {
    styles.flexGrow = props.grow;
  }

  // Shrink
  if (typeof props.shrink === "number") {
    styles.flexShrink = props.shrink;
  }

  // Basis
  if (props.basis !== undefined) {
    styles.flexBasis =
      typeof props.basis === "number" ? `${props.basis}px` : props.basis;
  }

  return styles;
};

/**
 * Generate responsive classes
 */
export const generateResponsiveClasses = (
  props: FlexProps | FlexItemProps,
  type: "container" | "item"
): string => {
  const classes: string[] = [];

  if ("responsive" in props && props.responsive) {
    const responsive = props.responsive;

    Object.entries(responsive).forEach(([breakpoint, breakpointProps]) => {
      const prefix = breakpoint === "xs" ? "" : `${breakpoint}:`;

      if (type === "container") {
        // Container responsive classes
        if (breakpointProps.direction) {
          classes.push(`${prefix}flex-${breakpointProps.direction}`);
        }

        if (breakpointProps.justify) {
          const justifyMap: Record<string, string> = {
            "flex-start": "justify-start",
            "flex-end": "justify-end",
            center: "justify-center",
            "space-between": "justify-between",
            "space-around": "justify-around",
            "space-evenly": "justify-evenly",
          };
          classes.push(`${prefix}${justifyMap[breakpointProps.justify]}`);
        }

        if (breakpointProps.align) {
          const alignMap: Record<string, string> = {
            stretch: "items-stretch",
            "flex-start": "items-start",
            "flex-end": "items-end",
            center: "items-center",
            baseline: "items-baseline",
          };
          classes.push(`${prefix}${alignMap[breakpointProps.align]}`);
        }
      } else {
        // Item responsive classes
        if (typeof breakpointProps.grow === "number") {
          classes.push(`${prefix}grow-${breakpointProps.grow}`);
        }

        if (typeof breakpointProps.order === "number") {
          classes.push(`${prefix}order-${breakpointProps.order}`);
        }
      }
    });
  }

  return classes.join(" ");
};
