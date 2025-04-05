
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('work');

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-black/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <div className="w-8 h-8 mr-2 rounded-full custom-gradient flex items-center justify-center text-white font-bold">
            M
          </div>
          <span className="font-display font-bold text-xl text-white">Melon Media</span>
        </Link>
        
        <nav className="flex items-center space-x-8">
          <Link 
            to="/" 
            className={`nav-link text-white ${activeSection === 'work' ? 'active' : ''}`}
            onClick={() => setActiveSection('work')}
          >
            Work
          </Link>
          <Link 
            to="/about" 
            className={`nav-link text-white ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => setActiveSection('about')}
          >
            About
          </Link>
          
          <div className="ml-4">
            <Link 
              to="/contact" 
              className="px-5 py-2 rounded-full bg-white text-black text-sm font-medium"
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
