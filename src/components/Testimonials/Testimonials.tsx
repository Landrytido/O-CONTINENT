import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { testimonials } from "../../data/testimonials";
import { translations } from "../../utils/translations";

interface TestimonialsProps {
  language: "fr" | "en";
}

const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
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

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  // Get the display order for cards
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
      transition: {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    left: {
      x: "-45%",
      scale: 0.85,
      zIndex: 3,
      opacity: 0.7,
      transition: {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    right: {
      x: "45%",
      scale: 0.85,
      zIndex: 3,
      opacity: 0.7,
      transition: {
        duration: 0.4,
        ease: [0.32, 0.72, 0, 1],
      },
    },
    hidden: {
      x: 0,
      scale: 0.5,
      zIndex: 0,
      opacity: 0,
    },
  };

  return (
    <section className="py-8 bg-black text-white overflow-hidden">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title inline-block after:left-1/2 after:-translate-x-1/2">
            {t.title}
          </h2>
        </motion.div>

        <div
          className="relative h-[280px] md:h-[320px] flex items-center justify-center"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Cards Container */}
          <div className="relative w-full max-w-4xl mx-auto px-4 md:px-20">
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
                    <div
                      className={`relative w-full max-w-sm md:max-w-md bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-2xl p-8 shadow-2xl transform transition-all duration-300 ${
                        position === "center"
                          ? "hover:scale-105"
                          : "hover:scale-95"
                      } ${position !== "center" ? "backdrop-blur-sm" : ""}`}
                    >
                      {/* Blur overlay for side cards */}
                      {position !== "center" && (
                        <div className="absolute inset-0 bg-black/20 backdrop-blur-[2px] rounded-2xl z-0"></div>
                      )}

                      {/* Quote Icon */}
                      <div className="absolute top-4 left-4 opacity-20">
                        <Quote
                          size={40}
                          className="text-white"
                          fill="currentColor"
                        />
                      </div>

                      {/* Stars */}
                      <div className="mb-6 flex justify-center relative z-10">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={20}
                            className={
                              i < testimonial.rating
                                ? "text-gold fill-gold"
                                : "text-gray-400"
                            }
                          />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-lg font-light italic mb-6 text-white text-center leading-relaxed relative z-10">
                        "
                        {language === "fr"
                          ? testimonial.text.fr
                          : testimonial.text.en}
                        "
                      </blockquote>

                      {/* Author Info */}
                      <div className="text-center relative z-10">
                        <div className="font-semibold text-xl text-gold mb-1">
                          {testimonial.name}
                        </div>
                        <div className="text-sm text-gray-200 opacity-80">
                          {testimonial.date}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 z-10"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 z-10"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-gold"
                  : "w-2 bg-gray-600 hover:bg-gray-500"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
