"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, Calendar, User } from "lucide-react";
import Loader from "@/components/ui/Loader";

export default function InquiriesPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const res = await fetch("/api/contact");
        const data = await res.json();
        setLeads(data);
      } catch (error) {
        console.error("Error fetching leads:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchLeads();
  }, []);

  return (
    // Updated: Added px-4
    <div className="space-y-8 max-w-7xl mx-auto px-4 md:px-0">
      <h1 className="text-3xl font-bold text-white">Inquiries & Leads</h1>

      {loading ? (
        <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
            <Loader text="Loading Inquiries..." />
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          {/* Updated: Added wrapper for scroll */}
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[700px]">
                <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                    <th className="p-4 font-semibold text-gray-600">Client Name</th>
                    <th className="p-4 font-semibold text-gray-600">Contact Info</th>
                    <th className="p-4 font-semibold text-gray-600">Service Interest</th>
                    <th className="p-4 font-semibold text-gray-600">Message</th>
                    <th className="p-4 font-semibold text-gray-600">Date</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                {leads.length === 0 ? (
                    <tr><td colSpan={5} className="p-8 text-center text-gray-500">No inquiries yet.</td></tr>
                ) : (
                    leads.map((lead) => (
                    <tr key={lead._id} className="hover:bg-blue-50/50 transition duration-200">
                        <td className="p-4">
                        <div className="flex items-center gap-2 font-medium text-gray-800">
                            <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-bold"><User size={14} /></div>
                            {lead.name}
                        </div>
                        </td>
                        <td className="p-4">
                        <div className="text-sm space-y-1">
                            <div className="flex items-center gap-2 text-gray-600"><Mail size={12} /> {lead.email}</div>
                            <div className="flex items-center gap-2 text-gray-600"><Phone size={12} /> {lead.phone}</div>
                        </div>
                        </td>
                        <td className="p-4"><span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-xs font-bold">{lead.service}</span></td>
                        <td className="p-4 text-sm text-gray-600 max-w-xs truncate">{lead.message}</td>
                        <td className="p-4 text-xs text-gray-400"><div className="flex items-center gap-1"><Calendar size={12} />{new Date(lead.createdAt).toLocaleDateString()}</div></td>
                    </tr>
                    ))
                )}
                </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}