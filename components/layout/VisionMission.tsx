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

  return (
    // ✅ Updated: Light mode background 'bg-white', Dark mode 'dark:bg-[#020617]'
    <section className="relative py-28 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-300">

      {/* ================= HERO STYLE BACKGROUND ================= */}
      {/* Stars Pattern: Inverted in light mode */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none invert dark:invert-0"></div>

      {/* Large Ambient Glows: Adjusted for light mode visibility */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-[120px] transition-colors duration-300"></div>
      <div className="absolute top-[-15%] right-[-10%] w-[400px] h-[400px] bg-green-200/40 dark:bg-green-900/15 rounded-full blur-[120px] transition-colors duration-300"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-[120px] transition-colors duration-300"></div>
      <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] bg-green-200/40 dark:bg-green-900/15 rounded-full blur-[120px] transition-colors duration-300"></div>

      {/* Small Cosmos Elements */}
      <div className="absolute top-[15%] right-[20%] w-3 h-3 rounded-full bg-blue-500/80 dark:bg-blue-400/80 blur-[2px] shadow-lg animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-[15%] left-[20%] w-3 h-3 rounded-full bg-blue-500/80 dark:bg-blue-400/80 blur-[2px] shadow-lg animate-pulse pointer-events-none"></div>
      {/* ========================================================== */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >

          {[
            { title: "KSG Vision", icon: Eye, glow: "orange" },
            { title: "KSG Mission", icon: Rocket, glow: "blue" },
            { title: "KSG Values", icon: Gem, glow: "green" },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -14, scale: 1.03, rotateX: 6 }}
              className="
                group relative
                w-full max-w-[300px]
                min-h-[330px]
                /* ✅ Updated Card Styles for Light/Dark Mode */
                bg-white/80 dark:bg-white/3 
                backdrop-blur-2xl
                border border-gray-200 dark:border-white/10
                rounded-[1.5rem]
                p-6
                flex flex-col
                shadow-xl dark:shadow-lg
                transition-all duration-500
                overflow-hidden
              "
            >
              {/* Gradient Border Glow */}
              <div className="absolute inset-0 rounded-[1.5rem] bg-gradient-to-br from-orange-500/20 via-green-500/10 to-blue-500/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"></div>

              {/* Light Sweep */}
              <div className="absolute -inset-1 bg-gradient-to-r from-transparent via-white/40 dark:via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              {/* Glow Orb - Adjusted colors dynamically */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 bg-${item.glow}-500/30 dark:bg-${item.glow}-500/20 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

              {/* Icon Container */}
              <div className="relative w-14 h-14 mb-5 group-hover:scale-110 transition-transform duration-300">
                <div className="absolute inset-0 bg-white/50 dark:bg-white/10 rounded-xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-green-500 rounded-xl flex items-center justify-center shadow-lg">
                  <item.icon className="text-white" size={28} />
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold mb-3 relative z-10">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600 dark:from-orange-400 dark:to-green-400">
                  {item.title}
                </span>
              </h3>

              {/* Description - ✅ Updated Text Colors */}
              <p className="
                text-sm leading-relaxed tracking-tight
                text-gray-600 dark:text-gray-300/90
                group-hover:text-gray-900 dark:group-hover:text-gray-200
                transition-colors duration-300
                relative z-10
              ">
                {item.title === "KSG Vision" && 
                  "Our vision is to create an exceptional client-centric organisation to provide single window corporate advisory services with cost-effective solution while upholding exceptional quality and integrity."}

                {item.title === "KSG Mission" && 
                  "We are dedicated to delivering effective and efficient corporate advisory services with integrity and accountability that delights our clients."}

                {item.title === "KSG Values" && 
                  "We are responsible, accountable, efficient and effective corporate advisor. We promote honesty, integrity and quality in all we do. We encourage innovation to meet the challenges."}
              </p>

            </motion.div>
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;