import React from "react";
import { BreadcrumbItemProps } from "./Breadcrumb.types";
import { getBreadcrumbSizeStyles, getIconSize } from "./Breadcrumb.utils";
import { cn } from "../../../../shared/utils/cn";

interface ExtendedBreadcrumbItemProps extends BreadcrumbItemProps {
  _isActive?: boolean;
  _size?: number;
}

const BreadcrumbItem: React.FC<ExtendedBreadcrumbItemProps> = ({
  icon,
  text,
  href,
  onClick,
  className = "",
  _isActive = false,
  _size = 100,
  ...props
}) => {
  const sizeStyles = getBreadcrumbSizeStyles(_size);
  const iconSize = getIconSize(_size);

  const handleClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  const renderIcon = () => {
    if (!icon) return null;

    try {
      // Kiểm tra React element trước (cho trường hợp icon={<Home />})
      if (React.isValidElement(icon)) {
        return icon;
      }

      // Kiểm tra function component (cho trường hợp icon={Home})
      if (typeof icon === "function") {
        const IconComponent = icon as React.ComponentType<{ size?: number }>;
        return <IconComponent size={iconSize} />;
      }

      // Fallback: render như ReactNode
      return <span className="inline-flex">{icon}</span>;
    } catch (error) {
      console.warn("Error rendering breadcrumb icon:", error);
      return null;
    }
  };

  const baseClasses = cn(
    "breadcrumb-item flex items-center",
    _isActive
      ? "text-text-primary font-medium cursor-default"
      : "text-text-secondary hover:text-text-primary transition-colors cursor-pointer",
    className
  );

  const iconElement = renderIcon();

  if (_isActive) {
    return (
      <li className={baseClasses} style={sizeStyles} {...props}>
        <span className="flex items-center gap-2">
          {iconElement}
          <span>{text}</span>
        </span>
      </li>
    );
  }

  if (href) {
    return (
      <li className={baseClasses} style={sizeStyles} {...props}>
        <a
          href={href}
          onClick={handleClick}
          className="breadcrumb-link flex items-center gap-2"
        >
          {iconElement}
          <span>{text}</span>
        </a>
      </li>
    );
  }

  return (
    <li
      className={baseClasses}
      style={sizeStyles}
      onClick={handleClick}
      {...props}
    >
      <span className="flex items-center gap-2">
        {iconElement}
        <span>{text}</span>
      </span>
    </li>
  );
};

export default BreadcrumbItem;
