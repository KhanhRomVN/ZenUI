import { ReactNode } from "react";

export type FlexDirection = "row" | "column" | "row-reverse" | "column-reverse";
export type FlexWrap = "nowrap" | "wrap" | "wrap-reverse";
export type JustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly";
export type AlignItems =
  | "stretch"
  | "flex-start"
  | "flex-end"
  | "center"
  | "baseline";
export type AlignContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "stretch";
export type FlexGrow = number | "initial" | "inherit";
export type FlexShrink = number | "initial" | "inherit";
export type FlexBasis = string | "auto" | "initial" | "inherit";

export interface FlexResponsiveProps {
  direction?: FlexDirection;
  wrap?: FlexWrap;
  justify?: JustifyContent;
  align?: AlignItems;
  alignContent?: AlignContent;
  gap?: string | number;
  grow?: FlexGrow;
  shrink?: FlexShrink;
  basis?: FlexBasis;
}

export interface FlexProps extends FlexResponsiveProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  inline?: boolean;
  responsive?: {
    xs?: FlexResponsiveProps;
    sm?: FlexResponsiveProps;
    md?: FlexResponsiveProps;
    lg?: FlexResponsiveProps;
    xl?: FlexResponsiveProps;
    xxl?: FlexResponsiveProps;
  };
  as?: keyof JSX.IntrinsicElements;
  [key: string]: any;
}

export interface FlexItemProps extends FlexResponsiveProps {
  children?: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  order?: number;
  alignSelf?:
    | "auto"
    | "flex-start"
    | "flex-end"
    | "center"
    | "baseline"
    | "stretch";
  as?: keyof JSX.IntrinsicElements;
  [key: string]: any;
}
