
import React from 'react';
import { Button } from '@/components/ui/button';

const About: React.FC = () => {
  return (
    <section id="about" className="section bg-white">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Image Column */}
          <div className="md:w-1/2 overflow-hidden rounded-lg">
            <div className="relative aspect-[4/3]">
              <img 
                src="/about_image.png"
                alt="Hotel Lobby" 
                className="object-cover w-full h-full rounded-lg shadow-lg transform transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
          
          {/* Content Column */}
          <div className="md:w-1/2">
            <h2 className="section-title">
              <span className="gold-underline">About</span> Hotel Harshali Residency
            </h2>
            <p className="text-gray-600 mb-6">
              Discover luxury and comfort at Hotel Harshali Residency, just steps away from the excitement of Imagica. We offer a perfect blend of elegance and convenience, ensuring a memorable stay for every traveler.
            </p>
            <p className="text-gray-600 mb-6">
              Whether you're here for adventure or relaxation, our top-notch amenities and exceptional service have you covered. Book your stay today and experience the best of both worlds!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="border-l-4 border-hotel-gold pl-4">
                <p className="text-3xl font-playfair text-hotel-navy">50+</p>
                <p className="text-gray-500">Luxury Rooms</p>
              </div>
              <div className="border-l-4 border-hotel-gold pl-4">
                <p className="text-3xl font-playfair text-hotel-navy">7+</p>
                <p className="text-gray-500">Years of Excellence</p>
              </div>
              <div className="border-l-4 border-hotel-gold pl-4">
                <p className="text-3xl font-playfair text-hotel-navy">24/7</p>
                <p className="text-gray-500">Customer Service</p>
              </div>
            </div>
           {/* <Button className="btn-outline">Learn More</Button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
