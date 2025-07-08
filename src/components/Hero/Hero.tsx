import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, BookOpen, Star } from "lucide-react";
const translations = {
  fr: {
    hero: {
      subtitle: "Saveurs Authentiques d'Afrique et d'Europe",
      seeMenu: "Voir le Menu",
      reserve: "Réserver",
    },
  },
  en: {
    hero: {
      subtitle: "Authentic Flavors of Africa",
      seeMenu: "See Menu",
      reserve: "Reserve",
    },
  },
};

interface HeroProps {
  language: "fr" | "en";
}

const Hero: React.FC<HeroProps> = ({ language = "fr" }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const t = translations[language].hero;
  const backgroundImages = [
    "/image2.jpg",
    "/plat2.jpeg",
    "/image6.jpg",
    "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
    "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2",
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 6000);

    return () => clearInterval(interval);
  }, [backgroundImages.length]);

  return (
    <section
      className="h-screen flex items-center justify-center relative overflow-hidden"
      id="home"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Dancing+Script:wght@400;500;600;700&display=swap');
      `}</style>

      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
              index === currentImageIndex
                ? "opacity-100 scale-100"
                : "opacity-0 scale-105"
            }`}
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.1) 50%, rgba(0, 0, 0, 0.4) 100%), url(${image})`,
            }}
          />
        ))}
      </div>

      <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1920),
              y:
                (typeof window !== "undefined" ? window.innerHeight : 1080) +
                20,
              opacity: 0,
              rotate: 0,
            }}
            animate={{
              y: -20,
              opacity: [0, 1, 1, 0],
              rotate: 360,
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1920),
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "linear",
            }}
          >
            {i % 3 === 0 ? (
              <Star className="w-3 h-3 text-yellow-400/60" />
            ) : i % 3 === 1 ? (
              <Star className="w-2 h-2 text-amber-300/50" />
            ) : (
              <div className="w-1.5 h-1.5 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full opacity-70" />
            )}
          </motion.div>
        ))}
      </div>

      <div className="absolute inset-0 z-1 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.div
          className="backdrop-blur-lg bg-gradient-to-br from-black/20 to-black/30 rounded-3xl border border-white/30 shadow-2xl p-12 md:p-12 lg:p-16 mx-4 max-w-5xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 rounded-3xl"
            style={{
              background: `conic-gradient(from 0deg at 50% 50%, 
                rgba(255, 215, 0, 0.3) 0deg, 
                transparent 60deg, 
                transparent 300deg, 
                rgba(255, 215, 0, 0.3) 360deg)`,
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />

          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 relative"
                style={{ fontFamily: "Playfair Display, serif" }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
              >
                <motion.span
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-yellow-500 to-amber-500 drop-shadow-2xl"
                  whileHover={{ scale: 1.05, rotate: [0, -2, 2, 0] }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  O '
                </motion.span>
                <motion.span
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-red-500 to-red-700 drop-shadow-2xl ml-2"
                  whileHover={{ scale: 1.05, rotate: [0, 2, -2, 0] }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                >
                  CONTINENG
                </motion.span>
              </motion.h1>

              <motion.p
                className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl mb-8 font-light drop-shadow-lg leading-relaxed tracking-wide"
                style={{ fontFamily: "Dancing Script, cursive" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                {t.subtitle}
              </motion.p>

              <motion.div
                className="text-white/95 text-base md:text-lg lg:text-xl mb-12 space-y-4"
                style={{ fontFamily: "Inter, sans-serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <motion.div
                  className="flex items-center justify-center space-x-3 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
                    whileHover={{
                      rotate: 360,
                      backgroundColor: "rgba(255, 215, 0, 0.2)",
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <MapPin className="w-5 h-5 text-yellow-400" />
                  </motion.div>
                  <span className="font-medium tracking-wide">
                    Chaussé de Mons 1081, 1070 Anderlecht
                  </span>
                </motion.div>

                <motion.div
                  className="flex items-center justify-center space-x-3 group"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
                    whileHover={{
                      rotate: 360,
                      backgroundColor: "rgba(255, 215, 0, 0.2)",
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <Clock className="w-5 h-5 text-yellow-400" />
                  </motion.div>
                  <span className="font-medium tracking-wide">
                    Lundi - Vendredi : 11h - 23h
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row justify-center gap-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.3 }}
              >
                <motion.a
                  href="#menu"
                  className="group relative overflow-hidden bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-10 py-4 rounded-full text-lg font-bold transition-all duration-300 hover:shadow-2xl hover:shadow-yellow-400/25"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>{t.seeMenu}</span>
                    <BookOpen className="w-5 h-5" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.a>

                <motion.a
                  href="#reservation"
                  className="group relative overflow-hidden bg-transparent border-2 border-white/50 text-white px-10 py-4 rounded-full text-lg font-bold backdrop-blur-sm hover:bg-white/10 hover:border-yellow-400 hover:text-yellow-400 transition-all duration-300 hover:shadow-2xl hover:shadow-white/20"
                  style={{ fontFamily: "Inter, sans-serif" }}
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>{t.reserve}</span>
                    <Star className="w-5 h-5" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.8 }}
                  />
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 right-8 z-20 flex space-x-3 bg-black/20 backdrop-blur-sm rounded-full p-3"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        {backgroundImages.map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`relative w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-gradient-to-r from-yellow-400 to-amber-500 shadow-lg shadow-yellow-400/50"
                : "bg-white/40 hover:bg-white/70"
            }`}
            whileHover={{ scale: 1.3 }}
            whileTap={{ scale: 0.9 }}
          >
            {index === currentImageIndex && (
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1] }}
                transition={{ duration: 0.4 }}
              />
            )}
          </motion.button>
        ))}
      </motion.div>

      <motion.div
        className="absolute bottom-8  transform -translate-x-1/2 z-20 flex justify-center w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.2 }}
      >
        <motion.div
          className="flex flex-col items-center space-y-2 cursor-pointer group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            const nextSection =
              document.querySelector("#menu") || document.body;
            nextSection.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {/* <motion.div
            className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-full p-3 group-hover:bg-white/20 transition-all duration-300"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="text-white w-6 h-6 group-hover:text-yellow-400 transition-colors duration-300" />
          </motion.div>
          
          <motion.span 
            className="text-white/80 text-sm font-medium tracking-wider group-hover:text-white transition-colors duration-300 text-center"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            DÉCOUVRIR
          </motion.span>
          
          {/* Ligne animée 
          <motion.div 
            className="w-0.5 h-8 bg-gradient-to-b from-white/60 to-transparent mx-auto"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          /> */}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
