import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Dish } from "./menuData";
import DishCard from "./DishCard";

interface Props {
  dishes: Dish[];
  language: "fr" | "en";
  onViewDetails: (dish: Dish) => void;
  rowIndex?: number;
}

const MenuRowCarousel: React.FC<Props> = ({
  dishes,
  language,
  onViewDetails,
  rowIndex = 0,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollBy = (amount: number) => {
    if (!containerRef.current) return;
    containerRef.current.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className="relative">
      {/* Left button - hidden on very small screens but available for accessibility */}
      <button
        aria-label={`Scroll left row ${rowIndex + 1}`}
        onClick={() => scrollBy(-300)}
        className="absolute -left-2 top-1/2 -translate-y-1/2 z-20 flex sm:flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md"
      >
        <ChevronLeft className="w-4 h-4 text-gray-600" />
      </button>

      <div
        ref={containerRef}
        className="overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory flex gap-4 py-2 px-2 touch-pan-x"
      >
        {dishes.map((dish, i) => (
          <div
            key={dish.id}
            className="snap-start flex-shrink-0 w-56 sm:w-60 md:w-64"
          >
            <DishCard
              dish={dish}
              language={language}
              onViewDetails={onViewDetails}
              index={i}
            />
          </div>
        ))}
      </div>

      <button
        aria-label={`Scroll right row ${rowIndex + 1}`}
        onClick={() => scrollBy(300)}
        className="absolute -right-2 top-1/2 -translate-y-1/2 z-20 flex sm:flex items-center justify-center w-8 h-8 bg-white rounded-full shadow-md"
      >
        <ChevronRight className="w-4 h-4 text-gray-600" />
      </button>

      {/* Edge gradients to hint horizontal scroll */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white/90 to-transparent sm:hidden" />
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white/90 to-transparent sm:hidden" />
    </div>
  );
};

export default MenuRowCarousel;
