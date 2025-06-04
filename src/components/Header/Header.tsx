import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Menu as MenuIcon, X } from 'lucide-react';
import Logo from './Logo';
import { translations } from '../../utils/translations';

interface HeaderProps {
  language: 'fr' | 'en';
  onLanguageChange: (lang: 'fr' | 'en') => void;
}

const Header: React.FC<HeaderProps> = ({ language, onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  
  const t = translations[language].header;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
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

  const headerClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-black py-2 shadow-md' : 'bg-transparent py-4'
  }`;

  return (
    <header className={headerClasses}>
      <div className="container-custom flex items-center justify-between">
        <Logo />
        
        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <a href="#menu" className="text-white hover:text-gold transition-colors">
            {t.menu}
          </a>
          <a href="#story" className="text-white hover:text-gold transition-colors">
            {t.story}
          </a>
          <div className="flex space-x-4">
            <a 
              href="#contact" 
              className="text-gold border border-gold px-4 py-2 rounded-sm hover:bg-gold hover:text-black transition-all"
            >
              {t.contact}
            </a>
            <a 
              href="#reservation" 
              className="bg-gold text-black px-4 py-2 rounded-sm hover:bg-gold/80 transition-all"
            >
              {t.reservation}
            </a>
          </div>
          
          <div className="relative">
            <button
              onClick={toggleLanguageDropdown}
              className="flex items-center text-white hover:text-gold transition-colors"
            >
              <Globe size={18} className="mr-1" />
              {language.toUpperCase()}
            </button>
            
            {isLanguageDropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -5 }}
                className="absolute right-0 mt-2 w-24 bg-black border border-neutral-800 rounded-sm shadow-custom"
              >
                <button 
                  onClick={() => {
                    onLanguageChange('fr');
                    setIsLanguageDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-white hover:bg-neutral-800 flex items-center"
                >
                  🇫🇷 FR
                </button>
                <button 
                  onClick={() => {
                    onLanguageChange('en');
                    setIsLanguageDropdownOpen(false);
                  }}
                  className="w-full text-left px-3 py-2 text-white hover:bg-neutral-800 flex items-center"
                >
                  🇬🇧 EN
                </button>
              </motion.div>
            )}
          </div>
        </nav>
        
        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2" 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-black"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            <a 
              href="#menu" 
              className="text-white hover:text-gold py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.menu}
            </a>
            <a 
              href="#story" 
              className="text-white hover:text-gold py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.story}
            </a>
            <a 
              href="#contact" 
              className="text-white hover:text-gold py-2 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.contact}
            </a>
            <a 
              href="#reservation" 
              className="bg-gold text-black px-4 py-2 rounded-sm text-center hover:bg-gold/80 transition-all"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {t.reservation}
            </a>
            <div className="flex space-x-4 py-2">
              <button 
                onClick={() => {
                  onLanguageChange('fr');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center text-white hover:text-gold transition-colors"
              >
                🇫🇷 FR
              </button>
              <button 
                onClick={() => {
                  onLanguageChange('en');
                  setIsMobileMenuOpen(false);
                }}
                className="flex items-center text-white hover:text-gold transition-colors"
              >
                🇬🇧 EN
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;