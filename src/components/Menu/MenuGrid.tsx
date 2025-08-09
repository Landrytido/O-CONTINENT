import React from "react";
import { motion } from "framer-motion";
import { ChefHat, Sparkles } from "lucide-react";
import DishCard from "./DishCard";

interface Dish {
  id: string;
  name: { fr: string; en: string };
  description: { fr: string; en: string };
  price: number;
  category: string;
  image: string;
  isSignature?: boolean;
  isPopular?: boolean;
  isWeekendOnly?: boolean;
  priceRange?: string;
}

interface MenuGridProps {
  dishes: Dish[];
  language: "fr" | "en";
  onDishClick: (dish: Dish) => void;
  isLoading?: boolean;
}

const MenuGrid: React.FC<MenuGridProps> = ({
  dishes,
  language,
  onDishClick,
  isLoading = false,
}) => {
  const translations = {
    fr: {
      noDishes: "Aucun plat trouvé",
      noResultsDesc: "Essayez d'ajuster vos filtres ou votre recherche",
      loading: "Chargement des plats...",
      dishesFound: "plats trouvés",
      showing: "Affichage de",
    },
    en: {
      noDishes: "No dishes found",
      noResultsDesc: "Try adjusting your filters or search",
      loading: "Loading dishes...",
      dishesFound: "dishes found",
      showing: "Showing",
    },
  };

  const t = translations[language];

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="text-center py-8">
          <motion.div
            className="inline-block"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <ChefHat className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
          </motion.div>
          <p className="text-gray-600 text-lg">{t.loading}</p>
        </div>

        {/* Loading Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {Array.from({ length: 8 }).map((_, index) => (
            <motion.div
              key={index}
              className="bg-gray-200 rounded-2xl h-80 animate-pulse"
              initial={{ opacity: 0.3 }}
              animate={{ opacity: [0.3, 0.7, 0.3] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.1,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (dishes.length === 0) {
    return (
      <motion.div
        className="text-center py-16"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <ChefHat className="w-12 h-12 text-gray-400" />
          </div>
        </motion.div>

        <h3
          className="text-2xl font-bold text-gray-800 mb-3"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {t.noDishes}
        </h3>

        <p
          className="text-gray-600 max-w-md mx-auto"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {t.noResultsDesc}
        </p>

        {/* Animated decoration */}
        <motion.div
          className="mt-8 flex justify-center space-x-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-yellow-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Results Counter */}
      <motion.div
        className="flex items-center justify-between"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center gap-3">
          <div className="bg-yellow-100 p-2 rounded-lg">
            <Sparkles className="w-5 h-5 text-yellow-600" />
          </div>
          <div>
            <p
              className="text-lg font-semibold text-gray-800"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {t.showing} {dishes.length} {t.dishesFound}
            </p>
          </div>
        </div>

        {/* Sort Options (Future Enhancement) */}
        <motion.div
          className="hidden md:flex items-center gap-2"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          {/* Space for future sort options */}
        </motion.div>
      </motion.div>

      {/* Dishes Grid */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {dishes.map((dish, index) => (
          <motion.div
            key={dish.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              duration: 0.4,
              delay: Math.min(index * 0.05, 0.5),
            }}
          >
            <DishCard
              dish={dish}
              language={language}
              onViewDetails={onDishClick}
              index={index}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Load More Button (Future Enhancement) */}
      {dishes.length > 0 && (
        <motion.div
          className="text-center pt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          {/* Space for future "Load More" functionality */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </motion.div>
      )}

      {/* Floating Action Button for Mobile (Future Enhancement) */}
      <motion.div
        className="fixed bottom-6 right-6 md:hidden z-10"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring" }}
      >
        {/* Space for future floating action button */}
      </motion.div>

      {/* Performance Stats (Development Only) */}
      {process.env.NODE_ENV === "development" && (
        <motion.div
          className="fixed bottom-4 left-4 bg-black/80 text-white text-xs px-3 py-2 rounded-lg font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7 }}
          transition={{ delay: 2 }}
        >
          Rendered {dishes.length} dishes
        </motion.div>
      )}
    </div>
  );
};

export default MenuGrid;
