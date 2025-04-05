import { motion } from 'framer-motion';

const ContactButton = () => {
  const handleClick = () => {
    window.location.href = 'mailto:melonmedia.site@gmail.com';
  };

  return (
    <motion.button
      onClick={handleClick}
      className="
        bg-[#F5A9A9] text-white 
        font-medium text-sm uppercase tracking-wide
        px-6 py-2.5 rounded-lg
        w-[200px] text-center
        shadow-sm hover:shadow-md
        transition-all duration-200
        hover:-translate-y-0.5 active:translate-y-0.5
        hover:bg-opacity-90 active:bg-opacity-100
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