import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { translations } from '../../utils/translations';

interface HeroProps {
  language: 'fr' | 'en';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = translations[language].hero;
  
  // Images de fond pour le carousel
  const backgroundImages = [
    'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
    'https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
    'https://images.pexels.com/photos/3298687/pexels-photo-3298687.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
    'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2',
    'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2'
  ];

  // Carousel automatique toutes les 3 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);
  
  return (
    <section 
      className="h-screen flex items-center justify-center relative overflow-hidden"
      id="home"
    >
      {/* Carousel d'images de fond */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.3) 100%), url(${image})`
            }}
          />
        ))}
      </div>

      {/* Glassmorphism overlay pour le contenu */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <div className="backdrop-blur-sm bg-black/10 rounded-3xl border border-white/20 p-8 md:p-16 mx-4 max-w-4xl">
          <div className="container-custom relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              {/* Logo principal avec effet moderne */}
              <motion.h1 
                className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 relative"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.span 
                  className="text-gold drop-shadow-2xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  O
                </motion.span>
                <motion.span 
                  className="text-accent-red drop-shadow-2xl ml-2"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  CONTINENT
                </motion.span>
                
                {/* Effet de brillance animé */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '200%' }}
                  transition={{ 
                    duration: 2, 
                    delay: 1,
                    repeat: Infinity, 
                    repeatDelay: 8,
                    ease: "easeInOut" 
                  }}
                />
              </motion.h1>
              
              {/* Sous-titre avec animation décalée */}
              <motion.p 
                className="text-white text-xl md:text-2xl lg:text-3xl mb-6 font-light drop-shadow-lg leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {t.subtitle}
              </motion.p>

              {/* Heures d'ouverture */}
              <motion.div
                className="text-white/90 text-lg md:text-xl mb-12 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-gold">📍</span>
                  <span>Lundi - Dimanche : 7h - 22h</span>
                </div>
              </motion.div>
              
              {/* Boutons avec effets modernisés */}
              <motion.div 
                className="flex flex-col sm:flex-row justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <motion.a
                  href="#menu"
                  className="group relative overflow-hidden bg-gold text-black px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:bg-gold/90 hover:scale-105 hover:shadow-2xl"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{t.seeMenu}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gold/0 via-white/30 to-gold/0"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
                
                <motion.a
                  href="#reservation"
                  className="group relative overflow-hidden bg-transparent border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold backdrop-blur-sm hover:bg-white/10 hover:border-gold hover:text-gold transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">{t.reserve}</span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                </motion.a>
              </motion.div>

              {/* Indicateur de scroll animé */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.7 }}
              >
                <motion.a
                  href="#menu"
                  className="flex flex-col items-center text-white/80 hover:text-gold transition-colors duration-300"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <span className="text-sm mb-2 font-light">Découvrir</span>
                  <ChevronDown size={24} />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Indicateurs de carousel */}
      <div className="absolute bottom-6 right-6 z-20 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-gold shadow-lg scale-125' 
                : 'bg-white/50 hover:bg-white/80'
            }`}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>

      {/* Effet de particules flottantes */}
      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gold/30 rounded-full"
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 10,
              opacity: 0
            }}
            animate={{ 
              y: -10,
              opacity: [0, 1, 0],
            }}
            transition={{ 
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "linear"
            }}
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;