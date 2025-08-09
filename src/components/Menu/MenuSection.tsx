// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { X, Sparkles, Star } from "lucide-react";
// import { menuCategories } from "../../data/menuData";
// import { translations } from "../../utils/translations";

// const MenuCategory: React.FC<{
//   category: any;
//   onClick: () => void;
//   language: string;
//   index: number;
// }> = ({ category, onClick, language, index }) => (
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     whileInView={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5, delay: index * 0.1 }}
//     viewport={{ once: true }}
//     className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg border border-gray-800/50"
//     onClick={onClick}
//     whileHover={{ y: -4, scale: 1.02 }}
//   >
//     <img
//       src={category.image}
//       alt={
//         category.name?.[language as keyof typeof category.name] || category.id
//       }
//       className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
//     />
//     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
//     <div className="absolute bottom-0 left-0 right-0 p-3">
//       <h3
//         className="text-white font-bold text-lg mb-1"
//         style={{ fontFamily: "Inter, sans-serif" }}
//       >
//         {translations[language as keyof typeof translations]?.menu
//           ?.categories?.[
//           category.id as keyof typeof translations.fr.menu.categories
//         ] || category.id}
//       </h3>
//       <p
//         className="text-gray-300 text-sm"
//         style={{ fontFamily: "Inter, sans-serif" }}
//       >
//         {category.description?.[
//           language as keyof typeof category.description
//         ] || ""}
//       </p>
//     </div>
//     <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
//   </motion.div>
// );

// const MenuOverlay: React.FC<{
//   onClose: () => void;
//   categories: any[];
//   language: string;
// }> = ({ onClose, categories, language }) => {
//   useEffect(() => {
//     const originalScrollY = window.scrollY;
//     const originalOverflow = document.body.style.overflow;
//     const originalPaddingRight = document.body.style.paddingRight;

//     const scrollBarWidth =
//       window.innerWidth - document.documentElement.clientWidth;

//     document.body.style.overflow = "hidden";
//     document.body.style.paddingRight = `${scrollBarWidth}px`;
//     window.scrollTo(0, 0);

//     return () => {
//       document.body.style.overflow = originalOverflow;
//       document.body.style.paddingRight = originalPaddingRight;
//       window.scrollTo(0, originalScrollY);
//     };
//   }, []);

//   const fullMenuPages = [
//     {
//       title:
//         language === "fr"
//           ? "Présentation du Restaurant"
//           : "Restaurant Presentation",
//       image: "/menu/pdf1-presentation-complete.jpg",
//     },
//     {
//       title:
//         language === "fr" ? "Menu Poulets & Poissons" : "Chicken & Fish Menu",
//       image: "/menu/pdf2-poulets-poissons-complete.jpg",
//     },
//     {
//       title:
//         language === "fr"
//           ? "Menu Viande & Spécialités"
//           : "Meat & Specialties Menu",
//       image: "/menu/pdf3-viande-specialites-complete.jpg",
//     },
//     {
//       title: language === "fr" ? "Boissons & Compléments" : "Drinks & Sides",
//       image: "/menu/pdf4-boissons-complements-complete.jpg",
//     },
//     {
//       title: language === "fr" ? "Bières" : "Beers",
//       image: "/menu/pdf5-bieres-complete.jpg",
//     },
//   ];

//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//       onClick={onClose}
//     >
//       <motion.div
//         initial={{ scale: 0.8, opacity: 0 }}
//         animate={{ scale: 1, opacity: 1 }}
//         exit={{ scale: 0.8, opacity: 0 }}
//         className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20"
//         onClick={(e) => e.stopPropagation()}
//       >
//         <div className="sticky top-0 bg-black/50 backdrop-blur-sm p-4 border-b border-white/20 z-10">
//           <div className="flex justify-between items-center">
//             <h2
//               className="text-2xl font-bold text-white"
//               style={{ fontFamily: "Playfair Display, serif" }}
//             >
//               Menu Complet
//             </h2>
//             <motion.button
//               onClick={onClose}
//               className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-all"
//               whileHover={{ scale: 1.1 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <X className="w-6 h-6 text-white" />
//             </motion.button>
//           </div>
//         </div>

//         <div className="p-6 space-y-8">
//           {fullMenuPages.map((page, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//               className="space-y-3"
//             >
//               <h3
//                 className="text-xl font-bold text-yellow-400 text-center"
//                 style={{ fontFamily: "Playfair Display, serif" }}
//               >
//                 {page.title}
//               </h3>
//               <img
//                 src={page.image}
//                 alt={page.title}
//                 className="w-full h-auto rounded-lg shadow-lg"
//                 onError={() => {}}
//               />
//             </motion.div>
//           ))}
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };

// interface MenuSectionProps {
//   language: "fr" | "en";
// }

// const MenuSection: React.FC<MenuSectionProps> = ({ language = "fr" }) => {
//   const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
//   const [showFullMenu, setShowFullMenu] = useState(false);

//   const t = translations[language].menu;

//   useEffect(() => {
//     if (selectedCategory) {
//       const originalScrollY = window.scrollY;
//       const originalOverflow = document.body.style.overflow;
//       const originalPaddingRight = document.body.style.paddingRight;

//       const scrollBarWidth =
//         window.innerWidth - document.documentElement.clientWidth;

//       document.body.style.overflow = "hidden";
//       document.body.style.paddingRight = `${scrollBarWidth}px`;
//       window.scrollTo(0, 0);

//       return () => {
//         document.body.style.overflow = originalOverflow;
//         document.body.style.paddingRight = originalPaddingRight;
//         window.scrollTo(0, originalScrollY);
//       };
//     }
//   }, [selectedCategory]);

//   const handleCategoryClick = (category: string) => {
//     setSelectedCategory(category);
//   };

//   const handleShowFullMenu = () => {
//     setShowFullMenu(true);
//   };

//   const handleCloseCategory = () => {
//     setSelectedCategory(null);
//   };

//   const handleCloseFullMenu = () => {
//     setShowFullMenu(false);
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap');
//       `}</style>

//       <section
//         id="menu"
//         className="py-12 bg-gradient-to-b from-black via-gray-900 to-black text-white overflow-hidden"
//       >
//         <div className="absolute inset-0 overflow-hidden pointer-events-none">
//           <motion.div
//             className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-r from-yellow-400/6 to-amber-500/6 rounded-full blur-3xl"
//             animate={{
//               scale: [1, 1.2, 1],
//               opacity: [0.3, 0.5, 0.3],
//             }}
//             transition={{
//               duration: 8,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           />
//           <motion.div
//             className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-to-r from-red-500/6 to-orange-500/6 rounded-full blur-3xl"
//             animate={{
//               scale: [1.1, 1, 1.1],
//               opacity: [0.2, 0.4, 0.2],
//             }}
//             transition={{
//               duration: 10,
//               repeat: Infinity,
//               ease: "easeInOut",
//               delay: 3,
//             }}
//           />

//           {[...Array(8)].map((_, i) => (
//             <motion.div
//               key={i}
//               className="absolute"
//               animate={{
//                 y: [0, -20, 0],
//                 opacity: [0, 0.6, 0],
//                 rotate: [0, 180],
//               }}
//               transition={{
//                 duration: Math.random() * 6 + 4,
//                 repeat: Infinity,
//                 delay: Math.random() * 3,
//                 ease: "easeInOut",
//               }}
//               style={{
//                 left: `${Math.random() * 100}%`,
//                 top: `${Math.random() * 100}%`,
//               }}
//             >
//               <Star className="w-1.5 h-1.5 text-yellow-400/40" />
//             </motion.div>
//           ))}
//         </div>

//         <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mb-8"
//           >
//             <motion.h2
//               className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3"
//               style={{ fontFamily: "Playfair Display, serif" }}
//               whileHover={{ scale: 1.02 }}
//             >
//               <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600">
//                 {t.title}
//               </span>
//             </motion.h2>

//             <motion.p
//               className="max-w-2xl mx-auto text-gray-300"
//               style={{ fontFamily: "Inter, sans-serif" }}
//               initial={{ opacity: 0, y: 10 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//             >
//               {t.description}
//             </motion.p>

//             <motion.div
//               className="h-0.5 w-16 mx-auto mt-4 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
//               initial={{ scaleX: 0 }}
//               whileInView={{ scaleX: 1 }}
//               transition={{ duration: 0.6, delay: 0.3 }}
//             />
//           </motion.div>

//           <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
//             {menuCategories.map((category, index) => (
//               <MenuCategory
//                 key={category.id}
//                 category={category}
//                 onClick={() => handleCategoryClick(category.id)}
//                 language={language}
//                 index={index}
//               />
//             ))}
//           </div>

//           <div className="text-center">
//             <motion.button
//               onClick={handleShowFullMenu}
//               className="relative group bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-yellow-400/25 transition-all duration-300"
//               style={{ fontFamily: "Inter, sans-serif" }}
//               whileHover={{ scale: 1.05, y: -2 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               <span className="relative z-10 flex items-center space-x-2">
//                 <span>{t.viewFullMenu}</span>
//                 <Sparkles className="w-5 h-5" />
//               </span>
//               <motion.div
//                 className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/30 to-white/0 rounded-full"
//                 initial={{ x: "-100%" }}
//                 whileHover={{ x: "100%" }}
//                 transition={{ duration: 0.6 }}
//               />
//             </motion.button>
//           </div>

//           <AnimatePresence>
//             {selectedCategory && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
//                 onClick={handleCloseCategory}
//               >
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   animate={{ opacity: 1, scale: 1 }}
//                   exit={{ opacity: 0, scale: 0.9 }}
//                   transition={{ duration: 0.3 }}
//                   className="relative max-w-4xl w-full max-h-[80vh] overflow-y-auto"
//                   onClick={(e) => e.stopPropagation()}
//                 >
//                   <motion.button
//                     onClick={handleCloseCategory}
//                     className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full p-2 transition-all z-10 shadow-lg"
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                   >
//                     <X className="w-5 h-5 text-gray-800" />
//                   </motion.button>
//                   <img
//                     src={
//                       menuCategories.find((c) => c.id === selectedCategory)
//                         ?.menuImage || ""
//                     }
//                     alt={t.menuAlt}
//                     className="w-full h-auto rounded-2xl shadow-2xl"
//                   />
//                 </motion.div>
//               </motion.div>
//             )}
//           </AnimatePresence>

//           <AnimatePresence>
//             {showFullMenu && (
//               <MenuOverlay
//                 onClose={handleCloseFullMenu}
//                 categories={menuCategories}
//                 language={language}
//               />
//             )}
//           </AnimatePresence>
//         </div>
//       </section>
//     </>
//   );
// };

// export default MenuSection;
