import React from 'react';
import { Calendar, Utensils, Sparkles, CarFront, MapPin, Route } from 'lucide-react';

interface AmenityProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const AmenityCard: React.FC<AmenityProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="text-hotel-gold mb-4">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-hotel-light-gray rounded-full">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-playfair font-medium mb-2 text-hotel-navy">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Amenities: React.FC = () => {

  const amenities = [
    {
      icon: <Route size={24} className="text-hotel-navy" />,
      title: 'Travel Plan',
      description:
        'Let us curate your perfect itinerary with personalized travel plans for an unforgettable stay.'
    },
    {
      icon: <Utensils size={24} className="text-hotel-navy" />,
      title: 'Meals & Snacks',
      description:
        'Enjoy a variety of delicious meals and snacks, thoughtfully prepared to satisfy your cravings throughout the day.'
    },
    {
      icon: <Sparkles size={24} className="text-hotel-navy" />,
      title: 'Room Service',
      description:
        'Enjoy 24/7 room service for any emergency or requirement, with meals and snacks delivered during kitchen hours.'
    },
    {
      icon: <Calendar size={24} className="text-hotel-navy" />,
      title: 'Event Planning',
      description:
        'Host your special occasions with us, and let our expert event planners make your celebrations extraordinary.'
    },
    {
      icon: <CarFront size={24} className="text-hotel-navy" />,
      title: 'Hire Driver',
      description:
        'Travel in comfort and style with our reliable driver hire services, offering seamless transportation.'
    },
    {
      icon: <MapPin size={24} className="text-hotel-navy" />,
      title: 'Local Attractions',
      description:
        'Explore the vibrant surroundings with our curated recommendations for local attractions and activities, making your stay even more enjoyable.'
    }
  ];

  return (
    <section id="amenities" className="section bg-white">
      <div className="container-custom">

        <h2 className="section-title text-center">
          <span className="gold-underline">What</span> We Do
        </h2>

        <p className="section-subtitle text-center">
          Discover our services designed to make your stay comfortable,
          convenient, and memorable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {amenities.map((amenity, index) => (
            <AmenityCard
              key={index}
              icon={amenity.icon}
              title={amenity.title}
              description={amenity.description}
            />
          ))}
        </div>

        {/* Transport Section */}
        <div className="mt-16 bg-hotel-navy rounded-lg overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">

            <div className="md:w-1/2 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-playfair text-white mb-4">
                Travel & Transport Assistance
              </h3>

              <p className="text-gray-300 mb-6">
                We ensure smooth and comfortable travel for our guests by
                offering reliable transport arrangements and local travel
                guidance throughout your stay.
              </p>

              <ul className="space-y-2 mb-8">

                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Local Sightseeing Arrangements
                </li>

                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Private Driver on Request
                </li>

                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Cab & Taxi Booking Assistance
                </li>

                <li className="flex items-center text-white">
                  <svg className="w-5 h-5 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                  </svg>
                  Parking Facility for Guests
                </li>

              </ul>

              <button className="btn-secondary">
                Contact Reception
              </button>
            </div>

            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64"
                alt="Travel Assistance"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Amenities;