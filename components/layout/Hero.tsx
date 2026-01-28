"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { FileText, Wallet, Building } from "lucide-react";

// ================== SLIDER DATA ==================
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
  // {
  //   id: 4,
  //   heading: "Professionally Equipped, Economically Viable",
  //   highlight: "Highly Committed Team",
  //   desc: "Qualitatively unparalleled services delivered by a team of Chartered Accountants, ACCAs, and MBAs.",
  //   image: "https://ik.imagekit.io/travechela/meeting-4784909.jpg",
  // },
  // {
  //   id: 5,
  //   heading: "Your Strategic Partner for Sustainable",
  //   highlight: "Corporate Excellence",
  //   desc: "Gaining a competitive edge through unparalleled customer service and exceptional client engagement.",
  //   image: "https://ik.imagekit.io/travechela/istockphoto-1384233087-1024x1024.jpg",
  // },
];

// Static Features
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
    <section className="relative w-full pt-0 pb-16 lg:pt-12 lg:pb-24 overflow-hidden bg-slate-50 dark:bg-[#151B33] transition-colors duration-300 flex items-center justify-center">
      
      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/25 via-[#151B33] to-[#151B33] opacity-70 pointer-events-none dark:block hidden"></div>

      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none invert dark:invert-0"></div>
      
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-200/50 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-200/50 dark:bg-green-900/15 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>

      <div className="absolute top-[15%] right-[10%] w-3 h-3 rounded-full bg-blue-500/80 dark:bg-blue-400/80 blur-[2px] shadow-lg animate-pulse"></div>
      <div className="absolute bottom-[20%] left-[5%] w-2 h-2 rounded-full bg-orange-400/60 dark:bg-orange-200/60 blur-[0.5px] animate-pulse"></div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-10 w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto h-full px-4 lg:px-8">
        
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 min-h-[500px]">
          
          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center relative z-20 2xl:-mt-24">
            
            <div className="relative h-[320px] sm:h-[280px] lg:h-[300px] w-full">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute top-0 left-0 w-full transition-all duration-1000 ease-in-out flex flex-col items-start text-left ${
                    index === currentSlide 
                      ? "opacity-100 translate-y-0 z-10" 
                      : "opacity-0 translate-y-4 -z-10 pointer-events-none"
                  }`}
                >
                  <h1 className="text-2xl sm:text-3xl lg:text-[2rem] xl:text-3xl font-bold leading-[1.15] mb-6 text-gray-900 dark:text-white transition-colors duration-300 max-w-4xl tracking-tight whitespace-normal sm:whitespace-nowrap">
                    {slide.heading} <br className="hidden lg:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600 dark:from-green-400 dark:to-blue-500 leading-tight block mt-1">
                      {slide.highlight}
                    </span>
                  </h1>

                  <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-base mb-8 max-w-xl leading-relaxed font-light transition-colors duration-300 ">
                    {slide.desc}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link href="/contact" className="px-8 py-3.5 rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none bg-gradient-to-r from-orange-500 to-green-600 dark:from-orange-500 dark:to-green-500 text-white text-sm font-bold shadow-lg hover:shadow-green-500/30 hover:scale-105 transition-all duration-300">
                      Get In Touch
                    </Link>
                    <Link href="/" aria-disabled="true" className="px-8 py-3.5 rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none bg-white/50 dark:bg-white/5 border border-gray-300 dark:border-white/10 text-gray-900 dark:text-white text-sm font-bold hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                      Explore Services
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Static Features */}
            <div className="mt-0 pt-0 w-full grid grid-cols-1 sm:grid-cols-3 gap-4 2xl:gap-6 transition-colors duration-300">
               {features.map((f, i) => (
                 <Link key={i} href={f.href} className="flex items-center gap-3 px-3 py-2 2xl:px-5 2xl:py-3 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none bg-white/40 dark:bg-white/5 hover:bg-white/80 dark:hover:bg-white/10 border border-gray-200 dark:border-white/5 hover:border-green-500/30 transition-all group shadow-sm dark:shadow-none cursor-pointer w-full">
                    <div className="bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-500/20 dark:to-green-500/20 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0 p-2">
                      <f.icon className="w-3 h-3 2xl:w-6 2xl:h-6 text-green-600 dark:text-green-300" />
                    </div>
                    
                    <span className="text-xs sm:text-sm 2xl:text-lg font-semibold text-gray-700 dark:text-gray-300 group-hover:text-black dark:group-hover:text-white transition-colors whitespace-normal 3xl:whitespace-nowrap">
                      {f.title}
                    </span>
                 </Link>
               ))}
            </div>

          </div>

          {/* ================= RIGHT IMAGE ================= */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative z-0 pl-0 2xl:pl-0 pointer-events-none lg:pr-18 xl:pr-25 2xl:pr-62 lg:-mt-76 xl:-mt-30 2xl:mt-32">
              
             <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] 2xl:h-[800px] lg:w-[130%] 2xl:w-[150%] mx-auto lg:-mr-[20%] 2xl:-mr-[35%] lg:-mt-17 xl:-mt-10 2xl:-mt-20">

                {/* ❌ Glow Backdrop REMOVED */}

                <div className="relative w-full h-full overflow-visible">
                  {slides.map((slide, index) => (
                    <div
                      key={slide.id}
                      className={`absolute inset-0 w-full h-full transition-all duration-1000 ease-in-out ${
                        index === currentSlide ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-110 blur-sm"
                      }`}
                    >
                       <div 
                         className="absolute inset-0 bg-contain bg-no-repeat bg-right-bottom 2xl:bg-right"
                         style={{ backgroundImage: `url('${slide.image}')` }}
                       >
                          {/* Bottom Fade */}
                          <div className="absolute bottom-0 left-0 right-0 h-1/6 bg-gradient-to-t from-slate-50/10 via-slate-50/5 to-transparent dark:from-[#151B33] dark:via-[#151B33]/50 dark:to-transparent"></div>

                          {/* Left Fade */}
                          <div className="absolute top-0 bottom-0 left-0 w-1/6 bg-gradient-to-r from-slate-50/20 via-transparent to-transparent dark:from-[#151B33] dark:via-[#151B33]/1 dark:to-transparent"></div>
                          
                          {/* Top Fade */}
                          <div className="absolute top-0 left-0 right-0 h-1/6 bg-gradient-to-b from-slate-50/10 via-transparent to-transparent dark:from-[#151B33] dark:via-transparent dark:to-transparent"></div>
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
