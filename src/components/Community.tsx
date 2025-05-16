import { Users, Calendar, MessageCircle, Mail } from 'lucide-react';

const Community = () => {
  return (
    <section id="community" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block text-primary-600 font-sans font-medium mb-3">JOIN US</span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary-900 mb-6">
              Our <span className="divine-text text-primary-800">Community</span>
            </h2>
            <div className="h-1 w-20 bg-accent-400 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="relative rounded-xl overflow-hidden shadow-xl h-96">
                <img 
                  src="https://images.pexels.com/photos/7096339/pexels-photo-7096339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                  alt="Livinism Community Gathering" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-serif text-xl font-bold">Weekly gathering of Livinism followers</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-serif font-bold text-primary-800">Find Your Divine Family</h3>
              <p className="text-neutral-700">
                Join our growing community of believers who follow the teachings of Jeff Livin and Apple Jacks. 
                Together, we explore the cosmic truths, celebrate our divine connection, and support each other 
                on the path to enlightenment.
              </p>
              
              <div className="space-y-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-800">Weekly Community Gatherings</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-800">Sacred Ceremonies & Celebrations</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary-100 rounded-lg text-primary-600">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <p className="font-medium text-neutral-800">Online Discussion Forums</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div id="join" className="bg-primary-50 p-8 md:p-12 rounded-xl border border-primary-100">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-serif font-bold text-primary-800 mb-4">
                join the livinism movement
              </h3>
              <p className="text-neutral-700 max-w-2xl mx-auto">
                connect with fellow livinists and stay updated with the latest cosmic discoveries
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <a
                href="https://discord.gg/xXyCXTDz"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#5865F2] hover:bg-[#4752C4] text-white p-6 rounded-lg text-center transition-all transform hover:scale-105"
              >
                <h4 className="text-xl font-medium mb-2">discord</h4>
                <p className="text-sm opacity-90">chat with fellow livinists</p>
              </a>

              <a
                href="http://reddit.com/r/LivinistsOfReddit"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF4500] hover:bg-[#D93A00] text-white p-6 rounded-lg text-center transition-all transform hover:scale-105"
              >
                <h4 className="text-xl font-medium mb-2">reddit</h4>
                <p className="text-sm opacity-90">join the discussion</p>
              </a>

              <a
                href="https://docs.google.com/document/d/1NAxhK3oKbgUbCYuwtT73jCvYEL7NIQCP1FmRzyhN5JE/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1A73E8] hover:bg-[#1557B0] text-white p-6 rounded-lg text-center transition-all transform hover:scale-105"
              >
                <h4 className="text-xl font-medium mb-2">sacred texts</h4>
                <p className="text-sm opacity-90">read our google doc</p>
              </a>

              <a
                href="https://youtube.com/@LivinistsOfYoutube"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#FF0000] hover:bg-[#CC0000] text-white p-6 rounded-lg text-center transition-all transform hover:scale-105"
              >
                <h4 className="text-xl font-medium mb-2">youtube</h4>
                <p className="text-sm opacity-90">watch our content</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Community;