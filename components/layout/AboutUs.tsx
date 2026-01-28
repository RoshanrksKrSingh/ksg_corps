"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
  
  // Animation Variants (Unchanged)
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const fadeRight = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const fadeLeft = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  return (
    // ✅ Updated: Background colors match Hero (bg-slate-50 / dark:bg-[#05205b])
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-slate-50 dark:bg-[#151B33] pt-10 pb-20 group font-sans transition-colors duration-300">
      
      {/* ================= HERO STYLE BACKGROUND ================= */}

      {/* Stars Pattern */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none invert dark:invert-0"></div>

      {/* Large Ambient Glows */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-green-200/40 dark:bg-green-900/15 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>

      {/* Small Cosmos Elements */}
      <div className="absolute top-[15%] right-[20%] w-3 h-3 rounded-full bg-blue-500/80 dark:bg-blue-400/80 blur-[2px] shadow-lg pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[25%] left-[15%] w-2 h-2 rounded-full bg-green-500/70 dark:bg-green-400/70 blur-[1px] shadow-lg pointer-events-none"></div>
      <div className="absolute top-[10%] left-[5%] w-1.5 h-1.5 rounded-full bg-orange-400/60 dark:bg-orange-200/60 blur-[0.5px] pointer-events-none"></div>

      {/* ========================================================= */}

      {/* ✅ CUSTOM CSS FOR CONTINUOUS FLOATING EFFECTS */}
      <style jsx>{`
        @keyframes spin-slow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes drift { 0% { transform: translate(0px, 0px); } 50% { transform: translate(10px, 20px); } 100% { transform: translate(0px, 0px); } }
        @keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-drift { animation: drift 10s ease-in-out infinite; }
        .animate-shimmer { background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%); background-size: 200% 100%; animation: shimmer 3s infinite; }
      `}</style>

      {/* ================= MAIN CONTENT ================= */}
      {/* ✅ Updated: Width and Spacing to match Hero Section (Reduced side spacing) */}
      <div className="relative z-10 w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto px-4 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="space-y-8">
            
            {/* Animated Badge */}
            <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}>
              <span className="relative inline-block py-1.5 px-4 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-gray-300 dark:border-white/10 bg-white/60 dark:bg-white/20 overflow-hidden shadow-sm">
                <div className="absolute inset-0 animate-shimmer "></div>
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600 dark:from-orange-400 dark:to-green-400 font-bold uppercase text-xs tracking-[0.2em]">
                  About Us
                </span>
              </span>
            </motion.div>
            
            {/* Heading */}
            <motion.h2 
              className="text-3xl md:text-3xl font-bold leading-tight text-gray-900 dark:text-white space-y-2 font-sans transition-colors duration-300"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <span className="block">We help organizations to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-500">globalize their business,</span></span>
              <span className="block text-xl md:text-2xl font-semibold text-gray-600 dark:text-gray-300 mt-2 transition-colors duration-300">develop institutional capacity, and tackle the organizational challenges</span>
            </motion.h2>

            {/* Paragraphs */}
            <div className="space-y-4 text-sm md:text-base text-gray-700 dark:text-gray-300 leading-tight tracking-tighter [word-spacing:-2px] text-justify font-sans transition-colors duration-300">
              
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}>
                <strong className="text-gray-900 dark:text-white transition-colors">KSG Corporate Services is</strong> a corporate consulting firm formed with the objective of providing unparalleled broad range of corporate advisory services including 
                <span className="text-gray-900 dark:text-white font-medium transition-colors"> Tax Advisory,</span> <span className="text-gray-900 dark:text-white font-medium transition-colors"> Accounting and Payroll outsourcing, Business Setup/PRO</span>, and <span className="text-gray-900 dark:text-white font-medium transition-colors">Risk Management</span>, across the GCC region with an emphasis on client-focused, business-centric solutions.
              </motion.p>
              
              <motion.p variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }} transition={{ delay: 0.2 }}>
                We provide tailor made solutions to <span className="text-green-600 dark:text-green-300 font-medium">"our clients with a commitment to the highest technical standards and integrity."</span> We always ensures that our clients receive the most accurate and relevant advice at a most competitive cost and exceptional quality with an intention to make a value addition to the client’s business.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div className="flex flex-col sm:flex-row gap-6 pt-2" variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}>
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/5 hover:bg-white/80 dark:hover:bg-white/10 transition-colors w-full shadow-sm dark:shadow-none">
                <div className="bg-green-100 dark:bg-green-500/20 p-2 rounded-full text-green-600 dark:text-green-400 flex-shrink-0 transition-colors">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-xs md:text-sm font-semibold text-gray-800 dark:text-white leading-tight transition-colors">
                  We have our presence currently in UAE and India (Associated).
                </span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT: IMAGE */}
          <motion.div className="relative h-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0" variants={fadeLeft} initial="hidden" whileInView="visible" viewport={{ once: false, amount: 0.5 }}>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-400/20 dark:bg-blue-600/30 blur-[100px] rounded-full animate-pulse transition-colors"></div>

            <div className="relative w-full max-w-md lg:max-w-full animate-float">
              {/* Ring Color */}
              <div className="absolute -inset-4 border-2 border-dashed border-gray-300 dark:border-white/20 rounded-[3rem] animate-spin-slow transition-colors"></div>

              <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10 transition-colors">
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 dark:from-[#020617] via-transparent to-transparent opacity-60 z-10 transition-colors"></div>
                <img src="https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg" alt="KSG Team" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"/>
                
                {/* Floating Card */}
                <div className="absolute bottom-6 left-6 z-20 bg-white/70 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20 p-4 rounded-2xl flex items-center gap-4 animate-drift shadow-lg transition-colors">
                  <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">7+</div>
                  <div>
                    <p className="text-[10px] text-gray-600 dark:text-gray-300 uppercase tracking-wider transition-colors">Years of</p>
                    <p className="text-gray-900 dark:text-white font-bold leading-none text-sm transition-colors">Excellence</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;