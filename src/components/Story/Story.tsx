import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Camera, Sparkles } from "lucide-react";
const translations = {
  fr: {
    story: {
      missionTitle: "Notre Histoire",
      missionParagraph1:
        "Depuis notre ouverture, O CONTINENG s'est donné pour mission de faire découvrir les saveurs authentiques de l'Afrique dans un cadre moderne et chaleureux. Notre passion pour la cuisine traditionnelle nous guide dans la création de chaque plat.",
      missionParagraph2:
        "Nous sélectionnons avec soin les meilleurs ingrédients pour vous offrir une expérience culinaire unique, où tradition et innovation se rencontrent harmonieusement.",
    },
  },
  en: {
    story: {
      missionTitle: "Our Story",
      missionParagraph1:
        "Since our opening, O CONTINENG has made it its mission to introduce the authentic flavors of Africa in a modern and warm setting. Our passion for traditional cuisine guides us in the creation of every dish.",
      missionParagraph2:
        "We carefully select the best ingredients to offer you a unique culinary experience, where tradition and innovation meet harmoniously.",
    },
  },
};

interface StoryProps {
  language: "fr" | "en";
}

const Story: React.FC<StoryProps> = ({ language = "fr" }) => {
  const t = translations[language].story;
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const openImage = (imgSrc: string) => {
    setSelectedImg(imgSrc);
  };

  const closeImage = () => {
    setSelectedImg(null);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>

      <section
        id="mission"
        className="py-12 bg-gradient-to-b from-white to-gray-50"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-yellow-400/5 to-amber-500/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-r from-black/3 to-gray-800/3 rounded-full blur-2xl"
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 3,
            }}
          />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
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
                className="mb-6"
              >
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-3 relative inline-block"
                  style={{ fontFamily: "Playfair Display, serif" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 to-black">
                    {t.missionTitle}
                  </span>
                </motion.h2>

                <motion.div
                  className="h-0.5 w-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                />
              </motion.div>

              <motion.p
                className="mb-4 leading-relaxed text-gray-700"
                style={{ fontFamily: "Inter, sans-serif" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {t.missionParagraph1}
              </motion.p>
              <motion.p
                className="leading-relaxed text-gray-700"
                style={{ fontFamily: "Inter, sans-serif" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {t.missionParagraph2}
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <motion.div
                className="relative cursor-pointer overflow-hidden rounded-xl shadow-lg border border-gray-200/50"
                onClick={() => openImage("/image6.jpg")}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="/image6.jpg"
                  alt="Restaurant ambiance"
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Camera className="w-8 h-8 text-white drop-shadow-lg" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            {[
              { src: "/image2.jpg", alt: "Chef preparing food" },
              { src: "/image3.jpg", alt: "Restaurant interior" },
              { src: "/image4.jpg", alt: "Culinary dish" },
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group overflow-hidden rounded-xl shadow-lg border border-gray-200/50 cursor-pointer"
                onClick={() => openImage(image.src)}
                whileHover={{ y: -4 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <motion.div
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.1 }}
                  >
                    <Camera className="w-6 h-6 text-white drop-shadow-lg" />
                  </motion.div>
                </div>

                <motion.div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </div>

        <AnimatePresence>
          {selectedImg && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeImage}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-4xl max-h-[90vh] overflow-hidden rounded-2xl shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2.5 transition-all z-10 shadow-lg"
                  onClick={closeImage}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X className="w-5 h-5 text-gray-800" />
                </motion.button>
                <img
                  src={selectedImg}
                  alt="Enlarged view"
                  className="w-full h-auto object-contain rounded-2xl"
                />

                <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      animate={{
                        x: [0, Math.random() * 30 - 15],
                        y: [0, Math.random() * 30 - 15],
                        opacity: [0, 0.6, 0],
                        scale: [0, 1, 0],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.8,
                        ease: "easeInOut",
                      }}
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${30 + i * 15}%`,
                      }}
                    >
                      <Sparkles className="w-4 h-4 text-yellow-400/60" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </>
  );
};

export default Story;
