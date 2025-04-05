
import { motion } from 'framer-motion';

const AboutPage = () => {
  return (
    <div>
      {/* About hero section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-melon-primary">About Melon Media</h1>
            <div className="space-y-6 text-lg md:text-xl text-melon-text">
              <p>
                At Melon Media, we specialize in creating stunning product photographs that showcase your products in their best light. Our team combines technical expertise with creative vision to deliver images that tell your brand's story and captivate your audience.
              </p>
              <p>
                With years of experience in product photography, we understand the importance of every detail. From lighting and composition to post-processing, we ensure that each image perfectly represents your brand and helps you stand out in today's competitive market. Let us help you transform your products into visual stories that sell.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to elevate your product imagery?</h2>
            <p className="text-lg text-melon-text mb-8">
              Let's collaborate to create stunning visuals that showcase your products at their best.
            </p>
            <a 
              href="mailto:hello@melonmedia.com" 
              className="px-8 py-3 rounded-full bg-melon-primary text-white font-medium inline-block hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              Get in touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
