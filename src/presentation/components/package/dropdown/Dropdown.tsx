import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DropdownProps, DropdownItem } from "./Dropdown.types";
import {
  getDropdownStyles,
  getMenuItemStyles,
  getIconSize,
  shouldShowIcon,
} from "./Dropdown.utils";

const Dropdown: React.FC<DropdownProps> = ({
  items = [],
  trigger = "click",
  placement = "bottom",
  size = 100,
  disabled = false,
  children,
  className = "",
  style,
  onSelect,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen);
    }
  };

  const handleItemClick = (item: DropdownItem, index: number) => {
    if (!item.disabled) {
      onSelect?.(item, index);
      setIsOpen(false);
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (trigger === "click") {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [trigger]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsOpen(false);
    }
  };

  const dropdownStyles = getDropdownStyles(size, disabled);
  const menuItemStyles = getMenuItemStyles(size);

  const renderTrigger = () => {
    if (children) {
      return children;
    }

    return (
      <button
        type="button"
        className="dropdown-trigger"
        style={{
          opacity: disabled ? 0.6 : 1,
          cursor: disabled ? "not-allowed" : "pointer",
        }}
        disabled={disabled}
      >
        <span>Menu</span>
        {isOpen ? (
          <ChevronUp size={getIconSize(size, true)} />
        ) : (
          <ChevronDown size={getIconSize(size, true)} />
        )}
      </button>
    );
  };

  return (
    <div
      ref={dropdownRef}
      className={`dropdown-base ${className}`.trim()}
      style={{
        ...dropdownStyles,
        ...style,
        position: "relative",
        display: "inline-block",
      }}
      onKeyDown={handleKeyDown}
      {...props}
    >
      <div
        onClick={trigger === "click" ? toggleDropdown : undefined}
        onMouseEnter={
          trigger === "hover" ? () => !disabled && setIsOpen(true) : undefined
        }
        onMouseLeave={trigger === "hover" ? () => setIsOpen(false) : undefined}
      >
        {renderTrigger()}
      </div>

      {isOpen && (
        <div
          className={`dropdown-menu dropdown-placement-${placement}`}
          style={{
            position: "absolute",
            zIndex: 50,
            minWidth: "160px",
            backgroundColor: "white",
            border: "1px solid #e5e7eb",
            borderRadius: "6px",
            boxShadow:
              "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
            padding: "4px 0",
          }}
        >
          {items.map((item, index) => (
            <div
              key={index}
              className={`dropdown-item ${item.disabled ? "disabled" : ""} ${
                item.type === "divider" ? "divider" : ""
              }`}
              style={menuItemStyles}
              onClick={() =>
                item.type !== "divider" && handleItemClick(item, index)
              }
            >
              {item.type === "divider" ? (
                <hr
                  style={{
                    margin: "4px 0",
                    border: "none",
                    borderTop: "1px solid #e5e7eb",
                  }}
                />
              ) : (
                <>
                  {shouldShowIcon(item.icon) && (
                    <span className="dropdown-item-icon">{item.icon}</span>
                  )}
                  <span className="dropdown-item-text">{item.label}</span>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
