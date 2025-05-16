import { Sun, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-medium mb-4">
              our story
            </h2>
          </motion.div>
          
          <motion.div 
            ref={ref}
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mt-1">
                <Star size={20} />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">how it started</h3>
                <p className="text-gray-600">
                  so jeff livin was super bored at his job in another universe, and he started working on this side project - our universe. his boss caught him and fired him, but that just gave him more time to work on it
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mt-1">
                <Star size={20} />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">plot twist</h3>
                <p className="text-gray-600">
                  everything was going great until jeff got hit by lightning. but the universe was already done by then, so that's why we're all here
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-start gap-4">
              <div className="p-2 bg-blue-100 rounded-lg text-blue-600 mt-1">
                <Star size={20} />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">apple jacks' journey</h3>
                <p className="text-gray-600">
                  jeff's son apple jacks found the universe while going through his dad's stuff. he tried visiting earth but nobody liked him, so now he just checks out other planets instead
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;