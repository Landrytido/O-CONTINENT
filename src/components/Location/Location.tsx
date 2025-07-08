import React from "react";
import { motion } from "framer-motion";
import { Clock, Phone, MapPin, Star, Sparkles } from "lucide-react";
const translations = {
  fr: {
    location: {
      title: "Nous Trouver",
      contactInfo: "Informations de Contact",
      address: "Adresse",
      phone: "Téléphone",
      hours: "Horaires d'Ouverture",
      days: {
        mondayFriday: "Lun - Ven",
        saturday: "Samedi",
        sunday: "Dimanche",
      },
      closed: "Fermé",
      makeReservation: "Réserver une Table",
    },
  },
  en: {
    location: {
      title: "Find Us",
      contactInfo: "Contact Information",
      address: "Address",
      phone: "Phone",
      hours: "Opening Hours",
      days: {
        mondayFriday: "Mon - Fri",
        saturday: "Saturday",
        sunday: "Sunday",
      },
      closed: "Closed",
      makeReservation: "Book a Table",
    },
  },
};

interface LocationProps {
  language: "fr" | "en";
}

const Location: React.FC<LocationProps> = ({ language = "fr" }) => {
  const t = translations[language].location;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>

      <section
        id="contact"
        className="relative py-16 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-48 h-48 bg-gradient-to-r from-yellow-400/5 to-amber-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-black/5 to-gray-800/5 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              animate={{
                y: [0, -20, 0],
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
              {i % 2 === 0 ? (
                <Star className="w-1.5 h-1.5 text-yellow-400/30" />
              ) : (
                <div className="w-1 h-1 bg-black/20 rounded-full" />
              )}
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
            <motion.div
              className="inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h2
                className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3 relative"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-black to-gray-700">
                  {t.title}
                </span>

                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/20 to-transparent"
                  initial={{ x: "-100%" }}
                  animate={{ x: "200%" }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 8,
                    ease: "easeInOut",
                  }}
                />
              </h2>
            </motion.div>

            <motion.div
              className="h-0.5 w-16 mx-auto bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[350px] rounded-2xl overflow-hidden shadow-lg border border-gray-200/50"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.392455504523!2d4.292924477142434!3d50.82389417166596!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c69bd4a38a03%3A0x12122ad9a38ec443!2sChauss%C3%A9e%20de%20Mons%201081%2C%201070%20Anderlecht!5e0!3m2!1sfr!2sbe!4v1749638312823!5m2!1sfr!2sbe"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Restaurant O-Contineng location"
              />

              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-yellow-400/5 to-transparent pointer-events-none"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-gray-200/50"
            >
              <motion.div
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-yellow-400/10 via-transparent to-black/5"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              />

              <div className="relative z-10">
                <motion.h3
                  className="text-xl font-bold mb-5 flex items-center space-x-2"
                  style={{ fontFamily: "Playfair Display, serif" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="p-1.5 rounded-full bg-gradient-to-r from-yellow-400/20 to-amber-500/20"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                  </motion.div>
                  <span className="text-gray-800">{t.contactInfo}</span>
                </motion.h3>

                <div className="space-y-4">
                  <motion.div
                    className="flex items-start group"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="p-2 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors mr-3 mt-0.5"
                      whileHover={{ scale: 1.1 }}
                    >
                      <MapPin
                        size={18}
                        className="text-yellow-600 flex-shrink-0"
                      />
                    </motion.div>
                    <div>
                      <h4
                        className="font-semibold mb-1 text-gray-800"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {t.address}
                      </h4>
                      <p
                        className="text-gray-600 text-sm leading-relaxed"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        Chaussée de Mons 1081
                        <br />
                        1070 Anderlecht, Belgique
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start group"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="p-2 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors mr-3 mt-0.5"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Phone
                        size={18}
                        className="text-yellow-600 flex-shrink-0"
                      />
                    </motion.div>
                    <div>
                      <h4
                        className="font-semibold mb-1 text-gray-800"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {t.phone}
                      </h4>
                      <motion.a
                        href="tel:+32466468778"
                        className="text-gray-600 hover:text-yellow-600 transition-colors text-sm"
                        style={{ fontFamily: "Inter, sans-serif" }}
                        whileHover={{ scale: 1.02 }}
                      >
                        +32 465 412 732
                      </motion.a>
                    </div>
                  </motion.div>

                  <motion.div
                    className="flex items-start group"
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <motion.div
                      className="p-2 rounded-full bg-yellow-400/10 group-hover:bg-yellow-400/20 transition-colors mr-3 mt-0.5"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Clock
                        size={18}
                        className="text-yellow-600 flex-shrink-0"
                      />
                    </motion.div>
                    <div>
                      <h4
                        className="font-semibold mb-2 text-gray-800"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        {t.hours}
                      </h4>
                      <ul
                        className="text-gray-600 text-sm space-y-1"
                        style={{ fontFamily: "Inter, sans-serif" }}
                      >
                        <li className="flex justify-between">
                          <span className="font-medium text-gray-700">
                            {t.days.mondayFriday}:
                          </span>
                          <span>11:30 - 14:30, 18:00 - 22:30</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium text-gray-700">
                            {t.days.saturday}:
                          </span>
                          <span>18:00 - 23:00</span>
                        </li>
                        <li className="flex justify-between">
                          <span className="font-medium text-gray-700">
                            {t.days.sunday}:
                          </span>
                          <span className="text-red-500">{t.closed}</span>
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  <motion.div className="pt-4">
                    <motion.a
                      href="#reservation"
                      className="block w-full bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-center px-6 py-3 rounded-full font-semibold hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 shadow-lg hover:shadow-yellow-400/25"
                      style={{ fontFamily: "Inter, sans-serif" }}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="flex items-center justify-center space-x-2">
                        <span>{t.makeReservation}</span>
                        <Sparkles className="w-4 h-4" />
                      </span>
                    </motion.a>
                  </motion.div>
                </div>
              </div>

              <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-yellow-400/40 rounded-full"
                    animate={{
                      x: [0, Math.random() * 50 - 25],
                      y: [0, Math.random() * 50 - 25],
                      opacity: [0, 0.8, 0],
                      scale: [0, 1.5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: i * 1.2,
                      ease: "easeInOut",
                    }}
                    style={{
                      left: `${20 + i * 20}%`,
                      top: `${30 + i * 15}%`,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Location;
