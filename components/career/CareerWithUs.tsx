"use client";

import { useState, useEffect, useRef } from "react";
import { Mail, ArrowRight, Heart, TrendingUp, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const images = [
  "https://images.pexels.com/photos/7278870/pexels-photo-7278870.jpeg",
  "https://images.pexels.com/photos/7245802/pexels-photo-7245802.jpeg",
  "https://images.pexels.com/photos/4339913/pexels-photo-4339913.jpeg",
];

export default function CareerWithUs() {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  // --- ANIMATIONS ---
  const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const fadeRight = { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };
  const fadeLeft = { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } } };

  // Elements Floating Up and Down (Levitation)
  const floatAnimation = (delay: number) => ({
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  // --- COUNTER LOGIC ---
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (counterRef.current) observer.observe(counterRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = 100;
      const duration = 2000;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    // ✅ Main Section: Adapts to Light/Dark Mode (Slate-50 <-> Dark Gradient)
    <section className="relative w-full min-h-[85vh] flex flex-col items-center overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#09102d] dark:to-[#0F333D] pt-10 pb-10 group font-sans transition-colors duration-300">

      {/* ================= STAR BACKGROUND (Matches AboutUs) ================= */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-80 dark:opacity-100 mix-blend-screen"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
          backgroundSize: "280px 280px",
          filter: "brightness(1.8) saturate(1.5)",
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-70 dark:opacity-90 mix-blend-screen animate-stars-slow"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/tiny-stars.png')",
          backgroundSize: "180px 180px",
          filter: "brightness(2) saturate(1.6)",
        }}
      />
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-80 mix-blend-screen animate-stars-fast"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
          backgroundSize: "120px 120px",
          filter: "brightness(2.2) saturate(1.8)",
        }}
      />
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-cyan-400/10 via-transparent to-blue-500/10"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/30 dark:bg-blue-600/25 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-green-400/30 dark:bg-green-600/20 rounded-full blur-[140px] pointer-events-none"></div>

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

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <div className="relative z-10 w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto px-4 lg:px-8 w-full">
        
        {/* --- TOP SECTION GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center pt-10 mb-16">
          
          {/* LEFT: TEXT CONTENT */}
          <motion.div 
            className="space-y-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={floatAnimation(0)}
            animate="animate"
          >
            <motion.div variants={fadeRight}>
              <span className="inline-block py-1.5 px-4 rounded-tl-[20px] rounded-br-[20px] border border-gray-300 dark:border-white/10 bg-white/60 dark:bg-white/20 shadow-sm">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600 dark:from-green-400 dark:to-blue-500 font-bold uppercase text-xs tracking-[0.2em]">
                  Careers
                </span>
              </span>
            </motion.div>

            <motion.h2 
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight text-gray-900 dark:text-white" 
              variants={fadeUp} 
            >
              <span className="block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-500">
                  Career     With Us
                </span>{" "}
            
              </span>
            </motion.h2>

            <motion.div 
              className="space-y-4 text-sm md:text-base text-gray-700 dark:text-gray-300 text-justify"
              variants={fadeUp} 
            >
              <p>
                At <strong className="text-gray-900 dark:text-white">KSG Corporate Services</strong>, we promote work life balance while providing a vibrant, agile and dynamic work environment to our group member. It is a philosophy we maintain across the organisation. As our organisation is a mirror image of our members and its success entirely depends on the quality of our people, why we’ve made it a priority to build a culture that rewards high performance and nurtures talent.
              </p>
              <p className="mt-4">
                With a team as diverse as our clients we are proud that people who thrive at KSG are motivated, interested in learning and genuinely have a desire to be the best at what they do. We recognise individual talent and the potential of people at all stages of their careers.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="pt-4">
              <a
                href="mailto:careers@ksgcorps.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-3 rounded-tl-[30px] rounded-br-[30px] bg-gradient-to-r from-blue-500 to-green-600 text-white font-bold shadow-lg hover:shadow-orange-500/30 transition-all transform hover:scale-105"
              >
                <Mail size={20} className="text-white" />
                <span>Send Your Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT: IMAGES & COUNTER */}
          <motion.div 
            className="relative"
            variants={floatAnimation(1.5)}
            animate="animate"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-tr-[20px] rounded-bl-[20px] overflow-hidden h-64 transform translate-y-8 shadow-xl border border-gray-200 dark:border-white/10">
                  <img src={images[0]} alt="Office Culture" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
                </div>
                
                {/* Counter */}
                <div 
                    ref={counterRef} 
                    className="rounded-tr-[20px] rounded-bl-[20px] overflow-hidden h-48 bg-white dark:bg-white/5 flex items-center justify-center p-6 text-center border border-gray-200 dark:border-white/10 shadow-xl backdrop-blur-md"
                >
                  <div>
                    <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                      {count}+
                    </h4>
                    <p className="text-gray-500 dark:text-gray-300 font-medium text-sm mt-1">
                      Happy Team Members
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="rounded-tr-[20px] rounded-bl-[20px] overflow-hidden h-48 shadow-xl border border-gray-200 dark:border-white/10">
                  <img src={images[1]} alt="Teamwork" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="rounded-tr-[20px] rounded-bl-[20px] overflow-hidden h-64 shadow-xl border border-gray-200 dark:border-white/10">
                  <img src={images[2]} alt="Meeting" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        {/* --- BOTTOM SECTION: VALUES --- */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={floatAnimation(0.5)} 
          animate="animate"
        >
          {/* Card 1 */}
          <div className="group p-8 md:p-10 rounded-3xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-orange-200 dark:hover:border-orange-500/30 transition-all duration-300 relative overflow-hidden hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Heart size={100} className="text-orange-500" />
            </div>
            <div className="w-14 h-14 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-orange-500 shadow-sm group-hover:scale-110 transition-transform">
              <Heart size={28} fill="currentColor" />   
            </div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-500 transition-colors">
              Work Life Balance & Fresh Thinking
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              Flexible work is essential because it allows workers to have greater control over their lives.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 font-medium">
                <CheckCircle size={16} className="text-green-500" /> Flexible Timings
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 font-medium">
                <CheckCircle size={16} className="text-green-500" /> Wellness Programs
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group p-8 md:p-10 rounded-3xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-green-200 dark:hover:border-green-500/30 transition-all duration-300 relative overflow-hidden hover:shadow-xl hover:-translate-y-1 backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingUp size={100} className="text-green-500" />
            </div>
            <div className="w-14 h-14 bg-white dark:bg-white/10 rounded-2xl flex items-center justify-center mb-6 text-green-500 shadow-sm group-hover:scale-110 transition-transform">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-500 transition-colors">
              Opportunity to Grow & Dream Big
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              We offer a culture rich in professional opportunity and long-term growth.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 font-medium">
                <CheckCircle size={16} className="text-green-500" /> Professional Training
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-300 font-medium">
                <CheckCircle size={16} className="text-green-500" /> Global Exposure
              </li>
            </ul>
          </div>
        </motion.div>

        {/* --- EMAIL CTA BAR (Same Look for Both Light & Dark) --- */}
        <motion.div 
          className="w-full px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
            {/* ✅ FIXED: Dark Gradient Background forced for both Light & Dark Mode */}
            <div className="bg-gradient-to-r from-[#041D2D] to-[#0a3a55] border border-white/10 p-8 md:p-12 text-center relative overflow-hidden rounded-tl-[20px] rounded-br-[20px] shadow-2xl">
              
              {/* Background Texture */}
              <motion.div 
                animate={{ opacity: [0.05, 0.15, 0.05] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"
              ></motion.div>

              {/* Text forced to White */}
              <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 dark:from-green-400 dark:to-blue-500 mb-4 relative z-10">
                Ready to make an impact?
              </h3>
              <p className="text-blue-100 mb-8 max-w-2xl mx-auto relative z-10">
                If you are passionate, driven, and looking for a place to grow, we
                want to hear from you. Send your resume directly to our HR team.
              </p>

            <a
              href="mailto:careers@ksgcorps.com"
              className="inline-flex items-center gap-3 px-6 md:px-8 py-4 bg-gradient-to-r from-blue-500 to-green-600 text-white font-bold rounded-tl-[20px] rounded-br-[20px] hover:shadow-lg hover:shadow-orange-500/30 transition-all transform hover:scale-105 relative z-10"
            >
              <Mail size={20} className="text-white" />
              <span>careers@ksgcorps.com</span>
              <ArrowRight size={20} className="text-white" />
            </a>
            </div>
        </motion.div>

      </div>
    </section>
  );
}