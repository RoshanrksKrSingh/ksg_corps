"use client";

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface InsightHeaderProps {
  title: React.ReactNode;
  breadcrumb: string;
  image?: string;
  isAnimated?: boolean;
  badgeClassName?: string;
}

const DEFAULT_BG = "https://ik.imagekit.io/travechela/pexels-gustavo-fring-4173357-removebg-preview.png?updatedAt=1769605406114";

export default function InsightHeader({ title, breadcrumb, image, isAnimated = false, badgeClassName = "" }: InsightHeaderProps) {
  const bgImage = image || DEFAULT_BG;

  return (
    <div className="relative mb-2 flex flex-col md:block min-h-[280px] rounded-2xl overflow-hidden bg-gradient-to-r from-[#041D2D] to-[#082f49]">
      
      {/* ✅ FIX: Style tag is now unconditional so CSS always loads */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer { 
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.2) 50%, rgba(255,255,255,0) 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 z-0 bg-no-repeat h-[220px] mt-24 "
        style={{ 
            backgroundImage: `url(${bgImage})`,
            backgroundPosition: 'right bottom', 
            backgroundSize: 'contain' 
        }}
      >
      </div>

      {/* Content Layer */}
      <div className="relative z-10 text-center px-4 py-10 md:py-0 md:absolute md:inset-0 md:flex md:flex-col md:items-center md:justify-center max-w-5xl mx-auto">
        
        {/* Badge */}
        <span className={`inline-block py-2 px-3 rounded-full bg-white/10 border border-white/10 backdrop-blur-sm mt-48 md:mt-10 md:-mb-18 ${isAnimated ? 'relative overflow-hidden' : ''} ${badgeClassName}`}>
             
             {/* Animation Layer */}
             {isAnimated && <div className="absolute inset-0 animate-shimmer"></div>}

             {/* Text Layer */}
             <span className={`text-orange-400 font-bold uppercase text-xs tracking-widest ${isAnimated ? 'relative z-10' : ''}`}>
               KSG Knowledge Hub
             </span>
        </span>

        {/* Title */}
        <h1 className="text-4xl md:text-xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600 dark:from-green-400 dark:to-blue-500 md:mb-0 tracking-tight drop-shadow-xl leading-tight">
          {title}
        </h1>

      </div>
    </div>
  );
}