"use client";

import { Eye, Rocket, Gem } from "lucide-react";
import { motion } from "framer-motion";

const VisionMission = () => {
  
  // Staggered Container Animation
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Card Entrance Animation (Pop Up)
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        damping: 20,
        stiffness: 100
      } 
    },
  };

  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      
      {/* Subtle Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }}></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // ✅ Every Scroll Animation
        >
            
            {/* 1. VISION CARD (Orange) */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white p-8 rounded-[2rem] shadow-md hover:shadow-orange-500/20 transition-all duration-500 overflow-hidden"
            >
                {/* Background Blob */}
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-orange-100 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Icon Section */}
                <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 bg-orange-100 rounded-2xl transform group-hover:rotate-6 transition-transform duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center transform group-hover:-rotate-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Eye className="text-white" size={32} strokeWidth={1.5} />
                    </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 transition-colors">
                  {/* ✅ Updated Gradient: Orange to Off-White (Orange-200) for visibility */}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-400 to-orange-200">KSG</span> Vision
                </h3>
                
                <p className="text-sm leading-tight text-left text-gray-600 tracking-tighter [word-spacing:-1px]">
                    Our vision is to create an exceptional client-centric organisation to provide single window corporate advisory services with cost-effective solution while upholding exceptional quality and integrity.
                </p>
            </motion.div>

            {/* 2. MISSION CARD (Blue) */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white p-8 rounded-[2rem] shadow-md hover:shadow-blue-500/20 transition-all duration-500 overflow-hidden"
            >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-blue-100 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 bg-blue-100 rounded-2xl transform group-hover:rotate-6 transition-transform duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center transform group-hover:-rotate-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Rocket className="text-white" size={32} strokeWidth={1.5} />
                    </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 transition-colors">
                  {/* ✅ Updated Gradient: Orange to Off-White */}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-400 to-orange-200">KSG</span> Mission
                </h3>
                
                <p className="text-sm leading-tight text-left text-gray-600 tracking-tighter [word-spacing:-1px]">
                    We are dedicated to delivering effective and efficient corporate advisory services with integrity and accountability that delights our clients.
                </p>
            </motion.div>

            {/* 3. VALUES CARD (Green) */}
            <motion.div 
              variants={cardVariants}
              whileHover={{ y: -10, scale: 1.02 }}
              className="group relative bg-white p-8 rounded-[2rem] shadow-md hover:shadow-green-500/20 transition-all duration-500 overflow-hidden"
            >
                <div className="absolute -right-10 -top-10 w-40 h-40 bg-green-100 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative w-16 h-16 mb-6">
                    <div className="absolute inset-0 bg-green-100 rounded-2xl transform group-hover:rotate-6 transition-transform duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center transform group-hover:-rotate-3 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                        <Gem className="text-white" size={32} strokeWidth={1.5} />
                    </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 transition-colors">
                  {/* ✅ Updated Gradient: Orange to Off-White */}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 via-orange-400 to-orange-200">KSG</span> Values
                </h3>
                
                <p className="text-sm leading-tight text-left text-gray-600 tracking-tighter [word-spacing:-1px]">
                    We are responsible, accountable, efficient and effective corporate advisor. We promote honesty, integrity and quality in all we do. We encourage innovation to meet the challenges.
                </p>
            </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default VisionMission;   