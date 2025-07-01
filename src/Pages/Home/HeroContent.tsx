import { Bookmark, MoveRight, Share2 } from "lucide-react";
import React from "react";

const HeroContent = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-between gap-4">
      <div className="text-prime-text">
        <h1 className="text-3xl font-medium">El Aurassi Hotel</h1>
        <p className="text-second-text">
          Spacious, modern rooms with panoramic views of the Mediterranean Sea.
        </p>
      </div>
      <div className="flex items-center gap-5">
        <p className="bg-[#007DD0]/10 p-4 rounded-full">
          <Bookmark className="text-[#007DD0]" />
        </p>
        <p className="bg-[#007DD0]/10 p-4 rounded-full">
          <Share2 className="text-[#007DD0]" />
        </p>
        <div className="flex items-center bg-prime-blue p-5 rounded-full gap-3 text-white text-lg px-6 py-3">
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
