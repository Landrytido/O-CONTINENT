import React from "react";
import { motion } from "framer-motion";
import { Star, Clock, Sparkles, Eye } from "lucide-react";

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

interface DishCardProps {
  dish: Dish;
  language: "fr" | "en";
  onViewDetails: (dish: Dish) => void;
  index: number;
}

const DishCard: React.FC<DishCardProps> = ({
  dish,
  language,
  onViewDetails,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={dish.image}
          alt={dish.name[language]}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300";
          }}
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {dish.isSignature && (
            <motion.div
              className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <Star className="w-3 h-3" fill="currentColor" />
              SIGNATURE
            </motion.div>
          )}
          {dish.isPopular && (
            <motion.div
              className="bg-gradient-to-r from-red-500 to-red-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
            >
              🔥 POPULAIRE
            </motion.div>
          )}
          {dish.isWeekendOnly && (
            <motion.div
              className="bg-gradient-to-r from-purple-500 to-purple-600 text-white px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Clock className="w-3 h-3" />
              WEEKEND
            </motion.div>
          )}
        </div>

        {/* View Details Button */}
        <motion.button
          onClick={() => onViewDetails(dish)}
          className="absolute top-3 right-3 bg-black/20 backdrop-blur-sm text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-black/40"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <Eye className="w-4 h-4" />
        </motion.button>

        {/* Price Tag */}
        <div className="absolute bottom-3 right-3">
          <motion.div
            className="bg-white/95 backdrop-blur-sm text-black px-3 py-1.5 rounded-full font-bold text-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            {dish.priceRange && (
              <span className="text-xs text-gray-600 mr-1">À partir de</span>
            )}
            €{dish.price.toFixed(2)}
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <motion.h3
          className="text-xl font-bold text-gray-800 mb-2 line-clamp-1 group-hover:text-yellow-600 transition-colors"
          style={{ fontFamily: "Playfair Display, serif" }}
        >
          {dish.name[language]}
        </motion.h3>

        <p
          className="text-gray-600 text-sm line-clamp-2 leading-relaxed mb-4"
          style={{ fontFamily: "Inter, sans-serif" }}
        >
          {dish.description[language]}
        </p>

        {/* Action Button */}
        <motion.button
          onClick={() => onViewDetails(dish)}
          className="w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-semibold py-2.5 rounded-full hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 flex items-center justify-center gap-2 group"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span>Voir Détails</span>
          <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
        </motion.button>
      </div>

      {/* Animated Border */}
      <motion.div
        className="absolute inset-0 rounded-2xl border-2 border-yellow-400/0 group-hover:border-yellow-400/50 transition-all duration-500"
        initial={false}
      />

      {/* Hover Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
    </motion.div>
  );
};

export default DishCard;
