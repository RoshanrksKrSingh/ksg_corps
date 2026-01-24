"use client";

import Navbar from "@/components/layout/Navbar"; 
import Hero from "@/components/layout/Hero";
// Removed HeroCards import as it is now integrated into Hero
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
      <Navbar />
      
      {/* 2. HERO SECTION (Self-contained, includes the cards logic now) */}
      <div className="relative w-full">
        <Hero />
      </div>
      
      {/* 4. REST OF CONTENT */}
      {/* Removed negative margins since HeroCards are gone */}
      <div className="relative z-20 bg-[#eceff1]">
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