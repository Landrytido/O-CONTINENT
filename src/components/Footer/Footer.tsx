import React from 'react';
import { Facebook, Instagram, Twitter } from 'lucide-react';
import Logo from '../Header/Logo';
import { translations } from '../../utils/translations';

interface FooterProps {
  language: 'fr' | 'en';
}

const Footer: React.FC<FooterProps> = ({ language }) => {
  const t = translations[language].footer;
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Logo />
            <p className="mt-4 text-neutral-400">
              {t.tagline}
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair text-gold">
              {t.contact.title}
            </h3>
            <address className="not-italic">
              <p className="mb-2 text-neutral-300">15 rue des Bogards</p>
              <p className="mb-2 text-neutral-300">1000 Brussels, Belgium</p>
              <p className="mb-2">
                <a href="tel:+32466468778" className="text-neutral-300 hover:text-gold transition-colors">
                  +32 466 468 778
                </a>
              </p>
            </address>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair text-gold">
              {t.quickLinks.title}
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-neutral-300 hover:text-gold transition-colors">
                  {t.quickLinks.menu}
                </a>
              </li>
              <li>
                <a href="#reservation" className="text-neutral-300 hover:text-gold transition-colors">
                  {t.quickLinks.reservation}
                </a>
              </li>
              <li>
                <a href="#story" className="text-neutral-300 hover:text-gold transition-colors">
                  {t.quickLinks.story}
                </a>
              </li>
              <li>
                <a href="#contact" className="text-neutral-300 hover:text-gold transition-colors">
                  {t.quickLinks.contact}
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-playfair text-gold">
              {t.social.title}
            </h3>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gold hover:text-white transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </div>
            <div className="mt-4">
              <p className="text-neutral-400 text-sm">
                {t.social.followUs}
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-8 text-center">
          <p className="text-neutral-500">
            &copy; {currentYear} O CONTINENT - {t.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;