"use client"
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
    },
    {
      id: 3,
      title: "Great Service and Comfortable Rooms",
      text: "Had a wonderful time at the hotel. The staff was incredibly friendly and attentive. The room was very comfortable and clean, and the bed was super cozy. Highly recommend for a relaxing getaway.",
      author: "Ahmed K.",
      location: "Egypt",
      date: "15.09.2024",
      rating: 4,
    },
    {
      id: 4,
      title: "Fantastic Location and Delicious Food",
      text: "The hotel's location was perfect for exploring the city. We also enjoyed the breakfast buffet every morning – a great variety of delicious options. Will definitely come back!",
      author: "Maria S.",
      location: "Spain",
      date: "01.11.2024",
      rating: 5,
    },
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

  // Determine which testimonials to display
  // On mobile, show 1 testimonial. On larger screens, show 2.
  const getVisibleTestimonials = () => {
    if (window.innerWidth >= 768) { // md breakpoint
      return [testimonials[currentIndex], testimonials[(currentIndex + 1) % testimonials.length]];
    }
    return [testimonials[currentIndex]];
  };

  // Star Icon (filled and empty) - Lucide React: Star
  const StarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
    //   fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={"text-yellow-400"}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );

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
      <div className="flex justify-between items-center mb-6 p-2 border border-gray-300 rounded-lg">
        <div className="flex space-x-2">
          <button
            onClick={prevTestimonial}
            className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={nextTestimonial}
            className="p-2 rounded-full border border-gray-300 text-blue-600 hover:bg-gray-100 transition-colors"
          >
            <ArrowRight />
          </button>
        </div>
        <a href="#" className="text-blue-600 font-semibold flex items-center space-x-1 hover:underline">
          <span>See All</span>
          <ArrowRight />
        </a>
      </div>

      {/* Testimonials Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {getVisibleTestimonials().map((testimonial) => (
          <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <h3 className="text-xl font-bold text-gray-800 mb-3">"{testimonial.title}"</h3>
            <p className="text-gray-700 leading-relaxed mb-4">{testimonial.text}</p>
            <div className="flex items-center mb-4">
              {/* {[...Array(5)].map((_, i) => (
                <StarIcon key={i} filled={i < testimonial.rating} />
              ))} */}
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
