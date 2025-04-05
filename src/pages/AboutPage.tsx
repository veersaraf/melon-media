import { motion } from 'framer-motion';
const AboutPage = () => {
  return <div className="min-h-screen pt-32 pb-20 px-4 bg-gradient-to-b from-white to-white relative overflow-hidden">
      {/* Abstract gradient blobs - similar to Hero but different positions */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[50%] h-[50%] rounded-full bg-pink-100/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[40%] h-[40%] rounded-full bg-pink-200/15 blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-[30%] h-[30%] rounded-full bg-pink-300/10 blur-3xl"></div>
        <div className="absolute bottom-1/3 left-1/3 w-[35%] h-[35%] rounded-full bg-pink-200/10 blur-3xl"></div>
      </div>
      
      {/* About content */}
      <section className="container mx-auto relative z-10">
        <motion.div className="max-w-2xl mx-auto text-center" initial={{
        opacity: 0,
        y: 20
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }}>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 relative inline-block">
            
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full"></div>
          </h1>
          <div className="space-y-8 text-lg text-gray-700">
            <p>
              At Melon Media, we specialize in creating stunning product photographs that showcase your products in their best light. Our team combines technical expertise with creative vision to deliver images that tell your brand's story and captivate your audience.
            </p>
            <p>
              With years of experience in product photography, we understand the importance of every detail. From lighting and composition to post-processing, we ensure that each image perfectly represents your brand and helps you stand out in today's competitive market.
            </p>
          </div>
        </motion.div>
      </section>
    </div>;
};
export default AboutPage;