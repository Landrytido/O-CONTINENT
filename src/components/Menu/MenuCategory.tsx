import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '../../utils/translations';
import { MenuCategoryType } from '../../types/menu';

interface MenuCategoryProps {
  category: MenuCategoryType;
  onClick: () => void;
  language: 'fr' | 'en';
  index: number;
}

const MenuCategory: React.FC<MenuCategoryProps> = ({ category, onClick, language, index }) => {
  const t = translations[language].menu;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <div className="relative overflow-hidden rounded-sm">
        <img
          src={category.image}
          alt={t.categories[category.id as keyof typeof t.categories] || category.id}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center transition-opacity duration-300 group-hover:bg-opacity-60">
          <h3 className="text-gold text-xl md:text-2xl font-playfair font-bold">
            {t.categories[category.id as keyof typeof t.categories] || category.id}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuCategory;