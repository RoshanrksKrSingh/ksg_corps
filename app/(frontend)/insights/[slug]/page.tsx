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
    <div className="bg-white min-h-screen font-sans text-[#041D2D]">
      
      {/* 1. Navbar: Force Static (Scrolled Style Always) */}
      <Navbar forceStatic={true} />

      {/* 2. Spacer Div */}
      <div className="w-full h-24"></div>

      {/* --- HEADER SECTION --- */}
      <div className="max-w-5xl mx-auto px-6 pt-12 pb-8">
        
        {/* ✅ NEW: Back Button (Gradient Green-Blue) */}
        <div className="mb-8">
            <Link 
              href="/insights" 
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold text-sm shadow-lg hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1"
            >
              <ArrowLeft size={18} /> Back
            </Link>
        </div>

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm font-medium text-green-600 mb-6 flex-wrap">
            <Link href="/" className="hover:underline">Home</Link> 
            <span className="text-gray-400">/</span>
            <Link href="/insights" className="hover:underline">Blog</Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-500 truncate max-w-[200px] md:max-w-md">{blog.title}</span>
        </div>

        {/* Title */}
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-green-500">
            {blog.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 text-sm md:text-base font-medium text-gray-600 mb-10">
            <div className="flex items-center gap-2">
                <User size={18} className="text-green-600" />
                <span className="text-green-700 font-bold">{blog.author || "KSG Team"}</span>
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
        <div className="w-full relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 mb-16">
            <img src={heroImage} alt={blog.title} className="w-full h-auto object-cover max-h-[600px]" />
        </div>

      </div>

      {/* --- CONTENT BODY --- */}
      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="prose prose-lg md:prose-xl max-w-none">
             
             {/* Description Highlight */}
             {blog.description && (
                <div className="bg-gray-50 border-l-4 border-green-500 p-6 md:p-8 rounded-r-xl text-xl italic text-gray-600 mb-12 shadow-sm">
                    {blog.description}
                </div>
             )}

             {/* Dynamic Blocks Loop */}
             {blog.content.map((block: any, index: number) => {
               
               // Heading
               if (block.type === 'heading') {
                 return (
                    <h2 key={index} className="text-2xl md:text-3xl font-extrabold mt-12 mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#041D2D] to-green-600">
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
                    <div key={index} className="my-10 overflow-x-auto rounded-2xl border border-gray-200 shadow-lg">
                        <table className="min-w-full divide-y divide-gray-200 text-sm md:text-base">
                            <thead className="bg-[#041D2D] text-white">
                                <tr>
                                    {rows[0]?.split(',').map((header: string, i: number) => (
                                        <th key={i} className="px-6 py-4 text-left font-bold uppercase tracking-wider">
                                            {header.trim()}
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-100">
                                {rows.slice(1).map((row: string, rowIndex: number) => (
                                    <tr key={rowIndex} className="hover:bg-gray-50 transition-colors">
                                        {row.split(',').map((cell: string, cellIndex: number) => (
                                            <td key={cellIndex} className="px-6 py-4 whitespace-nowrap text-gray-700 font-medium">
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
                 <p key={index} className="text-lg md:text-xl text-slate-700 leading-8 md:leading-9 mb-8 font-normal">
                    {block.value}
                 </p>
               );
             })}
        </div>
      </div>

      <div className="relative z-20 mt-0 rounded-b-2xl px-2">
        <Footer/>
      </div>
    </div>
  );
}