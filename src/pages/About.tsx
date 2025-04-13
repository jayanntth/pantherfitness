
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CallToAction from '@/components/CallToAction';
import { Award, Users, Target, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-gray-950">
          <div className="absolute inset-0 bg-cover bg-center opacity-20" 
               style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1534258936925-c58bed479fcb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1931&q=80)' }}>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">About <span className="text-panther-gold">Panther Fitness</span></h1>
              <p className="text-xl text-gray-300 mb-8">
                We are dedicated to helping you achieve your fitness goals with state-of-the-art facilities and expert guidance.
              </p>
            </div>
          </div>
        </section>
        
        {/* Mission & Vision */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6 text-panther-gold">Our Mission</h2>
                <p className="text-gray-300 mb-6">
                  At Panther Fitness, our mission is to provide a welcoming, state-of-the-art fitness environment where people of all fitness levels can achieve their personal goals with the support of knowledgeable staff and a community of like-minded individuals.
                </p>
                <p className="text-gray-300">
                  We are committed to offering the highest quality equipment, professional guidance, and a motivating atmosphere that empowers our members to transform their lives through fitness.
                </p>
              </div>
              
              <div>
                <h2 className="text-3xl font-bold mb-6 text-panther-gold">Our Vision</h2>
                <p className="text-gray-300 mb-6">
                  We envision being the leading fitness destination in Bangalore, recognized for our exceptional facilities, personalized approach to fitness, and the positive impact we make on our members' lives.
                </p>
                <p className="text-gray-300">
                  We aim to continually expand our reach, allowing more people to experience the transformational power of fitness in a supportive and empowering environment.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Why Choose Us */}
        <section className="section-padding bg-gray-950">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Choose <span className="text-panther-gold">Panther Fitness</span></h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-gray-900 p-8 rounded-lg border border-panther-gold/20 hover:border-panther-gold/70 transition-all">
                <Award className="w-12 h-12 text-panther-gold mb-6" />
                <h3 className="text-xl font-bold mb-4">Professional Trainers</h3>
                <p className="text-gray-300">
                  Our certified trainers provide expert guidance to help you achieve your fitness goals safely and effectively.
                </p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg border border-panther-gold/20 hover:border-panther-gold/70 transition-all">
                <Shield className="w-12 h-12 text-panther-gold mb-6" />
                <h3 className="text-xl font-bold mb-4">Premium Equipment</h3>
                <p className="text-gray-300">
                  Access to a wide range of state-of-the-art fitness equipment for all your training needs.
                </p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg border border-panther-gold/20 hover:border-panther-gold/70 transition-all">
                <Target className="w-12 h-12 text-panther-gold mb-6" />
                <h3 className="text-xl font-bold mb-4">Personalized Programs</h3>
                <p className="text-gray-300">
                  Tailored fitness programs designed to meet your specific goals, whether it's weight loss, muscle gain, or overall fitness.
                </p>
              </div>
              
              <div className="bg-gray-900 p-8 rounded-lg border border-panther-gold/20 hover:border-panther-gold/70 transition-all">
                <Users className="w-12 h-12 text-panther-gold mb-6" />
                <h3 className="text-xl font-bold mb-4">Supportive Community</h3>
                <p className="text-gray-300">
                  Be part of a motivating community that supports and encourages you throughout your fitness journey.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="section-padding">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                  alt="Panther Fitness Gym" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              
              <div className="md:w-1/2">
                <h2 className="text-3xl font-bold mb-6">Our <span className="text-panther-gold">Story</span></h2>
                <p className="text-gray-300 mb-6">
                  Panther Fitness was founded with a passion for fitness and a vision to create a premium gym experience that was accessible to fitness enthusiasts in Bangalore. What started as a single location has now expanded to two state-of-the-art facilities serving the Andrahalli and Mallathahalli communities.
                </p>
                <p className="text-gray-300 mb-6">
                  Our journey has been driven by our commitment to excellence and our dedication to helping our members transform their lives through fitness. We've continuously invested in the latest equipment and training methods to ensure we provide the best possible experience.
                </p>
                <p className="text-gray-300">
                  Today, we're proud to be a trusted fitness partner for hundreds of members who rely on us to support their health and wellness goals. As we continue to grow, our focus remains on maintaining the high standards and personalized approach that have defined Panther Fitness from the beginning.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="section-padding bg-gray-950">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
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

export default About;
