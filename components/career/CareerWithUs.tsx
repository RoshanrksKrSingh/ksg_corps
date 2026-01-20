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

  // --- 1. CONTINUOUS ANIMATIONS ---
  
  // Elements Floating Up and Down (Levitation)
  const floatAnimation = (delay: number) => ({
    animate: {
      y: [0, -15, 0], // Moves up 15px then back down
      transition: {
        duration: 6, // Slow and smooth (6 seconds)
        repeat: Infinity,
        repeatType: "reverse" as const, // Reverses smoothly
        ease: "easeInOut",
        delay: delay,
      },
    },
  });

  // Background Blob Moving Continuously
  const blobAnimation = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 90, 0],
      x: [0, 50, 0],
      transition: {
        duration: 15, // Very slow background movement
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  // Standard Entry Animation
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

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
    // ✅ Reduced Top Padding (py-12 instead of py-20)
    <section className="bg-gray-50  min-h-screen font-sans relative  overflow-hidden">
      
      {/* ✅ MOVING BACKGROUND BLOB (Continuous Animation) */}
      <motion.div 
        variants={blobAnimation}
        animate="animate"
        className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-r from-orange-100/40 to-green-100/40 rounded-full blur-[80px] -z-10 pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- TOP SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-15 mb-10">
          
          {/* Left: Text Content (Floating Animation Delay: 0s) */}
          <motion.div 
            className="space-y-0" // Reduced gap
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={floatAnimation(0)} // ✅ Floating Effect Applied
            animate="animate"
          >
            <motion.div variants={fadeInUp}>
              <span className="inline-block py-1 px-3 rounded-full bg-orange-50 border border-orange-100 mb-3">
                <span className="text-orange-500 font-bold uppercase text-xs tracking-widest">
                  Careers
                </span>
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-[#041D2D] leading-tight mb-2 md:mb-0">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
                  Career
                </span>{" "}
                With Us
              </h2>
            </motion.div>

            <motion.p variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed">
              At KSG Corporate Services, we promote work life balance while providing a vibrant, agile and dynamic work environment to our group member. It is a philosophy we maintain across the organisation. As our organisation is a mirror image of our members and its success entirely depends on the quality of our people, why we’ve made it a priority to build a culture that rewards high performance and nurtures talent. With a team as diverse as our clients we are proud that people who thrive at KSG are motivated, interested in learning and genuinely have a desire to be the best at what they do. We recognise individual talent and the potential of people at all stages of their careers.
            </motion.p>

            <motion.div variants={fadeInUp} className="pt-2">
              <a
                href="mailto:careers@ksgcorps.com"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-green-600 text-white font-bold shadow-lg hover:shadow-orange-500/30 transition-all transform hover:scale-105"
              >
                <Mail size={20} className="text-white" />
                <span>Send Your Resume</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Images (Floating Animation Delay: 1.5s for Syncopation) */}
          <motion.div 
            className="relative"
            variants={floatAnimation(1.5)} // ✅ Floating with delay so it moves differently than text
            animate="animate"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden h-64 transform translate-y-8 shadow-xl">
                  <img src={images[0]} alt="Office Culture" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
                </div>
                
                {/* Counter */}
                <div 
                    ref={counterRef} 
                    className="rounded-3xl overflow-hidden h-48 bg-white flex items-center justify-center p-6 text-center border border-gray-100 shadow-xl"
                >
                  <div>
                    <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
                      {count}+
                    </h4>
                    <p className="text-gray-500 font-medium text-sm mt-1">
                      Happy Team Members
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden h-48 shadow-xl">
                  <img src={images[1]} alt="Teamwork" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
                </div>
                <div className="rounded-3xl overflow-hidden h-64 shadow-xl">
                  <img src={images[2]} alt="Meeting" className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- BOTTOM SECTION: VALUES --- */}
        {/* Floating Animation Delay: 0.5s */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          variants={floatAnimation(0.5)} // ✅ Entire grid floats slightly
          animate="animate"
        >
          {/* Card 1 */}
          <div className="group p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-orange-200 transition-all duration-300 relative overflow-hidden hover:shadow-xl hover:-translate-y-1 bg-white/50 backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Heart size={100} className="text-orange-500" />
            </div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-orange-500 shadow-sm group-hover:scale-110 transition-transform">
              <Heart size={28} fill="currentColor" />
            </div>
            <h3 className="text-2xl font-bold text-[#041D2D] mb-4 group-hover:text-orange-600 transition-colors">
              Work Life Balance & Fresh Thinking
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Flexible work is essential because it allows workers to have greater control over their lives.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <CheckCircle size={16} className="text-green-500" /> Flexible Timings
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <CheckCircle size={16} className="text-green-500" /> Wellness Programs
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-green-200 transition-all duration-300 relative overflow-hidden hover:shadow-xl hover:-translate-y-1 bg-white/50 backdrop-blur-sm">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingUp size={100} className="text-green-500" />
            </div>
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 text-green-500 shadow-sm group-hover:scale-110 transition-transform">
              <TrendingUp size={28} />
            </div>
            <h3 className="text-2xl font-bold text-[#041D2D] mb-4 group-hover:text-green-600 transition-colors">
              Opportunity to Grow & Dream Big
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We offer a culture rich in professional opportunity and long-term growth.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <CheckCircle size={16} className="text-green-500" /> Professional Training
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <CheckCircle size={16} className="text-green-500" /> Global Exposure
              </li>
            </ul>
          </div>
        </motion.div>
      </div>

      {/* --- EMAIL CTA BAR --- */}
      <motion.div 
        className="w-full px-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
          <div className="bg-gradient-to-r from-[#041D2D] to-[#0a3a55] p-8 md:p-12 text-center relative overflow-hidden rounded-t-2xl">
            {/* Background Texture with subtle pulse */}
            <motion.div 
              animate={{ opacity: [0.05, 0.15, 0.05] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"
            ></motion.div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 relative z-10">
              Ready to make an impact?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto relative z-10">
              If you are passionate, driven, and looking for a place to grow, we
              want to hear from you. Send your resume directly to our HR team.
            </p>

          <a
            href="mailto:careers@ksgcorps.com"
            className="inline-flex items-center gap-3 px-4 md:px-8 py-4 bg-gradient-to-r from-orange-500 to-green-600 text-white font-bold rounded-full hover:shadow-lg hover:shadow-orange-500/30 transition-all transform hover:scale-105 relative z-10"
          >
            <Mail size={20} className="text-white" />
            <span>careers@ksgcorps.com</span>
            <ArrowRight size={20} className="text-white" />
          </a>
          </div>
      </motion.div>
    </section>
  );
}