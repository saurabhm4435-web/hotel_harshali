
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Star } from 'lucide-react';

interface TestimonialProps {
  content: string;
  author: string;
  location: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialProps> = ({ content, author, location, rating }) => {
  return (
    <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${i < rating ? 'text-hotel-gold fill-hotel-gold' : 'text-gray-300'}`}
            />
          ))}
        </div>
        <p className="mb-6 text-gray-600">{content}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t pt-4">
        <div className="flex items-center">
          <div>
            <p className="font-medium">{author}</p>
            <p className="text-sm text-gray-500">{location}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      content: "Staying at Hotel Harshali Residency was an incredible experience. The rooms were cozy and well-maintained, and the service was exceptional. The location is perfect for exploring nearby attractions. Highly recommend for anyone visiting the area!",
      author: "Darshan Masane",
      location: "Shelu, Maharashtra",
      rating: 5
    },
    {
      content: "I had a wonderful stay at Hotel Harshali Residency. The staff was friendly and went out of their way to make sure we had everything we needed. The amenities were top-notch, and the food was delicious. A perfect getaway spot!",
      author: "Himanshu Karnuk",
      location: "Panvel, Maharashtra",
      rating: 4
    },
    {
      content: "The experience at Hotel Harshali Residency exceeded my expectations. The atmosphere was relaxing, and the rooms were elegantly designed. It’s an ideal place for a peaceful retreat with easy access to local attractions.",
      author: "Sahil Lakhimale",
      location: "",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="section bg-white">
      <div className="container-custom">
        <h2 className="section-title text-center">
          <span className="gold-underline">Guest</span> Testimonials
        </h2>
        <p className="section-subtitle text-center">
          Hear what our guests have to say about their experiences at Harshali Residency.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              content={testimonial.content}
              author={testimonial.author}
              location={testimonial.location}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
