
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Star } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-coffee-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1 - About */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4 text-coffee-cream">ZOLINO</h3>
            <p className="text-gray-300 mb-4">
              Premium coffee experiences in a welcoming atmosphere. Serving communities since 2010.
            </p>
            <div className="flex space-x-4">
              <SocialIcon icon={<Facebook size={18} />} href="https://facebook.com" />
              <SocialIcon icon={<Instagram size={18} />} href="https://instagram.com" />
              <SocialIcon icon={<Twitter size={18} />} href="https://twitter.com" />
            </div>
          </div>
          
          {/* Column 2 - Menu */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4 text-coffee-cream">Menu</h3>
            <ul className="space-y-2">
              <FooterLink to="/menu?category=hot-drinks">Hot Drinks</FooterLink>
              <FooterLink to="/menu?category=cold-drinks">Cold Drinks</FooterLink>
              <FooterLink to="/menu?category=sweets">Cookies & Sweets</FooterLink>
              <FooterLink to="/offers">Special Offers</FooterLink>
            </ul>
          </div>
          
          {/* Column 3 - Contact */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4 text-coffee-cream">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex">
                <Mail className="mr-3 h-5 w-5 text-coffee-cream" />
                <span>info@zolino.com</span>
              </li>
              <li className="flex">
                <Phone className="mr-3 h-5 w-5 text-coffee-cream" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex">
                <MapPin className="mr-3 h-5 w-5 text-coffee-cream" />
                <span>123 Main Street, City Center</span>
              </li>
            </ul>
            
            <div className="mt-4">
              <Link 
                to="/contact" 
                className="inline-block text-coffee-cream hover:text-white underline transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
          
          {/* Column 4 - Rate Us */}
          <div>
            <h3 className="font-playfair text-xl font-bold mb-4 text-coffee-cream">Rate Us</h3>
            <p className="text-gray-300 mb-3">
              Love your ZOLINO experience? Let us know!
            </p>
            <div className="flex space-x-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star 
                  key={star} 
                  size={20} 
                  className="text-coffee-cream cursor-pointer hover:fill-coffee-cream transition-all"
                />
              ))}
            </div>
            <Link 
              to="/membership" 
              className="inline-block text-coffee-cream hover:text-white underline transition-colors"
            >
              Join our Membership Program
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} ZOLINO Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Helper Components
const SocialIcon = ({ icon, href }: { icon: React.ReactNode; href: string }) => (
  <a 
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-coffee-medium/30 p-2 rounded-full hover:bg-coffee-medium transition-colors"
  >
    {icon}
  </a>
);

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <li>
    <Link 
      to={to} 
      className="text-gray-300 hover:text-coffee-cream transition-colors"
    >
      {children}
    </Link>
  </li>
);

export default Footer;
