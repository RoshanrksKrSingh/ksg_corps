import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CareerWithUs from "@/components/career/CareerWithUs";

export default function CareerPage() {
  return (
    // ✅ Updated Main Wrapper: Added dark mode support to match child components
    <div className="bg-gray-50 dark:bg-[#09102d] font-sans transition-colors duration-300">
      {/* 1. Navbar */}
      <Navbar forceStatic={true} />

      {/* 2. Spacer Div */}
      <div className="w-full h-16  bg-[#0b2b3f]"></div>

      {/* 3. Static Content (Images, Text, Counter) */}
      <CareerWithUs />

      {/* 4. Footer - DISTINCT BACKGROUND (Same for both Light/Dark) */}
      <div className="relative z-30 bg-[#020617] border-t border-white/5">
        <Footer />
      </div>
    </div>
  );
}
