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
  },
  {
    id: 2,
    heading: "Fast Growing Corporate Consulting Firm Providing",
    highlight: "Client-Focused Solutions",
    desc: "Your strategic partner for sustainable business growth, offering unparalleled corporate advisory services.",
  },
  {
    id: 3,
    heading: "Proactive and Cost Effective Tailor Made",
    highlight: "Solutions For New Normal",
    desc: "Helping businesses navigate the changing economic landscape with professionally equipped strategies.",
  },
];

// Static Features
const features = [
  {
    icon: FileText,
    title: "Accounting & Audit Support",
    href: "/services/accounting",
  },
  { icon: Wallet, title: "Tax Advisory", href: "/services/tax" },
  { icon: Building, title: "Business Setup", href: "/services/business-setup" },
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
    <section className="relative w-full pt-0 pb-6 lg:pt-12 2xl:pt-30 lg:pb-0 overflow-hidden bg-slate-50 dark:bg-[#151B33] transition-colors duration-300 flex items-center justify-center min-h-[600px] lg:min-h-[80vh] 2xl:min-h-[90vh]">
      
      {/* ===== FULL HERO BACKGROUND IMAGE ===== */}
      {/* ✅ FIX: Removed top padding on image, ensured it covers full area properly on large screens */}
      <img
        src="https://www.virtualaccountants.ae/wp-content/uploads/2025/07/Virtual-Accountants-Home-Banner-image.jpg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />

      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-900/25 via-[#151B33] to-[#151B33] opacity-70 pointer-events-none dark:block hidden z-10"></div>

      <div className="absolute inset-0 z-10 opacity-30 dark:opacity-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none invert dark:invert-0"></div>

      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-200/50 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none z-10"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-200/50 dark:bg-green-900/15 rounded-full blur-[120px] pointer-events-none z-10"></div>

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-20 w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto h-full px-4 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24 min-h-[350px] lg:min-h-[400px]">
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
                  <h1 className="text-2xl sm:text-3xl lg:text-[2rem] xl:text-4xl 2xl:text-5xl font-bold leading-[1.15] mb-6 text-white transition-colors duration-300 max-w-4xl tracking-tight whitespace-normal sm:whitespace-nowrap">
                    {slide.heading} <br className="hidden lg:block" />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-600 dark:from-green-400 dark:to-blue-500 leading-tight block mt-1">
                      {slide.highlight}
                    </span>
                  </h1>

                  <p className="text-gray-200 text-sm sm:text-base lg:text-base mb-8 max-w-xl leading-relaxed font-light">
                    {slide.desc}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="px-8 py-3.5 rounded-tl-[30px] rounded-br-[30px] bg-gradient-to-r from-green-400 to-blue-500 text-white text-sm font-bold shadow-lg hover:scale-105 transition-all"
                    >
                      Get In Touch
                    </Link>

                    <Link
                      href="/"
                      className="px-8 py-3.5 rounded-tl-[30px] rounded-br-[30px] bg-white/20 dark:bg-white/5 border border-gray-300 dark:border-white/10 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent text-sm font-bold hover:scale-105"
                    >
                      Explore Services
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Static Features */}
            <div className="mt-0 pt-0 w-full grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <Link
                  key={i}
                  href={f.href}
                  className="flex items-center gap-3 px-3 py-2 rounded-tl-[20px] rounded-br-[20px] bg-white/20 dark:bg-white/5 border border-white/20 shadow-sm cursor-pointer w-full"
                >
                  <div className="bg-gradient-to-br from-blue-100 to-green-100 dark:from-blue-500/20 to-green-500/20 rounded-lg p-2">
                    <f.icon className="w-4 h-4 text-green-400" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
                    {f.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* ================= RIGHT IMAGE (LAYERED IMAGES) ================= */}
          <div className="w-full lg:w-1/2 flex justify-end items-start relative z-20">
            <div className="relative w-full max-w-[520px] h-[520px] lg:h-[600px]">
              {/* Top Bigger Image */}
              <img
                src="https://ik.imagekit.io/travechela/pexels-gustavo-fring-4173357-removebg-preview.png"
                alt="Top Person"
                className="absolute top-30 2xl:top-40 right-[-10%] 2xl:right-[5%] w-[65%] sm:w-[60%] lg:w-[100%] 2xl:w-[150%] object-contain z-20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;