
import React from 'react';
import { Button } from '@/components/ui/button';

const Hero: React.FC = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Hero Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: "url('/hero_11.png')", 
          filter: 'brightness(0.8)'
          //
        }}
      ></div>
      
      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-playfair mb-4">
            Discover Luxury<br />at Harshali Residency
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Experience comfort and peaceful surroundings at Harshali Residency, where every stay feels welcoming.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="btn-secondary text-lg px-8 py-6">Book Now</Button>
            <Button variant="outline" className="bg-transparent border-2 border-white text-white hover:bg-hotel-gold hover:border-hotel-gold hover:text-hotel-navy transition-all duration-300 text-lg px-8 py-6">
              Explore Rooms
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-8 w-8 text-white" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;

