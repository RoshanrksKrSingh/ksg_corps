"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InsightHeader from "@/components/ui/InsightHeader"; 
import { Users, Lightbulb, MessageSquare, ShieldCheck, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function OurTeamPage() {
  
  const strengths = [
    {
      title: "QUALIFIED PROFESSIONALS",
      desc: "Our Team members are qualified professional (Chartered Accountant, ACCA, MBA) having different industries experience and are able to handle your business operation with integrity and efficiency.",
      icon: Users,
    },
    {
      title: "DIVERSIFIED EXPERIENCES",
      desc: "Everyone is unique and will be able to offer experiences and knowledge that others may not possess. A variety of industries specific knowledge can also bring new perspective and a broad range of ideas to the table.",
      icon: Lightbulb,
    },
    {
      title: "GOOD COMMUNICATOR",
      desc: "We communicate openly with our client, sharing our thoughts, opinions, and ideas with the clients; as well as taking into consideration what others have to say. We know that Communication is essential for keeping track of progress and working together efficiently on tasks.",
      icon: MessageSquare,
    },
    {
      title: "TRANSPARENT SERVICE FEE",
      desc: "Our Team provide you high quality services with transparent services fee structure. We always strive to add value to the client business and that too at a lower cost. We believe in long term business relationship with our clients.",
      icon: ShieldCheck,
    },
  ];

  // Placeholder images for partners - Replace with real logos
  const associatedPartners = [
    "https://ksgcorps.com/wp-content/uploads/2021/07/Picture6.png", 
    "https://ksgcorps.com/wp-content/uploads/2021/07/Picture7.jpg",
    "https://ksgcorps.com/wp-content/uploads/2021/07/Picture8.png",
    "https://ksgcorps.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-16-at-12.44.13-PM.jpeg",
    "https://ksgcorps.com/wp-content/uploads/2021/07/WhatsApp-Image-2021-07-17-at-1.15.33-PM.jpeg",
  ];

  const groupPartner = "https://ksgcorps.com/wp-content/uploads/2021/07/Picture5.png";

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar />
      
      {/* 1. Header with InsightHeader */}
      <InsightHeader 
        title={
            <span className="text-3xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">
                Our Team & Associates
            </span>
        } 
        breadcrumb="Home / Our Team"
        image="" 
      />

      {/* 2. Introduction Section */}
      <section className="relative w-full py-20 bg-white overflow-hidden -mt-1 rounded-b-3xl">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Text Content */}
              <div>
                 <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">
                    Building Success Together
                 </h2>
                 <p className="text-lg text-gray-600 leading-relaxed mb-6">
                   We at KSG have a well structured team, with pre-defined roles and responsibilities, and with the required supervision from the seniors/ partners. A structured approach not only aids in delivering services to the satisfaction of clients, but also provides a structured road-map for the professionals.
                 </p>
                 <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-full"></div>
              </div>

              {/* Image Content */}
              <div className="relative group">
                 <div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
                 <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                       src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                       alt="Our Team Collaboration" 
                       className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" 
                    />
                 </div>
              </div>

           </div>
        </div>
      </section>

      {/* SECTION 1: Team Strengths (Advisors) */}
      <section id="advisors" className="py-20 px-6 max-w-7xl mx-auto bg-gray-50">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500 mb-4">
                Our Core Strengths
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
           {strengths.map((item, idx) => (
             <div key={idx} className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition-all duration-300 group hover:-translate-y-2">
                {/* ✅ UPDATED: Permanent Gradient Background & White Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-green-500 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-lg">
                   <item.icon className="text-white" size={28} />
                </div>
                <h3 className="text-lg font-bold text-[#041D2D] mb-3 text-center md:text-left group-hover:text-green-600 transition-colors">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm text-center md:text-left">{item.desc}</p>
             </div>
           ))}
        </div>
      </section>

      {/* SECTION 2: Associated Partners */}
      <section id="associated-partners" className="py-20 bg-white border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500 mb-12">
                Our Associated Partners
            </h2>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
               {associatedPartners.map((src, i) => (
                 /* ✅ UPDATED: Added shadow-md and clean background for proper card look */
                 <div key={i} className="bg-white p-4 w-48 h-28 flex items-center justify-center border border-gray-200 rounded-xl shadow-md hover:shadow-xl hover:border-green-500/30 transition-all duration-300">
                    <img src={src} alt={`Partner ${i}`} className="max-w-full max-h-full object-contain" />
                 </div>
               ))}
            </div>
         </div>
      </section>

      {/* SECTION 3: Group Partners */}
      <section id="group-partners" className="py-20 bg-gray-50 border-t border-gray-100">
         <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500 mb-8">
                Our Group Partners
            </h2>
            
            <div className="flex justify-center">
               {/* ✅ UPDATED: Added shadow-md for proper card look */}
               <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all w-72 h-40 flex items-center justify-center border border-gray-200 hover:border-orange-500/30">
                  <img src={groupPartner} alt="IMAS Group Partner" className="max-w-full max-h-full object-contain" />
               </div>
            </div>
         </div>
      </section>

      <div className="relative z-20 mt-0 rounded-b-2xl px-2">
         <Footer/>
      </div>
    </div>
  );
}