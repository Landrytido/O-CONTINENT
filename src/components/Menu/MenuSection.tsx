import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Star, Sparkles, ChefHat } from "lucide-react";
import { useMenuFilters } from "./useMenuFilters";
import { allDishes, menuCategories, menuTranslations, Dish } from "./menuData";
import MenuFilters from "./MenuFilters";
import DishCard from "./DishCard";

interface MenuSectionProps {
  language: "fr" | "en";
}

const MenuSection: React.FC<MenuSectionProps> = ({ language = "fr" }) => {
  const [selectedDish, setSelectedDish] = useState<Dish | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const {
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
  } = useMenuFilters(allDishes, language);

  const t = menuTranslations[language];

  // Simulation de chargement initial
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleDishClick = (dish: Dish) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedDish(null), 300);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }
      `}</style>

      <section
        id="menu"
        className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
      >
        {/* Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-yellow-400/3 to-amber-500/3 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          {/* Plus d'éléments de background... */}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-black to-gray-700">
                {t.title}
              </span>
            </motion.h2>

            <motion.p
              className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t.description}
            </motion.p>

            <motion.div
              className="h-1 w-20 mx-auto mt-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          {/* Menu Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <MenuFilters
              categories={menuCategories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              searchTerm={searchTerm}
              onSearchChange={setSearchTerm}
              showSignature={showSignature}
              onSignatureToggle={toggleSignature}
              showPopular={showPopular}
              onPopularToggle={togglePopular}
              showWeekendOnly={showWeekendOnly}
              onWeekendToggle={toggleWeekendOnly}
              language={language}
              dishCounts={dishCounts}
              translations={t}
            />
          </motion.div>

          {/* Menu Content */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {isLoading ? (
              <div className="text-center py-12">
                <motion.div
                  className="inline-block"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <ChefHat className="w-12 h-12 text-yellow-500 mx-auto mb-4" />
                </motion.div>
                <p className="text-gray-600 text-lg">{t.loadingMenu}</p>
              </div>
            ) : filteredDishes.length === 0 ? (
              /* Empty State */
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <ChefHat className="w-12 h-12 text-gray-400" />
                </div>

                <h3
                  className="text-2xl font-bold text-gray-800 mb-3"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {t.noDishes}
                </h3>

                <p
                  className="text-gray-600 max-w-md mx-auto mb-6"
                  style={{ fontFamily: "Inter, sans-serif" }}
                >
                  {t.noResultsDesc}
                </p>

                {hasActiveFilters && (
                  <motion.button
                    onClick={clearAllFilters}
                    className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold px-6 py-3 rounded-full hover:from-yellow-300 hover:to-amber-400 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {t.clearFilters}
                  </motion.button>
                )}
              </motion.div>
            ) : (
              /* Menu Grid */
              <>
                {/* Results Counter */}
                <motion.div
                  className="flex items-center justify-between mb-8"
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
                        {t.showing} {filteredDishes.length} {t.dishesFound}
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Dishes Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                  {filteredDishes.map((dish, index) => (
                    <DishCard
                      key={dish.id}
                      dish={dish}
                      language={language}
                      onViewDetails={handleDishClick}
                      index={index}
                      translations={t}
                    />
                  ))}
                </div>

                {/* Stats Bar */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50"
                >
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                    <div>
                      <div className="text-2xl font-bold text-gray-800">
                        {filteredDishes.length}
                      </div>
                      <div className="text-sm text-gray-600">{t.plats}</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-yellow-600">
                        {filteredDishes.filter((d) => d.isSignature).length}
                      </div>
                      <div className="text-sm text-gray-600">Signature</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-red-600">
                        {filteredDishes.filter((d) => d.isPopular).length}
                      </div>
                      <div className="text-sm text-gray-600">
                        {t.populaires}
                      </div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">
                        €
                        {filteredDishes.length > 0
                          ? Math.min(
                              ...filteredDishes.map((d) => d.price)
                            ).toFixed(2)
                          : "0.00"}{" "}
                        - €
                        {filteredDishes.length > 0
                          ? Math.max(
                              ...filteredDishes.map((d) => d.price)
                            ).toFixed(2)
                          : "0.00"}
                      </div>
                      <div className="text-sm text-gray-600">
                        {t.priceRange}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </motion.div>
        </div>

        {/* Dish Detail Modal - Code existant... */}
        {/* Le modal reste dans MenuSection car il est spécifique à cette section */}
      </section>
    </>
  );
};

export default MenuSection;
