import Link from 'next/link';
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import { Calendar, ArrowRight, AlertCircle, Filter } from "lucide-react";
import Navbar from "@/components/layout/Navbar"; 
import InsightHeader from "@/components/ui/InsightHeader";
import Footer from '@/components/layout/Footer';

// ✅ Fetch data (Server Component)
async function getBlogs() {
  try {
    await connectDB();
    const blogs = await Blog.find({}).sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return [];
  }
}

// ✅ Dynamic Page Component
export default async function InsightsPage({ searchParams }: { searchParams: { cat?: string } }) {
  const allBlogs = await getBlogs();
  
  // 1. Get Current Category from URL (default to 'all')
  const activeCategory = searchParams.cat || 'all';

  // 2. Filter Blogs based on Category
  const filteredBlogs = activeCategory === 'all' 
    ? allBlogs 
    : allBlogs.filter((blog: any) => blog.category?.toLowerCase() === activeCategory.toLowerCase() || blog.type?.toLowerCase() === activeCategory.toLowerCase()); 

  // 3. Calculate Counts for Hero Buttons
  const counts = {
    all: allBlogs.length,
    news: allBlogs.filter((b: any) => b.category === 'news').length,
    blogs: allBlogs.filter((b: any) => b.category === 'blogs').length,
    audit: allBlogs.filter((b: any) => b.category === 'audit').length,
    events: allBlogs.filter((b: any) => b.category === 'events').length,
  };

  // 4. Dynamic Header Titles
  const headerTitles: any = {
    all: "Insights & Updates",
    
    news: (
      <span className="text-3xl md:text-5xl block leading-tight mt-1 md:mt-18">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500 font-bold">Latest</span> News
      </span>
    ),
    
    blogs: (
      <span className="text-3xl md:text-5xl block leading-tight mt-1 md:mt-18">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500 font-bold">Our</span> Blogs
      </span>
    ),
    
    audit: (
      <span className="text-3xl md:text-5xl block leading-tight mt-1 md:mt-18">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500 font-bold">Accounting &</span> Auditing
      </span>
    ),
    
    events: (
      <span className="text-3xl md:text-5xl block leading-tight mt-1 md:mt-18">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-green-500 font-bold">Upcoming</span> Events
      </span>
    )
  };

  // 5. Breadcrumb Text Map
  const breadcrumbMap: any = {
    all: "All Insights",
    news: "Latest News",
    blogs: "Our Blogs",
    audit: "Accounting & Auditing",
    events: "Upcoming Events"
  };

  const breadcrumbText = breadcrumbMap[activeCategory] || "Insights & Updates";

  return (
    <div className="bg-gray-50 ">
      
      <Navbar />

      {/* ✅ Dynamic Header */}
      <InsightHeader 
        title={headerTitles[activeCategory] || "Insights & Updates"}
        breadcrumb={breadcrumbText}
      />

      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* ✅ CATEGORY HERO CARDS (Buttons) */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 -mt-20 relative z-20">
           {[
             { id: 'all', label: 'All Posts', count: counts.all },
             { id: 'news', label: 'Latest News', count: counts.news },
             { id: 'blogs', label: 'Blogs', count: counts.blogs },
             { id: 'audit', label: 'Audit & Accounts', count: counts.audit },
             { id: 'events', label: 'Events', count: counts.events },
           ].map((cat) => (
             <Link 
               key={cat.id} 
               href={cat.id === 'all' ? '/insights' : `/insights?cat=${cat.id}`}
               scroll={false} 
               className={`flex items-center gap-3 px-6 py-4 rounded-xl border shadow-lg transition-all transform hover:-translate-y-1 ${
                 activeCategory === cat.id 
                   ? "bg-gradient-to-r from-orange-500 to-green-500 text-white border-transparent ring-2 ring-white/20" 
                   : "bg-white text-gray-700 border-gray-100 hover:border-orange-200 hover:shadow-orange-500/10"
               }`}
             >
               <span className="font-bold text-sm uppercase tracking-wide">{cat.label}</span>
               <span className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                 activeCategory === cat.id ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
               }`}>
                 {cat.count}
               </span>
             </Link>
           ))}
        </div>

        {/* --- BLOG GRID SECTION --- */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog: any) => (
              <Link 
                key={blog._id} 
                href={`/insights/${blog.slug}`} 
                className="group relative bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-lg border-gray-100 flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
              >
                {/* Image */}
                <div className="h-56 overflow-hidden relative w-full">
                   <img 
                     src={blog.thumbnail || "https://placehold.co/600x400?text=KSG+Insights"} 
                     alt={blog.title} 
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                   />
                   
                   {/* Category Badge on Card */}
                   <div className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                      {blog.category || "Insights"}
                   </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                   <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
                      <Calendar size={12} />
                      {new Date(blog.createdAt).toLocaleDateString()}
                   </div>

                   <h3 className="text-xl font-bold text-[#041D2D] mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                     {blog.title}
                   </h3>

                   <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                     {blog.description}
                   </p>
                   
                   {/* ✅ UPDATED BUTTON STYLE: Gradient Pill */}
                   <div className="mt-auto">
                      <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-orange-500 to-green-500 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                         Read Full Article <ArrowRight size={14} />
                      </span>
                   </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
             <div className="inline-block p-4 rounded-full bg-gray-50 mb-4">
                <Filter className="text-gray-300" size={40} />
             </div>
             <h3 className="text-xl font-bold text-gray-700">No Articles Found</h3>
             <p className="text-gray-500 mt-2">There are no posts in the <span className="font-bold text-orange-500 capitalize">{activeCategory}</span> category yet.</p>
             <Link href="/insights" className="mt-6 inline-block text-sm font-bold text-blue-600 hover:underline">View All Insights</Link>
          </div>
        )}
      </div>
      <div className="relative z-20 mt-0 rounded-b-2xl px-2">
      <Footer/>
      </div>
    </div>
  );
}