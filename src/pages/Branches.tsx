
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BranchSelector, { Branch } from '@/components/BranchSelector';
import Map from '@/components/Map';
import CallToAction from '@/components/CallToAction';
import { MapPin, Clock, Phone } from 'lucide-react';

const Branches = () => {
  const [selectedBranch, setSelectedBranch] = useState<Branch>('andrahalli');
  
  const branchInfo = {
    andrahalli: {
      name: 'Andrahalli Branch',
      address: 'CSV Complex, D Group Layout, Andrahalli, Bangalore - 560091',
      landmarks: 'Near D Group Arch 60ft Road, Opposite Water Tank',
      hours: 'Monday-Saturday: 5:00 AM - 10:30 PM\nSunday: 7:00 AM - 7:30 PM',
      contact: '9900412321',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0376819053347!2d77.5072093!3d13.032952799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3c936b66e163%3A0xb8ee5557c6d4ee8a!2sPanther%20Fitness!5e0!3m2!1sen!2sin!4v1713215789584!5m2!1sen!2sin',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    mallathahalli: {
      name: 'Mallathahalli Branch',
      address: '#11 & 12, 1st & 2nd Floor, Gidadakonenahalli, Mallathahalli main road, near HP petrol bunk, Bangalore, India 560091',
      landmarks: 'Near HP petrol bunk',
      hours: 'Monday-Saturday: 5:00 AM - 10:30 PM\nSunday: 7:00 AM - 7:30 PM',
      contact: '9900412321',
      mapSrc: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9360690225935!2d77.4935663!3d12.9679953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3e6e9f9a8e7d%3A0x9f9810531122558d!2sPanther%20Fitness%20-%20Mallathahalli!5e0!3m2!1sen!2sin!4v1713215945618!5m2!1sen!2sin',
      image: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1644&q=80'
    }
  };
  
  const currentBranch = branchInfo[selectedBranch];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gray-950">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" 
               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1590487988256-9ed24133863e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1428&q=80)' }}>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-panther-gold">Branches</span></h1>
              <p className="text-xl text-gray-300 mb-8">
                Visit one of our two conveniently located facilities in Bangalore.
              </p>
            </div>
          </div>
        </section>
        
        {/* Branch Selector */}
        <section className="section-padding">
          <div className="container mx-auto">
            <BranchSelector 
              selectedBranch={selectedBranch} 
              onBranchChange={setSelectedBranch} 
            />
            
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <img 
                  src={currentBranch.image} 
                  alt={currentBranch.name} 
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                
                <div className="mt-8 space-y-4">
                  <h2 className="text-3xl font-bold">{currentBranch.name}</h2>
                  
                  <div className="flex items-start">
                    <MapPin size={24} className="text-panther-gold mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Address</h3>
                      <p className="text-gray-300">{currentBranch.address}</p>
                      {currentBranch.landmarks && (
                        <p className="text-panther-gold mt-1">{currentBranch.landmarks}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={24} className="text-panther-gold mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Operating Hours</h3>
                      <p className="text-gray-300 whitespace-pre-line">{currentBranch.hours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone size={24} className="text-panther-gold mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-xl mb-2">Contact</h3>
                      <a href={`tel:${currentBranch.contact}`} className="text-gray-300 hover:text-panther-gold transition-colors">
                        {currentBranch.contact}
                      </a>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <CallToAction size="lg" />
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Location Map</h3>
                <Map src={currentBranch.mapSrc} title={`${currentBranch.name} Map`} />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Branches;
