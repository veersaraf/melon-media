import { motion } from 'framer-motion';
const Hero = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-b from-white to-white">
      {/* Abstract gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Off-white background with hints of pink */}
        <div className="absolute top-1/4 left-1/4 w-[50%] h-[50%] rounded-full bg-pink-100/30 blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-[40%] h-[40%] rounded-full bg-pink-200/20 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/3 w-[30%] h-[30%] rounded-full bg-pink-300/10 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/3 w-[35%] h-[35%] rounded-full bg-pink-200/15 blur-3xl"></div>
        
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 bg-noise opacity-5 mix-blend-overlay"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <motion.div className="mb-16" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8
        }}>
            
            
            
          </motion.div>
          
          <motion.h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-8" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.2
        }}>
            Product<br />
            Photography
          </motion.h1>
          
          <motion.div className="text-lg md:text-xl text-gray-700 max-w-md" initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }}>
            <p>Melon Media blends AI precision with creative flair, crafting stunning product images effortlessly.</p>
          </motion.div>
        </div>
      </div>
      
      {/* Smooth gradient transition to the next section */}
      <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-b from-transparent to-pink-50/80 pointer-events-none"></div>
    </section>;
};
export default Hero;
