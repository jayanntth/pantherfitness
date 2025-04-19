
import { ArrowRight, Dumbbell, Award, Clock, MapPin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import HeroSection from '@/components/HeroSection';
import CallToAction from '@/components/CallToAction';
import EquipmentCard from '@/components/EquipmentCard';
import ServiceCard from '@/components/ServiceCard';
import FitnessOptionCard from '@/components/FitnessOptionCard';
import TestimonialVideos from '@/components/TestimonialVideos';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <HeroSection />
        
        {/* Spacing to ensure hero section location cards are visible on mobile */}
        <div className="h-24 md:hidden"></div>
        
        {/* About Section Preview */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Welcome to <span className="text-panther-gold">Panther Fitness</span></h2>
                <p className="text-gray-300 mb-6">
                  At Panther Fitness, we are dedicated to helping you achieve your fitness goals with our state-of-the-art facilities and expert guidance. Whether you're looking to build muscle, lose weight, or simply stay active, our welcoming community and professional trainers are here to support you every step of the way.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <Award className="text-panther-gold mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Certified Trainers</h3>
                      <p className="text-sm text-gray-400">Professional guidance</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Dumbbell className="text-panther-gold mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Premium Equipment</h3>
                      <p className="text-sm text-gray-400">State-of-the-art machines</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-panther-gold mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Flexible Hours</h3>
                      <p className="text-sm text-gray-400">Open 5 AM to 10:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="text-panther-gold mr-3 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Two Locations</h3>
                      <p className="text-sm text-gray-400">Convenient access</p>
                    </div>
                  </div>
                </div>
                <Link to="/about">
                  <button className="text-panther-gold flex items-center font-semibold hover:underline">
                    Learn more about us <ArrowRight size={16} className="ml-2" />
                  </button>
                </Link>
              </div>
              <div className="md:w-1/2">
                <div className="relative">
                  <img 
                    src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Gym Interior" 
                    className="rounded-lg shadow-lg w-full"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-panther-gold text-black p-4 rounded-lg shadow-lg">
                    <p className="font-bold text-lg">Two Premium Locations</p>
                    <p>Andrahalli & Mallathahalli</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonial Videos Section */}
        <TestimonialVideos />
        
        {/* Equipment Preview */}
        <section className="section-padding bg-gray-950">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Premium <span className="text-panther-gold">Equipment</span></h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Our gyms are equipped with top-of-the-line fitness machines and equipment to ensure you get the most effective workout experience.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <EquipmentCard name="Treadmill" icon={Dumbbell} />
              <EquipmentCard name="Bench Press" icon={Dumbbell} />
              <EquipmentCard name="Smith Machine" icon={Dumbbell} />
              <EquipmentCard name="Cable Machine" icon={Dumbbell} />
              <EquipmentCard name="Dumbbells" icon={Dumbbell} />
            </div>
            
            <div className="text-center mt-8">
              <Link to="/equipment">
                <button className="text-panther-gold flex items-center font-semibold hover:underline mx-auto">
                  See all equipment <ArrowRight size={16} className="ml-2" />
                </button>
              </Link>
            </div>
          </div>
        </section>
        
        {/* Services & Amenities Preview */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our <span className="text-panther-gold">Services</span></h2>
                <div className="space-y-4">
                  <ServiceCard name="Personal Training" />
                  <ServiceCard name="Weight Loss Program" />
                  <ServiceCard name="Weight Gain Program" />
                  <ServiceCard name="Group Classes" />
                </div>
                <Link to="/services">
                  <button className="text-panther-gold flex items-center font-semibold hover:underline mt-6">
                    View all services <ArrowRight size={16} className="ml-2" />
                  </button>
                </Link>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6">Fitness <span className="text-panther-gold">Options</span></h2>
                <div className="grid grid-cols-2 gap-4">
                  <FitnessOptionCard name="Functional Training" />
                  <FitnessOptionCard name="Body Building" />
                  <FitnessOptionCard name="Crossfit" />
                  <FitnessOptionCard name="Zumba" />
                </div>
                <Link to="/services">
                  <button className="text-panther-gold flex items-center font-semibold hover:underline mt-6">
                    Explore all options <ArrowRight size={16} className="ml-2" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-gray-950">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Fitness Journey?</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Contact us today to learn more about our membership options and start transforming your body with Panther Fitness.
            </p>
            <div className="flex justify-center">
              <CallToAction size="lg" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
