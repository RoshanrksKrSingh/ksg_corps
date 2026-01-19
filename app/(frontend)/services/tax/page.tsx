"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// import InsightHeader from "@/components/ui/InsightHeader"; 
import { ArrowRight } from "lucide-react";

export default function TaxPage() {
  
  // Services List for Buttons
  const services = [
    { id: "international-tax", title: "International Taxation & Transfer Pricing" },
    { id: "vat-compliance", title: "VAT/Excise Compliance" },
    { id: "vat-health-check", title: "VAT/Excise Health Checks" },
    { id: "vat-registration", title: "VAT/Excise Registration/Deregistration" },
    { id: "vat-audit", title: "VAT/Excise Audit Support" },
    { id: "vat-refund", title: "VAT Refund Support" },
    { id: "voluntary-disclosure", title: "Voluntary Disclosure" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
       <Navbar forceStatic={true} />
      
       <div className="w-full h-20 bg-[#0b2b3f]"></div>

       {/* Header */}
       {/* <InsightHeader 
         title="Tax Advisory Services" 
         breadcrumb="Services / Tax Advisory"
         image="https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg" 
       /> */}

      {/* Overview Section */}
      <section className="relative w-full pt-16 pb-20 bg-[#041D2D] -mt-8 overflow-hidden">
         
         <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
            <div className="absolute top-20 left-[-100px] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-20 right-[-100px] w-96 h-96 bg-green-600/20 rounded-full blur-[120px]"></div>
         </div>

         <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                <div className="mt-6">
                    {/* <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 font-bold uppercase text-sm tracking-widest">
                           Overview
                        </span>
                    </span> */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-green-200">
                       Tax Advisory
                    </h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                        <p>Reducing the impact of complexity of tax related concerns and forming your tax strategies align with your organisational goals. We offer a full range of services to address the International Tax, Transfer Pricing, Value Added Tax (VAT) and Excise Tax challenges, which ensures that organizations remain ahead of the requirements within and outside the UAE, along with supporting the impact which may occur across the wider GCC (KSAVAT, Bahrain VAT and Oman VAT).</p>
                        {/* <p>We offer a full range of services to address the International Tax, Transfer Pricing, Value Added Tax (VAT) and Excise Tax challenges.</p>
                        <p>This ensures that organizations remain ahead of the requirements within and outside the UAE, along with supporting the impact which may occur across the wider GCC (KSAVAT, Bahrain VAT and Oman VAT).</p> */}
                    </div>
                </div>

                <div className="relative group mt-12 lg:mt-10">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-3xl blur opacity-30"></div>
                    <div className="relative rounded-3xl overflow-hidden transform group-hover:scale-105 transition-transform duration-700">
                        <img src="https://images.pexels.com/photos/6863515/pexels-photo-6863515.jpeg" alt="Tax Advisory Overview" className="w-full h-auto object-cover" />
                    </div>
                </div>

            </div>
         </div>
      </section>

      {/* Services Buttons Section */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#041D2D]">Our Tax Advisory includes</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
                <Link key={s.id} href={`/services/tax/${s.id}`} className="group relative p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden">
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