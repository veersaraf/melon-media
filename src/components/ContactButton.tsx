import { motion } from 'framer-motion';

const ContactButton = () => {
  const handleClick = () => {
    window.location.href = 'mailto:melonmedia.site@gmail.com';
  };

  return (
    <motion.button
      onClick={handleClick}
      className="
        bg-[#F5A9A9] text-[#FFF5E0] 
        font-bold text-2xl uppercase tracking-wider
        px-10 py-4.5 rounded-full
        w-[300px] text-center
        shadow-lg hover:shadow-xl
        transition-all duration-200
        hover:-translate-y-0.5 active:translate-y-0.5
        hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]
        active:shadow-[0_5px_10px_rgba(0,0,0,0.1)]
      "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Contact
    </motion.button>
  );
};

export default ContactButton; 