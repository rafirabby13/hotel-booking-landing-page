"use client"
import { StarIcon } from 'lucide-react';
import React, { useState } from 'react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      title: "Breathtaking Views and Luxury Comfort!",
      text: "The Executive Suite exceeded all my expectations! The panoramic views of the Mediterranean Sea were absolutely stunning. The suite was spacious, immaculately clean, and the modern decor made me feel right at home. The bathroom was luxurious, and the amenities provided were top-notch. Perfect for both work and relaxation!",
      author: "Sofia B.",
      location: "France",
      date: "23.10.2024",
      rating: 5,
    },
    {
      id: 2,
      title: "Exceptional Stay with Excellent Amenities",
      text: "The Executive Suite provided an exceptional experience. The room was spotless, equipped with everything you could need. The marble bathroom with its bathtub, pure luxury. The location is perfect for exploring the city, and the staff truly make", // Text truncated as in image
      author: "Youssef R.",
      location: "Morocco",
      date: "", // Date not visible in image for this one
      rating: 4,
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

 
  

  // Arrow Left Icon - Lucide React: ArrowLeft
  const ArrowLeft = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-left"><path d="M19 12H5"/><path d="m12 19-7-7 7-7"/></svg>
  );

  // Arrow Right Icon - Lucide React: ArrowRight
  const ArrowRight = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
  );

  return (
    <div className=" mx-auto ">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">What Our Guests Say</h2>

      {/* Navigation and See All */}
      <div className="flex justify-between items-center mb-6 p-2 rounded-lg">
        <div className="flex space-x-2">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full border border-gray-300 text-second-text hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full border border-gray-300 text-prime-blue hover:bg-gray-100 transition-colors"
          >
            <ArrowRight />
          </button>
        </div>
        <a href="#" className="text-prime-blue font-semibold flex items-center space-x-1 hover:underline border-b-2 border-prime-blue px-2 pb-1">
          <span>See All</span>
          <ArrowRight />
        </a>
      </div>

      {/* Testimonials Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg  border border-gray-200 flex flex-col justify-between">
            <h3 className="text-xl font-bold text-prime-text mb-3">"{testimonial.title}"</h3>
            <p className="text-second-text leading-relaxed mb-4">{testimonial.text}</p>
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon  className={i < testimonial.rating ? "text-[#FFC15E] fill-[#FFC15E]" : "text-gray-300"} key={i} />
              ))}
            </div>
            <div className="flex justify-between items-center text-gray-600 text-sm">
              <p className="font-semibold">— {testimonial.author}, {testimonial.location}</p>
              {testimonial.date && <p>{testimonial.date}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
