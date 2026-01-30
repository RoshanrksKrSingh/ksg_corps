"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
  
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const fadeRight = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const fadeLeft = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#0F333D] dark:to-[#09102d] pt-10 pb-20 group font-sans transition-colors duration-300">
      
      {/* ================= STAR BACKGROUND SYSTEM ================= */}

      {/* Deep Stars */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-80 dark:opacity-90"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
          backgroundSize: "300px 300px"
        }}
      />

      {/* Mid Stars */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-50 dark:opacity-70 animate-stars-slow"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/tiny-stars.png')",
          backgroundSize: "180px 180px"
        }}
      />

      {/* Near Stars */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none opacity-40 dark:opacity-60 animate-stars-fast"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
          backgroundSize: "120px 120px"
        }}
      />

      {/* Glow Nebula */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/30 dark:bg-blue-600/25 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-green-400/30 dark:bg-green-600/20 rounded-full blur-[140px] pointer-events-none"></div>

      {/* ========================================================= */}

      {/* Animations */}
      <style jsx>{`
        @keyframes starsSlow {
          from { transform: translateY(0px); }
          to { transform: translateY(-200px); }
        }

        @keyframes starsFast {
          from { transform: translateY(0px); }
          to { transform: translateY(-400px); }
        }

        .animate-stars-slow {
          animation: starsSlow 120s linear infinite;
        }

        .animate-stars-fast {
          animation: starsFast 60s linear infinite;
        }
      `}</style>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto px-4 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT */}
          <div className="space-y-8">
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible">
              <span className="relative inline-block py-1.5 px-4 rounded-tl-[20px] rounded-br-[20px] border border-gray-300 dark:border-white/10 bg-white/60 dark:bg-white/20 overflow-hidden shadow-sm">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600 dark:from-green-400 dark:to-blue-500 font-bold uppercase text-xs tracking-[0.2em]">
                  About Us
                </span>
              </span>
            </motion.div>

            <motion.h2 className="text-3xl md:text-3xl font-bold leading-tight text-gray-900 dark:text-white" variants={fadeUp} initial="hidden" whileInView="visible">
              <span className="block">We help organizations to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-500">globalize their business,</span></span>
              <span className="block text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300 mt-2">develop institutional capacity, and tackle the organizational challenges</span>
            </motion.h2>

            <div className="space-y-4 text-sm md:text-base text-gray-700 dark:text-gray-300 text-justify">
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible">
                <strong className="text-gray-900 dark:text-white">KSG Corporate Services is</strong> a corporate consulting firm formed with the objective of providing unparalleled broad range of corporate advisory services including 
                <span className="text-gray-900 dark:text-white font-medium"> Tax Advisory, Accounting and Payroll outsourcing, Business Setup/PRO, Risk Management</span>.
              </motion.p>
            </div>

            <motion.div className="flex flex-col sm:flex-row gap-6 pt-2" variants={fadeUp} initial="hidden" whileInView="visible">
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/5">
                <div className="bg-green-100 dark:bg-green-500/20 p-2 rounded-full text-green-600 dark:text-green-400">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-800 dark:text-white">
                  We have our presence currently in UAE and India (Associated).
                </span>
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div className="relative h-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0" variants={fadeLeft} initial="hidden" whileInView="visible">
            <div className="relative w-full max-w-md lg:max-w-full">
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
                <img src="https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg" alt="KSG Team" className="w-full h-auto object-cover"/>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
