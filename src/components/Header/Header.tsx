import React, { useState, useEffect } from 'react';
import { Globe, Menu as MenuIcon, X, Phone, MapPin, Clock, Star } from 'lucide-react';

interface HeaderProps {
  language?: 'fr' | 'en';
  onLanguageChange?: (lang: 'fr' | 'en') => void;
}

const Header: React.FC<HeaderProps> = ({ language = 'fr', onLanguageChange }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);
  
  // Traductions intégrées
  const translations = {
    fr: {
      header: {
        menu: "Menu",
        story: "Notre Histoire",
        contact: "Contact",
        reservation: "Réserver",
        home: "Accueil",
        about: "À Propos",
        
      },
      contact: {
        phone: "+32 2 123 45 67",
        address: "Chaussée de Mons 1081, 1070 Anderlecht",
        hours: "Lun-Ven: 11h-23h"
      }
    },
    en: {
      header: {
        menu: "Menu",
        about: "About",
        contact: "Contact",
        reservation: "Reserve",
        home: "Home",
        
       
      },
      contact: {
        phone: "+32 2 123 45 67",
        address: "Chaussée de Mons 1081, 1070 Anderlecht",
        hours: "Mon-Fri: 11am-11pm"
      }
    }
  };

  const t = translations[language].header;
  const contact = translations[language].contact;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  const handleLanguageChange = (lang: 'fr' | 'en') => {
    if (onLanguageChange) {
      onLanguageChange(lang);
    }
    setIsLanguageDropdownOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <style>{`
        @keyframes slideDown {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes slideUp {
          from { transform: translateY(100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px rgba(251, 191, 36, 0.5); }
          50% { box-shadow: 0 0 20px rgba(251, 191, 36, 0.8); }
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
        
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        
        .text-gold { color: #fbbf24; }
        .bg-gold { background-color: #fbbf24; }
        .border-gold { border-color: #fbbf24; }
        .hover-gold:hover { color: #fbbf24; }
        
        .logo-text {
          background: linear-gradient(135deg, #fbbf24 0%, #dc2626 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          font-weight: 800;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }
        
        .nav-link {
          position: relative;
          transition: all 0.3s ease;
          padding: 8px 16px;
          border-radius: 8px;
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #fbbf24, #dc2626);
          transition: width 0.3s ease;
        }
        
        .nav-link:hover::before {
          width: 80%;
        }
        
        .nav-link:hover {
          background: rgba(251, 191, 36, 0.1);
          transform: translateY(-2px);
        }
        
        .btn-primary {
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          color: #000;
          font-weight: 600;
          padding: 12px 24px;
          border-radius: 25px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          transition: left 0.6s ease;
        }
        
        .btn-primary:hover::before {
          left: 100%;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(251, 191, 36, 0.4);
        }
        
        .btn-secondary {
          color: #fbbf24;
          border: 2px solid #fbbf24;
          background: rgba(251, 191, 36, 0.1);
          backdrop-filter: blur(10px);
          font-weight: 600;
          padding: 10px 22px;
          border-radius: 25px;
          transition: all 0.3s ease;
        }
        
        .btn-secondary:hover {
          background: rgba(251, 191, 36, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(251, 191, 36, 0.3);
        }
        
        .mobile-menu {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 20, 0.95) 100%);
          backdrop-filter: blur(20px);
          border-top: 1px solid rgba(251, 191, 36, 0.2);
        }
        
        .dropdown {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 20, 0.95) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(251, 191, 36, 0.2);
          border-radius: 12px;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
        }
        
        .flag-icon {
          font-size: 1.2em;
          margin-right: 8px;
          filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.3));
        }
        
        .language-btn {
          transition: all 0.3s ease;
          padding: 8px 12px;
          border-radius: 8px;
          display: flex;
          align-items: center;
        }
        
        .language-btn:hover {
          background: rgba(251, 191, 36, 0.15);
          transform: translateX(4px);
        }
        
        .header-scrolled {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.95) 0%, rgba(20, 20, 20, 0.9) 100%) !important;
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(251, 191, 36, 0.2);
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        .contact-info {
          background: rgba(0, 0, 0, 0.8);
          backdrop-filter: blur(10px);
          border-bottom: 1px solid rgba(251, 191, 36, 0.2);
        }
        
        .contact-item {
          display: flex;
          align-items: center;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.8);
          transition: color 0.3s ease;
        }
        
        .contact-item:hover {
          color: #fbbf24;
        }
        
        .contact-item svg {
          margin-right: 6px;
          width: 14px;
          height: 14px;
        }
      `}</style>

      

      {/* Main header */}
      <header 
        className={` top w-full z-40 transition-all duration-500 bg-black ${
          isScrolled ? 'header-scrolled py-3 mt-10' : 'py-4 mt-12'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-gold to-red-600 rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-xl">O'</span>
            </div>
            <div>
              <h1 className="logo-text text-2xl md:text-3xl">
                <span>O '</span><span className='text-red'> C O N T I N E N T</span>
              </h1>
              <p className="text-white/60 text-xs uppercase tracking-wider">
                Restaurant Africain
              </p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-2">
            <a href="#home" className="nav-link text-white hover-gold">
              {t.home}
            </a>
            <a href="#menu" className="nav-link text-white hover-gold">
              {t.menu}
            </a>
           
            <a href="#contact" className="nav-link text-white hover-gold">
              {t.contact}
            </a>
          </nav>
          
          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <a href="#reservation" className="btn-primary">
              <span className="relative z-10">{t.reservation}</span>
            </a>
            
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={toggleLanguageDropdown}
                className="btn-secondary flex items-center"
              >
                <Globe className="w-4 h-4 mr-2" />
                <span className="flag-icon">
                  {language === 'fr' ? '🇫🇷' : '🇬🇧'}
                </span>
                {language.toUpperCase()}
              </button>
              
              {isLanguageDropdownOpen && (
                <div className="dropdown absolute right-0 mt-2 w-32 animate-fadeIn">
                  <button 
                    onClick={() => handleLanguageChange('fr')}
                    className={`language-btn w-full text-left text-white ${language === 'fr' ? 'bg-gold/20' : ''}`}
                  >
                    <span className="flag-icon">🇫🇷</span>
                    Français
                  </button>
                  <button 
                    onClick={() => handleLanguageChange('en')}
                    className={`language-btn w-full text-left text-white ${language === 'en' ? 'bg-gold/20' : ''}`}
                  >
                    <span className="flag-icon">🇬🇧</span>
                    English
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all" 
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu lg:hidden animate-slideDown">
            <div className="max-w-7xl mx-auto px-4 py-6 flex flex-col space-y-4">
              
              {/* Mobile Contact Info */}
              <div className="border-b border-white/10 pb-4 mb-4">
                <div className="contact-item mb-2">
                  <Phone />
                  {contact.phone}
                </div>
                <div className="contact-item mb-2">
                  <MapPin />
                  {contact.address}
                </div>
                <div className="contact-item">
                  <Clock />
                  {contact.hours}
                </div>
              </div>
              
              {/* Mobile Navigation */}
              <a 
                href="#home" 
                className="nav-link text-white hover-gold block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.home}
              </a>
              <a 
                href="#menu" 
                className="nav-link text-white hover-gold block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.menu}
              </a>

              <a 
                href="#contact" 
                className="nav-link text-white hover-gold block"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {t.contact}
              </a>
              
              {/* Mobile Action Button */}
              <a 
                href="#reservation" 
                className="btn-primary text-center mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="relative z-10">{t.reservation}</span>
              </a>
              
              {/* Mobile Language Selector */}
              <div className="flex space-x-4 pt-4 border-t border-white/10">
                <button 
                  onClick={() => handleLanguageChange('fr')}
                  className={`language-btn text-white flex-1 ${language === 'fr' ? 'bg-gold/20' : ''}`}
                >
                  <span className="flag-icon">🇫🇷</span>
                  Français
                </button>
                <button 
                  onClick={() => handleLanguageChange('en')}
                  className={`language-btn text-white flex-1 ${language === 'en' ? 'bg-gold/20' : ''}`}
                >
                  <span className="flag-icon">🇬🇧</span>
                  English
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;