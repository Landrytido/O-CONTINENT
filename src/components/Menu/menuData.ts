export interface Dish {
  id: string;
  name: { fr: string; en: string };
  description: { fr: string; en: string };
  price: number;
  category: string;
  image: string;
  isSignature?: boolean;
  isPopular?: boolean;
  isWeekendOnly?: boolean;
  priceRange?: string;
}

export interface MenuCategory {
  id: string;
  name: { fr: string; en: string };
  icon: string;
  color: string;
  order: number;
}

export const menuCategories: MenuCategory[] = [
  {
    id: "specialites",
    name: { fr: "Spécialités Maison", en: "House Specialties" },
    icon: "Star",
    color: "from-yellow-400 to-amber-500",
    order: 1,
  },
  {
    id: "viandes",
    name: { fr: "Menu Viande", en: "Meat Menu" },
    icon: "Beef",
    color: "from-red-500 to-red-600",
    order: 2,
  },
  {
    id: "poulets",
    name: { fr: "Menu Poulets", en: "Chicken Menu" },
    icon: "Bird",
    color: "from-orange-400 to-orange-500",
    order: 3,
  },
  {
    id: "poissons",
    name: { fr: "Menu Poissons", en: "Fish Menu" },
    icon: "Fish",
    color: "from-blue-400 to-blue-500",
    order: 4,
  },
  {
    id: "complements",
    name: { fr: "Compléments", en: "Side Dishes" },
    icon: "Plus",
    color: "from-green-400 to-green-500",
    order: 5,
  },
  {
    id: "boissons",
    name: { fr: "Boissons", en: "Beverages" },
    icon: "Coffee",
    color: "from-purple-400 to-purple-500",
    order: 6,
  },
];

export const allDishes: Dish[] = [
  {
    id: "eru",
    name: { fr: "Eru", en: "Eru" },
    description: {
      fr: "Plat traditionnel camerounais aux feuilles d'eru, viande et poisson fumé",
      en: "Traditional Cameroonian dish with eru leaves, meat and smoked fish",
    },
    price: 13,
    category: "specialites",
    image:
      "https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    isSignature: true,
  },
  {
    id: "demi-poulet-dg",
    name: { fr: "1/2 Poulet DG", en: "1/2 DG Chicken" },
    description: {
      fr: "Demi-poulet DG aux légumes, plantain et crevettes",
      en: "Half DG chicken with vegetables, plantain and shrimp",
    },
    price: 15,
    category: "poulets",
    image:
      "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    isSignature: true,
    isPopular: true,
  },
  {
    id: "ndole-mixte",
    name: { fr: "Ndolé Mixte", en: "Mixed Ndole" },
    description: {
      fr: "Ndolé traditionnel avec viande et poisson, cacahuètes grillées",
      en: "Traditional ndole with meat and fish, roasted peanuts",
    },
    price: 15,
    category: "specialites",
    image:
      "https://images.pexels.com/photos/1395319/pexels-photo-1395319.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    isPopular: true,
  },
  {
    id: "tilapia",
    name: { fr: "Tilapia", en: "Tilapia" },
    description: {
      fr: "Tilapia grillé aux herbes africaines",
      en: "Tilapia grilled with African herbs",
    },
    price: 20,
    category: "poissons",
    image:
      "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
    priceRange: "À partir de",
  },
  {
    id: "plantains-frits",
    name: { fr: "Plantains Frits", en: "Fried Plantains" },
    description: {
      fr: "Plantains dorés et croustillants",
      en: "Golden and crispy plantains",
    },
    price: 3.5,
    category: "complements",
    image:
      "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
  },
  {
    id: "coca-cola",
    name: { fr: "Coca Cola", en: "Coca Cola" },
    description: { fr: "Boisson rafraîchissante", en: "Refreshing drink" },
    price: 2.5,
    category: "boissons",
    image:
      "https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=400&h=300",
  },
];

export const menuTranslations = {
  fr: {
    title: "Notre Menu",
    description:
      "Découvrez notre sélection de plats authentiques préparés avec passion et des ingrédients de qualité.",
    loadingMenu: "Chargement du menu...",
    noDishes: "Aucun plat trouvé",
    noResultsDesc: "Essayez d'ajuster vos filtres ou votre recherche",
    clearFilters: "Effacer tous les filtres",
    showing: "Affichage de",
    dishesFound: "plats trouvés",
    plats: "Plats",
    populaires: "Populaires",
    priceRange: "Fourchette de prix",
    searchPlaceholder: "Rechercher un plat...",
    signature: "Signature",
    popular: "Populaire",
    allCategories: "Tout",
    viewDetails: "Voir Détails",
    category: "Catégorie",
    price: "Prix",
    reserve: "Réserver",
    orderWhatsApp: "Commander sur WhatsApp",
    signatureDish: "Plat Signature",
    startingFrom: "À partir de",
  },
  en: {
    title: "Our Menu",
    description:
      "Discover our selection of authentic dishes prepared with passion and quality ingredients.",
    loadingMenu: "Loading menu...",
    noDishes: "No dishes found",
    noResultsDesc: "Try adjusting your filters or search",
    clearFilters: "Clear all filters",
    showing: "Showing",
    dishesFound: "dishes found",
    plats: "Dishes",
    populaires: "Popular",
    priceRange: "Price Range",
    searchPlaceholder: "Search for a dish...",
    signature: "Signature",
    popular: "Popular",
    allCategories: "All",
    viewDetails: "View Details",
    category: "Category",
    price: "Price",
    reserve: "Reserve",
    orderWhatsApp: "Order on WhatsApp",
    signatureDish: "Signature Dish",
    startingFrom: "Starting from",
  },
};
