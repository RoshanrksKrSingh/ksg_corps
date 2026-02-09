import Link from "next/link";
import {
  MapPin,
  Briefcase,
  Clock,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { connectDB } from "@/lib/db";
import Job from "@/models/Job";

// ✅ Fetch Jobs (Server Component - Direct DB Call)
async function getJobs() {
  try {
    await connectDB();
    const jobs = await Job.find({ isActive: true })
      .sort({ createdAt: -1 })
      .lean();
    return JSON.parse(JSON.stringify(jobs));
  } catch (error) {
    return [];
  }
}

export default async function JobOpeningsPage() {
  const jobs = await getJobs();

  return (
    // ✅ Main Wrapper: Matches Career/AboutUs Background Transition
    <div className="bg-slate-50 dark:bg-[#09102d] min-h-screen font-sans transition-colors duration-300">
      {/* 1. Navbar */}
      <Navbar forceStatic={true} />

      {/* 2. Spacer Div */}
      <div className="w-full h-20 bg-[#09102d]"></div>

      {/* 3. Job Listings Section (Styled like CareerWithUs) */}
      <section className="relative w-full min-h-[85vh] flex flex-col items-center overflow-hidden bg-slate-50 dark:bg-gradient-to-b dark:from-[#09102d] dark:to-[#0F333D] pt-10 pb-20 group font-sans transition-colors duration-300">
        {/* ================= STAR BACKGROUND LAYERS ================= */}
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-80 dark:opacity-100 mix-blend-screen"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/stardust.png')",
            backgroundSize: "280px 280px",
            filter: "brightness(1.8) saturate(1.5)",
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-70 dark:opacity-90 mix-blend-screen animate-stars-slow"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/tiny-stars.png')",
            backgroundSize: "180px 180px",
            filter: "brightness(2) saturate(1.6)",
          }}
        />
        <div
          className="absolute inset-0 z-0 pointer-events-none opacity-60 dark:opacity-80 mix-blend-screen animate-stars-fast"
          style={{
            backgroundImage:
              "url('https://www.transparenttextures.com/patterns/stardust.png')",
            backgroundSize: "120px 120px",
            filter: "brightness(2.2) saturate(1.8)",
          }}
        />
        <div className="absolute inset-0 z-0 pointer-events-none bg-gradient-to-b from-cyan-400/10 via-transparent to-blue-500/10"></div>
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-blue-400/30 dark:bg-blue-600/25 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-green-400/30 dark:bg-green-600/20 rounded-full blur-[140px] pointer-events-none"></div>

        {/* CSS Animations for Background */}
        <style>{`
            @keyframes starsSlow { from { transform: translateY(0px); } to { transform: translateY(-200px); } }
            @keyframes starsFast { from { transform: translateY(0px); } to { transform: translateY(-400px); } }
            .animate-stars-slow { animation: starsSlow 120s linear infinite; }
            .animate-stars-fast { animation: starsFast 60s linear infinite; }
        `}</style>

        {/* ================= CONTENT CONTAINER (Matches CareerWithUs Widths) ================= */}
        <div className="relative z-10 w-[99%] max-w-8xl 2xl:max-w-[95%] mx-auto px-4 lg:px-8 w-full">
          {/* Section Heading */}
          <div className="text-center mb-16 max-w-3xl mx-auto pt-10">
            <span className="inline-block py-1.5 px-4 rounded-tl-[20px] rounded-br-[20px] border border-gray-300 dark:border-white/10 bg-white/60 dark:bg-white/20 shadow-sm mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-600 dark:from-green-400 dark:to-blue-500 font-bold uppercase text-xs tracking-[0.2em]">
                We are hiring
              </span>
            </span>
            <h2 className="text-xl sm:text-2xl lg:text-[1.8rem] xl:text-3xl 2xl:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 mb-4">
              Explore{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500">
                Opportunities
              </span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Find the perfect role for you and join our dynamic team at KSG
              Corporate Services.
            </p>
          </div>

          {/* Jobs Grid */}
          <div className="grid gap-6">
            {jobs.length > 0 ? (
              jobs.map((job: any) => (
                <div
                  key={job._id}
                  // ✅ Updated Card Style: Glassmorphism + Responsive + Dark Mode compatible
                  className="group bg-white/80 dark:bg-white/5 backdrop-blur-md p-8 rounded-[2rem] shadow-sm border border-gray-200 dark:border-white/10 hover:shadow-xl hover:border-orange-200 dark:hover:border-orange-500/30 transition-all duration-300 flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
                >
                  {/* Job Details */}
                  <div className="space-y-4 flex-1">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-600 bg-clip-text text-transparent">
                      {job.title}
                    </h3>

                    <div className="flex flex-wrap items-center gap-4 text-sm font-medium text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1.5 bg-gray-50 dark:bg-white/10 px-3 py-1.5 rounded-lg border border-gray-100 dark:border-white/5">
                        <MapPin size={16} className="text-green-500" />{" "}
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1.5 bg-gray-50 dark:bg-white/10 px-3 py-1.5 rounded-lg border border-gray-100 dark:border-white/5">
                        <Briefcase size={16} className="text-black-500" />{" "}
                        {job.type}
                      </span>
                      <span className="flex items-center gap-1.5 bg-gray-50 dark:bg-white/10 px-3 py-1.5 rounded-lg border border-gray-100 dark:border-white/5">
                        <Clock size={16} className="text-blue-500" /> Posted
                        Recently
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2 max-w-3xl">
                      {job.description}
                    </p>
                  </div>

                  {/* Apply Button */}
                  <div className="w-full md:w-auto">
                    <Link
                      href="/contact"
                      className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-8 py-3.5 rounded-tl-[20px] rounded-br-[20px] bg-gradient-to-r from-blue-500 to-green-600 text-white font-bold shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1 hover:scale-105"
                    >
                      Apply Now <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              // Empty State
              <div className="text-center py-20 bg-white/80 dark:bg-white/5 backdrop-blur-md rounded-[2rem] border border-gray-200 dark:border-white/10 shadow-sm">
                <div className="inline-block p-4 rounded-full bg-gray-50 dark:bg-white/10 mb-4">
                  <AlertCircle
                    className="text-gray-400 dark:text-gray-500"
                    size={40}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-700 dark:text-white">
                  No Open Positions
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mt-2">
                  We don't have any openings right now. Check back later!
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 4. Footer */}
      <div className="relative z-30 bg-[#020617] border-t border-white/5">
        <Footer />
      </div>
    </div>
  );
}
