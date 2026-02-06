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

// ================== FEATURES ==================
const features = [
  { icon: FileText, title: "Accounting & Audit Support", href: "/services/accounting" },
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
    <section
      className="
        relative w-full
        mt-16 xl:mt-20 2xl:mt-24
        pb-8 lg:pb-0
        overflow-hidden
        flex items-center
        min-h-[600px]
        lg:min-h-[85vh]
        2xl:min-h-[80vh]
        min-[2000px]:min-h-[75vh]
        bg-slate-50 dark:bg-[#151B33]
      "
    >
      {/* ===== BACKGROUND IMAGE ===== */}
      <img
        src="https://ik.imagekit.io/travechela/WhatsApp%20Image%202026-02-06%20at%2014.54.19.jpeg"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Texture Overlay */}
      <div className="absolute inset-0 z-10 opacity-30 dark:opacity-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none invert dark:invert-0" />

      {/* ================= MAIN CONTAINER ================= */}
      <div className="relative z-20 w-full max-w-8xl min-[1350px]:max-w-[95%] 2xl:max-w-[90%] mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">

          {/* ================= LEFT CONTENT ================= */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center lg:justify-start 2xl:pt-12 min-[2000px]:pt-6">

            {/* Slider */}
            <div className="relative h-auto min-h-[260px] lg:min-h-[300px] 2xl:min-h-[340px]">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                    index === currentSlide
                      ? "opacity-100 translate-y-0 z-10"
                      : "opacity-0 translate-y-6 -z-10 pointer-events-none"
                  }`}
                >
                  <h1 className="text-2xl sm:text-3xl lg:text-[2rem] xl:text-4xl 2xl:text-5xl font-bold leading-[1.15] mb-6 text-white max-w-4xl whitespace-normal lg:whitespace-nowrap">
                    {slide.heading}
                    <br className="hidden lg:block" />
                    <span className="block mt-1 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                      {slide.highlight}
                    </span>
                  </h1>

                  <p className="text-gray-200 text-sm sm:text-base mb-8 max-w-xl leading-relaxed">
                    {slide.desc}
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/contact"
                      className="px-8 py-3.5 rounded-tl-[30px] rounded-br-[30px]
                                 bg-gradient-to-r from-green-400 to-blue-500
                                 text-white text-sm font-bold
                                 shadow-lg hover:scale-105 transition-all"
                    >
                      Get In Touch
                    </Link>

                    <Link
                      href="/"
                      className="px-8 py-3.5 rounded-tl-[30px] rounded-br-[30px]
                                 bg-white/20 dark:bg-white/5
                                 backdrop-blur-md
                                 border border-white/20
                                 text-sm font-bold
                                 bg-gradient-to-r from-green-400 to-blue-500
                                 bg-clip-text text-transparent
                                 hover:bg-white/30 hover:scale-105
                                 transition-all duration-300"
                    >
                      Explore Services
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* ================= FEATURES ================= */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((f, i) => (
                <Link
                  key={i}
                  href={f.href}
                  className="flex items-center gap-3 px-3 py-2
                             rounded-tl-[20px] rounded-br-[20px]
                             bg-white/20 dark:bg-white/5
                             backdrop-blur-md
                             border border-white/20
                             hover:bg-white/30 hover:scale-[1.02]
                             transition-all"
                >
                  <div className="bg-gradient-to-br from-blue-100/80 to-green-100/80 dark:from-blue-500/20 dark:to-green-500/20 rounded-lg p-2">
                    <f.icon className="w-4 h-4 text-green-400" />
                  </div>

                  <span className="text-xs sm:text-sm font-semibold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_1px_1px_rgba(0,0,0,0.6)]">
                    {f.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* ================= RIGHT SIDE EMPTY (BG VISIBILITY) ================= */}
          <div className="w-full lg:w-1/2 min-h-[280px] lg:min-h-[400px]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
