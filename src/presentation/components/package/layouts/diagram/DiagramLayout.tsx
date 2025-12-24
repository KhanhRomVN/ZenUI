import React, { useState, useCallback, useMemo } from "react";
import { DiagramLayoutProps, DiagramEdgeOptions } from "./Diagram.types";
import { DiagramContext } from "./DiagramContext";
import { cn } from "../../../../../shared/utils/cn";

const DiagramLayout: React.FC<DiagramLayoutProps> = ({
  children,
  className = "",
  style = {},
  edges = [],
  ...props
}) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(1);
  const containerRef = React.useRef<HTMLDivElement>(null);

  // Context State
  const [items, setItems] = useState<Record<string, HTMLElement>>({});
  const [version, setVersion] = useState(0);

  const registerItem = useCallback((id: string, element: HTMLElement) => {
    setItems((prev) => ({ ...prev, [id]: element }));
  }, []);

  const unregisterItem = useCallback((id: string) => {
    setItems((prev) => {
      const next = { ...prev };
      delete next[id];
      return next;
    });
  }, []);

  const updateItemPosition = useCallback(() => {
    setVersion((v) => v + 1);
  }, []);

  const contextValue = useMemo(
    () => ({
      registerItem,
      unregisterItem,
      updateItemPosition,
      items,
      version,
    }),
    [registerItem, unregisterItem, updateItemPosition, items, version]
  );

  // Wheel Handler for Pan and Zoom
  React.useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (e.ctrlKey) {
        // Zoom
        const zoomSensitivity = 0.001;
        setScale((prevScale) => {
          const newScale = prevScale - e.deltaY * zoomSensitivity;
          return Math.min(Math.max(0.1, newScale), 5);
        });
      } else {
        // Pan
        setPosition((prevPos) => ({
          x: prevPos.x - e.deltaX,
          y: prevPos.y - e.deltaY,
        }));
      }
    };

    container.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      container.removeEventListener("wheel", onWheel);
    };
  }, []);

  const isHovering = React.useRef(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isHovering.current) return;

      if (e.ctrlKey || e.metaKey) {
        if (e.key === "=" || e.key === "+") {
          e.preventDefault();
          setScale((prev) => Math.min(5, prev + 0.1));
        } else if (e.key === "-") {
          e.preventDefault();
          setScale((prev) => Math.max(0.1, prev - 0.1));
        } else if (e.key === "0") {
          e.preventDefault();
          setScale(1);
          setPosition({ x: 0, y: 0 });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown, { passive: false });
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Right Click Pan Logic
  const isPanning = React.useRef(false);
  const startPanPos = React.useRef({ x: 0, y: 0 });
  const startPanOffset = React.useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    // Middle click (1) or Right click (2)
    if (e.button === 2 || e.button === 1) {
      e.preventDefault();
      // Only start pan if clicking directly on the container or if the target bubbles up and isn't stopped
      isPanning.current = true;
      startPanPos.current = { x: e.clientX, y: e.clientY };
      startPanOffset.current = { ...position };

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isPanning.current) return;
    const deltaX = e.clientX - startPanPos.current.x;
    const deltaY = e.clientY - startPanPos.current.y;
    setPosition({
      x: startPanOffset.current.x + deltaX,
      y: startPanOffset.current.y + deltaY,
    });
  };

  const handleMouseUp = () => {
    isPanning.current = false;
    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  };

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  // Edge Rendering Helper
  const getDotPosition = (
    el: HTMLElement,
    dot: "top" | "right" | "bottom" | "left" = "right"
  ) => {
    // We need relative position to the container content
    // Since items are children of the transform div, their offsetLeft/Top should be relative to it?
    // DiagramItems are absolute positioned.
    // However, they might have transforms (drag).
    // Let's use getBoundingClientRect and convert to local coordinate space.
    // Warning: This depends on the transform div ref.
    // Ideally we have a ref to the content div.
  };

  return (
    <DiagramContext.Provider value={contextValue}>
      <div
        ref={containerRef}
        className={cn(
          "relative w-full h-full overflow-hidden bg-gray-50/50 cursor-grab active:cursor-grabbing",
          className
        )}
        onMouseEnter={() => (isHovering.current = true)}
        onMouseLeave={() => (isHovering.current = false)}
        onMouseDown={handleMouseDown}
        onContextMenu={handleContextMenu}
        style={style}
        {...props}
      >
        <div
          id="diagram-content"
          className="absolute top-0 left-0 w-full h-full origin-top-left transition-transform duration-75 ease-out"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          }}
        >
          {/* Edges Layer */}
          <svg className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none z-0">
            <DiagramEdges edges={edges} items={items} version={version} />
          </svg>

          {/* Items Layer */}
          <div className="z-10 relative w-full h-full">{children}</div>
        </div>
      </div>
    </DiagramContext.Provider>
  );
};

const DiagramEdges = ({
  edges,
  items,
  version,
}: {
  edges: DiagramEdgeOptions[];
  items: Record<string, HTMLElement>;
  version: number;
}) => {
  // Helper to calculate positions
  const getPos = (
    id: string,
    dot: "top" | "right" | "bottom" | "left" | "auto" = "auto",
    targetId?: string
  ) => {
    const el = items[id];
    if (!el) return null;

    const contentDiv = el.closest("#diagram-content");
    if (!contentDiv) return null;

    const contentRect = contentDiv.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();

    const mat = new DOMMatrix(getComputedStyle(contentDiv).transform);
    const scale = mat.a;

    let x = (elRect.left - contentRect.left) / scale;
    let y = (elRect.top - contentRect.top) / scale;
    const w = elRect.width / scale;
    const h = elRect.height / scale;

    // Resolve 'auto' dot if needed
    let finalDot = dot;
    if (dot === "auto" && targetId && items[targetId]) {
      const targetEl = items[targetId];
      const targetRect = targetEl.getBoundingClientRect();

      // Calculate relative position based on centers (screen coords is fine)
      const center1 = {
        x: elRect.left + elRect.width / 2,
        y: elRect.top + elRect.height / 2,
      };
      const center2 = {
        x: targetRect.left + targetRect.width / 2,
        y: targetRect.top + targetRect.height / 2,
      };

      const dx = center2.x - center1.x;
      const dy = center2.y - center1.y;

      if (Math.abs(dx) > Math.abs(dy)) {
        // Horizontal dominant
        finalDot = dx > 0 ? "right" : "left";
      } else {
        // Vertical dominant
        finalDot = dy > 0 ? "bottom" : "top";
      }
    } else if (dot === "auto") {
      // Fallback default
      finalDot = "right";
    }

    let dir = { x: 0, y: 0 };
    switch (finalDot) {
      case "top":
        dir = { x: 0, y: -1 };
        return { x: x + w / 2, y: y, dir };
      case "bottom":
        dir = { x: 0, y: 1 };
        return { x: x + w / 2, y: y + h, dir };
      case "left":
        dir = { x: -1, y: 0 };
        return { x: x, y: y + h / 2, dir };
      case "right":
        dir = { x: 1, y: 0 };
        return { x: x + w, y: y + h / 2, dir };
    }
    return { x: x + w, y: y + h / 2, dir: { x: 1, y: 0 } };
  };

  const getBezierPath = (
    start: { x: number; y: number; dir: { x: number; y: number } },
    end: { x: number; y: number; dir: { x: number; y: number } }
  ) => {
    const dist = Math.sqrt(
      Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2)
    );
    // Straight segment length: 15% of dist or max 50px
    const straight = Math.min(dist * 0.15, 50);

    const p1 = {
      x: start.x + straight * start.dir.x,
      y: start.y + straight * start.dir.y,
    };

    const p2 = {
      x: end.x + straight * end.dir.x,
      y: end.y + straight * end.dir.y,
    };

    // Control points
    const k = Math.min(dist * 0.5, 150);
    const cp1 = { x: p1.x + k * start.dir.x, y: p1.y + k * start.dir.y };
    const cp2 = { x: p2.x + k * end.dir.x, y: p2.y + k * end.dir.y };

    return `M ${start.x} ${start.y} L ${p1.x} ${p1.y} C ${cp1.x} ${cp1.y}, ${cp2.x} ${cp2.y}, ${p2.x} ${p2.y} L ${end.x} ${end.y}`;
  };

  const getStepPath = (
    start: { x: number; y: number; dir: { x: number; y: number } },
    end: { x: number; y: number; dir: { x: number; y: number } }
  ) => {
    const margin = 20;
    const p1 = {
      x: start.x + margin * start.dir.x,
      y: start.y + margin * start.dir.y,
    };
    const p2 = {
      x: end.x + margin * end.dir.x,
      y: end.y + margin * end.dir.y,
    };

    let midPath = "";

    // Determine orientation based on start direction
    if (Math.abs(start.dir.x) > 0) {
      if (Math.abs(end.dir.x) > 0) {
        // Horizontal -> Horizontal
        const midX = (p1.x + p2.x) / 2;
        midPath = `L ${midX} ${p1.y} L ${midX} ${p2.y}`;
      } else {
        // Horizontal -> Vertical
        midPath = `L ${p2.x} ${p1.y}`;
      }
    } else {
      if (Math.abs(end.dir.y) > 0) {
        // Vertical -> Vertical
        const midY = (p1.y + p2.y) / 2;
        midPath = `L ${p1.x} ${midY} L ${p2.x} ${midY}`;
      } else {
        // Vertical -> Horizontal
        midPath = `L ${p1.x} ${p2.y}`;
      }
    }

    return `M ${start.x} ${start.y} L ${p1.x} ${p1.y} ${midPath} L ${p2.x} ${p2.y} L ${end.x} ${end.y}`;
  };

  return (
    <>
      {edges.map((edge) => {
        const fromPos = getPos(edge.from, edge.fromDot || "auto", edge.to);
        const toPos = getPos(edge.to, edge.toDot || "auto", edge.from);

        if (!fromPos || !toPos) return null;

        let path = "";
        if (edge.type === "step") {
          path = getStepPath(fromPos, toPos);
        } else if (edge.type === "straight") {
          path = `M ${fromPos.x} ${fromPos.y} L ${toPos.x} ${toPos.y}`;
        } else {
          path = getBezierPath(fromPos, toPos);
        }

        return (
          <g key={edge.id}>
            <path
              d={path}
              stroke={edge.color || "#9ca3af"}
              strokeWidth={edge.width || 2}
              fill="none"
              strokeDasharray={
                edge.style === "dashed"
                  ? "5,5"
                  : edge.style === "dotted"
                  ? "2,2"
                  : undefined
              }
            />
            {edge.label && (
              <text
                x={(fromPos.x + toPos.x) / 2}
                y={(fromPos.y + toPos.y) / 2 - 10}
                fill={edge.color || "#9ca3af"}
                textAnchor="middle"
                fontSize={12}
                className="bg-white px-1 font-medium text-xs rounded"
              >
                {edge.label}
              </text>
            )}
          </g>
        );
      })}
    </>
  );
};

export default DiagramLayout;
