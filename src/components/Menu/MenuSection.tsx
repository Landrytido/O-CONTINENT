import React, { useState, useCallback, lazy, Suspense, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChefHat,
  Sparkles,
  Loader2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useMenuFilters } from "./useMenuFilters";
import { allDishes, menuCategories, menuTranslations } from "./menuData";
import MenuFilters from "./MenuFilters";
import DishCard from "./DishCard";

const DishModal = lazy(() => import("./DishModal"));

interface MenuSectionProps {
  language: "fr" | "en";
}

const LoadingSpinner = memo(() => (
  <motion.div
    className="flex justify-center items-center py-8"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <Loader2 className="w-8 h-8 text-yellow-500 animate-spin" />
  </motion.div>
));

const EmptyState = memo(
  ({
    t,
    hasActiveFilters,
    onClearFilters,
  }: {
    t: any;
    hasActiveFilters: boolean;
    onClearFilters: () => void;
  }) => (
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
          onClick={onClearFilters}
          className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold px-6 py-3 rounded-full hover:from-yellow-300 hover:to-amber-400 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {t.clearFilters}
        </motion.button>
      )}
    </motion.div>
  )
);

const PaginationButton = memo(
  ({
    onClick,
    disabled,
    children,
    isActive = false,
  }: {
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    isActive?: boolean;
  }) => (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={`
        px-4 py-2 rounded-full font-medium transition-all duration-300
        ${
          isActive
            ? "bg-gradient-to-r from-yellow-400 to-amber-500 text-black shadow-lg"
            : disabled
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-white border border-gray-200 text-gray-600 hover:border-yellow-400 hover:shadow-md"
        }
      `}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
    >
      {children}
    </motion.button>
  )
);

const MenuSection: React.FC<MenuSectionProps> = memo(({ language = "fr" }) => {
  const [selectedDish, setSelectedDish] = useState<any | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const t = menuTranslations[language];

  const {
    filters,
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
  } = useMenuFilters(allDishes, language, 20);

  const handleDishClick = useCallback((dish: any) => {
    setSelectedDish(dish);
    setIsModalOpen(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedDish(null), 300);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>

      <section
        id="menu"
        className="py-16 bg-gradient-to-b from-gray-50 via-white to-gray-50 overflow-hidden"
      >
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-yellow-400/5 to-amber-500/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-black to-gray-700">
                {t.title}
              </span>
            </h2>
            <p
              className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              {t.description}
            </p>
            <motion.div
              className="h-1 w-20 mx-auto mt-6 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.div>

          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <MenuFilters
              categories={menuCategories}
              activeCategory={filters.activeCategory}
              onCategoryChange={setActiveCategory}
              searchTerm={filters.searchTerm}
              onSearchChange={setSearchTerm}
              showSignature={filters.showSignature}
              onSignatureToggle={toggleSignature}
              showPopular={filters.showPopular}
              onPopularToggle={togglePopular}
              showWeekendOnly={filters.showWeekendOnly}
              onWeekendToggle={toggleWeekendOnly}
              language={language}
              dishCounts={dishCounts}
              priceRange={filters.priceRange}
              onPriceRangeChange={setPriceRange}
              priceStats={priceStats}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {paginatedDishes.length === 0 ? (
              <EmptyState
                t={t}
                hasActiveFilters={hasActiveFilters}
                onClearFilters={clearAllFilters}
              />
            ) : (
              <>
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
                    <p
                      className="text-lg font-semibold text-gray-800"
                      style={{ fontFamily: "Inter, sans-serif" }}
                    >
                      {filterStats.totalResults > 0 && (
                        <>
                          Affichage {filterStats.startIndex}-
                          {filterStats.endIndex} sur {filterStats.totalResults}{" "}
                          plats
                        </>
                      )}
                    </p>
                  </div>

                  <div className="lg:hidden text-sm text-gray-600">
                    Page {filterStats.currentPage}/{totalPages}
                  </div>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
                  <AnimatePresence mode="wait">
                    {paginatedDishes.map((dish, index) => (
                      <motion.div
                        key={`${dish.id}-${filters.currentPage}`}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{
                          duration: 0.4,
                          delay: Math.min(index * 0.05, 0.3),
                        }}
                      >
                        <DishCard
                          dish={dish}
                          language={language}
                          onViewDetails={handleDishClick}
                          index={index}
                        />
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>

                {totalPages > 1 && (
                  <motion.div
                    className="flex flex-wrap items-center justify-center gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <PaginationButton
                      onClick={goToPreviousPage}
                      disabled={!filterStats.hasPreviousPage}
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </PaginationButton>

                    {pageNumbers.map((pageNum, index) => (
                      <React.Fragment key={index}>
                        {pageNum === -1 ? (
                          <span className="px-2 text-gray-400">...</span>
                        ) : (
                          <PaginationButton
                            onClick={() => setCurrentPage(pageNum)}
                            isActive={pageNum === filters.currentPage}
                          >
                            {pageNum}
                          </PaginationButton>
                        )}
                      </React.Fragment>
                    ))}

                    <PaginationButton
                      onClick={goToNextPage}
                      disabled={!filterStats.hasNextPage}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </PaginationButton>
                  </motion.div>
                )}
              </>
            )}
          </motion.div>
        </div>

        <Suspense fallback={<LoadingSpinner />}>
          <AnimatePresence>
            {isModalOpen && selectedDish && (
              <DishModal
                dish={selectedDish}
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                language={language}
              />
            )}
          </AnimatePresence>
        </Suspense>
      </section>
    </>
  );
});

MenuSection.displayName = "MenuSection";

export default MenuSection;
