import React from "react";
import { ChevronRight, Home } from "lucide-react";
import { BreadcrumbProps, BreadcrumbItem } from "./Breadcrumb.types";
import {
  getBreadcrumbSizeStyles,
  getSeparatorIcon,
  shouldShowHomeIcon,
} from "./Breadcrumb.utils";

const Breadcrumb: React.FC<BreadcrumbProps> = ({
  items = [],
  size = 100,
  separator = "chevron",
  showHomeIcon = false,
  homeHref = "/",
  className = "",
  onItemClick,
  ...props
}) => {
  const sizeStyles = getBreadcrumbSizeStyles(size);
  const SeparatorIcon = getSeparatorIcon(separator);
  const showHome = shouldShowHomeIcon(showHomeIcon, items);

  const handleItemClick = (item: BreadcrumbItem, index: number) => {
    if (onItemClick) {
      onItemClick(item, index);
    }
  };

  const renderHomeItem = () => {
    if (!showHome) return null;

    return (
      <li className="breadcrumb-item">
        <a
          href={homeHref}
          className="breadcrumb-link breadcrumb-home"
          onClick={(e) => {
            e.preventDefault();
            handleItemClick({ label: "Home", href: homeHref }, 0);
          }}
          style={sizeStyles}
        >
          <Home size={sizeStyles.fontSize} />
        </a>
      </li>
    );
  };

  const renderBreadcrumbItem = (item: BreadcrumbItem, index: number) => {
    const isLast = index === items.length - 1;
    const homeOffset = showHome ? 1 : 0;
    const actualIndex = index + homeOffset;

    return (
      <React.Fragment key={item.id || index}>
        <li className="breadcrumb-item">
          {isLast ? (
            <span className="breadcrumb-current" style={sizeStyles}>
              {item.label}
            </span>
          ) : (
            <a
              href={item.href || "#"}
              className="breadcrumb-link"
              onClick={(e) => {
                if (item.href === "#") {
                  e.preventDefault();
                }
                handleItemClick(item, actualIndex);
              }}
              style={sizeStyles}
            >
              {item.label}
            </a>
          )}
        </li>
        {!isLast && (
          <li className="breadcrumb-separator" style={sizeStyles}>
            <SeparatorIcon size={sizeStyles.fontSize} />
          </li>
        )}
      </React.Fragment>
    );
  };

  return (
    <nav
      className={`breadcrumb-base ${className}`.trim()}
      aria-label="Breadcrumb"
      {...props}
    >
      <ol
        className="breadcrumb-list"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "4px",
          listStyle: "none",
          margin: 0,
          padding: 0,
        }}
      >
        {renderHomeItem()}
        {showHome && items.length > 0 && (
          <li className="breadcrumb-separator" style={sizeStyles}>
            <SeparatorIcon size={sizeStyles.fontSize} />
          </li>
        )}
        {items.map(renderBreadcrumbItem)}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
