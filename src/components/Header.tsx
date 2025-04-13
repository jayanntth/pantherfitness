
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import CallToAction from './CallToAction';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Branches', path: '/branches' },
    { name: 'Equipment', path: '/equipment' },
    { name: 'Services', path: '/services' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="sticky top-0 z-50 bg-black border-b border-panther-gold/20">
      <div className="container mx-auto px-4 flex justify-between items-center h-20">
        <Link to="/" className="flex items-center">
          <div className="text-2xl md:text-3xl font-bold text-white">
            <span className="text-panther-gold">PANTHER</span> FITNESS
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-semibold transition-colors ${
                isActive(link.path)
                  ? 'text-panther-gold'
                  : 'text-white hover:text-panther-gold'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Call CTA for Desktop */}
        <div className="hidden md:flex">
          <CallToAction size="sm" />
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-panther-gold/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-semibold transition-colors ${
                    isActive(link.path)
                      ? 'text-panther-gold'
                      : 'text-white hover:text-panther-gold'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-2">
                <CallToAction size="full" />
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
