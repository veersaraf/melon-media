import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('work');

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto">
      <div className="px-5 py-2 bg-white/80 backdrop-blur-md rounded-full shadow-sm">
        <nav className="flex items-center space-x-8">
          <Link 
            to="/" 
            className={`relative px-4 py-1 text-sm font-medium transition-colors ${activeSection === 'work' ? 'text-pink-500' : 'text-gray-800 hover:text-gray-600'}`}
            onClick={() => setActiveSection('work')}
          >
            {activeSection === 'work' && (
              <span className="absolute inset-0 bg-pink-100/80 rounded-full -z-10"></span>
            )}
            Work
          </Link>
          <Link 
            to="/about" 
            className={`relative px-4 py-1 text-sm font-medium transition-colors ${activeSection === 'about' ? 'text-pink-500' : 'text-gray-800 hover:text-gray-600'}`}
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
