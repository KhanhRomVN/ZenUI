import React from "react";

export interface DiagramLayoutProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

export interface DiagramItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  /**
   * If true, the item will fit its content size.
   * If false, it might take 100% width/height depending on parent or default behavior.
   * Defaults to true (fit content).
   */
  fit?: boolean;
  maxWidth?: string | number;
  maxHeight?: string | number;
}
