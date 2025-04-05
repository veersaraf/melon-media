
import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from 'framer-motion';

// Sample project data
const projects = [
  {
    id: 1,
    title: "Cosmetics Collection",
    category: "Beauty",
    image: "/lovable-uploads/4f9ebaaf-61f9-4c32-9a80-5dd5a13d5f87.png",
    description: "Macro photography showcasing the textures and details of luxury cosmetic products."
  },
  {
    id: 2,
    title: "Tech Gadgets",
    category: "Technology",
    image: "/lovable-uploads/59ba7026-524d-4f5a-9fad-2ae4a0684ff9.png",
    description: "Clean, minimal product shots of the latest tech gadgets with creative lighting."
  },
  {
    id: 3,
    title: "Food Photography",
    category: "Culinary",
    image: "/lovable-uploads/a172edaf-2f7c-4ddd-a07f-baf1bc186b85.png",
    description: "Appetizing macro photography of food items showcasing texture and composition."
  },
  {
    id: 4,
    title: "Jewelry Collection",
    category: "Fashion",
    image: "/lovable-uploads/9e7374a6-b845-4d06-95df-617f23775c07.png",
    description: "Detailed close-ups of jewelry pieces highlighting craftsmanship and materials."
  },
  {
    id: 5,
    title: "Melon Media Logo",
    category: "Branding",
    image: "/lovable-uploads/d3123438-486c-4275-95a6-c21d583ad3d2.png",
    description: "Our brand identity showcasing the minimal and modern aesthetic we bring to our work."
  }
];

// Filter categories
const categories = ["All", "Beauty", "Technology", "Culinary", "Fashion", "Branding"];

const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="py-20 px-4">
      <div className="container mx-auto">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h2>
          <p className="text-lg text-melon-text max-w-2xl mx-auto">
            Explore our portfolio of product photography and macro shots that help brands tell their story.
          </p>
        </motion.div>
        
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                activeCategory === category 
                  ? 'bg-melon-primary text-white' 
                  : 'bg-white text-melon-text hover:bg-melon-secondary/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              onClick={() => setSelectedProject(project)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-square overflow-hidden rounded-xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <div className="mt-4">
                <h3 className="font-medium text-lg">{project.title}</h3>
                <p className="text-sm text-melon-text">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Project modal */}
      <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
        <DialogContent className="sm:max-w-3xl bg-white p-0 overflow-hidden">
          {selectedProject && (
            <div>
              <div className="relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
                <p className="text-sm font-medium text-melon-primary mb-4">{selectedProject.category}</p>
                <p className="text-melon-text">{selectedProject.description}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Gallery;
