import { Link, useLocation } from "react-router-dom";
const ComponentSidebar = () => {
  const location = useLocation();
  const currentSection =
    new URLSearchParams(location.search).get("section") || "drawer";

  // Tự động sắp xếp components theo thứ tự A-Z
  const components = [
    { name: "Code Block", slug: "codeblock" },
    { name: "Drawer", slug: "drawer" },
  ].sort((a, b) => a.name.localeCompare(b.name));

  return (
    <aside className="w-64 h-full overflow-y-auto p-4">
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
