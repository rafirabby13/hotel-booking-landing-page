'use client';
import { BathIcon, BedIcon, InfoIcon, MessageSquareIcon, StarIcon } from 'lucide-react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const YouMayAlsoLikeSection = () => {

  const properties = [
    {
      id: 1,
      image: '/h1-min.jpg',
      title: 'Sofitel Algiers Hamma Garden',
      description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
      price: '699',
      beds: 2,
      bathrooms: 2,
      size: '1,200 sq ft',
      rating: 4.5,
    },
    {
      id: 2,
      image: '/h2-min.jpg',
      title: 'Sofitel Algiers Hamma Garden',
      description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
      price: '699',
      beds: 2,
      bathrooms: 2,
      size: '1,200 sq ft',
      rating: 4.5,
    },
    {
      id: 3,
      image: '/h3-min.jpg',
      title: 'Sofitel Algiers Hamma Garden',
      description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
      price: '699',
      beds: 2,
      bathrooms: 2,
      size: '1,200 sq ft',
      rating: 4.5,
    },
    {
      id: 4,
      image: '/h4-min.jpg',
      title: 'Sofitel Algiers Hamma Garden',
      description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
      price: '699',
      beds: 2,
      bathrooms: 2,
      size: '1,200 sq ft',
      rating: 4.5,
    },
    {
      id: 5,
      image: '/h5-min.jpg',
      title: 'Sofitel Algiers Hamma Garden',
      description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
      price: '699',
      beds: 2,
      bathrooms: 2,
      size: '1,200 sq ft',
      rating: 4.5,
    },
    {
      id: 6,
      image: '/h6-min.jpg',
      title: 'Sofitel Algiers Hamma Garden',
      description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
      price: '699',
      beds: 2,
      bathrooms: 2,
      size: '1,200 sq ft',
      rating: 4.5,
    },
    {
      id: 7,
      image: '/h7-min.jpg',
      title: 'Sofitel Algiers Hamma Garden',
      description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
      price: '699',
      beds: 2,
      bathrooms: 2,
      size: '1,200 sq ft',
      rating: 4.5,
    },
  
  ];




  return (
    <div className=" mx-auto">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">You may also like</h2>

      {/* Scrollable Container for Property Cards */}

      <Swiper

        spaceBetween={20}
        freeMode={true}

        modules={[FreeMode]}
        className="mySwiper"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.1,
          },
          1280: {
            slidesPerView: 2.5,
          },
        }}
      >

        {properties.map((property) => (
          <SwiperSlide key={property.id} className=" w-full  bg-white rounded-lg    space-y-5">
            {/* Image */}
            <div className="relative w-full h-80 ">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full rounded-2xl object-cover"

              />

            </div>


            <div className="space-y-5">
              <h3 className="text-xl font-bold text-prime-text mb-1 ">{property.title}</h3>
              <p className="text-second-text text-sm mb-3 ">{property.description}</p>
              <div className="text-xl font-bold text-gray-800 mb-3">
                ${property.price} <span className="text-sm font-normal text-second-text">/ Night</span>
              </div>

              {/* Amenities */}
              <div className="flex items-center justify-between flex-wrap space-x-4 text-second-text text-sm ">
                <div className="flex items-center space-x-1">
                  <BedIcon />
                  <span>{property.beds} Bedroom{property.beds > 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BathIcon />
                  <span>{property.bathrooms} Bathroom{property.bathrooms > 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageSquareIcon />
                  <span>{property.size}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between space-x-3">
                <button className="flex-1 bg-prime-blue text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors font-semibold">
                  Book Now
                </button>
                <button className="p-2 rounded-full border border-prime-background bg-prime-background text-prime-blue transition-colors">
                  <InfoIcon />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>
      <Swiper

        spaceBetween={20}
        freeMode={true}

        modules={[FreeMode]}
        className="mySwiper mt-10"
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 2.1,
          },
          1280: {
            slidesPerView: 2.5,
          },
        }}
      >

        {properties.map((property) => (
          <SwiperSlide key={property.id} className=" w-full  bg-white rounded-lg    space-y-5">
            {/* Image */}
            <div className="relative w-full h-80 ">
              <img
                src={property.image}
                alt={property.title}
                className="w-full h-full rounded-2xl object-cover"

              />

            </div>


            <div className="space-y-5">
              <h3 className="text-xl font-bold text-prime-text mb-1 ">{property.title}</h3>
              <p className="text-second-text text-sm mb-3 ">{property.description}</p>
              <div className="text-xl font-bold text-gray-800 mb-3">
                ${property.price} <span className="text-sm font-normal text-second-text">/ Night</span>
              </div>

              {/* Amenities */}
              <div className="flex items-center justify-between flex-wrap space-x-4 text-second-text text-sm ">
                <div className="flex items-center space-x-1">
                  <BedIcon />
                  <span>{property.beds} Bedroom{property.beds > 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <BathIcon />
                  <span>{property.bathrooms} Bathroom{property.bathrooms > 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <MessageSquareIcon />
                  <span>{property.size}</span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center justify-between space-x-3">
                <button className="flex-1 bg-prime-blue text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors font-semibold">
                  Book Now
                </button>
                <button className="p-2 rounded-full border border-prime-background bg-prime-background text-prime-blue transition-colors">
                  <InfoIcon />
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}

      </Swiper>



    </div>
  );
};

export default YouMayAlsoLikeSection;
