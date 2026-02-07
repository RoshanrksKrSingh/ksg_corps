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

// --- DATA ---
// ✅ Updated: Added specific 'image' for each service
const servicesData: Record<
  string,
  { title: string; desc: string; subtitle?: string; details: string[]; image: string }
> = {
  "book-keeping": {
    title: "Accounting and Book Keeping",
    desc: "Accounting is the process of tracking all income earned and expenses incurred whereas Book – Keeping services are the process of keeping records of financial transactions. Outsourcing of accounting and book-keeping services assures the business of obtaining professional services, complying with all the laws, standards, and requirements of the Land. KSG in-house qualified accountants with experience in different industries will assure you accounting records would comply with the applicable accounting standards.",
    subtitle: "Our Accounting and Book Keeping Service covers:",
    details: [
      "Maintenance of all accounting records and reports",
      "Provide Bank Reconciliation Statement",
      "Provide creditors and debtors ageing every month",
      "Prepare MIS every month for the top management",
      "Reporting financial performance, profitability and Cash/Bank position",
      "Independent health check on the company’s accounting operations",
      "Back log accounting for previous years",
    ],
    // ✅ Unique Image 1
    image: "https://images.pexels.com/photos/29267524/pexels-photo-29267524.jpeg",
  },
  payroll: {
    title: "Outsourced Payroll Services",
    desc: "We provide professional and timely payroll services across the UAE, maintaining complete confidentiality, accuracy and detailed reporting. Our payroll service includes. Outsourcing your payroll processing to KSG Professional Team can be beneficial.",
    subtitle: "Our customized payroll solutions to clients include:",
    details: [
      "Preparation of monthly salary, deductions, gratuity provisions",
      "Preparing and delivery of payslips to the company every month",
      "Comprehensive calculations of End of Service Settlements for outgoing employees",
      "Ensuring compliance with Wage Protection Systems",
      "Apply Cloud-based payroll software that provides easy access and data retrieval",
      "Preparing payroll reports to support accounting",
    ],
    // ✅ Unique Image 2
    image: "https://ik.imagekit.io/travechela/pexels-mikhail-nilov-6930548.jpg",
  },
  ifrs: {
    title: "IFRS Advisory Services",
    desc: "International Financial Reporting Standards (IFRS) is the globally accepted Accounting standard based on which companies are preparing and presenting their financial statements. Financial statements prepared in accordance with the IFRS are globally acceptable and more reliable. KSG professional team will help to assess the potential impact these standards could have on the financial statements of the organisation and be prepared for the challenges that they may face due to the changes.",
    subtitle: "Our IFRS Advisory Services Includes:",
    details: [
      "Identification of applicable IFRS to your organisation",
      "Assessing the potential impact of these standards on your organisation",
      "Identify areas of critical judgment and interpretation",
      "Providing guidance for smooth transition to the new standards",
      "Providing training on the new standards",
      "Disclosure requirements as per the new standard",
    ],
    // ✅ Unique Image 3
    image: "https://ik.imagekit.io/travechela/ifrs.jpg",
  },
  "financial-audit": {
    title: "Financial Audit Support",
    desc: "Financial audit implies an examination of the books of accounts and other relevant records. KSG audit liaison services partner firm is authorised to conduct Statutory Audit for mainland and free zones companies. KSG Audit support team committed to providing exceptional service quality which goes far beyond regulatory demands. We aim to increase transparency and build stakeholder trust in your organisation. Our associated team guided by the KSG professional team ensure that requirements as per International Financial Reporting Standards (IFRSs), auditing standards, and relevant legal provisions are properly complied with.",
    subtitle: "Our Business Expansion Advisory covers:",
    details: [
      "Streamline year end accounting closure",
      "Financial statement preparation & review",
      "Support to prepares all notes relating to Financial Statements",
      "Develop the necessary documentation for audits",
      "Support your overall audit requirements",
      "Implement remediation efforts identified pre- or post-audit",
      "Compilation and Maintenance of Fixed Asset Register",
    ],
    // ✅ Unique Image 4
    image: "https://ik.imagekit.io/travechela/finacialandaudit.jpg",
  },
  "stock-audit": {
    title: "Stock Audit and Verification",
    desc: "Stock Verification or Stocktaking is a physical checking of stock of goods or inventory in the store after a regular interval of time. Periodic physical review of inventory helps identify variances between physical and book quantities and assists in evaluating internal control on movement, accounting and safeguarding of inventory. Our KSG Professional team can assist you in inventory verification and provide more insights into your stock, along with a proper reconciliation of the existing stock records.",
    subtitle: "Our Stock Audit and Verification service covers:",
    details: [
      "Assists client with the complete inventory verification process",
      "Identification of damaged and slow moving or obsolete items",
      "Preparation and Submission of Variance Report",
      "Help to quantify pilferage, fraud, wastage or damage",
      "Valuation of Inventory for Inventory Accounting",
    ],
    // ✅ Unique Image 5 (I used Image 4 again or you can swap with a 5th unique one if provided later. For now, using a relevant placeholder or rotating the list)
    // Note: You provided 4 links in the prompt, but asked for 5 images. I have reused the IFRS image here or I can use the first one.
    // Let's use the first meeting image as a fallback or a distinct one if available.
    // Actually, looking at the links provided:
    // 1. meeting
    // 2. mikhail-nilov
    // 3. yankrukov
    // 4. sora-shimazaki
    // You asked for "5 images". I will use the 'meeting' one again for Stock Audit as it fits 'verification', or you can update this link later.
    image: "https://ik.imagekit.io/travechela/meeting-4784909.jpg?updatedAt=1768997579234",
  },
};

const sidebarLinks = [
  { id: "book-keeping", label: "Accounting & Book Keeping" },
  { id: "payroll", label: "Outsourced Payroll Services" },
  { id: "financial-audit", label: "Financial Audit Support" },
  { id: "stock-audit", label: "Stock Audit and Verification" },
  { id: "ifrs", label: "IFRS Advisory" },
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
      <div className="h-20 bg-[#09102d]"></div>

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
              href="/services/accounting"
              className="hover:text-green-500 transition-colors"
            >
              Accounting
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
                        {/* ✅ Updated Sidebar Buttons */}
                        <Link
                          href={`/services/accounting/${link.id}`}
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

                {/* 3. Image Banner (Dynamic) */}
                {/* ✅ FIXED: Added specific height classes for 1355px+ and 4K screens */}
                <div className="relative w-full h-48 md:h-150 min-[1355px]:h-[35rem] 2xl:h-[65rem] rounded-2xl overflow-hidden mb-8 group shadow-lg">
                  <img
                    // ✅ Updated: Uses the specific image for the current service
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>

                {/* Subtitle (Responsive Text) */}
                {service.subtitle && (
                  <h5 className="text-sm md:text-xl font-bold mb-6 text-gray-800 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-blue-100 dark:to-green-200">
                    {service.subtitle}
                  </h5>
                )}

                {/* 4. Key Features List (Mobile Responsive) */}
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

                {/* 5. Action Buttons */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200 dark:border-white/10">
                  {/* ✅ Updated Back Button */}
                  <Link
                    href="/services/accounting"
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
      <div className="relative z-30 bg-[#020617] border-t border-white/5">
        <Footer />
      </div>
    </div>
  );
} 