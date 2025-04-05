import { motion } from 'framer-motion';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-pink-50">
      {/* Logo in top left */}
      <motion.div className="absolute top-2 left-12 z-10" initial={{
      opacity: 0,
      y: -20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 0.6,
      delay: 0.2
    }}>
        <img src="/logo.png" alt="Melon Media Logo" className="h-60 w-auto object-fill" />
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
      </div>

      {/* Smooth gradient transition to work section */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-pink-50 to-pink-50/80 pointer-events-none"></div>
    </section>;
};
export default Hero;