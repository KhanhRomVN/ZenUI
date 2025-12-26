import React, { useMemo } from "react";
import { useDiagram } from "./DiagramContext";
import { cn } from "../../../../../shared/utils/cn";
import { DiagramMinimapPosition } from "./Diagram.types";

interface DiagramMinimapProps {
  position?: DiagramMinimapPosition;
  width?: number;
  height?: number;
}

const DiagramMinimap: React.FC<DiagramMinimapProps> = ({
  position = "bottom-right",
  width = 200,
  height = 150,
}) => {
  const { items, viewport, version } = useDiagram();

  // Calculate Bounds of all items
  const bounds = useMemo(() => {
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;
    let hasItems = false;

    Object.values(items).forEach((el) => {
      // Logic to get position relative to content container
      // But wait! items[id] is the element itself.
      // We need its position relative to the #diagram-content div (which has the transform).
      // The diagram content is the parent of items usually (or grand parent).
      // Let's assume standard structure: DiagramLayout > #diagram-content > [Wrapper/Node]

      // We can use offsetLeft/Top if direct children, but wrappers might be nested.
      // Better to use getBoundingClientRect relative to #diagram-content.

      const contentDiv = el.closest("#diagram-content");
      if (!contentDiv) return;

      const contentRect = contentDiv.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();

      // Transform is applied to contentDiv.
      // To get "logical" coordinates (unscaled, un-translated relative to 0,0 of content):
      // We need to inverse the transform or just use the fact that contentDiv puts its origin at 0,0 before transform.
      // Actually, if we just want relative placement inside the contentDiv:
      // x = (elRect.left - contentRect.left) / scale
      // y = (elRect.top - contentRect.top) / scale
      // BUT, contentRect includes the transform (translate & scale).
      // So (elRect.left - contentRect.left) gives visual distance in pixels.
      // Dividing by scale gives logical distance.
      // Yes, this works.

      const mat = new DOMMatrix(getComputedStyle(contentDiv).transform);
      const scale = mat.a; // Scale X (assuming uniform)

      const x = (elRect.left - contentRect.left) / scale;
      const y = (elRect.top - contentRect.top) / scale;
      const w = elRect.width / scale;
      const h = elRect.height / scale;

      if (x < minX) minX = x;
      if (y < minY) minY = y;
      if (x + w > maxX) maxX = x + w;
      if (y + h > maxY) maxY = y + h;
      hasItems = true;
    });

    if (!hasItems)
      return {
        minX: 0,
        minY: 0,
        maxX: 100,
        maxY: 100,
        width: 100,
        height: 100,
      };

    // Add some padding
    const padding = 50;
    return {
      minX: minX - padding,
      minY: minY - padding,
      maxX: maxX + padding,
      maxY: maxY + padding,
      width: maxX - minX + 2 * padding,
      height: maxY - minY + 2 * padding,
    };
  }, [items, version]); // Depend on version or something? context.version

  // Calculate scale to fit bounds into minimap width/height
  const mapScale = Math.min(width / bounds.width, height / bounds.height);

  const getMapPos = (x: number, y: number) => {
    return {
      x: (x - bounds.minX) * mapScale,
      y: (y - bounds.minY) * mapScale,
    };
  };

  // Safe viewport values
  const vpX = -viewport.x / viewport.zoom;
  const vpY = -viewport.y / viewport.zoom;
  // Viewport width/height in logical coords?
  // We don't have container size in context easily yet without measuring.
  // Approximation: assume container is large? Or pass it in context?
  // Let's rely on standard logic:
  // The viewport (visible area) in logical coords starts at:
  // -viewport.x / zoom, -viewport.y / zoom
  // And has size: containerWidth / zoom, containerHeight / zoom.
  // Missing container size.
  // For now, let's visualize the ITEMS relative to each other.
  // And try to show a "Center" marker or just the items.

  // Position classes
  const posClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
  };

  return (
    <div
      className={cn(
        "absolute bg-white/90 border border-gray-200 shadow-lg rounded-lg overflow-hidden z-50 pointer-events-none",
        posClasses[position]
      )}
      style={{ width, height }}
    >
      <div className="relative w-full h-full">
        {Object.entries(items).map(([id, el]) => {
          // Re-calculate pos for render (optimization: move loop up logic)
          const contentDiv = el.closest("#diagram-content");
          if (!contentDiv) return null;
          const contentRect = contentDiv.getBoundingClientRect();
          const elRect = el.getBoundingClientRect();
          const mat = new DOMMatrix(getComputedStyle(contentDiv).transform);
          const scale = mat.a;
          const x = (elRect.left - contentRect.left) / scale;
          const y = (elRect.top - contentRect.top) / scale;
          const w = elRect.width / scale;
          const h = elRect.height / scale;

          const mapPos = getMapPos(x, y);

          return (
            <div
              key={id}
              className="absolute bg-blue-500/20 border border-blue-500/50 rounded-sm"
              style={{
                left: mapPos.x,
                top: mapPos.y,
                width: w * mapScale,
                height: h * mapScale,
              }}
            />
          );
        })}

        {/* Viewport Indicator (Approximate center/bounds) */}
        {/* Without container size, we can't draw the exact viewport rect easily. */}
        {/* But we know the origin (0,0 of diagram content) relative to current bounds. */}
        {/* Let's draw the bounds origin for reference? */}
      </div>
    </div>
  );
};

export default DiagramMinimap;
