import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
// import InsightHeader from "@/components/ui/InsightHeader"; 
import { ArrowRight } from "lucide-react";

export default function RiskAdvisoryPage() {
  
  // Services List for Buttons
  const services = [
    { id: "internal-audit", title: "Internal Audit" },
    { id: "sop", title: "Standard Operating Procedure (SOP)" },
    { id: "forensic-audit", title: "Forensic and Fraud Audit" },
    { id: "icfr", title: "Internal Control Over Financial Reporting (ICFR)" },
    { id: "erm", title: "Enterprise Risk Management (ERM)" },
    { id: "aml", title: "Anti-Money Laundering" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
       {/* 1. Navbar */}
       <Navbar forceStatic={true} />
      
       {/* 2. Spacer */}
       <div className="w-full h-24 bg-[#0b2b3f]"></div>

       {/* Header */}
       {/* <InsightHeader 
         title="Auditing Services" 
         breadcrumb="Services / Auditing"
         image="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" 
       /> */}

      {/* Overview Section */}
      <section className="relative w-full pt-16 pb-20 bg-[#041D2D] -mt-8 overflow-hidden">
         
         {/* Background Elements */}
         <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
            <div className="absolute top-20 left-[-100px] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
            <div className="absolute bottom-20 right-[-100px] w-96 h-96 bg-green-600/20 rounded-full blur-[120px]"></div>
         </div>

         {/* Content Container */}
         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Text Content */}
                <div>
                    {/* <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 font-bold uppercase text-sm tracking-widest">
                           Overview
                        </span>
                    </span> */}
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-green-200">
                       Internal Audit & Risk Advisory
                    </h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                        <p>With ever changing global business conditions and constantly-shifting landscape comes great complexity. Connect trust, resilience and security is the answer how can you not only survive but thrive in the face of uncertainty in the world around you. Effective Internal and Risk audit service is mandatory for risk management and your business’s proper functioning. High Standards of Corporate Governance helps organizations reassure its stakeholders regarding the sustainability and succession of the business. Only when investors are convinced about the perpetual existence of a business will they have confidence to continue their association with it. KSG team has the experience and in-depth knowledge that can assist you achieve sound corporate governance framework and help your business manage risk more effectively</p>
                        {/* <p>A professional audit enhances transparency, strengthens internal controls, and builds stakeholder confidence by providing an independent assessment of financial records and processes.</p>
                        <p>Auditing also supports management in identifying risks, improving financial governance, and ensuring adherence to Commercial Companies Law and Value Added Tax (VAT) requirements.</p> */}
                    </div>
                </div>

                {/* Image Section */}
                <div className="relative group mt-12 lg:mt-14">
                    <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-3xl blur opacity-30"></div>
                    <div className="relative rounded-3xl overflow-hidden transform group-hover:scale-105 transition-transform duration-700">
                        <img src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg" alt="Auditing Overview" className="w-full h-auto object-cover" />
                    </div>
                </div>

            </div>
         </div>
      </section>

      {/* Services Buttons Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#041D2D]">Our Internal Audit & Risk Advisory includes:</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-green-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
                <Link key={s.id} href={`/services/risk/${s.id}`} className="group relative p-8 bg-white border border-gray-200 rounded-2xl  transition-all duration-300 hover:-translate-y-2 overflow-hidden">
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