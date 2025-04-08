import { motion } from 'framer-motion';
import ContactButton from '../components/ContactButton';

export default function AboutPage() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 md:px-8">
      <motion.div 
        className="max-w-2xl mx-auto text-center space-y-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="text-4xl md:text-5xl font-medium text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h1>
        
        <motion.div 
          className="space-y-8 text-gray-600"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-lg leading-relaxed">
            Founded by Veer Saraf, Melon Media specializes in creating stunning product photographs that showcase your products in their best light. Our team combines technical expertise with creative vision to deliver images that tell your brand's story and captivate your audience.
          </p>
          
          <p className="text-lg leading-relaxed">
            With years of experience in product photography, we understand the importance of every detail. From lighting and composition to post-processing, we ensure that each image perfectly represents your brand and helps you stand out in today's competitive market.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8"
        >
          <ContactButton />
        </motion.div>
      </motion.div>
    </section>
  );
} 