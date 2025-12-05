import React, { useContext } from "react";
import { CarouselItemProps } from "./Carousel.types";
import { CarouselContext } from "./Carousel";
import { cn } from "../../../../shared/utils/cn";
import { getOpacity, getZIndex, getItemTransform } from "./Carousel.utils";

const CarouselItem: React.FC<CarouselItemProps> = ({
  children,
  className = "",
  index = 0,
  ...props
}) => {
  const context = useContext(CarouselContext);

  if (!context) {
    console.warn("CarouselItem must be used within Carousel");
    return null;
  }

  const { currentIndex, effect, slidesPerView } = context;

  const opacity =
    effect === "coverflow" && index !== currentIndex
      ? 0.4
      : getOpacity(effect, index, currentIndex, slidesPerView);
  const zIndex = getZIndex(effect, index, currentIndex);
  const transform = getItemTransform(
    effect,
    index,
    currentIndex,
    slidesPerView
  );

  return (
    <div
      className={cn(
        "carousel-item flex-shrink-0 transition-all duration-500 ease-in-out",
        effect === "coverflow" && "absolute",
        effect === "cube" && "absolute inset-0",
        effect === "flip" && "absolute inset-0",
        className
      )}
      style={{
        width: effect === "slide" ? `${100 / slidesPerView}%` : "100%",
        opacity,
        zIndex,
        transform,
        transformStyle: "preserve-3d",
        backfaceVisibility: "hidden",
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default CarouselItem;
