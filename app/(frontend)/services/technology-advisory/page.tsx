"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";

export default function TechnologyAdvisoryPage() {
  
  // Services List for Buttons
  const services = [
    { id: "consulting", title: "Technology Consulting Services" },
    { id: "security-audit", title: "IT & Cyber Security Audit" },
    { id: "rpa", title: "Robotic Process Automation (RPA)" },
    { id: "cyber-security", title: "Cybersecurity Management" },
    { id: "mssp", title: "Managed Security Services (MSSP)" },
  ];

  // Image for Overview Section (Modern Tech/Business Theme)
  const overviewImage = "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
       {/* 1. Navbar: Force Static */}
       <Navbar forceStatic={true} />
      
       {/* 2. Spacer Div */}
       <div className="w-full h-20 bg-[#0b2b3f]"></div>

      {/* Overview Section */}
      <section className="relative w-full pt-16 pb-20 bg-[#041D2D] -mt-8 overflow-hidden">
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
            <div className="absolute top-20 left-[-100px] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-20 right-[-100px] w-96 h-96 bg-green-600/20 rounded-full blur-[120px]"></div>
         </div>

         {/* Content Container */}
         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Text Content */}
                <div>
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 font-bold uppercase text-sm tracking-widest">
                           Overview
                        </span>
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-green-200">
                        Driving Innovation & Securing Your Digital Future
                    </h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                        <p>In today's rapidly evolving digital landscape, technology is no longer just a support function—it is a strategic driver of business growth. At KSG, our Technology Advisory practice is dedicated to helping organizations leverage cutting-edge technologies to transform their operations, enhance efficiency, and unlock new value.</p>
                        <p>From implementing robust cybersecurity frameworks to automating complex business processes with RPA, our multidisciplinary team ensures your technology infrastructure is secure, scalable, and aligned with your long-term business goals. We bridge the gap between technical potential and business performance.</p>
                    </div>
                </div>

                {/* Image Section - Shifted Down, No Shadow, Zoom on Hover */}
                <div className="relative group mt-12 lg:mt-24">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-3xl blur opacity-30"></div>
                    <div className="relative rounded-3xl overflow-hidden">
                        <img 
                            src={overviewImage} 
                            alt="Technology Advisory Overview" 
                            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                        />
                    </div>
                </div>

            </div>
         </div>
      </section>

      {/* Services Buttons Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#041D2D]">Explore Our Tech Solutions</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
                <Link key={s.id} href={`/services/technology-advisory/${s.id}`} className="group relative p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <h3 className="text-xl font-bold text-[#041D2D] mb-4 group-hover:text-green-600 transition-colors">{s.title}</h3>
                    <div className="flex items-center text-sm font-bold text-orange-500 gap-2">
                        View Details <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform"/>
                    </div>
                </Link>
            ))}
        </div>
      </div>

      <div className="relative z-20 mt-0 rounded-b-2xl px-2"><Footer/></div>
    </div>
  );
}