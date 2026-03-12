
import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Footer: React.FC = () => {
  return (
    <footer className="bg-hotel-navy text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* Column 1 - About */}
          <div>
            <h3 className="text-2xl font-playfair mb-4">Experience luxury and comfort at its finest.</h3>
            <p className="mb-6 text-gray-300">At Hotel Harshali Residency, we turn moments into memories.</p>
          </div>

          {/* Column 2 - Contact */}
          <div>
            <h3 className="text-xl font-playfair mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone className="text-hotel-gold flex-shrink-0 mt-1" size={22} />
                <span className="text-gray-300">7030324141 | 8530884277</span>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="text-hotel-gold flex-shrink-0 mt-1" size={22} />
                <span className="text-gray-300">hotelharshaliresidency@gmail.com</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="text-hotel-gold flex-shrink-0 mt-1" size={22} />
                <span className="text-gray-300">Property no-102 Sangadewadi, Opp Imagica theme park , khalapur, Maharashtra 410203</span>
              </div>
            </div>
          </div>

          {/* Column 3 - Newsletter */}
          <div>
            <h3 className="text-xl font-playfair mb-4">New latest</h3>
            <p className="mb-4 text-gray-300">Get the latest updates and offers.</p>
            <form className="flex flex-col sm:flex-row gap-2">
              <Input 
                type="email" 
                placeholder="Email" 
                className="bg-white/10 border-gray-700 text-white placeholder:text-gray-400"
                required
              />
              <Button type="submit" className="bg-hotel-gold hover:bg-opacity-90 text-hotel-navy">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © {new Date().getFullYear()} Hotel Harshali Residency. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
