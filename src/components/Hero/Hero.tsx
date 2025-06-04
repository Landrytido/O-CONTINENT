import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '../../utils/translations';

interface HeroProps {
  language: 'fr' | 'en';
}

const Hero: React.FC<HeroProps> = ({ language }) => {
  const t = translations[language].hero;
  
  return (
    <section 
      className="h-screen flex items-center justify-center bg-hero-pattern bg-cover bg-center relative"
      id="home"
    >
      <div className="absolute inset-0 bg-overlay-black z-0"></div>
      
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
            <span className="text-gold">O</span>
            <span className="text-accent-red">CONTINENT</span>
          </h1>
          
          <p className="text-white text-xl md:text-2xl mb-8 font-light">
            {t.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.a
              href="#menu"
              className="btn btn-primary text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.seeMenu}
            </motion.a>
            
            <motion.a
              href="#reservation"
              className="btn btn-secondary text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t.reserve}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;