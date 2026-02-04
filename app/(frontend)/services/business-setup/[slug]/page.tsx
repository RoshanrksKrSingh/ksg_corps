"use client";

import { use } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import {
  ArrowLeft,
  MessageSquare,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

// --- BUSINESS SETUP DATA ---
const servicesData: Record<
  string,
  { title: string; desc: string; subtitle?: string; details: string[] }
> = {
  "mainland": {
    title: "UAE Mainland Company Formation",
    desc: "The Department of Economic Development (DED) setups in different emirates are the statutory body that regulates and controls the licensing procedures for business setup services in the UAE. From June 1st, 2021 an investor can get 100% ownership in more than 1000 activities. Our consultants work closely with the Department of Economic Development (DED) and other government bodies in UAE to ensure smooth and timely formation of your Mainland Company.",
    subtitle: "Our Mainland Company Formation Service help:",
    details: [
      "Obtaining Trade License for the required business activities",
      "Obtaining Industrial License for the required business activities",
      "Obtaining Professional License",
      "License renewals",
      "License amendments",
      "Help to open Bank Account",
      "Help to get office on Rent"
    ],
  },
  "freezone": {
    title: "Free Zone Company Formation",
    desc: "The UAE is having around 45 Free Zones that facilitate diverse business operations across a range of industries. Free Zones in the UAE are designed for boosting international business by providing complete ownership to foreign investors. These Zones have played a stellar role in attracting global investments and boosting international business. At KSG Corporate Services, carefully evaluating your requirements and help you choose the Free Zone that best meets your business needs and maximizes your business value.",
    subtitle: "Our Free Zone Company Formation Service help:",
    details: [
      "Obtaining Free Zone Company (FZC) License",
      "Obtaining Free Zone Establishment (FZE) License",
      "Obtaining Limited Liability Company (LLC) License",
      "License renewals",
      "License amendments",
      "Help to open Bank Account",
      "Help to get office on Rent"
    ],
  },
  "offshore": {
    title: "Offshore Company Formation",
    desc: "An offshore company can operated from outside the UAE from its official registration or the location of its owners and stakeholders. The UAE government has allocated the Jebel Ali, Ras Al Khaimah and Ajman jurisdictions for business owners interested in offshore company formation in the UAE. We assist in compiling and submitting all the necessary documents required registering your offshore company in the UAE.",
    subtitle: "Our Offshore Company Formation Service help:",
    details: [
      "Assessing the requirement and selecting the Authorities and Agent",
      "Prepare Details/Documents required",
      "Obtaining Offshore Company License",
      "Help to open Bank Account",
      "License renewals",
      "License amendments"
    ],
  },
  "sponsorship": {
    title: "Sponsorship Services",
    desc: "As per the UAE Companies Law and UAE Civil Law, to form mainland company (LLC) in the mainland a minimum of 51% local share is a must. A foreign shareholding in mainland company (LLC) should not exceed 49%, however professional companies and civil companies can be owned 100% by an expatriate shareholder, where the local sponsor will act as a Local Service Agent (LSA). From 1st June, 2021 UAE government allowed 100% foreign ownership in more than 1000 business activities but some of the business & professional services require sponsorship. KSG Corporate Services helps in creating an environment where both businesses and local sponsors can thrive with mutual benefits.",
    subtitle: "Our Sponsorship Services Covers:",
    details: [
      "Assist in getting an authentic and reliable local Partner",
      "Act as in intermediary between clients & Local Partner"
    ],
  },
  "pro-services": {
    title: "Corporate PRO Services",
    desc: "There is a wide array of PRO Services in Dubai, UAE that Emirates Chartered Accountants Group offers to its clients. KSG corporate PRO services in UAE offers a professional service provided by our team of experts that have all the expertise and know-how that is required to submit your documents consistently and accurately, making the process faster and more cost-effective. KSG Corporate PRO Services is a one-stop-shop for all government services in the UAE.",
    subtitle: "Our Corporate PRO Services Covers:",
    details: [
      "Renewal/modification of business licences",
      "Employment Visa Process Application",
      "Visa Renewal/Visa Cancellation",
      "Providing guidance for smooth transition to the new standards",
      "Registration and Renewal of Trade Licenses",
      "Application of Emirates ID",
      "Application of Labour and Immigration Card",
      "Processing’s & approvals from government departments",
      "Attestation and Notarisation of Documents"
    ],
  },
  "liquidation": {
    title: "Company Liquidation",
    desc: "Company liquidation in the UAE is an extremely complex process that requires the submission of numerous official documents pertaining to company formation and operation. Our Company liquidation processes are based on your individual circumstances whilst giving you peace of mind that whatever our experts suggest would be the best feasible option for your business. We look at all the prevailing issues and help you through Company liquidation in Dubai in a timely, efficient, cost-effective and positive manner.",
    subtitle: "Our Company liquidation services include:",
    details: [
      "Help in Liquidators’ appointment",
      "Liquidation Board of Resolution Drafting and Notarisation",
      "Acquisition of clearances from the Ministry of Labour and the Department of Immigration",
      "Acquisition of clearance from the Customs Department",
      "Procurement of bank closure letters",
      "Newspaper advertisements",
      "Obtaining Non-Liability Letter and Liquidation Certificate"
    ],
  },
};

// Sidebar Links List
const sidebarLinks = [
  { id: "mainland", label: "Mainland Company Formation" },
  { id: "freezone", label: "Free Zone Company Formation" },
  { id: "offshore", label: "Offshore Company Formation" },
  { id: "sponsorship", label: "Sponsorship Services" },
  { id: "pro-services", label: "Corporate PRO Services" },
  { id: "liquidation", label: "Company Liquidation" },
];

export default function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const service = servicesData[slug];

  if (!service) {
    return notFound();
  }

  // Use a different image for the sub-services (Cityscape/Modern Business)
  const detailImage = "https://images.pexels.com/photos/4561006/pexels-photo-4561006.png";

  // Animation Variant
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // ✅ Common Style for Active Buttons (Gradient + Specific Radius + Shadow)
  const activeButtonStyle = "rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] shadow-orange-500/20";

  return (
    <div className="bg-slate-50 dark:bg-[#09102d] min-h-screen font-sans transition-colors duration-300">
      
      <Navbar forceStatic={true} />
      
      {/* Spacer */}
      <div className="h-20 bg-[#09102d]"></div>

      {/* ================= MAIN CONTENT WRAPPER (Starry Background) ================= */}
      <div className="relative overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#09102d] dark:to-[#0F333D] transition-colors duration-300 min-h-screen">
        
        {/* --- STAR BACKGROUND LAYERS --- */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-80 dark:opacity-100 mix-blend-screen" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')", backgroundSize: "280px 280px", filter: "brightness(1.8) saturate(1.5)" }} />
        <div className="absolute inset-0 z-0 pointer-events-none opacity-70 dark:opacity-90 mix-blend-screen animate-stars-slow" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/tiny-stars.png')", backgroundSize: "180px 180px", filter: "brightness(2) saturate(1.6)" }} />
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-80 mix-blend-screen animate-stars-fast" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')", backgroundSize: "120px 120px", filter: "brightness(2.2) saturate(1.8)" }} />
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-cyan-400/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-green-400/20 dark:bg-green-600/20 rounded-full blur-[140px] pointer-events-none"></div>

        <style jsx>{`
          @keyframes starsSlow { from { transform: translateY(0px); } to { transform: translateY(-200px); } }
          @keyframes starsFast { from { transform: translateY(0px); } to { transform: translateY(-400px); } }
          .animate-stars-slow { animation: starsSlow 120s linear infinite; }
          .animate-stars-fast { animation: starsFast 60s linear infinite; }
        `}</style>

        {/* Content Container */}
        <div className="relative z-10 w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto px-4 lg:px-8 py-10 -mt-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400 mb-8 pt-8">
            <Link
              href="/services/business-setup"
              className="hover:text-green-500 transition-colors"
            >
              Business Setup
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 dark:text-white">{service.title}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            
            {/* --- LEFT SIDEBAR (Mobile: Bottom, Desktop: Left) --- */}
            <div className="lg:col-span-1 space-y-4 order-last lg:order-first">
              <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-6 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 border-b border-gray-200 dark:border-white/10 pb-4">
                  Other Services
                </h3>
                <ul className="space-y-3">
                  {sidebarLinks.map((link) => {
                    const isActive = slug === link.id;
                    return (
                      <li key={link.id}>
                        {/* ✅ Updated Sidebar Buttons */}
                        <Link
                          href={`/services/business-setup/${link.id}`}
                          className={`flex items-center justify-between gap-3 px-3 py-3 rounded-xl transition-all duration-300 whitespace-normal xl:whitespace-nowrap text-sm 2xl:text-xl ${
                            isActive
                              ? activeButtonStyle
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white"
                          }`}
                        >
                          {link.label}
                          {isActive && <ChevronRight size={16} />}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-900 to-[#041D2D] border border-white/10 rounded-2xl p-6 text-center shadow-lg">
                <h4 className="text-white font-bold mb-2">Need Expert Advice?</h4>
                <p className="text-gray-400 text-xs mb-4">
                  Our team is ready to help you.
                </p>
                {/* ✅ Updated Contact Button */}
                <Link
                  href="/contact"
                  className={`block w-full py-3 text-center transition-all duration-300 ${activeButtonStyle}`}
                >
                  Contact Us
                </Link>
              </div>
            </div>

            {/* --- RIGHT CONTENT --- */}
            <div className="lg:col-span-3">
              <motion.div 
                className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden shadow-xl"
                variants={fadeUp}
                initial="hidden"
                animate="visible"
              >
                
                {/* 1. Title */}
                <h1 className="text-xl md:text-xl xl:text-2xl 2xl:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  {service.title}
                </h1>

                {/* 2. Description (Responsive Text) */}
                <p className="text-gray-700 dark:text-gray-300 text-sm md:text-base xl:text-sm 2xl:text-xl leading-relaxed mb-8">
                  {service.desc}
                </p>

                {/* 3. Image Banner */}
                <div className="relative w-full h-48 md:h-96 rounded-2xl overflow-hidden mb-8 group shadow-lg">
                  <img
                    src={detailImage}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Subtitle (Dynamic based on service) */}
                {service.subtitle && (
                  <div>
                    <h5 className="text-sm md:text-xl font-bold mb-6 text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-blue-100 dark:to-green-200">
                      {service.subtitle}
                    </h5>
                  </div>
                )}

                {/* 4. Includes List (Responsive) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {service.details.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start md:items-center gap-3 p-3 md:p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-green-500/30 transition-colors"
                    >
                      <CheckCircle2 className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1 md:mt-0" size={20} />
                      <span className="text-gray-700 dark:text-gray-200 text-sm md:text-base font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 5. Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-white/10">
                  {/* ✅ Updated Back Button */}
                  <Link
                    href="/services/business-setup"
                    className={`inline-flex items-center gap-2 px-6 py-3 transition-all duration-300 ${activeButtonStyle}`}
                  >
                    <ArrowLeft size={18} /> Back 
                  </Link>

                  {/* ✅ Updated Free Consultation Button */}
                  <Link
                    href="/contact"
                    className={`inline-flex items-center gap-2 px-8 py-3 transition-all duration-300 ${activeButtonStyle}`}
                  >
                    <MessageSquare size={18} /> Free Consultation
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= FOOTER SECTION (Distinct Background) ================= */}
      <div className="relative z-20 bg-gray-900 dark:bg-[#020617] border-t border-gray-200 dark:border-white/5">
        <Footer/>
      </div>

    </div>
  );
}