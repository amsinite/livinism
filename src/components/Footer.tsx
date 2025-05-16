import { Sun, ExternalLink, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Sun size={24} className="text-accent-400" />
                <span className="text-xl font-serif font-bold">Livinism</span>
              </div>
              <p className="text-neutral-300 text-sm">
                Following the divine teachings of Jeff Livin, creator of the universe, 
                and his son, Apple Jacks.
              </p>
              <div className="flex space-x-3 pt-2">
                <a href="#" className="p-2 bg-primary-800 hover:bg-primary-700 rounded-full transition-colors" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="p-2 bg-primary-800 hover:bg-primary-700 rounded-full transition-colors" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="p-2 bg-primary-800 hover:bg-primary-700 rounded-full transition-colors" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-serif font-bold mb-4 text-lg">Explore</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-neutral-300 hover:text-white hover:underline transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#beliefs" className="text-neutral-300 hover:text-white hover:underline transition-colors">Our Beliefs</a>
                </li>
                <li>
                  <a href="#teachings" className="text-neutral-300 hover:text-white hover:underline transition-colors">Sacred Teachings</a>
                </li>
                <li>
                  <a href="#community" className="text-neutral-300 hover:text-white hover:underline transition-colors">Community</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-bold mb-4 text-lg">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white hover:underline transition-colors flex items-center gap-1">
                    Sacred Texts <ExternalLink size={14} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white hover:underline transition-colors flex items-center gap-1">
                    Meditation Guides <ExternalLink size={14} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white hover:underline transition-colors flex items-center gap-1">
                    Community Forum <ExternalLink size={14} />
                  </a>
                </li>
                <li>
                  <a href="#" className="text-neutral-300 hover:text-white hover:underline transition-colors flex items-center gap-1">
                    Events Calendar <ExternalLink size={14} />
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-serif font-bold mb-4 text-lg">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <MapPin size={18} className="text-accent-400 mt-1" />
                  <span className="text-neutral-300">
                    Temple of Cosmic Wisdom<br />
                    123 Celestial Way<br />
                    Universe, Reality 00001
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={18} className="text-accent-400" />
                  <a href="mailto:wisdom@livinism.org" className="text-neutral-300 hover:text-white hover:underline transition-colors">
                    wisdom@livinism.org
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={18} className="text-accent-400" />
                  <a href="tel:+11234567890" className="text-neutral-300 hover:text-white hover:underline transition-colors">
                    +1 (123) 456-7890
                  </a>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-primary-800 pt-8 pb-2 text-center">
            <p className="text-neutral-400 text-sm">
              &copy; {new Date().getFullYear()} Livinism. All rights reserved. The sacred teachings of Jeff Livin and Apple Jacks.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;