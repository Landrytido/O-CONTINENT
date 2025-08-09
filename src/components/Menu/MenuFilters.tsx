import React from "react";
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
  Sparkles,
  Clock,
  TrendingUp,
  Search,
  X,
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

const MenuFilters: React.FC<MenuFiltersProps> = ({
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

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative max-w-md mx-auto"
      >
        <div className="relative">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder={
              language === "fr"
                ? "Rechercher un plat..."
                : "Search for a dish..."
            }
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-12 pr-10 py-3 bg-white border border-gray-200 rounded-full focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 transition-all"
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
      </motion.div>

      {/* Special Filters */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="flex flex-wrap justify-center gap-3"
      >
        <motion.button
          onClick={onSignatureToggle}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
            showSignature
              ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg"
              : "bg-white border border-gray-200 text-gray-600 hover:border-yellow-400"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Sparkles className="w-4 h-4" />
          {language === "fr" ? "Signature" : "Signature"}
        </motion.button>

        <motion.button
          onClick={onPopularToggle}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
            showPopular
              ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg"
              : "bg-white border border-gray-200 text-gray-600 hover:border-red-400"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <TrendingUp className="w-4 h-4" />
          {language === "fr" ? "Populaire" : "Popular"}
        </motion.button>

        <motion.button
          onClick={onWeekendToggle}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
            showWeekendOnly
              ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg"
              : "bg-white border border-gray-200 text-gray-600 hover:border-purple-400"
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Clock className="w-4 h-4" />
          {language === "fr" ? "Weekend" : "Weekend"}
        </motion.button>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="overflow-x-auto pb-2"
      >
        <div className="flex gap-3 min-w-max px-4 justify-center">
          {allCategories.map((category, index) => {
            const IconComponent = getIcon(category.icon);
            const isActive = activeCategory === category.id;
            const count = dishCounts[category.id] || 0;

            return (
              <motion.button
                key={category.id}
                onClick={() => onCategoryChange(category.id)}
                className={`relative flex flex-col items-center min-w-[120px] p-4 rounded-2xl transition-all duration-300 ${
                  isActive
                    ? `bg-gradient-to-br ${category.color} text-white shadow-xl scale-105`
                    : "bg-white border border-gray-200 text-gray-600 hover:border-yellow-400 hover:shadow-md"
                }`}
                whileHover={{ scale: isActive ? 1.05 : 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <motion.div
                  className={`p-2 rounded-full mb-2 ${
                    isActive ? "bg-white/20" : "bg-gray-100"
                  }`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <IconComponent
                    className={`w-5 h-5 ${
                      isActive ? "text-white" : "text-gray-600"
                    }`}
                  />
                </motion.div>

                <span
                  className="text-sm font-medium text-center leading-tight"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {category.name[language]}
                </span>

                {count > 0 && (
                  <motion.div
                    className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${
                      isActive
                        ? "bg-white text-gray-800"
                        : "bg-yellow-400 text-black"
                    }`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {count}
                  </motion.div>
                )}

                {isActive && (
                  <motion.div
                    className="absolute inset-0 rounded-2xl border-2 border-white/50"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* Active Filters Summary */}
      {(searchTerm ||
        showSignature ||
        showPopular ||
        showWeekendOnly ||
        activeCategory !== "all") && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-gray-50 rounded-xl p-4"
        >
          <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600">
            <span className="font-medium">
              {language === "fr" ? "Filtres actifs:" : "Active filters:"}
            </span>

            {searchTerm && (
              <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                "{searchTerm}"
              </span>
            )}

            {activeCategory !== "all" && (
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                {
                  allCategories.find((c) => c.id === activeCategory)?.name[
                    language
                  ]
                }
              </span>
            )}

            {showSignature && (
              <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">
                Signature
              </span>
            )}

            {showPopular && (
              <span className="bg-red-100 text-red-800 px-2 py-1 rounded-full">
                {language === "fr" ? "Populaire" : "Popular"}
              </span>
            )}

            {showWeekendOnly && (
              <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                Weekend
              </span>
            )}

            <motion.button
              onClick={() => {
                onCategoryChange("all");
                onSearchChange("");
                if (showSignature) onSignatureToggle();
                if (showPopular) onPopularToggle();
                if (showWeekendOnly) onWeekendToggle();
              }}
              className="ml-2 text-gray-400 hover:text-gray-600 text-xs underline"
              whileHover={{ scale: 1.05 }}
            >
              {language === "fr" ? "Effacer tout" : "Clear all"}
            </motion.button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default MenuFilters;
