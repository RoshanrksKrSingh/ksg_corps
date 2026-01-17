"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Globe, BarChart, Shield } from "lucide-react";

// ✅ 1. Import Existing Components
import Navbar from "@/components/layout/Navbar"; 
import Hero from "@/components/layout/Hero";
import HeroCards from "@/components/layout/HeroCards";
import AboutUs from "@/components/layout/AboutUs";
import WhyChoose from "@/components/layout/WhyChoose";
import LatestInsights from "@/components/layout/LatestInsights";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  // --- Contact Form Logic ---
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Business Setup",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");
    // Simulate API call or replace with actual fetch
    setTimeout(() => {
        setStatus("Thank you! We will contact you shortly.");
        setFormData({ name: "", email: "", phone: "", service: "Business Setup", message: "" });
    }, 1000);
  };

  return (
    <div className="w-full font-sans bg-gray-50">
      
      

      {/* =========================================
          1. NEW HEADER & HERO
      ========================================= */}
      <Navbar />
      <Hero />
      
      <div className="relative z-20 mt-0 px-2">
        <AboutUs/>
        <HeroCards/>
      </div>
      
      <div className="relative z-20 mt-0 px-2">
        <WhyChoose/>
      </div>
      
      <div className="relative z-20 mt-0 px-2">
       <LatestInsights />
      </div>
      
      <div className="relative z-20 mt-0 rounded-b-2xl px-2">
        <Footer/>
      </div>
    </div>
  );
}