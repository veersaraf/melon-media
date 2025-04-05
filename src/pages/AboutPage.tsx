
import { Camera, Image, Lightbulb, Users, Target, Heart } from "lucide-react";
import { motion } from 'framer-motion';

// Define services
const services = [
  {
    icon: Camera,
    title: "Product Photography",
    description: "High-quality product shots with perfect lighting and composition."
  },
  {
    icon: Image,
    title: "Macro Photography",
    description: "Detailed close-up shots that reveal textures and intricate details."
  },
  {
    icon: Lightbulb,
    title: "Creative Direction",
    description: "Conceptual guidance to align photography with your brand identity."
  }
];

// Define values
const values = [
  {
    icon: Target,
    title: "Precision",
    description: "We focus on the smallest details to create perfect images."
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with clients to understand their vision and needs."
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do and it shows in our dedication to quality."
  }
];

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
            <p className="text-lg md:text-xl text-melon-text">
              We specialize in creating stunning product photographs that showcase your products in their best light. Our team combines technical expertise with creative vision to deliver images that tell your brand's story.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Services section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-melon-text max-w-2xl mx-auto">
              We offer specialized photography services to meet your marketing needs.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div 
                key={service.title}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 w-12 h-12 rounded-full custom-gradient flex items-center justify-center">
                  <service.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-melon-text">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company values */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-lg text-melon-text max-w-2xl mx-auto">
              These core principles guide our approach to every project.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div 
                key={value.title}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="mb-4 w-12 h-12 rounded-full custom-gradient flex items-center justify-center">
                  <value.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-melon-text">{value.description}</p>
              </motion.div>
            ))}
          </div>
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
