"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactHeader from "@/components/ui/ContactHeader"; 
import { MapPin, Phone, Mail, Clock, Send, ArrowRight, ExternalLink } from "lucide-react";

export default function ContactPage() {
  
  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Location",
      // ✅ Updated Address
      details: ["Al Jawhara Building", "EMR 22 - Al Mankhool - Dubai - UAE"], 
      color: "text-blue-500",
      bg: "bg-blue-50"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+971 4 355 8880", "+971 50 123 4567"], 
      color: "text-green-500",
      bg: "bg-green-50"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@ksgcorps.com", "support@ksgcorps.com"],
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 AM - 6:00 PM", "Sat - Sun: Closed"],
      color: "text-purple-500",
      bg: "bg-purple-50"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      <Navbar/>
      
      <ContactHeader 
        title={
            <span className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-0">
                Contact Us
            </span>
        }
        breadcrumb="Home / Contact"
        image=""
      />

      {/* ================= 1. GET IN TOUCH (TOP SECTION) ================= */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* LEFT COLUMN: Contact Info */}
            <div className="lg:col-span-2 space-y-12">
                <div>
                    <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent font-bold uppercase tracking-widest text-sm">Get In Touch</span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-6 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                        Have questions? Let's discuss your business needs.
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed">
                        Whether you are looking to set up a new business in the UAE, need assistance with accounting and auditing, or require legal advisory, our expert team is here to help.
                    </p>
                </div>

                {/* Info Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {contactInfo.map((item, idx) => (
                        <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                            <div className={`w-12 h-12 ${item.bg} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                <item.icon className={item.color} size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-[#041D2D] mb-2">{item.title}</h3>
                            <div className="space-y-1">
                                {item.details.map((line, i) => (
                                    <p key={i} className="text-gray-500 text-sm font-medium">{line}</p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* RIGHT COLUMN: Form */}
            <div className="lg:col-span-1">
                <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-100 to-transparent rounded-bl-full -mr-10 -mt-10"></div>
                    <h3 className="text-2xl font-bold text-[#041D2D] mb-6 relative z-10">Send us a Message</h3>
                    <form className="space-y-5 relative z-10">
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                            <input type="text" placeholder="Andy Jassy" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-gray-900" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                            <input type="email" placeholder="andy@example.com" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-gray-900" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
                            <input type="tel" placeholder="+971 50 000 0000" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-gray-900" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Subject</label>
                            <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all text-gray-900">
                                <option>General Inquiry</option>
                                <option>Business Setup</option>
                                <option>Accounting & Audit</option>
                                <option>Tax Services</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                            <textarea rows={4} placeholder="How can we help you?" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none transition-all resize-none text-gray-900"></textarea>
                        </div>
                        <button className="w-full py-4 rounded-xl bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold uppercase tracking-wider shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>

        </div>
      </section>

      {/* ================= 2. CTA SECTION (MOVED BELOW FORM) ================= */}
      <section className="py-12 bg-[#041D2D]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
            <div>
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Ready to grow your business?</h2>
                <p className="text-gray-400">Contact us today for a free consultation with our experts.</p>
            </div>
            <a href="tel:+97143558880" className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-white text-[#041D2D] font-bold hover:bg-gray-100 transition-colors">
                Call Now <ArrowRight size={18} />
            </a>
        </div>
      </section>

      {/* ================= 3. MAP SECTION (SINGLE CARD) ================= */}
      <section className="max-w-7xl mx-auto px-6 py-20 relative z-20">
        <h2 className="text-3xl font-bold text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-12">Visit Our Office</h2>
        
        {/* ✅ Single Card Centered */}
        <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden flex flex-col md:flex-row h-full min-h-[350px]">
                
                {/* Address Details */}
                <div className="p-8 md:p-12 flex-1 flex flex-col justify-center">
                    <div className="w-14 h-14 bg-[#041D2D] rounded-full flex items-center justify-center mb-6 text-white shadow-md">
                        <MapPin size={28} />
                    </div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-3">Dubai Office</h3>
                    <p className="text-gray-600 text-base leading-relaxed mb-6 font-medium">
                        Al Jawhara Building, <br/>
                        EMR 22 - Al Mankhool,<br/>
                        Dubai - United Arab Emirates
                    </p>
                    <a href="https://www.google.com/maps/search/Al+Jawhara+Building+EMR+22+Al+Mankhool+Dubai" target="_blank" className="text-blue-500 text-sm font-bold hover:underline flex items-center gap-2 mt-auto">
                        View larger map <ExternalLink size={14}/>
                    </a>
                </div>

                {/* Map Iframe */}
                <div className="h-64 md:h-auto md:w-1/2 bg-gray-200 relative">
                     <iframe 
                        src="https://maps.google.com/maps?q=Al+Jawhara+Building+EMR+22+Al+Mankhool+Dubai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen={true} 
                        loading="lazy" 
                        className="grayscale hover:grayscale-0 transition-all duration-500 absolute inset-0"
                    ></iframe>
                </div>
            </div>
        </div>
      </section>

      <Footer/>
    
    </div>
  );
}