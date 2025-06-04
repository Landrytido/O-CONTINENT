import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Phone, MapPin } from 'lucide-react';
import { translations } from '../../utils/translations';

interface LocationProps {
  language: 'fr' | 'en';
}

const Location: React.FC<LocationProps> = ({ language }) => {
  const t = translations[language].location;
  
  return (
    <section id="contact\" className="section-padding bg-white">
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
        
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="h-[400px] md:h-full"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.2332218767755!2d4.347459876536752!3d50.843297694689856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c47f4a3f91b5%3A0xbf7f4320d853c5f3!2sRue%20des%20Bogards%2015%2C%201000%20Bruxelles!5e0!3m2!1sfr!2sbe!4v1676380217977!5m2!1sfr!2sbe" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '4px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant location"
            ></iframe>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-neutral-100 p-8 rounded-sm shadow-custom"
          >
            <h3 className="text-2xl font-bold mb-6 font-playfair">
              {t.contactInfo}
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin size={24} className="text-gold flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h4 className="font-medium mb-1">{t.address}</h4>
                  <p className="text-neutral-700">
                    15 rue des Bogards<br />
                    1000 Brussels, Belgium
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone size={24} className="text-gold flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h4 className="font-medium mb-1">{t.phone}</h4>
                  <a href="tel:+32466468778" className="text-neutral-700 hover:text-gold transition-colors">
                    +32 466 468 778
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock size={24} className="text-gold flex-shrink-0 mt-1" />
                <div className="ml-4">
                  <h4 className="font-medium mb-1">{t.hours}</h4>
                  <ul className="text-neutral-700">
                    <li><span className="font-medium">{t.days.mondayFriday}:</span> 11:30 - 14:30, 18:00 - 22:30</li>
                    <li><span className="font-medium">{t.days.saturday}:</span> 18:00 - 23:00</li>
                    <li><span className="font-medium">{t.days.sunday}:</span> {t.closed}</li>
                  </ul>
                </div>
              </div>
              
              <div className="pt-4">
                <a 
                  href="#reservation" 
                  className="btn btn-primary block text-center"
                >
                  {t.makeReservation}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Location;