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

// --- RISK DATA ---
const servicesData: Record<
  string,
  { title: string; desc: string; subtitle?: string; details: string[] }
> = {
  "stock-audit": {
    title: "Stock Audit and Verification",
    desc: "Stock Verification or Stocktaking is a physical checking of stock of goods or inventory in the store after a regular interval of time. Periodic physical review of inventory helps identify variances between physical and book quantities and assists in evaluating internal control on movement, accounting and safeguarding of inventory. Our KSG Professional team can assist you in inventory verification and provide more insights into your stock, along with a proper reconciliation of the existing stock records.",
    subtitle: "Our Stock Audit service includes:", // Added generic subtitle
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
    subtitle: "Our Anti-Money Laundering (AML) Advisory includes:", // Generic subtitle added
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

  return (
    <div className="bg-[#041D2D] min-h-screen font-sans relative overflow-hidden">
      
      <Navbar forceStatic={true} />

      {/* Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-[-100px] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-[-100px] w-96 h-96 bg-green-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="h-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-9 py-10 -mt-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-green-400 mb-8">
          <Link
            href="/services/risk"
            className="hover:text-green-400 transition-colors"
          >
            Risk
          </Link>
          <span>/</span>
          <span className="text-white">{service.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* --- LEFT SIDEBAR (Mobile: Bottom, Desktop: Left) --- */}
          {/* ✅ Order preserved: Mobile Bottom, Desktop Left */}
          <div className="lg:col-span-1 space-y-4 order-last lg:order-first">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-4">
                Other Services
              </h3>
              <ul className="space-y-3">
                {sidebarLinks.map((link) => {
                  const isActive = slug === link.id;
                  return (
                    <li key={link.id}>
                      <Link
                        href={`/services/risk/${link.id}`}
                        className={`flex items-center justify-between p-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                          isActive
                            ? "bg-gradient-to-r from-orange-500 to-green-500 text-white shadow-lg"
                            : "text-gray-300 hover:bg-white/10 hover:text-white"
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

            <div className="bg-gradient-to-br from-blue-900 to-[#041D2D] border border-white/10 rounded-2xl p-6 text-center">
              <h4 className="text-white font-bold mb-2">Need Expert Advice?</h4>
              <p className="text-gray-400 text-xs mb-4">
                Our team is ready to help you.
              </p>
              <Link
                href="/contact"
                className="block w-full py-2 bg-white text-[#041D2D] font-bold rounded-lg text-sm hover:bg-gray-100 transition"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* --- RIGHT CONTENT --- */}
          <div className="lg:col-span-3">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden">
              
              {/* 1. Title */}
              <h1 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-green-200">
                {service.title}
              </h1>

              {/* 2. Description (Responsive Text) */}
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-8">
                {service.desc}
              </p>

              {/* 3. Image Banner */}
              <div className="relative w-full h-38 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl border border-white/10 group">
                <img
                  src="https://images.pexels.com/photos/3182749/pexels-photo-3182749.jpeg"
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041D2D]/80 via-transparent to-transparent"></div>
              </div>
              
              {/* ✅ Subtitle (Dynamic based on service) */}
              {service.subtitle && (
                <div>
                  <h5 className="text-sm md:text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-green-200">
                    {service.subtitle}
                  </h5>
                </div>
              )}

              {/* 4. Includes List (Mobile Responsive) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {service.details.map((item, index) => (
                  <div
                    key={index}
                    // ✅ Mobile Text Wrapping Fix & Icon Alignment
                    className="flex items-start md:items-center gap-3 p-3 md:p-4 bg-white/5 rounded-xl border border-white/5 hover:border-green-500/30 transition-colors"
                  >
                    {/* ✅ Icon Fix: flex-shrink-0 + size 20 + mt-1 for mobile alignment */}
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1 md:mt-0" size={20} />
                    
                    {/* ✅ Text Fix: text-sm on mobile */}
                    <span className="text-gray-200 text-sm md:text-base font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* 5. Buttons */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                <Link
                  href="/services/risk"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold text-sm shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
                >
                  <ArrowLeft size={18} /> Back 
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-green-500 text-white font-bold text-sm shadow-lg hover:shadow-orange-500/40 transition-all transform hover:-translate-y-1"
                >
                  <MessageSquare size={18} /> Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

         <div className="rounded-b-2xl overflow-hidden">
  <Footer/>
</div>
    </div>
  );
}