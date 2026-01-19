"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// import InsightHeader from "@/components/ui/InsightHeader"; // Removed as requested
import { ArrowRight } from "lucide-react";

export default function BusinessSetupPage() {
  
  // Services List for Buttons
  const services = [
    { id: "mainland", title: "UAE Mainland Company Formation" },
    { id: "freezone", title: "Free Zone Company Formation" },
    { id: "offshore", title: "Offshore Company Formation" },
    { id: "sponsorship", title: "Sponsorship Services" },
    { id: "pro-services", title: "Corporate PRO Services" },
    { id: "liquidation", title: "Company Liquidation" },
  ];

  // Image for Overview Section
  const overviewImage = "https://images.pexels.com/photos/3787839/pexels-photo-3787839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
       {/* 1. Navbar: Force Static */}
       <Navbar forceStatic={true} />
      
       {/* 2. Spacer Div */}
       <div className="w-full h-24 bg-[#0b2b3f]"></div>

       {/* InsightHeader Removed */}

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
                    {/* <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 font-bold uppercase text-sm tracking-widest">
                           Overview
                        </span>
                    </span> */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-green-200">
                        Business Setup/Corporate PRO
                    </h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                        <p>The UAE market offers great incentives to companies looking at establishing a presence in the region. Depending on the planned business activities, companies can choose from onshore, free zone and offshore business structures. KSG help to evaluate the feasibility of setting up a Mainland UAE Branch / Mainland UAE LLC / FZ branch / FZ Company to undertake the proposed activities. Registering the entity and obtaining business licenses, as well as support you get the necessary employment visas, work and residences permits in the UAE. Our services cover the entire spectrum of company formation procedures in the UAE. From company registration and trade license acquisition to contract drafting and notarization of documents, we guide you at every step of the process.</p>
                    </div>
                </div>

                {/* Image Section - Shifted Down slightly if needed via margin */}
                <div className="relative group mt-12 lg:mt-10"> 
                    <div className="absolute -inset-1  rounded-3xl blur opacity-30"></div>
                    <div className="relative rounded-3xl overflow-hidden transform group-hover:scale-105 transition-transform duration-700">
                        <img src={overviewImage} alt="Business Setup Overview" className="w-full h-auto object-cover" />
                    </div>
                </div>

            </div>
         </div>
      </section>

      {/* Services Buttons Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#041D2D]">Our Business Setup/Corporate PRO includes:</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
                <Link key={s.id} href={`/services/business-setup/${s.id}`} className="group relative p-8 bg-white border border-gray-200 rounded-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <h3 className="text-xl font-bold text-[#041D2D] mb-4 group-hover:text-green-600 transition-colors">{s.title}</h3>
                    <div className="flex items-center text-sm font-bold text-orange-500 gap-2">
                        View Details <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform"/>
                    </div>
                </Link>
            ))}
        </div>
      </div>

     <div className="rounded-2xl overflow-hidden">
             <Footer/>
           </div>
    </div>
  );
}