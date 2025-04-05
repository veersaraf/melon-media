
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-4 border-t">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link to="/" className="flex items-center">
              <div className="w-8 h-8 mr-2 rounded-full custom-gradient flex items-center justify-center text-white font-bold">
                M
              </div>
              <span className="font-display font-bold text-xl text-melon-primary">Melon Media</span>
            </Link>
          </div>
          
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
            <Link to="/" className="text-sm text-melon-text hover:text-melon-primary transition-colors">
              Work
            </Link>
            <Link to="/about" className="text-sm text-melon-text hover:text-melon-primary transition-colors">
              About
            </Link>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t text-center text-sm text-melon-text">
          <p>© {currentYear} Melon Media. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
