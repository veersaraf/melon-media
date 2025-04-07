import React, { useState } from "react";
import CategoryNavbar from "./CategoryNavbar";
import Image from "next/image";

// Define the image type with category
interface GalleryImage {
  src: string;
  category: string;
}

// Modify your images array to include categories
const images: GalleryImage[] = [
  {
    src: "/path/to/image1.jpg",
    category: "Beauty & Skincare",
  },
  {
    src: "/path/to/image2.jpg",
    category: "Food & Drink",
  },
  // ... Add categories to all your images
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("Beauty & Skincare");

  // Filter images based on active category
  const filteredImages = images.filter(
    (image) => image.category === activeCategory
  );

  return (
    <div className="container mx-auto px-4">
      <CategoryNavbar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {filteredImages.map((image, index) => (
          <div
            key={index}
            className="relative aspect-square overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <Image
              src={image.src}
              alt={`Gallery image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
} 