"use client";

import { CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
  
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeRight = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const fadeLeft = {
    hidden: { opacity: 0, x: 40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-[#041D2D] py-20 rounded-b-2xl group font-sans">
      
      {/* ✅ CUSTOM CSS FOR CONTINUOUS FLOATING EFFECTS (Non-Scroll) */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes drift {
          0% { transform: translate(0px, 0px); }
          50% { transform: translate(10px, 20px); }
          100% { transform: translate(0px, 0px); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-drift { animation: drift 10s ease-in-out infinite; }
        .animate-shimmer { 
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* =========================================
          1. BACKGROUND LAYERS
      ========================================= */}
      
      {/* Background Image */}
      <div 
        className="absolute inset-0 w-full h-full z-0 opacity-40 transition-transform duration-[10s] ease-in-out transform hover:scale-110"
        style={{
          backgroundImage: `url('https://cdn-becae.nitrocdn.com/OcwjylvgvBbNRDjYtTmGOXeUgIvOimBD/assets/images/optimized/rev-47b5ce8/www.aaconsultancy.ae/wp-content/uploads/2025/04/General-Header-BG.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#041D2D] via-[#041D2D]/95 to-[#041D2D]/80 z-0"></div>

      {/* Continuous Moving Decor Elements */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 border border-white/5 rounded-full animate-spin-slow z-0"></div>
      <div className="absolute bottom-10 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-[80px] animate-drift z-0"></div>

      {/* =========================================
          2. MAIN CONTENT
      ========================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* LEFT: TEXT CONTENT */}
          <div className="space-y-8">
            
            {/* Animated Badge */}
            <motion.div 
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }} // ✅ Runs every time
            >
              <span className="relative inline-block py-1.5 px-4 rounded-full border border-white/10 bg-white/20 overflow-hidden">
                <div className="absolute inset-0 animate-shimmer"></div>
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 font-bold uppercase text-xs tracking-[0.2em]">
                  About Us
                </span>
              </span>
            </motion.div>
            
            {/* Heading */}
            <motion.h2 
              className="text-3xl md:text-3xl font-bold leading-tight text-white space-y-2 font-sans"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }} // ✅ Runs every time
            >
              <span className="block">We help organizations to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">globalize their business,</span></span>
              <span className="block text-xl md:text-2xl font-semibold text-gray-300 mt-2">develop institutional capacity, and tackle the organizational challenges</span>
            </motion.h2>

            {/* Paragraphs - ✅ Compact Spacing ([word-spacing:-2px] & tracking-tighter) */}
            <div className="space-y-4 text-sm md:text-base text-gray-300 leading-tight tracking-tighter [word-spacing:-2px] text-justify font-sans">
              
              <motion.p 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }} // ✅ Runs every time
              >
                <strong className="text-white">KSG Corporate Services is</strong> a corporate consulting firm formed with the objective of providing unparalleled broad range of corporate advisory services including 
                <span className="text-white font-medium"> Tax Advisory,</span> <span className="text-white font-medium"> Accounting and Payroll outsourcing, Business Setup/PRO</span>, and <span className="text-white font-medium">Risk Management</span>, across the GCC region with an emphasis on client-focused, business-centric solutions.
              </motion.p>
              
              <motion.p 
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.5 }} // ✅ Runs every time
                transition={{ delay: 0.2 }} // Slight delay for second paragraph
              >
                We provide tailor made solutions to <span className=" text-green-300">"our clients with a commitment to the highest technical standards and integrity."</span> We always ensures that our clients receive the most accurate and relevant advice at a most competitive cost and exceptional quality with an intention to make a value addition to the client’s business.
              </motion.p>
            </div>

            {/* Features List */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-6 pt-2"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.5 }}
            >
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors w-full">
                <div className="bg-green-500/20 p-2 rounded-full text-green-400 flex-shrink-0">
                  <CheckCircle2 size={18} />
                </div>
                <span className="text-xs md:text-sm font-semibold text-white leading-tight">We have our presence currently in UAE and India (Associated).</span>
              </div>
            </motion.div>

          </div>

          {/* RIGHT: CONTINUOUS FLOATING IMAGE */}
          <motion.div 
            className="relative h-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.5 }} // ✅ Runs every time
          >
            
            {/* 1. Back Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-blue-600/30 blur-[100px] rounded-full animate-pulse"></div>

            {/* 2. Floating Image Wrapper */}
            <div className="relative w-full max-w-md lg:max-w-full animate-float">
                
                {/* Decorative Border Ring */}
                <div className="absolute -inset-4 border-2 border-dashed border-white/20 rounded-[3rem] animate-spin-slow"></div>

                {/* Main Image */}
                <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041D2D] via-transparent to-transparent opacity-60 z-10"></div>
                  <img 
                    src="https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg" 
                    alt="KSG Team" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Info Card on Image */}
                  <div className="absolute bottom-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl flex items-center gap-4 animate-drift">
                    <div className="h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">7+</div>
                    <div>
                      <p className="text-[10px] text-gray-300 uppercase tracking-wider">Years of</p>
                      <p className="text-white font-bold leading-none text-sm">Excellence</p>
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