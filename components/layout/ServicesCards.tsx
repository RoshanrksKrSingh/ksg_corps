"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, FileText, BarChart, Wallet, Building2 } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const services = [
  {
    id: "accounting",
    title: "Accounting & Audit Support",
    icon: FileText,
    desc: "Maintenance and Audit of business accounting records and financial details and provides reports informing the management about financial status.",
    image: "https://images.pexels.com/photos/6863260/pexels-photo-6863260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/services/accounting"
  },
  {
    id: "risk",
    title: "Risk Advisory",
    icon: BarChart,
    desc: "With rapidly evolving client needs, we identify and manage potential risks to ensure your corporate affairs and strategies align with sustainable growth.",
    image: "https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/services/risk"
  },
  {
    id: "tax",
    title: "TAX Advisory",
    icon: Wallet,
    desc: "Reducing the impact of complexity of tax related concerns and forming your tax strategies align with your organisational goals.",
    image: "https://images.pexels.com/photos/6863556/pexels-photo-6863556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/services/tax"
  },
  {
    id: "business-setup",
    title: "Business Setup/PRO",
    icon: Building2,
    desc: "Evaluate the feasibility of setting up a Mainland UAE Branch / Mainland UAE LLC / FZ branch / FZ Company to undertake the proposed activities.",
    image: "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    link: "/services/business-setup"
  }
];

export default function ServicesCards() {
  // ✅ Initialize Animation
  useEffect(() => {
    AOS.init({ 
      duration: 1000,
      once: true, // Animation happens only once
    });
  }, []);

  return (
    <section className="py-16 md:py-20 bg-gray-50 rounded-2xl overflow-hidden">
      {/* ✅ Updated: Increased max-width to [85rem] to allow cards to be wider */}
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div 
          className="text-center mb-10 md:mb-14"
          data-aos="fade-down" 
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#041D2D] via-blue-800 to-[#041D2D]">
            Solutions We Provide
          </h2>
          <div className="w-20 md:w-24 h-1.5 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => (
            <div 
              key={service.id}
              data-aos="fade-left"
              data-aos-delay={index * 200}
              // ✅ Updated: Adjusted flex structure
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col h-full transform hover:-translate-y-1"
            >
              {/* Image Container */}
              {/* ✅ Updated: Reduced height to h-40 */}
              <div className="relative h-40 sm:h-44 lg:h-40 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#041D2D]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-sm">
                   <service.icon className="text-white w-10 h-10" strokeWidth={1.5} />
                </div>
              </div>

              {/* Content */}
              {/* ✅ Updated: Reduced padding to p-5 */}
              <div className="p-5 flex flex-col flex-grow relative">
                {/* Icon & Title */}
                <div className="flex items-start gap-3 mb-2">
                  <div className="p-1.5 bg-blue-50 rounded-lg text-[#041D2D] group-hover:bg-[#041D2D] group-hover:text-white transition-colors shrink-0 mt-0.5">
                    <service.icon size={18} />
                  </div>
                  {/* ✅ Updated: Decreased text size to 'text-sm md:text-base' */}
                  <h3 className="text-sm md:text-base font-bold text-[#041D2D] leading-tight group-hover:text-blue-800 transition-colors pt-0.5">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                {/* ✅ Updated: Reduced line-clamp to 3 to decrease height */}
                <p className="text-gray-600 text-xs md:text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                  {service.desc}
                </p>

                {/* Read More Link */}
                <Link 
                  href={service.link}
                  className="inline-flex items-center gap-2 font-bold text-xs md:text-sm mt-auto group/link"
                >
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-green-600 hover:from-orange-500 hover:to-green-500 transition-all">
                    Read More 
                  </span>
                  <ArrowRight size={14} className="text-green-600 transform group-hover/link:translate-x-1 transition-transform" />
                </Link>
                
                {/* Bottom Border Accent */}
                <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-orange-500 to-green-500 group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}