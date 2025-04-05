import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-32 px-4 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
      {/* Abstract gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] rounded-full bg-pink-200/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[30%] h-[30%] rounded-full bg-pink-300/20 blur-3xl"></div>
      </div>

      {/* About content with Bento Grid */}
      <section className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
        >
          {/* Text Section */}
          <div className="space-y-6 text-lg text-gray-800 p-6 bg-white bg-opacity-60 rounded-2xl shadow-xl backdrop-blur-sm">
            <p>
              At <span className="text-pink-500 font-semibold">Melon Media</span>, we create
              <span className="text-pink-500 font-semibold"> stunning product photographs</span> that present your products at their very best.
              Our team blends technical know-how with creative insight, delivering visuals that
              <span className="text-pink-500 font-semibold"> tell your brand's story</span> and capture attention effortlessly.
            </p>
            <p>
              With extensive expertise in product photography, we appreciate the
              <span className="text-pink-500 font-semibold"> importance of every detail</span>. From meticulous lighting and composition to expert
              post-processing, we ensure each photograph authentically represents your brand, helping you
              <span className="text-pink-500 font-semibold"> stand out in a crowded market</span>.
            </p>
          </div>

          {/* Image/Visual Placeholder */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-pink-100 rounded-xl shadow-inner aspect-square"></div>
            <div className="bg-pink-200 rounded-xl shadow-inner aspect-square"></div>
            <div className="bg-pink-200 rounded-xl shadow-inner aspect-square"></div>
            <div className="bg-pink-100 rounded-xl shadow-inner aspect-square"></div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
