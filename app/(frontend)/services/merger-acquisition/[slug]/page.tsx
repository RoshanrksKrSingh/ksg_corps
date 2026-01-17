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

// --- M&A DATA (Placeholder Content generated for missing details) ---
const servicesData: Record<
  string,
  { title: string; desc: string; details: string[] }
> = {
  "financial-dd": {
    title: "Financial Due Diligence",
    desc: "Financial Due Diligence is a critical step in any M&A transaction. We provide an in-depth analysis of the target company's financial health, historical performance, and future projections. Our goal is to identify potential risks, validate financial information, and provide a solid foundation for valuation and negotiation.",
    details: [
      "Quality of Earnings (QoE) analysis",
      "Review of historical financial statements and trends",
      "Analysis of working capital requirements",
      "Assessment of debt and contingent liabilities",
      "Review of financial projections and assumptions",
      "Identification of key financial risks and opportunities"
    ],
  },
  "tax-dd": {
    title: "Tax Due Diligence",
    desc: "Our Tax Due Diligence services help you understand the tax implications of a potential transaction. We assess the target's historical tax compliance, identify potential tax liabilities, and uncover opportunities for tax efficiencies in the deal structure. We ensure you are fully aware of the tax landscape before closing the deal.",
    details: [
      "Review of past tax filings and compliance history",
      "Identification of potential undisclosed tax liabilities",
      "Assessment of tax risks related to transfer pricing",
      "Analysis of VAT and other indirect tax exposures",
      "Deal structuring advice for tax optimization",
      "Review of tax attributes (e.g., carryforwards)"
    ],
  },
  "legal-dd": {
    title: "Legal Due Diligence",
    desc: "Legal Due Diligence involves a comprehensive review of the target company's legal affairs. We examine contracts, litigation history, intellectual property rights, regulatory compliance, and corporate governance structure to identify legal risks that could impact the transaction or future operations.",
    details: [
      "Review of material contracts and agreements",
      "Analysis of corporate governance and ownership structure",
      "Assessment of pending or threatened litigation",
      "Review of intellectual property portfolio and protection",
      "Regulatory and environmental compliance check",
      "Employment and labor law compliance review"
    ],
  },
  "operational-dd": {
    title: "Operational Due Diligence",
    desc: "Operational Due Diligence goes beyond the numbers to assess the target's operating model. We evaluate the efficiency and scalability of operations, IT infrastructure, supply chain robustness, and key processes. This helps identify potential synergies and operational risks that could affect post-merger value.",
    details: [
      "Assessment of core business processes and efficiency",
      "Review of IT infrastructure and cybersecurity posture",
      "Supply chain and procurement analysis",
      "Evaluation of key management and personnel",
      "Identification of operational synergies and cost-saving opportunities",
      "Capacity and scalability assessment"
    ],
  },
  "integration": {
    title: "Post-Merger Integration",
    desc: "Realizing the full value of an M&A deal depends heavily on successful Post-Merger Integration (PMI). We assist clients in planning and executing the integration process, focusing on combining cultures, streamlining operations, harmonizing IT systems, and achieving targeted synergies to ensure a smooth transition and long-term success.",
    details: [
      "Development of a comprehensive integration roadmap",
      "Cultural integration and change management support",
      "Harmonization of IT systems and platforms",
      "Consolidation of finance, HR, and operational functions",
      "Tracking and realization of deal synergies",
      "Communication strategy for internal and external stakeholders"
    ],
  },
};

// Sidebar Links List
const sidebarLinks = [
  { id: "financial-dd", label: "Financial Due Diligence" },
  { id: "tax-dd", label: "Tax Due Diligence" },
  { id: "legal-dd", label: "Legal Due Diligence" },
  { id: "operational-dd", label: "Operational Due Diligence" },
  { id: "integration", label: "Post-Merger Integration" },
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

  // Different image for the specific service page (Analysis/Teamwork Theme)
  const detailImage = "https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

  return (
    <div className="bg-[#041D2D] min-h-screen font-sans relative overflow-hidden">
      
      <Navbar forceStatic={true} />

      {/* Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-[-100px] w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-[-100px] w-96 h-96 bg-green-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="h-20"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10 -mt-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-8">
          <Link
            href="/services/merger-acquisition"
            className="hover:text-green-400 transition-colors"
          >
            Merger & Acquisition
          </Link>
          <span>/</span>
          <span className="text-white">{service.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          {/* --- LEFT SIDEBAR --- */}
          <div className="lg:col-span-1 space-y-4">
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
                        href={`/services/merger-acquisition/${link.id}`}
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
              <p className="text-gray-300 text-lg leading-relaxed mb-8">
                {service.desc}
              </p>

              {/* 3. Image Banner (Moved Here, No Shadow, Zoom on Hover) */}
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 group">
                <img
                  src={detailImage}
                  alt={service.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#041D2D]/80 via-transparent to-transparent"></div>
              </div>

              {/* 4. Includes List */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {service.details.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/5 hover:border-green-500/30 transition-colors"
                  >
                    <CheckCircle2 className="text-green-400" size={20} />
                    <span className="text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>

              {/* 5. Buttons */}
              <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
                <Link
                  href="/services/merger-acquisition"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold text-sm shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
                >
                  <ArrowLeft size={18} /> Back to Overview
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