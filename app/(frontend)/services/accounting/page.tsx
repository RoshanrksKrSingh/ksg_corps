import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import InsightHeader from "@/components/ui/InsightHeader"; 
import { ArrowRight } from "lucide-react";

export default function AccountingPage() {
  
  // Services List for Buttons
  const services = [
    { id: "book-keeping", title: "Accounting and Book Keeping" },
    { id: "payroll", title: "Outsourced Payroll Services" },
    { id: "ifrs", title: "IFRS Advisory Services" },
    { id: "financial-audit", title: "Financial Audit Support" },
    { id: "financial-statement", title: "Financial Statement Preparation" },
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans ">
      
       {/* 1. Navbar: Force Static (Scrolled Style Always) */}
           <Navbar forceStatic={true} />
     
           {/* 2. Spacer Div */}
           <div className="w-full h-24"></div>
{/* 
      <InsightHeader 
        title="Auditing & Accounting Support" 
        breadcrumb="Services / Accounting"
        image="https://images.pexels.com/photos/6248988/pexels-photo-6248988.jpeg" 
      /> */}

      {/* Overview Section */}
      <div className="relative z-20 -mt-8 px-2 ">
       <section className="relative w-full py-20 bg-[#041D2D] overflow-hidden rounded-b-2xl">
      {/* --- Background Elements --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-[-100px] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-[-100px] w-96 h-96 bg-green-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                    <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 font-bold uppercase text-sm tracking-widest">
                           Overview
                        </span>
                    </span>
                    <h2 className="text-3xl md:text-4xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-green-200">
                        Aligning financial processes for better business outcomes
                    </h2>
                    <div className="space-y-6 text-lg leading-relaxed text-gray-300">
                        <p>Accounting services help organisations maintain accurate financial records and present a true and fair view of their financial position. Proper accounting ensures systematic recording of business transactions, compliance with Commercial Companies Law, Value Added Tax (VAT) regulations, and International Financial Reporting Standards (IFRS).</p>
                        <p>Effective accounting provides management with clear financial visibility, supports informed decision-making, and strengthens internal financial control. Our accounting solutions cover day-to-day bookkeeping, transaction recording, financial statement preparation, and other critical finance functions to support sustainable business growth.</p>
                    </div>
                </div>
                <div className="relative group mt-4 lg:mt-0">
                    <div className="absolute -inset-1  rounded-3xl blur opacity-30"></div>
                    <div className="relative rounded-3xl overflow-hidden mt-24 ">
                        <img src="https://images.pexels.com/photos/6248988/pexels-photo-6248988.jpeg" alt="Overview" className="w-full h-auto object-cover" />
                    </div>
                </div>
            </div>
         </div>
      </section>
       </div>
      {/* Services Buttons Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#041D2D]">Explore Our Services</h2>
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

      <div className="relative z-20 mt-0 rounded-b-2xl px-2"><Footer/></div>
    </div>
  );
}