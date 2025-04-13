
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceCard from '@/components/ServiceCard';
import FitnessOptionCard from '@/components/FitnessOptionCard';
import CallToAction from '@/components/CallToAction';
import { ArrowRight } from 'lucide-react';

const Services = () => {
  // Service Lists
  const services = [
    "Certified Trainers", "Membership Required", "Personal Training", 
    "Strengthening Exercises", "Group Classes", "Personal Trainers", 
    "Get Your Own Trainer", "Weight Gain Program", "Weight Loss"
  ];
  
  const fitnessOptions = [
    "Functional Training", "Gym", "Body Building", "Aerobics", 
    "Cross Functional Training", "Crossfit", "Zumba"
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gray-950">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" 
               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)' }}>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our <span className="text-panther-gold">Services</span></h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover the wide range of services and fitness options we offer to help you achieve your goals.
              </p>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-8">Professional <span className="text-panther-gold">Services</span></h2>
                
                <div className="space-y-4">
                  {services.map((service) => (
                    <ServiceCard key={service} name={service} />
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="Personal Training" 
                  className="w-full h-96 object-cover rounded-lg shadow-lg"
                />
                
                <div className="mt-8 bg-gray-900 border border-panther-gold/20 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Personal Training Benefits</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-panther-gold mt-1 mr-2" />
                      <span className="text-gray-300">Customized workout plans tailored to your specific goals</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-panther-gold mt-1 mr-2" />
                      <span className="text-gray-300">Proper technique instruction to maximize results and prevent injury</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-panther-gold mt-1 mr-2" />
                      <span className="text-gray-300">Consistent motivation and accountability</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-panther-gold mt-1 mr-2" />
                      <span className="text-gray-300">Nutritional guidance to complement your training</span>
                    </li>
                    <li className="flex items-start">
                      <ArrowRight size={16} className="text-panther-gold mt-1 mr-2" />
                      <span className="text-gray-300">Faster progress towards your fitness goals</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Fitness Options */}
        <section className="section-padding bg-gray-950">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Fitness <span className="text-panther-gold">Options</span></h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {fitnessOptions.map((option) => (
                <FitnessOptionCard key={option} name={option} />
              ))}
            </div>
            
            <div className="mt-16 max-w-4xl mx-auto bg-black border border-panther-gold/30 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Find the Perfect Program for You</h3>
              <p className="text-gray-300 text-center mb-8">
                Our diverse range of fitness options ensures that you'll find the perfect program to match your interests and goals. Whether you're looking to build muscle, lose weight, or improve overall fitness, our expert trainers will guide you to the right choice.
              </p>
              <div className="flex justify-center">
                <CallToAction size="lg" />
              </div>
            </div>
          </div>
        </section>
        
        {/* Weight Programs */}
        <section className="section-padding">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Specialized <span className="text-panther-gold">Programs</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1532384748853-8f54a8f476e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Weight Loss Program" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Weight Loss Program</h3>
                  <p className="text-gray-300 mb-6">
                    Our weight loss program combines cardio workouts, strength training, and nutritional guidance to help you shed unwanted pounds and achieve a healthier body composition. Our trainers will monitor your progress and adjust your program as needed to ensure optimal results.
                  </p>
                  <CallToAction size="md" />
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                    alt="Weight Gain Program" 
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4">Weight Gain Program</h3>
                  <p className="text-gray-300 mb-6">
                    Our weight gain program focuses on progressive resistance training and increased caloric intake to help you build lean muscle mass and achieve a stronger, more defined physique. Our trainers will guide you through effective exercises and provide nutritional recommendations.
                  </p>
                  <CallToAction size="md" />
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

export default Services;
