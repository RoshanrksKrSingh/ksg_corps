"use client";

import { useEffect, useState } from "react";

export default function NotificationBar() {
  const [notification, setNotification] = useState<{ text: string; isActive: boolean } | null>(null);

  useEffect(() => {
    const fetchNotif = async () => {
      try {
        const res = await fetch("/api/notification", { cache: "no-store" }); 
        const data = await res.json();
        
        if (Array.isArray(data)) {
            const activeNotif = data.find((n: any) => n.isActive === true);
            setNotification(activeNotif || null);
        }
      } catch (err) {
        console.error("Notification Fetch Error:", err);
      }
    };
    fetchNotif();
  }, []);

  if (!notification || !notification.text) return null;

  return (
    // ✅ Updated: Removed max-w-50%, added w-full and flex-1 to take available space
    <div className="flex flex-1 items-center justify-center overflow-hidden mx-2 h-full relative z-40">
      <div className="whitespace-nowrap animate-marquee inline-block font-sans text-[10px] sm:text-xs font-medium tracking-wide text-green-400">
        <span className="mx-2 md:mx-4">📢 {notification.text}</span>
        <span className="mx-2 md:mx-4">📢 {notification.text}</span>
        <span className="mx-2 md:mx-4">📢 {notification.text}</span>
      </div>
      
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          white-space: nowrap;
          animation: marquee 12s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
      `}</style>
    </div>
  );
}