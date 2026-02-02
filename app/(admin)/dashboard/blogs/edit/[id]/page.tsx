"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, AlertCircle, CheckCircle } from "lucide-react"; // ✅ Added Icons for Toast
import BlogForm from "@/components/admin/BlogForm";
import Loader from "@/components/ui/Loader";

export default function EditBlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ Toast State
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" | null }>({ msg: "", type: null });

  // ✅ Helper: Show Toast
  const showToast = (msg: string, type: "success" | "error") => {
    setToast({ msg, type });
    setTimeout(() => setToast({ msg: "", type: null }), 3000);
  };

  // --- Fetch Blog Data by ID ---
  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) return;
      try {
        const res = await fetch(`/api/blogs/${id}`);
        if (res.ok) {
          const data = await res.json();
          setBlog(data);
        } else {
          showToast("Blog not found!", "error"); // 
        }
      } catch (error) {
        showToast("Failed to load blog details.", "error"); // ✅
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) return <Loader fullScreen text="Loading Insight Details..." />;

  return (
    // Same Styling as Create Page
    <div className="max-w-7xl mx-auto space-y-6 px-4 md:px-0">
      
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

      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        
        {/* Left: Heading */}
        <h1 className="text-3xl font-bold text-white">Edit Insight</h1>

        {/* Right: Back Button (Blue-Green Gradient) */}
        <Link 
          href="/dashboard/blogs" 
          className="flex items-center justify-center sm:justify-start gap-2 px-6 py-3rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all transform hover:scale-105 w-full sm:w-auto"
        >
          <ArrowLeft size={20} />
          <span>Back to Blogs</span>
        </Link>
      </div>

      {/* --- FORM COMPONENT (With Data) --- */}
      {blog && <BlogForm initialData={blog} isEditing={true} />}
    </div>
  );
}