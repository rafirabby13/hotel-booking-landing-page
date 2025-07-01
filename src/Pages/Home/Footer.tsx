import { Apple, AppleIcon, EqualApproximatelyIcon, Facebook, Github, Instagram, Locate, LocationEditIcon, Phone, PlaySquare, Twitter } from 'lucide-react';
import React from 'react';
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple } from "react-icons/fa6";
import { MdOutlineEmail } from "react-icons/md";
import { Separator } from '@/components/ui/separator';
const Footer = () => {
  return (
    <footer className="bg-[#00548C] text-white rounded-b-2xl py-20">
      <div className="max-w-[87%] mx-auto flex md:flex-row flex-wrap gap-3 justify-between">

        <div className="col-span-full lg:col-span-2 flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img
              src="/logo.png"
              alt="DAYF Booking Logo"
              className="h-10 mr-2 rounded"

            />
          </div>
          <p className="text-sm text-blue-200 mb-6 max-w-md">
            DAYF makes booking your next stay easy, affordable, and stress-free. With thousands of hotels worldwide, exclusive deals, and secure payment options, we're here to help you find the perfect place to stay, every time.
          </p>

          {/* Social Links */}
          <div className="flex space-x-4 mb-6">
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-xl">
              <Twitter />

            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-xl">
              <Facebook />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-xl">
              <Instagram />
            </a>
            <a href="#" className="text-blue-200 hover:text-white transition-colors text-xl">
              <Github />
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center text-blue-200 text-sm">
            <Locate />
            <span className="ml-2">123 Travel St, Suite 100, City, Country</span>
          </div>
        </div>
 
        <div className='xl:border-l-2 md:w-1/2 xl:pl-10'>
          <div className='flex items-center xl:justify-center flex-wrap gap-8'>

            <div className="">
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-base">Home</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-base">Hotels</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-base">Deals</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-base">About Us</a></li>
                <li><a href="#" className="text-blue-200 hover:text-white transition-colors text-base">Contact Us</a></li>
              </ul>
            </div>


            <div className='space-y-4'>
              <ul className="space-y-3">
                <li className="flex items-center text-blue-200">
                  <Phone />
                  <span className="ml-2">+1 (555) 123-4567</span>
                </li>
                <li className="flex items-center text-blue-200">
                  <MdOutlineEmail />
                  <span className="ml-2">support@[yourappname].com</span>
                </li>
              </ul>
              <div className="flex items-center gap-4">
                <p className="text-base font-semibold mb-3">Download Our App</p>
                <div className="flex space-x-4">
                  <a href="#" className="text-blue-200 hover:text-white transition-colors text-2xl">
                    <IoLogoGooglePlaystore />
                  </a>
                  <a href="#" className="text-blue-200 hover:text-white transition-colors text-2xl">
                    <FaApple />
                  </a>
                </div>
              </div>
            </div>


          </div>

        <div className="border-t border-blue-700 mt-8 pt-6 text-center text-sm text-blue-300">
          <p className='text-end'>&copy; 2023, All Rights Reserved</p>
        </div>
        </div>
      </div>



    </footer>
  );
};

export default Footer;
