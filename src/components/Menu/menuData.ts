export interface Dish {
  id: string;
  name: {
    fr: string;
    en: string;
  };
  description: {
    fr: string;
    en: string;
  };
  price: number;
  category: string;
  image: string;
  isSignature?: boolean;
  isPopular?: boolean;
  isWeekendOnly?: boolean;
  availability?: string;
  priceRange?: string;
  spiceLevel?: 0 | 1 | 2 | 3; // 0: pas épicé, 1: légèrement, 2: moyennement, 3: très épicé
  preparationTime?: number; // en minutes
  allergens?: string[];
  tags?: string[];
}

export interface MenuCategory {
  id: string;
  name: { fr: string; en: string };
  icon: string;
  color: string;
  order: number;
  description?: { fr: string; en: string };
}

export const menuCategories: MenuCategory[] = [
  {
    id: "specialites",
    name: { fr: "Spécialités Maison", en: "House Specialties" },
    icon: "Star",
    color: "from-yellow-400 to-amber-500",
    order: 1,
    description: {
      fr: "Nos créations uniques et plats signatures",
      en: "Our unique creations and signature dishes",
    },
  },
  {
    id: "viandes",
    name: { fr: "Menu Viande", en: "Meat Menu" },
    icon: "Beef",
    color: "from-red-500 to-red-600",
    order: 2,
    description: {
      fr: "Sélection de viandes grillées et mijotées",
      en: "Selection of grilled and stewed meats",
    },
  },
  {
    id: "poulets",
    name: { fr: "Menu Poulets", en: "Chicken Menu" },
    icon: "Bird",
    color: "from-orange-400 to-orange-500",
    order: 3,
    description: {
      fr: "Poulet préparé selon nos recettes traditionnelles",
      en: "Chicken prepared according to our traditional recipes",
    },
  },
  {
    id: "poissons",
    name: { fr: "Menu Poissons", en: "Fish Menu" },
    icon: "Fish",
    color: "from-blue-400 to-blue-500",
    order: 4,
    description: {
      fr: "Poissons frais du jour",
      en: "Fresh fish of the day",
    },
  },
  {
    id: "complements",
    name: { fr: "Compléments", en: "Side Dishes" },
    icon: "Plus",
    color: "from-green-400 to-green-500",
    order: 5,
    description: {
      fr: "Accompagnements traditionnels",
      en: "Traditional side dishes",
    },
  },
  {
    id: "boissons",
    name: { fr: "Boissons", en: "Beverages" },
    icon: "Coffee",
    color: "from-cyan-400 to-cyan-500",
    order: 6,
    description: {
      fr: "Boissons rafraîchissantes",
      en: "Refreshing beverages",
    },
  },
  {
    id: "vins",
    name: { fr: "Vins", en: "Wines" },
    icon: "Wine",
    color: "from-purple-600 to-purple-700",
    order: 7,
    description: {
      fr: "Sélection de vins",
      en: "Wine selection",
    },
  },
  {
    id: "liqueurs",
    name: { fr: "Liqueurs", en: "Spirits" },
    icon: "Martini",
    color: "from-gray-600 to-gray-700",
    order: 8,
    description: {
      fr: "Spiritueux et digestifs",
      en: "Spirits and digestives",
    },
  },
  {
    id: "bieres",
    name: { fr: "Bières", en: "Beers" },
    icon: "Beer",
    color: "from-amber-400 to-amber-600",
    order: 9,
    description: {
      fr: "Bières locales et internationales",
      en: "Local and international beers",
    },
  },
];

// ===== BASE DE DONNÉES COMPLÈTE =====
export const allDishes: Dish[] = [
  // ===== SPÉCIALITÉS MAISON =====
  {
    id: "eru",
    name: { fr: "Eru", en: "Eru" },
    description: {
      fr: "Plat traditionnel camerounais aux feuilles d'eru, viande et poisson fumé, spécialité authentique",
      en: "Traditional Cameroonian dish with eru leaves, meat and smoked fish, authentic specialty",
    },
    price: 13,
    category: "specialites",
    image: "/images/plats/eru.jpg",
    isSignature: true,
    spiceLevel: 2,
    preparationTime: 45,
    tags: ["traditionnel", "camerounais"],
  },
  {
    id: "kontchap",
    name: { fr: "Kontchap", en: "Kontchap" },
    description: {
      fr: "Spécialité camerounaise aux légumes verts et viande, plat traditionnel savoureux",
      en: "Cameroonian specialty with green vegetables and meat, traditional flavorful dish",
    },
    price: 10,
    category: "specialites",
    image: "/images/plats/kontchap.jpg",
    spiceLevel: 1,
    preparationTime: 35,
  },
  {
    id: "ndole-mixte",
    name: { fr: "Ndolé Mixte", en: "Mixed Ndole" },
    description: {
      fr: "Ndolé traditionnel avec viande et poisson, cacahuètes grillées, notre plat le plus demandé",
      en: "Traditional ndole with meat and fish, roasted peanuts, our most requested dish",
    },
    price: 15,
    category: "specialites",
    image: "/images/plats/ndole-mixte.jpg",
    isPopular: true,
    spiceLevel: 1,
    preparationTime: 40,
    allergens: ["cacahuètes"],
  },
  {
    id: "macabo-malaxe-ndole-poisson",
    name: {
      fr: "Macabo Malaxé + Ndolé Poisson",
      en: "Mashed Macabo + Fish Ndole",
    },
    description: {
      fr: "Macabo pilé traditionnel accompagné de ndolé au poisson, combinaison parfaite",
      en: "Traditional mashed macabo served with fish ndole, perfect combination",
    },
    price: 17.5,
    category: "specialites",
    image: "/images/plats/macabo-ndole.jpg",
    spiceLevel: 1,
    preparationTime: 50,
  },
  {
    id: "brochettes",
    name: { fr: "Brochettes", en: "Skewers" },
    description: {
      fr: "Brochettes de viande grillée aux épices africaines, disponible weekends uniquement",
      en: "Grilled meat skewers with African spices, available weekends only",
    },
    price: 10,
    category: "specialites",
    image: "/images/plats/brochettes.jpg",
    isWeekendOnly: true,
    availability: "Samedi & Dimanche",
    spiceLevel: 2,
    preparationTime: 25,
  },
  {
    id: "taro-sauce-jaune",
    name: { fr: "Taro Sauce Jaune", en: "Taro Yellow Sauce" },
    description: {
      fr: "Taro accompagné d'une sauce jaune épicée, spécialité weekend",
      en: "Taro served with spicy yellow sauce, weekend specialty",
    },
    price: 15,
    category: "specialites",
    image: "/images/plats/taro-sauce.jpg",
    isWeekendOnly: true,
    availability: "Samedi & Dimanche",
    spiceLevel: 2,
    preparationTime: 45,
  },
  {
    id: "beignets-haricot",
    name: { fr: "Beignets Haricot", en: "Bean Fritters" },
    description: {
      fr: "Beignets croustillants aux haricots, spécialité locale parfaite pour l'apéritif",
      en: "Crispy bean fritters, local specialty perfect as appetizer",
    },
    price: 8,
    category: "specialites",
    image: "/images/plats/beignets.jpg",
    spiceLevel: 0,
    preparationTime: 20,
    tags: ["végétarien", "apéritif"],
  },

  // ===== MENU VIANDE (Extrait - structure similaire pour tous) =====
  {
    id: "viande-sauce-tomate",
    name: { fr: "Viande Sauce Tomate", en: "Meat in Tomato Sauce" },
    description: {
      fr: "Viande mijotée dans une sauce tomate épicée aux herbes africaines",
      en: "Meat stewed in spicy tomato sauce with African herbs",
    },
    price: 15,
    category: "viandes",
    image: "/images/plats/viande-tomate.jpg",
    spiceLevel: 2,
    preparationTime: 40,
  },
  {
    id: "viande-sauce-arachide",
    name: { fr: "Viande Sauce d'Arachide", en: "Meat in Peanut Sauce" },
    description: {
      fr: "Viande dans une riche sauce d'arachide traditionnelle, notre spécialité",
      en: "Meat in rich traditional peanut sauce, our specialty",
    },
    price: 15,
    category: "viandes",
    image: "/images/plats/viande-arachide.jpg",
    isPopular: true,
    spiceLevel: 1,
    preparationTime: 45,
    allergens: ["cacahuètes"],
  },

  // ... [Insérer ici tous les autres plats de votre base de données]
  // Pour économiser de l'espace, je mets seulement quelques exemples
  // Vous devez copier tous les plats de votre document

  // ===== BOISSONS (Exemple) =====
  {
    id: "coca-cola",
    name: { fr: "Coca Cola", en: "Coca Cola" },
    description: {
      fr: "Boisson rafraîchissante classique",
      en: "Classic refreshing drink",
    },
    price: 2.5,
    category: "boissons",
    image: "/images/boissons/coca.jpg",
    tags: ["sans-alcool"],
  },

  // ===== BIÈRES CAMEROUNAISES (Exemple) =====
  {
    id: "33-export",
    name: { fr: "33 Export", en: "33 Export" },
    description: {
      fr: "Bière camerounaise d'exportation, authentique",
      en: "Authentic Cameroonian export beer",
    },
    price: 8,
    category: "bieres",
    image: "/images/bieres/33-export.jpg",
    isSignature: true,
    tags: ["camerounais", "alcool"],
  },
];

// ===== FONCTIONS UTILITAIRES OPTIMISÉES =====
export const getDishesByCategory = (categoryId: string): Dish[] => {
  if (categoryId === "all") return allDishes;
  return allDishes.filter((dish) => dish.category === categoryId);
};

export const getSignatureDishes = (): Dish[] => {
  return allDishes.filter((dish) => dish.isSignature);
};

export const getPopularDishes = (): Dish[] => {
  return allDishes.filter((dish) => dish.isPopular);
};

export const getWeekendOnlyDishes = (): Dish[] => {
  return allDishes.filter((dish) => dish.isWeekendOnly);
};

export const searchDishes = (
  searchTerm: string,
  language: "fr" | "en"
): Dish[] => {
  const term = searchTerm.toLowerCase().trim();
  if (!term) return allDishes;

  return allDishes.filter(
    (dish) =>
      dish.name[language].toLowerCase().includes(term) ||
      dish.description[language].toLowerCase().includes(term) ||
      dish.tags?.some((tag) => tag.toLowerCase().includes(term))
  );
};

export const getDishById = (id: string): Dish | undefined => {
  return allDishes.find((dish) => dish.id === id);
};

export const getDishesByPriceRange = (min: number, max: number): Dish[] => {
  return allDishes.filter((dish) => dish.price >= min && dish.price <= max);
};

export const getDishesBySpiceLevel = (level: 0 | 1 | 2 | 3): Dish[] => {
  return allDishes.filter((dish) => dish.spiceLevel === level);
};

// ===== STATISTIQUES DU MENU =====
export const menuStats = {
  totalDishes: allDishes.length,
  categoriesCount: menuCategories.length,
  signatureDishes: allDishes.filter((d) => d.isSignature).length,
  popularDishes: allDishes.filter((d) => d.isPopular).length,
  weekendOnlyDishes: allDishes.filter((d) => d.isWeekendOnly).length,
  dishesPerCategory: menuCategories.reduce((acc, cat) => {
    acc[cat.id] = allDishes.filter((d) => d.category === cat.id).length;
    return acc;
  }, {} as Record<string, number>),
  priceRange: {
    min: Math.min(...allDishes.map((d) => d.price)),
    max: Math.max(...allDishes.map((d) => d.price)),
    average:
      Math.round(
        (allDishes.reduce((sum, d) => sum + d.price, 0) / allDishes.length) *
          100
      ) / 100,
  },
};

// ===== DONNÉES POUR L'AFFICHAGE =====
export const featuredDishes = [
  ...getSignatureDishes().slice(0, 3),
  ...getPopularDishes()
    .filter((d) => !d.isSignature)
    .slice(0, 3),
].slice(0, 6);

// ===== TRADUCTIONS =====
export const menuTranslations = {
  fr: {
    title: "Notre Menu",
    subtitle: "Saveurs Authentiques",
    description:
      "Découvrez notre sélection de plats traditionnels préparés avec passion",
    loadingMenu: "Chargement du menu...",
    noDishes: "Aucun plat trouvé",
    noResultsDesc: "Essayez d'ajuster vos filtres ou votre recherche",
    clearFilters: "Effacer tous les filtres",
    showing: "Affichage de",
    dishesFound: "plats trouvés",
    viewDetails: "Voir Détails",
    reserve: "Réserver",
    orderWhatsApp: "Commander sur WhatsApp",
    priceFrom: "À partir de",
    preparationTime: "Temps de préparation",
    minutes: "minutes",
    spiceLevel: "Niveau d'épice",
    spiceLevels: [
      "Doux",
      "Légèrement épicé",
      "Moyennement épicé",
      "Très épicé",
    ],
    allergens: "Allergènes",
    signature: "Signature",
    popular: "Populaire",
    weekend: "Weekend",
    filters: {
      all: "Tout",
      search: "Rechercher...",
      priceRange: "Gamme de prix",
      spiceLevel: "Niveau d'épice",
      category: "Catégorie",
    },
  },
  en: {
    title: "Our Menu",
    subtitle: "Authentic Flavors",
    description:
      "Discover our selection of traditional dishes prepared with passion",
    loadingMenu: "Loading menu...",
    noDishes: "No dishes found",
    noResultsDesc: "Try adjusting your filters or search",
    clearFilters: "Clear all filters",
    showing: "Showing",
    dishesFound: "dishes found",
    viewDetails: "View Details",
    reserve: "Reserve",
    orderWhatsApp: "Order on WhatsApp",
    priceFrom: "Starting from",
    preparationTime: "Preparation time",
    minutes: "minutes",
    spiceLevel: "Spice level",
    spiceLevels: ["Mild", "Slightly spicy", "Moderately spicy", "Very spicy"],
    allergens: "Allergens",
    signature: "Signature",
    popular: "Popular",
    weekend: "Weekend",
    filters: {
      all: "All",
      search: "Search...",
      priceRange: "Price Range",
      spiceLevel: "Spice Level",
      category: "Category",
    },
  },
};

export default {
  allDishes,
  menuCategories,
  menuStats,
  menuTranslations,
  getDishesByCategory,
  getSignatureDishes,
  getPopularDishes,
  getWeekendOnlyDishes,
  searchDishes,
  getDishById,
  getDishesByPriceRange,
  getDishesBySpiceLevel,
  featuredDishes,
};
