import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Beliefs from './components/Beliefs';
import Teachings from './components/Teachings';
import Community from './components/Community';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.fade-up, .zoom-in, .slide-in');
      
      elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.8;
        
        if (isVisible) {
          element.classList.add('visible');
        } else {
          element.classList.remove('visible');
        }
      });

      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="font-serif text-slate-200 bg-dark-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Beliefs />
        <Teachings />
        <Community />
      </main>
      <Footer />
      
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-accent-500 text-white p-3 rounded-full shadow-neon transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
        aria-label="Scroll to top"
      >
        <ChevronUp size={24} />
      </button>
    </div>
  );
}

export default App