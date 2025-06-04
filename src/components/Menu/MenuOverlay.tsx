import React from 'react';
import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import { translations } from '../../utils/translations';
import { MenuCategoryType } from '../../types/menu';

interface MenuOverlayProps {
  onClose: () => void;
  categories: MenuCategoryType[];
  language: 'fr' | 'en';
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ onClose, categories, language }) => {
  const t = translations[language].menu;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-95 z-50 flex flex-col"
    >
      <div className="container-custom py-4 flex justify-end">
        <button
          onClick={onClose}
          className="text-white hover:text-gold transition-colors p-2"
          aria-label="Close menu"
        >
          <X size={32} />
        </button>
      </div>
      
      <div className="container-custom flex-grow overflow-y-auto py-8">
        <h2 className="text-gold text-3xl md:text-4xl font-bold mb-8 text-center font-playfair">
          {t.fullMenuTitle}
        </h2>
        
        <div className="flex flex-col space-y-8">
          {categories.map((category) => (
            <div key={category.id} className="bg-black bg-opacity-50 p-6 rounded-sm">
              <h3 className="text-gold text-2xl font-bold mb-4 font-playfair">
                {t.categories[category.id] || category.id}
              </h3>
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={category.menuImage}
                  alt={`${t.categories[category.id] || category.id} menu`}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MenuOverlay;