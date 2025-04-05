import { useState } from 'react';
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { motion } from 'framer-motion';

// Sample project data
const projects = [{
  id: 1,
  title: "Cosmetics Collection",
  category: "Beauty",
  image: "/lovable-uploads/4f9ebaaf-61f9-4c32-9a80-5dd5a13d5f87.png",
  description: "Macro photography showcasing the textures and details of luxury cosmetic products."
}, {
  id: 2,
  title: "Tech Gadgets",
  category: "Technology",
  image: "/lovable-uploads/59ba7026-524d-4f5a-9fad-2ae4a0684ff9.png",
  description: "Clean, minimal product shots of the latest tech gadgets with creative lighting."
}, {
  id: 3,
  title: "Food Photography",
  category: "Culinary",
  image: "/lovable-uploads/a172edaf-2f7c-4ddd-a07f-baf1bc186b85.png",
  description: "Appetizing macro photography of food items showcasing texture and composition."
}, {
  id: 4,
  title: "Jewelry Collection",
  category: "Fashion",
  image: "/lovable-uploads/9e7374a6-b845-4d06-95df-617f23775c07.png",
  description: "Detailed close-ups of jewelry pieces highlighting craftsmanship and materials."
}, {
  id: 5,
  title: "Melon Media Logo",
  category: "Branding",
  image: "/lovable-uploads/d3123438-486c-4275-95a6-c21d583ad3d2.png",
  description: "Our brand identity showcasing the minimal and modern aesthetic we bring to our work."
}, {
  id: 6,
  title: "Navbar Reference",
  category: "UI Design",
  image: "/lovable-uploads/27bc8a4b-f77a-4ed2-ac03-caf5a5d3c824.png",
  description: "Clean navbar design for modern websites."
}, {
  id: 7,
  title: "Hero Reference",
  category: "UI Design",
  image: "/lovable-uploads/ed4cbb61-9c0c-42ee-bc9b-3b451c2e74ee.png",
  description: "Beautiful hero section with gradient background and clean typography."
}, {
  id: 8,
  title: "Product Photography",
  category: "Product",
  image: "/lovable-uploads/4f9ebaaf-61f9-4c32-9a80-5dd5a13d5f87.png",
  description: "Detailed product photography with optimal lighting and composition."
}];
const Gallery = () => {
  const [selectedProject, setSelectedProject] = useState<null | typeof projects[0]>(null);
  return <section id="work" className="pt-32 pb-20 px-4 bg-gradient-to-b from-pink-50/80 to-white py-0">
      <div className="container mx-auto relative z-10">
        <motion.div className="mb-16 text-center" initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }}>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 relative inline-block">
            
            <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-pink-300 to-pink-500 rounded-full"></div>
          </h2>
          
        </motion.div>
        
        {/* Gallery grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, index) => <motion.div key={project.id} className="project-card" onClick={() => setSelectedProject(project)} initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: index * 0.1
        }}>
              <div className="aspect-square overflow-hidden rounded-xl">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="mt-4">
                <h3 className="font-medium text-lg">{project.title}</h3>
              </div>
            </motion.div>)}
        </div>
      </div>
      
      {/* Project modal styled to match reference image */}
      <Dialog open={!!selectedProject} onOpenChange={open => !open && setSelectedProject(null)}>
        <DialogContent className="max-w-4xl p-0 overflow-hidden rounded-3xl border-0 bg-transparent">
          {selectedProject && <div className="bg-gradient-to-br from-pink-100 to-pink-500 rounded-3xl overflow-hidden border-4 border-white">
              <div className="relative">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full object-cover" />
              </div>
              <div className="p-8 bg-white/20 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-2 text-white">{selectedProject.title}</h3>
                <p className="text-sm font-medium text-white/80 mb-4">{selectedProject.category}</p>
                <p className="text-white/90">{selectedProject.description}</p>
              </div>
            </div>}
        </DialogContent>
      </Dialog>
    </section>;
};
export default Gallery;