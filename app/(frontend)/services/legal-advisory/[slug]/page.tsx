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

// --- LEGAL ADVISORY DATA ---
const servicesData: Record<
  string,
  { title: string; desc: string; details: string[] }
> = {
  "labour-law": {
    title: "Labour Law Advisory",
    desc: "Labour law oversees the employer-employee relationship, including individual employment contracts, the application of wrongdoing and contract doctrines, and a large group of constitutional regulation on issues such as the right to organize and negotiate collective bargaining agreements, protection from discrimination, wages and hours, and health and safety. KSG Corporate Services offer a range of legal services for international and regional employers/employees in all sectors and for the entire life cycle of the employment relationship.",
    details: [
      "Ministry of Labour compliance",
      "Staff benefits and incentive schemes",
      "Redundancy and termination management",
      "Drafting and remodelling of service contracts",
      "Health and safety in the workplace",
      "End of service gratuity settlements",
      "Termination of employment",
      "Privacy and Reputation Agreement",
      "Wage regulation Compliance"
    ],
  },
  "corporate-law": {
    title: "Corporate & Commercial Law Advisory",
    desc: "Advisory on corporate and commercial regulations and agreements is one of our firm’s core areas of practice. We are an expert team involved in the negotiating, drafting, vetting and amending of all forms of corporate and commercial agreements. Over the years, we have advised and we continue to advise corporate houses, start-ups, proprietorships and other forms of business entities from across the globe.",
    details: [
      "Drafting of Board Resolutions/Minutes/Circular/Agenda",
      "Memorandum and Articles of Association",
      "Share transfers, change of directors and managers",
      "Management and shareholder agreements",
      "Company secretarial and administrative services",
      "Inter-corporate and intra-corporate loans agreements",
      "Joint ventures, mergers and acquisitions, share sales etc.",
      "Co-founder and partnership agreements",
      "License agreements, Service agreements, franchising",
      "Intellectual property law, Copyright Agreements"
    ],
  },
  "litigation": {
    title: "Litigation and Dispute Resolution",
    desc: "Dispute Resolution is a term used across both commercial and private law and in its most basic form, dispute resolution is the resolution of a dispute between two or more parties. The key methods used to resolve disputes are litigation, mediation, negotiation, arbitration, and conciliation. Litigation is a formal legal process utilising the civil legal system available to resolve a dispute.",
    details: [
      "Settlement agreements",
      "Confidentiality and non-disclosure",
      "Knowledge sharing agreements",
      "Organisational claims of damage – legal support",
      "Drafting commercial contracts, partnerships, and acquisitions",
      "Transfer and selling of the shares",
      "Compensation claims litigation",
      "Inheritance and family litigation",
      "Real estate and Tenancy disputes litigation",
      "Debt recovery litigation"
    ],
  },
  "aml": {
    title: "Anti-Money Laundering (AML) Advisory",
    desc: "In September 2018, UAE introduced Federal Decree-law No. 20 of 2018 on Anti-Money Laundering and Combating the Financing of Terrorism. Related regulations target to identify and prevent the methods to launder illegally obtained funds. KSG Corporate Services safeguards your business’s reputation by protecting it from risks related to money laundering and terrorist financing through comprehensive compliance strategies.",
    details: [
      "Compliance Assessment AML and Counter Terrorist Financing (CTF)",
      "Customer Due Diligence (CDD) through KYC Compliance",
      "Assessment of Transaction Monitoring Process",
      "Standard Operating procedure SOP’s for specific AML / CTF Policy",
      "Develop the CDD Policy and the KYC Checklist for the Company",
      "Provide in house staff training",
      "Respond to any queries raised by the authorities"
    ],
  },
  "esr": {
    title: "Economic Substance Advisory",
    desc: "Cabinet of Ministers Resolution No 31 of 2019 Concerning Economic Substance Regulations (ESR) has been introduced to focus on specific relevant activities and meeting substance test for those activities within the UAE. The Economic Substance Requirement (ESR) regulation requires Mainland and Free Zone companies in the UAE conducting ‘Relevant Activity’ to submit an ESR Notification and ESR Report on the Ministry of Finance portal before the applicable deadlines.",
    details: [
      "Assessment of business operation and identifying relevant activity",
      "Application of ESR Test over the Relevant Activities",
      "Performing gap assessment to mitigate risks of failing to meet requirements",
      "Filling of Notification and ESR Report to the Relevant Authority (MOF)"
    ],
  },
  "ubo": {
    title: "Ultimate Beneficial Owner (“UBO”) Advisory",
    desc: "The United Arab Emirates (UAE) issued Cabinet Decision No. 58/2020 on the Regulation of Procedures Related to Real Beneficiaries. The UBO Regulations establish a framework for reporting and registering beneficial interests, ultimate beneficial owners (“UBO”) and professional directors. At KSG, our experienced legal experts successfully help clients to comply with UBO regulation requirements.",
    details: [
      "Assessment of Company Ownership Structure",
      "Preparation of UBO Declaration Form",
      "Filling of UBO Documents to the Authorities",
      "Maintaining Register of Real Beneficial Owners",
      "Maintaining Register of Partners or Shareholders"
    ],
  },
};

// Sidebar Links List
const sidebarLinks = [
  { id: "labour-law", label: "Labour Law" },
  { id: "corporate-law", label: "Corporate & Commercial" },
  { id: "litigation", label: "Litigation & Dispute" },
  { id: "aml", label: "Anti-Money Laundering" },
  { id: "esr", label: "Economic Substance" },
  { id: "ubo", label: "UBO Advisory" },
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

  // Different image for the specific service page
  const detailImage = "https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

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
            href="/services/legal-advisory"
            className="hover:text-green-400 transition-colors"
          >
            Legal Advisory
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
                        href={`/services/legal-advisory/${link.id}`}
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
                  href="/services/legal-advisory"
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