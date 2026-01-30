"use client";

import { Eye, Rocket, Gem } from "lucide-react";
import { motion } from "framer-motion";

const VisionMission = () => {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 18, stiffness: 120 },
    },
  };

  // ✅ Data with Rotating Gradients
  const cards = [
    { 
      title: "KSG Vision", 
      icon: Eye, 
      // Conic Gradient for the rotating effect
      rotateGradient: "bg-[conic-gradient(from_0deg,transparent_0_300deg,#f97316_360deg)]",
      iconColor: "text-orange-500",
      iconBg: "bg-orange-500/10 border-orange-500/20",
      iconShadow: "shadow-orange-500/40"
    },
    { 
      title: "KSG Mission", 
      icon: Rocket, 
      rotateGradient: "bg-[conic-gradient(from_0deg,transparent_0_300deg,#0ea5e9_360deg)]",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10 border-blue-500/20",
      iconShadow: "shadow-blue-500/40"
    },
    { 
      title: "KSG Values", 
      icon: Gem, 
      rotateGradient: "bg-[conic-gradient(from_0deg,transparent_0_300deg,#22c55e_360deg)]",
      iconColor: "text-green-500",
      iconBg: "bg-green-500/10 border-green-500/20",
      iconShadow: "shadow-green-500/40"
    },
  ];

  return (
    <section className="relative py-28 overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#09102d] dark:to-[#0F333D]  transition-colors duration-300">

      {/* ================= BACKGROUND EFFECTS ================= */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none invert dark:invert-0"></div>
      
      {/* Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-[120px] transition-colors duration-300"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-green-200/40 dark:bg-green-900/20 rounded-full blur-[120px] transition-colors duration-300"></div>
      
      {/* Custom Keyframe for smooth rotation */}
      <style jsx>{`
        @keyframes spin-border {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-border {
          animation: spin-border 4s linear infinite;
        }
      `}</style>

      {/* ================= MAIN CONTAINER ================= */}
      {/* ✅ Layout matched with Hero Section */}
      <div className="relative z-10 w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto px-4 lg:px-8">

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {cards.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              // ✅ Updated: Reduced width to max-w-[320px]
              className="group relative w-full max-w-[320px] min-h-[350px] flex items-center justify-center rounded-[24px] overflow-hidden bg-white dark:bg-[#05205b] shadow-2xl dark:shadow-black/40"
            >
              
              {/* 1. THE ROTATING BORDER LAYER (Behind content) */}
              {/* This div spins continuously to create the moving border effect */}
              <div className={`absolute inset-[-50%] ${item.rotateGradient} animate-spin-border opacity-100`}></div>

              {/* 2. INNER MASK (The actual card background) */}
              {/* 'inset-[3px]' creates the border thickness */}
              <div className="absolute inset-[3px] rounded-[21px] bg-slate-50 dark:bg-[#0c1936] z-10"></div>

              {/* 3. CARD CONTENT (Z-20 to sit on top) */}
              <div className="relative z-20 flex flex-col p-8 h-full w-full">
                
                {/* Watermark Icon (Faded Background) */}
                <div className={`absolute -top-4 -right-4 opacity-5 dark:opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 transform rotate-12 ${item.iconColor}`}>
                  <item.icon size={160} />
                </div>

                {/* Icon Box */}
                <div className={`
                  w-16 h-16 mb-6 rounded-2xl flex items-center justify-center 
                  border backdrop-blur-sm transition-all duration-300 group-hover:scale-110
                  ${item.iconBg} ${item.iconColor} shadow-lg ${item.iconShadow}
                `}>
                  <item.icon size={32} strokeWidth={2} />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white tracking-wide">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-300 font-medium relative z-10">
                  {item.title === "KSG Vision" && 
                    "Our vision is to create an exceptional client-centric organisation to provide single window corporate advisory services with cost-effective solution while upholding exceptional quality and integrity."}

                  {item.title === "KSG Mission" && 
                    "We are dedicated to delivering effective and efficient corporate advisory services with integrity and accountability that delights our clients."}

                  {item.title === "KSG Values" && 
                    "We are responsible, accountable, efficient and effective corporate advisor. We promote honesty, integrity and quality in all we do. We encourage innovation to meet the challenges."}
                </p>
              </div>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;