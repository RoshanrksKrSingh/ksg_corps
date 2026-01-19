"use client";

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface InsightHeaderProps {
  title: React.ReactNode;
  breadcrumb: string;
  image?: string;
}

const DEFAULT_BG = "https://cdn-becae.nitrocdn.com/OcwjylvgvBbNRDjYtTmGOXeUgIvOimBD/assets/images/optimized/rev-47b5ce8/www.aaconsultancy.ae/wp-content/uploads/2021/10/AA-Associate-news.webp";

export default function InsightHeader({ title, breadcrumb, image }: InsightHeaderProps) {
  const bgImage = image || DEFAULT_BG;

  return (
    // ✅ Updated Main Container
    // Added 'mb-2' -> यह नीचे थोड़ा गैप देगा ताकि बॉटम रेडियस दिखाई दे।
    <div className="relative  mb-2 flex flex-col md:block md:h-[80vh] min-h-[400px] rounded-2xl overflow-hidden bg-gradient-to-r from-[#041D2D] to-[#082f49]">
      
      {/* ✅ Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat h-[300px] mt-auto"
        style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: 'right bottom', 
            backgroundSize: 'contain' 
        }}
      >
      </div>

      {/* ✅ Content Layer */}
      <div className="relative z-10 text-center px-4 py-16 md:py-0 md:absolute md:inset-0 md:flex md:flex-col md:items-center md:justify-center max-w-5xl mx-auto">
        
        {/* Badge */}
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mt-6 mb-6">
             <span className="text-orange-400 font-bold uppercase text-xs tracking-widest">
               KSG Knowledge Hub
             </span>
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-xl leading-tight">
          {title}
        </h1>

      </div>
    </div>
  );
}