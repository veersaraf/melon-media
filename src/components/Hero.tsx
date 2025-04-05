
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-pink-100 to-pink-500">
      {/* Overlay gradient with grain texture */}
      <div className="absolute inset-0 bg-black/5 z-0"></div>
      
      {/* Large circular shapes */}
      <div className="absolute top-0 left-0 w-[80%] h-[80%] rounded-full bg-pink-300 opacity-70 translate-x-[-30%] translate-y-[-30%] blur-3xl z-0"></div>
      <div className="absolute bottom-0 right-0 w-[80%] h-[80%] rounded-full bg-pink-400 opacity-70 translate-x-[30%] translate-y-[30%] blur-3xl z-0"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-lg md:text-xl text-white/90 mb-2">
              Melon Media enables the creation
            </p>
            <p className="text-lg md:text-xl text-white/90 mb-2">
              and delivery of stunning imagery
            </p>
            <p className="text-lg md:text-xl text-white/90">
              that fuels brand innovation.
            </p>
          </motion.div>
          
          <motion.h1
            className="text-6xl md:text-8xl font-bold text-white mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Product<br/>
            Photography
          </motion.h1>
          
          <motion.div
            className="text-lg md:text-xl text-white/90 max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p>
              Melon Media creates stunning product photography that showcases your products in their best light, delivering the quality and precision you need.
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Gradient bleed effect */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-transparent to-pink-500/50 z-0"></div>
    </section>
  );
};

export default Hero;
