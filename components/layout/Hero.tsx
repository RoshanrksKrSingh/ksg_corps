"use client";

import { useState, useEffect } from "react";

// ================== SLIDER DATA ==================
const slides = [
  {
    id: 1,
    text: "Our Corporate Advisors Are Devoted To Mitigate Your Business Exposures",
  },
  {
    id: 2,
    text: "Fast Growing Corporate Consulting Firm Providing Client-Focused, Business-Centric Solutions",
  },
  {
    id: 3,
    text: "Proactive and Cost Effective Tailor Made Solutions Helping Businesses Navigate The New Normal",
  },
  {
    id: 4,
    text: "Professionally Equipped, Economically Viable, Qualitatively Unparalleled and Highly Committed",
  },
  {
    id: 5,
    text: "Your Strategic Partner for Sustainable Business Growth and Corporate Excellence",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic Slider Logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-[#edf0f1]">
      
      {/* ================= BACKGROUND IMAGE ================= */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-[85%_center] md:bg-[center_right] bg-no-repeat transition-transform duration-1000"
        style={{
          backgroundImage: `url('https://cdn-becae.nitrocdn.com/OcwjylvgvBbNRDjYtTmGOXeUgIvOimBD/assets/images/optimized/rev-47b5ce8/www.aaconsultancy.ae/wp-content/uploads/2025/05/Business-Setup-company-in-uae.webp')`
        }}
      >
        {/* Dark Gradient Overlay for Readability */}
        {/* <div className="absolute inset-0 bg-black/40"></div> */}
      </div>

      {/* ================= HERO CONTENT (SLIDER) ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center pb-12 md:pb-32">
        
        {/* ✅ Updated: Changed 'mt-32' to 'mt-60' to push text further down on mobile */}
        <div className="max-w-3xl relative h-40 w-full mt-45 md:mt-13"> 
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out transform ${
                index === currentSlide 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              {/* ✅ Updated: Replaced 'text-white' with gradient classes */}
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-500 to-green-500 drop-shadow-lg text-center md:text-left">
                {slide.text}
              </h1>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;