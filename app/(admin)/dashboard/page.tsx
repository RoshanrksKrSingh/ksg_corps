"use client";

import Link from "next/link";
import { FileText, Briefcase, MessageSquare, ArrowRight, Bell } from "lucide-react";

export default function DashboardOverview() {
  const cards = [
    {
      title: "Manage Blogs",
      desc: "Create, edit, or delete blog posts.",
      href: "/dashboard/blogs",
      icon: FileText,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Job Openings",
      desc: "Post new jobs and manage listings.",
      href: "/dashboard/careers",
      icon: Briefcase,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Inquiries",
      desc: "View leads from the contact form.",
      href: "/dashboard/inquiries",
      icon: MessageSquare,
      color: "bg-orange-100 text-orange-600",
    },
    {
      title: "Notifications",
      desc: "Update the site-wide notification bar.",
      href: "/dashboard/notification",
      icon: Bell,
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Header Section */}
      <div>
        <h1 className="text-3xl font-bold text-white">Dashboard Overview</h1>
        <p className="text-gray-400 mt-2">Welcome back to KSG Admin Panel.</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <Link
            key={index}
            href={card.href}
            className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-orange-500/20 transition-all duration-300 flex flex-col justify-between h-52 transform hover:-translate-y-1"
          >
            <div>
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center ${card.color} mb-4`}>
                <card.icon size={26} />
              </div>
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors">
                {card.title}
              </h3>
              <p className="text-sm text-gray-500 mt-2">{card.desc}</p>
            </div>
            
            <div className="flex items-center gap-2 text-sm font-bold text-gray-400 group-hover:text-orange-600 transition-colors mt-4">
              Go to page <ArrowRight size={16} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}