import { motion } from 'framer-motion';
import ContactButton from './ContactButton';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToWork = () => {
    document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  };

  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-pink-50">
      {/* Original logo in top left - visible on all screens */}
      <motion.div 
        className="absolute top-2 left-12 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <img src="/logo.png" alt="Melon Media Logo" className="h-60 w-auto object-fill" />
      </motion.div>

      {/* Second logo - top right, only visible on desktop */}
      <motion.div 
        className="absolute top-24 right-16 z-10 hidden md:block"
        initial={{ opacity: 0, rotate: -15, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <img src="/logo.png" alt="Melon Media Logo" className="h-60 w-auto object-fill transform rotate-12" />
      </motion.div>

      {/* Third logo - bottom left, only visible on desktop */}
      <motion.div 
        className="absolute bottom-48 left-24 z-10 hidden md:block"
        initial={{ opacity: 0, rotate: 15, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <img src="/logo.png" alt="Melon Media Logo" className="h-60 w-auto object-fill transform -rotate-12" />
      </motion.div>

      {/* Bottom logo - visible on all screens, positioned differently on mobile/desktop */}
      <motion.div 
        className="absolute bottom-32 right-8 md:right-20 z-10"
        initial={{ opacity: 0, rotate: -10, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <img src="/logo.png" alt="Melon Media Logo" className="h-60 w-auto object-fill transform rotate-6" />
      </motion.div>

      {/* Abstract gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] rounded-full bg-pink-200/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[40%] h-[40%] rounded-full bg-pink-300/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8
      }}>
          Product Photography<br />made simple
        </motion.h1>

        <motion.p className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2
      }}>
          Melon Media blends AI precision with creative flair,<br />
          crafting stunning product images effortlessly.
        </motion.p>

        {/* Add contact button with some spacing */}
        <motion.div 
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <ContactButton />
        </motion.div>
      </div>

      {/* More visible work button */}
      <div className="absolute bottom-24 w-full flex justify-center z-30">
        <motion.button
          onClick={scrollToWork}
          className="
            inline-flex items-center gap-2
            px-6 py-2
            bg-pink-200/90 rounded-full
            transition-all duration-300
            hover:bg-pink-300/90
            shadow-sm
            z-30
          "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <ChevronDown className="w-4 h-4 text-gray-900" />
          <span className="text-base text-gray-900 font-medium">
            Work
          </span>
        </motion.button>
      </div>

      {/* Move the gradient transition below in z-index */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-pink-50 to-pink-50/80 pointer-events-none z-20" />
    </section>;
};
export default Hero;