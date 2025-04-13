
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import EquipmentCard from '@/components/EquipmentCard';
import AmenityCard from '@/components/AmenityCard';
import { Dumbbell } from 'lucide-react';
import CallToAction from '@/components/CallToAction';

const Equipment = () => {
  // Equipment Lists
  const strengthEquipment = [
    "Calf Machine", "Handgrip Exerciser", "Leg Extension Machine", "Power Rack", 
    "Smith Machine", "Fixie Bike", "Inclined Bench Press", "Leg Press Machine", 
    "Preacher Bench", "Stretching Machine", "Inversion Table", "Pull Up Bar", 
    "Suspension Trainer", "Ankle weights", "The Roman Chair", "Battle Ropes", 
    "Kettlebell Training", "Pec Deck Machine", "Bench Press", "Lat Pulldown Machine", 
    "Reverse Hyper", "Tricep Bars", "Ab Coaster", "Dip station", "Hack Squat Machine", 
    "Leg Adduction Abduction Machine", "Abdominal Bench", "Cable Pulley Machine", 
    "Dumbbells", "Hammer Strength Machine", "Leg Curl Machine", "Plyo Boxes"
  ];
  
  const cardioEquipment = [
    "Mountain Bike", "Vibration Plate", "Air resistance Exercise Bike", "Spin Bike", 
    "Maxi Climber", "Recumbent Bike", "Stair Stepper", "Stationary Bike", 
    "Treadmill", "Cruiser Bike", "Mini Exercise Bikes", "Mini-Trampoline", "Road Bike"
  ];
  
  const amenities = [
    "Snack Bar", "Mobile Charging Point", "Stretching Area", 
    "Wheel Chair Accessible Entrance And Exit", "Resistance Machines", 
    "Steam Room", "Air Conditioned", "Changing Room", "Locker Facility", 
    "Parking Available", "Steam Bath Facilities", "Security"
  ];
  
  const entertainment = ["Music", "TV"];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gray-950">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" 
               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80)' }}>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Equipment & <span className="text-panther-gold">Facilities</span></h1>
              <p className="text-xl text-gray-300 mb-8">
                Discover our comprehensive range of state-of-the-art equipment and premium facilities.
              </p>
            </div>
          </div>
        </section>
        
        {/* Strength Equipment */}
        <section className="section-padding">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12">Strength Training <span className="text-panther-gold">Equipment</span></h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
              {strengthEquipment.map((item) => (
                <EquipmentCard key={item} name={item} icon={Dumbbell} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Cardio Equipment */}
        <section className="section-padding bg-gray-950">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12">Cardio <span className="text-panther-gold">Equipment</span></h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-8">
              {cardioEquipment.map((item) => (
                <EquipmentCard key={item} name={item} icon={Dumbbell} />
              ))}
            </div>
          </div>
        </section>
        
        {/* Amenities */}
        <section className="section-padding">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12">Premium <span className="text-panther-gold">Amenities</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
              {amenities.map((item) => (
                <AmenityCard key={item} name={item} />
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mb-6">Entertainment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {entertainment.map((item) => (
                <AmenityCard key={item} name={item} />
              ))}
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-gray-950">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience Our Premium Facilities</h2>
            <p className="text-gray-300 mb-8 text-lg">
              Contact us today to learn more about our membership options and start your fitness journey with Panther Fitness.
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

export default Equipment;
