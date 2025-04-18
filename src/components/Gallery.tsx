'use client';
import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform, useAnimation } from "framer-motion";
import CategoryNavbar from "./CategoryNavbar";

const images = [
  // Beauty & Skincare
  {
    src: "/gallery/beautySkincare/shot1.JPG",
    category: "Beauty & Skincare"
  },
  {
    src: "/gallery/beautySkincare/shot2.png",
    category: "Beauty & Skincare"
  },
  {
    src: "/gallery/beautySkincare/shot3.png",
    category: "Beauty & Skincare"
  },
  {
    src: "/gallery/beautySkincare/shot4.png",
    category: "Beauty & Skincare"
  },
  {
    src: "/gallery/beautySkincare/shot5.png",
    category: "Beauty & Skincare"
  },
  {
    src: "/gallery/beautySkincare/shot6.png",
    category: "Beauty & Skincare"
  },
  {
    src: "/gallery/beautySkincare/shot7.png",
    category: "Beauty & Skincare"
  },
  {
    src: "/gallery/beautySkincare/shot8.png",
    category: "Beauty & Skincare"
  },
  {
    src: "/gallery/beautySkincare/shot9.png",
    category: "Beauty & Skincare"
  },
  {
    src: "/gallery/beautySkincare/shot10.png",
    category: "Beauty & Skincare"
  },
  {
    src: "/gallery/beautySkincare/shot11.png",
    category: "Beauty & Skincare"
  },

  // Fashion & Accessories
  {
    src: "/gallery/fashionAccesories/shot1.jpeg",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/fashionAccesories/shot2.jpeg",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/fashionAccesories/shot3.png",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/fashionAccesories/shot4.png",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/fashionAccesories/shot5.jpg",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/fashionAccesories/shot6.png",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/fashionAccesories/shot7.png",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/fashionAccesories/shot8.png",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/fashionAccesories/shot9.jpg",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/fashionAccesories/shot10.png",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/fashionAccesories/shot11.png",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/fashionAccesories/shot12.jpeg",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/fashionAccesories/shot13.jpg",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/fashionAccesories/shot14.png",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/fashionAccesories/shot15.png",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/fashionAccesories/shot16.jpg",
    category: "Fashion & Accessories"
  },

  // Food & Drink
  {
    src: "/gallery/shot3.png",
    category: "Food & Drink"
  },
  {
    src: "/gallery/shot11.jpeg",
    category: "Food & Drink"
  },
  {
    src: "/gallery/shot14.png",
    category: "Food & Drink"
  },

  // Lifestyle & Wellness
  {
    src: "/gallery/shot4.png",
    category: "Lifestyle & Wellness"
  },
  {
    src: "/gallery/shot5.jpeg",
    category: "Lifestyle & Wellness"
  },
  {
    src: "/gallery/shot10.jpeg",
    category: "Lifestyle & Wellness"
  },
  {
    src: "/gallery/shot13.webp",
    category: "Lifestyle & Wellness"
  }
];

const categories = [
  "Beauty & Skincare",
  "Fashion & Accessories",
  "Food & Drink",
  "Lifestyle & Wellness",
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Beauty & Skincare");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const controls = useAnimation();
  
  // Motion values for swipe detection - removed opacity transform
  const x = useMotionValue(0);
  const xInput = [0, 100, -100];
  const scale = useTransform(x, xInput, [1, 0.95, 0.95]);

  const filteredImages = images.filter(
    (image) => image.category === activeCategory
  );

  const handleDragEnd = (event: any, info: any) => {
    const threshold = 100; // minimum distance for swipe
    const velocity = info.velocity.x;
    
    if (Math.abs(info.offset.x) > threshold || Math.abs(velocity) > 500) {
      const currentIndex = categories.indexOf(activeCategory);
      let newIndex;
      
      if (info.offset.x > 0 || velocity > 0) {
        // Swipe right - go to previous category
        newIndex = currentIndex > 0 ? currentIndex - 1 : categories.length - 1;
      } else {
        // Swipe left - go to next category
        newIndex = currentIndex < categories.length - 1 ? currentIndex + 1 : 0;
      }
      
      setActiveCategory(categories[newIndex]);
    }
    
    // Reset position
    controls.start({ x: 0 });
  };

  return (
    <section id="work" className="min-h-screen pt-16 md:pt-32 pb-16 md:pb-20 px-4">
      <div className="space-y-8">
        <CategoryNavbar
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 px-2 md:px-4 min-h-[50vh]"
          layout
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          style={{ x, scale }}
          animate={controls}
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  duration: 0.2,
                  delay: index * 0.05,
                  ease: "easeInOut"
                }}
                className="relative aspect-square overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer [@media(max-width:768px)]:!opacity-100 [@media(max-width:768px)]:!transition-none"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={`Gallery image - ${image.category}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  loading="lazy"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Category Indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              className={`w-2 h-2 rounded-full transition-colors ${
                activeCategory === category ? 'bg-pink-400' : 'bg-gray-300'
              }`}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative bg-white rounded-[2rem] p-4 max-h-[90vh] max-w-[90vw] w-auto h-auto flex items-center justify-center"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden flex items-center justify-center">
                  <img
                    src={selectedImage}
                    alt="Selected gallery image"
                    className="max-h-[80vh] max-w-[80vw] w-auto h-auto object-contain"
                    style={{ 
                      border: '1px solid #e5e7eb',
                      borderRadius: '1.5rem',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                  />
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 text-black/50 hover:text-black/70 transition-colors bg-white/80 rounded-full p-1.5 hover:bg-white"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}