import { useState, useMemo, useCallback } from "react";
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
  // État des filtres
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

  // Calcul de la pagination
  const totalPages = useMemo(() => {
    return Math.ceil(filteredDishes.length / filters.itemsPerPage);
  }, [filteredDishes.length, filters.itemsPerPage]);

  // Plats de la page actuelle
  const paginatedDishes = useMemo(() => {
    const startIndex = (filters.currentPage - 1) * filters.itemsPerPage;
    const endIndex = startIndex + filters.itemsPerPage;
    return filteredDishes.slice(startIndex, endIndex);
  }, [filteredDishes, filters.currentPage, filters.itemsPerPage]);

  // Calcul des numéros de pages à afficher
  const pageNumbers = useMemo(() => {
    const pages: number[] = [];
    const maxVisiblePages = 5;

    if (totalPages <= maxVisiblePages) {
      // Si moins de 5 pages, on les affiche toutes
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Logique pour afficher ... quand il y a beaucoup de pages
      const currentPage = filters.currentPage;

      if (currentPage <= 3) {
        // Début : 1 2 3 4 ... dernière
        for (let i = 1; i <= 4; i++) {
          pages.push(i);
        }
        pages.push(-1); // -1 représente "..."
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 2) {
        // Fin : 1 ... avant-avant-dernière avant-dernière dernière
        pages.push(1);
        pages.push(-1);
        for (let i = totalPages - 3; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Milieu : 1 ... current-1 current current+1 ... dernière
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

  // Comptage des plats par catégorie
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

  // Vérifier si des filtres sont actifs
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

  // Fonctions de mise à jour optimisées
  const updateFilter = useCallback(
    <K extends keyof FilterState>(key: K, value: FilterState[K]) => {
      setFilters((prev) => ({
        ...prev,
        [key]: value,
        // Reset à la page 1 quand on change les filtres
        currentPage: key !== "currentPage" ? 1 : prev.currentPage,
      }));
    },
    []
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

  const setCurrentPage = useCallback(
    (page: number) => {
      // Validation de la page
      if (page >= 1 && page <= totalPages) {
        updateFilter("currentPage", page);
        // Scroll vers le haut de la section menu
        const menuSection = document.getElementById("menu");
        if (menuSection) {
          menuSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }
    },
    [updateFilter, totalPages]
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

  // Statistiques des filtres
  const filterStats = useMemo(() => {
    const startIndex = (filters.currentPage - 1) * filters.itemsPerPage + 1;
    const endIndex = Math.min(
      filters.currentPage * filters.itemsPerPage,
      filteredDishes.length
    );

    return {
      totalResults: filteredDishes.length,
      totalPages: totalPages,
      currentPage: filters.currentPage,
      startIndex: filteredDishes.length > 0 ? startIndex : 0,
      endIndex: endIndex,
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
    // État des filtres
    filters,

    // Données filtrées et paginées
    filteredDishes,
    paginatedDishes,

    // Pagination
    totalPages,
    pageNumbers,
    setCurrentPage,
    goToNextPage,
    goToPreviousPage,

    // Statistiques
    dishCounts,
    hasActiveFilters,
    filterStats,
    priceStats,

    // Fonctions de mise à jour des filtres
    setActiveCategory,
    setSearchTerm,
    toggleSignature,
    togglePopular,
    toggleWeekendOnly,
    setPriceRange,
    clearAllFilters,
  };
};
