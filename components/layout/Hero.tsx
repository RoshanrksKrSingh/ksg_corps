"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FileText, Wallet, Building } from "lucide-react";

// ... (Slides and Features Data remain unchanged) ...
const slides = [
  {
    id: 1,
    heading: "Our Corporate Advisors Are Devoted To Mitigate",
    highlight: "Your Business Exposures",
    desc: "We provide comprehensive frameworks to analyze business aspects and maximize shareholder value effectively.",
    image: "https://res.cloudinary.com/defxm7hjb/image/upload/v1768993393/pexels-pixabay-219692_s1rxcp.jpg",
  },
  {
    id: 2,
    heading: "Fast Growing Corporate Consulting Firm Providing",
    highlight: "Client-Focused Solutions",
    desc: "Your strategic partner for sustainable business growth, offering unparalleled corporate advisory services.",
    image: "https://ik.imagekit.io/travechela/pexels-apasaric-4201659.jpg",
  },
  {
    id: 3,
    heading: "Proactive and Cost Effective Tailor Made",
    highlight: "Solutions For New Normal",
    desc: "Helping businesses navigate the changing economic landscape with professionally equipped strategies.",
    image: "https://ik.imagekit.io/travechela/pexels-apasaric-692103.jpg?updatedAt=1768990939754",
  },
  {
    id: 4,
    heading: "Professionally Equipped, Economically Viable",
    highlight: "Highly Committed Team",
    desc: "Qualitatively unparalleled services delivered by a team of Chartered Accountants, ACCAs, and MBAs.",
    image: "https://ik.imagekit.io/travechela/meeting-4784909.jpg",
  },
  {
    id: 5,
    heading: "Your Strategic Partner for Sustainable",
    highlight: "Corporate Excellence",
    desc: "Gaining a competitive edge through unparalleled customer service and exceptional client engagement.",
    image: "https://ik.imagekit.io/travechela/istockphoto-1384233087-1024x1024.jpg",
  },
];

const features = [
  { icon: FileText, title: "Accounting & Audit Support", href: "/services/accounting" },
  { icon: Wallet, title: "Tax Advisory", href: "/services/tax" },
  { icon: Building, title: "Business Setup", href: "/services/business-setup" }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000); 
    return () => clearInterval(interval);
  }, []);

  return (
    // ✅ Updated: Background for Light Mode (bg-[#eceff1]) & Dark Mode (bg-[#020617])
    <section className="relative w-full pt-24 pb-12 lg:pt-30 lg:pb-20 overflow-hidden  bg-slate-50  dark:bg-[#020617] transition-colors duration-300">
      
      {/* ================= BACKGROUND EFFECTS ================= */}
      
      {/* Stars Pattern: Inverted for Light Mode */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none invert dark:invert-0"></div>
      
      {/* ===== TOP AMBIENT GLOWS ===== */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200/50 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>
      <div className="absolute top-[-15%] right-[-10%] w-[400px] h-[400px] bg-green-200/50 dark:bg-green-900/15 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>

      {/* ===== BOTTOM AMBIENT GLOWS ===== */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-200/50 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>
      <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] bg-green-200/50 dark:bg-green-900/15 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>

      {/* ===== COSMIC DOTS (Adjusted for Light/Dark visibility) ===== */}
      {/* Top */}
      <div className="absolute top-[15%] right-[20%] w-3 h-3 rounded-full bg-blue-500/80 dark:bg-blue-400/80 blur-[2px] shadow-[0_0_15px_rgba(59,130,246,0.8)] dark:shadow-[0_0_15px_rgba(96,165,250,0.8)] pointer-events-none animate-pulse"></div>
      <div className="absolute top-[10%] left-[5%] w-1.5 h-1.5 rounded-full bg-orange-400/60 dark:bg-orange-200/60 blur-[0.5px] pointer-events-none"></div>

      {/* Bottom */}
      <div className="absolute bottom-[15%] left-[20%] w-3 h-3 rounded-full bg-blue-500/80 dark:bg-blue-400/80 blur-[2px] shadow-[0_0_15px_rgba(59,130,246,0.8)] dark:shadow-[0_0_15px_rgba(96,165,250,0.8)] pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[10%] right-[5%] w-1.5 h-1.5 rounded-full bg-orange-400/60 dark:bg-orange-200/60 blur-[0.5px] pointer-events-none"></div>

      {/* ===================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16 min-h-[480px]">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center relative">
            
            <div className="relative h-[300px] sm:h-[260px] lg:h-[320px] w-full">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out flex flex-col items-start text-left ${
                    index === currentSlide 
                      ? "opacity-100 translate-y-0 z-10" 
                      : "opacity-0 translate-y-4 -z-10 pointer-events-none"
                  }`}
                >
                  {/* Heading: Dark Text in Light Mode, White in Dark Mode */}
                  <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight mb-4 text-gray-900 dark:text-white transition-colors duration-300">
                    {slide.heading} <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600 dark:from-green-400 dark:to-blue-500">
                      {slide.highlight}
                    </span>
                  </h1>

                  {/* Description: Gray-600 in Light Mode, Gray-300 in Dark Mode */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base mb-8 max-w-lg leading-relaxed font-light transition-colors duration-300">
                    {slide.desc}
                  </p>

                  {/* Buttons */}
                  <div className="flex flex-wrap gap-3">
                    <Link href="/contact" className="px-6 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-green-600 dark:from-orange-500 dark:to-green-500 text-white text-sm font-semibold shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all duration-300">
                      Get In Touch
                    </Link>
                    {/* Explore Services: Dark border in light mode */}
                    <Link href="/" aria-disabled="true" className="px-6 py-2.5 rounded-full bg-white/50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white text-sm font-semibold hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                      Explore Services
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Static Features: Light mode box styling */}
            <div className="mt-2 pt-5 border-t border-gray-300 dark:border-white/10 w-full grid grid-cols-1 sm:grid-cols-3 gap-3 transition-colors duration-300">
               {features.map((f, i) => (
                 <Link key={i} href={f.href} className="flex items-center gap-3 p-2.5 rounded-lg bg-white/40 dark:bg-white/5 hover:bg-white/60 dark:hover:bg-white/10 border border-gray-200 dark:border-white/5 hover:border-green-500/30 transition-all group shadow-sm dark:shadow-none">
                    <div className="p-1.5 bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-500/20 dark:to-green-500/20 rounded-md group-hover:scale-110 transition-transform">
                      <f.icon className="w-4 h-4 text-green-600 dark:text-green-300" />
                    </div>
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors">{f.title}</span>
                 </Link>
               ))}
            </div>

          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
             <div className="relative w-full max-w-sm lg:max-w-[90%] aspect-[4/3] lg:aspect-square max-h-[350px] lg:max-h-[450px] mx-auto lg:mr-0">
                
                {/* Decorative Backing: Colors adapted for light mode */}
                <div className="absolute inset-3 bg-gradient-to-tr from-green-200 to-blue-200 dark:from-green-500/20 dark:to-blue-500/20 rounded-[2rem] blur-xl transform rotate-6 scale-95 transition-colors duration-300"></div>

                {/* Images Container: BG white in light mode */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl bg-white dark:bg-[#020617] transition-colors duration-300">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                        index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
                      }`}
                    >
                       <div 
                         className="absolute inset-0 bg-cover bg-center"
                         style={{ backgroundImage: `url('${slide.image}')` }}
                       >
                          {/* Inner Gradient Overlay: White fade in light mode */}
                          <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-[#020617]/80 via-transparent to-transparent opacity-50 transition-colors duration-300"></div>
                       </div>
                    </div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;