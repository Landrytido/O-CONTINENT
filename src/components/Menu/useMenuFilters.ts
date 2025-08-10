// src/hooks/useMenuFilters.ts

import { useState, useMemo, useCallback, useEffect } from "react";
import { Dish } from "./menuData";

interface FilterState {
  activeCategory: string;
  searchTerm: string;
  showSignature: boolean;
  showPopular: boolean;
  showWeekendOnly: boolean;
  priceRange: [number, number];
  spiceLevel: number | null;
  currentPage: number;
  itemsPerPage: number;
}

export const useMenuFilters = (
  dishes: Dish[],
  language: "fr" | "en",
  initialItemsPerPage: number = 12
) => {
  // État des filtres
  const [filters, setFilters] = useState<FilterState>({
    activeCategory: "all",
    searchTerm: "",
    showSignature: false,
    showPopular: false,
    showWeekendOnly: false,
    priceRange: [0, 100],
    spiceLevel: null,
    currentPage: 1,
    itemsPerPage: initialItemsPerPage,
  });

  // État pour le lazy loading
  const [displayedItems, setDisplayedItems] = useState(initialItemsPerPage);
  const [isLoading, setIsLoading] = useState(false);

  // Calcul des prix min et max
  const priceStats = useMemo(() => {
    const prices = dishes.map((d) => d.price);
    return {
      min: Math.min(...prices),
      max: Math.max(...prices),
    };
  }, [dishes]);

  // Filtrage optimisé avec mémorisation
  const filteredDishes = useMemo(() => {
    let result = dishes;

    // Filtre par catégorie
    if (filters.activeCategory !== "all") {
      result = result.filter(
        (dish) => dish.category === filters.activeCategory
      );
    }

    // Filtre par recherche
    if (filters.searchTerm.trim()) {
      const term = filters.searchTerm.toLowerCase().trim();
      result = result.filter(
        (dish) =>
          dish.name[language].toLowerCase().includes(term) ||
          dish.description[language].toLowerCase().includes(term) ||
          dish.tags?.some((tag) => tag.toLowerCase().includes(term))
      );
    }

    // Filtres par badges
    if (filters.showSignature) {
      result = result.filter((dish) => dish.isSignature);
    }
    if (filters.showPopular) {
      result = result.filter((dish) => dish.isPopular);
    }
    if (filters.showWeekendOnly) {
      result = result.filter((dish) => dish.isWeekendOnly);
    }

    // Filtre par prix
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

    // Filtre par niveau d'épice
    if (filters.spiceLevel !== null) {
      result = result.filter((dish) => dish.spiceLevel === filters.spiceLevel);
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
    filters.spiceLevel,
    language,
    priceStats,
  ]);

  const paginatedDishes = useMemo(() => {
    const startIndex = (filters.currentPage - 1) * filters.itemsPerPage;
    const endIndex = startIndex + filters.itemsPerPage;
    return filteredDishes.slice(startIndex, endIndex);
  }, [filteredDishes, filters.currentPage, filters.itemsPerPage]);

  const displayedDishes = useMemo(() => {
    return filteredDishes.slice(0, displayedItems);
  }, [filteredDishes, displayedItems]);

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

      if (filters.spiceLevel !== null) {
        passes = passes && dish.spiceLevel === filters.spiceLevel;
      }

      return passes;
    });

    baseFiltered.forEach((dish) => {
      counts[dish.category] = (counts[dish.category] || 0) + 1;
    });

    return counts;
  }, [dishes, filters, language, priceStats]);

  // Vérifier si des filtres sont actifs
  const hasActiveFilters = useMemo(() => {
    return (
      filters.activeCategory !== "all" ||
      filters.searchTerm.length > 0 ||
      filters.showSignature ||
      filters.showPopular ||
      filters.showWeekendOnly ||
      filters.priceRange[0] > priceStats.min ||
      filters.priceRange[1] < priceStats.max ||
      filters.spiceLevel !== null
    );
  }, [filters, priceStats]);

  // Fonctions de mise à jour optimisées
  const updateFilter = useCallback(
    <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
      setFilters((prev) => ({
        ...prev,
        [key]: value,
        currentPage: 1, // Reset page on filter change
      }));
      setDisplayedItems(initialItemsPerPage); // Reset lazy loading
    },
    [initialItemsPerPage]
  );

  const setActiveCategory = useCallback(
    (category: string) => {
      updateFilter("activeCategory", category);
    },
    [updateFilter]
  );

  const setSearchTerm = useCallback(
    (term: string) => {
      updateFilter("searchTerm", term);
    },
    [updateFilter]
  );

  const toggleSignature = useCallback(() => {
    updateFilter("showSignature", !filters.showSignature);
  }, [filters.showSignature, updateFilter]);

  const togglePopular = useCallback(() => {
    updateFilter("showPopular", !filters.showPopular);
  }, [filters.showPopular, updateFilter]);

  const toggleWeekendOnly = useCallback(() => {
    updateFilter("showWeekendOnly", !filters.showWeekendOnly);
  }, [filters.showWeekendOnly, updateFilter]);

  const setPriceRange = useCallback(
    (range: [number, number]) => {
      updateFilter("priceRange", range);
    },
    [updateFilter]
  );

  const setSpiceLevel = useCallback(
    (level: number | null) => {
      updateFilter("spiceLevel", level);
    },
    [updateFilter]
  );

  const setCurrentPage = useCallback(
    (page: number) => {
      updateFilter("currentPage", page);
    },
    [updateFilter]
  );

  const clearAllFilters = useCallback(() => {
    setFilters({
      activeCategory: "all",
      searchTerm: "",
      showSignature: false,
      showPopular: false,
      showWeekendOnly: false,
      priceRange: [priceStats.min, priceStats.max],
      spiceLevel: null,
      currentPage: 1,
      itemsPerPage: initialItemsPerPage,
    });
    setDisplayedItems(initialItemsPerPage);
  }, [priceStats, initialItemsPerPage]);

  // Fonction pour charger plus d'éléments (lazy loading)
  const loadMoreItems = useCallback(() => {
    if (displayedItems < filteredDishes.length && !isLoading) {
      setIsLoading(true);

      // Simuler un délai de chargement
      setTimeout(() => {
        setDisplayedItems((prev) =>
          Math.min(prev + initialItemsPerPage, filteredDishes.length)
        );
        setIsLoading(false);
      }, 500);
    }
  }, [displayedItems, filteredDishes.length, initialItemsPerPage, isLoading]);

  // Fonction pour détecter le scroll
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 100
      ) {
        loadMoreItems();
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loadMoreItems]);

  // Statistiques des filtres
  const filterStats = useMemo(
    () => ({
      totalResults: filteredDishes.length,
      totalPages: Math.ceil(filteredDishes.length / filters.itemsPerPage),
      hasMore: displayedItems < filteredDishes.length,
      activeFiltersCount: [
        filters.activeCategory !== "all",
        filters.searchTerm.length > 0,
        filters.showSignature,
        filters.showPopular,
        filters.showWeekendOnly,
        filters.priceRange[0] > priceStats.min ||
          filters.priceRange[1] < priceStats.max,
        filters.spiceLevel !== null,
      ].filter(Boolean).length,
    }),
    [filteredDishes, filters, displayedItems, priceStats]
  );

  return {
    // État des filtres
    filters,

    // Données filtrées
    filteredDishes,
    paginatedDishes,
    displayedDishes,

    // Statistiques
    dishCounts,
    hasActiveFilters,
    filterStats,
    priceStats,

    // Fonctions de mise à jour
    setActiveCategory,
    setSearchTerm,
    toggleSignature,
    togglePopular,
    toggleWeekendOnly,
    setPriceRange,
    setSpiceLevel,
    setCurrentPage,
    clearAllFilters,
    loadMoreItems,

    // État du chargement
    isLoading,
  };
};
