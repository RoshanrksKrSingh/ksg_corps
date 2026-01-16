"use client";

import { CheckCircle2, Eye, Rocket, Gem } from "lucide-react";

const AboutUs = () => {
  return (
    <section className="relative w-full min-h-[85vh] flex items-center overflow-hidden bg-[#041D2D] py-20">
      
      {/* =========================================
          1. BACKGROUND LAYERS
      ========================================= */}
      
      {/* Layer 1: Background Image */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: `url('https://cdn-becae.nitrocdn.com/OcwjylvgvBbNRDjYtTmGOXeUgIvOimBD/assets/images/optimized/rev-47b5ce8/www.aaconsultancy.ae/wp-content/uploads/2025/04/General-Header-BG.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Layer 2: Dark Blue Overlay */}
      <div className="absolute inset-0 bg-[#041D2D]/90 z-0"></div>

      {/* Layer 3: Geometric Green Accents */}
      <div className="absolute top-0 right-0 w-1/3 h-full border-l border-green-500/20 hidden lg:block transform -skew-x-12 z-0"></div>
      <div className="absolute bottom-0 left-20 w-32 h-32 border-2 border-green-500/30 rounded-full blur-xl z-0"></div>

      {/* =========================================
          2. MAIN CONTENT GRID
      ========================================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 w-full">
        
        {/* --- TOP SECTION: ABOUT TEXT + IMAGE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          
          {/* LEFT SIDE: TEXT CONTENT */}
          <div className="space-y-8">
            
            {/* Heading Section */}
            <div className="space-y-4">
              <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 font-bold uppercase text-base md:text-lg tracking-widest">
                  About Us
                </span>
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold leading-tight text-white">
                We help organizations to <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">globalize</span> their business
              </h2>
            </div>

            {/* Content Paragraphs */}
            <div className="space-y-6 leading-relaxed text-base md:text-lg text-justify">
              <p className="text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-green-200">
                <strong className="text-white">KSG Corporate Services</strong> is a corporate consulting firm formed with the objective of providing an unparalleled broad range of corporate advisory services including 
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-green-300"> Tax Advisory</span>, 
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-green-300"> Accounting</span>, and 
                <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-green-300"> Risk Advisory Services</span> 
                across the GCC region with an emphasis on client-focused, business-centric solutions.
              </p>
              
              <p className="text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-green-200">
                We provide tailor-made solutions to our clients with a commitment to the highest technical standards and integrity. We always ensure that our clients receive the most accurate and relevant advice at a most competitive cost and exceptional quality with an intention to make a value addition to the client’s business.
              </p>

              {/* Presence Section */}
              <div className="flex items-center gap-2 text-sm font-semibold text-blue-200 mb-10">
                <CheckCircle2 className="text-green-500" size={18} />
                <span>Presence in UAE & India (Associated)</span>
              </div>
            </div>

            {/* ❌ BUTTONS REMOVED (Old Code Preserved as Comment) */}
            {/* <div className="flex flex-wrap gap-4 pt-4">
              <Link href="/contact">
                <button className="px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white font-bold tracking-wide shadow-lg shadow-green-900/20 transition-all transform hover:-translate-y-1">
                  Free Consultation
                </button>
              </Link>
              <Link href="/services">
                <button className="px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/10 text-white font-semibold tracking-wide transition-all flex items-center gap-2 group">
                  Our Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform"/>
                </button>
              </Link>
            </div> 
            */}

          </div>

          {/* RIGHT SIDE: TEAM IMAGE */}
          <div className="relative h-full flex items-center justify-center lg:justify-end mt-10 lg:mt-0">
            <div className="absolute bottom-0 right-10 w-3/4 h-3/4 bg-blue-500/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <img 
              src="https://images.pexels.com/photos/1367276/pexels-photo-1367276.jpeg" 
              alt="KSG Leadership Team" 
              className="relative z-10 w-full h-auto max-h-[600px] object-contain rounded-3xl hover:scale-[1.02] transition-transform duration-700"
            />
          </div>

        </div>

        {/* --- BOTTOM SECTION: VISION, MISSION, VALUES --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* 1. VISION CARD */}
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Eye size={100} className="text-white" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-orange-500/20 group-hover:scale-110 transition-transform">
                    <Eye className="text-white" size={32} />
                </div>
                
                {/* ✅ UPDATED: Permanent Gradient Heading */}
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">KSG Vision</h3>
                
                {/* ✅ UPDATED: Permanent Gradient Paragraph */}
                <p className="text-sm leading-relaxed text-justify text-transparent bg-clip-text bg-gradient-to-br from-white via-orange-100 to-red-200">
                    Our vision is to create an exceptional client-centric organisation to provide single window corporate advisory services with cost-effective solution while upholding exceptional quality and integrity.
                </p>
            </div>

            {/* 2. MISSION CARD */}
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Rocket size={100} className="text-white" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <Rocket className="text-white" size={32} />
                </div>
                
                {/* ✅ UPDATED: Permanent Gradient Heading */}
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">KSG Mission</h3>
                
                {/* ✅ UPDATED: Permanent Gradient Paragraph */}
                <p className="text-sm leading-relaxed text-justify text-transparent bg-clip-text bg-gradient-to-br from-white via-blue-100 to-cyan-200">
                    We are dedicated to delivering effective and efficient corporate advisory services with integrity and accountability that delights our clients.
                </p>
            </div>

            {/* 3. VALUES CARD */}
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Gem size={100} className="text-white" />
                </div>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-green-500/20 group-hover:scale-110 transition-transform">
                    <Gem className="text-white" size={32} />
                </div>
                
                {/* ✅ UPDATED: Permanent Gradient Heading */}
                <h3 className="text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">KSG Values</h3>
                
                {/* ✅ UPDATED: Permanent Gradient Paragraph */}
                <p className="text-sm leading-relaxed text-justify text-transparent bg-clip-text bg-gradient-to-br from-white via-green-100 to-emerald-200">
                    We are responsible, accountable, efficient and effective corporate advisor. We promote honesty, integrity and quality in all we do. We encourage innovation to meet the challenges.
                </p>
            </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;