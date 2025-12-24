import React from "react";
import { DiagramItemProps } from "./Diagram.types";
import { cn } from "../../../../../shared/utils/cn";

import { useDiagram } from "./DiagramContext";

const DiagramItem: React.FC<DiagramItemProps> = ({
  children,
  className = "",
  style = {},
  fit = true,
  maxWidth,
  maxHeight,
  showDots = false,
  dotClassName,
  ...props
}) => {
  const containerStyles: React.CSSProperties = {
    maxWidth: maxWidth,
    maxHeight: maxHeight,
    width: fit ? "fit-content" : undefined,
    height: fit ? "fit-content" : undefined,
    ...style,
  };

  const [dragOffset, setDragOffset] = React.useState({ x: 0, y: 0 });
  const isDragging = React.useRef(false);
  const startPos = React.useRef({ x: 0, y: 0 });
  const startOffset = React.useRef({ x: 0, y: 0 });

  // Context Integration
  const { registerItem, unregisterItem, updateItemPosition } = useDiagram();
  const itemRef = React.useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    if (props.id && itemRef.current) {
      registerItem(props.id, itemRef.current);
      return () => unregisterItem(props.id!);
    }
  }, [props.id, registerItem, unregisterItem]);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (e.button === 2) {
      // Right click
      e.preventDefault();
      e.stopPropagation();
      isDragging.current = true;
      startPos.current = { x: e.clientX, y: e.clientY };
      startOffset.current = { ...dragOffset };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - startPos.current.x;
    const deltaY = e.clientY - startPos.current.y;
    setDragOffset({
      x: startOffset.current.x + deltaX,
      y: startOffset.current.y + deltaY,
    });

    // Notify context to update edges
    if (props.id) {
      updateItemPosition(props.id);
    }
  };

  const handleMouseUp = () => {
    isDragging.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  // Also update position after mount to ensure initial edges are correct
  React.useEffect(() => {
    if (props.id) updateItemPosition(props.id);
  }, []);

  // Prevent context menu on the item itself if we want consistency,
  // currently only preventing on mousedown for the drag, but actual contextmenu event fires on mouseup often.
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  // Merge drag transform with valid style
  const finalStyle = {
    ...containerStyles,
    transform: `${containerStyles.transform || ""} translate(${
      dragOffset.x
    }px, ${dragOffset.y}px)`,
  };

  const dotClass = cn(
    "absolute w-3 h-3 bg-blue-500 rounded-full transition-all cursor-pointer z-10",
    !showDots && "opacity-0 group-hover:opacity-100",
    dotClassName
  );

  return (
    <div
      ref={itemRef}
      className={cn("relative group", className)}
      style={finalStyle}
      onMouseDown={handleMouseDown}
      onContextMenu={handleContextMenu}
      id={props.id}
      {...props}
    >
      {/* Top Dot */}
      <div
        className={cn(
          dotClass,
          "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
        )}
      />

      {/* Right Dot */}
      <div
        className={cn(
          dotClass,
          "top-1/2 right-0 translate-x-1/2 -translate-y-1/2"
        )}
      />

      {/* Bottom Dot */}
      <div
        className={cn(
          dotClass,
          "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
        )}
      />

      {/* Left Dot */}
      <div
        className={cn(
          dotClass,
          "top-1/2 left-0 -translate-x-1/2 -translate-y-1/2"
        )}
      />

      {children}
    </div>
  );
};

export default DiagramItem;
