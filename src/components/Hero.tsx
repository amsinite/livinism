import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen cosmos-bg flex items-center justify-center pt-20">
      <div className="absolute inset-0 bg-black/50"></div>
      
      <div className="container mx-auto px-4 z-10 text-center py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <h1 className="text-4xl md:text-5xl font-medium text-white leading-tight">
            hey, welcome to <span className="text-accent-400">livinism</span>
          </h1>
          
          <p className="text-xl text-neutral-100 max-w-2xl mx-auto">
            so basically, our universe started as jeff livin's side project when he was bored at work. pretty cool right?
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <a
              href="#about"
              className="bg-accent-500 hover:bg-accent-400 text-white px-8 py-3 rounded-lg transition-all"
            >
              learn more
            </a>
            <a
              href="#join"
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-lg transition-all"
            >
              join us
            </a>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white/80 hover:text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </a>
    </section>
  );
};

export default Hero;