"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useSearchParams, useRouter } from "next/navigation"; // ✅ Added Hooks
import { Plus, Trash, Edit, AlertCircle, CheckCircle, AlertTriangle, MapPin, Briefcase } from "lucide-react";
import Loader from "@/components/ui/Loader";

export default function AdminCareersPage() {
  const [jobs, setJobs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" | null }>({ msg: "", type: null });
  const [deleteId, setDeleteId] = useState<string | null>(null); 

  const searchParams = useSearchParams();
  const router = useRouter();

  // Helper: Toast
  const showToast = (msg: string, type: "success" | "error") => {
    setToast({ msg, type });
    setTimeout(() => setToast({ msg: "", type: null }), 3000);
  };

  // ✅ Check for Redirect Success Messages
  useEffect(() => {
    const success = searchParams.get("success");
    if (success === "updated") {
      showToast("Job updated successfully!", "success");
      router.replace("/dashboard/careers");
    } else if (success === "created") {
      showToast("Job posted successfully!", "success");
      router.replace("/dashboard/careers");
    }
  }, [searchParams, router]);

  // Fetch Jobs
  const fetchJobs = async () => {
    try {
      const res = await fetch("/api/careers");
      if (!res.ok) throw new Error("Failed to fetch");
      const data = await res.json();
      setJobs(Array.isArray(data) ? data : []);
    } catch (error) {
     
      showToast("Failed to load jobs", "error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  // Delete Logic
  const executeDelete = async () => {
    if (!deleteId) return;
    try {
        const res = await fetch(`/api/careers/${deleteId}`, { method: "DELETE" });
        if (res.ok) {
            setJobs(jobs.filter((job) => job._id !== deleteId));
            showToast("Job deleted successfully!", "success");
        } else {
            showToast("Failed to delete job", "error");
        }
    } catch (error) {
        showToast("Server error while deleting", "error");
    } finally {
        setDeleteId(null);
    }
  };

  return (
    <div className="relative space-y-8 max-w-7xl mx-auto px-4 md:px-0">
      
      {/* --- TOAST --- */}
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

      {/* --- DELETE MODAL --- */}
      {deleteId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl p-6 md:p-8 w-[90%] max-w-sm shadow-2xl animate-in zoom-in-95 duration-200">
                <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-red-100 text-red-500 rounded-full flex items-center justify-center mb-4">
                        <AlertTriangle size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">Delete Job?</h3>
                    <p className="text-gray-500 mb-6 text-sm">
                        Are you sure you want to delete this job post? This action cannot be undone.
                    </p>
                    <div className="flex gap-3 w-full">
                        <button onClick={() => setDeleteId(null)} className="flex-1 py-3 bg-gray-100 text-gray-700 font-bold rounded-xl hover:bg-gray-200 transition">Cancel</button>
                        <button onClick={executeDelete} className="flex-1 py-3 rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition">Yes, Delete</button>
                    </div>
                </div>
            </div>
        </div>
      )}

      {/* --- HEADER --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-white">Manage Careers</h1>
        <Link 
          href="/dashboard/careers/create" 
          className="flex items-center gap-2 px-6 py-3 rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all transform hover:scale-105 w-full sm:w-auto justify-center sm:justify-start"
        >
          <Plus size={20} /> Post New Job
        </Link>
      </div>

      {/* --- TABLE CONTENT --- */}
      {loading ? (
        <div className="bg-white/5 rounded-2xl p-12 backdrop-blur-sm border border-white/10">
            <Loader text="Loading Jobs..." />
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left min-w-[600px]">
                <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                    <th className="p-5 font-bold text-gray-600">Job Title</th>
                    <th className="p-5 font-bold text-gray-600">Location</th>
                    <th className="p-5 font-bold text-gray-600">Type</th>
                    <th className="p-5 font-bold text-gray-600 text-right">Actions</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                {jobs.length === 0 ? (
                    <tr><td colSpan={4} className="p-8 text-center text-gray-500">No jobs found.</td></tr>
                ) : (
                    jobs.map((job) => (
                    <tr key={job._id} className="hover:bg-blue-50/50 transition duration-200">
                        <td className="p-5 font-bold text-gray-800">{job.title}</td>
                        <td className="p-5 text-gray-600 text-sm">
                            <span className="flex items-center gap-1"><MapPin size={14} className="text-orange-500"/> {job.location}</span>
                        </td>
                        <td className="p-5 text-gray-600 text-sm">
                            <span className="flex items-center gap-1"><Briefcase size={14} className="text-green-500"/> {job.type}</span>
                        </td>
                        <td className="p-5 flex justify-end gap-2">
                            <Link href={`/dashboard/careers/edit/${job._id}`} className="p-2 text-orange-500 hover:bg-orange-100 rounded-lg transition"><Edit size={20} /></Link>
                            <button onClick={() => setDeleteId(job._id)} className="p-2 text-red-400 hover:bg-red-100 rounded-lg transition"><Trash size={20} /></button>
                        </td>
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