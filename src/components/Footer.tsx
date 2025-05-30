import { Link } from 'react-router-dom';
import { Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white border-t border-panther-gold/20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img 
              src="/lovable-uploads/28bc6d47-8f2d-4667-be16-77d9b9b327bf.png" 
              alt="Panther Fitness Logo" 
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-300 mb-4">
              Premium fitness facilities with two convenient locations in Bangalore.
              Experience top-quality equipment and exceptional service.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/pantherfitness_1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-panther-gold transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/people/Panther-Fitness-1/100090202668999/#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white hover:text-panther-gold transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-panther-gold">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-panther-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-panther-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/branches" className="text-gray-300 hover:text-panther-gold transition-colors">
                  Our Branches
                </Link>
              </li>
              <li>
                <Link to="/equipment" className="text-gray-300 hover:text-panther-gold transition-colors">
                  Equipment & Facilities
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-panther-gold transition-colors">
                  Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-panther-gold">Andrahalli Branch 1</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-panther-gold mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  #3 & 5, CSV Complex, 'D' Group Layout, Near 'D' Group Arch, 60Ft Road, Andrahalli Main Road, Vishvaneedam Post, Bangalore-560091
                </p>
              </div>
              <div className="flex items-start">
                <Clock size={20} className="text-panther-gold mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Monday-Saturday: 5:00 AM - 10:30 PM
                  <br />
                  Sunday: 7:00 AM - 7:30 PM
                </p>
              </div>
              <div className="flex items-start">
                <Phone size={20} className="text-panther-gold mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">9731238384</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-panther-gold">Andrahalli Branch 2</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-panther-gold mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  #38 2nd/3rd floor MD Complex, Doddanna Layout Andrahalli Main Road, Bangalore-560091
                </p>
              </div>
              <div className="flex items-start">
                <Clock size={20} className="text-panther-gold mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Monday-Saturday: 5:00 AM - 10:30 PM
                  <br />
                  Sunday: 7:00 AM - 7:30 PM
                </p>
              </div>
              <div className="flex items-start">
                <Phone size={20} className="text-panther-gold mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">9071912321</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-6 text-panther-gold">Mallathahalli Branch</h4>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-panther-gold mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  #11 & 12, 1st & 2nd Floor, Gidadakonenahalli, Mallathahalli main road, near HP petrol bunk, Bangalore - 560091
                </p>
              </div>
              <div className="flex items-start">
                <Clock size={20} className="text-panther-gold mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">
                  Monday-Saturday: 5:00 AM - 10:30 PM
                  <br />
                  Sunday: 7:00 AM - 7:30 PM
                </p>
              </div>
              <div className="flex items-start">
                <Phone size={20} className="text-panther-gold mr-2 mt-1 flex-shrink-0" />
                <p className="text-gray-300">9731238283</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mt-12 pt-8 border-t border-gray-800">
          <div className="flex items-center mb-4 md:mb-0">
            <a href="tel:9900412321" className="flex items-center text-white hover:text-panther-gold transition-colors">
              <Phone size={20} className="mr-2" />
              <span className="font-semibold">9900412321</span>
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Panther Fitness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
