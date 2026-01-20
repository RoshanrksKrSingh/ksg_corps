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
      textGradient: "from-orange-200 via-white to-pink-200",
      shadow: "shadow-orange-500/20",
    },
    {
      icon: Headset,
      title: "24/7 Dedicated Team Support",
      desc: "Our dedicated team will be available 24/7",
      gradient: "from-blue-500 to-cyan-500",
      textGradient: "from-blue-200 via-white to-cyan-200",
      shadow: "shadow-blue-500/20",
    },
    {
      icon: ShieldCheck,
      title: "Unparalleled Quality",
      desc: "We believe in high integrity & quality",
      gradient: "from-green-500 to-emerald-600",
      textGradient: "from-green-200 via-white to-emerald-200",
      shadow: "shadow-green-500/20",
    },
  ];

  // Continuous Floating Animation for Background Blobs
  const blobAnimation = {
    animate: {
      x: [0, 30, -30, 0],
      y: [0, -50, 50, 0],
      scale: [1, 1.1, 0.9, 1],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Continuous Floating for Cards (Staggered)
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

  // Continuous Floating for Main Image
  const floatImage = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 1, -1, 0], // Subtle rotation for realism
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="relative w-full py-24 bg-[#041D2D] overflow-hidden rounded-2xl">
      
      {/* ✅ Added CSS for Shimmer Animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer { 
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* =========================================
          1. CONTINUOUS BACKGROUND ANIMATION
      ========================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          variants={blobAnimation}
          animate="animate"
          className="absolute -top-20 -left-20 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"
        />
        <motion.div
          variants={blobAnimation}
          animate="animate"
          transition={{ delay: 2 }} 
          className="absolute top-40 -right-20 w-[400px] h-[400px] bg-green-600/10 rounded-full blur-[100px]"
        />
        <motion.div
          variants={blobAnimation}
          animate="animate"
          transition={{ delay: 5 }}
          className="absolute -bottom-20 left-1/3 w-[600px] h-[400px] bg-orange-600/10 rounded-full blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
          >
            {/* ✅ Updated Badge with Shimmer Animation (Matches About Us) */}
            <span className="relative inline-block py-1.5 px-4 rounded-full border border-white/10 bg-white/20 overflow-hidden mb-6">
              <div className="absolute inset-0 animate-shimmer"></div>
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 font-bold uppercase text-sm tracking-[0.2em]">
                Why Choose Us
              </span>
            </span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight"
          >
            We bring our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 animate-pulse">
              expertise
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse">
              integrity
            </span>{" "}
            to your business
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight"
          >
            to help you achieve the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500 animate-pulse">
              best
            </span>{" "}
            {/* and{" "} */}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 animate-pulse">
              outcomes
            </span>{" "}
            in the shortest time frames.
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
            className="text-gray-300 text-base md:text-lg leading-relaxed"
          >
            Why Choose Us
We bring our expertise and integrity to your business, to help you achieve the best outcomes in the shortest time frames.
Our firm represents a combination of specialized skills that is geared to offer sound corporate solutions and advices. The organization is a congregation of professionally qualified and experienced advisors who are committed to add value and optimize the benefits accruing to clients.
          </motion.p>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* 1. LEFT: FEATURE CARDS */}
          <div className="space-y-6 order-2 lg:order-1">
            {features.map((item, idx) => (
              <motion.div
                key={idx}
                variants={floatCard(idx * 2)} 
                animate="animate" 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.5, delay: idx * 0.2 }} 
              >
                <div 
                  className={`group relative bg-white/5 backdrop-blur-md border border-white/5 p-6 rounded-2xl transition-all duration-300 hover:bg-white/10 hover:border-white/20 hover:shadow-lg ${item.shadow} cursor-default`}
                >
                  <div className="flex items-center gap-6">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                    >
                      <item.icon className="text-white" size={30} strokeWidth={1.5} />
                    </div>

                    <div>
                      <h3 className={`text-xl font-bold mb-1 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${item.gradient} transition-all duration-300`}>
                        {item.title}
                      </h3>

                      <p className="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  
                  <div className="absolute right-0 top-0 w-32 h-32 bg-white/5 blur-[50px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 2. RIGHT: IMAGE */}
          <motion.div 
            variants={floatImage}
            animate="animate"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="relative group perspective-1000 order-1 lg:order-2"
          >
            <div className="relative rounded-3xl overflow-hidden border border-white/10 transform transition-transform duration-500 group-hover:rotate-y-2 group-hover:scale-[1.02]">
              <img
                src="https://images.pexels.com/photos/2041629/pexels-photo-2041629.jpeg"
                alt="Why Choose Us"
                className="w-full h-full object-cover transform transition-transform duration-[10s] ease-linear group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041D2D] via-transparent to-transparent opacity-80"></div>
              
              <div className="absolute bottom-6 right-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl">
                 <p className="text-white font-bold text-lg">100%</p>
                 <p className="text-green-300 text-xs uppercase tracking-wide">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;