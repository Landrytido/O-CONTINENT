import { MenuCategoryType } from "../types/menu";

export const menuCategories: MenuCategoryType[] = [
  {
    id: "chickenMenu",
    image:
      "https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    menuImage: "/menu/menu-poulets.jpg", // PDF 2 - gauche uniquement
  },
  {
    id: "fishMenu",
    image:
      "https://images.pexels.com/photos/8969237/pexels-photo-8969237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    menuImage: "/menu/menu-poissons.jpg", // PDF 2 - droite uniquement
  },
  {
    id: "grilledDishes",
    image:
      "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    menuImage: "/menu/menu-viande.jpg", // PDF 3 - gauche uniquement
  },
  {
    id: "specialties",
    image:
      "https://images.pexels.com/photos/1395319/pexels-photo-1395319.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    menuImage: "/menu/specialites-maison.jpg", // PDF 3 - droite uniquement
  },
  {
    id: "sideDishes", // Compléments
    image:
      "https://images.pexels.com/photos/1640773/pexels-photo-1640773.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    menuImage: "/menu/complements-liqueurs.jpg", // PDF 4 - gauche complet (section compléments visible)
  },
  {
    id: "liqueurs",
    image:
      "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    menuImage: "/menu/complements-liqueurs.jpg", // PDF 4 - gauche complet (section liqueurs visible)
  },
  {
    id: "softDrinks", // Softs & Eaux
    image:
      "https://images.pexels.com/photos/2775860/pexels-photo-2775860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    menuImage: "/menu/softs-vins.jpg", // PDF 4 - droite complet (section softs visible)
  },
  {
    id: "wines",
    image:
      "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    menuImage: "/menu/softs-vins.jpg", // PDF 4 - droite complet (section vins visible)
  },
  {
    id: "beers",
    image:
      "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    menuImage: "/menu/bieres.jpg", // PDF 5 - gauche uniquement
  },
];
export const restaurantPresentation = {
  id: "presentation",
  name: { fr: "O CONTINENG", en: "O CONTINENG" },
  image: "/menu/presentation-restaurant.jpg", // PDF 1 complet
  description: {
    fr: "Bar-Restaurant - Spécialités Africaines et Européennes",
    en: "Bar-Restaurant - African and European Specialties",
  },
};
