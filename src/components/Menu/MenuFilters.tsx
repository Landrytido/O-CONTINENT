import React, { memo } from "react";
import { motion } from "framer-motion";
import {
  Star,
  Beef,
  Bird,
  Fish,
  Plus,
  Coffee,
  Wine,
  Beer,
  Martini,
  TrendingUp,
  Clock,
  Search,
  X,
  Euro,
} from "lucide-react";

interface MenuCategory {
  id: string;
  name: { fr: string; en: string };
  icon: string;
  color: string;
  order: number;
}

interface MenuFiltersProps {
  categories: MenuCategory[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  showSignature: boolean;
  onSignatureToggle: () => void;
  showPopular: boolean;
  onPopularToggle: () => void;
  showWeekendOnly: boolean;
  onWeekendToggle: () => void;
  language: "fr" | "en";
  dishCounts: Record<string, number>;
  priceRange?: [number, number];
  onPriceRangeChange?: (range: [number, number]) => void;
  priceStats?: { min: number; max: number };
}

const iconMap = {
  Star,
  Beef,
  Bird,
  Fish,
  Plus,
  Coffee,
  Wine,
  Beer,
  Martini,
};

const MenuFilters: React.FC<MenuFiltersProps> = memo(
  ({
    categories,
    activeCategory,
    onCategoryChange,
    searchTerm,
    onSearchChange,
    showSignature,
    onSignatureToggle,
    showPopular,
    onPopularToggle,
    showWeekendOnly,
    onWeekendToggle,
    language,
    dishCounts,
    priceRange = [0, 100],
    onPriceRangeChange,
    priceStats = { min: 0, max: 100 },
  }) => {
    const allCategories = [
      {
        id: "all",
        name: { fr: "Tout", en: "All" },
        icon: "Star",
        color: "from-gray-600 to-gray-700",
        order: 0,
      },
      ...categories,
    ];

    const getIcon = (iconName: string) => {
      const IconComponent = iconMap[iconName as keyof typeof iconMap] || Star;
      return IconComponent;
    };

    const translations = {
      fr: {
        signature: "Signature",
        popular: "Populaire",
        weekend: "Weekend",
        searchPlaceholder: "Rechercher un plat...",
        clearAll: "Effacer tout",
        activeFilters: "Filtres actifs:",
      },
      en: {
        signature: "Signature",
        popular: "Popular",
        weekend: "Weekend",
        searchPlaceholder: "Search for a dish...",
        clearAll: "Clear all",
        activeFilters: "Active filters:",
      },
    };

    const t = translations[language];

    return (
      <div className="space-y-4">
        <div className="md:max-w-4xl md:mx-auto">
          {/* LIGNE 1 : Catégories */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex gap-2 flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible no-scrollbar py-2 px-2 snap-x md:justify-center"
          >
            {allCategories.map((category, index) => {
              const IconComponent = getIcon(category.icon);
              const isActive = activeCategory === category.id;
              const count = dishCounts[category.id] || 0;

              return (
                <motion.button
                  key={category.id}
                  onClick={() => onCategoryChange(category.id)}
                  className={`relative flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg`
                      : "bg-white border border-gray-200 text-gray-600 hover:border-yellow-400 hover:shadow-md"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.03 }}
                >
                  <IconComponent
                    className={`w-4 h-4 ${
                      isActive ? "text-white" : "text-gray-500"
                    }`}
                  />
                  <span
                    className="text-sm font-medium"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {category.name[language]}
                  </span>
                  {count > 0 && (
                    <span
                      className={`text-xs font-bold px-1.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-white/20 text-white"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {count}
                    </span>
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          {/* LIGNE 2 : Filtres spéciaux */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex gap-3 flex-nowrap md:flex-wrap overflow-x-auto md:overflow-visible no-scrollbar py-2 px-2 md:justify-center md:max-w-3xl md:mx-auto"
          >
            <motion.button
              onClick={onSignatureToggle}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                showSignature
                  ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-yellow-400"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-4 h-4" />
              <span>{t.signature}</span>
              {showSignature && (
                <motion.div
                  className="w-2 h-2 bg-black/30 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </motion.button>

            <motion.button
              onClick={onPopularToggle}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                showPopular
                  ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-red-400"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <TrendingUp className="w-4 h-4" />
              <span>{t.popular}</span>
              {showPopular && (
                <motion.div
                  className="w-2 h-2 bg-white/40 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </motion.button>

            <motion.button
              onClick={onWeekendToggle}
              className={`flex-shrink-0 flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                showWeekendOnly
                  ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-purple-400"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Clock className="w-4 h-4" />
              <span>{t.weekend}</span>
              {showWeekendOnly && (
                <motion.div
                  className="w-2 h-2 bg-white/40 rounded-full"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                />
              )}
            </motion.button>
          </motion.div>
        </div>

        {/* LIGNE 3 : Recherche et Prix */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto"
        >
          {/* Barre de recherche */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder={t.searchPlaceholder}
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-12 pr-10 py-3 bg-white border border-gray-200 rounded-full focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all text-sm"
              style={{ fontFamily: "Inter, sans-serif" }}
            />
            {searchTerm && (
              <motion.button
                onClick={() => onSearchChange("")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <X className="w-4 h-4" />
              </motion.button>
            )}
          </div>

          {/* Filtre de prix */}
          {onPriceRangeChange && (
            <div className="flex items-center gap-3 bg-white border border-gray-200 rounded-full px-5 py-2.5">
              <Euro className="w-4 h-4 text-gray-500" />
              <span className="text-sm text-gray-600 font-medium">
                {priceRange[0]}€
              </span>
              <div className="relative w-32">
                <input
                  type="range"
                  min={priceStats.min}
                  max={priceStats.max}
                  value={priceRange[1]}
                  onChange={(e) =>
                    onPriceRangeChange([priceRange[0], Number(e.target.value)])
                  }
                  className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, #fbbf24 0%, #fbbf24 ${
                      ((priceRange[1] - priceStats.min) /
                        (priceStats.max - priceStats.min)) *
                      100
                    }%, #e5e7eb ${
                      ((priceRange[1] - priceStats.min) /
                        (priceStats.max - priceStats.min)) *
                      100
                    }%, #e5e7eb 100%)`,
                  }}
                />
                <style>{`
                  input[type="range"]::-webkit-slider-thumb {
                    appearance: none;
                    width: 16px;
                    height: 16px;
                    background: linear-gradient(135deg, #fbbf24, #f59e0b);
                    border: 2px solid white;
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                  }
                  input[type="range"]::-moz-range-thumb {
                    width: 16px;
                    height: 16px;
                    background: linear-gradient(135deg, #fbbf24, #f59e0b);
                    border: 2px solid white;
                    border-radius: 50%;
                    cursor: pointer;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.2);
                  }
                `}</style>
              </div>
              <span className="text-sm text-gray-600 font-medium">
                {priceRange[1]}€
              </span>
            </div>
          )}
        </motion.div>

        {/* Résumé des filtres actifs */}
        {(searchTerm ||
          showSignature ||
          showPopular ||
          showWeekendOnly ||
          activeCategory !== "all" ||
          (priceRange &&
            (priceRange[0] > priceStats.min ||
              priceRange[1] < priceStats.max))) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="bg-gray-50 rounded-xl p-3"
          >
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="text-gray-600 font-medium">
                {t.activeFilters}
              </span>

              {searchTerm && (
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                  "{searchTerm}"
                </span>
              )}

              {activeCategory !== "all" && (
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                  {
                    allCategories.find((c) => c.id === activeCategory)?.name[
                      language
                    ]
                  }
                </span>
              )}

              {showSignature && (
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs">
                  {t.signature}
                </span>
              )}

              {showPopular && (
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full text-xs">
                  {t.popular}
                </span>
              )}

              {showWeekendOnly && (
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full text-xs">
                  {t.weekend}
                </span>
              )}

              {priceRange &&
                (priceRange[0] > priceStats.min ||
                  priceRange[1] < priceStats.max) && (
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">
                    €{priceRange[0]} - €{priceRange[1]}
                  </span>
                )}

              <motion.button
                onClick={() => {
                  onCategoryChange("all");
                  onSearchChange("");
                  if (showSignature) onSignatureToggle();
                  if (showPopular) onPopularToggle();
                  if (showWeekendOnly) onWeekendToggle();
                  if (onPriceRangeChange)
                    onPriceRangeChange([priceStats.min, priceStats.max]);
                }}
                className="ml-auto text-gray-500 hover:text-gray-700 text-xs underline"
                whileHover={{ scale: 1.05 }}
              >
                {t.clearAll}
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    );
  }
);

MenuFilters.displayName = "MenuFilters";

export default MenuFilters;
