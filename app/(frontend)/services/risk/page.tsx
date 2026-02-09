"use client";

import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion"; // ✅ Import Framer Motion

export default function RiskAdvisoryPage() {
  // Animation Variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const fadeRight = {
    hidden: { opacity: 0, x: -40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  const fadeLeft = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerStagger = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Services List for Buttons
  const services = [
    { id: "internal-audit", title: "Internal Audit" },
    { id: "sop", title: "Standard Operating Procedure (SOP)" },
    { id: "forensic-audit", title: "Forensic and Fraud Audit" },
    { id: "icfr", title: "Internal Control Over Financial Reporting (ICFR)" },
    { id: "erm", title: "Enterprise Risk Management (ERM)" },
    { id: "aml", title: "Anti-Money Laundering" },
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#09102d] min-h-screen font-sans transition-colors duration-300">
      {/* 1. Navbar: Force Static */}
      <Navbar forceStatic={true} />

      {/* 2. Spacer Div */}
      <div className="w-full h-20 bg-[#09102d]"></div>

      {/* ================= MAIN CONTENT WRAPPER (Starry Background) ================= */}
      <div className="relative overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#09102d] dark:to-[#0F333D] transition-colors duration-300">
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
        {/* Soft Tint & Glows */}
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-cyan-400/5 via-transparent to-blue-500/5"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/20 dark:bg-blue-600/20 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[400px] h-[400px] bg-green-400/20 dark:bg-green-600/20 rounded-full blur-[140px] pointer-events-none"></div>

        {/* Animation Styles */}
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

        {/* --- SECTION 1: OVERVIEW --- */}
        <section className="relative z-10 w-full pt-16 pb-10">
          <div className="w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Text Content (Left) - Animated */}
              <div className="space-y-8">
                <motion.div
                  variants={fadeRight}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <span className="inline-block py-1.5 px-4 rounded-tl-[20px] rounded-br-[20px] border border-gray-300 dark:border-white/10 bg-white/60 dark:bg-white/20 shadow-sm mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600 dark:from-green-400 dark:to-blue-500 font-bold uppercase text-xs tracking-[0.2em]">
                      Overview
                    </span>
                  </span>
                  <h2 className="text-xl sm:text-2xl lg:text-[1.8rem] xl:text-3xl 2xl:text-4xl font-bold leading-tight text-gray-900 dark:text-white">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                      Internal Audit & Risk Advisory
                    </span>
                  </h2>
                </motion.div>

                <motion.div
                  className="space-y-4 text-sm md:text-base text-gray-700 dark:text-gray-300 text-justify leading-relaxed"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <p>
                    With ever changing global business conditions and
                    constantly-shifting landscape comes great complexity.
                    Connect trust, resilience and security is the answer how can
                    you not only survive but thrive in the face of uncertainty
                    in the world around you. Effective Internal and Risk audit
                    service is mandatory for risk management and your business’s
                    proper functioning. High Standards of Corporate Governance
                    helps organizations reassure its stakeholders regarding the
                    sustainability and succession of the business. Only when
                    investors are convinced about the perpetual existence of a
                    business will they have confidence to continue their
                    association with it. KSG team has the experience and
                    in-depth knowledge that can assist you achieve sound
                    corporate governance framework and help your business manage
                    risk more effectively
                  </p>
                </motion.div>
              </div>

              {/* Image Section (Right) - Animated */}
              <motion.div
                className="relative h-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0"
                variants={fadeLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <div className="relative w-full max-w-md lg:max-w-full">
                  <div className="rounded-tl-[30px] rounded-br-[30px] overflow-hidden shadow-2xl border border-gray-200 dark:border-white/10">
                    <img
                      src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                      alt="Risk Advisory Overview"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SECTION 2: SERVICES BUTTONS --- */}
        <section className="relative z-10 w-full py-20">
          <div className="w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto px-4 lg:px-8">
            {/* Header Animated */}
            <motion.div
              className="text-center mb-12"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <h2 className="text-xl sm:text-2xl lg:text-[1.8rem] xl:text-3xl 2xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 transition-colors">
                Our Internal Audit & Risk Advisory includes
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto mt-4 rounded-full"></div>
            </motion.div>

            {/* Grid Animated with Stagger */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerStagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {services.map((s) => (
                <motion.div key={s.id} variants={cardVariant}>
                  <Link
                    href={`/services/risk/${s.id}`}
                    className="group relative block p-8 bg-white dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10  rounded-tl-[30px] rounded-br-[30px] shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden h-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-green-500 opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                      {s.title}
                    </h3>
                    <div className="flex items-center text-sm font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-blue-500 to-blue-700 gap-2">
                      View Details{" "}
                      <ArrowRight
                        size={16}
                        className="text-green-600 transform group-hover/link:translate-x-1 transition-transform"
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </div>

      {/* ================= FOOTER SECTION (Distinct Background) ================= */}
      <div className="relative z-30 bg-[#020617] border-t border-white/5">
        <Footer />
      </div>
    </div>
  );
}
