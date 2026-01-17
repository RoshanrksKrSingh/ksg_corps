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

// --- TAX DATA ---
const servicesData: Record<
  string,
  { title: string; desc: string; subtitle?: string; details: string[] }
> = {
  "international-tax": {
    title: "International Taxation & Transfer Pricing",
    desc: "As an International Taxation and Transfer Pricing Advisors, KSG provides Tax Solutions at Every Corner for Clients. Through our association of international tax advisers in other countries, KSG is able to provide comprehensive international tax advice and planning to personal, corporate, expatriate and offshore clients. Our Transfer Pricing experts help you to develop a transfer pricing strategy suited to your multinational company, offering innovative and tax-efficient compliance.",
    subtitle: "Our International Taxation & Transfer Pricing Advisory covers:",
    details: [
      "Corporate Tax (Local & Global) Advisory Service",
      "International Tax Reporting Advisory for Multinational Entities",
      "Cross border business or transactions Advisory",
      "Withholding Tax Compliance Advisory",
      "Double Tax Avoidance Agreement (DTAA) Impact Advisory",
      "Transfer Pricing Compliances and Reporting Advisory",
      "Expatriates Tax Advisory"
    ],
  },
  "vat-compliance": {
    title: "VAT/Excise Compliance",
    desc: "With the introduction of Value Added Tax (VAT) and Excise Tax in the UAE and GCC, businesses are having to have a fresh look at their business operation and compliance environment. KSG Team holds valuable experience and professional accreditation in assisting clients to ensure that organizations remain ahead of the requirements within the UAE.",
    subtitle: "Our VAT/Excise Compliance Advisory covers:",
    details: [
      "Review of Sales and Purchase transactions",
      "Review of documents, invoices, agreements, etc.",
      "Review of VAT/Excise return workings prepared by the Company",
      "Review VAT Input/ Excise Deduction eligibility",
      "Providing assistance in finalizing VAT/Excise return workings",
      "Assistance in filing VAT/Excise return"
    ],
  },
  "vat-health-check": {
    title: "VAT/Excise Health Checks",
    desc: "A high-level Health Check may highlight key taxes or compliance areas where there is non-compliance and the areas where more attention is required. These Health Checks enable clients to undertake necessary corrective action before an audit takes place and to ensure required documents are readily available. KSG Team will conduct a VAT Health Check to highlight adverse tax positions adopted by the client and compliance gaps needed to be eliminated.",
    subtitle: "Our VAT/Excise Health Checks covers:",
    details: [
      "Review of documentation trail for all Supplies like Tax Invoices, Credit Notes",
      "Review of documentation trail for VAT Input like supplier tax Invoices, & Credit Notes",
      "Identification of eligible/ineligible VAT Input and Excise Deductions",
      "Review of Custom documents related to import/export of goods and services",
      "Contract vetting for VAT Impact analysis",
      "Developing Standard Operating Procedures (SOPs) for VAT Compliance",
      "Help in drafting and submitting Clarifications / Ruling request with the Authorities"
    ],
  },
  "vat-registration": {
    title: "VAT/Excise Registration/Deregistration",
    desc: "VAT Registration refers to the set of procedures by which a person can register with the Federal Tax Authority (FTA). A business must register for VAT if its taxable supplies exceed AED 375,000 per annum. It is optional for businesses whose supplies exceed AED 187,500 per annum. Businesses can register for VAT through the eservices section on the FTA website. However, they need to create an account first.",
    subtitle: "Our VAT/Excise Registration/Deregistration service covers:",
    details: [
      "Review of eligibility conditions relating Supplies",
      "Preparation of all documents required for Single/Group Registration",
      "Helping to obtain custom certificate for FTA account linking",
      "Filling of Registration Application with the FTA",
      "Assisting in updating VAT Registration with the Federal Tax Authority"
    ],
  },
  "vat-audit": {
    title: "VAT/Excise Audit Support",
    desc: "A tax audit is essentially a government’s assessment of a company about their responsibility as a taxable entity to ensure that the tax liability is paid and every tax due is collected and given to the government within the time frame given. The FTA authorities will check the returns and other details/documents like sales invoices, purchase invoices, Custom & VAT documents related to import/export of goods/services.",
    subtitle: "Our VAT/Excise Audit Support service covers:",
    details: [
      "Assessment through a comprehensive VAT Health Check",
      "Review of existing documentation and reports",
      "Review of legal contracts and agreements",
      "Preparation of all the Reports to be sent to the FTA",
      "Advise and support to prepare and maintain required documents",
      "Help to file Voluntary Disclosures/Penalty Waiver application",
      "Provide Detailed Training to the In-house Staff for VAT Audit Readiness"
    ],
  },
  "vat-refund": {
    title: "VAT Refund Support",
    desc: "Refund of VAT is a scenario where input tax amount is higher than output tax amount as per the tax return filed with the tax authority. Typically refund claim is scrutinised by the tax authority before sanctioning the refund claim. We Assist with FTA Information Requests for VAT Refunds filed, VAT Tourist Refund Scheme, VAT Refund for Business Visitors, VAT Refund for Expo 2020 Official Participants, and VAT Refund for Building New Residences by UAE Nationals.",
    subtitle: "Our VAT Refund Support service covers:", // Added generic subtitle as none provided specific
    details: [
      "Refund Assessment through a comprehensive VAT Health Check",
      "Preparation of refund application and assistance in submission",
      "Review of refund related documents",
      "Assisting in replying to queries raised by the FTA",
      "Expediting the VAT Refund Process"
    ],
  },
  "voluntary-disclosure": {
    title: "Voluntary Disclosure (VD)",
    desc: "A Voluntary Disclosure should be made by a taxable person to notify the FTA of an error or omission in their tax return, tax assessment or tax refund application. There are fixed circumstances defined by the VAT Law under which a taxable person can file Voluntary Disclosure. Our professional team support to file Voluntary Disclosure (VD) and to minimise the risk of fines and penalties in case of a Tax Assessment by the FTA.",
    subtitle: "Our Voluntary Disclosure (VD) support covers:",
    details: [
      "VD Assessment through a comprehensive VAT Health Check",
      "Preparation of Reports to revise VAT Computation",
      "File Voluntary Disclosure (VD) with the FTA",
      "Assisting in replying to queries raised by the FTA"
    ],
  },
};

// Sidebar Links List
const sidebarLinks = [
  { id: "international-tax", label: "International Taxation" },
  { id: "vat-compliance", label: "VAT/Excise Compliance" },
  { id: "vat-health-check", label: "VAT/Excise Health Checks" },
  { id: "vat-registration", label: "VAT/Excise Registration" },
  { id: "vat-audit", label: "VAT/Excise Audit Support" },
  { id: "vat-refund", label: "VAT/Excise Audit Support" },
  { id: "voluntary-disclosure", label: "Voluntary Disclosure (VD)" },
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
            href="/services/tax"
            className="hover:text-green-400 transition-colors"
          >
            Tax Advisory
          </Link>
          <span>/</span>
          <span className="text-white">{service.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* --- LEFT SIDEBAR (Mobile: Bottom, Desktop: Left) --- */}
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
                        href={`/services/tax/${link.id}`}
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

              {/* 2. Description */}
              <p className="text-gray-300 text-sm md:text-lg leading-relaxed mb-8">
                {service.desc}
              </p>

              {/* 3. Image Banner */}
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl border border-white/10 group">
                <img
                  src="https://images.pexels.com/photos/6863259/pexels-photo-6863259.jpeg"
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041D2D]/80 via-transparent to-transparent"></div>
              </div>
              
              {/* Subtitle (Dynamic based on service) */}
              {service.subtitle && (
                <div>
                  <h5 className="text-sm md:text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-green-200">
                    {service.subtitle}
                  </h5>
                </div>
              )}

              {/* 4. Includes List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {service.details.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start md:items-center gap-3 p-3 md:p-4 bg-white/5 rounded-xl border border-white/5 hover:border-green-500/30 transition-colors"
                  >
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1 md:mt-0" size={20} />
                    <span className="text-gray-200 text-sm md:text-base font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* 5. Buttons */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                <Link
                  href="/services/tax"
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

      <div className="relative z-20 mt-10 rounded-b-2xl px-2">
        <Footer />
      </div>
    </div>
  );
}