import { useState, useEffect } from 'react';
import { Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', url: '#home' },
    { name: 'About', url: '#about' },
    { name: 'Beliefs', url: '#beliefs' },
    { name: 'Teachings', url: '#teachings' },
    { name: 'Community', url: '#community' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md py-3' 
          : 'bg-transparent backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="flex items-center gap-2">
          <Sun size={28} className="text-accent-500" />
          <span className="text-2xl font-serif font-bold text-primary-900">Livinism</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className={`font-sans text-sm tracking-wide transition-colors ${
                isScrolled ? 'text-neutral-800 hover:text-primary-600' : 'text-neutral-100 hover:text-accent-400'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#join"
            className="bg-primary-600 hover:bg-primary-700 text-white font-sans font-medium px-5 py-2 rounded-md transition-all transform hover:scale-105"
          >
            Join Us
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-neutral-800"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`fixed inset-0 bg-white z-40 pt-20 px-6 md:hidden transition-transform duration-300 transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              className="font-sans text-lg text-neutral-800 border-b border-neutral-200 pb-2"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="#join"
            className="bg-primary-600 hover:bg-primary-700 text-white font-sans font-medium px-5 py-3 rounded-md text-center mt-4"
            onClick={() => setIsMenuOpen(false)}
          >
            Join Us
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;