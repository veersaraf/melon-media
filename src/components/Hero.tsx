import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-pink-50">
      {/* Abstract gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] rounded-full bg-pink-200/20 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/3 w-[40%] h-[40%] rounded-full bg-pink-300/10 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Product Photography<br/>made simple
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-600 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Melon Media blends AI precision with creative flair,<br/>
          crafting stunning product images effortlessly.
        </motion.p>
      </div>

      {/* Smooth gradient transition */}
      <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-b from-transparent to-pink-100/60 pointer-events-none"></div>
    </section>
  );
};

export default Hero;
