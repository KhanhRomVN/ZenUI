import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { MenuBarProps, MenuItem } from "./MenuBar.types";
import {
  getMenuBarStyles,
  getMenuItemStyles,
  getSubMenuPosition,
} from "./MenuBar.utils";

const MenuBar: React.FC<MenuBarProps> = ({
  items = [],
  size = 100,
  orientation = "horizontal",
  className = "",
  onItemClick,
  activeItem,
  ...props
}) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [subMenuPosition, setSubMenuPosition] = useState<{
    top: number;
    left: number;
  } | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const activeItemRef = useRef<HTMLButtonElement>(null);

  const menuStyles = getMenuBarStyles(size, orientation);
  const itemStyles = getMenuItemStyles(size);

  const handleItemClick = (item: MenuItem, event: React.MouseEvent) => {
    if (item.items && item.items.length > 0) {
      // For items with submenus, toggle the submenu
      if (activeMenu === item.id) {
        setActiveMenu(null);
        setSubMenuPosition(null);
      } else {
        setActiveMenu(item.id);
        if (activeItemRef.current) {
          const position = getSubMenuPosition(
            activeItemRef.current,
            orientation
          );
          setSubMenuPosition(position);
        }
      }
    } else {
      // For regular items, trigger the click handler and close any open submenus
      setActiveMenu(null);
      setSubMenuPosition(null);
      if (onItemClick) {
        onItemClick(item, event);
      }
      if (item.onClick) {
        item.onClick(event);
      }
    }
  };

  const handleSubMenuItemClick = (
    parentItem: MenuItem,
    item: MenuItem,
    event: React.MouseEvent
  ) => {
    setActiveMenu(null);
    setSubMenuPosition(null);
    if (onItemClick) {
      onItemClick(item, event, parentItem);
    }
    if (item.onClick) {
      item.onClick(event);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setActiveMenu(null);
      setSubMenuPosition(null);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const renderMenuItem = (item: MenuItem, isSubMenu = false) => {
    const hasSubMenu = item.items && item.items.length > 0;
    const isActive = activeItem === item.id || activeMenu === item.id;

    return (
      <button
        ref={item.id === activeMenu ? activeItemRef : null}
        key={item.id}
        className={`menu-item ${isActive ? "menu-item-active" : ""} ${
          item.disabled ? "menu-item-disabled" : ""
        }`.trim()}
        style={itemStyles}
        onClick={(e) => !item.disabled && handleItemClick(item, e)}
        disabled={item.disabled}
        type="button"
      >
        {item.icon && (
          <span className="menu-item-icon">
            {typeof item.icon === "string" ? (
              <span className="menu-item-icon-text">{item.icon}</span>
            ) : (
              item.icon
            )}
          </span>
        )}
        <span className="menu-item-label">{item.label}</span>
        {hasSubMenu && (
          <span className="menu-item-chevron">
            {orientation === "horizontal" ? (
              <ChevronDown size={12} />
            ) : (
              <ChevronRight size={12} />
            )}
          </span>
        )}
      </button>
    );
  };

  const renderSubMenu = (parentItem: MenuItem) => {
    if (!parentItem.items || activeMenu !== parentItem.id) return null;

    return (
      <div
        className="submenu"
        style={{
          position: "absolute",
          top: subMenuPosition?.top || 0,
          left: subMenuPosition?.left || 0,
          zIndex: 1000,
        }}
      >
        <div className="submenu-content">
          {parentItem.items.map((item) => (
            <div key={item.id} className="submenu-item-wrapper">
              {renderSubMenuItem(parentItem, item)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderSubMenuItem = (parentItem: MenuItem, item: MenuItem) => {
    const hasSubMenu = item.items && item.items.length > 0;
    const isActive = activeItem === item.id;

    return (
      <button
        key={item.id}
        className={`submenu-item ${isActive ? "submenu-item-active" : ""} ${
          item.disabled ? "submenu-item-disabled" : ""
        }`.trim()}
        style={itemStyles}
        onClick={(e) =>
          !item.disabled && handleSubMenuItemClick(parentItem, item, e)
        }
        disabled={item.disabled}
        type="button"
      >
        {item.icon && (
          <span className="menu-item-icon">
            {typeof item.icon === "string" ? (
              <span className="menu-item-icon-text">{item.icon}</span>
            ) : (
              item.icon
            )}
          </span>
        )}
        <span className="menu-item-label">{item.label}</span>
        {hasSubMenu && (
          <span className="menu-item-chevron">
            <ChevronRight size={12} />
          </span>
        )}
        {hasSubMenu && renderNestedSubMenu(parentItem, item)}
      </button>
    );
  };

  const renderNestedSubMenu = (parentItem: MenuItem, item: MenuItem) => {
    if (!item.items || activeMenu !== item.id) return null;

    return (
      <div className="nested-submenu">
        <div className="submenu-content">
          {item.items.map((nestedItem) => (
            <div key={nestedItem.id} className="submenu-item-wrapper">
              {renderSubMenuItem(parentItem, nestedItem)}
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div
      ref={menuRef}
      className={`menubar ${className}`.trim()}
      style={menuStyles}
      {...props}
    >
      {items.map((item) => (
        <div key={item.id} className="menubar-item-wrapper">
          {renderMenuItem(item)}
          {item.items && item.items.length > 0 && renderSubMenu(item)}
        </div>
      ))}
    </div>
  );
};

export default MenuBar;
