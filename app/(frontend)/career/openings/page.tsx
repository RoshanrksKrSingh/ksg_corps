import Link from 'next/link';
import { MapPin, Briefcase, Clock, ArrowRight, AlertCircle } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// ✅ Fetch Jobs (Server Component)
async function getJobs() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/careers`, { 
        cache: 'no-store' 
    });
    
    if (!res.ok) return [];
    return await res.json();
  } catch (error) {
    return [];
  }
}

export default async function JobOpeningsPage() {
  const jobs = await getJobs();

  return (
    <div className="bg-gray-50 min-h-screen font-sans">
      
      {/* 1. Navbar */}
      <Navbar forceStatic={true} />
            
      {/* 2. Spacer Div */}
      <div className="w-full h-20 bg-[#0b2b3f] rounded-2xl"></div>

      {/* 3. Job Listings Section */}
      <div className="relative z-10 bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
            
            {/* Section Heading */}
            <div className="text-center mb-16 max-w-3xl mx-auto">
                <span className="inline-block py-1 px-3 rounded-full bg-green-100 border border-green-200 mb-4">
                    <span className="text-green-600 font-bold uppercase text-xs tracking-widest">
                        We are hiring
                    </span>
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-[#041D2D] mb-4">
                    Explore <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">Opportunities</span>
                </h2>
                <p className="text-gray-600">
                    Find the perfect role for you and join our dynamic team at KSG Corporate Services.
                </p>
            </div>

            {/* Jobs Grid */}
            <div className="grid gap-6">
                {jobs.length > 0 ? (
                    jobs.map((job: any) => (
                        <div 
                            key={job._id} 
                            className="group bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-orange-100 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                        >
                            {/* Job Details */}
                            <div className="space-y-4 flex-1">
                                <h3 className="text-2xl font-bold text-[#041D2D] group-hover:text-orange-600 transition-colors">
                                    {job.title}
                                </h3>
                                
                                <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500">
                                    <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                                        <MapPin size={16} className="text-orange-500" /> {job.location}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                                        <Briefcase size={16} className="text-green-500" /> {job.type}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-gray-50 px-3 py-1.5 rounded-lg border border-gray-100">
                                        <Clock size={16} className="text-blue-500" /> Posted Recently
                                    </span>
                                </div>

                                <p className="text-gray-600 leading-relaxed line-clamp-2 max-w-3xl">
                                    {job.description}
                                </p>
                            </div>

                            {/* Apply Button */}
                            <div className="w-full md:w-auto">
                                <Link 
                                    href="/contact" 
                                    className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-green-600 text-white font-bold shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1 hover:scale-105"
                                >
                                    Apply Now <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    ))
                ) : (
                    // Empty State
                    <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
                        <div className="inline-block p-4 rounded-full bg-gray-50 mb-4">
                            <AlertCircle className="text-gray-400" size={40} />
                        </div>
                        <h3 className="text-xl font-bold text-gray-700">No Open Positions</h3>
                        <p className="text-gray-500 mt-2">
                            We don't have any openings right now. Check back later!
                        </p>
                    </div>
                )}
            </div>

        </div>
      </div>

      {/* 4. Footer */}
        <div className="rounded-2xl overflow-hidden">
       <Footer/>
      </div>
      
    </div>
  );
}