import React from 'react';

const YouMayAlsoLikeSection = () => {
  const properties = [
    {
      id: 1,
      image: 'https://placehold.co/400x300/ADD8E6/000000?text=Hotel+Image+1',
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
      image: 'https://placehold.co/400x300/ADD8E6/000000?text=Hotel+Image+2',
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
      image: 'https://placehold.co/400x300/ADD8E6/000000?text=Hotel+Image+3',
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
      image: 'https://placehold.co/400x300/ADD8E6/000000?text=Hotel+Image+4',
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
      image: 'https://placehold.co/400x300/ADD8E6/000000?text=Hotel+Image+5',
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
      image: 'https://placehold.co/400x300/ADD8E6/000000?text=Hotel+Image+6',
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
      image: 'https://placehold.co/400x300/ADD8E6/000000?text=Hotel+Image+7',
      title: 'Sofitel Algiers Hamma Garden',
      description: 'Sofitel Algiers Hamma Garden offers luxurious accommodations overlooking the stunning Botanical Garden of Hamma.',
      price: '699',
      beds: 2,
      bathrooms: 2,
      size: '1,200 sq ft',
      rating: 4.5,
    },
    // Add more properties to enable horizontal scrolling
  ];

  // Inline SVG Icons for amenities (Lucide React equivalents)
  const BedIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bed"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2v-8a2 2 0 0 1 2-2h16"/><path d="M8 8v8"/></svg>
  );
  const BathIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bath"><path d="M9 6v6a3 3 0 0 0 3 3h4a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H9Z"/><path d="M3 18h16a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H3v3a2 2 0 0 0 2 2Z"/></svg>
  );
  const MeasureIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-maximize"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3m-18 0v3a2 2 0 0 0 2 2h3"/></svg>
  );
  const InfoIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  );
  const StarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 24 24"
     
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
     
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );


  return (
    <div className="container mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">You may also like</h2>

      {/* Scrollable Container for Property Cards */}
      <div className="overflow-x-auto whitespace-nowrap py-2 scrollbar-hide">
        <div className="inline-flex space-x-4 pr-4"> {/* pr-4 to add space at the end for scroll */}
          {properties.map((property) => (
            <div key={property.id} className="flex-shrink-0 w-64 md:w-72 bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden">
              {/* Image */}
              <div className="relative w-full h-40">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                
                />
                {/* Rating Overlay */}
                <div className="absolute top-2 left-2 bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center space-x-1 text-sm font-semibold text-gray-800 shadow">
                  <StarIcon  />
                  <span>{property.rating}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1 leading-tight">{property.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{property.description}</p> {/* line-clamp for description */}

                {/* Price */}
                <div className="text-xl font-bold text-gray-800 mb-3">
                  ${property.price} <span className="text-sm font-normal text-gray-500">/ Night</span>
                </div>

                {/* Amenities */}
                <div className="flex items-center space-x-4 text-gray-600 text-sm mb-4">
                  <div className="flex items-center space-x-1">
                    <BedIcon />
                    <span>{property.beds} Bedroom{property.beds > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <BathIcon />
                    <span>{property.bathrooms} Bathroom{property.bathrooms > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MeasureIcon />
                    <span>{property.size}</span>
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between space-x-3">
                  <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-700 transition-colors font-semibold">
                    Book Now
                  </button>
                  <button className="p-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-100 transition-colors">
                    <InfoIcon />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YouMayAlsoLikeSection;
