import { motion } from 'framer-motion';
import ContactButton from './ContactButton';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Top left logo */}
      <motion.div 
        className="absolute top-16 left-6 md:top-24 md:left-16 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img src="/logo.png" alt="Melon Media Logo" className="h-32 md:h-48 w-auto object-fill" />
      </motion.div>

      {/* Bottom left logo */}
      <motion.div 
        className="absolute bottom-48 left-8 z-10 hidden md:block"
        initial={{ opacity: 0, rotate: 15, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <img 
          src="/logo.png" 
          alt="Melon Media Logo" 
          className="h-48 w-auto object-fill transform -rotate-12" 
        />
      </motion.div>

      {/* Top right logo */}
      <motion.div 
        className="absolute top-32 right-16 z-10 hidden md:block"
        initial={{ opacity: 0, rotate: -10, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <img 
          src="/logo.png" 
          alt="Melon Media Logo" 
          className="h-48 w-auto object-fill transform rotate-12" 
        />
      </motion.div>

      {/* Bottom right logo */}
      <motion.div 
        className="absolute bottom-64 right-8 z-10 hidden md:block"
        initial={{ opacity: 0, rotate: -15, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <img 
          src="/logo.png" 
          alt="Melon Media Logo" 
          className="h-48 w-auto object-fill transform -rotate-6" 
        />
      </motion.div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-medium text-gray-900 leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Product Photography<br />made simple
        </motion.h1>

        <motion.p 
          className="text-base md:text-lg text-gray-600 max-w-lg mx-auto mb-8 font-normal"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Melon Media blends AI precision with creative flair,
          crafting stunning product images effortlessly.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ContactButton />
        </motion.div>
      </div>

      <div className="absolute bottom-16 w-full flex justify-center">
        <motion.button
          onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
          className="inline-flex items-center gap-2 px-5 py-1.5 bg-pink-100 rounded-full transition-all duration-300 hover:bg-pink-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ChevronDown className="w-3.5 h-3.5 text-gray-900" />
          <span className="text-sm text-gray-900">Work</span>
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;