"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Calendar, AlertCircle } from "lucide-react";
import Loader from "@/components/ui/Loader"; 

export default function LatestInsights() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("/api/blogs");
        if (!res.ok) throw new Error("Failed to fetch");
        
        const data = await res.json();
        
        if (Array.isArray(data)) {
            setBlogs(data.slice(0, 3));
        } else {
            setBlogs([]);
        }
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogs();
  }, []);

  // 1. Loading State (Dark Mode Text)
  if (loading) {
    return (
        <section className="py-20 bg-[#041D2D]">
            <div className="text-white">
                <Loader text="Loading Insights..." />
            </div>
        </section>
    );
  }

  // 2. Error State
  if (error) return null; 

  // 3. Main Content
  return (
    <section className="relative w-full py-20 bg-[#041D2D] overflow-hidden">
      
      {/* --- Background Elements --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 right-[-100px] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 left-[-100px] w-96 h-96 bg-green-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 font-bold uppercase text-base tracking-widest">
                Our Blog
              </span>
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-green-200">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-500">Insights</span> & Updates
          </h2>

          <p className="text-transparent bg-clip-text bg-gradient-to-br from-gray-200 via-blue-100 to-gray-200 text-base md:text-lg leading-relaxed">
            Stay updated with the latest trends in business setup, taxation, and corporate laws in the UAE.
          </p>
        </div>

        {/* --- CONDITIONAL RENDERING --- */}
        {blogs.length === 0 ? (
            
            // EMPTY STATE
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-12 text-center shadow-lg flex flex-col items-center justify-center max-w-2xl mx-auto">
                <div className="bg-white/10 p-4 rounded-full mb-4">
                    <AlertCircle className="text-gray-300" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white">No Insights Available</h3>
                <p className="text-gray-400 mt-2">We haven't posted any updates yet. Check back soon!</p>
            </div>

        ) : (

            // BLOG GRID
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
                <Link 
                    key={blog._id} 
                    href={`/insights/${blog.slug}`} 
                    className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
                >
                {/* Image Container */}
                <div className="h-52 overflow-hidden relative">
                    {blog.thumbnail ? (
                        <img 
                        src={blog.thumbnail} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                        />
                    ) : (
                        <div className="w-full h-full bg-gray-800 flex items-center justify-center text-gray-500">
                            <span className="text-sm">No Image</span>
                        </div>
                    )}
                    
                    {/* Overlay Gradient on Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#041D2D] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Content Container */}
                <div className="p-6 flex flex-col flex-1">
                    
                    {/* ✅ UPDATED: Date Moved Here (Below Image) */}
                    <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
                        <Calendar size={14} className="text-orange-500" />
                        {new Date(blog.createdAt).toLocaleDateString()}
                    </div>

                    <h3 className="text-lg md:text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-green-500 transition-all">
                    {blog.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-1">
                    {blog.description}
                    </p>
                    
                    {/* ✅ UPDATED BUTTON: Orange-Green Gradient Background */}
                    <div className="mt-auto">
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-green-500 text-white text-xs font-bold  tracking-wider shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                            Read Full Article <ArrowRight size={14} />
                        </span>
                    </div>
                </div>
                </Link>
            ))}
            </div>

        )}

        {/* View All Button (Centered at bottom) */}
        {blogs.length > 0 && (
            <div className="mt-16 text-center">
                <Link 
                    href="/insights" 
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-orange-500 to-green-500 text-white font-bold hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all duration-300 transform hover:scale-105"
                >
                    View All Insights <ArrowRight size={18} />
                </Link>
            </div>
        )}

      </div>
    </section>
  );
}