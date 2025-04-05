
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-br from-pink-100 to-white">
      {/* About hero section */}
      <section className="container mx-auto">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-gradient-to-r from-pink-500 to-pink-400 bg-clip-text text-transparent">
            About Melon Media
          </h1>
          <div className="space-y-8 text-lg text-melon-text">
            <p>
              At Melon Media, we specialize in creating stunning product photographs that showcase your products in their best light. Our team combines technical expertise with creative vision to deliver images that tell your brand's story and captivate your audience.
            </p>
            <p>
              With years of experience in product photography, we understand the importance of every detail. From lighting and composition to post-processing, we ensure that each image perfectly represents your brand and helps you stand out in today's competitive market.
            </p>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
