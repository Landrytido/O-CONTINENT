export interface Testimonial {
  name: string;
  text: {
    fr: string;
    en: string;
  };
  rating: number;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sophie Martin',
    text: {
      fr: "Une expérience culinaire extraordinaire! J'ai voyagé à travers les continents sans quitter Bruxelles. Les plats sont authentiques et les saveurs explosives. Le service est impeccable et l'ambiance chaleureuse. À essayer absolument!",
      en: "An extraordinary culinary experience! I traveled across continents without leaving Brussels. The dishes are authentic and the flavors are explosive. The service is impeccable and the atmosphere is warm. A must try!"
    },
    rating: 5,
    date: '15/02/2025'
  },
  {
    name: 'Jean Dupont',
    text: {
      fr: "Le meilleur restaurant de cuisine du monde à Bruxelles! La qualité des ingrédients est exceptionnelle et chaque plat raconte une histoire. Le chef maîtrise parfaitement les saveurs de chaque continent. Je recommande vivement les spécialités maison.",
      en: "The best world cuisine restaurant in Brussels! The quality of the ingredients is exceptional and each dish tells a story. The chef perfectly masters the flavors of each continent. I highly recommend the house specialties."
    },
    rating: 5,
    date: '03/01/2025'
  },
  {
    name: 'Marie Lambert',
    text: {
      fr: "Cadre élégant et service attentionné. Les plats sont généreux et savoureux. J'ai particulièrement apprécié les grillades qui sont préparées à la perfection. Les cocktails sont également délicieux. Je reviendrai!",
      en: "Elegant setting and attentive service. The dishes are generous and tasty. I particularly enjoyed the grilled dishes which are prepared to perfection. The cocktails are also delicious. I'll be back!"
    },
    rating: 4,
    date: '27/12/2024'
  },
  {
    name: 'Thomas Bernard',
    text: {
      fr: "Une vraie découverte! J'ai testé le menu poisson qui était divin. Les saveurs sont bien équilibrées et les présentations soignées. Le rapport qualité-prix est excellent pour la qualité offerte. Une adresse à conserver!",
      en: "A real discovery! I tried the fish menu which was divine. The flavors are well balanced and the presentations are neat. The value for money is excellent for the quality offered. An address to keep!"
    },
    rating: 5,
    date: '10/11/2024'
  }
];