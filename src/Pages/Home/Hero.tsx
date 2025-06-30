import Image from "next/image";
import React from "react";

const Hero = () => {
  const images = [
    "/h1-min.jpg",
    "/h2-min.jpg",
    "/h3-min.jpg",
    "/h4-min.jpg",
    "/h5-min.jpg",
    "/h6-min.jpg",
    "/h7-min.jpg",
  ];
  return (
    <div className="grid grid-cols-12 grid-rows-3 gap-1 rounded-2xl overflow-hidden">
      <div className="grid col-span-9 row-span-2  h-full">
        <img src="/h1-min.jpg" className="w-full h-full max-h-[500px] object-cover transition-transform duration-300 hover:scale-105" alt="" />
      </div>
      <div className="col-span-3 col-start-10">
        <img src="/h2-min.jpg" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" alt="" />
      </div>
      <div className="col-span-3 col-start-10">
        <img src="/h3-min.jpg" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" alt="" />
      </div>
      <div className="col-span-2">
        <img src="/h4-min.jpg" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" alt="" />
      </div>
      <div className="col-span-2">
        <img src="/h5-min.jpg" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" alt="" />
      </div>
      <div className="col-span-2">
        <img src="/h6-min.jpg" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" alt="" />
      </div>
      <div className="col-span-2">
        <img src="/h7-min.jpg" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" alt="" />
      </div>
      <div className="col-span-2">
        <img src="/h8-min.jpg" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" alt="" />
      </div>
      <div className="col-span-2">
        <img src="/h9.jpg" className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" alt="" />
      </div>

    </div>
  );
};

export default Hero;
