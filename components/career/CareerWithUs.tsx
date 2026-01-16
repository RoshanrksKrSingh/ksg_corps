"use client";

import { useState, useEffect, useRef } from "react"; // ✅ Added Imports
import { Mail, ArrowRight, Heart, TrendingUp, CheckCircle } from "lucide-react";

const images = [
  "https://images.pexels.com/photos/7278870/pexels-photo-7278870.jpeg",
  "https://images.pexels.com/photos/7245802/pexels-photo-7245802.jpeg",
  "https://images.pexels.com/photos/4339913/pexels-photo-4339913.jpeg",
];

export default function CareerWithUs() {
  // ✅ Counter Animation State & Logic
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const end = 100;
      const duration = 2000; // 2 Seconds animation
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
    <section className="relative w-full py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- TOP SECTION: TEXT & IMAGES --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left: Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block py-1 px-3 rounded-full bg-orange-50 border border-orange-100 mb-4">
                <span className="text-orange-500 font-bold uppercase text-xs tracking-widest">
                  Join Our Team
                </span>
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-[#041D2D] leading-tight">
                Build Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
                  Career
                </span>{" "}
                With Us
              </h2>
            </div>

            <p className="text-gray-600 text-lg leading-relaxed">
              At KSG Corporate Services, we promote work-life balance while
              providing a vibrant, agile, and dynamic work environment. Our
              organization is a mirror image of our members, and its success
              depends entirely on the quality of our people.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              We reward high performance and nurture talent. People who thrive
              at KSG are motivated, interested in learning, and genuinely
              desire to be the best at what they do.
            </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
  <a
    href="mailto:careers@ksgcorps.com"
    className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500 to-green-600 text-white font-bold shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1"
  >
    <Mail size={20} className="text-white" />
    <span>Send Your Resume</span>
  </a>
</div>
          </div>

          {/* Right: Image Masonry Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* Large Image Left */}
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden  h-64 transform translate-y-8">
                  <img
                    src={images[0]}
                    alt="Office Culture"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                {/* ✅ Counter Section with Ref */}
                <div 
                    ref={counterRef} 
                    className="rounded-3xl overflow-hidden  h-48 bg-gray-100 flex items-center justify-center p-6 text-center border border-gray-100"
                >
                  <div>
                    {/* ✅ Animated Number */}
                    <h4 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
                      {count}+
                    </h4>
                    <p className="text-gray-500 font-medium text-sm mt-1">
                      Happy Team Members
                    </p>
                  </div>
                </div>
              </div>

              {/* Column Right */}
              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden  h-48">
                  <img
                    src={images[1]}
                    alt="Teamwork"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden  h-64">
                  <img
                    src={images[2]}
                    alt="Meeting"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-r from-orange-100/30 to-green-100/30 blur-3xl rounded-full"></div>
          </div>
        </div>

        {/* --- BOTTOM SECTION: VALUES --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="group p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-orange-200  transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Heart size={100} className="text-orange-500" />
            </div>

            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center  mb-6 text-orange-500 group-hover:scale-110 transition-transform">
              <Heart size={28} fill="currentColor" />
            </div>

            <h3 className="text-2xl font-bold text-[#041D2D] mb-4 group-hover:text-orange-600 transition-colors">
              Work Life Balance & Fresh Thinking
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              Flexible work is essential because it allows workers to have
              greater control over their lives. We provide an environment where
              members can dedicate themselves to their careers while investing
              in themselves.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <CheckCircle size={16} className="text-green-500" /> Flexible
                Timings
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <CheckCircle size={16} className="text-green-500" /> Wellness
                Programs
              </li>
            </ul>
          </div>

          {/* Card 2 */}
          <div className="group p-8 md:p-10 rounded-3xl bg-gray-50 border border-gray-100 hover:border-green-200  transition-all duration-300 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <TrendingUp size={100} className="text-green-500" />
            </div>

            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center  mb-6 text-green-500 group-hover:scale-110 transition-transform">
              <TrendingUp size={28} />
            </div>

            <h3 className="text-2xl font-bold text-[#041D2D] mb-4 group-hover:text-green-600 transition-colors">
              Opportunity to Grow & Dream Big
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We offer a culture rich in professional opportunity and long-term
              growth. People are our best asset, and we are always looking for
              fresh talent to join the KSG family.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <CheckCircle size={16} className="text-green-500" />{" "}
                Professional Training
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-500 font-medium">
                <CheckCircle size={16} className="text-green-500" /> Global
                Exposure
              </li>
            </ul>
          </div>
        </div>

        {/* --- EMAIL CTA BAR --- */}
        <div className="mt-16 bg-gradient-to-r from-[#041D2D] to-[#0a3a55] rounded-3xl p-8 md:p-12 text-center relative overflow-hidden ">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>

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
      </div>
    </section>
  );
}