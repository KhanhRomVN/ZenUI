import { createContext, useContext } from "react";
import { DiagramContextType } from "./Diagram.types";

export const DiagramContext = createContext<DiagramContextType>({
  registerItem: () => {},
  unregisterItem: () => {},
  updateItemPosition: () => {},
  items: {},
  version: 0,
  activeId: null,
  activeNodeIds: new Set(),
  setActiveId: () => {},
});

export const useDiagram = () => useContext(DiagramContext);
