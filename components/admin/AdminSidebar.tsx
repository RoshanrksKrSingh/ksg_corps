"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, FileText, Briefcase, MessageSquare, LogOut, X, Menu, Bell } from "lucide-react";
import { useState } from "react";

const menuItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Manage Blogs", href: "/dashboard/blogs", icon: FileText },
  { name: "Manage Careers", href: "/dashboard/careers", icon: Briefcase },
  { name: "Inquiries", href: "/dashboard/inquiries", icon: MessageSquare },
  { name: "Notification", href: "/dashboard/notification", icon: Bell },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Top Bar */}
      {/* Change 1: Added 'h-16' (fixed height) & 'overflow-hidden' to fix heading overlap issue. */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#041D2D]/90 backdrop-blur-md border-b border-white/10 p-0 z-40 flex items-center justify-between shadow-md h-16 overflow-hidden">
        
        {/* LOGO HERE (Mobile) - Classes kept same as requested */}
        <img 
          src="http://ksgcorps.com/wp-content/uploads/2021/11/ksg-logo-white.png" 
          alt="KSG Logo" 
          className="h-40 w-auto -mt-1 -ml-1"
        />

        {/* Change 2: Added 'mr-4' to give spacing from right side */}
        <button onClick={() => setIsOpen(true)} className="text-white mr-4">
          <Menu size={28} />
        </button>
      </div>

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gradient-to-b from-[#041D2D] to-[#082f49] border-r border-white/5 text-white w-60 z-50 transition-transform duration-300 ease-in-out shadow-2xl
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0 lg:block`}
      >
        <div className="p-0 border-b border-white/10 flex justify-between items-center overflow-hidden">
          
          {/* LOGO HERE (Desktop/Sidebar) */}
          <div className="w-full flex justify-start">
            <img 
              src="http://ksgcorps.com/wp-content/uploads/2021/11/ksg-logo-white.png" 
              alt="KSG Logo" 
              className="h-40 w-auto -mt-10 -ml-1" 
            />
          </div>

          <button onClick={() => setIsOpen(false)} className="lg:hidden text-gray-400 hover:text-white mr-4">
            <X size={24} />
          </button>
        </div>

        <nav className="flex-1 pt-1 space-y-2">
          {menuItems.map((item) => {
            const isActive = item.href === "/dashboard" 
                ? pathname === "/dashboard"
                : pathname?.startsWith(item.href) || false;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl mx-4 transition-all duration-300 ${
                  isActive
                    ? "rounded-tl-[30px] rounded-br-[30px] rounded-tr-none rounded-bl-none bg-gradient-to-r from-green-400 to-blue-500 text-white font-bold hover:shadow-[0_0_20px_rgba(249,115,22,0.5)] mr-14 shadow-orange-500/20"
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                <item.icon size={20} />
                <span className="font-medium">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <button
            className="flex items-center gap-3 w-full px-4 py-3 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-xl transition-all"
            onClick={() => {
              document.cookie = "admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
              window.location.href = "/login";
            }}
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>
      </aside>

      {isOpen && (
        <div className="fixed inset-0 bg-black/60 z-30 lg:hidden backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}
    </>
  );
}