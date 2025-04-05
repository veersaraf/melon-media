
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
            className={`nav-link text-gray-800 text-sm ${activeSection === 'work' ? 'active' : ''}`}
            onClick={() => setActiveSection('work')}
          >
            Work
          </Link>
          <Link 
            to="/about" 
            className={`nav-link text-gray-800 text-sm ${activeSection === 'about' ? 'active' : ''}`}
            onClick={() => setActiveSection('about')}
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
