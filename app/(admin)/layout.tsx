"use client";

import { usePathname } from "next/navigation";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { useEffect, useState } from "react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  // Hydration Error se bachne ke liye
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Agar pathname null hai ya '/login' hai, to Sidebar mat dikhao
  const isLoginPage = pathname === "/login" || pathname === "/login/";

  if (isLoginPage) {
    return <main className="min-h-screen bg-gray-100">{children}</main>;
  }

  return (
    <div className="flex min-h-screen bg-[#041D2D] relative overflow-hidden">
      {/* Background Elements */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px]"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-green-600/10 rounded-full blur-[120px]"></div>
      </div>

      <AdminSidebar />
      
      <main className="relative z-10 flex-1 lg:ml-64 p-4 md:p-8 pt-20 lg:pt-8 overflow-y-auto h-screen text-white">
        {children}
      </main>
    </div>
  );
}