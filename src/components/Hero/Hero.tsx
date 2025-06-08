import React, { useState, useEffect, useCallback } from 'react';
import { ChevronDown, MapPin, Clock, Star, ArrowRight } from 'lucide-react';

interface HeroProps {
  language?: 'fr' | 'en';
}

const Hero: React.FC<HeroProps> = ({ language = 'fr' }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Traductions intégrées
  const translations = {
    fr: {
      hero: {
        subtitle: "Découvrez les saveurs authentiques de l'Afrique",
        seeMenu: "Voir le Menu",
        reserve: "Réserver",
        scrollText: "Découvrir",
        tagline: "Restaurant Africain Authentique"
      }
    },
    en: {
      hero: {
        subtitle: "Discover the authentic flavors of Africa",
        seeMenu: "See Menu",
        reserve: "Reserve",
        scrollText: "Discover",
        tagline: "Authentic African Restaurant"
      }
    }
  };
  
  const t = translations[language].hero;
  
  // Images de fond pour le carousel
  const backgroundImages = [
    'https://kelianfood.com/wp-content/uploads/2022/01/IMG_1006-1024x683.jpg',
    'https://kelianfood.com/wp-content/uploads/2021/01/ndole-chez-Afrovitalityeat-683x1024.jpg',
    'https://img.cuisineaz.com/660x495/2021/09/20/i180655-shutterstock-577296571.webp',
    'https://img.cuisineaz.com/660x495/2021/09/20/i180654-shutterstock-1971945920.webp',
    'https://tse3.mm.bing.net/th?id=OIP.mO6LchRlMqtN8RClzbp16gHaHa&pid=Api&P=0&h=180',
    'https://cdn.chefclub.tools/uploads/recipes/cover-thumbnail/7915c6dd-0f51-4002-937d-af4beb815d31.jpg',
    'https://img-3.journaldesfemmes.fr/hgR7h_2YeqvzGkl8o7V_TcHChc0=/120x/smart/50d462f9cef34444ba11f45088b9c651/ccmcms-jdf/28297176.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWbZw5hf_6vFB4XB165D7QOrR5a7nDSYLi8A&s'
  ];

  // Fonction pour aller à l'image suivante
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === backgroundImages.length - 1 ? 0 : prevIndex + 1
    );
  }, [backgroundImages.length]);

  // Carousel automatique
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, [nextImage]);

  // Animation d'entrée
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  const scrollToNext = () => {
    const nextSection = document.getElementById('menu') || 
                      document.getElementById('about') || 
                      document.querySelector('section:nth-of-type(2)');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(40px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        @keyframes fadeInScale {
          from { 
            opacity: 0; 
            transform: scale(0.85) translateY(20px); 
          }
          to { 
            opacity: 1; 
            transform: scale(1) translateY(0); 
          }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%) skewX(-15deg); }
          100% { transform: translateX(200%) skewX(-15deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0) rotate(0deg); }
          25% { transform: translateY(-15px) translateX(8px) rotate(2deg); }
          50% { transform: translateY(-25px) translateX(-8px) rotate(-1deg); }
          75% { transform: translateY(-10px) translateX(5px) rotate(1deg); }
        }
        
        @keyframes bounce {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-12px); }
          60% { transform: translateY(-6px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.7; transform: scale(1.05); }
        }
        
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 0 5px rgba(251, 191, 36, 0.5), 0 0 10px rgba(251, 191, 36, 0.3);
          }
          50% {
            text-shadow: 0 0 10px rgba(251, 191, 36, 0.8), 0 0 20px rgba(251, 191, 36, 0.5), 0 0 30px rgba(251, 191, 36, 0.3);
          }
        }
        
        @keyframes slideInLeft {
          from { transform: translateX(-100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slideInRight {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes scrollHorizontal {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(8px); }
        }
        
        @keyframes fadeInLetters {
          from { 
            opacity: 0; 
            transform: translateY(20px) rotateX(90deg); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) rotateX(0deg); 
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1.2s ease-out backwards;
        }
        
        .animate-fadeInScale {
          animation: fadeInScale 1.5s ease-out backwards;
        }
        
        .animate-shimmer {
          animation: shimmer 3s ease-in-out infinite;
          animation-delay: 2s;
        }
        
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        
        .animate-bounce-custom {
          animation: bounce 2.5s infinite;
        }
        
        .animate-pulse-custom {
          animation: pulse 3s ease-in-out infinite;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 1s ease-out backwards;
        }
        
        .animate-slideInRight {
          animation: slideInRight 1s ease-out backwards;
        }
        
        .animate-scrollHorizontal {
          animation: scrollHorizontal 2s ease-in-out infinite;
        }
        
        .animate-fadeInLetters {
          animation: fadeInLetters 0.8s ease-out backwards;
        }
        
        .delay-300 { animation-delay: 0.3s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-800 { animation-delay: 0.8s; }
        .delay-1000 { animation-delay: 1s; }
        .delay-1200 { animation-delay: 1.2s; }
        .delay-1400 { animation-delay: 1.4s; }
        .delay-1600 { animation-delay: 1.6s; }
        .delay-1800 { animation-delay: 1.8s; }
        
        .text-gold { color: #fbbf24; }
        .text-accent-red { color: #dc2626; }
        .bg-gold { background-color: #fbbf24; }
        .border-gold { border-color: #fbbf24; }
        .bg-gold\\/90 { background-color: rgba(251, 191, 36, 0.9); }
        
        .hero-title .letter {
          display: inline-block;
          transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .hero-title:hover .letter {
          transform: scale(1.08) rotate(2deg);
        }
        
        .hero-title .letter:nth-child(even):hover {
          transform: scale(1.08) rotate(-2deg);
        }
        
        .btn-primary {
          position: relative;
          overflow: hidden;
          transition: all 0.4s ease;
          background: linear-gradient(135deg, #fbbf24 0%, #f59e0b 100%);
          box-shadow: 0 4px 15px rgba(251, 191, 36, 0.3);
        }
        
        .btn-primary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
          transition: left 0.6s ease;
        }
        
        .btn-primary:hover::before {
          left: 100%;
        }
        
        .btn-primary:hover {
          transform: translateY(-3px) scale(1.02);
          box-shadow: 0 8px 25px rgba(251, 191, 36, 0.4);
        }
        
        .btn-secondary {
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(15px);
          transition: all 0.4s ease;
          background: rgba(255, 255, 255, 0.1);
          border: 2px solid rgba(255, 255, 255, 0.3);
        }
        
        .btn-secondary::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(251, 191, 36, 0.2), transparent);
          transition: left 0.6s ease;
        }
        
        .btn-secondary:hover::before {
          left: 100%;
        }
        
        .btn-secondary:hover {
          transform: translateY(-3px) scale(1.02);
          background-color: rgba(251, 191, 36, 0.15);
          border-color: #fbbf24;
          color: #fbbf24;
          box-shadow: 0 8px 25px rgba(251, 191, 36, 0.3);
        }
        
        .glassmorphism {
          backdrop-filter: blur(6px);
          background: linear-gradient(135deg, rgba(49, 45, 45, 0.12) 0%, rgba(255, 255, 255, 0.06) 100%);
          border: 1px solid rgba(49, 42, 42, 0.2);
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.12);
        }
        
        .subtitle-elegant {
          position: relative;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0.08) 100%);
          border: 1px solid rgba(255, 255, 255, 0.25);
          border-radius: 25px;
          backdrop-filter: blur(15px);
          transition: all 0.6s ease;
          text-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
        }
        
        .subtitle-elegant::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, transparent, rgba(251, 191, 36, 0.4), transparent, rgba(220, 38, 38, 0.4), transparent);
          border-radius: 27px;
          z-index: -1;
          opacity: 0;
          transition: opacity 0.6s ease;
        }
        
        .subtitle-elegant:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 40px rgba(251, 191, 36, 0.25);
          border-color: rgba(251, 191, 36, 0.4);
          animation: textGlow 2s ease-in-out infinite;
        }
        
        .subtitle-elegant:hover::before {
          opacity: 1;
        }
        
        .info-item {
          transition: all 0.4s ease;
          border-radius: 12px;
        }
        
        .info-item:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0 5px 20px rgba(251, 191, 36, 0.2);
        }
        
        .particle {
          position: absolute;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, rgba(251, 191, 36, 0.8) 0%, rgba(251, 191, 36, 0.4) 50%, transparent 100%);
          border-radius: 50%;
          pointer-events: none;
          filter: blur(1px);
        }
        
        .scroll-indicator-horizontal {
          transition: all 0.4s ease;
          backdrop-filter: blur(10px);
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50px;
          padding: 12px 20px;
        }
        
        .scroll-indicator-horizontal:hover {
          transform: scale(1.05);
          background: rgba(251, 191, 36, 0.1);
          border-color: rgba(251, 191, 36, 0.3);
          box-shadow: 0 5px 20px rgba(251, 191, 36, 0.2);
        }
        
        .tagline {
          font-family: 'Georgia', serif;
          letter-spacing: 2px;
          opacity: 0.9;
        }
        
        .stars {
          color: #fbbf24;
        }
        
        .loaded {
          opacity: 1;
          transform: translateY(0);
        }
        
        .letter-animation {
          display: inline-block;
        }
        
        .letter-o { animation-delay: 0.1s; }
        .letter-c { animation-delay: 0.2s; }
        .letter-o2 { animation-delay: 0.3s; }
        .letter-n { animation-delay: 0.4s; }
        .letter-t { animation-delay: 0.5s; }
        .letter-i { animation-delay: 0.6s; }
        .letter-n2 { animation-delay: 0.7s; }
        .letter-e { animation-delay: 0.8s; }
        .letter-n3 { animation-delay: 0.9s; }
        .letter-t2 { animation-delay: 1.0s; }
      `}</style>
      
      <section 
        className={`h-screen flex items-center justify-center relative overflow-hidden transition-all duration-1000 ${isLoaded ? 'loaded' : 'opacity-0 translate-y-10'}`}
        id="home"
      >
        {/* Carousel d'images de fond */}
        <div className="absolute inset-0 z-0">
          {backgroundImages.map((image, index) => (
            <div
              key={index}
              className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-1500 ease-in-out ${
                index === currentImageIndex ? 'opacity-100 scale-105' : 'opacity-0 scale-100'
              }`}
              style={{
                backgroundImage: `linear-gradient(135deg, rgba(0, 0, 0, 0.5) 0%, rgba(0, 0, 0, 0.3) 50%, rgba(0, 0, 0, 0.6) 100%), url(${image})`
              }}
            />
          ))}
        </div>

        {/* Overlay décoratif */}
        <div className="absolute inset-0 z-5 bg-gradient-to-b from-transparent via-black/10 to-black/10" />

        {/* Contenu principal */}
        <div className="absolute inset-0 z-2 flex items-center justify-center p-4">
          <div className="glassmorphism rounded-3xl p-2 md:p-8 lg:p-4 max-w-4xl w-full mx-1">
            <div className="text-center">
              
              {/* Tagline */}
              <div className="animate-fadeInUp delay-300 mb-6">
                <p className="tagline text-gold text-sm md:text-base uppercase tracking-wider font-medium">
                  {t.tagline}
                </p>
                <div className="flex justify-center space-x-1 mt-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="stars w-4 h-4 fill-current" />
                  ))}
                </div>
              </div>

              {/* Logo principal avec animation de lettres */}
              <h1 className="hero-title text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-bold mb-8 relative">
                <span className="letter letter-animation letter-o animate-fadeInLetters text-gold drop-shadow-2xl">O</span>
                <span className="text-gold mx-2">'</span>
                
                <span className="letter letter-animation letter-c animate-fadeInLetters text-accent-red drop-shadow-2xl ml-4">C</span>
                <span className="letter letter-animation letter-o2 animate-fadeInLetters text-accent-red drop-shadow-2xl">O</span>
                <span className="letter letter-animation letter-n animate-fadeInLetters text-accent-red drop-shadow-2xl">N</span>
                <span className="letter letter-animation letter-t animate-fadeInLetters text-accent-red drop-shadow-2xl">T</span>
                <span className="letter letter-animation letter-i animate-fadeInLetters text-accent-red drop-shadow-2xl">I</span>
                <span className="letter letter-animation letter-n2 animate-fadeInLetters text-accent-red drop-shadow-2xl">N</span>
                <span className="letter letter-animation letter-e animate-fadeInLetters text-accent-red drop-shadow-2xl">E</span>
                <span className="letter letter-animation letter-n3 animate-fadeInLetters text-accent-red drop-shadow-2xl">N</span>
                <span className="letter letter-animation letter-t2 animate-fadeInLetters text-accent-red drop-shadow-2xl">T</span>
                
                {/* Effet de brillance */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
              </h1>
              
              {/* Sous-titre élégant */}
              <div className="relative mb-10 animate-fadeInUp delay-800">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold/20 to-transparent blur-lg rounded-full" />
                <p className="subtitle-elegant relative text-white text-lg md:text-xl lg:text-2xl font-light leading-relaxed px-8 py-5">
                  <span className="relative z-10 italic">
                    "{t.subtitle}"
                  </span>
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />
                </p>
              </div>

              {/* Informations du restaurant */}
              <div className="text-white/90 text-base md:text-lg mb-10 font-light animate-fadeInUp delay-1000">
                <div className="info-item flex items-center justify-center mb-4 p-3 mx-auto max-w-md">
                  <MapPin className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                  <span className="font-semibold">Chaussée de Mons 1081, 1070 Anderlecht</span>
                </div>
                <div className="info-item flex items-center justify-center p-3 mx-auto max-w-md">
                  <Clock className="w-5 h-5 text-gold mr-3 flex-shrink-0" />
                  <span className="font-semibold">Lundi - Vendredi : 11h - 23h</span>
                </div>
              </div>
              
              {/* Boutons d'action */}
              <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fadeInUp delay-1200">
                <a
                  href="#menu"
                  className="btn-primary text-black px-10 py-4 rounded-full text-lg font-bold tracking-wide"
                >
                  <span className="relative z-10">{t.seeMenu}</span>
                </a>
                
                <a
                  href="#reservation"
                  className="btn-secondary text-white px-10 py-4 rounded-full text-lg font-bold tracking-wide"
                >
                  <span className="relative z-10">{t.reserve}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        

        {/* Particules flottantes améliorées */}
        <div className="absolute inset-0 z-5 pointer-events-none overflow-hidden">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="particle animate-float"
              style={{
                left: `${5 + (i * 6)}%`,
                top: `${15 + (i * 5)}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: `${6 + (i * 0.4)}s`,
                opacity: 0.6
              }}
            />
          ))}
        </div>

        {/* Indicateur de scroll horizontal moderne */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-fadeInUp delay-1600">
          <button 
            className="scroll-indicator-horizontal flex items-center justify-center space-x-3 cursor-pointer group"
            onClick={scrollToNext}
            aria-label="Faire défiler vers le bas"
          >
            <span className="text-white/80 text-sm font-medium tracking-wide group-hover:text-gold transition-colors duration-300">
              {t.scrollText}
            </span>
            
            <div className="flex items-center space-x-2">
              {/* Ligne de progression */}
              <div className="w-12 h-0.5 bg-white/30 rounded-full overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-gold to-accent-red animate-scrollHorizontal"></div>
              </div>
              
              {/* Flèche animée */}
              <ArrowRight className="text-white/70 w-5 h-5 group-hover:text-gold group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </button>
        </div>
      </section>
    </>
  );
};

export default Hero;