"use client";

import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[#151B33] text-white pt-16 pb-8 font-sans overflow-hidden">
      
      {/* =========================================
          BACKGROUND EFFECTS
      ========================================= */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
         {/* Green Peak/Glow on the Right */}
         <div className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[80%] bg-gradient-to-t from-green-900/30 to-transparent transform skew-x-12 blur-2xl"></div>
         
         {/* Blue Peak/Glow on the Left */}
         <div className="absolute bottom-[-10%] left-[-5%] w-[50%] h-[70%] bg-gradient-to-t from-blue-900/30 to-transparent transform -skew-x-12 blur-2xl"></div>
         
         {/* Subtle Texture/Pattern Overlay */}
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      {/* ✅ Updated: Consistent Width and Spacing with Hero Section */}
      {/* px-4 lg:px-6 ensures it aligns slightly more left visually */}
      <div className="relative z-10 w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto px-4 lg:px-6">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* 1. Company Info - ✅ Fixed Alignment & Position */}
          <div className="flex flex-col items-start">
            
            <div className="flex flex-col items-start w-full">
              
              {/* Logo - Size Maintained */}
              <div className="-mb-10"> 
                <Link href="/" className="block">
                  <img 
                    src="http://ksgcorps.com/wp-content/uploads/2021/11/ksg-logo-white.png"
                    alt="KSG Corporate Services Logo"
                    className="-ml-5 h-35 md:h-35 lg:h-39 xl:h-45 2xl:h-45 w-auto object-contain"
                  />
                </Link>
              </div>

              {/* Description Text - Adjusted spacing naturally without negative margins */}
              <p className="text-sm leading-relaxed mb-6 font-medium text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-green-300 max-w-sm">
                KSG Corporate Services is a corporate consulting firm formed with the objective of providing unparalleled broad range of corporate advisory services.
              </p>

              {/* Social Icons */}
              <div className="flex space-x-4">
                {[Facebook, Instagram, Linkedin, Twitter].map((Icon, index) => (
                  <Link key={index} href="#" className="text-white hover:text-orange-500 transition transform hover:scale-110">
                    <Icon size={22} />
                  </Link>
                ))}
              </div>

            </div>
          </div>

          {/* 2. Services Links */}
          <div className="md:pl-8 pt-4">
            <h4 className="text-xl font-bold mb-6 text-white inline-block pb-1 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-orange-500 after:to-green-500 after:rounded-sm">
              Services
            </h4>
            <ul className="space-y-3 text-sm text-white">
              {['Home', 'Our Team', 'Career', 'Insights', 'Contact Us'].map((item, idx) => (
                <li key={idx}>
                  <Link href={`/${item.toLowerCase().replace(' ', '-')}`} className="hover:text-orange-400 transition flex items-center gap-2">
                    <span className="text-orange-500">›</span> {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Contact Details */}
          <div className="pt-4">
            <h4 className="text-xl font-bold mb-6 text-white inline-block pb-1 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-1 after:bg-gradient-to-r after:from-orange-500 after:to-green-500 after:rounded-sm">
              Contact
            </h4>
            <ul className="space-y-5 text-sm text-white">
              <li className="flex items-start group">
                <MapPin className="mr-3 h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0 group-hover:text-white transition" />
                <span className="leading-relaxed">
                  Office 705, Suit 7, AL Jawhara Building<br />
                  (Habib Bank AG Zurich), Bank Street,<br />
                  Bur Dubai, Dubai, PO Box 44413
                </span>
              </li>
              <li className="flex items-center group">
                <Phone className="mr-3 h-5 w-5 text-orange-500 flex-shrink-0 group-hover:text-white transition" />
                <span>+971 561657158</span>
              </li>
              <li className="flex items-center group">
                <Mail className="mr-3 h-5 w-5 text-orange-500 flex-shrink-0 group-hover:text-white transition" />
                <span>info@ksgcorps.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-white">
          <p>© {new Date().getFullYear()} KSG Corporate Services. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;