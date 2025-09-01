import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  X,
  Star,
  Clock,
  Sparkles,
  Euro,
  Calendar,
  MessageCircle,
  Phone,
} from "lucide-react";

interface Dish {
  id: string;
  name: { fr: string; en: string };
  description: { fr: string; en: string };
  price: number;
  category: string;
  image: string;
  isSignature?: boolean;
  isPopular?: boolean;
  isWeekendOnly?: boolean;
  priceRange?: string;
}

interface DishModalProps {
  dish: Dish | null;
  isOpen: boolean;
  onClose: () => void;
  language: "fr" | "en";
}

const DishModal: React.FC<DishModalProps> = ({
  dish,
  isOpen,
  onClose,
  language,
}) => {
  if (!dish) return null;

  const reservationMessage = encodeURIComponent(
    `Bonjour, je souhaite réserver une table et commander le plat "${dish.name[language]}" (€${dish.price}). Merci !`
  );

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const translations = {
    fr: {
      details: "Détails du Plat",
      signature: "Plat Signature",
      popular: "Populaire",
      weekendOnly: "Weekend Uniquement",
      price: "Prix",
      startingFrom: "À partir de",
      availability: "Disponibilité",
      category: "Catégorie",
      reserve: "Réserver",
      whatsapp: "Commander sur WhatsApp",
      close: "Fermer",
      categories: {
        specialites: "Spécialités Maison",
        viandes: "Menu Viande",
        poulets: "Menu Poulets",
        poissons: "Menu Poissons",
        complements: "Compléments",
        boissons: "Boissons",
        bieres: "Bières",
        vins: "Vins",
        liqueurs: "Liqueurs",
      },
    },
    en: {
      details: "Dish Details",
      signature: "Signature Dish",
      popular: "Popular",
      weekendOnly: "Weekend Only",
      price: "Price",
      startingFrom: "Starting from",
      availability: "Availability",
      category: "Category",
      reserve: "Reserve",
      whatsapp: "Order on WhatsApp",
      close: "Close",
      categories: {
        specialites: "House Specialties",
        viandes: "Meat Menu",
        poulets: "Chicken Menu",
        poissons: "Fish Menu",
        complements: "Side Dishes",
        boissons: "Beverages",
        bieres: "Beers",
        vins: "Wines",
        liqueurs: "Spirits",
      },
    },
  };

  const t = translations[language];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl shadow-2xl"
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-6 right-6 z-10 bg-black/20 hover:bg-black/40 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.95 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative h-64 md:h-full min-h-[300px]">
                <img
                  src={dish.image}
                  alt={dish.name[language]}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=800&h=600";
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-transparent to-black/60" />

                {/* Badges */}
                <div className="absolute top-6 left-6 flex flex-col gap-3">
                  {dish.isSignature && (
                    <motion.div
                      className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Star className="w-4 h-4" fill="currentColor" />
                      {t.signature}
                    </motion.div>
                  )}
                  {dish.isPopular && (
                    <motion.div
                      className="bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      🔥 {t.popular}
                    </motion.div>
                  )}
                  {dish.isWeekendOnly && (
                    <motion.div
                      className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg"
                      initial={{ x: -50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      <Clock className="w-4 h-4" />
                      {t.weekendOnly}
                    </motion.div>
                  )}
                </div>

                {/* Price Display */}
                <motion.div
                  className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-sm text-black p-4 rounded-2xl shadow-xl"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring" }}
                >
                  <div className="flex items-center gap-2">
                    <Euro className="w-5 h-5 text-yellow-600" />
                    <div>
                      {dish.priceRange && (
                        <div className="text-xs text-gray-600">
                          {t.startingFrom}
                        </div>
                      )}
                      <div className="text-2xl font-bold">
                        €{dish.price.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex flex-col">
                <motion.div
                  className="flex-1"
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {/* Title */}
                  <h2
                    className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 leading-tight"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {dish.name[language]}
                  </h2>

                  {/* Description */}
                  <p
                    className="text-gray-600 text-lg leading-relaxed mb-6"
                    style={{ fontFamily: "Inter, sans-serif" }}
                  >
                    {dish.description[language]}
                  </p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 gap-4 mb-8">
                    {/* Category */}
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-xl">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <Sparkles className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500">
                          {t.category}
                        </div>
                        <div className="text-lg font-semibold text-gray-800">
                          {t.categories[
                            dish.category as keyof typeof t.categories
                          ] || dish.category}
                        </div>
                      </div>
                    </div>

                    {/* Price Details */}
                    <div className="flex items-center gap-3 p-4 bg-yellow-50 rounded-xl">
                      <div className="p-2 bg-yellow-100 rounded-lg">
                        <Euro className="w-5 h-5 text-yellow-600" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-gray-500">
                          {t.price}
                        </div>
                        <div className="text-lg font-semibold text-gray-800">
                          {dish.priceRange && `${t.startingFrom} `}€
                          {dish.price.toFixed(2)}
                        </div>
                      </div>
                    </div>

                    {/* Availability */}
                    {dish.isWeekendOnly && (
                      <div className="flex items-center gap-3 p-4 bg-purple-50 rounded-xl">
                        <div className="p-2 bg-purple-100 rounded-lg">
                          <Calendar className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <div className="text-sm font-medium text-gray-500">
                            {t.availability}
                          </div>
                          <div className="text-lg font-semibold text-gray-800">
                            Samedi & Dimanche
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="space-y-4"
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                >
                  {/* Reserve Button */}
                  <motion.a
                    href="#reservation"
                    onClick={onClose}
                    className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-4 px-6 rounded-xl hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl text-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Calendar className="w-5 h-5" />
                    {t.reserve}
                  </motion.a>

                  {/* WhatsApp Button */}
                  <motion.a
                    href={`https://wa.me/32465412732?text=${reservationMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white font-bold py-4 px-6 rounded-xl hover:from-green-400 hover:to-green-500 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl text-lg"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    {t.whatsapp}
                  </motion.a>

                  {/* Phone Button */}
                  <motion.a
                    href="tel:+32465412732"
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-400 hover:to-blue-500 transition-all duration-300 flex items-center justify-center gap-3 shadow-lg hover:shadow-xl"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Phone className="w-4 h-4" />
                    +32 465 412 732
                  </motion.a>
                </motion.div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-3xl">
              <motion.div
                className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400/20 to-amber-500/20 rounded-full blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-tr from-red-500/10 to-orange-500/10 rounded-full blur-xl"
                animate={{
                  scale: [1.1, 1, 1.1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default DishModal;
