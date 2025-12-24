import React from "react";

export interface DiagramLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  edges?: DiagramEdgeOptions[];
}

export interface DiagramNodeProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /**
   * If true, the item will fit its content size.
   * If false, it might take 100% width/height depending on parent or default behavior.
   * Defaults to true (fit content).
   */
  fit?: boolean;
  minWidth: string | number;
  minHeight: string | number;
  maxWidth: string | number;
  maxHeight: string | number;
  /**
   * If true, dots will always be visible.
   * If false or undefined, dots will only appear on hover.
   */
  showDots?: boolean;
  /**
   * Custom class name for the connection dots.
   */
  dotClassName?: string;
  /**
   * Unique identifier for the item. Required for connecting edges.
   */
  id?: string;
}

export type DiagramWrapperProps = DiagramNodeProps;

export type DiagramEdgeType = "straight" | "step" | "bezier" | "smooth";

export interface DiagramEdgeOptions {
  id: string;
  from: string;
  to: string;
  fromDot?: "top" | "right" | "bottom" | "left" | "auto";
  toDot?: "top" | "right" | "bottom" | "left" | "auto";
  label?: string;
  color?: string;
  width?: number;
  type?: DiagramEdgeType;
  style?: "solid" | "dashed" | "dotted";
}

export interface DiagramContextType {
  registerItem: (id: string, element: HTMLElement) => void;
  unregisterItem: (id: string) => void;
  updateItemPosition: (id: string) => void;
  items: Record<string, HTMLElement>;
  version: number; // Increment to force re-render
  activeId: string | null;
  activeNodeIds: Set<string>;
  setActiveId: (id: string | null) => void;
}
