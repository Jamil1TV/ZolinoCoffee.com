
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-navbar-gradient text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-playfair font-bold">ZOLINO</Link>
          
          {/* Mobile menu button */}
          <button className="lg:hidden p-2 rounded-md hover:bg-coffee-medium/30 transition-colors" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          
          {/* Desktop menu */}
          <div className="hidden lg:flex space-x-8 items-center">
            <MenuLinks />
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 animate-fade-in border-t border-coffee-medium/30 mt-2">
            <div className="flex flex-col space-y-4">
              <MenuLinks />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

// Extracted menu links component for reuse
const MenuLinks = () => {
  const location = useLocation();
  
  return (
    <>
      <NavLink to="/menu">Menu</NavLink>
      <NavLink to="/offers">Offers</NavLink>
      <NavLink to="/about">About Us</NavLink>
      <NavLink to="/locations">Locations</NavLink>
      <NavLink to="/membership">Membership</NavLink>
      <NavLink to="/contact">Contact</NavLink>
    </>
  );
};

// Custom NavLink component with active states
const NavLink = ({ to, children }: { to: string; children: React.ReactNode }) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link 
      to={to}
      className={cn(
        "font-medium px-1 py-2 transition-colors duration-200 relative",
        "after:content-[''] after:absolute after:w-full after:h-0.5 after:bottom-0 after:left-0 after:origin-bottom-right after:transition-transform after:duration-300",
        isActive 
          ? "text-coffee-cream after:scale-x-100 after:bg-coffee-cream" 
          : "hover:text-coffee-cream after:scale-x-0 after:bg-coffee-cream hover:after:scale-x-100 hover:after:origin-bottom-left"
      )}
    >
      {children}
    </Link>
  );
};

export default Navbar;
