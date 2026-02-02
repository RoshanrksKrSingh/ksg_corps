"use client";

import { useEffect, useState } from "react";
import { AlertCircle } from "lucide-react"; // ✅ Added Icon for Toast

export default function NotificationBar() {
  const [notification, setNotification] = useState<{ text: string; isActive: boolean } | null>(null);
  
  // ✅ Toast State
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" | null }>({ msg: "", type: null });

  // ✅ Helper: Show Toast
  const showToast = (msg: string, type: "success" | "error") => {
    setToast({ msg, type });
    setTimeout(() => setToast({ msg: "", type: null }), 3000);
  };

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
        
        showToast("Failed to load notification", "error");
      }
    };
    fetchNotif();
  }, []);

  // ✅ Updated Logic: Allow render if there is a toast, even if notification is null
  if ((!notification || !notification.text) && !toast.msg) return null;

  return (
    <>
      {/* ✅ ADDED TOAST UI (Fixed position to ensure visibility) */}
      {toast.type && (
        <div className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl animate-in slide-in-from-top-5 duration-300 ${
            toast.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}>
            <AlertCircle size={24} />
            <div>
                <h4 className="font-bold text-sm">{toast.type === "success" ? "Success" : "Error"}</h4>
                <p className="text-sm opacity-90">{toast.msg}</p>
            </div>
        </div>
      )}

      {/* ✅ MARQUEE CONTENT (Only renders if notification exists) */}
      {notification && notification.text && (
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
      )}
    </>
  );
}