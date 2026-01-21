"use client";

import { useEffect, useState } from "react";
import { ZoomIn, Users, Clock } from 'lucide-react';
import AOS from "aos";
import "aos/dist/aos.css";

const HeroCards = () => {
  const [animationKey, setAnimationKey] = useState(0);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: false, // Allow animation to happen multiple times
    });
  }, []);

  // Sync with Hero Slider (4000ms interval)
  useEffect(() => {
    const interval = setInterval(() => {
      // Changing state forces re-render
      setAnimationKey(prev => prev + 1);
      
      // Optional: Refresh AOS to ensure it catches new elements
      setTimeout(() => {
        AOS.refresh(); 
      }, 100);
    }, 4000); 

    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      icon: ZoomIn,
      title: "Analyze Your Business",
      fullText: "Our team is well equipped to analyse all aspects of your business and provide solution to ensure they are maximising shareholder value. Provide framework for how a company will create value."
    },
    {
      icon: Users,
      title: "A Team of Professionals",
      text: "Our Team members are qualified professional (Chartered Accountant, ACCA, MBA) having different industries experience and are able to handle your business operation with integrity and efficiency."
    },
    {
      icon: Clock,
      title: "Unparalleled Client Engagement",
      text: "Gaining a competitive edge through unparalleled customer service. Exceptional client engagement which goes beyond doing what is necessary for our client to truly caring about the client, their business, and the people around us."
    },
  ];

  return (
    // Further reduced max-width to 'max-w-4xl' (Narrower)
    <div className="max-w-2xl 2xl:max-w-6xl mx-0 relative z-20 px-0">

      {/* Added 'lg:gap-10' to increase spacing specifically on laptop/desktop views.
          'gap-5' remains for mobile/tablet.
      */}
      <div key={animationKey} className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-5">
        {cards.map((card, index) => (
          <div 
            key={index} 
            // Add AOS attributes here
            data-aos="zoom-in"
            data-aos-delay={index * 300} // Stagger animations
            // ✅ Updated: Added 'md:bg-[#041D2D]/80' for transparency on md screens and larger
            // 'bg-[#041D2D]' is opaque on mobile
            // Added 'min-h-[320px]' to increase height
            className="group relative bg-[#041D2D] md:bg-[#041D2D]/30 backdrop-blur-xs text-white p-2 rounded-xl border-t-4 border-t-orange-500 border border-white/10 transition-all duration-500 flex flex-col min-h-[200px] 2xl:min-h-[280px] h-full"
          >
             {/* Decorative background element */}
             {/* <div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
               <card.icon size={80} />
             </div> */}

             {/* Icon Container - Slightly smaller for compact look */}
             <div className="w-8 h-8 2xl:w-10 2xl:h-10 rounded-full bg-white/10 flex items-center justify-center mb-5 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300 flex-shrink-0 shadow-lg">
               <card.icon size={18} className="text-white" strokeWidth={1.5} />
             </div>

             {/* Heading */}
             <h3 className="text-[9px] 2xl:text-sm font-bold mb-3 tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">
               {card.title}
             </h3>
             
             {/* Divider Line */}
             {/* <div className="w-10 h-1 bg-gray-600 mb-4 rounded group-hover:w-16 group-hover:bg-orange-500 transition-all duration-300"></div> */}

             {/* Paragraph */}
             {/* ✅ UPDATED: Changed 'text-justify' to 'text-left' to fix uneven spacing */}
            <p className="text-xs 2xl:text-sm leading-relaxed 2xl:leading-loose tracking-tighter [word-spacing:-1px] text-white text-left flex-grow">
               {card.fullText || card.text}
             </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroCards;