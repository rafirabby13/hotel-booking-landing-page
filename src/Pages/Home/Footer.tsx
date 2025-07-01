import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#00548C] text-white rounded-t-lg py-10">
      <div className="max-w-[87%] mx-auto grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {/* Column 1: Logo, Description, Social Links, Address */}
        <div className="col-span-full lg:col-span-2 flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img
              src="https://placehold.co/120x40/ADD8E6/000000?text=DAYF+BOOKING"
              alt="DAYF Booking Logo"
              className="h-10 mr-2 rounded"
            
            />
          </div>
          <p className="text-sm text-blue-200 mb-6 max-w-md">
            [App Name] makes booking your next stay easy, affordable, and stress-free. With thousands of hotels worldwide, exclusive deals, and secure payment options, we're here to help you find the perfect place to stay, every time.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-xl">
              {/* Dummy Twitter Icon */}
              <span>[Tw]</span>
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-xl">
              {/* Dummy Facebook Icon */}
              <span>[Fb]</span>
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-xl">
              {/* Dummy Instagram Icon */}
              <span>[Ig]</span>
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-xl">
              {/* Dummy GitHub Icon */}
              <span>[Gh]</span>
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center text-blue-200 text-sm">
            {/* Dummy Location Icon */}
            <span>[Loc]</span>
            <span className="ml-2">123 Travel St, Suite 100, City, Country</span>
          </div>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="col-span-full md:col-span-1 lg:col-span-1">
          <ul className="space-y-3">
            <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-base">Home</a></li>
            <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-base">Hotels</a></li>
            <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-base">Deals</a></li>
            <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-base">About Us</a></li>
            <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-base">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div className="col-span-full md:col-span-1 lg:col-span-1">
          <ul className="space-y-3">
            <li className="flex items-center text-blue-200">
              {/* Dummy Phone Icon */}
              <span>[Ph]</span>
              <span className="ml-2">+1 (555) 123-4567</span>
            </li>
            <li className="flex items-center text-blue-200">
              {/* Dummy Email Icon */}
              <span>[Em]</span>
              <span className="ml-2">support@[yourappname].com</span>
            </li>
          </ul>
        </div>

        {/* Column 4: Download App */}
        <div className="col-span-full md:col-span-1 lg:col-span-1">
          <p className="text-base font-semibold mb-3">Download Our App</p>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-2xl">
              {/* Dummy Play Store Icon */}
              <span>[Play]</span>
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-2xl">
              {/* Dummy Apple Store Icon */}
              <span>[Apple]</span>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-blue-700 mt-8 pt-6 text-center text-sm text-blue-300">
        <p>&copy; 2023, All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
