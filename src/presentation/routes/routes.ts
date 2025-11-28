import { ComponentType, LazyExoticComponent, lazy } from "react";
import MainLayout from "../layouts/MainLayout";

interface RouteConfig {
  path: string;
  element: LazyExoticComponent<ComponentType<any>>;
  layout: ComponentType<{ children: React.ReactNode }>;
}

// Lazy load pages
const ComponentsPage = lazy(() => import("../pages/component"));

const publicRoutes: RouteConfig[] = [
  {
    path: "/",
    element: ComponentsPage,
    layout: MainLayout,
  },
  {
    path: "/components",
    element: ComponentsPage,
    layout: MainLayout,
  },
];

export { publicRoutes };
