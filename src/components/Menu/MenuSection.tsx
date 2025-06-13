import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Sparkles, Star } from 'lucide-react';

// Simulation des données de menu pour la démo
const menuCategories = [
  {
    id: 'entrees',
    name: { fr: 'Entrées', en: 'Appetizers' },
    image: '/entree.jpg',
    menuImage: '/entree.jpeg',
    description: { fr: 'Découvrez nos délicieuses entrées', en: 'Discover our delicious appetizers' }
  },
  {
    id: 'plats',
    name: { fr: 'Plats Principaux', en: 'Main Courses' },
    image: '/plat2.jpeg',
    menuImage: '/plat2.jpeg',
    description: { fr: 'Nos spécialités africaines authentiques', en: 'Our authentic African specialties' }
  },
  {
    id: 'grillades',
    name: { fr: 'Grillades', en: 'Grilled' },
    image: 'https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    menuImage: 'https://images.pexels.com/photos/1307658/pexels-photo-1307658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    description: { fr: 'Viandes grillées à la perfection', en: 'Perfectly grilled meats' }
  },
  {
    id: 'poissons',
    name: { fr: 'Poissons', en: 'Fish' },
    image: 'https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    menuImage: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: { fr: 'Poissons frais et savoureux', en: 'Fresh and flavorful fish' }
  },
  {
    id: 'desserts',
    name: { fr: 'Desserts', en: 'Desserts' },
    image: '/dessert.jpg',
    menuImage: '/dessert.jpg',
    description: { fr: 'Douceurs traditionnelles', en: 'Traditional sweets' }
  },
  {
    id: 'boissons',
    name: { fr: 'Boissons', en: 'Beverages' },
    image: '/boisons.jpg',
    menuImage: '/boisons.jpg',
    description: { fr: 'Boissons rafraîchissantes', en: 'Refreshing beverages' }
  },
  {
    id: 'liqueurs',
    name: { fr: 'liqueurs', en: 'liqueurs' },
    image: 'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    menuImage: 'https://images.pexels.com/photos/3566120/pexels-photo-3566120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: { fr: 'Cocktails créatifs et rafraîchissants', en: 'Creative and refreshing cocktails' }
  },
  {
    id: 'Sauces',
    name: { fr: 'Sauces', en: 'Sautes' },
     image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    menuImage: 'https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: { fr: 'Plats  savoureux', en: 'Delicious  dishes' }
  },
  {
    id: 'Poulet',
    name: { fr: 'Poulet', en: 'Chicken' },
    image: 'https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    menuImage: 'https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: { fr: 'Poulet tendre et juteux', en: 'Tender and juicy chicken' }
  },
];

const translations = {
  fr: {
    menu: {
      title: "Notre Menu",
      description: "Découvrez notre sélection de plats authentiques préparés avec passion et des ingrédients de qualité.",
      viewFullMenu: "Voir le Menu Complet",
      menuAlt: "Menu de la catégorie"
    }
  },
  en: {
    menu: {
      title: "Our Menu",
      description: "Discover our selection of authentic dishes prepared with passion and quality ingredients.",
      viewFullMenu: "View Full Menu",
      menuAlt: "Category menu"
    }
  }
};

// Composant MenuCategory simplifié
const MenuCategory: React.FC<{
  category: any;
  onClick: () => void;
  language: string;
  index: number;
}> = ({ category, onClick, language, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg border border-gray-800/50"
    onClick={onClick}
    whileHover={{ y: -4, scale: 1.02 }}
  >
    <img 
      src={category.image} 
      alt={category.name[language as keyof typeof category.name]}
      className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    <div className="absolute bottom-0 left-0 right-0 p-3">
      <h3 
        className="text-white font-bold text-lg mb-1"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {category.name[language as keyof typeof category.name]}
      </h3>
      <p 
        className="text-gray-300 text-sm"
        style={{ fontFamily: 'Inter, sans-serif' }}
      >
        {category.description[language as keyof typeof category.description]}
      </p>
    </div>
    {/* Effet de brillance */}
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
    />
  </motion.div>
);

// Composant MenuOverlay simplifié
const MenuOverlay: React.FC<{
  onClose: () => void;
  categories: any[];
  language: string;
}> = ({ onClose, categories, language }) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={onClose}
  >
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.8, opacity: 0 }}
      className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="sticky top-0 bg-black/50 backdrop-blur-sm p-4 border-b border-white/20">
        <div className="flex justify-between items-center">
          <h2 
            className="text-2xl font-bold text-white"
            style={{ fontFamily: 'Playfair Display, serif' }}
          >
            Menu Complet
          </h2>
          <motion.button
            onClick={onClose}
            className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <X className="w-6 h-6 text-white" />
          </motion.button>
        </div>
      </div>
      <div className="p-6 grid md:grid-cols-2 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="space-y-3"
          >
            <h3 
              className="text-xl font-bold text-yellow-400"
              style={{ fontFamily: 'Playfair Display, serif' }}
            >
              {category.name[language as keyof typeof category.name]}
            </h3>
            <img 
              src={category.menuImage} 
              alt={category.name[language as keyof typeof category.name]}
              className="w-full h-48 object-cover rounded-lg"
            />
          </motion.div>
        ))}
      </div>
    </motion.div>
  </motion.div>
);

interface MenuSectionProps {
  language: 'fr' | 'en';
}

const MenuSection: React.FC<MenuSectionProps> = ({ language = 'fr' }) => {
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
    <>
      {/* Import de Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>

      <section id="menu" className="py-12 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
        {/* Effets de fond subtils */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-yellow-400/6 to-amber-500/6 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-red-500/6 to-orange-500/6 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />

          {/* Particules discrètes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                y: [0, -20, 0],
                opacity: [0, 0.6, 0],
                rotate: [0, 180],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Star className="w-1.5 h-1.5 text-yellow-400/40" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <motion.h2 
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
              style={{ fontFamily: 'Playfair Display, serif' }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">
                {t.title}
              </span>
            </motion.h2>
            
            <motion.p 
              className="max-w-2xl mx-auto text-gray-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {t.description}
            </motion.p>

            {/* Ligne décorative */}
            <motion.div
              className="h-0.5 w-16 mx-auto mt-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
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
              className="relative group bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-yellow-400/25 transition-all duration-300"
              style={{ fontFamily: 'Inter, sans-serif' }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>{t.viewFullMenu}</span>
  
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 rounded-full"
                initial={{ x: '-100%' }}
                whileHover={{ x: '100%' }}
                transition={{ duration: 0.6 }}
              />
            </motion.button>
          </div>

          {/* Modal de catégorie sélectionnée */}
          <AnimatePresence>
            {selectedCategory && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedCategory(null)}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className="relative max-w-4xl w-full max-h-[80vh] overflow-y-auto"
                  onClick={(e) => e.stopPropagation()}
                >
                  <motion.button
                    onClick={() => setSelectedCategory(null)}
                    className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-all z-10 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <X className="w-5 h-5 text-gray-800" />
                  </motion.button>
                  <img 
                    src={menuCategories.find(c => c.id === selectedCategory)?.menuImage || ''} 
                    alt={t.menuAlt}
                    className="w-full h-auto rounded-2xl shadow-2xl" 
                  />
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Modal menu complet */}
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
    </>
  );
};

export default MenuSection;