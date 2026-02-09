"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Users, Lightbulb, MessageSquare, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

export default function OurTeamPage() {
  // --- 1. ANIMATION VARIANTS ---
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", damping: 20, stiffness: 100 },
    },
  };

  const floatAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const textFloatAnimation = {
    animate: {
      y: [0, -8, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const strengths = [
    {
      title: "QUALIFIED PROFESSIONALS",
      desc: "Our Team members are qualified professional (Chartered Accountant, ACCA, MBA) having different industries experience and are able to handle your business operation with integrity and efficiency.",
      icon: Users,
    },
    {
      title: "DIVERSIFIED EXPERIENCES",
      desc: "Everyone is unique and will be able to offer experiences and knowledge that others may not possess. A variety of industries specific knowledge can also bring new perspective and a broad range of ideas to the table.",
      icon: Lightbulb,
    },
    {
      title: "GOOD COMMUNICATOR",
      desc: "We communicate openly with our client, sharing our thoughts, opinions, and ideas with the clients; as well as taking into consideration what others have to say. We know that Communication is essential for keeping track of progress and working together efficiently on tasks.",
      icon: MessageSquare,
    },
    {
      title: "TRANSPARENT SERVICE FEE",
      desc: "Our Team provide you high quality services with transparent services fee structure. We always strive to add value to the client business and that too at a lower cost. We believe in long term business relationship with our clients.",
      icon: ShieldCheck,
    },
  ];

  return (
    // ✅ Main Wrapper
    <div className="bg-slate-50 dark:bg-gradient-to-b dark:from-[#09102d] dark:to-[#0F333D] min-h-screen font-sans transition-colors duration-300 relative overflow-hidden">
      {/* ================= STAR BACKGROUND ================= */}
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
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-cyan-400/10 via-transparent to-blue-500/10"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/30 dark:bg-blue-600/25 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-green-400/30 dark:bg-green-600/20 rounded-full blur-[140px] pointer-events-none"></div>

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

      <Navbar forceStatic={true} />

      {/* 2. Spacer Div */}
      <div className="w-full h-16 bg-[#0b2b3f]"></div>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      <div className="relative z-10 w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto px-4 lg:px-8 w-full">
        {/* 2. Introduction Section */}
        <section className="relative w-full pt-20 lg:pt-32 pb-0 overflow-visible">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Text Content */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <motion.div variants={textFloatAnimation} animate="animate">
                <h2 className="text-2xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 leading-tight">
                  Our Team & Associates
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                  We at KSG have a well structured team, with pre-defined roles
                  and responsibilities, and with the required supervision from
                  the seniors/ partners. A structured approach not only aids in
                  delivering services to the satisfaction of clients, but also
                  provides a structured road-map for the professionals.
                </p>
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 rounded-full "></div>
              </motion.div>
            </motion.div>

            {/* Image Content */}
            <motion.div
              className="relative group lg:-mt-12"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              variants={floatAnimation}
              animate="animate"
            >
              <div className="relative rounded-tr-[20px] rounded-bl-[20px] overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Our Team Collaboration"
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* SECTION 1: Team Strengths */}
        <section id="advisors" className="pt-20 pb-20">
          {/* Title Animation */}
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-4">
              Our Team four{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                Prime Strength
              </span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-green-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Staggered Grid Animation */}
          <motion.div
            // ✅ FIXED: Using 'min-[1440px]:gap-24' to push cards 1 & 4 apart and spacing 2 & 3
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 min-[1440px]:gap-20 2xl:gap-32 w-full"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            {strengths.map((item, idx) => (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                // ✅ UPDATED CARD STYLE: 'min-h-[350px]' for taller cards
                className="bg-white/80 dark:bg-white/5 backdrop-blur-md p-4 rounded-3xl transition-all duration-500 relative overflow-hidden group flex flex-col min-h-[300px]"
              >
                {/* Background Blob Effect */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-50 dark:bg-orange-500/10 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Subtle Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-green-50 dark:from-white/5 dark:to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Gradient Icon Background */}
                <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300 flex-shrink-0">
                  <item.icon className="text-white" size={36} />
                </div>

                <h3 className="relative z-10 text-sm font-bold  mb-4 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500 transition-colors">
                  {item.title}
                </h3>

                <p className="relative z-10 text-gray-600 dark:text-gray-300 leading-relaxed text-xs text-center font-medium flex-grow">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </section>
      </div>

      {/* Footer */}
      <div className="relative z-30 bg-[#020617] border-t border-white/5">
        <Footer />
      </div>
    </div>
  );
}
