"use client";

import { useState } from "react";
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
    // ✅ Updated: Set body background to bg-[#041D2D]
    <div className="w-full font-sans bg-[#eceff1] overflow-x-hidden text-white rounded-2xl">
      
      {/* =========================================
          1. HEADER & HERO SECTION
      ========================================= */}
      <Navbar />
      
      {/* Wrapper to remove extra spacing */}
      <div className="relative w-full">
        <Hero />
        
        {/* ✅ Updated: Hero Cards Positioning
           - Mobile: 'mt-0' -> Cards will appear directly below the Hero section naturally.
           - Desktop (md+): '-mt-32' -> Cards will overlap the Hero section by moving up 32 units.
           - Added 'relative z-30' to ensure they sit on top.
        */}
        <div className="relative z-30 mt-0 lg:-mt-65 px-4 md:px-8 lg:px-30  xl:px-48 2xl:px-206  pb-10 md:pb-0">
           <HeroCards/>
        </div>
      </div>
      
      {/* ✅ Updated: Adjusted top margin for sections below to account for layout changes */}
      <div className="relative z-20 mt-0 md:mt-10 px-0  text-gray-900 rounded-t-[2rem] pt-0">
        <AboutUs/>
        <VisionMission/>
        <div className="mt-0">
          <WhyChoose/>
          <ServicesCards/>
        </div>
        
        <div className="mt-0">
          <LatestInsights />
        </div>
      </div>
      
      <div className="rounded-b-2xl overflow-hidden">
  <Footer/>
</div>
    </div>
  );
}