import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { translations } from '../../utils/translations';

interface StoryProps {
  language: 'fr' | 'en';
}

const Story: React.FC<StoryProps> = ({ language }) => {
  const t = translations[language].story;
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  
  const openImage = (imgSrc: string) => {
    setSelectedImg(imgSrc);
  };
  
  const closeImage = () => {
    setSelectedImg(null);
  };
  
  return (
    <section id="mission" className="section-padding bg-white">
      <div className="container-custom">
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="section-title relative inline-block">
                {t.missionTitle}
              </h2>
            </motion.div>

            <p className="mb-6 leading-relaxed">
              {t.missionParagraph1}
            </p>
            <p className="leading-relaxed">
              {t.missionParagraph2}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div 
              className="cursor-pointer overflow-hidden rounded-sm shadow-custom"
              onClick={() => openImage("WhatsApp Image 2025-06-10 à 22.03.03_1dcaabc7.jpg")}
            >
              <img 
                src="WhatsApp Image 2025-06-10 à 22.03.03_1dcaabc7.jpg" 
                alt="Restaurant ambiance"
                className="w-full h-auto transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-sm shadow-custom cursor-pointer"
            onClick={() => openImage("image2.jpg")}
          >
            <img 
              src="image2.jpg" 
              alt="Chef preparing food"
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-sm shadow-custom cursor-pointer"
            onClick={() => openImage("image3.jpg")}
          >
            <img 
              src="image3.jpg" 
              alt="Restaurant interior"
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-sm shadow-custom cursor-pointer"
            onClick={() => openImage("image4.jpg")}
          >
            <img 
              src="image4.jpg" 
              alt="Culinary dish"
              className="w-full h-64 object-cover transition-transform duration-500 hover:scale-105"
            />
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={closeImage}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-4xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="absolute top-4 right-4 bg-white bg-opacity-50 hover:bg-opacity-100 rounded-full p-2 transition-all z-10"
                onClick={closeImage}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <img 
                src={selectedImg} 
                alt="Enlarged view"
                className="w-full h-auto object-contain rounded-sm"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Story;