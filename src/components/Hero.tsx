import { motion } from 'framer-motion';
import ContactButton from './ContactButton';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-pink-50">
      {/* Logo - adjusted for mobile */}
      <motion.div 
        className="absolute top-4 left-6 md:top-2 md:left-12 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img src="/logo.png" alt="Melon Media Logo" className="h-40 md:h-60 w-auto object-fill" />
      </motion.div>

      {/* Center content - adjusted spacing for mobile */}
      <div className="container mx-auto px-4 z-10 text-center mt-24 md:mt-0">
        <motion.h1 
          className="text-4xl md:text-7xl font-bold text-gray-900 leading-tight mb-6 px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Product Photography<br />made simple
        </motion.h1>

        <motion.p 
          className="text-base md:text-xl text-gray-600 max-w-xl mx-auto px-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Melon Media blends AI precision with creative flair,
          crafting stunning product images effortlessly.
        </motion.p>

        {/* Contact button - adjusted for mobile */}
        <motion.div 
          className="mt-8 md:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ContactButton />
        </motion.div>
      </div>

      {/* Work button - adjusted position for mobile */}
      <div className="absolute bottom-16 md:bottom-24 w-full flex justify-center z-30">
        <motion.button
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          className="
            inline-flex items-center gap-2
            px-5 py-1.5
            bg-pink-100 rounded-full
            transition-all duration-300
            hover:bg-pink-200
            shadow-sm
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ChevronDown className="w-3.5 h-3.5 text-gray-900" />
          <span className="text-sm text-gray-900">
            Work
          </span>
        </motion.button>
      </div>

      {/* Gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-b from-pink-50 to-pink-50/80 pointer-events-none z-20" />
    </section>
  );
};

export default Hero;