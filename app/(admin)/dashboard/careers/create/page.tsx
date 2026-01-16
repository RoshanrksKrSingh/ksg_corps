"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CareerForm from "@/components/admin/CareerForm";

export default function CreateCareerPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 px-4 md:px-0 py-8">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-white">Post New Job</h1>

        <Link 
          href="/dashboard/careers" 
          className="flex items-center justify-center sm:justify-start gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-green-500 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all transform hover:scale-105 w-full sm:w-auto"
        >
          <ArrowLeft size={20} />
          <span>Back to Careers</span>
        </Link>
      </div>

      {/* --- FORM --- */}
      <CareerForm />
    </div>
  );
}