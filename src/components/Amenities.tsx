import React, { useState } from 'react';
import {
  Calendar,
  Utensils,
  Sparkles,
  CarFront,
  MapPin,
  Route,
  Phone,
  Mail,
  MessageCircle
} from 'lucide-react';

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
  const [openForm, setOpenForm] = useState(false);

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
        'Enjoy a variety of delicious meals and snacks prepared to satisfy your cravings.'
    },
    {
      icon: <Sparkles size={24} className="text-hotel-navy" />,
      title: 'Room Service',
      description:
        'Enjoy room service support for guest needs and meal delivery during kitchen hours.'
    },
    {
      icon: <Calendar size={24} className="text-hotel-navy" />,
      title: 'Event Planning',
      description:
        'Host your special occasions with us and let our team assist in planning memorable events.'
    },
    {
      icon: <CarFront size={24} className="text-hotel-navy" />,
      title: 'Hire Driver',
      description:
        'Travel comfortably with our reliable driver and transportation services.'
    },
    {
      icon: <MapPin size={24} className="text-hotel-navy" />,
      title: 'Local Attractions',
      description:
        'Explore nearby attractions and activities with our helpful local recommendations.'
    }
  ];

  return (
    <section id="amenities" className="section bg-white">
      <div className="container-custom">

        {/* Section Title */}
        <h2 className="section-title text-center">
          <span className="gold-underline">What</span> We Do
        </h2>

        <p className="section-subtitle text-center">
          Discover our services designed to make your stay comfortable,
          convenient and memorable.
        </p>

        {/* Service Cards */}
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

        {/* Travel Section */}
        <div className="mt-16 bg-hotel-navy rounded-lg overflow-hidden shadow-xl">
          <div className="flex flex-col md:flex-row">

            <div className="md:w-1/2 p-8 md:p-12">

              <h3 className="text-2xl md:text-3xl font-playfair text-white mb-4">
                Shree Tours & Travels
              </h3>

              <p className="text-gray-300 mb-6">
                We ensure smooth travel for our guests by providing transport
                assistance and travel guidance during your stay.
              </p>

              <ul className="space-y-2 mb-8 text-white">
                <li>✓ Local Sightseeing Arrangements</li>
                <li>✓ Private Driver on Request</li>
                <li>✓ Cab & Taxi Booking Assistance</li>
                <li>✓ Parking Facility for Guests</li>
              </ul>

              <button
                className="btn-secondary"
                onClick={() => setOpenForm(true)}
              >
                Contact Reception
              </button>
            </div>

            <div className="md:w-1/2">
              <img
                src="/car_logo.png"
                alt="Travel Assistance"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>

      </div>

      {/* Contact Modal */}
      {openForm && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
          onClick={() => setOpenForm(false)}
        >
          <div
            className="bg-white p-6 rounded-lg w-full max-w-sm relative shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
              onClick={() => setOpenForm(false)}
            >
              ✕
            </button>

            <h3 className="text-lg font-semibold mb-3">
              Contact Reception
            </h3>

            <p className="text-sm text-gray-600 mb-5">
              Need assistance with bookings, meals, or travel plans? Contact our
              reception directly.
            </p>

            <div className="space-y-4">

              {/* Phone */}
              <div className="border rounded-md p-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <p className="text-sm text-gray-600">+919503961506</p>
                </div>

                <a
                  href="tel:+919876543210"
                  className="bg-hotel-gold text-white p-2 rounded-md hover:bg-yellow-600 transition"
                >
                  <Phone size={18} />
                </a>
              </div>

              {/* Email */}
              <div className="border rounded-md p-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-sm text-gray-600 break-all">
                    info@harshaliresidency.com
                  </p>
                </div>

                <a
                  href="mailto:info@harshaliresidency.com"
                  className="bg-hotel-navy text-white p-2 rounded-md hover:bg-blue-900 transition"
                >
                  <Mail size={18} />
                </a>
              </div>

              {/* WhatsApp */}
              <div className="border rounded-md p-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium">WhatsApp</p>
                  <p className="text-sm text-gray-600">
                    Chat with Reception
                  </p>
                </div>

                <a
                  href="https://wa.me/+919503961506?text=Hello%2C%20I%20would%20like%20assistance%20with%20travel%20and%20transport%20services%20at%20Harshali%20Residency.%20Please%20share%20details."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white p-2 rounded-md hover:bg-green-600 transition"
                >
                  <MessageCircle size={18} />
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default Amenities;