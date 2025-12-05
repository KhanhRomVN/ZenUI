import { ComponentType, LazyExoticComponent, lazy } from "react";
import MainLayout from "../layouts/MainLayout";

interface RouteConfig {
  path: string;
  element: LazyExoticComponent<ComponentType<any>>;
  layout: ComponentType<{ children: React.ReactNode }>;
}

// Lazy load pages
const ComponentsPage = lazy(() => import("../pages/component"));
const HomePage = lazy(() => import("../pages/home"));
const LayoutPage = lazy(() => import("../pages/layout"));

const publicRoutes: RouteConfig[] = [
  {
    path: "/",
    element: HomePage,
    layout: MainLayout,
  },
  {
    path: "/components",
    element: ComponentsPage,
    layout: MainLayout,
  },
  {
    path: "/layout",
    element: LayoutPage,
    layout: MainLayout,
  },
];

export { publicRoutes };
