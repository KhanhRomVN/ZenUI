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

// Seeded Random Generator for reproducible randomness
class SeededRandom {
  private seed: number;

  constructor(seed: number) {
    this.seed = seed;
  }

  next(): number {
    // Simple LCG (Linear Congruential Generator)
    this.seed = (this.seed * 9301 + 49297) % 233280;
    return this.seed / 233280;
  }

  range(min: number, max: number): number {
    return min + this.next() * (max - min);
  }
}

export interface LayoutResult {
  positions: Record<string, { x: number; y: number }>;
}

export function calculateLayout(
  nodes: LayoutNode[],
  edges: DiagramEdgeOptions[],
  options: any = {}
): LayoutResult {
  return smartHierarchicalLayout(nodes, edges, options);
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

  // Create truly random seed using multiple entropy sources
  const randomSeed =
    Date.now() + Math.random() * 100000 + performance.now() * Math.random();
  const rng = new SeededRandom(randomSeed);
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

  // 4. Layout Each Level with strong randomization
  let currentY = 0;
  const LEVEL_SPACING = 150; // Increased vertical spacing for better separation
  const GROUP_SPACING = 120; // Increased horizontal spacing between groups
  const RANDOM_OFFSET = 80; // Increased random offset range for breaking grid patterns

  levels.forEach((levelGroups) => {
    if (levelGroups.length === 0) return;

    // Add random shuffle with Barycenter influence (70% structure, 30% chaos)
    if (levelGroups.length > 0) {
      levelGroups.forEach((group) => {
        let sumX = 0;
        let count = 0;

        const groupNodeIds = new Set(group.nodes.map((n) => n.id));

        edges.forEach((edge) => {
          if (groupNodeIds.has(edge.to) && positions[edge.from]) {
            sumX += positions[edge.from].x;
            count++;
          }
        });

        // Add significant random noise to break determinism
        const randomNoise = rng.range(-500, 500);
        const baryCenter = count > 0 ? sumX / count : rng.range(-1000, 1000);
        (group as any)._sortScore = baryCenter + randomNoise;
      });

      levelGroups.sort((a: any, b: any) => {
        // Primary sort by score with random noise
        const scoreA = a._sortScore ?? rng.range(-2000, 2000);
        const scoreB = b._sortScore ?? rng.range(-2000, 2000);
        return scoreA - scoreB;
      });
    }

    // Shuffle group order slightly for variation
    if (rng.next() > 0.3) {
      for (let i = levelGroups.length - 1; i > 0; i--) {
        const j = Math.floor(rng.next() * (i + 1));
        [levelGroups[i], levelGroups[j]] = [levelGroups[j], levelGroups[i]];
      }
    }

    // First pass: Calculate dimensions for all groups in this level
    const groupLayouts = levelGroups.map((group) => {
      const layout = layoutGroupInternals(group, edges, rng);
      return { ...layout, group };
    });

    // Calculate total width to center the level
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

    groupLayouts.forEach(
      ({ width, height, nodePositions, group }, groupIndex) => {
        // Add very strong random offset with exponential variation
        const randomXOffset = rng.range(-RANDOM_OFFSET * 2, RANDOM_OFFSET * 2);
        const randomYOffset = rng.range(
          -RANDOM_OFFSET * 1.5,
          RANDOM_OFFSET * 1.5
        );

        // Assign global positions relative to group layout with randomization
        Object.entries(nodePositions).forEach(([nodeId, pos]) => {
          positions[nodeId] = {
            x: currentX + pos.x + randomXOffset,
            y: currentY + pos.y + randomYOffset,
          };
        });

        currentX += width + GROUP_SPACING;
        maxGroupHeight = Math.max(maxGroupHeight, height);
      }
    );

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
  allEdges: DiagramEdgeOptions[],
  rng: SeededRandom
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
    if (nodeIds.has(e.to)) entryNodes.add(e.to);
    if (nodeIds.has(e.from)) exitNodes.add(e.from);
  });

  // Sort nodes: Entry -> Internal -> Exit
  const sortedNodes = [...group.nodes].sort((a, b) => {
    const aIsEntry = entryNodes.has(a.id);
    const bIsEntry = entryNodes.has(b.id);
    const aIsExit = exitNodes.has(a.id);
    const bIsExit = exitNodes.has(b.id);

    if (aIsEntry && !bIsEntry) return -1;
    if (!aIsEntry && bIsEntry) return 1;
    if (aIsExit && !bIsExit) return 1;
    if (!aIsExit && bIsExit) return -1;
    return 0;
  });

  // ORGANIC GRID LAYOUT - Balance structure with strong randomness
  const localPositions: Record<string, { x: number; y: number }> = {};
  const NODE_GAP = 80; // Increased gap to prevent node overlap in wrappers
  const RANDOM_POSITION_OFFSET = 25; // Moderate random offset for subtle variation

  // Highly randomized column calculation to break patterns
  let baseColumns = 1;
  if (sortedNodes.length === 1) baseColumns = 1;
  else if (sortedNodes.length === 2) baseColumns = rng.next() > 0.3 ? 2 : 1;
  else if (sortedNodes.length <= 4) baseColumns = rng.next() > 0.5 ? 2 : 3;
  else if (sortedNodes.length <= 6) baseColumns = rng.next() > 0.4 ? 2 : 3;
  else if (sortedNodes.length <= 9) {
    const r = rng.next();
    baseColumns = r > 0.6 ? 2 : r > 0.3 ? 3 : 4;
  } else {
    baseColumns = Math.min(
      4,
      Math.ceil(Math.sqrt(sortedNodes.length)) + Math.floor(rng.range(-1, 2))
    );
  }

  const columns = Math.max(1, baseColumns);

  // Calculate positions in grid with better space utilization
  let currentX = FILE_GROUP_PADDING;
  let currentY = FILE_GROUP_PADDING;
  let maxColWidth: number[] = new Array(columns).fill(0);
  let rowHeights: number[] = [];
  let currentRow = 0;
  let currentCol = 0;

  sortedNodes.forEach((node, idx) => {
    const w = node.width || CODE_NODE_WIDTH;
    const h = node.height || CODE_NODE_DEFAULT_HEIGHT;

    // Track max width for this column (use slightly smaller default for better fit)
    maxColWidth[currentCol] = Math.max(
      maxColWidth[currentCol],
      Math.min(w, CODE_NODE_WIDTH * 0.95)
    );

    // Track max height for this row
    if (!rowHeights[currentRow]) rowHeights[currentRow] = 0;
    rowHeights[currentRow] = Math.max(rowHeights[currentRow], h);

    currentCol++;
    if (currentCol >= columns) {
      currentCol = 0;
      currentRow++;
    }
  });

  // Second pass: Place nodes using calculated column widths and row heights
  currentCol = 0;
  currentRow = 0;
  currentX = FILE_GROUP_PADDING;
  currentY = FILE_GROUP_PADDING;

  sortedNodes.forEach((node, idx) => {
    const w = node.width || CODE_NODE_WIDTH;
    const h = node.height || CODE_NODE_DEFAULT_HEIGHT;

    // Add moderate random offset for subtle organic feel
    const randomX = rng.range(-RANDOM_POSITION_OFFSET, RANDOM_POSITION_OFFSET);
    const randomY = rng.range(-RANDOM_POSITION_OFFSET, RANDOM_POSITION_OFFSET);

    // Subtle row offset for natural variation
    const rowOffsetX = currentCol > 0 ? rng.range(-15, 15) : 0;
    const rowOffsetY = rng.range(-15, 15);

    localPositions[node.id] = {
      x: currentX + randomX + rowOffsetX,
      y: currentY + randomY + rowOffsetY,
    };

    currentCol++;
    if (currentCol >= columns) {
      // Move to next row
      currentCol = 0;
      currentRow++;
      currentX = FILE_GROUP_PADDING;
      currentY += rowHeights[currentRow - 1] + NODE_GAP;
    } else {
      // Move to next column with controlled variation
      const gapVariation = rng.range(-20, 30);
      const columnGap = Math.max(NODE_GAP * 0.7, NODE_GAP + gapVariation);
      currentX += maxColWidth[currentCol - 1] + columnGap;
    }
  });

  // Calculate total dimensions with sufficient padding
  const extraPadding = RANDOM_POSITION_OFFSET * 2 + 30;
  const totalWidth =
    maxColWidth.reduce((a, b) => a + b, 0) +
    (columns - 1) * NODE_GAP +
    FILE_GROUP_PADDING * 2 +
    extraPadding * 2;
  const totalHeight =
    rowHeights.reduce((a, b) => a + b, 0) +
    (rowHeights.length - 1) * NODE_GAP +
    FILE_GROUP_PADDING * 2 +
    extraPadding * 2;

  return {
    width: totalWidth,
    height: totalHeight,
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
