"use client";

import { UserCheck, Headset, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const WhyChoose = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Experienced Advisors",
      desc: "Qualified professional having different industries experience",
      gradient: "from-orange-500 to-pink-500",
      textGradient: "from-orange-600 via-pink-600 to-pink-500 dark:from-orange-200 dark:via-white dark:to-pink-200", 
      shadow: "shadow-orange-500/20",
    },
    {
      icon: Headset,
      title: "24/7 Dedicated Team Support",
      desc: "Our dedicated team will be available 24/7",
      gradient: "from-blue-500 to-cyan-500",
      textGradient: "from-blue-600 via-cyan-600 to-cyan-500 dark:from-blue-200 dark:via-white dark:to-cyan-200",
      shadow: "shadow-blue-500/20",
    },
    {
      icon: ShieldCheck,
      title: "Unparalleled Quality",
      desc: "We believe in high integrity & quality",
      gradient: "from-green-500 to-emerald-600",
      textGradient: "from-green-600 via-emerald-600 to-emerald-500 dark:from-green-200 dark:via-white dark:to-emerald-200",
      shadow: "shadow-green-500/20",
    },
  ];

  // Floating for Cards (Unchanged)
  const floatCard = (delay: number) => ({
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  // Floating for Image (Unchanged)
  const floatImage = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 1, -1, 0],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    // ✅ Updated: Removed borders and ensured smooth background transition
    <section className="relative w-full py-24 overflow-hidden bg-slate-50 dark:bg-[#05205b] border-none transition-colors duration-300">

      {/* ================= HERO BACKGROUND ONLY ================= */}

      {/* Stars Pattern: Inverted in light mode */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none invert dark:invert-0"></div>

      {/* ===== TOP AMBIENT GLOWS: Adjusted for Light Mode ===== */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>
      <div className="absolute top-[-15%] right-[-10%] w-[400px] h-[400px] bg-green-200/40 dark:bg-green-900/15 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>

      {/* ===== BOTTOM AMBIENT GLOWS ===== */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>
      <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] bg-green-200/40 dark:bg-green-900/15 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>

      {/* ===== COSMIC DOTS ===== */}
      <div className="absolute top-[15%] right-[20%] w-3 h-3 rounded-full bg-blue-500/80 dark:bg-blue-400/80 blur-[2px] shadow-lg animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[15%] left-[20%] w-3 h-3 rounded-full bg-blue-500/80 dark:bg-blue-400/80 blur-[2px] shadow-lg animate-pulse pointer-events-none"></div>

      {/* ======================================================== */}

      {/* ✅ Shimmer CSS (same) */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer { 
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* ✅ Updated: Main Container Width & Spacing to match Hero (99% / 95% 2xl) */}
      <div className="relative z-10 w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto px-4 lg:px-8">

        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          
          <span className="relative inline-block py-1.5 px-4 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none  bg-white/60 dark:bg-white/20 overflow-hidden mb-6 shadow-sm">
            <div className="absolute inset-0 animate-shimmer"></div>
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600 dark:from-orange-400 dark:to-green-400 font-bold uppercase text-sm tracking-[0.2em]">
              Why Choose Us
            </span>
          </span>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white leading-tight transition-colors duration-300">
            We bring our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600 dark:from-orange-400 dark:to-pink-500 animate-pulse">
              expertise
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-500 animate-pulse">
              integrity
            </span>{" "}
            to your business
          </h2>

          <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 dark:text-white leading-tight transition-colors duration-300">
            to help you achieve the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-600 dark:from-orange-400 dark:to-pink-500 animate-pulse">
              best
            </span>{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-600 dark:from-green-400 dark:to-emerald-500 animate-pulse">
              outcomes
            </span>{" "}
            in the shortest time frames.
          </h2>

          <p className="text-gray-600 dark:text-gray-300 text-base md:text-lg leading-relaxed transition-colors duration-300">
            We bring our expertise and integrity to your business, to help you achieve the best outcomes in the shortest time frames.
            Our firm represents a combination of specialized skills that is geared to offer sound corporate solutions and advices.
          </p>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT CARDS */}
          <div className="space-y-6 order-2 lg:order-1">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                variants={floatCard(idx * 2)} 
                animate="animate"
              >
                {/* ✅ Updated Card Styles for Light/Dark Mode */}
                <div className={`group relative bg-white dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/5 p-6 rounded-2xl transition-all duration-300 hover:shadow-xl dark:hover:bg-white/10 dark:hover:border-white/20 hover:border-gray-300 ${item.shadow}`}>
                  <div className="flex items-center gap-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}>
                      <item.icon className="text-white" size={30} />
                    </div>

                    <div>
                      {/* Title: Dark Text in Light Mode */}
                      <h3 className={`text-xl font-bold mb-1 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${item.gradient} transition-all duration-300`}>
                        {item.title}
                      </h3>

                      {/* Desc: Gray Text */}
                      <p className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* RIGHT IMAGE */}
          <motion.div 
            variants={floatImage}
            animate="animate"
            className="relative group order-1 lg:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl">
              <img
                src="https://images.pexels.com/photos/2041629/pexels-photo-2041629.jpeg"
                alt="Why Choose Us"
                className="w-full h-full object-cover transform transition-transform duration-[10s] ease-linear group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 dark:from-[#020617] via-transparent to-transparent opacity-80 transition-colors duration-300"></div>

              {/* Floating Badge on Image */}
              <div className="absolute bottom-6 right-6 bg-white/80 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20 p-4 rounded-xl shadow-lg transition-colors duration-300">
                <p className="text-gray-900 dark:text-white font-bold text-lg transition-colors duration-300">100%</p>
                <p className="text-green-600 dark:text-green-300 text-xs uppercase tracking-wide transition-colors duration-300">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;