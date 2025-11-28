import { useLocation } from "react-router-dom";
import ComponentSidebar from "./components/ComponentSidebar";
import DrawerSection from "./components/Section/DrawerSection";

const ComponentsPage = () => {
  const location = useLocation();
  const section =
    new URLSearchParams(location.search).get("section") || "drawer";

  const renderSection = () => {
    switch (section) {
      case "drawer":
        return <DrawerSection />;
      default:
        return <DrawerSection />;
    }
  };

  return (
    <div className="flex h-full relative">
      <ComponentSidebar />
      <main className="flex-1 overflow-y-auto p-8 pr-64">
        {renderSection()}
      </main>
    </div>
  );
};

export default ComponentsPage;
