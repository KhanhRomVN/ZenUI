import { Link, useLocation } from "react-router-dom";

const ComponentSidebar = () => {
  const location = useLocation();
  const currentSection =
    new URLSearchParams(location.search).get("section") || "drawer";

  const components = [{ name: "Drawer", slug: "drawer" }];

  return (
    <aside className="w-64 border-r border-border-default bg-sidebar-background h-full overflow-y-auto p-4">
      <h2 className="text-lg font-semibold text-text-primary mb-4">
        Components
      </h2>
      <nav className="space-y-1">
        {components.map((component) => (
          <Link
            key={component.slug}
            to={`/components?section=${component.slug}`}
            className={`block px-4 py-2 rounded-lg transition-colors ${
              currentSection === component.slug
                ? "bg-sidebar-item-focus text-text-primary font-medium"
                : "text-text-secondary hover:bg-sidebar-item-hover hover:text-text-primary"
            }`}
          >
            {component.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
};

export default ComponentSidebar;
