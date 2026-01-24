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
        if (Array.isArray(data)) setBlogs(data.slice(0, 3));
        else setBlogs([]);
      } catch (err) {
        console.error("Failed to fetch blogs:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-slate-50 dark:bg-[#020617] relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none invert dark:invert-0"></div>
        <div className="text-gray-900 dark:text-white relative z-10">
          <Loader text="Loading Insights..." />
        </div>
      </section>
    );
  }

  if (error) return null;

  return (
    // ✅ Updated: Light Mode Background (bg-slate-50), Dark Mode (bg-[#020617])
    <section className="relative w-full py-20 overflow-hidden bg-slate-50 dark:bg-[#020617] transition-colors duration-300">
      
      {/* ================= HERO-STYLE COSMIC BACKGROUND ================= */}
      {/* Stardust: Inverted in light mode */}
      <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none invert dark:invert-0"></div>
      
      {/* Top Glows: Adjusted for light mode visibility */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>
      <div className="absolute top-[-15%] right-[-10%] w-[400px] h-[400px] bg-green-200/40 dark:bg-green-900/15 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>
      
      {/* Bottom Glows */}
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-200/40 dark:bg-blue-900/20 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>
      <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] bg-green-200/40 dark:bg-green-900/15 rounded-full blur-[120px] pointer-events-none transition-colors duration-300"></div>
      
      {/* Cosmic Dots */}
      <div className="absolute top-[15%] right-[20%] w-3 h-3 rounded-full bg-blue-500/80 dark:bg-blue-400/80 blur-[2px] shadow-lg pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-[15%] left-[20%] w-3 h-3 rounded-full bg-blue-500/80 dark:bg-blue-400/80 blur-[2px] shadow-lg pointer-events-none animate-pulse"></div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* Badge: Visible border in light mode */}
          <span className="relative inline-block py-1.5 px-4 rounded-full border border-gray-300 dark:border-white/10 bg-white/60 dark:bg-white/5 overflow-hidden mb-4 shadow-sm">
            <div className="absolute inset-0 animate-shimmer"></div>
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600 dark:from-orange-400 dark:to-green-400 font-bold uppercase text-base tracking-widest">
                Our Blog
            </span>
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-blue-100 dark:to-green-200 transition-colors duration-300">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-600 dark:from-orange-400 dark:to-green-500 animate-pulse">Insights</span> & Updates
          </h2>

          <p className="text-gray-600 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-br dark:from-gray-200 dark:via-blue-100 dark:to-gray-200 text-base md:text-lg leading-relaxed transition-colors duration-300">
            Stay updated with the latest trends in business setup, taxation, and corporate laws in the UAE.
          </p>
        </div>

        {/* --- BLOG GRID / EMPTY STATE --- */}
        {blogs.length === 0 ? (
          <div className="bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-12 text-center shadow-lg flex flex-col items-center justify-center max-w-2xl mx-auto transition-colors duration-300">
              <div className="bg-gray-100 dark:bg-white/10 p-4 rounded-full mb-4 transition-colors">
                  <AlertCircle className="text-gray-500 dark:text-gray-300" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white transition-colors">No Insights Available</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2 transition-colors">We haven't posted any updates yet. Check back soon!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link 
                key={blog._id} 
                href={`/insights/${blog.slug}`} 
                // ✅ Updated Card: Light Mode (bg-white), Dark Mode (bg-white/5)
                className="group relative bg-white dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden hover:shadow-xl dark:hover:bg-white/10 transition-all duration-300 hover:-translate-y-2 flex flex-col h-full shadow-md dark:shadow-none"
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
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center text-gray-500">
                      <span className="text-sm">No Image</span>
                    </div>
                  )}
                  {/* Gradient Overlay: Adjusted for Light Mode */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 dark:from-[#020617] via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-500 dark:text-gray-400 mb-3 uppercase tracking-wider transition-colors">
                      <Calendar size={14} className="text-orange-600 dark:text-orange-500" />
                      {new Date(blog.createdAt).toLocaleDateString()}
                  </div>
                  
                  {/* Title: Dark Text in Light Mode */}
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-green-600 dark:group-hover:from-orange-400 dark:group-hover:to-green-500 transition-all">
                    {blog.title}
                  </h3>
                  
                  {/* Desc: Gray Text in Light Mode */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm line-clamp-3 mb-6 flex-1 transition-colors">
                    {blog.description}
                  </p>
                  
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-green-500 text-white text-xs font-bold tracking-wider shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                        Read Full Article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* --- View All Button --- */}
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