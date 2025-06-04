import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { testimonials } from '../../data/testimonials';
import { translations } from '../../utils/translations';

interface TestimonialsProps {
  language: 'fr' | 'en';
}

const Testimonials: React.FC<TestimonialsProps> = ({ language }) => {
  const [current, setCurrent] = useState(0);
  const t = translations[language].testimonials;
  
  const nextSlide = () => {
    setCurrent(current === testimonials.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? testimonials.length - 1 : current - 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);
    return () => clearInterval(interval);
  }, [current]);

  return (
    <section className="section-padding bg-black text-white">
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

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden py-8">
            <motion.div
              key={current}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center px-4"
            >
              <div className="mb-4 flex justify-center">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star 
                    key={i} 
                    size={24} 
                    fill={i < testimonials[current].rating ? "#FFD700" : "none"} 
                    stroke={i < testimonials[current].rating ? "#FFD700" : "#6B7280"} 
                  />
                ))}
              </div>
              <blockquote className="text-xl md:text-2xl font-light italic mb-6">
                "{language === 'fr' ? testimonials[current].text.fr : testimonials[current].text.en}"
              </blockquote>
              <div className="font-medium text-gold">
                {testimonials[current].name}
              </div>
              <div className="text-sm text-neutral-400">
                {testimonials[current].date}
              </div>
            </motion.div>
          </div>

          <button 
            className="absolute top-1/2 -translate-y-1/2 left-0 md:-left-12 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-gold hover:text-black transition-colors"
            onClick={prevSlide}
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <button 
            className="absolute top-1/2 -translate-y-1/2 right-0 md:-right-12 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-gold hover:text-black transition-colors"
            onClick={nextSlide}
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="flex justify-center mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full mx-1 ${
                index === current ? 'bg-gold' : 'bg-neutral-600'
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