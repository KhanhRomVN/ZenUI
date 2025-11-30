import React from "react";
import { LucideIcon } from "lucide-react";
import { MenuTabProps, TabItem } from "./MenuTab.types";
import {
  getMenuTabStyles,
  getTabItemStyles,
  getActiveTabIndicatorStyles,
} from "./MenuTab.utils";

const MenuTab: React.FC<MenuTabProps> = ({
  items = [],
  activeTab,
  onTabChange,
  size = 100,
  variant = "default",
  orientation = "horizontal",
  className = "",
  ...props
}) => {
  const menuTabStyles = getMenuTabStyles(size, orientation, variant);
  const tabItemStyles = getTabItemStyles(size, variant);

  const handleTabClick = (tabId: string, event: React.MouseEvent) => {
    if (onTabChange) {
      onTabChange(tabId, event);
    }
  };

  const renderTabItem = (item: TabItem) => {
    const isActive = activeTab === item.id;
    const isDisabled = item.disabled;

    return (
      <button
        key={item.id}
        className={`tab-item ${isActive ? "tab-item-active" : ""} ${
          isDisabled ? "tab-item-disabled" : ""
        }`.trim()}
        style={tabItemStyles}
        onClick={(e) => !isDisabled && handleTabClick(item.id, e)}
        disabled={isDisabled}
        type="button"
        role="tab"
        aria-selected={isActive}
        aria-controls={`tabpanel-${item.id}`}
      >
        {item.icon && (
          <span className="tab-item-icon">
            {typeof item.icon === "string" ? (
              <span className="tab-item-icon-text">{item.icon}</span>
            ) : (
              item.icon
            )}
          </span>
        )}
        <span className="tab-item-label">{item.label}</span>
        {item.badge && <span className="tab-item-badge">{item.badge}</span>}
      </button>
    );
  };

  const renderActiveTabIndicator = () => {
    if (variant !== "default" || !activeTab) return null;

    const activeIndex = items.findIndex((item) => item.id === activeTab);
    if (activeIndex === -1) return null;

    return (
      <div
        className="active-tab-indicator"
        style={getActiveTabIndicatorStyles(
          activeIndex,
          items.length,
          orientation
        )}
      />
    );
  };

  const renderTabContent = () => {
    const activeItem = items.find((item) => item.id === activeTab);
    if (!activeItem || !activeItem.content) return null;

    return (
      <div
        id={`tabpanel-${activeItem.id}`}
        className="tab-content"
        role="tabpanel"
        aria-labelledby={`tab-${activeItem.id}`}
      >
        {activeItem.content}
      </div>
    );
  };

  return (
    <div className={`menutab-container ${className}`.trim()} {...props}>
      <div
        className={`menutab ${variant} ${orientation}`.trim()}
        style={menuTabStyles}
        role="tablist"
      >
        {renderActiveTabIndicator()}
        {items.map(renderTabItem)}
      </div>
      {renderTabContent()}
    </div>
  );
};

export default MenuTab;
