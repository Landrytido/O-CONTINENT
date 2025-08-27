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
  preparationTime?: number;
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
    name: { fr: "Softs & Eaux", en: "Soft Drinks & Water" },
    icon: "Coffee",
    color: "from-cyan-400 to-cyan-500",
    order: 6,
  },
  {
    id: "bieres",
    name: { fr: "Bières", en: "Beers" },
    icon: "Beer",
    color: "from-amber-400 to-amber-600",
    order: 7,
  },
  {
    id: "vins",
    name: { fr: "Vins", en: "Wines" },
    icon: "Wine",
    color: "from-purple-600 to-purple-700",
    order: 8,
  },
  {
    id: "liqueurs",
    name: { fr: "Liqueurs", en: "Spirits" },
    icon: "Martini",
    color: "from-gray-600 to-gray-700",
    order: 9,
  },
];

export const allDishes: Dish[] = [
  {
    id: "eru",
    name: { fr: "Eru", en: "Eru" },
    description: {
      fr: "Plat traditionnel camerounais aux feuilles d'eru, viande et poisson fumé, spécialité authentique",
      en: "Traditional Cameroonian dish with eru leaves, meat and smoked fish, authentic specialty",
    },
    price: 13,
    category: "specialites",
    image: "/TCHOP/eru.jpg",
    isSignature: true,
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
    image: "/TCHOP/kontchap-.jpg",
    isSignature: true,
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
    image: "/TCHOP/Ndole.jpg",
    isSignature: true,
    isPopular: true,
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
    image: "/TCHOP/macabomalaxé.jpg",
    isSignature: true,
    preparationTime: 50,
  },
  {
    id: "brochettes",
    name: { fr: "Brochettes", en: "Skewers" },
    description: {
      fr: "Brochettes de viande grillée aux épices africaines, saveurs authentiques",
      en: "Grilled meat skewers with African spices, authentic flavors",
    },
    price: 10,
    category: "specialites",
    image: "/TCHOP/brochettes.jpg",
    isSignature: true,
    preparationTime: 25,
  },
  {
    id: "taro-sauce-jaune",
    name: { fr: "Taro Sauce Jaune", en: "Taro Yellow Sauce" },
    description: {
      fr: "Taro accompagné d'une sauce jaune épicée, spécialité weekend uniquement",
      en: "Taro served with spicy yellow sauce, weekend specialty only",
    },
    price: 15,
    category: "specialites",
    image: "/TCHOP/taro.jpg",
    isWeekendOnly: true,
    availability: "Samedi & Dimanche",
    preparationTime: 45,
  },
  {
    id: "beignets-haricot",
    name: { fr: "Beignets Haricot", en: "Bean Fritters" },
    description: {
      fr: "Beignets croustillants aux haricots, spécialité weekend parfaite pour l'apéritif",
      en: "Crispy bean fritters, weekend specialty perfect as appetizer",
    },
    price: 8,
    category: "specialites",
    image: "/TCHOP/BeignetsHaricots.jpg",
    isWeekendOnly: true,
    availability: "Samedi & Dimanche",
    preparationTime: 20,
    tags: ["végétarien", "apéritif"],
  },

  // ===== MENU VIANDE =====
  {
    id: "viande-sauce-tomate",
    name: { fr: "Viande Sauce Tomate", en: "Meat in Tomato Sauce" },
    description: {
      fr: "Viande mijotée dans une sauce tomate épicée aux herbes africaines",
      en: "Meat stewed in spicy tomato sauce with African herbs",
    },
    price: 15,
    category: "viandes",
    image: "/TCHOP/viandesaucetomate.jpg",
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
    image: "/TCHOP/viandesaucearachide.jpg",
    isPopular: true,
    preparationTime: 45,
    allergens: ["cacahuètes"],
  },
  {
    id: "viande-ndole",
    name: { fr: "Viande Ndolé", en: "Meat Ndole" },
    description: {
      fr: "Viande tendre aux feuilles de ndolé et cacahuètes grillées",
      en: "Tender meat with ndole leaves and roasted peanuts",
    },
    price: 15,
    category: "viandes",
    image: "/TCHOP/Ndole.jpg",
    preparationTime: 45,
    allergens: ["cacahuètes"],
  },
  {
    id: "viande-legumes-sautes",
    name: { fr: "Viande Légumes Sautés", en: "Meat with Sautéed Vegetables" },
    description: {
      fr: "Viande accompagnée de légumes frais sautés aux épices",
      en: "Meat served with fresh sautéed vegetables and spices",
    },
    price: 15,
    category: "viandes",
    image: "/TCHOP/Légumessautéesviande.jpg",
    preparationTime: 35,
  },
  {
    id: "viande-sauce-pistache",
    name: { fr: "Viande Sauce Pistache", en: "Meat in Pistache Sauce" },
    description: {
      fr: "Viande mijotée dans une sauce onctueuse aux graines de courge",
      en: "Meat stewed in creamy pumpkin seed sauce",
    },
    price: 15,
    category: "viandes",
    image: "/TCHOP/saucepistache.jpg",
    preparationTime: 40,
  },
  {
    id: "viande-sauce-gombo",
    name: { fr: "Viande Sauce Gombo", en: "Meat in Okra Sauce" },
    description: {
      fr: "Viande dans une sauce épaisse au gombo, plat consistant",
      en: "Meat in thick okra sauce, hearty dish",
    },
    price: 15,
    category: "viandes",
    image: "/TCHOP/viande-sauce-gombo.webp",
    preparationTime: 40,
  },
  {
    id: "viande-sauce-pistache-gombo",
    name: { fr: "Viande Sauce Pistache Gombo", en: "Meat Pistache Okra Sauce" },
    description: {
      fr: "Viande dans un mélange de sauce pistache et gombo, saveurs uniques",
      en: "Meat in a blend of pistache and okra sauce, unique flavors",
    },
    price: 15,
    category: "viandes",
    image: "/TCHOP/viande-sauce-pistache-gombo.jpg",
    preparationTime: 45,
  },
  {
    id: "porc",
    name: { fr: "Porc", en: "Pork" },
    description: {
      fr: "Porc grillé ou en sauce selon votre préférence",
      en: "Grilled or sauced pork according to your preference",
    },
    price: 15,
    category: "viandes",
    image: "/TCHOP/Porc.jpeg",
    preparationTime: 35,
  },
  {
    id: "porc-braise",
    name: { fr: "Porc Braisé", en: "Braised Pork" },
    description: {
      fr: "Porc braisé traditionnel, tendre et savoureux, cuit lentement aux épices",
      en: "Traditional braised pork, tender and flavorful, slowly cooked with spices",
    },
    price: 16,
    category: "viandes",
    image: "/TCHOP/Porcbraisé.png",
    isPopular: true,
    preparationTime: 45,
  },
  {
    id: "chevre",
    name: { fr: "Chèvre", en: "Goat" },
    description: {
      fr: "Viande de chèvre grillée aux épices traditionnelles",
      en: "Grilled goat meat with traditional spices",
    },
    price: 12.5,
    category: "viandes",
    image: "/TCHOP/chevre.jpg",
    preparationTime: 50,
  },
  {
    id: "rognons-sautes",
    name: { fr: "Rognons Sautés", en: "Sautéed Kidneys" },
    description: {
      fr: "Rognons sautés aux oignons et épices, spécialité de la maison",
      en: "Kidneys sautéed with onions and spices, house specialty",
    },
    price: 12.5,
    category: "viandes",
    image: "/TCHOP/RognonsSautés.webp",
    preparationTime: 30,
  },
  {
    id: "tripes-sautes",
    name: { fr: "Tripes Sautés", en: "Sautéed Tripe" },
    description: {
      fr: "Tripes sautés aux légumes et épices, plat traditionnel",
      en: "Tripe sautéed with vegetables and spices, traditional dish",
    },
    price: 12.5,
    category: "viandes",
    image: "/TCHOP/TripesSauté.jpg",
    preparationTime: 45,
  },
  {
    id: "petits-os",
    name: { fr: "Petits Os", en: "Small Bones" },
    description: {
      fr: "Petits os de viande grillés, parfait pour accompagner",
      en: "Grilled small meat bones, perfect as accompaniment",
    },
    price: 7,
    category: "viandes",
    image: "/TCHOP/PetitsOs.jpg",
    preparationTime: 25,
  },

  // ===== MENU POULETS =====
  {
    id: "demi-poulet-dg",
    name: { fr: "1/2 Poulet DG", en: "1/2 Chicken DG" },
    description: {
      fr: "Demi-poulet préparé à la manière Directeur Général avec légumes",
      en: "Half chicken prepared Director General style with vegetables",
    },
    price: 15,
    category: "poulets",
    image: "/TCHOP/PouletDG.jpg",
    isPopular: true,
    preparationTime: 35,
  },
  {
    id: "poulet-sauce-arachide",
    name: { fr: "Poulet Sauce d'Arachide", en: "Chicken in Peanut Sauce" },
    description: {
      fr: "Poulet mijoté dans une sauce crémeuse aux cacahuètes",
      en: "Chicken stewed in creamy peanut sauce",
    },
    price: 15,
    category: "poulets",
    image: "/TCHOP/viandesaucearachide.jpg",
    preparationTime: 40,
    allergens: ["cacahuètes"],
  },
  {
    id: "poulet-ndole",
    name: { fr: "Poulet Ndolé", en: "Chicken Ndole" },
    description: {
      fr: "Poulet aux feuilles de ndolé et cacahuètes grillées",
      en: "Chicken with ndole leaves and roasted peanuts",
    },
    price: 15,
    category: "poulets",
    image: "/TCHOP/Ndole.jpg",
    preparationTime: 40,
    allergens: ["cacahuètes"],
  },
  {
    id: "poulet-legumes-sautes",
    name: {
      fr: "Poulet Légumes Sautés",
      en: "Chicken with Sautéed Vegetables",
    },
    description: {
      fr: "Poulet accompagné de légumes frais sautés",
      en: "Chicken served with fresh sautéed vegetables",
    },
    price: 15,
    category: "poulets",
    image: "/TCHOP/Légumessautéesviande.jpg",
    preparationTime: 30,
  },
  {
    id: "poulet-sauce-pistache",
    name: { fr: "Poulet Sauce Pistache", en: "Chicken in Pistache Sauce" },
    description: {
      fr: "Poulet dans une sauce onctueuse aux graines de courge",
      en: "Chicken in creamy pumpkin seed sauce",
    },
    price: 15,
    category: "poulets",
    image: "/TCHOP/saucepistache.jpg",
    preparationTime: 35,
  },
  {
    id: "poulet-sauce-gombo",
    name: { fr: "Poulet Sauce Gombo", en: "Chicken in Okra Sauce" },
    description: {
      fr: "Poulet dans une sauce épaisse au gombo",
      en: "Chicken in thick okra sauce",
    },
    price: 15,
    category: "poulets",
    image: "/TCHOP/viande-sauce-gombo.webp",
    preparationTime: 35,
  },
  {
    id: "poulet-sauce-pistache-gombo",
    name: {
      fr: "Poulet Sauce Pistache Gombo",
      en: "Chicken Pistache Okra Sauce",
    },
    description: {
      fr: "Poulet dans un mélange de sauce pistache et gombo",
      en: "Chicken in a blend of pistache and okra sauce",
    },
    price: 15,
    category: "poulets",
    image: "/TCHOP/viande-sauce-pistache-gombo.jpg",
    preparationTime: 40,
  },
  {
    id: "poulet-sauce-tomate",
    name: { fr: "Poulet Sauce Tomate", en: "Chicken in Tomato Sauce" },
    description: {
      fr: "Poulet mijoté dans une sauce tomate épicée",
      en: "Chicken stewed in spicy tomato sauce",
    },
    price: 15,
    category: "poulets",
    image: "/TCHOP/poulet-sauce-tomate.jpg",
    preparationTime: 35,
  },
  {
    id: "poulet-braise",
    name: { fr: "Poulet Braisé", en: "Braised Chicken" },
    description: {
      fr: "Poulet grillé au feu de bois, croustillant à l'extérieur",
      en: "Wood-fired grilled chicken, crispy outside",
    },
    price: 15,
    category: "poulets",
    image: "/TCHOP/poulet-braise.webp",
    isPopular: true,
    preparationTime: 30,
  },
  {
    id: "ailes-poulets",
    name: { fr: "Ailes de Poulets", en: "Chicken Wings" },
    description: {
      fr: "Ailes de poulet grillées et épicées",
      en: "Grilled and spiced chicken wings",
    },
    price: 7,
    category: "poulets",
    image: "/TCHOP/Ailes-de-poule.webp",
    preparationTime: 20,
  },

  // ===== MENU POISSONS =====
  {
    id: "poisson-sauce-arachide",
    name: { fr: "Poisson Sauce d'Arachide", en: "Fish in Peanut Sauce" },
    description: {
      fr: "Poisson frais dans une sauce crémeuse aux cacahuètes",
      en: "Fresh fish in creamy peanut sauce",
    },
    price: 15,
    category: "poissons",
    image: "/TCHOP/viandesaucearachide.jpg",
    preparationTime: 35,
    allergens: ["cacahuètes"],
  },
  {
    id: "poisson-sauce-tomate",
    name: { fr: "Poisson Sauce Tomate", en: "Fish in Tomato Sauce" },
    description: {
      fr: "Poisson mijoté dans une sauce tomate parfumée",
      en: "Fish stewed in fragrant tomato sauce",
    },
    price: 15,
    category: "poissons",
    image: "/TCHOP/poisson-sauce-tomate.jpg",
    isPopular: true,
    preparationTime: 30,
  },
  {
    id: "poisson-sauce-pistache",
    name: { fr: "Poisson Sauce Pistache", en: "Fish in Pistache Sauce" },
    description: {
      fr: "Poisson dans une sauce onctueuse aux graines de courge",
      en: "Fish in creamy pumpkin seed sauce",
    },
    price: 15,
    category: "poissons",
    image: "/TCHOP/saucepistache.jpg",
    preparationTime: 30,
  },
  {
    id: "poisson-sauce-gombo",
    name: { fr: "Poisson Sauce Gombo", en: "Fish in Okra Sauce" },
    description: {
      fr: "Poisson dans une sauce épaisse au gombo",
      en: "Fish in thick okra sauce",
    },
    price: 15,
    category: "poissons",
    image: "/TCHOP/viande-sauce-gombo.webp",
    preparationTime: 30,
  },
  {
    id: "poisson-sauce-pistache-gombo",
    name: {
      fr: "Poisson Sauce Pistache Gombo",
      en: "Fish Pistache Okra Sauce",
    },
    description: {
      fr: "Poisson dans un mélange de sauce pistache et gombo",
      en: "Fish in a blend of pistache and okra sauce",
    },
    price: 15,
    category: "poissons",
    image: "/TCHOP/viande-sauce-pistache-gombo.jpg",
    preparationTime: 35,
  },
  {
    id: "poisson-ndole",
    name: { fr: "Poisson Ndolé", en: "Fish Ndole" },
    description: {
      fr: "Poisson aux feuilles de ndolé et cacahuètes grillées",
      en: "Fish with ndole leaves and roasted peanuts",
    },
    price: 15,
    category: "poissons",
    image: "/TCHOP/Ndole.jpg",
    preparationTime: 35,
    allergens: ["cacahuètes"],
  },
  {
    id: "maquereau",
    name: { fr: "Maquereau", en: "Mackerel" },
    description: {
      fr: "Maquereau frais grillé ou en sauce, à partir de 18€",
      en: "Fresh grilled or sauced mackerel, starting from 18€",
    },
    price: 18,
    category: "poissons",
    image: "/TCHOP/maquereau.jpg",
    priceRange: "À partir de",
    preparationTime: 25,
  },
  {
    id: "bar",
    name: { fr: "Bar", en: "Sea Bass" },
    description: {
      fr: "Bar frais du jour, préparé selon vos envies, à partir de 25€",
      en: "Fresh sea bass of the day, prepared to your liking, starting from 25€",
    },
    price: 25,
    category: "poissons",
    image: "/TCHOP/barbaise.jpg",
    priceRange: "À partir de",
    preparationTime: 30,
  },
  {
    id: "tilapia",
    name: { fr: "Tilapia", en: "Tilapia" },
    description: {
      fr: "Tilapia frais grillé ou braisé, à partir de 20€",
      en: "Fresh grilled or braised tilapia, starting from 20€",
    },
    price: 20,
    category: "poissons",
    image: "/TCHOP/tilapia.jpg",
    priceRange: "À partir de",
    preparationTime: 25,
  },
  {
    id: "sole",
    name: { fr: "Sole", en: "Sole" },
    description: {
      fr: "Sole fraîche préparée avec finesse, poisson noble",
      en: "Fresh sole prepared with finesse, noble fish",
    },
    price: 35,
    category: "poissons",
    image: "/TCHOP/Sole.jpeg",
    preparationTime: 35,
  },
  {
    id: "poisson-legumes-sautes",
    name: { fr: "Poisson Légumes Sautés", en: "Fish with Sautéed Vegetables" },
    description: {
      fr: "Poisson accompagné de légumes frais sautés",
      en: "Fish served with fresh sautéed vegetables",
    },
    price: 15,
    category: "poissons",
    image: "/TCHOP/PoissonLégumesSautés.jpeg",
    preparationTime: 25,
  },

  // ===== COMPLÉMENTS =====
  {
    id: "plantains-frits",
    name: { fr: "Plantains Frits", en: "Fried Plantains" },
    description: {
      fr: "Bananes plantains dorées et croustillantes",
      en: "Golden and crispy plantain bananas",
    },
    price: 3.5,
    category: "complements",
    image: "/TCHOP/Compléments/plantains-frit.jpeg",
    isPopular: true,
    preparationTime: 10,
    tags: ["végétarien"],
  },
  {
    id: "plantains-tapes",
    name: { fr: "Plantains Tapés", en: "Mashed Plantains" },
    description: {
      fr: "Plantains écrasés et assaisonnés traditionnellement",
      en: "Mashed and traditionally seasoned plantains",
    },
    price: 3.5,
    category: "complements",
    image: "/TCHOP/Compléments/plantains-tapes.jpg",
    preparationTime: 15,
    tags: ["végétarien"],
  },
  {
    id: "wata-fufu",
    name: { fr: "Wata Fufu", en: "Wata Fufu" },
    description: {
      fr: "Accompagnement traditionnel à base de manioc",
      en: "Traditional cassava-based side dish",
    },
    price: 5,
    category: "complements",
    image: "/TCHOP/Compléments/water-fufu.webp",
    preparationTime: 20,
    tags: ["traditionnel"],
  },
  {
    id: "igname-vapeur",
    name: { fr: "Igname Vapeur", en: "Steamed Yam" },
    description: {
      fr: "Igname cuite à la vapeur, accompagnement sain",
      en: "Steamed yam, healthy side dish",
    },
    price: 5,
    category: "complements",
    image: "/TCHOP/Compléments/igname.webp",
    preparationTime: 25,
    tags: ["végétarien", "sain"],
  },
  {
    id: "plantain-vapeur",
    name: { fr: "Plantain Vapeur", en: "Steamed Plantain" },
    description: {
      fr: "Plantain cuit à la vapeur, naturel et savoureux",
      en: "Steamed plantain, natural and tasty",
    },
    price: 5,
    category: "complements",
    image: "/TCHOP/Compléments/plantain-vapeur.jpg",
    preparationTime: 20,
    tags: ["végétarien"],
  },
  {
    id: "patate-vapeur",
    name: { fr: "Patate Vapeur", en: "Steamed Sweet Potato" },
    description: {
      fr: "Patate douce cuite à la vapeur, sucrée naturellement",
      en: "Steamed sweet potato, naturally sweet",
    },
    price: 7,
    category: "complements",
    image: "/TCHOP/Compléments/patate-vapeur.webp",
    preparationTime: 30,
    tags: ["végétarien", "sucré"],
  },
  {
    id: "patate-frittes",
    name: { fr: "Patate Frittes", en: "Sweet Potato Fries" },
    description: {
      fr: "Frites de patate douce croustillantes et dorées",
      en: "Crispy and golden sweet potato fries",
    },
    price: 5,
    category: "complements",
    image: "/TCHOP/Compléments/patate-frittes.avif",
    preparationTime: 15,
    tags: ["végétarien"],
  },
  {
    id: "riz",
    name: { fr: "Riz", en: "Rice" },
    description: {
      fr: "Riz blanc parfumé, accompagnement classique",
      en: "Fragrant white rice, classic side dish",
    },
    price: 3.5,
    category: "complements",
    image: "/TCHOP/Compléments/riz-blanc.jpeg",
    preparationTime: 20,
    tags: ["végétarien"],
  },
  {
    id: "semoule",
    name: { fr: "Semoule", en: "Semolina" },
    description: {
      fr: "Semoule fine et légère, parfaite avec les sauces",
      en: "Fine and light semolina, perfect with sauces",
    },
    price: 3.5,
    category: "complements",
    image: "/TCHOP/Compléments/semoule.jpg",
    preparationTime: 15,
    tags: ["végétarien"],
  },
  {
    id: "bobolo",
    name: { fr: "Bobolo", en: "Bobolo" },
    description: {
      fr: "Manioc fermenté traditionnel, spécialité camerounaise",
      en: "Traditional fermented cassava, Cameroonian specialty",
    },
    price: 3.5,
    category: "complements",
    image: "/TCHOP/Compléments/bobolo.jpg",
    preparationTime: 10,
    tags: ["traditionnel", "camerounais"],
  },

  // ===== BIÈRES EUROPÉENNES =====
  {
    id: "carberg",
    name: { fr: "Carberg", en: "Carberg" },
    description: {
      fr: "Bière blonde européenne rafraîchissante",
      en: "Refreshing European blonde beer",
    },
    price: 3,
    category: "bieres",
    image: "/TCHOP/Bières/carberg.webp",
    tags: ["européenne", "blonde"],
  },
  {
    id: "leffe-blonde",
    name: { fr: "Leffe Blonde", en: "Leffe Blonde" },
    description: {
      fr: "Bière belge blonde authentique et savoureuse",
      en: "Authentic and tasty Belgian blonde beer",
    },
    price: 3.5,
    category: "bieres",
    image: "/TCHOP/Bières/leffe-blonde.webp",
    tags: ["belge", "blonde"],
  },
  {
    id: "leffe-brune",
    name: { fr: "Leffe Brune", en: "Leffe Brown" },
    description: {
      fr: "Bière belge brune aux arômes complexes",
      en: "Belgian brown beer with complex aromas",
    },
    price: 3.5,
    category: "bieres",
    image: "/TCHOP/Bières/leffe-brune.webp",
    tags: ["belge", "brune"],
  },
  {
    id: "jupiler-petite",
    name: { fr: "Jupiler Petite", en: "Jupiler Small" },
    description: {
      fr: "Petite Jupiler, bière belge classique",
      en: "Small Jupiler, classic Belgian beer",
    },
    price: 2.5,
    category: "bieres",
    image: "/TCHOP/Bières/jupiler-petite.jpeg",
    tags: ["belge", "petite"],
  },
  {
    id: "jupiler-grande",
    name: { fr: "Jupiler Grande", en: "Jupiler Large" },
    description: {
      fr: "Grande Jupiler, format généreux",
      en: "Large Jupiler, generous format",
    },
    price: 5,
    category: "bieres",
    image: "/TCHOP/Bières/jupiler-grande.webp",
    tags: ["belge", "grande"],
  },
  {
    id: "guinness-europeenne",
    name: { fr: "Guinness", en: "Guinness" },
    description: {
      fr: "Stout irlandaise iconique et crémeuse",
      en: "Iconic and creamy Irish stout",
    },
    price: 5,
    category: "bieres",
    image: "/TCHOP/Bières/guinness.png",
    tags: ["irlandaise", "stout"],
  },
  {
    id: "canette-jb-cola",
    name: { fr: "Canette J&B Cola", en: "J&B Cola Can" },
    description: {
      fr: "Mélange rafraîchissant whisky et cola en canette",
      en: "Refreshing whisky and cola mix in can",
    },
    price: 5,
    category: "bieres",
    image: "/TCHOP/Bières/jb-cola.webp",
    tags: ["canette", "mélange"],
  },
  {
    id: "grimbergen",
    name: { fr: "Grimbergen", en: "Grimbergen" },
    description: {
      fr: "Bière d'abbaye belge aux saveurs riches",
      en: "Belgian abbey beer with rich flavors",
    },
    price: 4.5,
    category: "bieres",
    image: "/TCHOP/Bières/grimbergen.webp",
    tags: ["belge", "abbaye"],
  },
  {
    id: "kriek",
    name: { fr: "Kriek", en: "Kriek" },
    description: {
      fr: "Bière belge aux cerises, douce et fruitée",
      en: "Belgian cherry beer, sweet and fruity",
    },
    price: 3.5,
    category: "bieres",
    image: "/TCHOP/Bières/boon-kriek-25cl.png",
    tags: ["belge", "fruitée", "cerises"],
  },
  {
    id: "heineken-petite",
    name: { fr: "Heineken Petite", en: "Heineken Small" },
    description: {
      fr: "Petite Heineken, bière hollandaise premium",
      en: "Small Heineken, premium Dutch beer",
    },
    price: 4,
    category: "bieres",
    image: "/TCHOP/Bières/heineken-petite.webp",
    tags: ["hollandaise", "petite"],
  },
  {
    id: "heineken-grande",
    name: { fr: "Heineken Grande", en: "Heineken Large" },
    description: {
      fr: "Grande Heineken, format généreux",
      en: "Large Heineken, generous format",
    },
    price: 5,
    category: "bieres",
    image: "/TCHOP/Bières/heineken-grande.png",
    tags: ["hollandaise", "grande"],
  },
  {
    id: "becks",
    name: { fr: "Beck's", en: "Beck's" },
    description: {
      fr: "Bière allemande pure et rafraîchissante",
      en: "Pure and refreshing German beer",
    },
    price: 3,
    category: "bieres",
    image: "/TCHOP/Bières/becks.webp",
    tags: ["allemande"],
  },
  {
    id: "desperade",
    name: { fr: "Desperade", en: "Desperados" },
    description: {
      fr: "Bière aromatisée tequila, originale et pétillante",
      en: "Tequila flavored beer, original and sparkling",
    },
    price: 4,
    category: "bieres",
    image: "/TCHOP/Bières/desperados.png",
    tags: ["aromatisée", "tequila"],
  },

  // ===== BIÈRES CAMEROUNAISES (TOUTES SIGNATURE) =====
  {
    id: "petite-guinness-camerounaise",
    name: { fr: "Petite Guinness", en: "Small Guinness" },
    description: {
      fr: "Guinness camerounaise, authentique et locale",
      en: "Cameroonian Guinness, authentic and local",
    },
    price: 6,
    category: "bieres",
    image: "/TCHOP/Bières/guinness-cameroun.webp",
    isSignature: true,
    tags: ["camerounaise", "petite"],
  },
  {
    id: "grande-guinness-camerounaise",
    name: { fr: "Grande Guinness", en: "Large Guinness" },
    description: {
      fr: "Grande Guinness camerounaise, format généreux",
      en: "Large Cameroonian Guinness, generous format",
    },
    price: 10,
    category: "bieres",
    image: "/TCHOP/Bières/guinness-cameroun-grande.webp",
    isSignature: true,
    tags: ["camerounaise", "grande"],
  },
  {
    id: "33-export",
    name: { fr: "33 Export", en: "33 Export" },
    description: {
      fr: "Bière camerounaise d'exportation, référence locale",
      en: "Cameroonian export beer, local reference",
    },
    price: 8,
    category: "bieres",
    image: "/TCHOP/Bières/33-export.webp",
    isSignature: true,
    isPopular: true,
    tags: ["camerounaise", "export"],
  },
  {
    id: "kadji",
    name: { fr: "Kadji", en: "Kadji" },
    description: {
      fr: "Bière camerounaise traditionnelle et authentique",
      en: "Traditional and authentic Cameroonian beer",
    },
    price: 8,
    category: "bieres",
    image: "/TCHOP/Bières/kadji.webp",
    isSignature: true,
    tags: ["camerounaise", "traditionnelle"],
  },
  {
    id: "isenbeck",
    name: { fr: "Isenbeck", en: "Isenbeck" },
    description: {
      fr: "Bière camerounaise de qualité premium",
      en: "Premium quality Cameroonian beer",
    },
    price: 8,
    category: "bieres",
    image: "/TCHOP/Bières/Isenbeck.jpg",
    isSignature: true,
    tags: ["camerounaise", "premium"],
  },
  {
    id: "mutzig",
    name: { fr: "Mutzig", en: "Mutzig" },
    description: {
      fr: "Bière camerounaise blonde et légère",
      en: "Blonde and light Cameroonian beer",
    },
    price: 8,
    category: "bieres",
    image: "/TCHOP/Bières/mutzig.jpg",
    isSignature: true,
    tags: ["camerounaise", "blonde"],
  },
  {
    id: "castel-cameroun",
    name: { fr: "Castel", en: "Castel" },
    description: {
      fr: "Bière Castel camerounaise, goût authentique",
      en: "Cameroonian Castel beer, authentic taste",
    },
    price: 8,
    category: "bieres",
    image: "/TCHOP/Bières/castel.jpg",
    isSignature: true,
    tags: ["camerounaise"],
  },
  {
    id: "origine",
    name: { fr: "Origine", en: "Origine" },
    description: {
      fr: "Bière camerounaise aux saveurs originelles",
      en: "Cameroonian beer with original flavors",
    },
    price: 8,
    category: "bieres",
    image: "/TCHOP/Bières/origine.png",
    isSignature: true,
    tags: ["camerounaise", "originelle"],
  },
  {
    id: "booster",
    name: { fr: "Booster", en: "Booster" },
    description: {
      fr: "Bière énergisante camerounaise, forte en goût",
      en: "Cameroonian energy beer, strong in taste",
    },
    price: 9,
    category: "bieres",
    image: "/TCHOP/Bières/Booster-WhiskyCola.png",
    isSignature: true,
    tags: ["camerounaise", "énergisante"],
  },

  // ===== SOFTS & EAUX =====
  {
    id: "coca-cola",
    name: { fr: "Coca Cola", en: "Coca Cola" },
    description: {
      fr: "Boisson gazeuse classique et rafraîchissante",
      en: "Classic and refreshing carbonated drink",
    },
    price: 2.5,
    category: "boissons",
    image: "/TCHOP/Boissons/coca.jpeg",
    tags: ["gazeux", "classique"],
  },
  {
    id: "fanta",
    name: { fr: "Fanta", en: "Fanta" },
    description: {
      fr: "Soda à l'orange pétillant et fruité",
      en: "Sparkling and fruity orange soda",
    },
    price: 2.5,
    category: "boissons",
    image: "/TCHOP/Boissons/Fanta.png",
    tags: ["gazeux", "orange"],
  },
  {
    id: "looza",
    name: { fr: "Looza", en: "Looza" },
    description: {
      fr: "Jus de fruits naturel et savoureux",
      en: "Natural and tasty fruit juice",
    },
    price: 2.5,
    category: "boissons",
    image: "/TCHOP/Boissons/looza.png",
    tags: ["jus", "naturel"],
  },
  {
    id: "vimto",
    name: { fr: "Vimto", en: "Vimto" },
    description: {
      fr: "Boisson aux fruits exotiques, goût unique",
      en: "Exotic fruit drink, unique taste",
    },
    price: 2.5,
    category: "boissons",
    image: "/TCHOP/Boissons/Vimto.jpeg",
    tags: ["exotique", "fruité"],
  },
  {
    id: "ginger",
    name: { fr: "Ginger", en: "Ginger" },
    description: {
      fr: "Boisson au gingembre piquante et rafraîchissante",
      en: "Spicy and refreshing ginger drink",
    },
    price: 2.5,
    category: "boissons",
    image: "/TCHOP/Boissons/canada-dry-ginger.jpg",
    tags: ["gingembre", "piquant"],
  },
  {
    id: "perrier",
    name: { fr: "Perrier", en: "Perrier" },
    description: {
      fr: "Eau gazeuse naturelle française premium",
      en: "Premium French natural sparkling water",
    },
    price: 3,
    category: "boissons",
    image: "/TCHOP/Boissons/perrier.png",
    tags: ["eau", "gazeux", "premium"],
  },
  {
    id: "pellegrino",
    name: { fr: "Pellegrino", en: "Pellegrino" },
    description: {
      fr: "Eau gazeuse italienne de prestige",
      en: "Prestigious Italian sparkling water",
    },
    price: 3,
    category: "boissons",
    image: "/TCHOP/Boissons/pellegrino.webp",
    tags: ["eau", "gazeux", "italien"],
  },
  {
    id: "eau-gazeuse-spa",
    name: { fr: "Eau Gazeuse Spa", en: "Spa Sparkling Water" },
    description: {
      fr: "Eau gazeuse belge pure et rafraîchissante",
      en: "Pure and refreshing Belgian sparkling water",
    },
    price: 2.5,
    category: "boissons",
    image: "/TCHOP/Boissons/spa-gazeux.jpg",
    tags: ["eau", "gazeux", "belge"],
  },
  {
    id: "eau-plate-spa",
    name: { fr: "Eau Plate Spa", en: "Spa Still Water" },
    description: {
      fr: "Eau plate belge pure et naturelle",
      en: "Pure and natural Belgian still water",
    },
    price: 2.5,
    category: "boissons",
    image: "/TCHOP/Boissons/spa-plate.webp",
    tags: ["eau", "plate", "belge"],
  },
  {
    id: "red-bull",
    name: { fr: "Red Bull", en: "Red Bull" },
    description: {
      fr: "Boisson énergisante iconique et stimulante",
      en: "Iconic and stimulating energy drink",
    },
    price: 4,
    category: "boissons",
    image: "/TCHOP/Boissons/redbull.webp",
    tags: ["énergisant"],
  },
  {
    id: "top-grenadine",
    name: { fr: "Top Grenadine", en: "Top Grenadine" },
    description: {
      fr: "Sirop de grenadine rafraîchissant et coloré",
      en: "Refreshing and colorful grenadine syrup",
    },
    price: 6,
    category: "boissons",
    image: "/TCHOP/Boissons/top-grenadine.jpg",
    tags: ["sirop", "grenadine"],
  },
  {
    id: "top-pamplemousse",
    name: { fr: "Top Pamplemousse", en: "Top Grapefruit" },
    description: {
      fr: "Sirop de pamplemousse acidulé et vitaminé",
      en: "Tangy and vitamin-rich grapefruit syrup",
    },
    price: 6,
    category: "boissons",
    image: "/TCHOP/Boissons/top-pamplemousse.jpg",
    tags: ["sirop", "pamplemousse"],
  },
  {
    id: "top-ananas",
    name: { fr: "Top Ananas", en: "Top Pineapple" },
    description: {
      fr: "Sirop d'ananas tropical et exotique",
      en: "Tropical and exotic pineapple syrup",
    },
    price: 6,
    category: "boissons",
    image: "/TCHOP/Boissons/top-ananas.jpg",
    tags: ["sirop", "ananas", "tropical"],
  },
  {
    id: "djino",
    name: { fr: "Djino", en: "Djino" },
    description: {
      fr: "Boisson africaine traditionnelle au gingembre",
      en: "Traditional African ginger drink",
    },
    price: 6,
    category: "boissons",
    image: "/TCHOP/Boissons/djino.jpeg",
    tags: ["africain", "gingembre", "traditionnel"],
  },
  {
    id: "malta-guinness",
    name: { fr: "Malta Guinness", en: "Malta Guinness" },
    description: {
      fr: "Boisson maltée sans alcool nutritive",
      en: "Nutritious non-alcoholic malt drink",
    },
    price: 5,
    category: "boissons",
    image: "/TCHOP/Boissons/malta-guinness.png",
    tags: ["malté", "sans-alcool", "nutritif"],
  },
  {
    id: "super-malt",
    name: { fr: "Super Malt", en: "Super Malt" },
    description: {
      fr: "Boisson maltée énergisante et revigorante",
      en: "Energizing and invigorating malt drink",
    },
    price: 3,
    category: "boissons",
    image: "/TCHOP/Boissons/Supermalt-Original.png",
    tags: ["malté", "énergisant"],
  },

  // ===== VINS =====
  {
    id: "petit-vin-rouge",
    name: { fr: "Petit Vin Rouge", en: "Small Red Wine" },
    description: {
      fr: "Vin rouge de table, parfait pour accompagner vos plats",
      en: "Table red wine, perfect to accompany your dishes",
    },
    price: 7,
    category: "vins",
    image: "/TCHOP/Vins/Petit-Vin-Rouge.jpg",
    tags: ["rouge", "table"],
  },
  {
    id: "petit-vin-blanc",
    name: { fr: "Petit Vin Blanc", en: "Small White Wine" },
    description: {
      fr: "Vin blanc sec et rafraîchissant",
      en: "Dry and refreshing white wine",
    },
    price: 7,
    category: "vins",
    image: "/TCHOP/Vins/vin-blanc.jpeg",
    tags: ["blanc", "sec"],
  },
  {
    id: "petit-vin-rose",
    name: { fr: "Petit Vin Rosé", en: "Small Rosé Wine" },
    description: {
      fr: "Vin rosé léger et fruité, idéal pour l'apéritif",
      en: "Light and fruity rosé wine, ideal for aperitif",
    },
    price: 7,
    category: "vins",
    image: "/TCHOP/Vins/vin-rose.jpg",
    tags: ["rosé", "fruité", "apéritif"],
  },

  // ===== LIQUEURS =====
  {
    id: "baileys",
    name: { fr: "Baileys", en: "Baileys" },
    description: {
      fr: "Liqueur crémeuse irlandaise au whisky et crème",
      en: "Irish creamy liqueur with whisky and cream",
    },
    price: 7,
    category: "liqueurs",
    image: "/TCHOP/Liqueurs/Baileys.webp",
    tags: ["crémeux", "irlandais"],
  },
  {
    id: "martini",
    name: { fr: "Martini", en: "Martini" },
    description: {
      fr: "Vermouth italien classique pour cocktails",
      en: "Classic Italian vermouth for cocktails",
    },
    price: 7,
    category: "liqueurs",
    image: "/TCHOP/Liqueurs/martini.jpg",
    tags: ["vermouth", "italien"],
  },
  {
    id: "malibu",
    name: { fr: "Malibu", en: "Malibu" },
    description: {
      fr: "Liqueur de rhum à la noix de coco tropicale",
      en: "Tropical coconut rum liqueur",
    },
    price: 7,
    category: "liqueurs",
    image: "/TCHOP/Liqueurs/Malibu.jpg",
    tags: ["rhum", "coco", "tropical"],
  },
  {
    id: "black-label",
    name: { fr: "Black Label", en: "Black Label" },
    description: {
      fr: "Whisky écossais premium de 12 ans d'âge",
      en: "Premium 12-year-old Scottish whisky",
    },
    price: 7,
    category: "liqueurs",
    image: "/TCHOP/Liqueurs/black-label.jpg",
    tags: ["whisky", "écossais", "premium"],
  },
  {
    id: "red-label",
    name: { fr: "Red Label", en: "Red Label" },
    description: {
      fr: "Whisky écossais blend accessible et savoureux",
      en: "Accessible and tasty Scottish blend whisky",
    },
    price: 7,
    category: "liqueurs",
    image: "/TCHOP/Liqueurs/Red-label.jpg",
    tags: ["whisky", "écossais", "blend"],
  },
  {
    id: "jb-liqueur",
    name: { fr: "J&B", en: "J&B" },
    description: {
      fr: "Whisky écossais rare et distinctif",
      en: "Rare and distinctive Scottish whisky",
    },
    price: 7,
    category: "liqueurs",
    image: "/TCHOP/Liqueurs/j-b-bottle.jpg",
    tags: ["whisky", "écossais", "rare"],
  },
  {
    id: "jack-daniels",
    name: { fr: "Jack Daniels", en: "Jack Daniels" },
    description: {
      fr: "Whiskey américain Tennessee, icône mondiale",
      en: "American Tennessee whiskey, world icon",
    },
    price: 7,
    category: "liqueurs",
    image: "/TCHOP/Liqueurs/Jack-Daniels.avif",
    tags: ["whiskey", "américain", "tennessee"],
  },
  {
    id: "chivas",
    name: { fr: "Chivas", en: "Chivas" },
    description: {
      fr: "Whisky écossais de luxe, blend premium",
      en: "Luxury Scottish whisky, premium blend",
    },
    price: 7,
    category: "liqueurs",
    image: "/TCHOP/Liqueurs/whisky_chivas.png",
    tags: ["whisky", "écossais", "luxe"],
  },
  {
    id: "remy-martin",
    name: { fr: "Rémy Martin", en: "Rémy Martin" },
    description: {
      fr: "Cognac français d'exception, finesse et élégance",
      en: "Exceptional French cognac, finesse and elegance",
    },
    price: 7,
    category: "liqueurs",
    image: "/TCHOP/Liqueurs/Remy-Martin.png",
    tags: ["cognac", "français", "exception"],
  },
  {
    id: "vodka",
    name: { fr: "Vodka", en: "Vodka" },
    description: {
      fr: "Vodka premium pure et cristalline",
      en: "Pure and crystal premium vodka",
    },
    price: 7,
    category: "liqueurs",
    image: "/TCHOP/Liqueurs/Vodka.jpeg",
    tags: ["vodka", "premium", "pure"],
  },
];

// ===== FONCTIONS UTILITAIRES MISES À JOUR (SANS SPICE LEVEL) =====
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

// ===== STATISTIQUES DU MENU MISES À JOUR =====
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

// ===== TRADUCTIONS MISES À JOUR =====
export const menuTranslations = {
  fr: {
    title: "Notre Menu",
    subtitle: "Saveurs Authentiques",
    description:
      "Découvrez notre sélection complète de plats traditionnels et boissons préparés avec passion",
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
    allergens: "Allergènes",
    signature: "Signature",
    popular: "Populaire",
    weekend: "Weekend",
    filters: {
      all: "Tout",
      search: "Rechercher...",
      priceRange: "Gamme de prix",
      category: "Catégorie",
    },
  },
  en: {
    title: "Our Menu",
    subtitle: "Authentic Flavors",
    description:
      "Discover our complete selection of traditional dishes and beverages prepared with passion",
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
    allergens: "Allergens",
    signature: "Signature",
    popular: "Popular",
    weekend: "Weekend",
    filters: {
      all: "All",
      search: "Search...",
      priceRange: "Price Range",
      category: "Category",
    },
  },
};

// ===== PLATS VEDETTES POUR L'AFFICHAGE =====
export const featuredDishes = [
  ...getSignatureDishes().slice(0, 3),
  ...getPopularDishes()
    .filter((d) => !d.isSignature)
    .slice(0, 3),
].slice(0, 6);

// ===== EXPORT PAR DÉFAUT =====
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
  featuredDishes,
};
