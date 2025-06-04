import React from 'react';
import { motion } from 'framer-motion';
import { translations } from '../../utils/translations';

interface StoryProps {
  language: 'fr' | 'en';
}

const Story: React.FC<StoryProps> = ({ language }) => {
  const t = translations[language].story;
  
  return (
    <section id="story\" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="order-2 md:order-1"
          >
            <h2 className="section-title">
              {t.title}
            </h2>
            <p className="mb-6 leading-relaxed">
              {t.paragraph1}
            </p>
            <p className="mb-6 leading-relaxed">
              {t.paragraph2}
            </p>
            <p className="leading-relaxed">
              {t.paragraph3}
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="order-1 md:order-2"
          >
            <img 
              src="https://images.pexels.com/photos/3298687/pexels-photo-3298687.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Chef preparing food"
              className="rounded-sm shadow-custom w-full h-auto"
            />
          </motion.div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mt-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img 
              src="https://images.pexels.com/photos/2253643/pexels-photo-2253643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Restaurant ambiance"
              className="rounded-sm shadow-custom w-full h-auto"
            />
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">
              {t.missionTitle}
            </h2>
            <p className="mb-6 leading-relaxed">
              {t.missionParagraph1}
            </p>
            <p className="leading-relaxed">
              {t.missionParagraph2}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Story;