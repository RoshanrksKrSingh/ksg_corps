"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogForm from "@/components/admin/BlogForm";

export default function CreateBlogPage() {
  return (
    // Updated: Added px-4 for mobile edge spacing
    <div className="max-w-7xl mx-auto space-y-6 px-4 md:px-0">
      
      {/* --- HEADER SECTION (Responsive) --- */}
      {/* Updated: flex-col for mobile, sm:flex-row for desktop */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        
        {/* Left: Heading */}
        <h1 className="text-3xl font-bold text-white">Create New Insight</h1>

        {/* Right: Back Button */}
        <Link 
          href="/dashboard/blogs" 
          // Updated: w-full sm:w-auto added for full width button on mobile
          className="flex items-center justify-center sm:justify-start gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-105 w-full sm:w-auto"
        >
          <ArrowLeft size={20} />
          <span>Back to Blogs</span>
        </Link>
      </div>

      {/* Form Component */}
      <BlogForm />
    </div>
  );
}