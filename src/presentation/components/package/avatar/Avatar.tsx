import React from "react";
import { User } from "lucide-react";
import { AvatarProps } from "./Avatar.types";
import {
  getAvatarSizeStyles,
  getInitials,
  getFallbackBackground,
  getDotSize,
  getDotPosition,
  getDotIconSize,
} from "./Avatar.utils";

const Avatar: React.FC<AvatarProps> = ({
  size = 40,
  src,
  alt,
  name,
  icon,
  dotIcon,
  dotBgColor,
  shape = "circle",
  className = "",
  fallbackType = "icon",
  onClick,
  ...props
}) => {
  const [imageError, setImageError] = React.useState(false);
  const showImage = src && !imageError && !icon;
  const showFallback = !src && !icon;
  const showIcon = !!icon;

  // Lấy styles dựa trên size và shape
  const sizeStyles = getAvatarSizeStyles(size, shape);

  // Lấy dot styles
  const dotSize = getDotSize(size);
  const dotPosition = getDotPosition(size, dotSize);
  const dotIconSize = getDotIconSize(dotSize);

  // Lấy fallback background color
  const fallbackBackground = getFallbackBackground(name);

  // Xử lý lỗi ảnh
  const handleImageError = () => {
    setImageError(true);
  };

  // Render fallback content
  const renderFallback = () => {
    // Nếu có icon prop, hiển thị icon đó thay vì initials/User icon
    if (showIcon && icon) {
      return icon;
    }

    if (fallbackType === "initials" && name) {
      const initials = getInitials(name);
      return (
        <span
          className="avatar-initials"
          style={{
            fontSize: `${Math.max(size * 0.4, 12)}px`,
            fontWeight: 600,
            color: "#ffffff",
            textTransform: "uppercase",
          }}
        >
          {initials}
        </span>
      );
    }

    // Fallback icon
    return (
      <User
        size={size * 0.5}
        style={{
          color: "#ffffff",
          opacity: 0.8,
        }}
      />
    );
  };

  // Render icon dot
  const renderIconDot = () => {
    if (!dotIcon) return null;

    return (
      <div
        className="avatar-icon-dot"
        style={{
          position: "absolute",
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          borderRadius: "50%",
          border: "2px solid #ffffff",
          backgroundColor: dotBgColor || "#10B981",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...dotPosition,
        }}
      >
        {dotIcon}
      </div>
    );
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <div
      className={`avatar-base ${className}`.trim()}
      style={{
        ...sizeStyles,
        position: "relative",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        cursor: onClick ? "pointer" : "default",
        userSelect: "none",
      }}
      onClick={handleClick}
      {...props}
    >
      {/* Avatar Image */}
      {showImage && (
        <img
          src={src}
          alt={alt || name || "Avatar"}
          className="avatar-image"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "inherit",
          }}
          onError={handleImageError}
        />
      )}

      {/* Fallback */}
      {(showFallback || showIcon) && (
        <div
          className="avatar-fallback"
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "inherit",
            backgroundColor: fallbackBackground,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {renderFallback()}
        </div>
      )}

      {/* Icon Dot */}
      {renderIconDot()}
    </div>
  );
};

export default Avatar;
