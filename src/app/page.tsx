import About from "@/Pages/Home/About";
import Area from "@/Pages/Home/Area";
import Avaibility from "@/Pages/Home/Avaibility";
import AvaibilityTable from "@/Pages/Home/AvaibilityTable";
import Features from "@/Pages/Home/Features";
import Hero from "@/Pages/Home/Hero";
import HeroContent from "@/Pages/Home/HeroContent";
import PoliciesSection from "@/Pages/Home/PoliciesSection";
import TestimonialsSection from "@/Pages/Home/TestimonialsSection";
import YouMayAlsoLikeSection from "@/Pages/Home/YouMayAlsoLikeSection";
import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-[87%] mx-auto space-y-10">
       <HeroContent />
      <Hero/>
      <Features/>
      <Avaibility/>
      <AvaibilityTable/>
      <About/>
      <Area/> 
      <TestimonialsSection/>
      <PoliciesSection/>
      <YouMayAlsoLikeSection/>
    </div>
  );
}
