import { useLocation } from "react-router-dom";
import ComponentSidebar from "./components/ComponentSidebar";
import DrawerSection from "./components/Section/DrawerSection";
import CodeBlockSection from "./components/Section/CodeBlockSection";

const ComponentsPage = () => {
  const location = useLocation();
  const section =
    new URLSearchParams(location.search).get("section") || "drawer";

  const renderSection = () => {
    switch (section) {
      case "drawer":
        return <DrawerSection />;
      case "codeblock":
        return <CodeBlockSection />;
      default:
        return <DrawerSection />;
    }
  };

  return (
    <div className="flex h-full relative">
      <ComponentSidebar />
      <main className="flex-1 overflow-y-auto p-8 pr-64" id="main-content">
        {renderSection()}
      </main>
    </div>
  );
};

export default ComponentsPage;
