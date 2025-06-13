import React from "react";
import { motion } from "framer-motion";
import { Facebook, Instagram, Twitter, MapPin, Phone, Star, Sparkles, Heart } from "lucide-react";

// Simulation des translations pour la démo
const translations = {
  fr: {
    footer: {
      tagline: "Saveurs authentiques d'Afrique et d'Europe dans un cadre moderne et chaleureux",
      contact: {
        title: "Contact"
      },
      quickLinks: {
        title: "Liens Rapides",
        menu: "Menu",
        reservation: "Réservation", 
   
        contact: "Contact"
      },
      social: {
        title: "Suivez-nous",
        followUs: "Restez connectés pour nos dernières actualités"
      },
      copyright: "Tous droits réservés"
    }
  },
  en: {
    footer: {
      tagline: "Authentic African flavors in a modern and warm setting",
      contact: {
        title: "Contact"
      },
      quickLinks: {
        title: "Quick Links",
        menu: "Menu",
        reservation: "Reservation",
        
        contact: "Contact"
      },
      social: {
        title: "Follow us",
        followUs: "Stay connected for our latest news"
      },
      copyright: "All rights reserved"
    }
  }
};

interface FooterProps {
  language: "fr" | "en";
}

const Footer: React.FC<FooterProps> = ({ language = "fr" }) => {
  const t = translations[language].footer;
  const currentYear = new Date().getFullYear();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <>
      {/* Import de Google Fonts */}
      <style >{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Dancing+Script:wght@400;500;600&display=swap');
      `}</style>

      <footer className="relative bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden">
        {/* Effets de fond décoratifs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Orbes lumineux */}
          <motion.div
            className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-yellow-400/10 to-amber-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -bottom-20 -right-20 w-60 h-60 bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3
            }}
          />

          {/* Particules flottantes */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 20 - 10, 0],
                opacity: [0, 1, 0],
                rotate: [0, 360],
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
              {i % 2 === 0 ? (
                <Star className="w-2 h-2 text-yellow-400/40" />
              ) : (
                <div className="w-1 h-1 bg-amber-400/60 rounded-full" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Ligne décorative supérieure */}
        <motion.div
          className="h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Logo et description */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <motion.div
                className="mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h2 
                  className="text-3xl font-bold mb-2 relative"
                  style={{ fontFamily: 'Playfair Display, serif' }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                    O '
                  </span>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-600 ml-2">
                    CONTINENT
                  </span>
                  
                  {/* Effet de brillance
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    initial={{ x: '-100%' }}
                    animate={{ x: '200%' }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      repeatDelay: 5,
                      ease: "easeInOut"
                    }}
                  /> */}
                </h2>
              </motion.div>
              
              <motion.p 
                className="text-gray-300 leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {t.tagline}
              </motion.p>

              {/* Éléments décoratifs */}
              <motion.div
                className="flex items-center space-x-2 mt-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ rotate: [0, 360] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "linear"
                    }}
                  >
                    <Star className="w-3 h-3 text-yellow-400/60" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Contact avec icônes */}
            <motion.div variants={itemVariants}>
              <h3 
                className="text-xl font-bold mb-6 flex items-center space-x-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                <motion.div
                  className="p-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-500/20 border border-yellow-400/30"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <MapPin className="w-5 h-5 text-yellow-400" />
                </motion.div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                  {t.contact.title}
                </span>
              </h3>
              
              <address className="not-italic space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                <motion.div
                  className="flex items-start space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <MapPin className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      Chaussée de Mons 1081
                    </p>
                    <p className="text-gray-300 group-hover:text-white transition-colors">
                      1070 Anderlecht, Belgique
                    </p>
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex items-center space-x-3 group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <a
                    href="tel:+32466468778"
                    className="text-gray-300 hover:text-yellow-400 transition-colors"
                  >
                    +32 466 468 778
                  </a>
                </motion.div>
              </address>
            </motion.div>

            {/* Liens rapides */}
            <motion.div variants={itemVariants}>
              <h3 
                className="text-xl font-bold mb-6 flex items-center space-x-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                <motion.div
                  className="p-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-500/20 border border-yellow-400/30"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                </motion.div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                  {t.quickLinks.title}
                </span>
              </h3>
              
              <ul className="space-y-3" style={{ fontFamily: 'Inter, sans-serif' }}>
                {[
                  { href: "#menu", label: t.quickLinks.menu },
                  { href: "#reservation", label: t.quickLinks.reservation },
  
                  { href: "#reservation", label: t.quickLinks.contact }
                ].map((link, index) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <motion.a
                      href={link.href}
                      className="relative text-gray-300 hover:text-yellow-400 transition-colors duration-300 flex items-center space-x-2 group"
                      whileHover={{ x: 8 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-yellow-400/50 rounded-full group-hover:bg-yellow-400 transition-colors"
                        whileHover={{ scale: 1.5 }}
                      />
                      <span>{link.label}</span>
                      <motion.div
                        className="absolute bottom-0 left-6 h-0.5 bg-yellow-400"
                        initial={{ width: 0 }}
                        whileHover={{ width: "calc(100% - 1.5rem)" }}
                        transition={{ duration: 0.3 }}
                      />
                    </motion.a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Réseaux sociaux */}
            <motion.div variants={itemVariants}>
              <h3 
                className="text-xl font-bold mb-6 flex items-center space-x-2"
                style={{ fontFamily: 'Playfair Display, serif' }}
              >
                <motion.div
                  className="p-2 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-500/20 border border-yellow-400/30"
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                >
                  <Heart className="w-5 h-5 text-yellow-400" />
                </motion.div>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                  {t.social.title}
                </span>
              </h3>
              
              <div className="flex space-x-4 mb-6">
                {[
                  { Icon: Facebook, href: "https://facebook.com", color: "hover:text-blue-400" },
                  { Icon: Instagram, href: "https://instagram.com", color: "hover:text-pink-400" },
                  { Icon: Twitter, href: "https://twitter.com", color: "hover:text-cyan-400" }
                ].map((social, index) => (
                  <motion.a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative group p-3 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 text-yellow-400 ${social.color} transition-all duration-300`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <social.Icon size={20} />
                    <motion.div
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400/0 via-yellow-400/20 to-yellow-400/0"
                      initial={{ rotate: 0 }}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    />
                  </motion.a>
                ))}
              </div>
              
              <motion.p 
                className="text-gray-400 text-sm leading-relaxed"
                style={{ fontFamily: 'Inter, sans-serif' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                {t.social.followUs}
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Ligne de séparation animée */}
          <motion.div
            className="relative mt-16 mb-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="h-px bg-gradient-to-r from-transparent via-gray-600 to-transparent" />
            <motion.div
              className="absolute inset-0 h-px bg-gradient-to-r from-transparent via-yellow-400 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            />
          </motion.div>

          {/* Copyright avec effet */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p 
              className="text-gray-500 flex items-center justify-center space-x-2"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              <span>&copy; {currentYear} O CONTINENT - {t.copyright}</span>
              
            </p>
          </motion.div>
        </div>
      </footer>
    </>
  );
};

export default Footer;