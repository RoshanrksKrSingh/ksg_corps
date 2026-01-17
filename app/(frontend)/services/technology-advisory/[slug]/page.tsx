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

// --- TECHNOLOGY ADVISORY DATA ---
const servicesData: Record<
  string,
  { title: string; desc: string; details: string[] }
> = {
  "consulting": {
    title: "Technology Consulting Services",
    desc: "KSG Technology consulting team will help in building your vision and enable you to achieve your technology goals and objectives, without compromising on security aspects of the organisations. We will work with you to understand the business capability, leverage it, and deliver the innovative solutions where needed. Together, we will achieve the required transformation envisioned for your business by delivering high quality work with visible improvements on the business.",
    details: [
      "IT Structure Transformation",
      "IT Program/Setup Delivery",
      "Business Intelligence (BI) system implementation",
      "Business Continuity Management (BCM) and Disaster Recovery (DR)"
    ],
  },
  "security-audit": {
    title: "IT & Cyber Security Audit",
    desc: "With businesses handling large quantities of data daily, there’s a need for you to develop systems and processes that keep this information safe. IT and cybersecurity are fundamental components of any company’s data security plans. Regardless of industry, you’ll need to examine your current environment, systems, and processes before implementing IT or cybersecurity. Our Technology Advisory team consists of seasoned technology advisors who come from a diverse background and cover a range of specialist skill sets. Our passion is to see organisations extract the best value from a reliable, secure technology environment with high integrity.",
    details: [
      "IT Infrastructure and Management Audits and Risk Management",
      "Cybersecurity Audit and vulnerability assessment",
      "Application and Enterprise Resource Planning (ERP) Audits",
      "Data Security and Privacy Audits"
    ],
  },
  "rpa": {
    title: "Robotic Process Automation (RPA)",
    desc: "Robotic process automation (RPA) is a form of business process automation technology that allows a user to configure software “bots” to mimic or emulate human actions to perform certain repetitive tasks to optimize the business process. It helps the organisation in automating the required but repetitive manual tasks such as data entry and data transfer. KSG Robotic Process Automation team helps clients automate, streamline, and optimize business processes, which have a direct, positive impact to our client’s bottom line.",
    details: [
      "Document business processes",
      "Model technology and data flow",
      "Identify and design custom automation for implementation",
      "Create customized training programs",
      "Develop and deploy automations"
    ],
  },
  "cyber-security": {
    title: "Cybersecurity Services Management",
    desc: "In 2021 cybersecurity is among the top priorities for any company, as organizational executives recognise it is critical for business operations and processes. However, there is still a gap between the need and resources available to solve the problem. Cyber-attacks are increasing in sophistication and magnitude of impact across all industries globally. From 2019–2023, approximately $5.2 trillion in global value will be at risk from cyber-attacks, creating an ongoing challenge for corporations and investors alike. At KSG, we provide tailored Cybersecurity services which is aligned with your organisation’s needs.",
    details: [
      "Assessment of Cybersecurity capabilities (malware protection, IDS/IPS, firewall)",
      "Cybersecurity Management Strategy & Program Design",
      "Cyber Incident Response Management",
      "Cyber Investigations and Digital Forensics Services",
      "Supplier Security and Privacy Assurance (SSPA)"
    ],
  },
  "mssp": {
    title: "Managed Security Services Provider (MSSP)",
    desc: "As organisations struggle in managing, monitoring, and securing their valuable digital assets, depending only on traditional resources such as antivirus and firewalls, may not prevent the organisations from cyberattacks in the current world. A strong defence mechanism is required to defend the organisations from insider and outsider threats. Many companies are choosing to invest in outsourcing their required information security services to a highly qualified Managed Security Services Provider (MSSP), which offers a high level of security, substantial cost savings, and the freedom to concentrate on growing their business.",
    details: [
      "Designing of Cyber Security Operations Centre (CSOC)",
      "Implement Vendor Risk Management (VRM)",
      "Development and review of risk appetite statements",
      "Cyber Security Vulnerability Management (CSVM)",
      "Cyber Security Awareness Training Session"
    ],
  },
};

// Sidebar Links List
const sidebarLinks = [
  { id: "consulting", label: "Tech Consulting" },
  { id: "security-audit", label: "IT & Cyber Audit" },
  { id: "rpa", label: "Robotic Automation (RPA)" },
  { id: "cyber-security", label: "Cybersecurity Mgmt" },
  { id: "mssp", label: "Managed Security (MSSP)" },
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

  // Different image for sub-services (Cyber/Data Theme)
  const detailImage = "https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

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
            href="/services/technology-advisory"
            className="hover:text-green-400 transition-colors"
          >
            Technology Advisory
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
                        href={`/services/technology-advisory/${link.id}`}
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
                  href="/services/technology-advisory"
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