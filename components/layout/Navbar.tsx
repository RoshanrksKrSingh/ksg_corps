"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from "@/components/ui/ThemeToggle"; 
import { 
  Menu, X, ChevronDown, ChevronRight, 
  FileText, BarChart3, Wallet, 
  Building, Briefcase, Lightbulb 
} from 'lucide-react';
import NotificationBar from "@/components/ui/NotificationBar"; // ✅ Import

// ... (MEGA MENU DATA CONSTANTS - KEPT EXACTLY SAME) ...
const megaMenuData = {
  accounting: { id: 'accounting', label: 'Accounting & Audit Support', icon: FileText, items: [{ label: "Overview",  href: "/services/accounting" }, { label: "Accounting and Book Keeping", href: "/services/accounting/book-keeping" }, { label: "Outsourced Payroll Services", href: "/services/accounting/payroll" }, { label: "Financial Audit Support", href: "/services/accounting/financial-audit" }, { label: "IFRS Advisory Services", href: "/services/accounting/ifrs" }, { label: "Stock Audit and Verification", href: "/services/accounting/stock-audit" }] },
  tax: { id: 'tax', label: 'TAX Advisory', icon: Wallet, items: [{ label: "Overview", href: "/services/tax" }, { label: "International Taxation", href: "/services/tax/international-tax" }, { label: "VAT/Excise Compliance", href: "/services/tax/vat-compliance" }, { label: "VAT/Excise Health Checks", href: "/services/tax/vat-health-check" }, { label: "VAT Registration", href: "/services/tax/vat-registration" }, { label: "VAT/Excise Audit Support", href: "/services/tax/vat-audit" }, { label: "VAT Refund Support", href: "/services/tax/vat-refund" }, { label: "Voluntary Disclosure", href: "/services/tax/voluntary-disclosure" }] },
  businessSetup: { id: 'businessSetup', label: 'Business Setup/PRO', icon: Building, items: [{ label: "Overview", href: "/services/business-setup" }, { label: "Mainland Company Formation", href: "/services/business-setup/mainland" }, { label: "Free Zone Company Formation", href: "/services/business-setup/freezone" }, { label: "Offshore Company Formation", href: "/services/business-setup/offshore" }, { label: "Sponsorship Services", href: "/services/business-setup/sponsorship" }, { label: "Corporate PRO Services", href: "/services/business-setup/pro-services" }, { label: "Company Liquidation", href: "/services/business-setup/liquidation" }] },
  risk: { id: 'risk', label: 'Risk Advisory', icon: BarChart3, items: [{ label: "Overview", href: "/services/risk" }, { label: "Internal Audit", href: "/services/risk/internal-audit" }, { label: "Standard Operating Procedure (SOP)", href: "/services/risk/sop" }, { label: "Forensic and Fraud Audit", href: "/services/risk/forensic-audit" }, { label: "Internal Control (ICFR)", href: "/services/risk/icfr" }, { label: "Enterprise Risk (ERM)", href: "/risk/auditing/erm" }, { label: "Anti-Money Laundering", href: "/services/risk/aml" }] },
};
const randomMenuData = {
  insight: { title: "Insights", icon: Lightbulb, items: [{ label: "Latest Blogs", href: "/insights?cat=blogs" }, { label: "Account & Audit", href: "/insights?cat=audit" }, { label: "Tax Advisory", href: "/insights?cat=tax" }, { label: "Business Setup/PRO", href: "/insights?cat=business" }, { label: "Risk Advisory", href: "/insights?cat=risk" }, { label: "Events", href: "/insights?cat=events" }] },
  career: { title: "Career", icon: Briefcase, items: [{ label: "Career With Us", href: "/career" }, { label: "Job Openings", href: "/career/openings" }] }
};

const Navbar = ({ forceStatic = false }: { forceStatic?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  const toggleMobile = (key: string) => {
    setMobileExpanded(mobileExpanded === key ? null : key);
  };
  
  const isActiveLink = (path: string) => {
    if (path.includes('#')) {
       return pathname === path.split('#')[0];
    }
    return pathname === path;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    // ✅ Navbar Container (Fixed Height logic maintained)
    <header className={`fixed top-0 left-0 w-full z-50 bg-[#10162d] font-sans transition-all duration-300 h-16 lg:h-16 xl:h-20 2xl:h-24 ${scrolled ? "rounded-2xl " : "rounded-t-2xl"}`}>
      
      <div className="max-w-7xl xl:max-w-[98%] w-full mx-auto px-4 sm:px-6 lg:px-6 h-full flex justify-between items-center transition-all duration-500 ">
          
          {/* LOGO (Left) */}
          <div className="flex-shrink-0 z-50 -ml-6 md:-ml-7 lg:-ml-5 xl:-ml-9">
            <Link href="/">
              <img 
                src="https://ik.imagekit.io/travechela/K__4_-removebg-preview.png"
                alt="KSG Logo" 
                className="object-contain object-left transition-all duration-300 h-30 md:h-30 lg:h-32 xl:h-42 2xl:h-45 w-auto" 
              />
            </Link>
          </div>

          {/* ✅ CENTER: NOTIFICATION BAR (Visible on All Devices) */}
          <NotificationBar />

          {/* RIGHT: MENU / TOGGLE */}
          <div className="flex items-center gap-4 flex-shrink-0">
            
            {/* DESKTOP MENU */}
            <div className="hidden lg:flex items-center"> 
              <nav className="flex items-center space-x-6 xl:space-x-10 2xl:space-x-16 transition-all duration-500">
                
                {/* Home */}
                <Link 
                  href="/" 
                  className={`font-medium tracking-wide relative group text-sm xl:text-base 2xl:text-2xl ${
                    isActiveLink("/") ? "text-green-400" : "text-white hover:text-green-400"
                  }`}
                >
                  Home
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-500 transition-all duration-300 ${isActiveLink("/") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>

                {/* Services Mega Menu */}
                <div className="group static h-full flex items-center py-4"> 
                  <button className={`flex items-center gap-1 font-medium tracking-wide text-sm xl:text-base 2xl:text-2xl ${pathname?.startsWith('/services') ? "text-green-400" : "text-white hover:text-green-400"}`}>
                    Services <ChevronDown className="w-3.5 h-3.5 xl:w-4 xl:h-4 2xl:w-6 2xl:h-6" />
                  </button>
                  
                  {/* Mega Menu Dropdown */}
                  <div className="absolute right-0 top-full w-[90vw] max-w-[80rem] 2xl:max-w-[110rem] bg-[#131a2e] backdrop-blur-2xl text-white border-t border-brand-accent/30 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 shadow-2xl mt-0 rounded-b-3xl overflow-hidden">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
                     <div className="w-full px-8 py-8 relative z-10">
                        <div className="grid grid-cols-4 gap-6 2xl:gap-12">
                            {Object.values(megaMenuData).map((category) => {
                               const Icon = category.icon;
                               return (
                                 <div key={category.id} className="space-y-3 border-l border-white/10 pl-6">
                                    <div className="flex items-center gap-2 pb-2 border-b border-white/20">
                                        <Icon className="text-blue-500 w-4 h-4 xl:w-5 xl:h-5 2xl:w-7 2xl:h-7" />
                                        <h3 className="font-bold tracking-wider text-green-400 text-xs xl:text-sm 2xl:text-xl">
                                            {category.label}
                                        </h3>
                                    </div>
                                    <ul className="space-y-1.5">
                                        {category.items.map((item, idx) => {
                                            const isItemActive = isActiveLink(item.href);
                                            return (
                                                <li key={idx}>
                                                    <Link 
                                                        href={item.href} 
                                                        className={`group/item flex items-center gap-2 transition-all duration-200 py-0.5 text-xs xl:text-sm 2xl:text-lg ${
                                                            isItemActive ? "text-green-400 font-bold translate-x-1" : "text-white hover:text-gray-300 hover:translate-x-1"
                                                        }`}
                                                    >
                                                        <span className={`w-1 h-1 2xl:w-2 2xl:h-2 rounded-full transition-colors ${isItemActive ? "bg-green-400" : "bg-gray-500 group-hover/item:bg-green-400"}`}></span>
                                                        {item.label}
                                                    </Link>
                                                </li>
                                            );
                                        })}
                                    </ul>
                                 </div>
                               );
                            })}
                        </div>
                     </div>
                  </div>
                </div>

                {/* Insights Dropdown */}
                <div className="group relative h-full flex items-center py-4">
                  <button className={`flex items-center gap-1 font-medium tracking-wide text-sm xl:text-base 2xl:text-2xl ${pathname?.startsWith('/insights') ? "text-green-400" : "text-white hover:text-green-400"}`}>
                      Insights <ChevronDown className="w-3.5 h-3.5 xl:w-4 xl:h-4 2xl:w-6 2xl:h-6" />
                  </button>
                   <div className="absolute right-0 top-full w-56 2xl:w-80 bg-[#131a2e] backdrop-blur-xl text-white border border-brand-accent/30 rounded-b-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden shadow-2xl py-2">
                     <ul>
                     {randomMenuData.insight.items.map((item: any, idx) => (
                         <li key={idx}>
                         <Link href={item.href} className={`block px-5 py-2 transition-colors border-b border-white/5 last:border-0 text-sm xl:text-base 2xl:text-xl ${isActiveLink(item.href) ? "bg-white/10 text-green-400 font-bold" : "hover:bg-white/10 hover:text-brand-accent"}`}>
                             {item.label}
                         </Link>
                         </li>
                     ))}
                     </ul>
                  </div>
                </div>

                {/* Career Dropdown */}
                <div className="group relative h-full flex items-center py-4">
                  <button className={`flex items-center gap-1 font-medium tracking-wide text-sm xl:text-base 2xl:text-2xl ${pathname?.startsWith('/career') ? "text-green-400" : "text-white hover:text-green-400"}`}>
                      Career <ChevronDown className="w-3.5 h-3.5 xl:w-4 xl:h-4 2xl:w-6 2xl:h-6" />
                  </button>
                   <div className="absolute right-0 top-full w-56 2xl:w-80 bg-[#131a2e] backdrop-blur-xl text-white border border-brand-accent/30 rounded-b-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden shadow-2xl py-2">
                     <ul>
                     {randomMenuData.career.items.map((item: any, idx) => (
                         <li key={idx}>
                         <Link href={item.href} className={`block px-5 py-2 transition-colors border-b border-white/5 last:border-0 text-sm xl:text-base 2xl:text-xl ${isActiveLink(item.href) ? "bg-white/10 text-green-400 font-bold" : "hover:bg-white/10 hover:text-brand-accent"}`}>
                             {item.label}
                         </Link>
                         </li>
                     ))}
                     </ul>
                  </div>
                </div>

                {/* Direct Links */}
                <Link href="/ourteam" className={`font-medium tracking-wide relative group text-sm xl:text-base 2xl:text-2xl ${isActiveLink("/ourteam") ? "text-green-400" : "text-white hover:text-green-400"}`}>
                  Our Team <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-500 transition-all duration-300 ${isActiveLink("/ourteam") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>

                <Link href="/contact" className={`font-medium tracking-wide relative group text-sm xl:text-base 2xl:text-2xl ${isActiveLink("/contact") ? "text-green-400" : "text-white hover:text-green-400"}`}>
                  Contact <span className={`absolute -bottom-1 left-0 h-0.5 bg-green-500 transition-all duration-300 ${isActiveLink("/contact") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </Link>

                {/* Theme Toggle */}
                <div className="ml-4 pl-4 border-l border-white/20 flex items-center">
                  <ThemeToggle />
                </div>

              </nav>
            </div>

            {/* MOBILE TOGGLE BUTTON */}
            <div className="lg:hidden flex items-center gap-4">
                <ThemeToggle />
                <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-green-400 transition p-2 focus:outline-none">
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>
          </div>

      </div>

      {/* MOBILE DRAWER */}
      <div className={`fixed inset-y-0 right-0 z-40 w-[85%] max-w-sm bg-[#041D2D] shadow-2xl transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
         {/* Mobile Menu Content (Same as before) */}
         <div className="h-full overflow-y-auto px-6 pb-6 pt-24 flex flex-col">
            <div className="space-y-4 flex-grow">
                <Link href="/" className={`block font-bold text-lg border-b border-gray-700 pb-2 ${isActiveLink("/") ? "text-green-400" : "text-white"}`} onClick={() => setIsOpen(false)}>Home</Link>
                
                {/* Mobile Menu Logic (Services) */}
                <div>
                  <button onClick={() => toggleMobile('services_main')} className="w-full flex justify-between font-bold text-lg border-b border-gray-700 pb-2 text-white items-center">
                      Services {mobileExpanded === 'services_main' ? <ChevronDown size={18}/> : <ChevronRight size={18}/>}
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === 'services_main' ? 'max-h-[1000px] opacity-100 py-2' : 'max-h-0 opacity-0'}`}>
                      {Object.values(megaMenuData).map((category) => (
                          <div key={category.id} className="mb-4 last:mb-0">
                              <h5 className="text-green-400 text-xs font-bold uppercase tracking-wider mb-2 flex items-center gap-2">
                                  <category.icon size={14}/> {category.label}
                              </h5>
                              <div className="pl-6 border-l border-gray-700 ml-1 space-y-2">
                                  {category.items.map((item, i) => (
                                      <Link key={i} href={item.href} onClick={() => setIsOpen(false)} className="flex items-center gap-2 text-xs text-gray-400 hover:text-white">
                                          <span className="w-1.5 h-1.5 rounded-full bg-gray-600"></span> {item.label}
                                      </Link>
                                  ))}
                              </div>
                          </div>
                      ))}
                  </div>
                </div>

                {/* Mobile Menu Logic (Insights) */}
                <div>
                 <button onClick={() => toggleMobile('insight')} className="w-full flex justify-between font-bold text-lg border-b border-gray-700 pb-2 text-white items-center">
                   Insight {mobileExpanded === 'insight' ? <ChevronDown size={18}/> : <ChevronRight size={18}/>}
                 </button>
                 <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === 'insight' ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 border-l border-gray-700 ml-1 py-1 space-y-1">
                        {randomMenuData.insight.items.map((item: any, i: number) => (
                            <Link key={i} href={item.href} onClick={() => setIsOpen(false)} className={`block text-xs py-1 ${isActiveLink(item.href) ? "text-green-400 font-bold" : "text-gray-400 hover:text-white"}`}>{item.label}</Link>
                        ))}
                    </div>
                 </div>
                </div>

                {/* Mobile Menu Logic (Career) */}
                <div>
                 <button onClick={() => toggleMobile('career')} className="w-full flex justify-between font-bold text-lg border-b border-gray-700 pb-2 text-white items-center">
                   Career {mobileExpanded === 'career' ? <ChevronDown size={18}/> : <ChevronRight size={18}/>}
                 </button>
                 <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === 'career' ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="pl-4 border-l border-gray-700 ml-1 py-1 space-y-1">
                        {randomMenuData.career.items.map((item: any, i: number) => (
                            <Link key={i} href={item.href} onClick={() => setIsOpen(false)} className={`block text-xs py-1 ${isActiveLink(item.href) ? "text-green-400 font-bold" : "text-gray-400 hover:text-white"}`}>{item.label}</Link>
                        ))}
                    </div>
                 </div>
                </div>

                <Link href="/ourteam" className="block font-bold text-lg border-b border-gray-700 pb-2 text-white" onClick={() => setIsOpen(false)}>Our Team</Link>
                <Link href="/contact" className="block font-bold text-lg border-b border-gray-700 pb-2 text-white" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
            
            <div className="mt-6 mb-4">
                <button className="w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-green-600 text-white font-bold uppercase tracking-wider shadow-lg text-sm">Get In Touch</button>
            </div>
         </div>
      </div>
      
      {isOpen && <div className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden" onClick={() => setIsOpen(false)}></div>}

    </header>
  );
};

export default Navbar;