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

// --- DIGITAL & DEVELOPMENT DATA (Generated Content) ---
const servicesData: Record<
  string,
  { title: string; desc: string; details: string[] }
> = {
  "website-development": {
    title: "Website Development",
    desc: "Your website is often the first interaction a potential customer has with your brand. We specialize in creating high-performance, visually stunning, and user-centric websites that not only look great but also convert visitors into loyal customers. Our development process focuses on responsiveness, speed, SEO foundation, and scalable architecture to support your future growth.",
    details: [
      "Custom UI/UX Design and Prototyping",
      "Responsive & Mobile-First Web Development",
      "E-commerce Solutions (Shopify, WooCommerce, Custom)",
      "Content Management Systems (CMS) Integration",
      "Website Performance & Speed Optimization",
      "SEO-Friendly Architecture and Basic Setup"
    ],
  },
  "app-development": {
    title: "App Development",
    desc: "In a mobile-first world, having a powerful application puts your business directly in the hands of your customers. We design and develop robust, scalable, and intuitive mobile applications for iOS and Android platforms. From initial concept to App Store deployment, we ensure a seamless user experience that drives engagement and retention.",
    details: [
      "Native iOS and Android App Development",
      "Cross-Platform Development (React Native, Flutter)",
      "UI/UX Design for Mobile Interfaces",
      "Backend Development and API Integration",
      "App Testing, QA, and Deployment Support",
      "Ongoing Maintenance and Feature Updates"
    ],
  },
  "blockchain-development": {
    title: "Blockchain Development",
    desc: "Unlock the potential of decentralized technology with our expert blockchain development services. We help businesses leverage blockchain for enhanced security, transparency, and efficiency. Whether you need smart contracts, decentralized applications (dApps), or private blockchain integration, our team provides future-proof solutions tailored to your specific industry needs.",
    details: [
      "Smart Contract Development and Auditing",
      "Decentralized Application (dApp) Development",
      "Private and Consortium Blockchain Setup",
      "Tokenization and ICO/STO Support Services",
      "Blockchain Integration with Existing Systems",
      "Consulting on Blockchain Strategy and Use Cases"
    ],
  },
  "digital-marketing": {
    title: "Digital Marketing",
    desc: "Cutting-through the noise in today's crowded digital space requires data-driven strategies and creative execution. Our digital marketing team helps you reach your target audience effectively, build brand awareness, and generate qualified leads. We utilize a mix of channels and analytics to optimize campaigns for maximum Return on Investment (ROI).",
    details: [
      "Search Engine Optimization (SEO) Strategy",
      "Pay-Per-Click (PPC) and Search Advertising",
      "Social Media Marketing and Management",
      "Content Marketing and Strategy Creation",
      "Email Marketing Automation and Campaigns",
      "Analytics, Reporting, and Conversion Rate Optimization (CRO)"
    ],
  },
};

// Sidebar Links List
const sidebarLinks = [
  { id: "website-development", label: "Website Development" },
  { id: "app-development", label: "App Development" },
  { id: "blockchain-development", label: "Blockchain Dev" },
  { id: "digital-marketing", label: "Digital Marketing" },
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

  // Different image for sub-services (Creative/Interactive Theme)
  const detailImage = "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

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
            href="/services/digital-development"
            className="hover:text-green-400 transition-colors"
          >
            Digital & Development
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
                        href={`/services/digital-development/${link.id}`}
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
                  href="/services/digital-development"
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