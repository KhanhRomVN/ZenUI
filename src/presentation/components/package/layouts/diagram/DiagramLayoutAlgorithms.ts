import { DiagramEdgeOptions, LayoutNode } from "./Diagram.types";
import {
  CODE_NODE_WIDTH,
  CODE_NODE_DEFAULT_HEIGHT,
  FILE_GROUP_PADDING,
  FILE_GROUP_MARGIN,
  groupNodesByFile,
  groupNodesByCluster,
  FileGroup,
  ClusterGroup,
} from "./LayoutUtils";
import { LayoutStrategy } from "./Diagram.types";

export interface LayoutResult {
  positions: Record<string, { x: number; y: number }>;
}

/**
 * Main Layout Dispatcher
 */
export function calculateLayout(
  strategy: LayoutStrategy = "smart",
  nodes: LayoutNode[],
  edges: DiagramEdgeOptions[],
  options: any = {}
): LayoutResult {
  switch (strategy) {
    case "vertical":
      return verticalStackLayout(nodes);
    case "grid":
      return gridLayout(nodes);
    case "smart":
    default:
      return smartHierarchicalLayout(nodes, edges, options);
  }
}

/**
 * Simple Vertical Stack Layout
 * Groups by file, then stacks files vertically.
 */
function verticalStackLayout(nodes: LayoutNode[]): LayoutResult {
  const positions: Record<string, { x: number; y: number }> = {};
  const fileGroups = groupNodesByFile(nodes, []);

  let currentY = 0;
  const GAP_X = 50;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const GAP_Y = 50;
  const GROUP_GAP = 100;

  fileGroups.forEach((group) => {
    let currentX = 0;
    let maxHeightInRow = 0;

    // Position nodes in this group loosely horizontally
    group.nodes.forEach((node: any) => {
      const w = node.width || CODE_NODE_WIDTH;
      const h = node.height || CODE_NODE_DEFAULT_HEIGHT;

      positions[node.id] = { x: currentX, y: currentY };

      currentX += w + GAP_X;
      maxHeightInRow = Math.max(maxHeightInRow, h);
    });

    currentY += maxHeightInRow + GROUP_GAP;
  });

  return { positions };
}

/**
 * Simple Grid Layout
 * Ignores file groups, just packs everything in a grid.
 */
function gridLayout(nodes: LayoutNode[]): LayoutResult {
  const positions: Record<string, { x: number; y: number }> = {};
  const COLUMNS = Math.ceil(Math.sqrt(nodes.length));
  const X_SPACING = 400;
  const Y_SPACING = 300;

  nodes.forEach((node, index) => {
    const col = index % COLUMNS;
    const row = Math.floor(index / COLUMNS);

    positions[node.id] = {
      x: col * X_SPACING,
      y: row * Y_SPACING,
    };
  });

  return { positions };
}

// ==================== NEW HIERARCHICAL LAYOUT ====================

/**
 * Smart Hierarchical Layout (Layered + Structured)
 * - Levels: Files are arranged in levels based on dependencies (DAG).
 * - Internal: Nodes within a file are sorted (Entry -> Mid -> Exit).
 * - Alignment: Files are centered or aligned to produce straight lines.
 */
export function smartHierarchicalLayout(
  nodes: LayoutNode[],
  edges: DiagramEdgeOptions[],
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  options: any = {}
): LayoutResult {
  if (nodes.length === 0) return { positions: {} };

  const positions: Record<string, { x: number; y: number }> = {};

  // 1. Group nodes by "Cluster" (Wrapper OR File)
  const clusters = groupNodesByCluster(nodes, edges);

  // 2. Calculate Cluster Dependencies and Levels (Global Layering)
  const clusterLevels = calculateClusterLevels(clusters, edges);
  const maxLevel = Math.max(
    ...Array.from(clusterLevels.values(), (l) => l.level)
  );

  // 3. Group Clusters by Level
  const levels: ClusterGroup[][] = Array.from(
    { length: maxLevel + 1 },
    () => []
  );
  clusters.forEach((group) => {
    const levelInfo = clusterLevels.get(group.id);
    const levelIndex = levelInfo ? levelInfo.level : 0;
    levels[levelIndex].push(group);
  });

  // 4. Layout Each Level
  let currentY = 0;
  const LEVEL_SPACING = 150; // Vertical spacing (Reduced)

  levels.forEach((levelGroups) => {
    if (levelGroups.length === 0) return;

    // Sort groups based on Barycenter Heuristic (Average Parent X)
    // This keeps connected nodes close to each other.
    if (levelGroups.length > 0) {
      levelGroups.forEach((group) => {
        let sumX = 0;
        let count = 0;

        // Find incoming edges from nodes already positioned (previous levels)
        const groupNodeIds = new Set(group.nodes.map((n) => n.id));

        edges.forEach((edge) => {
          if (groupNodeIds.has(edge.to) && positions[edge.from]) {
            sumX += positions[edge.from].x;
            count++;
          }
        });

        // Store a sort score.
        // If no parents, use Infinity or -Infinity?
        // Use a stable secondary sort (label) if no parents.
        // Or finding "file" order from original nodes list?
        // Let's use a very large number if no parents, but maintain label order among them.
        (group as any)._sortScore = count > 0 ? sumX / count : null;
      });

      levelGroups.sort((a: any, b: any) => {
        if (a._sortScore !== null && b._sortScore !== null) {
          return a._sortScore - b._sortScore;
        }
        if (a._sortScore !== null) return 1; // Parents go last? No.
        if (b._sortScore !== null) return -1;

        return a.label.localeCompare(b.label);
      });
    }

    // Calculate Grid Width for this Level to Center it
    const GROUP_SPACING = 80; // Horizontal spacing (Reduced)

    // First pass: Calculate dimensions
    const groupLayouts = levelGroups.map((group) => {
      const layout = layoutGroupInternals(group, edges);
      return { ...layout, group };
    });

    const totalLevelWidth =
      groupLayouts.reduce((acc, l) => acc + l.width, 0) +
      (groupLayouts.length - 1) * GROUP_SPACING;

    // Assume diagram center is X=0 or we just start from -totalWidth/2
    // Let's effectively center around 0, or just shift relative to a "Canvas Center".
    // A simple visual trick is to align the "center" of this row to the "center" of the Layout.
    // Since we don't know the layout width yet, we can't perfectly center.
    // BUT, we can make them relatively centered.
    // Let's start X at -totalLevelWidth / 2.

    let currentX = -totalLevelWidth / 2;
    let maxGroupHeight = 0;

    groupLayouts.forEach(({ width, height, nodePositions, group }) => {
      // Assign global positions relative to group layout
      Object.entries(nodePositions).forEach(([nodeId, pos]) => {
        positions[nodeId] = {
          x: currentX + pos.x,
          y: currentY + pos.y,
        };
      });

      currentX += width + GROUP_SPACING;
      maxGroupHeight = Math.max(maxGroupHeight, height);
    });

    currentY += maxGroupHeight + LEVEL_SPACING;
  });

  return { positions };
}

/**
 * Arrange nodes INSIDE a file group.
 * Heuristic:
 * - Entry nodes (called by outside) -> Top
 * - Internal nodes -> Middle
 * - Exit nodes (calling outside) -> Bottom
 */
function layoutGroupInternals(
  group: ClusterGroup | FileGroup,
  allEdges: DiagramEdgeOptions[]
): {
  width: number;
  height: number;
  nodePositions: Record<string, { x: number; y: number }>;
} {
  const nodeIds = new Set(group.nodes.map((n) => n.id));
  const localEdges = group.edges;
  const externalEdges = allEdges.filter(
    (e) =>
      (nodeIds.has(e.from) && !nodeIds.has(e.to)) ||
      (!nodeIds.has(e.from) && nodeIds.has(e.to))
  );

  // Categorize Nodes
  const entryNodes = new Set<string>();
  const exitNodes = new Set<string>();

  externalEdges.forEach((e) => {
    if (nodeIds.has(e.to)) entryNodes.add(e.to); // Incoming from outside
    if (nodeIds.has(e.from)) exitNodes.add(e.from); // Outgoing to outside
  });

  // Sort nodes
  const sortedNodes = [...group.nodes].sort((a, b) => {
    const aIsEntry = entryNodes.has(a.id);
    const bIsEntry = entryNodes.has(b.id);
    const aIsExit = exitNodes.has(a.id);
    const bIsExit = exitNodes.has(b.id);

    if (aIsEntry && !bIsEntry) return -1;
    if (!aIsEntry && bIsEntry) return 1;
    if (aIsExit && !bIsExit) return 1;
    if (!aIsExit && bIsExit) return -1;
    return 0; // Keep relative order if same category
  });

  // Simple Vertical Stack for Internals
  const localPositions: Record<string, { x: number; y: number }> = {};
  let y = FILE_GROUP_PADDING;
  const x = FILE_GROUP_PADDING;
  let maxW = 0;
  const NODE_GAP = 20; // Reduced from 40

  sortedNodes.forEach((node) => {
    const w = node.width || CODE_NODE_WIDTH;
    const h = node.height || CODE_NODE_DEFAULT_HEIGHT;

    localPositions[node.id] = { x, y };

    y += h + NODE_GAP;
    maxW = Math.max(maxW, w);
  });

  return {
    width: maxW + FILE_GROUP_PADDING * 2,
    height: y + FILE_GROUP_PADDING - NODE_GAP, // remove last gap
    nodePositions: localPositions,
  };
}

/**
 * Determine the hierarchy level of each file.
 * Level 0 = Roots (files with no incoming calls from other files, OR Main).
 * Level N = Files called by Level N-1.
 */
/**
 * Determine the hierarchy level of each Cluster.
 * Level 0 = Roots (clusters with no incoming calls from other clusters, OR Main).
 * Level N = Clusters called by Level N-1.
 */
function calculateClusterLevels(
  groups: ClusterGroup[],
  edges: DiagramEdgeOptions[]
): Map<string, { level: number }> {
  const levels = new Map<string, { level: number }>();
  const clusterIds = groups.map((g) => g.id);

  // Build Cluster Graph
  const adjacency = new Map<string, Set<string>>();
  const inDegree = new Map<string, number>();

  clusterIds.forEach((id) => {
    adjacency.set(id, new Set());
    inDegree.set(id, 0);
  });

  // Populate graph
  edges.forEach((edge) => {
    const sourceGroup = groups.find((g) =>
      g.nodes.some((n) => n.id === edge.from)
    );
    const targetGroup = groups.find((g) =>
      g.nodes.some((n) => n.id === edge.to)
    );

    if (sourceGroup && targetGroup && sourceGroup.id !== targetGroup.id) {
      const src = sourceGroup.id;
      const tgt = targetGroup.id;
      if (!adjacency.get(src)!.has(tgt)) {
        adjacency.get(src)!.add(tgt);
        inDegree.set(tgt, (inDegree.get(tgt) || 0) + 1);
      }
    }
  });

  // BFS for Levels
  const queue: string[] = [];

  // Find roots
  clusterIds.forEach((id) => {
    if (inDegree.get(id)! === 0) {
      queue.push(id);
      levels.set(id, { level: 0 });
    }
  });

  // Handle cycles or no clear root (e.g. A->B->A or all connected)
  if (queue.length === 0 && clusterIds.length > 0) {
    // Try to find one with "main" in it
    const main =
      clusterIds.find((n) => n.toLowerCase().includes("main")) || clusterIds[0];
    queue.push(main);
    levels.set(main, { level: 0 });
  }

  while (queue.length > 0) {
    const u = queue.shift()!;
    const uLevel = levels.get(u)!.level;
    const neighbors = adjacency.get(u)!;

    neighbors.forEach((v) => {
      const currentVLevel = levels.get(v)?.level;
      const newVLevel = uLevel + 1;

      // Check for cycles by limiting depth
      // If level exceeds number of groups, we're in a loop. Stop updating.
      if (newVLevel > groups.length) return;

      if (currentVLevel === undefined || newVLevel > currentVLevel) {
        levels.set(v, { level: newVLevel });
        queue.push(v);
      }
    });
  }

  // Ensure all clusters have a level
  clusterIds.forEach((id) => {
    if (!levels.has(id)) {
      levels.set(id, { level: 0 });
    }
  });

  return levels;
}
