"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Business Setup",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", service: "Business Setup", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-12">
      
      {/* Header */}
      <div className="text-center mb-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#041D2D] mb-4">Contact Us</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Get in touch with our expert consultants for tailored corporate solutions.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Contact Info Card */}
        <div className="bg-[#041D2D] text-white p-10 rounded-2xl shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="text-gray-300 mb-8">
              Fill out the form and our team will get back to you within 24 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="text-orange-500 mt-1" />
                <span>Office 705, Suit 7, AL Jawhara Building<br/>(Habib Bank AG Zurich), Bank Street,<br/>Bur Dubai, Dubai, PO Box 44413</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-orange-500" />
                <span>+971 561657158</span>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-orange-500" />
                <span>info@ksgcorps.com</span>
              </div>
            </div>
          </div>

          <div className="mt-12">
            <div className="w-24 h-1 bg-orange-500 rounded-full mb-4"></div>
            <p className="text-sm text-gray-400">KSG Corporate Services</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-10 rounded-2xl shadow-lg border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-semibold text-gray-700">Full Name</label>
                <input 
                  name="name" value={formData.name} onChange={handleChange} required
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#041D2D] outline-none" 
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Phone Number</label>
                <input 
                  name="phone" value={formData.phone} onChange={handleChange} required
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#041D2D] outline-none" 
                  placeholder="+971 ..."
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="text-sm font-semibold text-gray-700">Email Address</label>
                <input 
                  type="email" name="email" value={formData.email} onChange={handleChange} required
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#041D2D] outline-none" 
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="text-sm font-semibold text-gray-700">Service Required</label>
                <select 
                  name="service" value={formData.service} onChange={handleChange}
                  className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#041D2D] outline-none bg-white"
                >
                  <option>Business Setup</option>
                  <option>Accounting & Tax</option>
                  <option>Audit Services</option>
                  <option>Visa Services</option>
                  <option>Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-sm font-semibold text-gray-700">Message</label>
              <textarea 
                name="message" rows={4} value={formData.message} onChange={handleChange} required
                className="w-full mt-2 p-3 border rounded-lg focus:ring-2 focus:ring-[#041D2D] outline-none" 
                placeholder="How can we help you?"
              />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              {loading ? "Sending..." : <>Send Message <Send size={18} /></>}
            </button>

            {status === "success" && (
              <p className="text-green-600 text-center font-medium bg-green-50 p-3 rounded-lg">
                ✅ Message sent successfully! We will contact you shortly.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center font-medium bg-red-50 p-3 rounded-lg">
                ❌ Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}