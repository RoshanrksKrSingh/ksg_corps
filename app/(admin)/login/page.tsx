"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, Eye, EyeOff, Loader2, CheckCircle, AlertCircle } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [creds, setCreds] = useState({ username: "", password: "" });
  
  // Toast State
  const [toast, setToast] = useState<{ msg: string; type: "success" | "error" | null }>({ msg: "", type: null });

  // Show Toast Helper
  const showToast = (msg: string, type: "success" | "error") => {
    setToast({ msg, type });
    setTimeout(() => setToast({ msg: "", type: null }), 3000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Hardcoded check
    // Note: Production mein API call karein
    if (creds.username === "admin" && creds.password === "admin123") {
      
      showToast("Login Successful! Redirecting...", "success");
      
      // Cookie Set
      document.cookie = "admin_token=true; path=/";
      
      // Delay for UX
      setTimeout(() => {
        router.push("/dashboard/blogs");
      }, 1000);

    } else {
      showToast("Invalid Username or Password!", "error");
      setLoading(false);
    }
  };

  return (
    // Change 1: Added p-4 for safe area on mobile
    <div className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-[#041D2D] to-[#020c13] overflow-hidden p-4">
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-orange-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* --- TOAST NOTIFICATION --- */}
      {toast.type && (
        <div className={`fixed top-5 right-5 z-50 flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl animate-in slide-in-from-top-5 duration-300 ${
            toast.type === "success" ? "bg-green-500 text-white" : "bg-red-500 text-white"
        }`}>
            {toast.type === "success" ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
            <div>
                <h4 className="font-bold text-sm">{toast.type === "success" ? "Success" : "Error"}</h4>
                <p className="text-sm opacity-90">{toast.msg}</p>
            </div>
        </div>
      )}

      {/* --- LOGIN CARD --- */}
      {/* Change 2: Changed padding to p-6 md:p-10 to fix mobile layout */}
      <div className="w-full max-w-[420px] bg-white/10 backdrop-blur-lg border border-white/20 p-0 pl-5 pr-4 rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.3)]">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center mb-0">
          <div className="mb-0">
             {/* Change 3: Adjusted logo height for mobile (h-24) */}
             <img 
               src="http://ksgcorps.com/wp-content/uploads/2021/11/ksg-logo-white.png" 
               alt="KSG Logo" 
               className="h-24 md:h-32 w-auto drop-shadow-md"
             />
          </div>
          <h1 className="text-2xl font-bold text-white tracking-wide text-center">Welcome Back</h1>
          <p className="text-gray-400 text-sm mt-1 text-center">Please sign in to continue</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Username Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-300 uppercase tracking-wider ml-1">Username</label>
            <div className="relative group">
              <User className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={20} />
              <input
                type="text"
                className="w-full pl-12 pr-4 py-3.5 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                placeholder="Enter your username"
                onChange={(e) => setCreds({ ...creds, username: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label className="text-xs font-bold text-gray-300 uppercase tracking-wider ml-1">Password</label>
            <div className="relative group">
              <Lock className="absolute left-4 top-3.5 text-gray-400 group-focus-within:text-orange-500 transition-colors" size={20} />
              <input
                type={showPassword ? "text" : "password"}
                className="w-full pl-12 pr-12 py-3.5 bg-white/5 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:bg-white/10 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20 outline-none transition-all"
                placeholder="••••••••"
                onChange={(e) => setCreds({ ...creds, password: e.target.value })}
                required
              />
              
              {/* Eye Toggle Button */}
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-3.5 text-gray-400 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Submit Button (UPDATED COLOR HERE) */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 bg-gradient-to-r from-orange-500 to-green-500 hover:from-orange-600 hover:to-green-600 text-white font-bold rounded-xl shadow-lg transform active:scale-[0.98] transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed mt-4"
          >
            {loading ? (
              <>
                <Loader2 className="animate-spin" size={20} /> Authenticating...
              </>
            ) : (
              "Login to Dashboard"
            )}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-2 mb-2 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} KSG Corporate Services.
        </div>
      </div>
    </div>
  );
}