import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Beliefs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const beliefs = [
    {
      title: "the creation",
      description: "our universe was literally just a side project that turned out pretty awesome"
    },
    {
      title: "the creator",
      description: "jeff livin made all this while he was supposed to be working at his real job"
    },
    {
      title: "the explorer",
      description: "apple jacks is still out there somewhere, checking out different planets"
    },
    {
      title: "the truth",
      description: "we're all just living in jeff's side project, and that's pretty cool"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="beliefs" className="section-padding bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-medium mb-4">
              what we believe
            </h2>
          </motion.div>
          
          <motion.div 
            ref={ref}
            className="grid gap-6"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {beliefs.map((belief, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Star size={20} className="text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium mb-2">{belief.title}</h3>
                    <p className="text-gray-600">{belief.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Beliefs;