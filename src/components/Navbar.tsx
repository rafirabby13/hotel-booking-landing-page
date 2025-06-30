"use client";
import React, { useState } from "react";
import Link from "next/link";
import {
  ChevronDown,
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  Globe,
  MessageCircle,
  RefreshCcw,
  User,
  UserRound,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguageMenu = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  return (
    <div className="bg-blue-50 py-4 px-8 rounded-lg shadow-sm w-full flex items-center justify-between">
      <div className="flex items-center">
        <img
          src="https://placehold.co/100x40/add8e6/000000?text=DAYF+BOOKING"
          alt="DAYF Booking Logo"
          className="h-10 mr-4 rounded"
        />
      </div>
      <NavigationMenu>
        <NavigationMenuList className="flex space-x-6">
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Home</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Hotels</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">House</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">About Us</NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink href="#">Contact Us</NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center space-x-4">
        {/* Language Selector */}
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger
                onClick={toggleLanguageMenu}
                className="flex items-center space-x-2 rounded-full border border-gray-300 p-2"
              >
                <Globe />
                <span>EN</span>
                {/* <ChevronDown /> */}
              </NavigationMenuTrigger>
              {isLanguageMenuOpen && (
                <NavigationMenuContent>
                  <NavigationMenuLink href="#">English</NavigationMenuLink>
                  <NavigationMenuLink href="#">Español</NavigationMenuLink>
                  <NavigationMenuLink href="#">Français</NavigationMenuLink>
                </NavigationMenuContent>
              )}
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Flag Selector (simplified for this example) */}
        <div className="flex items-center space-x-2 rounded-full border border-gray-300 p-2">
          <img
            src="https://placehold.co/24x24/FFD700/000000?text=ES" // Placeholder for Spanish flag
            alt="Spanish Flag"
            className="h-6 w-6 rounded-full"
          />
          <ChevronDown />
        </div>

        {/* List your property button */}
        <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-full shadow hover:bg-blue-50 transition-colors flex items-center space-x-2">
          <span>List your property</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-up-right h-4 w-4"
          >
            <path d="M7 7h10v10" />
            <path d="M7 17 17 7" />
          </svg>
        </button>

        {/* Refresh icon */}
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <MessageCircle />
        </button>

        {/* User profile */}
        <div className="flex items-center space-x-2 bg-white rounded-full p-2 shadow-inner">
         <UserRound />
          <span className="text-gray-700">Sunan</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
