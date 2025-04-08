'use client';
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryNavbar from "./CategoryNavbar";

const images = [
  {
    src: "/gallery/shot1.jpeg",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/shot2.jpeg",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/shot3.png",
    category: "Food & Drink"
  },
  {
    src: "/gallery/shot4.png",
    category: "Lifestyle & Wellness"
  },
  {
    src: "/gallery/shot5.jpeg",
    category: "Lifestyle & Wellness"
  },
  {
    src: "/gallery/shot6.png",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/shot7.JPG",
    category: "Beauty & Skincare"
  },
  {
    src: "/gallery/shot8.png",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/shot9.jpg",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/shot10.jpeg",
    category: "Lifestyle & Wellness"
  },
  {
    src: "/gallery/shot11.jpeg",
    category: "Food & Drink"
  },
  {
    src: "/gallery/shot12.jpeg",
    category: "Fashion & Accessories"
  },
  {
    src: "/gallery/shot13.webp",
    category: "Lifestyle & Wellness"
  },
  {
    src: "/gallery/shot14.png",
    category: "Food & Drink"
  }
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Beauty & Skincare");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages = images.filter(
    (image) => image.category === activeCategory
  );

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
        >
          <AnimatePresence mode="wait">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative aspect-square overflow-hidden rounded-xl md:rounded-2xl shadow-lg hover:shadow-xl transition-all cursor-pointer"
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

        {/* Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)}
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-8"
            >
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.5 }}
                className="relative bg-white rounded-[2rem] p-4 max-h-[90vh] max-w-[90vw] w-auto h-auto"
                onClick={e => e.stopPropagation()}
              >
                <div className="relative w-full h-full rounded-[1.75rem] overflow-hidden">
                  <img
                    src={selectedImage}
                    alt="Selected gallery image"
                    className="w-full h-full object-contain max-h-[80vh]"
                  />
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-6 right-6 text-black/50 hover:text-black/70 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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