"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CareerForm from "@/components/admin/CareerForm";
import Loader from "@/components/ui/Loader";

export default function EditCareerPage({ params }: { params: { id: string } }) {
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const res = await fetch(`/api/careers/${params.id}`);
        const data = await res.json();
        if (res.ok) setJob(data);
      } catch (error) {
        console.error("Error loading job", error);
      } finally {
        setLoading(false);
      }
    };
    fetchJob();
  }, [params.id]);

  if (loading) return <div className="text-white text-center py-20"><Loader text="Loading Job Details..." /></div>;
  if (!job) return <div className="text-white text-center py-20">Job not found</div>;

  return (
    <div className="max-w-5xl mx-auto space-y-6 px-4 md:px-0 py-8">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-white">Edit Job Post</h1>

        <Link 
          href="/dashboard/careers" 
          className="flex items-center justify-center sm:justify-start gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-105 w-full sm:w-auto"
        >
          <ArrowLeft size={20} />
          <span>Back to Careers</span>
        </Link>
      </div>

      {/* --- FORM (Edit Mode) --- */}
      <CareerForm initialData={job} isEdit={true} />
    </div>
  );
}