"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Save, Briefcase, MapPin, Loader2 } from "lucide-react";

interface CareerFormProps {
  initialData?: any; 
  isEdit?: boolean;
}

export default function CareerForm({ initialData, isEdit = false }: CareerFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    location: initialData?.location || "",
    type: initialData?.type || "Full-time",
    description: initialData?.description || "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const url = isEdit ? `/api/careers/${initialData._id}` : "/api/careers";
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        // ✅ Updated: Redirect with success param to show toast on list page
        const successType = isEdit ? "updated" : "created";
        router.push(`/dashboard/careers?success=${successType}`); 
        router.refresh();
      } else {
        alert("Something went wrong");
      }
    } catch (error) {
    
      alert("Something went wrong"); // Fallback alert for fetch errors if not handled by list page toast
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Title */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Job Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="e.g. Senior Accountant"
            className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 font-medium transition"
            required
          />
        </div>

        {/* Location & Type */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Location</label>
            <div className="relative">
                <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Dubai, UAE"
                    className="w-full pl-12 pr-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 font-medium transition"
                    required
                />
                <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20}/>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Job Type</label>
            <div className="relative">
                <select
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full pl-12 pr-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 font-medium appearance-none cursor-pointer"
                >
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Contract">Contract</option>
                    <option value="Internship">Internship</option>
                </select>
                <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20}/>
            </div>
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-2">Job Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Write detailed job requirements..."
            rows={8}
            className="w-full px-5 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 outline-none text-gray-900 font-medium leading-relaxed resize-y"
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
            <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all transform hover:scale-[1.01] disabled:opacity-70 flex justify-center items-center gap-2"
            >
            {loading ? <Loader2 className="animate-spin" /> : <><Save size={20} /> {isEdit ? "Update Job Post" : "Publish Job Post"}</>}
            </button>
        </div>

      </form>
    </div>
  );
}