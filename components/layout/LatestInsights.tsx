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
      <section className="py-20 bg-slate-50 dark:bg-[#151B33] relative overflow-hidden transition-colors duration-300">
        <div className="absolute inset-0 z-0 opacity-30 dark:opacity-50 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] pointer-events-none invert dark:invert-0"></div>
        <div className="text-gray-900 dark:text-white relative z-10">
          <Loader text="Loading Insights..." />
        </div>
      </section>
    );
  }

  if (error) return null;

  return (
    // ✅ Updated BG: Matches AboutUs Background (Dark Blue -> Teal)
    <section className="relative w-full py-10 overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#09102d] dark:to-[#0F333D] transition-colors duration-300">
      
      {/* ================= STAR BACKGROUND (From AboutUs) ================= */}
      {/* Deep Stars */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-80 dark:opacity-100 mix-blend-screen"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
          backgroundSize: "280px 280px",
          filter: "brightness(1.8) saturate(1.5)",
        }}
      />

      {/* Mid Stars */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-70 dark:opacity-90 mix-blend-screen animate-stars-slow"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/tiny-stars.png')",
          backgroundSize: "180px 180px",
          filter: "brightness(2) saturate(1.6)",
        }}
      />

      {/* Near Stars */}
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-80 mix-blend-screen animate-stars-fast"
        style={{
          backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')",
          backgroundSize: "120px 120px",
          filter: "brightness(2.2) saturate(1.8)",
        }}
      />

      {/* Soft Star Color Tint */}
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-cyan-400/10 via-transparent to-blue-500/10"></div>

      {/* Glow Nebula */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/30 dark:bg-blue-600/25 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-green-400/30 dark:bg-green-600/20 rounded-full blur-[140px] pointer-events-none"></div>

      {/* ================= ANIMATIONS ================= */}
      <style jsx>{`
        @keyframes starsSlow {
          from { transform: translateY(0px); }
          to { transform: translateY(-200px); }
        }
        @keyframes starsFast {
          from { transform: translateY(0px); }
          to { transform: translateY(-400px); }
        }
        .animate-stars-slow {
          animation: starsSlow 120s linear infinite;
        }
        .animate-stars-fast {
          animation: starsFast 60s linear infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer { 
          background: linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0) 100%);
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }
      `}</style>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto px-4 lg:px-8">
        
        {/* --- SECTION HEADER --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          {/* Badge: Visible border in light mode */}
          <span className="relative inline-block py-1.5 px-4 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none border border-gray-300 dark:border-white/10 bg-white/60 dark:bg-white/5 overflow-hidden mb-4 shadow-sm">
            <div className="absolute inset-0 animate-shimmer"></div>
            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 font-bold uppercase text-base tracking-widest">
                Our Blog
            </span>
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-transparent dark:bg-clip-text dark:bg-gradient-to-r dark:from-white dark:via-blue-100 dark:to-green-200 transition-colors duration-300">
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 animate-pulse">Insights</span> & Updates
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {blogs.map((blog) => (
              <div key={blog._id} className="w-full max-w-[380px] h-full"> 
                <Link 
                  href={`/insights/${blog.slug}`} 
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
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-tl-[20px] rounded-br-[20px] rounded-tr-none rounded-bl-none bg-gradient-to-r from-green-400 to-blue-500 text-white text-xs font-bold tracking-wider shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                          Read Full Article <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        )}

        {/* --- View All Button --- */}
        {blogs.length > 0 && (
          <div className="mt-16 text-center">
            <Link 
              href="/insights" 
              className="inline-flex items-center gap-2 px-8 py-3 rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all duration-300 transform hover:scale-105"
            >
              View All Insights <ArrowRight size={18} />
            </Link>
          </div>
        )}

      </div>
    </section>
  );
}