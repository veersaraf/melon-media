import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState(location.pathname === '/about' ? 'about' : 'work');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="px-3 md:px-5 py-1.5 md:py-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm">
        <nav className="flex items-center space-x-4 md:space-x-8">
          <Link 
            to="/" 
            className={`relative px-3 md:px-4 py-1 text-sm font-medium transition-colors ${activeSection === 'work' ? 'text-pink-500' : 'text-gray-800 hover:text-gray-600'}`}
            onClick={() => setActiveSection('work')}
          >
            {activeSection === 'work' && (
              <span className="absolute inset-0 bg-pink-100/80 rounded-full -z-10"></span>
            )}
            Work
          </Link>
          <Link 
            to="/about" 
            className={`relative px-3 md:px-4 py-1 text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-pink-500' : 'text-gray-800 hover:text-gray-600'}`}
            onClick={() => setActiveSection('about')}
          >
            {activeSection === 'about' && (
              <span className="absolute inset-0 bg-pink-100/80 rounded-full -z-10"></span>
            )}
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
