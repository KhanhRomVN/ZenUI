import { useLocation } from "react-router-dom";
import ComponentSidebar from "./components/ComponentSidebar";
import AvatarSection from "./components/Section/AvatarSection";
import BadgeSection from "./components/Section/BadgeSection";
import BreadcrumbSection from "./components/Section/BreadcrumbSection";
import ButtonSection from "./components/Section/ButtonSection";
import CardSection from "./components/Section/CardSection";
import CheckboxSection from "./components/Section/CheckboxSection";
import CodeBlockSection from "./components/Section/CodeBlockSection";
import DividerSection from "./components/Section/DividerSection";
import DrawerSection from "./components/Section/DrawerSection";
import DropdownSection from "./components/Section/DropdownSection";
import InputSection from "./components/Section/InputSection";
import InputOTPSection from "./components/Section/InputOTPSection";
import MenuBarSection from "./components/Section/MenuBarSection";
import MenuTabSection from "./components/Section/MenuTabSection";
import ModalSection from "./components/Section/ModalSection";
import PaginationSection from "./components/Section/PaginationSection";

const ComponentsPage = () => {
  const location = useLocation();
  const section =
    new URLSearchParams(location.search).get("section") || "drawer";

  const renderSection = () => {
    switch (section) {
      case "avatar":
        return <AvatarSection />;
      case "badge":
        return <BadgeSection />;
      case "breadcrumb":
        return <BreadcrumbSection />;
      case "button":
        return <ButtonSection />;
      case "card":
        return <CardSection />;
      case "checkbox":
        return <CheckboxSection />;
      case "codeblock":
        return <CodeBlockSection />;
      case "divider":
        return <DividerSection />;
      case "drawer":
        return <DrawerSection />;
      case "dropdown":
        return <DropdownSection />;
      case "input":
        return <InputSection />;
      case "input-otp":
        return <InputOTPSection />;
      case "menubar":
        return <MenuBarSection />;
      case "menutab":
        return <MenuTabSection />;
      case "modal":
        return <ModalSection />;
      case "pagination":
        return <PaginationSection />;
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
