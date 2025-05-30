import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import CallToAction from './CallToAction';

const HeroSection = () => {
  return (
    <div className="relative h-screen min-h-[600px] max-h-[800px] bg-black text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center sm:bg-center bg-[50%_center] z-0"
        style={{ 
          backgroundImage: 'url(https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)',
          filter: 'brightness(0.5)'
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/90 to-black/50 z-10"></div>

      <div className="container mx-auto px-4 h-full flex flex-col justify-center relative z-20 pt-16 sm:pt-0">
        <div className="max-w-3xl">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
            <span className="inline-block">THE STRENGTHENING</span> <span className="text-panther-gold">POWER HOUSE</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Premium gym facilities at two convenient locations in Bangalore.
            State-of-the-art equipment and professional guidance to achieve your fitness goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <CallToAction size="lg" />
            <Link to="/branches">
              <button className="bg-transparent border-2 border-panther-gold text-panther-gold hover:bg-panther-gold/10 font-semibold transition-colors px-8 py-3 rounded-md flex items-center">
                Explore Branches <ArrowRight size={20} className="ml-2" />
              </button>
            </Link>
          </div>
          
          <div className="mt-10 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-4 sm:pb-0">
            <Link to="/branches" className="group">
              <div className="bg-black/70 border border-panther-gold/30 p-3 sm:p-6 rounded-lg hover:border-panther-gold transition-all h-full">
                <h3 className="text-base sm:text-xl font-bold mb-1 group-hover:text-panther-gold transition-colors">Andrahalli Branch 1</h3>
                <p className="text-gray-400 mb-2 text-xs sm:text-base">Near D Group Arch 60ft Road, CSV Complex</p>
                <p className="text-panther-gold inline-flex items-center text-xs sm:text-base">
                  View Details <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
            
            <Link to="/branches" className="group">
              <div className="bg-black/70 border border-panther-gold/30 p-3 sm:p-6 rounded-lg hover:border-panther-gold transition-all h-full">
                <h3 className="text-base sm:text-xl font-bold mb-1 group-hover:text-panther-gold transition-colors">Andrahalli Branch 2</h3>
                <p className="text-gray-400 mb-2 text-xs sm:text-base">MD Complex, Doddanna Layout</p>
                <p className="text-panther-gold inline-flex items-center text-xs sm:text-base">
                  View Details <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
            
            <Link to="/branches" className="group">
              <div className="bg-black/70 border border-panther-gold/30 p-3 sm:p-6 rounded-lg hover:border-panther-gold transition-all h-full">
                <h3 className="text-base sm:text-xl font-bold mb-1 group-hover:text-panther-gold transition-colors">Mallathahalli Branch</h3>
                <p className="text-gray-400 mb-2 text-xs sm:text-base">Near HP petrol bunk, Mallathahalli main road</p>
                <p className="text-panther-gold inline-flex items-center text-xs sm:text-base">
                  View Details <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
