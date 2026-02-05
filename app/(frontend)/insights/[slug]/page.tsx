import Link from "next/link";
import { connectDB } from "@/lib/db";
import Blog from "@/models/Blog";
import { notFound } from "next/navigation";
import Navbar from "@/components/layout/Navbar"; 
import Footer from "@/components/layout/Footer";
import { User, Calendar, Clock, ArrowLeft } from "lucide-react"; 

// Fetch single blog
async function getBlog(slug: string) {
  await connectDB();
  const blog = await Blog.findOne({ slug }).lean();
  if (!blog) return null;
  return JSON.parse(JSON.stringify(blog));
}

function formatDate(dateString: string) {
  const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const blog = await getBlog(params.slug);

  if (!blog) { notFound(); }

  const heroImage = blog.thumbnail || "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg";

  return (
    // ✅ Main Wrapper: Matches AboutUs Background & Layout
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

      {/* 1. Navbar */}
      <Navbar forceStatic={true} />

      {/* 2. Spacer Div */}
      <div className="w-full h-24 bg-[#0b2b3f]"></div>

      {/* ================= MAIN CONTENT CONTAINER ================= */}
      {/* ✅ Updated: Width matches 'AboutUs' exactly (w-[99%] max-w-8xl) to reduce side spacing */}
      <div className="relative z-10 w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto px-4 lg:px-8 w-full">

        {/* --- HEADER SECTION --- */}
        {/* ✅ Updated: Increased max-width to allow wider spread on large screens */}
        {/* Added 'min-[1350px]:max-w-[90%]' to reduce side spacing specifically for 1350px+ */}
        <div className="max-w-7xl min-[1350px]:max-w-[95%] 2xl:max-w-[90%] mx-auto pt-12 pb-8">
            
            {/* Back Button */}
            <div className="mb-8">
                <Link 
                href="/insights" 
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold text-sm shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
                >
                <ArrowLeft size={18} /> Back
                </Link>
            </div>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm font-medium text-green-600 dark:text-green-400 mb-6 flex-wrap">
                <Link href="/" className="hover:underline">Home</Link> 
                <span className="text-gray-400">/</span>
                <Link href="/insights" className="hover:underline">Blog</Link>
                <span className="text-gray-400">/</span>
                <span className="text-gray-500 dark:text-gray-400 truncate max-w-[200px] md:max-w-md">{blog.title}</span>
            </div>

            {/* Title */}
            <h1 className="text-2xl md:text-2xl xl:text-3xl 2xl:text-4xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-500 dark:from-green-400 dark:to-blue-500">
                {blog.title}
            </h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 text-sm md:text-base font-medium text-gray-600 dark:text-gray-300 mb-10">
                <div className="flex items-center gap-2">
                    <User size={18} className="text-green-600 dark:text-green-400" />
                    <span className="text-green-700 dark:text-green-300 font-bold">{blog.author || "KSG Team"}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Calendar size={18} className="text-gray-400" />
                    <span>Last updated on {formatDate(blog.updatedAt || blog.createdAt)}</span>
                </div>
                <div className="flex items-center gap-2">
                    <Clock size={18} className="text-gray-400" />
                    <span>5 min read</span>
                </div>
            </div>

            {/* Hero Image */}
            <div className="w-full relative rounded-[2rem] overflow-hidden shadow-2xl border border-gray-100 dark:border-white/10 mb-16">
                <img src={heroImage} alt={blog.title} className="w-full h-auto object-cover max-h-[600px]" />
            </div>

        </div>

        {/* --- CONTENT BODY --- */}
        {/* ✅ Updated: Matching width logic for content body */}
        <div className="max-w-7xl min-[1350px]:max-w-[95%] 2xl:max-w-[90%] mx-auto pb-20">
            <div className="prose prose-lg md:prose-xl max-w-none dark:prose-invert">
                
                {/* Description Highlight */}
                {blog.description && (
                    <div className="bg-gray-50 dark:bg-white/5 border-l-4 border-green-500 p-6 md:p-8 rounded-r-xl text-lg italic text-gray-600 dark:text-gray-300 mb-12 shadow-sm">
                        {blog.description}
                    </div>
                )}

                {/* Dynamic Blocks Loop */}
                {blog.content.map((block: any, index: number) => {
                    
                    // Heading
                    if (block.type === 'heading') {
                        return (
                        <h2 key={index} className="text-2xl md:text-2xl 2xl:text-3xl font-extrabold mt-12 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#041D2D] to-green-600 dark:from-white dark:to-green-400">
                            {block.value}
                        </h2>
                        );
                    }
                    
                    // Image
                    if (block.type === 'image') {
                        return (
                        <div key={index} className="my-12">
                            <img src={block.value} alt="Content Illustration" className="w-full h-auto rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300" />
                        </div>
                        );
                    }

                    // Table Rendering
                    if (block.type === 'table') {
                        const rows = block.value.split('\n'); 
                        return (
                        <div key={index} className="my-10 overflow-x-auto rounded-2xl border border-gray-200 dark:border-white/10 shadow-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-white/10 text-sm md:text-base">
                                <thead className="bg-[#041D2D] text-white">
                                    <tr>
                                        {rows[0]?.split(',').map((header: string, i: number) => (
                                            <th key={i} className="px-6 py-4 text-left font-bold uppercase tracking-wider">
                                                {header.trim()}
                                            </th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody className="bg-white dark:bg-slate-800 divide-y divide-gray-100 dark:divide-white/5">
                                    {rows.slice(1).map((row: string, rowIndex: number) => (
                                        <tr key={rowIndex} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors">
                                            {row.split(',').map((cell: string, cellIndex: number) => (
                                                <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-gray-700 dark:text-gray-300 font-medium">
                                                    {cell.trim()}
                                                </td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        );
                    }

                    // Paragraph
                    return (
                        // ✅ Updated: Decreased font size to text-base / text-lg
                        <p key={index} className="text-base md:text-sm 2xl:text-base text-slate-700 dark:text-gray-300 leading-7 md:leading-8 mb-6 font-normal">
                        {block.value}
                        </p>
                    );
                })}
            </div>
        </div>

      </div>

      {/* Footer */}
      <div className="relative z-20 bg-[#020617] border-t border-white/5">
        <Footer/>
      </div>
      
    </div>
  );
}