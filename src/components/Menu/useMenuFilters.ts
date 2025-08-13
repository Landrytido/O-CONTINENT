import { useState, useMemo, useCallback, useEffect } from "react";
import { Dish } from "./menuData";

interface FilterState {
  activeCategory: string;
  searchTerm: string;
  showSignature: boolean;
  showPopular: boolean;
  showWeekendOnly: boolean;
  priceRange: [number, number];
  currentPage: number;
  itemsPerPage: number;
}

export const useMenuFilters = (
  dishes: Dish[],
  language: "fr" | "en",
  itemsPerPage: number = 20
) => {
  const [filters, setFilters] = useState<FilterState>({
    activeCategory: "all",
    searchTerm: "",
    showSignature: false,
    showPopular: false,
    showWeekendOnly: false,
    priceRange: [0, 100],
    currentPage: 1,
    itemsPerPage: itemsPerPage,
  });

  const priceStats = useMemo(() => {
    const prices = dishes.map((d) => d.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  }, [dishes]);

  useEffect(() => {
    setFilters((prev) => ({
      ...prev,
      priceRange: [priceStats.min, priceStats.max],
    }));
  }, [priceStats.min, priceStats.max]);

  const filteredDishes = useMemo(() => {
    let result = [...dishes];

    if (filters.activeCategory !== "all") {
      result = result.filter(
        (dish) => dish.category === filters.activeCategory
      );
    }

    if (filters.searchTerm.trim()) {
      const term = filters.searchTerm.toLowerCase().trim();
      result = result.filter(
        (dish) =>
          dish.name[language].toLowerCase().includes(term) ||
          dish.description[language].toLowerCase().includes(term) ||
          dish.tags?.some((tag) => tag.toLowerCase().includes(term))
      );
    }

    if (filters.showSignature) {
      result = result.filter((dish) => dish.isSignature);
    }
    if (filters.showPopular) {
      result = result.filter((dish) => dish.isPopular);
    }
    if (filters.showWeekendOnly) {
      result = result.filter((dish) => dish.isWeekendOnly);
    }

    if (
      filters.priceRange[0] > priceStats.min ||
      filters.priceRange[1] < priceStats.max
    ) {
      result = result.filter(
        (dish) =>
          dish.price >= filters.priceRange[0] &&
          dish.price <= filters.priceRange[1]
      );
    }

    return result;
  }, [
    dishes,
    filters.activeCategory,
    filters.searchTerm,
    filters.showSignature,
    filters.showPopular,
    filters.showWeekendOnly,
    filters.priceRange,
    language,
    priceStats,
  ]);

  const totalPages = useMemo(() => {
    const pages = Math.ceil(filteredDishes.length / filters.itemsPerPage);
    return Math.max(1, pages);
  }, [filteredDishes.length, filters.itemsPerPage]);

  const paginatedDishes = useMemo(() => {
    const startIndex = (filters.currentPage - 1) * filters.itemsPerPage;
    const endIndex = startIndex + filters.itemsPerPage;
    return filteredDishes.slice(startIndex, endIndex);
  }, [filteredDishes, filters.currentPage, filters.itemsPerPage]);

  useEffect(() => {
    if (filters.currentPage > totalPages && totalPages > 0) {
      setFilters((prev) => ({
        ...prev,
        currentPage: Math.min(prev.currentPage, totalPages),
      }));
    }
  }, [totalPages]);

  const pageNumbers = useMemo(() => {
    const pages: number[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      const currentPage = filters.currentPage;

      if (currentPage <= 3) {
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push(-1);
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        pages.push(1);
        pages.push(-1);
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(-1);
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push(-1);
        pages.push(totalPages);
      }
    }

    return pages;
  }, [totalPages, filters.currentPage]);

  const dishCounts = useMemo(() => {
    const counts: Record<string, number> = { all: filteredDishes.length };

    const baseFiltered = dishes.filter((dish) => {
      let passes = true;

      if (filters.searchTerm.trim()) {
        const term = filters.searchTerm.toLowerCase().trim();
        passes =
          passes &&
          (dish.name[language].toLowerCase().includes(term) ||
            dish.description[language].toLowerCase().includes(term));
      }

      if (filters.showSignature) passes = passes && (dish.isSignature ?? false);
      if (filters.showPopular) passes = passes && (dish.isPopular ?? false);
      if (filters.showWeekendOnly)
        passes = passes && (dish.isWeekendOnly ?? false);

      if (
        filters.priceRange[0] > priceStats.min ||
        filters.priceRange[1] < priceStats.max
      ) {
        passes =
          passes &&
          dish.price >= filters.priceRange[0] &&
          dish.price <= filters.priceRange[1];
      }

      return passes;
    });

    baseFiltered.forEach((dish) => {
      counts[dish.category] = (counts[dish.category] || 0) + 1;
    });

    return counts;
  }, [dishes, filters, language, priceStats]);

  const hasActiveFilters = useMemo(() => {
    return (
      filters.activeCategory !== "all" ||
      filters.searchTerm.length > 0 ||
      filters.showSignature ||
      filters.showPopular ||
      filters.showWeekendOnly ||
      filters.priceRange[0] > priceStats.min ||
      filters.priceRange[1] < priceStats.max
    );
  }, [filters, priceStats]);

  const setActiveCategory = useCallback((category: string) => {
    setFilters((prev) => ({
      ...prev,
      activeCategory: category,
      currentPage: 1,
    }));
  }, []);

  const setSearchTerm = useCallback((term: string) => {
    setFilters((prev) => ({
      ...prev,
      searchTerm: term,
      currentPage: 1,
    }));
  }, []);

  const toggleSignature = useCallback(() => {
    setFilters((prev) => ({
      ...prev,
      showSignature: !prev.showSignature,
      currentPage: 1,
    }));
  }, []);

  const togglePopular = useCallback(() => {
    setFilters((prev) => ({
      ...prev,
      showPopular: !prev.showPopular,
      currentPage: 1,
    }));
  }, []);

  const toggleWeekendOnly = useCallback(() => {
    setFilters((prev) => ({
      ...prev,
      showWeekendOnly: !prev.showWeekendOnly,
      currentPage: 1,
    }));
  }, []);

  const setPriceRange = useCallback((range: [number, number]) => {
    setFilters((prev) => ({
      ...prev,
      priceRange: range,
      currentPage: 1,
    }));
  }, []);

  const setCurrentPage = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        setFilters((prev) => ({
          ...prev,
          currentPage: page,
        }));

        setTimeout(() => {
          const menuSection = document.getElementById("menu");
          if (menuSection) {
            menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 100);
      }
    },
    [totalPages]
  );

  const goToNextPage = useCallback(() => {
    if (filters.currentPage < totalPages) {
      setCurrentPage(filters.currentPage + 1);
    }
  }, [filters.currentPage, totalPages, setCurrentPage]);

  const goToPreviousPage = useCallback(() => {
    if (filters.currentPage > 1) {
      setCurrentPage(filters.currentPage - 1);
    }
  }, [filters.currentPage, setCurrentPage]);

  const clearAllFilters = useCallback(() => {
    setFilters({
      activeCategory: "all",
      searchTerm: "",
      showSignature: false,
      showPopular: false,
      showWeekendOnly: false,
      priceRange: [priceStats.min, priceStats.max],
      currentPage: 1,
      itemsPerPage: itemsPerPage,
    });
  }, [priceStats, itemsPerPage]);

  const filterStats = useMemo(() => {
    const startIndex =
      filteredDishes.length > 0
        ? (filters.currentPage - 1) * filters.itemsPerPage + 1
        : 0;
    const endIndex = Math.min(
      filters.currentPage * filters.itemsPerPage,
      filteredDishes.length
    );

    return {
      totalResults: filteredDishes.length,
      totalPages: totalPages,
      currentPage: filters.currentPage,
      startIndex,
      endIndex,
      hasNextPage: filters.currentPage < totalPages,
      hasPreviousPage: filters.currentPage > 1,
      activeFiltersCount: [
        filters.activeCategory !== "all",
        filters.searchTerm.length > 0,
        filters.showSignature,
        filters.showPopular,
        filters.showWeekendOnly,
        filters.priceRange[0] > priceStats.min ||
          filters.priceRange[1] < priceStats.max,
      ].filter(Boolean).length,
    };
  }, [filteredDishes, filters, totalPages, priceStats]);

  return {
    filters,

    filteredDishes,
    paginatedDishes,

    totalPages,
    pageNumbers,
    setCurrentPage,
    goToNextPage,
    goToPreviousPage,

    dishCounts,
    hasActiveFilters,
    filterStats,
    priceStats,

    setActiveCategory,
    setSearchTerm,
    toggleSignature,
    togglePopular,
    toggleWeekendOnly,
    setPriceRange,
    clearAllFilters,
  };
};
