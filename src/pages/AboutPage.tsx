import { motion } from 'framer-motion';
import ContactButton from '@/components/ContactButton';

const AboutPage = () => {
  return (
    <div className="min-h-screen py-32 px-4 bg-gradient-to-b from-white to-pink-50 relative overflow-hidden">
      {/* Abstract gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[40%] h-[40%] rounded-full bg-pink-200/30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-[30%] h-[30%] rounded-full bg-pink-300/20 blur-3xl"></div>
      </div>

      {/* About content */}
      <section className="container mx-auto relative z-10 flex flex-col items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto bg-white bg-opacity-60 backdrop-blur-sm rounded-2xl shadow-xl p-8 mb-12"
        >
          <div className="space-y-6 text-lg text-gray-800 text-center">
            <p>
              At <span className="text-pink-500 font-semibold">Melon Media</span>, we specialize in creating
              <span className="text-pink-500 font-semibold"> stunning product photographs</span> that showcase your products in their best light. Our team combines
              <span className="text-pink-500 font-semibold"> technical expertise</span> with
              <span className="text-pink-500 font-semibold"> creative vision</span> to deliver images that tell your brand's story and captivate your audience.
            </p>
            <p>
              With years of experience in product photography, we understand the importance of every detail. From
              <span className="text-pink-500 font-semibold"> lighting and composition</span> to post-processing, we ensure that each image perfectly represents your brand and helps you
              <span className="text-pink-500 font-semibold"> stand out in today's competitive market</span>.
            </p>
          </div>
        </motion.div>

        {/* Add contact button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <ContactButton />
        </motion.div>
      </section>
    </div>
  );
};

export default AboutPage;
