"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogForm from "@/components/admin/BlogForm";
import Loader from "@/components/ui/Loader";

export default function EditBlogPage() {
  const { id } = useParams(); // URL से ID ले रहा है
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

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
          alert("Blog not found!");
        }
      } catch (error) {
        console.error("Error fetching blog:", error);
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
      
      {/* --- HEADER SECTION --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        
        {/* Left: Heading */}
        <h1 className="text-3xl font-bold text-white">Edit Insight</h1>

        {/* Right: Back Button (Blue-Green Gradient) */}
        <Link 
          href="/dashboard/blogs" 
          className="flex items-center justify-center sm:justify-start gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-105 w-full sm:w-auto"
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