"use client";

import { useState, useEffect } from "react";

// ================== SLIDER DATA ==================
const slides = [
  {
    id: 1,
    text: "Our Corporate Advisors Are Devoted To Mitigate Your Business Exposures",
    image: "https://res.cloudinary.com/defxm7hjb/image/upload/v1768993393/pexels-pixabay-219692_s1rxcp.jpg",
  },
  {
    id: 2,
    text: "Fast Growing Corporate Consulting Firm Providing Client-Focused, Business-Centric Solutions",
    image: "https://ik.imagekit.io/travechela/pexels-apasaric-4201659.jpg",
  },
  {
    id: 3,
    text: "Proactive and Cost Effective Tailor Made Solutions Helping Businesses Navigate The New Normal",
    image: "https://ik.imagekit.io/travechela/pexels-apasaric-692103.jpg?updatedAt=1768990939754",
  },
  {
    id: 4,
    text: "Professionally Equipped, Economically Viable, Qualitatively Unparalleled and Highly Committed",
    image: "https://ik.imagekit.io/travechela/meeting-4784909.jpg",
  },
  {
    id: 5,
    text: "Your Strategic Partner for Sustainable Business Growth and Corporate Excellence",
    image: "https://ik.imagekit.io/travechela/istockphoto-1384233087-1024x1024.jpg",
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
    // ✅ Updated: Removed fixed 'h-screen' constraint to allow full cover
    // 'min-h-[100dvh]' ensures it covers full viewport height at minimum
    // 'relative' ensures the absolute images stay within this section
    <section className="relative w-full min-h-[100dvh] flex items-center overflow-hidden bg-[#edf0f1]">
      
      {/* ================= BACKGROUND IMAGE SLIDER ================= */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          // ✅ Updated: 'h-full' ensures it stretches to cover the entire section height including bottom gap
          // 'bg-cover' and 'bg-center' ensure the image fills the area without distortion
          className={`absolute inset-0 z-0 h-full w-full bg-cover bg-[center_top] bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`
          }}
        >
          {/* Optional: Dark Overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-black/20"></div> */}
        </div>
      ))}

      {/* ================= HERO CONTENT (SLIDER) ================= */}
      {/* ✅ Updated: Adjusted padding to center content vertically without leaving huge gaps */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full h-full flex flex-col justify-center py-32 md:py-40">
        
        {/* Container mt adjusted for large screens */}
        <div className="max-w-3xl xl:max-w-4xl 2xl:max-w-6xl relative h-40 w-full mt-10 md:mt-0 2xl:mt-10"> 
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out transform ${
                index === currentSlide 
                  ? "opacity-100 translate-y-0" 
                  : "opacity-0 translate-y-4 pointer-events-none"
              }`}
            >
              <h1 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-6xl font-bold leading-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-500 to-green-500 drop-shadow-lg text-center md:text-center">
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