"use client";

import Link from "next/link";
import { ArrowRight, FileText, BarChart, Wallet, Building2 } from "lucide-react";
import { motion } from "framer-motion"; 

const services = [
  {
    id: "accounting",
    title: "Accounting & Audit Support",
    icon: FileText,
    desc: "Maintenance and Audit of business accounting records and financial details and provides reports informing the management about financial status.",
    image: "https://images.pexels.com/photos/6863260/pexels-photo-6863260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/services/accounting"
  },
  {
    id: "risk",
    title: "Risk Advisory",
    icon: BarChart,
    desc: "With rapidly evolving client needs, we identify and manage potential risks to ensure your corporate affairs and strategies align with sustainable growth.",
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/services/risk"
  },
  {
    id: "tax",
    title: "TAX Advisory",
    icon: Wallet,
    desc: "Reducing the impact of complexity of tax related concerns and forming your tax strategies align with your organisational goals.",
    image: "https://images.pexels.com/photos/6863556/pexels-photo-6863556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/services/tax"
  },
  {
    id: "business-setup",
    title: "Business Setup/PRO",
    icon: Building2,
    desc: "Evaluate the feasibility of setting up a Mainland UAE Branch / Mainland UAE LLC / FZ branch / FZ Company to undertake the proposed activities.",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/services/business-setup"
  }
];

export default function ServicesCards() {
  
  // Left-to-Right Continuous Sway Animation for Cards
  const horizontalSway = (index: number) => ({
    animate: {
      x: index % 2 === 0 ? [0, 10, 0] : [0, -10, 0], 
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.2,
      },
    },
  });

  return (
    // ✅ Updated: Background & Gradient matched to VisionMission styling
    <section className="py-16 md:py-10 overflow-hidden relative bg-slate-50 dark:bg-gradient-to-b dark:from-[#0F333D] dark:to-[#09102d] transition-colors duration-300">
      
      {/* ================= STAR BACKGROUND (From VisionMission) ================= */}
      {/* Deep Stars */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-90 mix-blend-screen"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
          backgroundSize: "280px 280px",
          filter: "brightness(1.8) saturate(1.5)",
        }}
      />

      {/* Mid Stars */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-70 mix-blend-screen animate-stars-slow"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/tiny-stars.png')",
          backgroundSize: "180px 180px",
          filter: "brightness(2) saturate(1.6)",
        }}
      />

      {/* Near Stars */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen animate-stars-fast"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
          backgroundSize: "120px 120px",
          filter: "brightness(2.2) saturate(1.8)",
        }}
      />

      {/* Subtle Star Color Tint */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-cyan-400/10 via-transparent to-blue-500/10"></div>

      {/* Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-[120px]"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-green-200/40 dark:bg-green-900/20 rounded-full blur-[120px]"></div>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        @keyframes starsSlow {
          from { transform: translateY(0); }
          to { transform: translateY(-200px); }
        }
        @keyframes starsFast {
          from { transform: translateY(0); }
          to { transform: translateY(-400px); }
        }
        .animate-stars-slow {
          animation: starsSlow 120s linear infinite;
        }
        .animate-stars-fast {
          animation: starsFast 60s linear infinite;
        }
      `}</style>

      {/* ====================================================== */}

      {/* ✅ Updated: Main Container Width & Spacing matched with Hero */}
      <div className="relative z-10 w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-10 md:mb-14"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-500 transition-colors duration-300">
            Solutions We Provide
          </h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: false }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-1.5 bg-gradient-to-r from-green-400 to-blue-500 mx-auto rounded-full"
          ></motion.div>
        </motion.div>

        {/* ✅ Cards Grid: justify-items-center fixes spacing on large screens */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full w-full flex justify-center"
            >
              <motion.div 
                variants={horizontalSway(index)}
                animate="animate"
                whileHover={{ y: -10, scale: 1.02, transition: { duration: 0.3 } }}
                // ✅ Updated: Fixed width (max-w-[350px]) ensures cards don't stretch on large screens
                className="group w-full max-w-[350px] rounded-2xl overflow-hidden transition-all duration-300 border border-gray-200 dark:border-white/10 flex flex-col h-full bg-white/80 dark:bg-white/5 backdrop-blur-md shadow-sm dark:shadow-none hover:shadow-xl"
              >
                {/* Image */}
                <div className="relative h-40 sm:h-44 lg:h-40 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#020617]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                    <service.icon className="text-white w-10 h-10" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow relative">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="p-1.5 bg-blue-100 dark:bg-blue-50/20 rounded-lg text-blue-600 dark:text-white group-hover:bg-green-100 dark:group-hover:bg-green-500/30 group-hover:text-green-600 dark:group-hover:text-white transition-colors shrink-0 -mt-1">
                      <service.icon size={17} />
                    </div>
                    {/* Title */}
                    <h3 className="text-sm md:text-[15px] font-bold text-gray-900 dark:text-white leading-tight group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors pt-0.5">
                      {service.title}
                    </h3>
                  </div>

                  {/* Desc */}
                  <p className="text-gray-600 dark:text-gray-300 text-xs md:text-sm leading-relaxed mb-4 line-clamp-3 flex-grow transition-colors duration-300">
                    {service.desc}
                  </p>

                  <Link 
                    href={service.link}
                    className="inline-flex items-center gap-2 font-bold text-xs md:text-sm mt-auto group/link"
                  >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:from-orange-500 hover:to-green-500 transition-all">
                      Read More 
                    </span>
                    <ArrowRight size={14} className="text-green-600 transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>

                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-green-500 group-hover:w-full transition-all duration-500"></div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}