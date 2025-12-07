import React, { useState, useEffect } from "react";
import { TreeProps, TreeNode } from "./Tree.types";
import {
  getAllNodeIds,
  hasChildren,
  getDefaultIcon,
  getTreeNodeStyles,
} from "./Tree.utils";
import { ChevronRight, ChevronDown } from "lucide-react";

const Tree: React.FC<TreeProps> = ({
  data,
  onNodeClick,
  onNodeToggle,
  defaultExpandedIds = [],
  defaultExpandAll = false,
  showLines = true,
  showIcons = true,
  className = "",
  indentSize = 24,
  selectable = true,
  selectedId,
}) => {
  const [expandedIds, setExpandedIds] = useState<Set<string>>(
    new Set(defaultExpandAll ? getAllNodeIds(data) : defaultExpandedIds)
  );
  const [internalSelectedId, setInternalSelectedId] = useState<
    string | undefined
  >(selectedId);

  useEffect(() => {
    if (selectedId !== undefined) {
      setInternalSelectedId(selectedId);
    }
  }, [selectedId]);

  const toggleNode = (nodeId: string) => {
    const newExpandedIds = new Set(expandedIds);
    const isExpanded = newExpandedIds.has(nodeId);

    if (isExpanded) {
      newExpandedIds.delete(nodeId);
    } else {
      newExpandedIds.add(nodeId);
    }

    setExpandedIds(newExpandedIds);

    if (onNodeToggle) {
      onNodeToggle(nodeId, !isExpanded);
    }
  };

  const handleNodeClick = (node: TreeNode, e: React.MouseEvent) => {
    e.stopPropagation();

    if (node.disabled) return;

    if (selectable) {
      setInternalSelectedId(node.id);
    }

    if (onNodeClick) {
      onNodeClick(node);
    }
  };

  const renderNode = (node: TreeNode, level: number = 0): React.ReactNode => {
    const isExpanded = expandedIds.has(node.id);
    const hasChild = hasChildren(node);
    const isSelected = internalSelectedId === node.id;

    return (
      <div key={node.id} className={`tree-node ${node.className || ""}`.trim()}>
        {/* Node Content */}
        <div
          className="tree-node-content"
          style={{
            ...getTreeNodeStyles(level, indentSize, isSelected, !!node.disabled),
            display: "flex",
            alignItems: "center",
            padding: "6px 8px",
            transition: "all 0.2s ease",
            borderRadius: "4px",
            position: "relative",
          }}
          onClick={(e) => handleNodeClick(node, e)}
          onMouseEnter={(e) => {
          }}
          onMouseLeave={(e) => {
            if (!isSelected) {
              e.currentTarget.style.backgroundColor = "transparent";
            }
          }}
        >
          {/* Expand/Collapse Icon */}
          {hasChild ? (
            <button
              onClick={(e) => {
                e.stopPropagation();
                toggleNode(node.id);
              }}
              style={{
                background: "none",
                border: "none",
                padding: "0",
                marginRight: "4px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "16px",
                height: "16px",
              }}
            >
              {isExpanded ? (
                <ChevronDown size={16} />
              ) : (
                <ChevronRight size={16} />
              )}
            </button>
          ) : (
            <div style={{ width: "20px" }} />
          )}

          {/* Node Icon */}
          {showIcons && (
            <span
              style={{
                marginRight: "8px",
                fontSize: "16px",
                display: "flex",
                alignItems: "center",
              }}
            >
              {node.icon || getDefaultIcon(node, isExpanded)}
            </span>
          )}

          {/* Node Label */}
          <span
            style={{
              flex: 1,
              fontSize: "14px",
              userSelect: "none",
            }}
          >
            {node.label}
          </span>
        </div>

        {/* Children */}
        {hasChild && isExpanded && (
          <div className="tree-node-children">
            {node.children!.map((child) => renderNode(child, level + 1))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div
      className={`tree-container ${className}`.trim()}
      style={{
        fontFamily: "inherit",
        position: "relative",
      }}
    >
      {data.map((node) => renderNode(node, 0))}
    </div>
  );
};

export default Tree;
