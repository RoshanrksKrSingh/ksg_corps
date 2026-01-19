"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// import InsightHeader from "@/components/ui/InsightHeader"; 
import { ArrowRight } from "lucide-react";
import { title } from "process";

export default function AccountingPage() {
  
  // Services List for Buttons
  const services = [
    { id: "book-keeping", title: "Accounting and Book Keeping" },
    { id: "payroll", title: "Outsourced Payroll Services" },
     { id: "financial-audit", title: "Financial Audit Support" },
     { id: "stock-audit", title: "Stock Audit and Verification" },
    { id: "ifrs", title: "IFRS Advisory Services" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
       {/* 1. Navbar: Force Static */}
       <Navbar forceStatic={true} />
      
       {/* 2. Spacer Div */}
       <div className="w-full h-20 bg-[#0b2b3f]"></div>

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
                     Accounting & Auditing  Support
                    </h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                        <p>Audit and Accounting services help organisation in aligning their financial and accounting processes and making informed business decisions. This empowers them to have better control and visibility of their finance organization and achieve better business outcomes. An audit lends credibility to our clients’ financial statements while complete accounting provides fair financial position of the Organisation. Commercial Companies Law and Value Added Tax (VAT) have laid down clear rules about the maintenance of business accounts and financial details and compliance with International Financial Reporting Standards (IFRS). We at KSG committed to deliver an innovative solution that helps maximize performance in business transactions processing, billing, collections, accounting of business transactions and preparation of financial statements and other areas critical to elevate the role of the finance function in their organization.</p>
                    </div>
                </div>

                {/* Image Section - Shifted Down */}
                <div className="relative group mt-12 lg:mt-10">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-3xl blur opacity-30"></div>
                    <div className="relative rounded-3xl overflow-hidden">
                        <img src="https://images.pexels.com/photos/6248988/pexels-photo-6248988.jpeg" alt="Accounting Overview" className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700" />
                    </div>
                </div>

            </div>
         </div>
      </section>

      {/* Services Buttons Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#041D2D]">Our Auditing & Accounting Support includes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
                <Link key={s.id} href={`/services/accounting/${s.id}`} className="group relative p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
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