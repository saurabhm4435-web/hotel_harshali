
import React from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

interface RoomType {
  id: string;
  name: string;
  description: string;
  bed: string;
  capacity: number;
  size: number;
  image: string;
  amenities: string[];
}

const Rooms: React.FC = () => {
  const roomTypes: RoomType[] = [
    {
      id: 'deluxe',
      name: 'Deluxe Room',
      description: 'Spacious room with modern amenities and a beautiful city view.',
      bed: 'King Size Bed',
      capacity: 2,
      size: 35,
      image: '/zz.png',
      amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Flat Screen TV']
    },
    {
      id: 'suite',
      name: 'Executive Suite',
      description: 'Luxury suite with a separate living area and stunning panoramic views.',
      bed: 'King Size Bed',
      capacity: 2,
      size: 60,
      image: '/executive_png.png',
      amenities: ['Free WiFi', 'Air Conditioning', 'Mini Bar', 'Flat Screen TV']
    }
  ];

  return (
    <section id="rooms" className="section bg-hotel-light-gray">
      <div className="container-custom">
        <h2 className="section-title text-center">
          <span className="gold-underline">Rooms</span> & Suites
        </h2>
        <p className="section-subtitle text-center">
          Choose from our selection of exquisitely designed rooms and suites, each offering a unique experience.
        </p>
        
        <Tabs defaultValue="deluxe" className="w-full mt-12">
          <TabsList className="flex flex-wrap justify-center mb-8 bg-transparent">
            {roomTypes.map((room) => (
              <TabsTrigger 
                key={room.id} 
                value={room.id}
                className="px-6 py-3 data-[state=active]:bg-hotel-navy data-[state=active]:text-white"
              >
                {room.name}
              </TabsTrigger>
            ))}
          </TabsList>
          
          {roomTypes.map((room) => (
            <TabsContent key={room.id} value={room.id} className="animate-fade-in">
              <div className="flex flex-col lg:flex-row gap-8 items-stretch">
                <div className="lg:w-2/3">
                  <div className="rounded-lg overflow-hidden shadow-lg">
                    <img 
                      src={room.image} 
                      alt={room.name} 
                      className="w-full h-[300px] md:h-[500px] object-cover" 
                    />
                  </div>
                </div>
                <div className="lg:w-1/3">
                  <Card className="h-full flex flex-col">
                    <CardHeader>
                      <CardTitle className="font-playfair text-2xl">{room.name}</CardTitle>
                      <CardDescription>{room.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between mb-4 font-medium">
                        <div>
                          <p className="text-gray-500">Capacity</p>
                          <p>{room.capacity} Guests</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Size</p>
                          <p>{room.size} m²</p>
                        </div>
                        <div>
                          <p className="text-gray-500">Price</p>
                          <p className="text-hotel-navy">{room.bed}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <p className="font-medium mb-2">Room Amenities:</p>
                        <ul className="grid grid-cols-2 gap-2">
                          {room.amenities.map((amenity, index) => (
                            <li key={index} className="flex items-center">
                              <svg className="w-4 h-4 text-hotel-gold mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                              </svg>
                              {amenity}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="mt-auto">
                      <Button className="btn-secondary w-full">Book Now</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Rooms;
