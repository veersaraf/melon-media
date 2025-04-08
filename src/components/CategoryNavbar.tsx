'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const categories = [
  "Beauty & Skincare",
  "Fashion & Accessories",
  "Food & Drink",
  "Lifestyle & Wellness",
];

interface CategoryNavbarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function CategoryNavbar({ activeCategory, setActiveCategory }: CategoryNavbarProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const checkScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 0);
    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollContainerRef.current) return;
    const scrollAmount = direction === 'left' ? -200 : 200;
    scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  return (
    <nav className="w-full sticky top-0 z-50 py-4 md:py-8">
      {/* Desktop Version - Preserved Exactly */}
      <div className="hidden md:flex justify-center">
        <div className="flex gap-2 bg-[#f8f7f4] rounded-full border border-[#e6e4e1] p-2 relative">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`
                px-6 py-2 rounded-full text-sm font-medium transition-colors relative z-10
                ${
                  activeCategory === category
                    ? 'text-[#1a1a1a]'
                    : 'text-gray-600 hover:text-gray-900'
                }
              `}
              layout
            >
              {category}
              {activeCategory === category && (
                <motion.div
                  layoutId="active-pill-desktop"
                  className="absolute inset-0 bg-pink-200 rounded-full -z-10"
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Mobile Version - New Design */}
      <div className="md:hidden px-4 relative">
        {showLeftArrow && (
          <button 
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-gradient-to-r from-[#fff9f0] via-[#fff9f0] to-transparent"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
        )}
        
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto no-scrollbar"
          onScroll={checkScroll}
        >
          <div className="flex gap-2 bg-[#f8f7f4] rounded-full border border-[#e6e4e1] p-1.5 relative mx-auto">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  whitespace-nowrap px-4 py-1.5 rounded-full text-sm font-medium transition-colors relative z-10 flex-shrink-0
                  ${
                    activeCategory === category
                      ? 'text-[#1a1a1a]'
                      : 'text-gray-600'
                  }
                `}
                layout
              >
                {category}
                {activeCategory === category && (
                  <motion.div
                    layoutId="active-pill-mobile"
                    className="absolute inset-0 bg-pink-200 rounded-full -z-10"
                    transition={{ type: "spring", duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {showRightArrow && (
          <button 
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-8 h-8 flex items-center justify-center bg-gradient-to-l from-[#fff9f0] via-[#fff9f0] to-transparent"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        )}
      </div>
    </nav>
  );
} 