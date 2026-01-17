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

// --- DATA ---
const servicesData: Record<
  string,
  { title: string; desc: string; subtitle?: string; details: string[] }
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
  },
  "stock-audit": {
    title: "Stock Audit and Verification",
    desc: "Stock Verification or Stocktaking is a physical checking of stock of goods or inventory in the store after a regular interval of time. Periodic physical review of inventory helps identify variances between physical and book quantities and assists in evaluating internal control on movement, accounting and safeguarding of inventory. Our KSG Professional team can assist you in inventory verification and provide more insights into your stock, along with a proper reconciliation of the existing stock records.",
    subtitle: "Our Stock Audit and Verification service covers:",
    details: ["Assists client with the complete inventory verification process", "Identification of damaged and slow moving or obsolete items", "Preparation and Submission of Variance Report", "Help to quantify pilferage, fraud, wastage or damage","Valuation of Inventory for Inventory Accounting"],
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

  return (
    <div className="bg-[#041D2D] min-h-screen font-sans relative overflow-hidden">
      
      <Navbar forceStatic={true} />
      
      {/* Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-[-100px] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-[-100px] w-96 h-96 bg-green-600/10 rounded-full blur-[120px]"></div>
      </div>

      {/* Spacer */}
      <div className="h-20"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-9 py-10 -mt-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-green-400 mb-8">
          <Link
            href="/services/accounting"
            className="hover:text-green-400 transition-colors"
          >
            Accounting
          </Link>
          <span>/</span>
          <span className="text-white">{service.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* --- LEFT SIDEBAR (Mobile: Bottom, Desktop: Left/First) --- */}
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
                        href={`/services/accounting/${link.id}`}
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
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8  group">
                <img
                  src="https://images.pexels.com/photos/29267524/pexels-photo-29267524.jpeg"
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041D2D]/80 via-transparent to-transparent"></div>
              </div>

              {/* Subtitle (Responsive Text) */}
              {service.subtitle && (
                <h5 className="text-sm md:text-xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-green-200">
                  {service.subtitle}
                </h5>
              )}

              {/* 4. Key Features List (Mobile Responsive) */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {service.details.map((item, index) => (
                  <div
                    key={index}
                    // ✅ Updated: 'items-start' for mobile text wrapping, 'md:items-center' for desktop
                    className="flex items-start md:items-center gap-3 p-3 md:p-4 bg-white/5 rounded-xl border border-white/5 hover:border-green-500/30 transition-colors"
                  >
                    {/* ✅ Updated: 'flex-shrink-0' to prevent icon squashing, Size 20 */}
                    <CheckCircle2 className="text-green-400 flex-shrink-0 mt-1 md:mt-0" size={20} />
                    
                    {/* ✅ Updated: 'text-sm' for mobile, 'md:text-base' for desktop */}
                    <span className="text-gray-200 text-sm md:text-base font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* 5. Action Buttons */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                <Link
                  href="/services/accounting"
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