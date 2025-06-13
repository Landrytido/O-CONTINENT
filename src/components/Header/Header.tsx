import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Menu, X, Star } from 'lucide-react';

// Simulation du composant Logo et des translations
const Logo = () => (
  <motion.div 
    className="flex items-center space-x-2"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 400, damping: 17 }}
  >
    <div className="text-2xl font-bold">
      <span className="text-yellow-400">O '</span>
      <span className="text-red-500 ml-1">CONTINENT</span>
    </div>
  </motion.div>
);

const translations = {
  fr: {
    header: {
      menu: "Menu",
      story: "Photos",
      contact: "Contact",
      reservation: "Réserver"
    }
  },
  en: {
    header: {
      menu: "Menu",
      story: "Photos", 
      contact: "Contact",
      reservation: "Reserve"
    }
  }
};

interface HeaderProps {
  language: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
}

const Header: React.FC<HeaderProps> = ({ language = 'fr', onLanguageChange = () => {} }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  
  const t = translations[language].header;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  return (
    <>
      {/* Import de Google Fonts */}
      <style >{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap');
      `}</style>

      <motion.header 
        className={`fixed w-full z-50 transition-all duration-500 ease-out ${
          isScrolled 
            ? 'backdrop-blur-xl bg-black/80 border-b border-white/10 py-3 shadow-2xl shadow-black/50' 
            : 'bg-gradient-to-b from-black/60 via-black/40 to-transparent backdrop-blur-sm py-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Ligne décorative animée */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
          initial={{ width: 0 }}
          animate={{ width: isScrolled ? "100%" : "0%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Particules décoratives */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
              animate={{
                x: [0, 100, 0],
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
              style={{
                left: `${20 + i * 30}%`,
                top: '50%',
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between relative">
          <Logo />
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {[
              { href: "#menu", label: t.menu },
              { href: "Photos", label: t.story }
            ].map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                className="relative text-white/90 hover:text-white transition-colors duration-300 font-medium tracking-wide"
                style={{ fontFamily: 'Inter, sans-serif' }}
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-amber-500"
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}
            
            <div className="flex space-x-4">
              <motion.a 
                href="#contact" 
                className="relative group text-yellow-400 border border-yellow-400/50 px-6 py-2 rounded-full hover:bg-yellow-400/10 hover:border-yellow-400 transition-all duration-300 font-medium backdrop-blur-sm"
                style={{ fontFamily: 'Inter, sans-serif' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <span className="relative z-10">{t.contact}</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0 rounded-full"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.a>
              
              <motion.a 
                href="#reservation" 
                className="relative group bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-2 rounded-full hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 font-bold shadow-lg hover:shadow-yellow-400/25"
                style={{ fontFamily: 'Inter, sans-serif' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <span className="relative z-10 flex items-center space-x-1">
                  <span>{t.reservation}</span>
                  <Star className="w-4 h-4" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 rounded-full"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
              </motion.a>
            </div>
            
            {/* Language Selector */}
            <div className="relative">
              <motion.button
                onClick={toggleLanguageDropdown}
                className="flex items-center text-white/90 hover:text-white transition-colors duration-300 font-medium bg-white/5 backdrop-blur-sm border border-white/10 px-3 py-2 rounded-full hover:bg-white/10"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Globe size={18} className="mr-2 text-yellow-400" />
                {language.toUpperCase()}
              </motion.button>
              
              <AnimatePresence>
                {isLanguageDropdownOpen && (
                  <motion.div 
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-28 bg-black/90 backdrop-blur-xl border border-white/20 rounded-xl shadow-2xl overflow-hidden"
                  >
                    <motion.button 
                      onClick={() => {
                        onLanguageChange('fr');
                        setIsLanguageDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-white/90 hover:bg-white/10 hover:text-white flex items-center transition-all duration-200"
                      whileHover={{ x: 4 }}
                    >
                      <span className="mr-2">🇫🇷</span> FR
                    </motion.button>
                    <motion.button 
                      onClick={() => {
                        onLanguageChange('en');
                        setIsLanguageDropdownOpen(false);
                      }}
                      className="w-full text-left px-4 py-3 text-white/90 hover:bg-white/10 hover:text-white flex items-center transition-all duration-200"
                      whileHover={{ x: 4 }}
                    >
                      <span className="mr-2">🇬🇧</span> EN
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
          
          {/* Mobile Menu Button */}
          <motion.button 
            className="lg:hidden text-white p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
        
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-black/95 backdrop-blur-xl border-t border-white/10"
            >
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col space-y-4">
                {[
                  { href: "#menu", label: t.menu },
                  { href: "#story", label: t.story },
                  { href: "#contact", label: t.contact }
                ].map((item, index) => (
                  <motion.a 
                    key={item.href}
                    href={item.href} 
                    className="text-white/90 hover:text-yellow-400 py-3 transition-colors duration-300 font-medium text-lg border-b border-white/10 last:border-b-0"
                    style={{ fontFamily: 'Inter, sans-serif' }}
                    onClick={() => setIsMobileMenuOpen(false)}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
                
                <motion.a 
                  href="#reservation" 
                  className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-6 py-3 rounded-full text-center font-bold text-lg hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 mt-4"
                  style={{ fontFamily: 'Inter, sans-serif' }}
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {t.reservation}
                </motion.a>
                
                <div className="flex justify-center space-x-6 py-4 border-t border-white/10 mt-4">
                  <motion.button 
                    onClick={() => {
                      onLanguageChange('fr');
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center text-white/90 hover:text-yellow-400 transition-colors duration-300 bg-white/5 px-4 py-2 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    🇫🇷 FR
                  </motion.button>
                  <motion.button 
                    onClick={() => {
                      onLanguageChange('en');
                      setIsMobileMenuOpen(false);
                    }}
                    className="flex items-center text-white/90 hover:text-yellow-400 transition-colors duration-300 bg-white/5 px-4 py-2 rounded-full"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    🇬🇧 EN
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};

export default Header;