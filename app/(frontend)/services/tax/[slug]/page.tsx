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
import { motion } from "framer-motion";

// --- TAX DATA ---
// ✅ Updated: Added specific 'image' for each service
const servicesData: Record<
  string,
  { title: string; desc: string; subtitle?: string; details: string[]; image: string }
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
      "Expatriates Tax Advisory",
    ],
    // ✅ Unique Image 1
    image: "https://images.pexels.com/photos/6863259/pexels-photo-6863259.jpeg",
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
      "Assistance in filing VAT/Excise return",
    ],
    // ✅ Unique Image 2
    image: "https://ik.imagekit.io/travechela/compilance.jpg",
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
      "Help in drafting and submitting Clarifications / Ruling request with the Authorities",
    ],
    // ✅ Unique Image 3
    image: "https://ik.imagekit.io/travechela/helthcheck.jpg",
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
      "Assisting in updating VAT Registration with the Federal Tax Authority",
    ],
    // ✅ Unique Image 4
    image: "https://ik.imagekit.io/travechela/registration.jpg",
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
      "Provide Detailed Training to the In-house Staff for VAT Audit Readiness",
    ],
    // ✅ Unique Image 5
    image: "https://ik.imagekit.io/travechela/auditsupport.jpg",
  },
  "vat-refund": {
    title: "VAT Refund Support",
    desc: "Refund of VAT is a scenario where input tax amount is higher than output tax amount as per the tax return filed with the tax authority. Typically refund claim is scrutinised by the tax authority before sanctioning the refund claim. We Assist with FTA Information Requests for VAT Refunds filed, VAT Tourist Refund Scheme, VAT Refund for Business Visitors, VAT Refund for Expo 2020 Official Participants, and VAT Refund for Building New Residences by UAE Nationals.",
    subtitle: "Our VAT Refund Support service covers:",
    details: [
      "Refund Assessment through a comprehensive VAT Health Check",
      "Preparation of refund application and assistance in submission",
      "Review of refund related documents",
      "Assisting in replying to queries raised by the FTA",
      "Expediting the VAT Refund Process",
    ],
    // ✅ Unique Image 6
    image: "https://ik.imagekit.io/travechela/refund.jpg",
  },
  "voluntary-disclosure": {
    title: "Voluntary Disclosure (VD)",
    desc: "A Voluntary Disclosure should be made by a taxable person to notify the FTA of an error or omission in their tax return, tax assessment or tax refund application. There are fixed circumstances defined by the VAT Law under which a taxable person can file Voluntary Disclosure. Our professional team support to file Voluntary Disclosure (VD) and to minimise the risk of fines and penalties in case of a Tax Assessment by the FTA.",
    subtitle: "Our Voluntary Disclosure (VD) support covers:",
    details: [
      "VD Assessment through a comprehensive VAT Health Check",
      "Preparation of Reports to revise VAT Computation",
      "File Voluntary Disclosure (VD) with the FTA",
      "Assisting in replying to queries raised by the FTA",
    ],
    // ✅ Unique Image 7
    image: "https://ik.imagekit.io/travechela/vd.jpg",
  },
};

// Sidebar Links List
const sidebarLinks = [
  { id: "international-tax", label: "International Taxation" },
  { id: "vat-compliance", label: "VAT/Excise Compliance" },
  { id: "vat-health-check", label: "VAT/Excise Health Checks" },
  { id: "vat-registration", label: "VAT/Excise Registration" },
  { id: "vat-audit", label: "VAT/Excise Audit Support" },
  { id: "vat-refund", label: "VAT Refund Support" },
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

  // Animation Variant
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // ✅ Common Style for Active Buttons (Gradient + Specific Radius + Shadow)
  const activeButtonStyle =
    "rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] shadow-orange-500/20";

  return (
    <div className="bg-slate-50 dark:bg-[#09102d] min-h-screen font-sans transition-colors duration-300">
      <Navbar forceStatic={true} />

      {/* Spacer */}
      <div className="h-16 bg-[#09102d]"></div>

      {/* ================= MAIN CONTENT WRAPPER (Starry Background) ================= */}
      <div className="relative overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#09102d] dark:to-[#0F333D] transition-colors duration-300 min-h-screen">
        {/* --- STAR BACKGROUND LAYERS --- */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-80 dark:opacity-100 mix-blend-screen"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/stardust.png')",
            backgroundSize: "280px 280px",
            filter: "brightness(1.8) saturate(1.5)",
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-70 dark:opacity-90 mix-blend-screen animate-stars-slow"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/tiny-stars.png')",
            backgroundSize: "180px 180px",
            filter: "brightness(2) saturate(1.6)",
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-80 mix-blend-screen animate-stars-fast"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/stardust.png')",
            backgroundSize: "120px 120px",
            filter: "brightness(2.2) saturate(1.8)",
          }}
        />
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-cyan-400/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-green-400/20 dark:bg-green-600/20 rounded-full blur-[140px] pointer-events-none"></div>

        <style jsx>{`
          @keyframes starsSlow {
            from {
              transform: translateY(0px);
            }
            to {
              transform: translateY(-200px);
            }
          }
          @keyframes starsFast {
            from {
              transform: translateY(0px);
            }
            to {
              transform: translateY(-400px);
            }
          }
          .animate-stars-slow {
            animation: starsSlow 120s linear infinite;
          }
          .animate-stars-fast {
            animation: starsFast 60s linear infinite;
          }
        `}</style>

        {/* Content Container */}
        <div className="relative z-10 w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto px-4 lg:px-8 py-10 -mt-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400 mb-8 pt-8">
            <Link
              href="/services/tax"
              className="hover:text-green-500 transition-colors"
            >
              Tax Advisory
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 dark:text-white">
              {service.title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
            {/* --- LEFT SIDEBAR (Mobile: Bottom, Desktop: Left/First) --- */}
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
                        <Link
                          href={`/services/tax/${link.id}`}
                          className={`flex items-center justify-between gap-3 px-3 py-3 rounded-xl transition-all duration-300 whitespace-normal xl:whitespace-nowrap text-sm 2xl:text-xl ${
                            isActive
                              ? activeButtonStyle
                              : "text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white "
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
                <h4 className="text-white font-bold mb-2">
                  Need Expert Advice?
                </h4>
                <p className="text-gray-400 text-xs mb-4">
                  Our team is ready to help you.
                </p>
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

                {/* 3. Image Banner (Dynamic & Responsive Height) */}
                <div className="relative w-full h-48 md:h-150 min-[1355px]:h-[35rem] 2xl:h-[65rem] rounded-2xl overflow-hidden mb-8 group shadow-lg">
                  <img
                    // ✅ Updated: Uses the unique image for current tax service
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Subtitle */}
                {service.subtitle && (
                  <h5 className="text-sm md:text-xl font-bold mb-6 text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-blue-100 dark:to-green-200">
                    {service.subtitle}
                  </h5>
                )}

                {/* 4. Details List */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                  {service.details.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start md:items-center gap-3 p-3 md:p-4 bg-gray-50 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/5 hover:border-green-500/30 transition-colors"
                    >
                      <CheckCircle2
                        className="text-green-600 dark:text-green-400 flex-shrink-0 mt-1 md:mt-0"
                        size={20}
                      />
                      <span className="text-gray-700 dark:text-gray-200 text-sm md:text-base font-medium leading-relaxed">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                {/* 5. Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-white/10">
                  <Link
                    href="/services/tax"
                    className={`inline-flex items-center gap-2 px-6 py-3 transition-all duration-300 ${activeButtonStyle}`}
                  >
                    <ArrowLeft size={18} /> Back
                  </Link>

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

      {/* ================= FOOTER SECTION ================= */}
      <div className="relative z-30 bg-[#020617] border-t border-white/5">
        <Footer />
      </div>
    </div>
  );
}