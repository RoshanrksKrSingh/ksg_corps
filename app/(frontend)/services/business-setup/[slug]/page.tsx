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

// --- BUSINESS SETUP DATA ---
const servicesData: Record<
  string,
  { title: string; desc: string; details: string[] }
> = {
  "mainland": {
    title: "UAE Mainland Company Formation",
    desc: "The Department of Economic Development (DED) setups in different emirates are the statutory body that regulates and controls the licensing procedures for business setup services in the UAE. From June 1st, 2021 an investor can get 100% ownership in more than 1000 activities. Our consultants work closely with the Department of Economic Development (DED) and other government bodies in UAE to ensure smooth and timely formation of your Mainland Company.",
    details: [
      "Obtaining Trade License for the required business activities",
      "Obtaining Industrial License for the required business activities",
      "Obtaining Professional License",
      "License renewals",
      "License amendments",
      "Help to open Bank Account",
      "Help to get office on Rent"
    ],
  },
  "freezone": {
    title: "Free Zone Company Formation",
    desc: "The UAE is having around 45 Free Zones that facilitate diverse business operations across a range of industries. Free Zones in the UAE are designed for boosting international business by providing complete ownership to foreign investors. These Zones have played a stellar role in attracting global investments and boosting international business. At KSG Corporate Services, carefully evaluating your requirements and help you choose the Free Zone that best meets your business needs and maximizes your business value.",
    details: [
      "Obtaining Free Zone Company (FZC) License",
      "Obtaining Free Zone Establishment (FZE) License",
      "Obtaining Limited Liability Company (LLC) License",
      "License renewals",
      "License amendments",
      "Help to open Bank Account",
      "Help to get office on Rent"
    ],
  },
  "offshore": {
    title: "Offshore Company Formation",
    desc: "An offshore company can operated from outside the UAE from its official registration or the location of its owners and stakeholders. The UAE government has allocated the Jebel Ali, Ras Al Khaimah and Ajman jurisdictions for business owners interested in offshore company formation in the UAE. We assist in compiling and submitting all the necessary documents required registering your offshore company in the UAE.",
    details: [
      "Assessing the requirement and selecting the Authorities and Agent",
      "Prepare Details/Documents required",
      "Obtaining Offshore Company License",
      "Help to open Bank Account",
      "License renewals",
      "License amendments"
    ],
  },
  "sponsorship": {
    title: "Sponsorship Services",
    desc: "As per the UAE Companies Law and UAE Civil Law, to form mainland company (LLC) in the mainland a minimum of 51% local share is a must. A foreign shareholding in mainland company (LLC) should not exceed 49%, however professional companies and civil companies can be owned 100% by an expatriate shareholder, where the local sponsor will act as a Local Service Agent (LSA). From 1st June, 2021 UAE government allowed 100% foreign ownership in more than 1000 business activities but some of the business & professional services require sponsorship. KSG Corporate Services helps in creating an environment where both businesses and local sponsors can thrive with mutual benefits.",
    details: [
      "Assist in getting an authentic and reliable local Partner",
      "Act as in intermediary between clients & Local Partner"
    ],
  },
  "pro-services": {
    title: "Corporate PRO Services",
    desc: "There is a wide array of PRO Services in Dubai, UAE that Emirates Chartered Accountants Group offers to its clients. KSG corporate PRO services in UAE offers a professional service provided by our team of experts that have all the expertise and know-how that is required to submit your documents consistently and accurately, making the process faster and more cost-effective. KSG Corporate PRO Services is a one-stop-shop for all government services in the UAE.",
    details: [
      "Renewal/modification of business licences",
      "Employment Visa Process Application",
      "Visa Renewal/Visa Cancellation",
      "Providing guidance for smooth transition to the new standards",
      "Registration and Renewal of Trade Licenses",
      "Application of Emirates ID",
      "Application of Labour and Immigration Card",
      "Processing’s & approvals from government departments",
      "Attestation and Notarisation of Documents"
    ],
  },
  "liquidation": {
    title: "Company Liquidation",
    desc: "Company liquidation in the UAE is an extremely complex process that requires the submission of numerous official documents pertaining to company formation and operation. Our Company liquidation processes are based on your individual circumstances whilst giving you peace of mind that whatever our experts suggest would be the best feasible option for your business. We look at all the prevailing issues and help you through Company liquidation in Dubai in a timely, efficient, cost-effective and positive manner.",
    details: [
      "Help in Liquidators’ appointment",
      "Liquidation Board of Resolution Drafting and Notarisation",
      "Acquisition of clearances from the Ministry of Labour and the Department of Immigration",
      "Acquisition of clearance from the Customs Department",
      "Procurement of bank closure letters",
      "Newspaper advertisements",
      "Obtaining Non-Liability Letter and Liquidation Certificate"
    ],
  },
};

// Sidebar Links List
const sidebarLinks = [
  { id: "mainland", label: "Mainland Formation" },
  { id: "freezone", label: "Free Zone Formation" },
  { id: "offshore", label: "Offshore Formation" },
  { id: "sponsorship", label: "Sponsorship Services" },
  { id: "pro-services", label: "Corporate PRO" },
  { id: "liquidation", label: "Company Liquidation" },
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

  // Use a different image for the sub-services (Cityscape/Modern Business)
  const detailImage = "https://images.pexels.com/photos/4561006/pexels-photo-4561006.png";

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
            href="/services/business-setup"
            className="hover:text-green-400 transition-colors"
          >
            Business Setup
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
                        href={`/services/business-setup/${link.id}`}
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
                  href="/services/business-setup"
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