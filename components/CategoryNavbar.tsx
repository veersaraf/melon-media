import React from "react";

const categories = [
  "Beauty & Skincare",
  "Food & Drink",
  "Fashion & Accessories",
  "Lifestyle & Wellness",
];

interface CategoryNavbarProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

export default function CategoryNavbar({ activeCategory, setActiveCategory }: CategoryNavbarProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 py-6">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setActiveCategory(category)}
          className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ease-in-out shadow-md
            ${
              activeCategory === category
                ? "bg-gradient-to-r from-pink-400 to-pink-600 text-white scale-105 shadow-lg"
                : "bg-white text-gray-700 hover:scale-105 hover:shadow-lg"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
} 