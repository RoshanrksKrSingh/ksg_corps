"use client";

import { useState, useEffect } from "react";

const slides = [
  { id: 1, text: "Our Corporate Advisors Are Devoted To Mitigate Your Business Exposures", image: "https://res.cloudinary.com/defxm7hjb/image/upload/v1768993393/pexels-pixabay-219692_s1rxcp.jpg" },
  { id: 2, text: "Fast Growing Corporate Consulting Firm Providing Client-Focused, Business-Centric Solutions", image: "https://ik.imagekit.io/travechela/pexels-apasaric-4201659.jpg" },
  { id: 3, text: "Proactive and Cost Effective Tailor Made Solutions Helping Businesses Navigate The New Normal", image: "https://ik.imagekit.io/travechela/pexels-apasaric-692103.jpg?updatedAt=1768990939754" },
  { id: 4, text: "Professionally Equipped, Economically Viable, Qualitatively Unparalleled and Highly Committed", image: "https://ik.imagekit.io/travechela/meeting-4784909.jpg" },
  { id: 5, text: "Your Strategic Partner for Sustainable Business Growth and Corporate Excellence", image: "https://ik.imagekit.io/travechela/istockphoto-1384233087-1024x1024.jpg" },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000); 
    return () => clearInterval(interval);
  }, []);

  return (
    // ✅ Fixed Top Spacing: 'mt' matches Navbar height exactly (h-16 -> mt-16, etc.)
    // ✅ Fixed Bottom Spacing: 'min-h' ensures full viewport coverage
    <section className="relative w-full mt-16 lg:mt-16 xl:mt-20 2xl:mt-24 min-h-[85vh] md:min-h-[100vh] flex items-center justify-center overflow-hidden ">
      
      {/* Background Slider */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 z-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"}`}
        >
           {/* ✅ Fixed: Image covers entire area perfectly without gaps */}
           <div 
             className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
             style={{ backgroundImage: `url('${slide.image}')` }}
           >
             {/* Dark Overlay for better text visibility */}
             <div className="absolute inset-0 bg-black/40"></div>
           </div>
        </div>
      ))}

      {/* Content */}
      {/* ✅ Updated: Padding adjusted to center text nicely */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center items-center pb-20 md:pb-72 text-center h-full">
        
        <div className="max-w-4xl 2xl:max-w-6xl"> 
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-1000 ease-in-out transform ${
                index === currentSlide 
                  ? "opacity-100 translate-y-0 scale-100 relative block" 
                  : "opacity-0 translate-y-8 scale-95 absolute hidden"
              }`}
            >
              {/* ✅ Updated: Professional Text Gradient & Responsive Font Sizes */}
              <h1 className="text-3xl sm:text-4xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-8xl font-extrabold leading-tight tracking-tight drop-shadow-2xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-200 via-white to-green-200">
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