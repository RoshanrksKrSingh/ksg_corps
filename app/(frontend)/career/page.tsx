import Navbar from "@/components/layout/Navbar";
import InsightHeader from "@/components/ui/InsightHeader";
import Footer from "@/components/layout/Footer";
import CareerWithUs from "@/components/career/CareerWithUs"; 

export default function CareerPage() {
  return (
    <div className="bg-gray-50 font-sans">
      
      {/* 1. Navbar */}
      <Navbar forceStatic={true} />
            
             {/* 2. Spacer Div */}
             <div className="w-full h-20 bg-[#0b2b3f] rounded-2xl"></div>

      {/* 2. Header Section */}
      {/* <InsightHeader 
        title={
            // ✅ Updates: Font Size reduced to 'text-2xl md:text-4xl'
            <span className="text-2xl md:text-4xl font-bold">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-green-500">Career</span> With Us
            </span>
        }
        breadcrumb="Career With Us"
        image=""
      /> */}

      {/* 3. Static Content (Images, Text, Counter) */}
      <CareerWithUs />

      {/* 4. Footer */}
      <div className="rounded-b-2xl overflow-hidden">
         <Footer/>
      </div>
      
    </div>
  );
}