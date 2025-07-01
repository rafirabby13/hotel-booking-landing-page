import { Bookmark, MoveRight, Share2 } from "lucide-react";
import React from "react";

const HeroContent = () => {
  return (
    <div className="md:flex items-center justify-between">
      <div>
        <h1 className="text-3xl">El Aurassi Hotel</h1>
        <p>
          Spacious, modern rooms with panoramic views of the Mediterranean Sea.
        </p>
      </div>
      <div className="flex items-center gap-5">
        <p className="bg-[#007DD0]/10 p-4 rounded-full">
          <Bookmark className="text-[#007DD0]"/>
        </p>
        <p className="bg-[#007DD0]/10 p-4 rounded-full">
          <Share2  className="text-[#007DD0]"/>
        </p>
        <div className="flex items-center bg-[#007DD0] p-5 rounded-full gap-3 text-white text-lg px-6 py-3">
          <p>Reserve</p>
          <p>
            <MoveRight />

          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
