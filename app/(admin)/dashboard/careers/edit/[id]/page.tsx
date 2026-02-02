"use client";

import { useEffect, useState, use } from "react"; // ✅ Added 'use'
import Link from "next/link";
import { ArrowLeft, CheckCircle, AlertCircle } from "lucide-react"; // ✅ Added icons for Toast
import CareerForm from "@/components/admin/CareerForm";
import Loader from "@/components/ui/Loader";

// ✅ Update Props to expect a Promise
export default function EditCareerPage({ params }: { params: Promise<{ id: string }> }) {
  // ✅ Unwrap the params using React.use()
  const { id } = use(params);

  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Toast State
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" | null }>({ msg: "", type: null });

  // ✅ Helper: Show Toast
  const showToast = (msg: string, type: "success" | "error") => {
    setToast({ msg, type });
    setTimeout(() => setToast({ msg: "", type: null }), 3000);
  };

  useEffect(() => {
    const fetchJob = async () => {
      try {
        // ✅ Use the unwrapped 'id'
        const res = await fetch(`/api/careers/${id}`);
        
        if (!res.ok) throw new Error("Failed to fetch"); // Ensure catch block triggers on non-200

        const data = await res.json();
        setJob(data);
      } catch (error) {
        
        showToast("Failed to load job details", "error");
      } finally {
        setLoading(false);
      }
    };
    
    if (id) {
        fetchJob();
    }
  }, [id]); // ✅ Dependency is now just 'id'

  if (loading) return <div className="text-white text-center py-20"><Loader text="Loading Job Details..." /></div>;
  
  // Note: Since we handle the error with a toast, we might still want to show "Job not found" if data is missing
  if (!job) return (
    <div className="relative">
        {/* Render toast even if job not found so user knows why */}
        {toast.type && (
            <div className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl animate-in slide-in-from-top-5 duration-300 ${
                toast.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}>
                {toast.type === "success" ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
                <div>
                    <h4 className="font-bold text-sm">{toast.type === "success" ? "Success" : "Error"}</h4>
                    <p className="text-sm opacity-90">{toast.msg}</p>
                </div>
            </div>
        )}
        <div className="text-white text-center py-20">Job not found</div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto space-y-6 px-4 md:px-0 py-8 relative">
      
      {/* ✅ ADDED TOAST UI */}
      {toast.type && (
        <div className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl animate-in slide-in-from-top-5 duration-300 ${
            toast.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}>
            {toast.type === "success" ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
            <div>
                <h4 className="font-bold text-sm">{toast.type === "success" ? "Success" : "Error"}</h4>
                <p className="text-sm opacity-90">{toast.msg}</p>
            </div>
        </div>
      )}

      {/* --- HEADER --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-white">Edit Job Post</h1>

        <Link 
          href="/dashboard/careers" 
          className="flex items-center justify-center sm:justify-start gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-105 w-full sm:w-auto"
        >
          <ArrowLeft size={20} />
          <span>Back to Careers</span>
        </Link>
      </div>

      {/* --- FORM (Edit Mode) --- */}
      <CareerForm initialData={job} isEdit={true} />
    </div>
  );
}