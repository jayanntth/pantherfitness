import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BranchSelector, { Branch } from '@/components/BranchSelector';
import Map from '@/components/Map';
import CallToAction from '@/components/CallToAction';
import BranchPhotoCarousel from '@/components/BranchPhotoCarousel';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';

const Branches = () => {
  const [selectedBranch, setSelectedBranch] = useState<Branch>('andrahalli1');
  
  const branchPhotos = {
    andrahalli1: [
      {
        title: "New Branch Image 1",
        url: "/lovable-uploads/branch1_1.jpg"
      },
      {
        title: "New Branch Image 2",
        url: "/lovable-uploads/branch1_2.jpg"
      },
      // Add more images as needed
    ],
    andrahalli2: [
      {
        title: "Gym Floor Area",
        url: "/lovable-uploads/7925377f-ee30-450a-bb61-f2bc97d0be26.png"
      },
      {
        title: "Gym Exterior",
        url: "/lovable-uploads/1307c593-0449-42d7-86de-997a47a91d6b.png"
      },
      {
        title: "Training Zone",
        url: "/lovable-uploads/ff7f37fe-7273-4aba-8aa6-2950629577fd.png"
      },
      {
        title: "Fitness Equipment Zone",
        url: "/lovable-uploads/7b2ac2a3-84cd-47ce-9d38-37cbde38c841.png"
      },
      {
        title: "Free Weights Area",
        url: "/lovable-uploads/5d22a5f4-9f66-4b5e-870e-07f511984d82.png"
      }
    ],
    mallathahalli: [
      {
        title: "Cardio Area",
        url: "/lovable-uploads/09accc2e-2ac2-4474-a8ac-5e90520e3d8b.png"
      },
      {
        title: "Weight Training Area",
        url: "/lovable-uploads/097b0e26-b824-4eb9-bc22-10f0ddb05d3c.png"
      },
      {
        title: "Free Weights Section",
        url: "/lovable-uploads/c0a130cc-b080-4fc8-91fc-b08ad04554e7.png"
      },
      {
        title: "Fitness Equipment",
        url: "/lovable-uploads/80702b36-4f80-4680-abe1-14c79e67cda9.png"
      },
      {
        title: "Training Area",
        url: "/lovable-uploads/25325965-2804-4bf5-bf3a-bcb131799d56.png"
      },
      {
        title: "Cardio Machines",
        url: "/lovable-uploads/e1ceee91-a934-4ff1-a639-c6f6763f4f94.png"
      },
      {
        title: "Weight Training Zone",
        url: "/lovable-uploads/99c3495c-b647-47e7-bc7b-61f16081dbaa.png"
      },
      {
        title: "Reception Area",
        url: "/lovable-uploads/1358aa13-632a-427e-a598-a46bf2b7178a.png"
      }
    ]
  };
  
  const branchInfo = {
    andrahalli1: {
      name: 'Andrahalli Branch 1',
      address: '#3 & 5, CSV Complex, \'D\' Group Layout, Near \'D\' Group Arch, 60Ft Road, Andrahalli Main Road, Vishvaneedam Post, Bangalore-560091',
      landmarks: 'Near D Group Arch 60ft Road',
      hours: 'Monday-Saturday: 5:00 AM - 10:30 PM\nSunday: 7:00 AM - 7:30 PM',
      contact: '9731238384',
      mapUrl: 'https://g.co/kgs/4Jypxtw',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80'
    },
    andrahalli2: {
      name: 'Andrahalli Branch 2',
      address: '#38 2nd/3rd floor MD Complex, Doddanna Layout Andrahalli Main Road, Bangalore-560091',
      landmarks: 'Near Doddanna Layout',
      hours: 'Monday-Saturday: 5:00 AM - 10:30 PM\nSunday: 7:00 AM - 7:30 PM',
      contact: '9071912321',
      mapUrl: 'https://g.co/kgs/YbX2oNH',
      image: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1644&q=80'
    },
    mallathahalli: {
      name: 'Mallathahalli Branch',
      address: '#11 & 12, 1st & 2nd Floor, Gidadakonenahalli, Mallathahalli main road, near HP petrol bunk, Bangalore - 560091',
      landmarks: 'Near HP petrol bunk',
      hours: 'Monday-Saturday: 5:00 AM - 10:30 PM\nSunday: 7:00 AM - 7:30 PM',
      contact: '9731238283',
      mapUrl: 'https://www.google.com/maps?q=Panther+Fitness+Mallathahalli,+Bangalore',
      image: 'https://images.unsplash.com/photo-1571388208497-71bedc66e932?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1644&q=80'
    }
  };
  
  const currentBranch = branchInfo[selectedBranch];
  const currentBranchPhotos = branchPhotos[selectedBranch];

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
          <div className="container mx-auto px-4">
            <BranchSelector 
              selectedBranch={selectedBranch} 
              onBranchChange={setSelectedBranch} 
            />
            
            <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                {currentBranchPhotos && currentBranchPhotos.length > 0 ? (
                  <BranchPhotoCarousel photos={currentBranchPhotos} />
                ) : (
                  <img 
                    src={currentBranch.image} 
                    alt={currentBranch.name} 
                    className="w-full h-96 object-cover rounded-lg shadow-lg"
                  />
                )}
                
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
                      <a 
                        href={currentBranch.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-panther-gold hover:text-panther-gold/80 transition-colors mt-2"
                      >
                        <ExternalLink size={16} className="mr-1" />
                        <span>View on Google Maps</span>
                      </a>
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
                <h3 className="text-2xl font-bold mb-6">About this Branch</h3>
                <div className="bg-gray-900 p-6 rounded-lg">
                  <p className="text-gray-300 mb-4">
                    Our {currentBranch.name} is fully equipped with state-of-the-art fitness machines and staffed by professional trainers to help you achieve your fitness goals.
                  </p>
                  <p className="text-gray-300 mb-4">
                    Whether you're looking to build muscle, lose weight, or simply maintain your fitness, our facilities are designed to cater to all your needs.
                  </p>
                  <p className="text-gray-300">
                    Visit us today and experience the Panther Fitness difference!
                  </p>
                </div>
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
