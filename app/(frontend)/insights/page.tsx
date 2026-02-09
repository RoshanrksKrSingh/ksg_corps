import Link from "next/link";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import { Calendar, ArrowRight, AlertCircle, Filter } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import InsightHeader from "@/components/ui/InsightHeader";
import Footer from "@/components/layout/Footer";

// ✅ Fetch data (Server Component)
async function getBlogs() {
  try {
    await connectDB();
    const blogs = await Blog.find({}).sort({ createdAt: -1 }).lean();
    return JSON.parse(JSON.stringify(blogs));
  } catch (error) {
    return [];
  }
}

// ✅ Dynamic Page Component
export default async function InsightsPage({
  searchParams,
}: {
  searchParams: { cat?: string };
}) {
  const allBlogs = await getBlogs();
  const activeCategory = searchParams.cat || "all";

  const filteredBlogs =
    activeCategory === "all"
      ? allBlogs
      : allBlogs.filter(
          (blog: any) =>
            blog.category?.toLowerCase() === activeCategory.toLowerCase(),
        );

  const counts = {
    all: allBlogs.length,
    blogs: allBlogs.filter((b: any) => b.category === "blogs").length,
    audit: allBlogs.filter((b: any) => b.category === "audit").length,
    tax: allBlogs.filter((b: any) => b.category === "tax").length,
    business: allBlogs.filter((b: any) => b.category === "business").length,
    risk: allBlogs.filter((b: any) => b.category === "risk").length,
    events: allBlogs.filter((b: any) => b.category === "events").length,
  };

  const headerTitles: any = {
    all: (
      <span className="text-2xl md:text-4xl block leading-tight mt-1 md:mt-18">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 font-bold">
          Insights
        </span>{" "}
        & Updates
      </span>
    ),
    blogs: (
      <span className="text-2xl md:text-4xl block leading-tight mt-1 md:mt-18">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 font-bold">
          Latest
        </span>{" "}
        Blogs
      </span>
    ),
    audit: (
      <span className="text-2xl md:text-4xl block leading-tight mt-1 md:mt-18">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 font-bold">
          Accounting &
        </span>{" "}
        Audit
      </span>
    ),
    tax: (
      <span className="text-2xl md:text-4xl block leading-tight mt-1 md:mt-18">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 font-bold">
          Tax
        </span>{" "}
        Advisory
      </span>
    ),
    business: (
      <span className="text-2xl md:text-4xl block leading-tight mt-1 md:mt-18">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 font-bold">
          Business
        </span>{" "}
        Setup/PRO
      </span>
    ),
    risk: (
      <span className="text-2xl md:text-4xl block leading-tight mt-1 md:mt-18">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 font-bold">
          Risk
        </span>{" "}
        Advisory
      </span>
    ),
    events: (
      <span className="text-2xl md:text-4xl block leading-tight mt-1 md:mt-18">
        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-green-500 font-bold">
          Upcoming
        </span>{" "}
        Events
      </span>
    ),
  };

  const breadcrumbMap: any = {
    all: "All Insights",
    blogs: "Latest Blogs",
    audit: "Account & Audit",
    tax: "Tax Advisory",
    business: "Business Setup/PRO",
    risk: "Risk Advisory",
    events: "Events",
  };

  const breadcrumbText = breadcrumbMap[activeCategory] || "Insights & Updates";

  return (
    // ✅ Main Wrapper: Matches AboutUs Background (Dark Blue -> Teal)
    <div className="bg-slate-50 dark:bg-gradient-to-b dark:from-[#09102d] dark:to-[#0F333D] min-h-screen font-sans transition-colors duration-300 relative overflow-hidden">
      
      {/* ================= STAR BACKGROUND (From AboutUs) ================= */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-80 dark:opacity-100 mix-blend-screen" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')", backgroundSize: "280px 280px", filter: "brightness(1.8) saturate(1.5)" }} />
      <div className="absolute inset-0 z-0 pointer-events-none opacity-70 dark:opacity-90 mix-blend-screen animate-stars-slow" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/tiny-stars.png')", backgroundSize: "180px 180px", filter: "brightness(2) saturate(1.6)" }} />
      <div className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-80 mix-blend-screen animate-stars-fast" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/stardust.png')", backgroundSize: "120px 120px", filter: "brightness(2.2) saturate(1.8)" }} />
      <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-cyan-400/10 via-transparent to-blue-500/10"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/30 dark:bg-blue-600/25 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-green-400/30 dark:bg-green-600/20 rounded-full blur-[140px] pointer-events-none"></div>

      <style>{`
        @keyframes starsSlow { from { transform: translateY(0px); } to { transform: translateY(-200px); } }
        @keyframes starsFast { from { transform: translateY(0px); } to { transform: translateY(-400px); } }
        .animate-stars-slow { animation: starsSlow 120s linear infinite; }
        .animate-stars-fast { animation: starsFast 60s linear infinite; }
      `}</style>

      <Navbar />

      {/* ✅ Ensure isAnimated is set to true */}
      <InsightHeader
        title={headerTitles[activeCategory] || headerTitles.all}
        breadcrumb={breadcrumbText}
        isAnimated={true}
      />

      {/* ✅ Main Content Container: Matches AboutUs Spacing (max-w-8xl) */}
      <div className="relative z-10 w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto px-4 lg:px-8 py-12">
        
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16 -mt-20 relative z-20">
          {[
            { id: "all", label: "All", count: counts.all },
            { id: "blogs", label: "Latest Blogs", count: counts.blogs },
            { id: "audit", label: "Account & Audit", count: counts.audit },
            { id: "tax", label: "Tax Advisory", count: counts.tax },
            { id: "business", label: "Business Setup", count: counts.business },
            { id: "risk", label: "Risk Advisory", count: counts.risk },
            { id: "events", label: "Events", count: counts.events },
          ].map((cat) => (
            <Link
              key={cat.id}
              href={cat.id === "all" ? "/insights" : `/insights?cat=${cat.id}`}
              scroll={false}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl border shadow-lg transition-all transform hover:-translate-y-1 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-blue-500 to-green-500 text-white border-transparent ring-2 ring-white/20"
                  : "bg-white dark:bg-white/10 text-gray-700 dark:text-gray-200 border-gray-100 dark:border-white/5 hover:border-orange-200 dark:hover:border-orange-500/30 hover:shadow-orange-500/10 backdrop-blur-md"
              }`}
            >
              <span className="font-bold text-sm uppercase tracking-wide">
                {cat.label}
              </span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs font-bold ${
                  activeCategory === cat.id
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 dark:bg-white/10 text-gray-500 dark:text-gray-300"
                }`}
              >
                {cat.count}
              </span>
            </Link>
          ))}
        </div>

        {/* Blog Grid Logic */}
        {filteredBlogs.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog: any) => (
              <Link
                key={blog._id}
                href={`/insights/${blog.slug}`}
                className="group relative bg-white/80 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-[2rem] overflow-hidden shadow-lg flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-orange-200 dark:hover:border-orange-500/30"
              >
                <div className="h-56 overflow-hidden relative w-full">
                  <img
                    src={
                      blog.thumbnail ||
                      "https://placehold.co/600x400?text=KSG+Insights"
                    }
                    alt={blog.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-md">
                    {breadcrumbMap[blog.category] ||
                      blog.category ||
                      "Insights"}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-gray-400 mb-3 uppercase tracking-wider">
                    <Calendar size={12} />
                    {new Date(blog.createdAt).toLocaleDateString()}
                  </div>
                  <h3 className="text-base font-bold text-[#041D2D] dark:text-white mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-6 flex-1 leading-relaxed">
                    {blog.description}
                  </p>
                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-tl-[20px] rounded-br-[20px] bg-gradient-to-r from-blue-500 to-green-500 text-white text-xs font-bold uppercase tracking-wider shadow-md transition-all duration-300 group-hover:shadow-lg group-hover:scale-105">
                      Read Full Article <ArrowRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-[2rem] shadow-sm border border-gray-100 dark:border-white/10">
            <div className="inline-block p-4 rounded-full bg-gray-50 dark:bg-white/10 mb-4">
              <Filter className="text-gray-300 dark:text-gray-500" size={40} />
            </div>
            <h3 className="text-xl font-bold text-gray-700 dark:text-white">
              No Articles Found
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              There are no posts in the{" "}
              <span className="font-bold text-orange-500 capitalize">
                {breadcrumbMap[activeCategory]}
              </span>{" "}
              category yet.
            </p>
            <Link
              href="/insights"
              className="mt-6 inline-block text-sm font-bold text-blue-600 dark:text-blue-400 hover:underline"
            >
              View All Insights
            </Link>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <div className="relative z-30 bg-[#020617] border-t border-white/5">
        <Footer />
      </div>
    </div>
  );
}