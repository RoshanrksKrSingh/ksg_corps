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
  { title: string; desc: string; details: string[] }
> = {
  "strategy": {
    title: "Business Strategic Review",
    desc: "We are here to provide you strategic and operational support required to develop a Strategic Overview that maps out your growth journey. KSG Corporate Services professional team have in-depth industry specific knowledge to provide your company easily-executable strategy that combines in-depth industry knowledge with effective practices to achieve targeted goals.",
    details: [
      "Providing Strategic advisory for any potential matters relating to company day to day business operation",
      "Analysing the most important issues that the strategic plan has to address",
      "Generating strategic options for addressing the most important issues of the organisation",
      "Prioritising operational objectives",
      "Providing and analysing options and Monitoring the results",
      "Assisting in formulating strategies for business process Cost Reduction"
    ],
  },
  "restructuring": {
    title: "Organisational Restructuring",
    desc: "In a constantly changing business environment we help organisation to reorganizes the ownership structure, legal structure, operational structure or any other structure of an organization for making it organized and profitable. It occurs when there is a change in the business model because of external or internal factors and the business entity has to adapt to survive and grow in the market. KSG will provide positive restructuring plans to create a sense of belonging and unity in the company that encourages growth and development.",
    details: [
      "Operational Restructuring Advisory",
      "Technological Restructuring Advisory",
      "Project Management Advisory",
      "Change Management Advisory",
      "Corporate Social Responsibility strategies"
    ],
  },
  "expansion": {
    title: "Business Expansion Advisory",
    desc: "KSG works directly with private sector firms, governments, and industry associations to support their local or international expansion strategies. This involves helping them prepare for market, identifying suitable target markets and market entry support via direct export, trade shows, distribution, acquisition or direct investment – and implementation support.",
    details: [
      "Global Strategy and Business Planning",
      "Market Research Global Market Entry/Expansion",
      "Business Capture and Pricing",
      "Global Marketing, Branding and PR",
      "Customer and Partner Search",
      "Support for Funding, Trade Financing/Export Credit and Incentives Negotiations",
      "Location Assessment and Business Development Support",
      "International Trade Agreements"
    ],
  },
  "process-improvement": {
    title: "Business Process Restructuring",
    desc: "Business Process Reengineering involves the radical redesign of core business processes to achieve dramatic improvements in productivity, cycle times and quality. KSG team help your organisation to achieving operational excellence by transforming existing businesses processes into enhanced and automated business processes.",
    details: [
      "Business model and Market Selection Assessment",
      "Determining market entry strategies",
      "Determining operational and organizational model",
      "Providing consultancy on Corporate law, Labour Legislation, and Tax Law",
      "Human Resources Management model"
    ],
  },
  "feasibility": {
    title: "Feasibility Studies",
    desc: "An assessment of the practicality of a proposed plan to check that it is legally and technically feasible as well as economically justifiable. Feasibility studies can provide a company’s management with crucial information that could prevent the company from entering carelessly into risky businesses or market. It enables an organisation to evaluate whether an investment or business decision makes sense from an economic and operational perspective.",
    details: [
      "Market Feasibility Assessment",
      "Economic Feasibility Assessment",
      "Technical Feasibility Assessment",
      "Legal Feasibility Assessment",
      "Operational Feasibility Assessment"
    ],
  },
  "cross-border": {
    title: "Cross-Border Expansion",
    desc: "Cross-Border expansion strategy comprises market entry strategy including crucial choices in regard to primary markets of focus, determination of target customer and channel strategy, resource allocation, product and service value offerings, brand positioning, and creation of an operating model. KSG assists clients to develop and deliver their strategy for growth beyond their own markets and provide the client with unparalleled data and insights into selected markets.",
    details: [
      "Business model and Market Selection Assessment",
      "Determining market entry strategies",
      "Determining operational and organizational model",
      "Providing consultancy on Corporate law, Labour Legislation, and Tax Law",
      "Human Resources Management model"
    ],
  },
  "bcp": {
    title: "Business Continuity Planning (BCP)",
    desc: "Business disruptions in any form can impact organizations of any size in any location. A robust, well-thought-out Business Continuity Plan (BCP) can help minimise the impact of these disruptions, enable restoration and the return to normalcy and maintain the company’s reputation over the long term. KSG help clients to outline the plans and provide insight about how a business will continue operating during an unplanned disruption in service.",
    details: [
      "Contingencies Plan for all Business Processes",
      "Contingencies Plan for Assets Management",
      "Contingencies Plan for Human Resources",
      "Contingencies Plan for Business Partners"
    ],
  },
};

const sidebarLinks = [
  { id: "strategy", label: "Strategic Formulation" },
  { id: "restructuring", label: "Organisational Restructuring" },
  { id: "expansion", label: "Business Expansion" },
  { id: "process-improvement", label: "Process Improvement" },
  { id: "feasibility", label: "Feasibility Studies" },
  { id: "cross-border", label: "Cross-Border Expansion" },
  { id: "bcp", label: "Business Continuity (BCP)" },
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 py-10 -mt-8">
        
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-gray-400 mb-8">
          <Link
            href="/services/corporate-advisory"
            className="hover:text-green-400 transition-colors"
          >
            Corporate Advisory
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
                        href={`/services/corporate-advisory/${link.id}`}
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

              {/* 3. Image Banner (Positioned Below Text) */}
              <div className="relative w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 shadow-2xl border border-white/10 group">
                <img
                  src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
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
                  href="/services/corporate-advisory"
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