import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote, Heart } from "lucide-react";
const testimonials = [
  {
    text: {
      fr: "Une expérience culinaire exceptionnelle ! Les saveurs sont authentiques et le service impeccable. Je recommande vivement !",
      en: "An exceptional culinary experience! The flavors are authentic and the service impeccable. I highly recommend!",
    },
    name: "Marie Dubois",
    date: "15 Mars 2024",
    rating: 5,
  },
  {
    text: {
      fr: "Le meilleur restaurant africain de Bruxelles ! L'ambiance est chaleureuse et les plats délicieux. Une véritable découverte !",
      en: "The best African restaurant in Brussels! The atmosphere is warm and the dishes delicious. A real discovery!",
    },
    name: "Jean Laurent",
    date: "8 Mars 2024",
    rating: 5,
  },
  {
    text: {
      fr: "Des plats savoureux qui nous transportent directement en Afrique. Le personnel est très accueillant et professionnel.",
      en: "Tasty dishes that transport us directly to Africa. The staff is very welcoming and professional.",
    },
    name: "Sophie Martin",
    date: "22 Février 2024",
    rating: 5,
  },
  {
    text: {
      fr: "Une cuisine authentique dans un cadre moderne et élégant. Chaque plat est une explosion de saveurs !",
      en: "Authentic cuisine in a modern and elegant setting. Each dish is an explosion of flavors!",
    },
    name: "Ahmed Hassan",
    date: "10 Février 2024",
    rating: 5,
  },
];

const translations = {
  fr: {
    testimonials: {
      title: "Ce que disent nos clients",
    },
  },
  en: {
    testimonials: {
      title: "What our customers say",
    },
  },
};

interface TestimonialsProps {
  language: "fr" | "en";
}

const Testimonials: React.FC<TestimonialsProps> = ({ language = "fr" }) => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const t = translations[language].testimonials;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);
  const getCardPosition = (index: number) => {
    const diff =
      (index - currentIndex + testimonials.length) % testimonials.length;

    if (diff === 0) return "center";
    if (diff === 1 || diff === testimonials.length - 1)
      return diff === 1 ? "right" : "left";
    return "hidden";
  };

  const cardVariants = {
    center: {
      x: 0,
      scale: 1,
      zIndex: 5,
      opacity: 1,
      rotateY: 0,
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    left: {
      x: "-45%",
      scale: 0.85,
      zIndex: 3,
      opacity: 0.7,
      rotateY: 10,
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    right: {
      x: "45%",
      scale: 0.85,
      zIndex: 3,
      opacity: 0.7,
      rotateY: -10,
      transition: {
        duration: 0.5,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    hidden: {
      x: 0,
      scale: 0.5,
      zIndex: 0,
      opacity: 0,
      rotateY: 0,
    },
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&family=Dancing+Script:wght@400;500;600&display=swap');
      `}</style>

      <section className="relative py-12 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/3 left-1/4 w-48 h-48 bg-gradient-to-r from-yellow-400/6 to-amber-500/6 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-gradient-to-r from-red-500/6 to-orange-500/6 rounded-full blur-3xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />

          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                y: [0, -25, 0],
                opacity: [0, 0.6, 0],
                rotate: [0, 180],
              }}
              transition={{
                duration: Math.random() * 6 + 4,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
            >
              <Star className="w-1.5 h-1.5 text-yellow-400/40" />
            </motion.div>
          ))}
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
              style={{ fontFamily: "Playfair Display, serif" }}
              whileHover={{ scale: 1.02 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">
                {t.title}
              </span>
            </motion.h2>

            <motion.div
              className="h-0.5 w-16 mx-auto bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            />
          </motion.div>

          <div
            className="relative h-[280px] md:h-[320px] flex items-center justify-center"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div
              className="relative w-full max-w-4xl mx-auto px-4 md:px-16"
              style={{ perspective: "800px" }}
            >
              <AnimatePresence mode="sync">
                {testimonials.map((testimonial, index) => {
                  const position = getCardPosition(index);
                  if (position === "hidden") return null;

                  return (
                    <motion.div
                      key={index}
                      custom={position}
                      variants={cardVariants}
                      initial="hidden"
                      animate={position}
                      exit="hidden"
                      className="absolute inset-0 flex items-center justify-center"
                      onClick={() =>
                        position !== "center" && setCurrentIndex(index)
                      }
                      style={{
                        cursor: position !== "center" ? "pointer" : "default",
                      }}
                    >
                      <motion.div
                        className={`relative w-full max-w-md bg-white/8 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-white/10 ${
                          position === "center" ? "hover:bg-white/12" : ""
                        }`}
                        whileHover={
                          position === "center"
                            ? {
                                scale: 1.02,
                              }
                            : {}
                        }
                        transition={{ duration: 0.3 }}
                      >
                        {position !== "center" && (
                          <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-2xl z-0"></div>
                        )}

                        {position === "center" && (
                          <motion.div
                            className="absolute inset-0 rounded-2xl border border-yellow-400/30"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3, repeat: Infinity }}
                          />
                        )}

                        <div className="absolute top-4 left-4 opacity-15">
                          <Quote
                            size={32}
                            className="text-yellow-400"
                            fill="currentColor"
                          />
                        </div>

                        <div className="mb-5 flex justify-center relative z-10">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star
                              key={i}
                              size={18}
                              className={
                                i < testimonial.rating
                                  ? "text-yellow-400 fill-yellow-400 mx-0.5"
                                  : "text-gray-400 mx-0.5"
                              }
                            />
                          ))}
                        </div>

                        <blockquote
                          className="text-base md:text-lg font-light italic mb-5 text-white text-center leading-relaxed relative z-10"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          <span className="text-yellow-400 text-xl">"</span>
                          {language === "fr"
                            ? testimonial.text.fr
                            : testimonial.text.en}
                          <span className="text-yellow-400 text-xl">"</span>
                        </blockquote>

                        <div className="text-center relative z-10">
                          <div
                            className="font-semibold text-lg mb-1"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-amber-500">
                              {testimonial.name}
                            </span>
                          </div>
                          <div
                            className="text-xs text-gray-300 opacity-80 flex items-center justify-center space-x-1"
                            style={{ fontFamily: "Inter, sans-serif" }}
                          >
                            <Heart className="w-3 h-3 text-red-400" />
                            <span>{testimonial.date}</span>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>

            <motion.button
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/8 backdrop-blur-sm text-white p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 z-10 border border-white/20"
              onClick={prevSlide}
              aria-label="Previous testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            <motion.button
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/8 backdrop-blur-sm text-white p-3 rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 z-10 border border-white/20"
              onClick={nextSlide}
              aria-label="Next testimonial"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "w-8 bg-gradient-to-r from-yellow-400 to-amber-500"
                    : "w-2 bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
