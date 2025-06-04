import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import MenuCategory from './MenuCategory';
import MenuOverlay from './MenuOverlay';
import { menuCategories } from '../../data/menuData';
import { translations } from '../../utils/translations';

interface MenuSectionProps {
  language: 'fr' | 'en';
}

const MenuSection: React.FC<MenuSectionProps> = ({ language }) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFullMenu, setShowFullMenu] = useState(false);
  
  const t = translations[language].menu;

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const handleShowFullMenu = () => {
    setShowFullMenu(true);
  };

  return (
    <section id="menu" className="section-padding bg-black text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title inline-block after:left-1/2 after:-translate-x-1/2">
            {t.title}
          </h2>
          <p className="max-w-2xl mx-auto mt-4">
            {t.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
          {menuCategories.map((category, index) => (
            <MenuCategory
              key={category.id}
              category={category}
              onClick={() => handleCategoryClick(category.id)}
              language={language}
              index={index}
            />
          ))}
        </div>

        <div className="text-center">
          <motion.button
            onClick={handleShowFullMenu}
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t.viewFullMenu}
          </motion.button>
        </div>

        <AnimatePresence>
          {selectedCategory && (
            <div
              className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
              onClick={() => setSelectedCategory(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="max-w-4xl w-full max-h-[80vh] overflow-y-auto p-4"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={menuCategories.find(c => c.id === selectedCategory)?.menuImage || ''} 
                  alt={t.menuAlt}
                  className="w-full h-auto" 
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showFullMenu && (
            <MenuOverlay 
              onClose={() => setShowFullMenu(false)} 
              categories={menuCategories}
              language={language}
            />
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default MenuSection;