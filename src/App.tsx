import { useState } from "react";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import MenuSection from "./components/Menu/MenuSection";
import Story from "./components/Story/Story";
import Testimonials from "./components/Testimonials/Testimonials";
import Reservation from "./components/Reservation/Reservation";
import Footer from "./components/Footer/Footer";

function App() {
  const [language, setLanguage] = useState<"fr" | "en">("fr");

  const handleLanguageChange = (lang: "fr" | "en") => {
    setLanguage(lang);
  };

  return (
    <div className="font-poppins text-gray-900 min-h-screen bg-white">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <main>
        <Hero language={language} />
        <MenuSection language={language} />
        <Story language={language} />
        <Testimonials language={language} />
        <Reservation language={language} />
      </main>
      <Footer language={language} />
    </div>
  );
}

export default App;
