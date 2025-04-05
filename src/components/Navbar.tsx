
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('work');

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-auto">
      <div className="px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-md">
        <nav className="flex items-center space-x-10">
          <Link to="/" className="flex items-center">
            <div className="w-8 h-8 mr-2 rounded-full bg-gradient-to-br from-pink-300 to-pink-500 flex items-center justify-center text-white font-bold">
              M
            </div>
            <span className="font-display font-bold text-xl text-gray-800">Melon Media</span>
          </Link>
          
          <div className="flex items-center space-x-8">
            <Link 
              to="/" 
              className={`nav-link text-gray-800 ${activeSection === 'work' ? 'active' : ''}`}
              onClick={() => setActiveSection('work')}
            >
              Work
            </Link>
            <Link 
              to="/about" 
              className={`nav-link text-gray-800 ${activeSection === 'about' ? 'active' : ''}`}
              onClick={() => setActiveSection('about')}
            >
              About
            </Link>
            
            <Link 
              to="/contact" 
              className="px-5 py-2 rounded-full bg-gradient-to-r from-pink-400 to-pink-500 text-white text-sm font-medium hover:shadow-md transition-all"
            >
              Contact
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
