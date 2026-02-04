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

// --- RISK DATA ---
const servicesData: Record<
  string,
  { title: string; desc: string; subtitle?: string; details: string[] }
> = {
  "stock-audit": {
    title: "Stock Audit and Verification",
    desc: "Stock Verification or Stocktaking is a physical checking of stock of goods or inventory in the store after a regular interval of time. Periodic physical review of inventory helps identify variances between physical and book quantities and assists in evaluating internal control on movement, accounting and safeguarding of inventory. Our KSG Professional team can assist you in inventory verification and provide more insights into your stock, along with a proper reconciliation of the existing stock records.",
    subtitle: "Our Stock Audit service includes:", 
    details: [
      "Assists client with the complete inventory verification process",
      "Identification of damaged and slow moving or obsolete items",
      "Preparation and Submission of Variance Report",
      "Help to quantify pilferage, fraud, wastage or damage",
      "Valuation of Inventory for Inventory Accounting"
    ],
  },
  "internal-audit": {
    title: "Internal Audit",
    desc: "The principal purpose of internal auditing is to provide insight into an organization’s culture, policies, and procedures by verifying internal controls such as operating effectiveness, risk mitigation controls, and compliance with relevant laws or regulations. Internal Auditors’ function includes supervising, evaluating, investigating, and analysing the risks & controls; checking and ensuring information and compliance with policies, procedures, and laws. KSG Risk Advisory Team provides the Management with independent assurance on the organization’s internal controls, risk management strategies and governance are operating effectively.",
    subtitle: "Our Internal Audit Service includes:",
    details: [
      "Assessing the Internal Control, Policies & Procedures",
      "Assisting management in the evaluation of internal controls",
      "Evaluating process performance and managing risk effectively",
      "Assessing the overall regulatory compliance",
      "Identify the core operational risks and mitigation strategy for these risks",
      "To evaluate evidence in connection with the situation and issues"
    ],
  },
  "sop": {
    title: "Standard Operating Procedure (SOP)",
    desc: "A standard operating procedure (SOP) is a set of step-by-step instructions compiled by an organization to help it in carrying out routine operations. SOPs provide a sequential order to an organizational process, and keep them documented in an easily accessible and comprehensible manner. SOPs aim to achieve efficiency, quality output and uniformity of performance, while reducing miscommunication and failure to comply with organisation policies and industry regulations. We at KSG Corporate Services help organizations develop SOPs that improve the process and internal control efficiency and help businesses function seamlessly.",
    subtitle: "Our Standard Operating Procedure (SOP) Service includes:",
    details: [
      "SOP for Revenue Section",
      "SOP for Procurement Section",
      "SOP for Human Resource Section",
      "SOP for Finance & Accounts Section",
      "SOP for Management Authorisation",
      "SOP for all the critical business processes"
    ],
  },
  "forensic-audit": {
    title: "Forensic Audit",
    desc: "In increasingly complex business surroundings, the full gamut of white-collar crimes is difficult to uncover even as they impose significant stress and strain on business. Forensic audits cover a large spectrum of investigative activities such as financial fraud, cyber security threats. There may be a forensic audit to prosecute a party for fraud, embezzlement or other financial crimes. The auditor may be called in during the process of a forensic audit to serve as an expert witness during trial proceedings. Forensic audits could also include situations that do not involve financial fraud, such as bankruptcy filing disputes and closures of businesses.",
    subtitle: "Our Forensic Audit Service includes Investigation for:",
    details: [
      "Financial Irregularities Investigation",
      "Asset Misappropriation Investigation",
      "Cyber Security Threats Investigation",
      "Abuse of Process and Policies Investigation",
      "Abuse of Authority/Power Investigation",
      "Fraud Risk Assessment"
    ],
  },
  "icfr": {
    title: "Internal Control over Financial Reporting (ICFR)",
    desc: "Internal Control over Financial Reporting (ICFR) is a process designed to provide reasonable assurance regarding the reliability of financial reporting and the preparation of financial statements for external purposes in accordance with International Financial Reporting Standards (IFRS). ICFR controls help in ensuring the orderly and efficient conduct of business, including regulatory compliance and prevention and detection of fraud and errors, and covers not only the controls over reliable reporting of financial statements, but also includes other controls pervasive across the business. KSG team can help you identify policies that are not effectively designed and verify internal controls with respect to financial reporting are working effectively. Our objective is to assist you in navigating and implementing a robust internal control framework.",
    subtitle: "Our ICFR compliance framework includes:",
    details: [
      "Conduct business understanding and identify applicable laws and regulations",
      "Identifying financial reporting elements, critical processes, supporting systems",
      "Assess the applicability of each regulation to the entity’s Operations",
      "Assign a process owner to each compliance requirement",
      "Prepare Risk Control Matrix (RCM) & Process Flowcharts for all applicable compliance",
      "Suggest remedial action for gaps identified, in line with leading practices",
      "Provide checklist updates mapped to the compliance tool",
      "Handhold for a limited time period"
    ],
  },
  "erm": {
    title: "Enterprise Risk Management (ERM)",
    desc: "Modern businesses face a diverse set of risks and potential dangers. In the past, companies traditionally handled their risk exposures via each division managing its own business, however Enterprise risk management (ERM) is a methodology that looks at risk management strategically from the perspective of the entire firm or organization. It is a top-down strategy that aims to identify, assess, and prepare for potential losses, dangers, hazards, and other potentials for harm that may interfere with an organization’s operations and objectives and/or lead to losses. KSG Enterprise Risk Management Services (ERM) in the UAE can help an organization implement a sustainable ERM program.",
    subtitle: "Our Enterprise Risk Management (ERM) advisory includes:",
    details: [
      "Assessing current state of risk management practices",
      "ERM framework development and review",
      "Development and review of risk appetite statements",
      "Assessment of Key Risk Indicators (KRIs)",
      "Risk reporting templates based on the ISO, COCO and COSO, the leading risk management standards.",
      "Disclosure requirements as per the new standard"
    ],
  },
  "aml": {
    title: "Anti-Money Laundering (AML) Advisory",
    desc: "In September 2018, UAE introduced Federal Decree-law No. 20 of 2018 on Anti-Money Laundering and Combating the Financing of Terrorism, and related Regulations were issued under the Cabinet Decision No. 10 of 2019 in February 2019 comprises the laws, regulations, and procedures to curb the disguising of illegally obtained funds through market manipulation, trading of illegal goods, corruption, tax evasion, terrorism, etc. AML is targeting to identify and prevent the methods to launder the illegally obtained funds. KSG Corporate Services safeguards your business’s reputation by protecting it from risks related to money laundering and terrorist financing.",
    subtitle: "Our Anti-Money Laundering (AML) Advisory includes:", 
    details: [
      "Compliance Assessment AML and Counter Terrorist Financing (CTF)",
      "Customer Due Diligence (CDD) through Know Your Customer (KYC) Compliance",
      "Assessment of Transaction Monitoring Process",
      "Standard Operating procedure SOP’s for specific AML / CTF Policy",
      "Develop the CDD Policy and the KYC Checklist for the Company",
      "Provide in house staff training",
      "Respond to any queries raised by the authorities"
    ],
  },
};

// Sidebar Links List
const sidebarLinks = [
  { id: "internal-audit", label: "Internal Audit" },
  { id: "sop", label: "Standard Operating Procedure" },
  { id: "forensic-audit", label: "Forensic & Fraud Audit" },
  { id: "icfr", label: "Internal Control (ICFR)" },
  { id: "erm", label: "Enterprise Risk Management" },
  { id: "aml", label: "Anti-Money Laundering" },
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
              href="/services/risk"
              className="hover:text-green-500 transition-colors"
            >
              Risk
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
                          href={`/services/risk/${link.id}`}
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
                    src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
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
                    href="/services/risk"
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