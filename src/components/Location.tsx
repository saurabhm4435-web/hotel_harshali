import React from 'react';
import { Button } from '@/components/ui/button';
import { MapPin } from 'lucide-react';

const Location: React.FC = () => {
  return (
    <section id="location" className="section bg-hotel-light-gray">
      <div className="container-custom">
        <h2 className="section-title text-center">
          <span className="gold-underline">Our</span> Location
        </h2>

        <p className="section-subtitle text-center">
          Conveniently located near Imagica Theme Park in Khopoli, offering easy access
          to major tourist attractions, highways, and travel routes between Mumbai and Pune.
        </p>

        <div className="flex flex-col lg:flex-row gap-12 mt-12">

          <div className="lg:w-1/2">
            <div className="bg-white p-6 rounded-lg shadow-md h-full">

              <h3 className="text-2xl font-playfair font-medium mb-4 text-hotel-navy">
                Perfect Location for Travelers
              </h3>

              <p className="text-gray-600 mb-6">
                  Hotel Harshali Residency is located near Imagica Theme Park in Khopoli,
  making it a convenient stay for tourists and travelers between Mumbai
  and Pune while offering a comfortable and peaceful environment.
              </p>

              <div className="space-y-4 mb-8">

                <div className="flex items-start">
                  <MapPin className="text-hotel-gold mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">
                      Hotel Harshali Residency, Near Imagica Theme Park,
                      Khopoli, Maharashtra, India
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 sm:gap-12">

                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-hotel-gold rounded-full mr-2"></div>
                    <div>
                      <p className="font-medium">Imagica Theme Park</p>
                      <p className="text-gray-600">5 min drive</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-hotel-gold rounded-full mr-2"></div>
                    <div>
                      <p className="font-medium">Khopoli Railway Station</p>
                      <p className="text-gray-600">15 min drive</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-hotel-gold rounded-full mr-2"></div>
                    <div>
                      <p className="font-medium">Mumbai–Pune Expressway</p>
                      <p className="text-gray-600">10 min drive</p>
                    </div>
                  </div>

                </div>
              </div>

              <h4 className="font-medium text-xl mb-2">Nearby Attractions:</h4>

              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-6">

                <li className="flex items-center">
                  <svg className="w-4 h-4 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Imagica Theme Park (2 km)
                </li>

                <li className="flex items-center">
                  <svg className="w-4 h-4 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Imagica Water Park (2 km)
                </li>

                <li className="flex items-center">
                  <svg className="w-4 h-4 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Imagica Snow Park (2 km)
                </li>

                <li className="flex items-center">
                  <svg className="w-4 h-4 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Lonavala Hill Station (25 km)
                </li>

              </ul>

              <Button
                className="btn-primary"
                onClick={() =>
                  window.open(
                    "https://maps.google.com/?q=Hotel Harshali Residency Khopoli",
                    "_blank"
                  )
                }
              >
                Get Directions
              </Button>

            </div>
          </div>


          <div className="lg:w-1/2">
            <div className="rounded-lg overflow-hidden shadow-lg h-full">

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3777.734360074494!2d73.28182167515163!3d18.765398882376296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be8077e06e8250f%3A0x19101347c7279742!2sHotel%20Harshali%20Residency%2C%20Khopoli%20(Nr.%20Imagica)!5e0!3m2!1sen!2sin!4v1773248631629!5m2!1sen!2sin"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                title="Hotel Harshali Residency Location"
              ></iframe>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Location;