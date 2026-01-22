"use client";

import Navbar from "@/components/layout/Navbar"; 
import Hero from "@/components/layout/Hero";
import HeroCards from "@/components/layout/HeroCards";
import AboutUs from "@/components/layout/AboutUs";
import WhyChoose from "@/components/layout/WhyChoose";
import LatestInsights from "@/components/layout/LatestInsights";
import Footer from "@/components/layout/Footer";
import ServicesCards from "@/components/layout/ServicesCards";
import VisionMission from "@/components/layout/VisionMission";

export default function HomePage() {
  return (
    // ✅ Updated: Body background matches overall theme
    <div className="w-full font-sans bg-[#eceff1] overflow-x-hidden text-gray-900">
      
      {/* 1. FIXED NAVBAR (Always on Top) */}
      <Navbar  />
      
      {/* 2. HERO SECTION (Starts below Navbar due to margin in Hero component) */}
      <div className="relative w-full">
        <Hero />
        
        {/* 3. HERO CARDS (Overlapping the bottom of Hero Image) */}
        {/* Negative margin pulls it UP over the hero image */}
        <div className="relative z-30 w-full flex justify-center -mt-24 md:-mt-32 lg:-mt-40 xl:-mt-78 px-4 pb-12">
           <HeroCards/>
        </div>
      </div>
      
      {/* 4. REST OF CONTENT */}
      <div className="relative z-20 bg-[#eceff1]  pt-0">
        <AboutUs/>
        <VisionMission/>
        <WhyChoose/>
        <ServicesCards/>
        <LatestInsights />
      </div>
      
      <Footer/>
    </div>
  );
}