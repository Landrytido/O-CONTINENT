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
    name: "Amara Diallo",
    text: {
      fr: "Une expérience culinaire extraordinaire! J'ai voyagé à travers les continents sans quitter Bruxelles. Les plats sont authentiques et les saveurs explosives. Le service est impeccable et l'ambiance chaleureuse. À essayer absolument!",
      en: "An extraordinary culinary experience! I traveled across continents without leaving Brussels. The dishes are authentic and the flavors are explosive. The service is impeccable and the atmosphere is warm. A must try!",
    },
    rating: 5,
    date: "15/02/2025",
  },
  {
    name: "Kwame Mensah",
    text: {
      fr: "Le meilleur restaurant de cuisine du monde à Bruxelles! La qualité des ingrédients est exceptionnelle et chaque plat raconte une histoire. Le chef maîtrise parfaitement les saveurs de chaque continent. Je recommande vivement les spécialités maison.",
      en: "The best world cuisine restaurant in Brussels! The quality of the ingredients is exceptional and each dish tells a story. The chef perfectly masters the flavors of each continent. I highly recommend the house specialties.",
    },
    rating: 5,
    date: "03/01/2025",
  },
  {
    name: "Fatou Ndiaye",
    text: {
      fr: "Cadre élégant et service attentionné. Les plats sont généreux et savoureux. J'ai particulièrement apprécié les grillades qui sont préparées à la perfection. Les cocktails sont également délicieux. Je reviendrai!",
      en: "Elegant setting and attentive service. The dishes are generous and tasty. I particularly enjoyed the grilled dishes which are prepared to perfection. The cocktails are also delicious. I'll be back!",
    },
    rating: 4,
    date: "27/12/2024",
  },
  {
    name: "Amadou Traoré",
    text: {
      fr: "Une vraie découverte! J'ai testé le menu poisson qui était divin. Les saveurs sont bien équilibrées et les présentations soignées. Le rapport qualité-prix est excellent pour la qualité offerte. Une adresse à conserver!",
      en: "A real discovery! I tried the fish menu which was divine. The flavors are well balanced and the presentations are neat. The value for money is excellent for the quality offered. An address to keep!",
    },
    rating: 5,
    date: "10/11/2024",
  },
  {
    name: "Aïsha Kamara",
    text: {
      fr: "O CONTINENT est devenu mon restaurant préféré! L'ambiance est chaleureuse et le personnel très accueillant. Les plats africains sont authentiques et me rappellent la cuisine de ma grand-mère. Un vrai voyage culinaire!",
      en: "O CONTINENT has become my favorite restaurant! The atmosphere is warm and the staff very welcoming. The African dishes are authentic and remind me of my grandmother's cooking. A real culinary journey!",
    },
    rating: 5,
    date: "22/01/2025",
  },
  {
    name: "Ibrahim Konaté",
    text: {
      fr: "Service exceptionnel et plats délicieux! J'ai emmené ma famille pour une occasion spéciale et tout était parfait. Les portions sont généreuses et les prix raisonnables. Nous avons hâte de revenir!",
      en: "Exceptional service and delicious food! I took my family for a special occasion and everything was perfect. The portions are generous and the prices reasonable. We can't wait to come back!",
    },
    rating: 5,
    date: "08/02/2025",
  },
  {
    name: "Mariama Touré",
    text: {
      fr: "Les saveurs authentiques de l'Afrique et d'ailleurs! Le chef sait vraiment comment marier les épices. J'ai adoré le menu dégustation qui permet de goûter à plusieurs spécialités. Une expérience inoubliable!",
      en: "Authentic flavors from Africa and beyond! The chef really knows how to blend spices. I loved the tasting menu which allows you to taste several specialties. An unforgettable experience!",
    },
    rating: 5,
    date: "30/12/2024",
  },
  {
    name: "Moussa Sow",
    text: {
      fr: "Excellent restaurant avec une grande variété de plats. L'ambiance est conviviale et le décor magnifique. Les plats sont copieux et savoureux. Le personnel est aux petits soins. Je recommande vivement!",
      en: "Excellent restaurant with a wide variety of dishes. The atmosphere is friendly and the decor is beautiful. The dishes are hearty and tasty. The staff is very attentive. I highly recommend!",
    },
    rating: 5,
    date: "18/01/2025",
  },
];
