"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import CareerForm from "@/components/admin/CareerForm";

export default function CreateCareerPage() {
  return (
    <div className="max-w-5xl mx-auto space-y-6 px-4 md:px-0 py-0">
      
      {/* --- HEADER --- */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-3xl font-bold text-white">Post New Job</h1>

        <Link 
          href="/dashboard/careers" 
          className="flex items-center justify-center sm:justify-start gap-2 px-6 py-3 rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] transition-all transform hover:scale-105 w-full sm:w-auto"
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