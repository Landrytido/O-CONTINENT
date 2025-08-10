import { useState, useMemo, useCallback } from "react";
import { Dish } from "../data/menuData";

export const useMenuFilters = (dishes: Dish[], language: "fr" | "en") => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [showSignature, setShowSignature] = useState<boolean>(false);
  const [showPopular, setShowPopular] = useState<boolean>(false);
  const [showWeekendOnly, setShowWeekendOnly] = useState<boolean>(false);

  const filteredDishes = useMemo(() => {
    return dishes.filter((dish) => {
      if (activeCategory !== "all" && dish.category !== activeCategory)
        return false;
      if (
        searchTerm &&
        !dish.name[language].toLowerCase().includes(searchTerm.toLowerCase())
      )
        return false;
      if (showSignature && !dish.isSignature) return false;
      if (showPopular && !dish.isPopular) return false;
      if (showWeekendOnly && !dish.isWeekendOnly) return false;
      return true;
    });
  }, [
    dishes,
    activeCategory,
    searchTerm,
    showSignature,
    showPopular,
    showWeekendOnly,
    language,
  ]);

  const dishCounts = useMemo(() => {
    const counts: Record<string, number> = { all: filteredDishes.length };
    filteredDishes.forEach((dish) => {
      counts[dish.category] = (counts[dish.category] || 0) + 1;
    });
    return counts;
  }, [filteredDishes]);

  const hasActiveFilters = useMemo(() => {
    return (
      activeCategory !== "all" ||
      searchTerm.length > 0 ||
      showSignature ||
      showPopular ||
      showWeekendOnly
    );
  }, [activeCategory, searchTerm, showSignature, showPopular, showWeekendOnly]);

  const clearAllFilters = useCallback(() => {
    setActiveCategory("all");
    setSearchTerm("");
    setShowSignature(false);
    setShowPopular(false);
    setShowWeekendOnly(false);
  }, []);

  const toggleSignature = useCallback(
    () => setShowSignature((prev) => !prev),
    []
  );
  const togglePopular = useCallback(() => setShowPopular((prev) => !prev), []);
  const toggleWeekendOnly = useCallback(
    () => setShowWeekendOnly((prev) => !prev),
    []
  );

  return {
    activeCategory,
    searchTerm,
    showSignature,
    showPopular,
    showWeekendOnly,
    setActiveCategory,
    setSearchTerm,
    toggleSignature,
    togglePopular,
    toggleWeekendOnly,
    clearAllFilters,
    filteredDishes,
    dishCounts,
    hasActiveFilters,
  };
};
