"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Users, Lightbulb, MessageSquare, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion"; 

export default function OurTeamPage() {
  
  // --- 1. ANIMATION VARIANTS (UPDATED to match VisionMission) ---

  // Fade Up Entry Animation (For text/headers)
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  // Stagger Effect for Grid
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Slightly slower stagger for pop effect
      }
    }
  };

  // ✅ NEW: Card Entrance Animation (Pop Up - Same as VisionMission)
  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring",
        damping: 20,
        stiffness: 100
      } 
    },
  };

  // Continuous Floating for Image (Slower)
  const floatAnimation = {
    animate: {
      y: [0, -15, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  // Continuous Floating for Text
  const textFloatAnimation = {
    animate: {
      y: [0, -8, 0], 
      transition: {
        duration: 5, 
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut",
      },
    },
  };

  // Continuous Background Blob Movement
  const blobAnimation = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 90, 0],
      opacity: [0.3, 0.5, 0.3],
      transition: {
        duration: 15,
        repeat: Infinity,
        ease: "linear",
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
    <div className="bg-gray-50 min-h-screen font-sans relative overflow-hidden">
      
      {/* ✅ MOVING BACKGROUND BLOB */}
      <motion.div 
        variants={blobAnimation}
        animate="animate"
        className="fixed top-20 left-0 w-[800px] h-[800px] bg-gradient-to-r from-orange-100/40 to-green-100/40 rounded-full blur-[100px] -z-10 pointer-events-none"
      />

      <Navbar forceStatic={true} />
                  
      {/* 2. Spacer Div */}
      <div className="w-full h-20 bg-[#0b2b3f] rounded-2xl"></div>

      {/* 2. Introduction Section */}
      <section className="relative w-full pt-37 pb-0 overflow-hidden">
        <div className="relative z-10 max-w-7xl mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"> 
              
              {/* Text Content */}
              <motion.div 
                className="-mt-22 lg:-mt-24" 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }} 
                variants={fadeInUp}
              >
                  <motion.div 
                    variants={textFloatAnimation} 
                    animate="animate"
                  >
                      <h2 className="text-2xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500 leading-tight">
                         Our Team & Associates
                      </h2>
                      <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        We at KSG have a well structured team, with pre-defined roles and responsibilities, and with the required supervision from the seniors/ partners. A structured approach not only aids in delivering services to the satisfaction of clients, but also provides a structured road-map for the professionals.
                      </p>
                      <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-green-500 rounded-full "></div>
                  </motion.div>
              </motion.div>

              {/* Image Content with Floating Animation */}
              <motion.div 
                className="relative group -mt-12 lg:-mt-24" 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                variants={floatAnimation} 
                animate="animate"
              >
                  <div className="relative rounded-3xl overflow-hidden border-4 border-white">
                     <img 
                        src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                        alt="Our Team Collaboration" 
                        className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-1000" 
                     />
                  </div>
              </motion.div>

           </div>
        </div>
      </section>

      {/* SECTION 1: Team Strengths (With Vision/Mission Card Animation) */}
      <section id="advisors" className="pt-10 pb-20 px-6 max-w-7xl mx-auto">
        
        {/* Title Animation */}
        <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }} 
            variants={fadeInUp}
        >
            <h2 className="text-3xl md:text-4xl font-bold text-[#041D2D] mb-4">
              Our Team four <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">Prime Strength</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-orange-500 to-green-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Staggered Grid Animation with Pop-Up Effect */}
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }} 
        >
           {strengths.map((item, idx) => (
             <motion.div 
                key={idx} 
                variants={cardVariants} // ✅ Changed to cardVariants (Pop Up)
                whileHover={{ y: -10, scale: 1.02 }} // ✅ Added Hover Effect (Lift Up)
                className="bg-white p-6 rounded-3xl border border-gray-100 shadow-md hover:shadow-orange-500/20 transition-all duration-500 relative overflow-hidden group"
             >
                {/* Background Blob Effect (Subtle) */}
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-orange-50 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Subtle Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Gradient Icon Background */}
                <div className="relative z-10 w-14 h-14 bg-gradient-to-br from-orange-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 mx-auto md:mx-0 shadow-lg group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300">
                   <item.icon className="text-white" size={32} />
                </div>
                
                <h3 className="relative z-10 text-sm font-bold text-[#041D2D] mb-3 text-center md:text-left group-hover:text-green-600 transition-colors">
                  {item.title}
                </h3>
                
                <p className="relative z-10 text-gray-600 leading-relaxed text-xs text-center md:text-left font-medium">
                    {item.desc}
                </p>
             </motion.div>
           ))}
        </motion.div>
      </section>

      <div className="rounded-2xl overflow-hidden">
        <Footer/>
      </div>
    </div>
  );
}