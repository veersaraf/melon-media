
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background gradient and shapes */}
      <div className="absolute inset-0 bg-gradient-to-br from-melon-secondary to-melon-primary opacity-10"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-melon-secondary opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-melon-primary opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-melon-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Capturing products in their best light
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-melon-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Specialized in product photography and macro shots for brands that want to stand out in their marketing materials.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a 
              href="#work" 
              className="px-8 py-3 rounded-full bg-melon-primary text-white font-medium inline-block hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              View our work
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
