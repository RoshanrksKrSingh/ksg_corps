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
    <section className="relative w-full min-h-screen flex items-center overflow-hidden">
      
      {/* ================= BACKGROUND IMAGE ================= */}
      {/* ✅ MOBILE FIX UPDATE: 
         - Changed 'bg-[70%_center]' to 'bg-[85%_center]' to show more of the RIGHT side.
      */}
      <div 
        className="absolute top-2 left-2 right-2 bottom-0 z-0 bg-cover bg-[85%_center] md:bg-[center_right] bg-no-repeat transition-transform duration-1000 rounded-t-[1rem] overflow-hidden"
        style={{
          backgroundImage: `url('https://cdn-becae.nitrocdn.com/OcwjylvgvBbNRDjYtTmGOXeUgIvOimBD/assets/images/optimized/rev-47b5ce8/www.aaconsultancy.ae/wp-content/uploads/2025/05/Business-Setup-company-in-uae.webp')`
        }}
      >
        {/* Dark Gradient Overlay for Readability */}
        <div className="absolute inset-0 to-transparent"></div>
      </div>

      {/* ================= HERO CONTENT (SLIDER) ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center">
        
        <div className="max-w-3xl relative h-40"> 
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 transition-all duration-1000 ease-in-out transform ${
                index === currentSlide 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <h1 className="text-xl md:text-2xl lg:text-3xl font-bold leading-relaxed mb-4 mt-20 md:mt-0">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-300 to-green-400">
                  {slide.text}
                </span>
              </h1>
              
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;