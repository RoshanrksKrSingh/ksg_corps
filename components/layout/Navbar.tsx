"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, ChevronDown, ChevronRight,
  FileText, BarChart3, Wallet, 
  Users, Briefcase, Lightbulb,
  Building, Scale 
} from 'lucide-react';

// ================== DATA ==================
const megaMenuData = {
  accounting: { 
    id: 'accounting', 
    label: 'Accounting & Audit Support', 
    icon: FileText, 
    items: [
      { label: "Overview",  href: "/services/accounting" },
      { label: "Accounting and Book Keeping", href: "/services/accounting/book-keeping" },
      { label: "Outsourced Payroll Services", href: "/services/accounting/payroll" },
      { label: "IFRS Advisory Services", href: "/services/accounting/ifrs" },
      { label: "Financial Audit Support", href: "/services/accounting/financial-audit" },
      { label: "Financial Statement Preparation", href: "/services/accounting/financial-statement" } 
    ] 
  },
  
  auditing: { 
    id: 'auditing', 
    label: 'Risk Advisory', 
    icon: BarChart3, 
    items: [
        { label: "Overview", href: "/services/auditing" },
        { label: "Financial Audit Support", href: "/services/auditing/financial-audit" },
        { label: "Stock Audit and Verification", href: "/services/auditing/stock-audit" },
        { label: "Internal Audit", href: "/services/auditing/internal-audit" },
        { label: "Standard Operating Procedure (SOP)", href: "/services/auditing/sop" },
        { label: "Forensic and Fraud Audit", href: "/services/auditing/forensic-audit" },
        { label: "Internal Control (ICFR)", href: "/services/auditing/icfr" },
        { label: "Enterprise Risk Management (ERM)", href: "/services/auditing/erm" },
        { label: "Anti-Money Laundering", href: "/services/auditing/aml" },
    ] 
  },

  tax: { 
    id: 'tax', 
    label: 'TAX Advisory', 
    icon: Wallet, 
    items: [
        { label: "Overview", href: "/services/tax" },
        { label: "International Taxation & Transfer Pricing", href: "/services/tax/international-tax" },
        { label: "VAT/Excise Compliance", href: "/services/tax/vat-compliance" },
        { label: "VAT/Excise Health Checks", href: "/services/tax/vat-health-check" },
        { label: "VAT/Excise Registration/Deregistration", href: "/services/tax/vat-registration" },
        { label: "VAT/Excise Audit Support", href: "/services/tax/vat-audit" },
        { label: "VAT Refund Support", href: "/services/tax/vat-refund" },
        { label: "Voluntary Disclosure", href: "/services/tax/voluntary-disclosure" }
    ] 
  },

  businessSetup: { 
    id: 'businessSetup', 
    label: 'Business Setup/PRO', 
    icon: Building, 
    items: [
        { label: "Overview", href: "/services/business-setup" },
        { label: "UAE Mainland Company Formation", href: "/services/business-setup/mainland" },
        { label: "Free Zone Company Formation", href: "/services/business-setup/freezone" },
        { label: "Offshore Company Formation", href: "/services/business-setup/offshore" },
        { label: "Sponsorship Services", href: "/services/business-setup/sponsorship" },
        { label: "Corporate PRO Services", href: "/services/business-setup/pro-services" },
        { label: "Company Liquidation", href: "/services/business-setup/liquidation" }
    ] 
  },

  legal: { 
    id: 'legal', 
    label: 'Legal Advisory', 
    icon: Scale, 
    items: [
        { label: "Overview", href: "/services/legal-advisory" },
        { label: "Labour Law Advisory", href: "/services/legal-advisory/labour-law" },
        { label: "Corporate & Commercial Law", href: "/services/legal-advisory/corporate-law" },
        { label: "Litigation & Dispute Resolution", href: "/services/legal-advisory/litigation" },
        { label: "Anti-Money Laundering", href: "/services/legal-advisory/aml" },
        { label: "Economic Substance Advisory", href: "/services/legal-advisory/esr" },
        { label: "Ultimate Beneficial Owner Advisory", href: "/services/legal-advisory/ubo" }
    ] 
  }
};

const randomMenuData = {
  insight: { 
    title: "Insights", 
    icon: Lightbulb, 
    items: [
      { label: "Latest News", href: "/insights?cat=news" }, 
      { label: "Blogs", href: "/insights?cat=blogs" }, 
      { label: "Account and Auditing", href: "/insights?cat=audit" }, 
      { label: "Events", href: "/insights?cat=events" } 
    ] 
  },
  ourTeam: { 
    title: "Our Team", 
    icon: Users, 
    items: [
      { label: "Overview", href: "/ourteam" }, 
      { label: "Advisors", href: "/ourteam#advisors" },
      { label: "Associated Partners", href: "/ourteam#associated-partners" },
      { label: "Group Partners", href: "/ourteam#group-partners" } 
    ] 
  },
  career: { 
    title: "Career", 
    icon: Briefcase, 
    items: [
      { label: "Career With Us", href: "/career" },
      { label: "Job Openings", href: "/career/openings" },
    ] 
  }
};

const Navbar = ({ forceStatic = false }: { forceStatic?: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('accounting');
  const [scrolled, setScrolled] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  
  const pathname = usePathname();

  const toggleMobile = (key: string) => {
    setMobileExpanded(mobileExpanded === key ? null : key);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActiveLink = (path: string) => {
    if (path.includes('#')) {
       return pathname === path.split('#')[0];
    }
    return pathname === path;
  };

  return (
    <header 
      className={`fixed z-50 font-sans transition-all duration-300 ${
        scrolled || forceStatic
          ? "top-0 left-2 right-2 bg-[#0b2b3f] rounded-2xl py-0 shadow-lg" 
          : "top-0 left-2 -right-2 md:-right-10 bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-6 ml-[-2.5rem]">
        <div className="flex justify-between items-center h-20"> 
          
          {/* LOGO */}
          <div className="flex-shrink-0 z-50">
            <Link href="/">
              <img 
                src="http://ksgcorps.com/wp-content/uploads/2021/11/ksg-logo-white.png"
                alt="KSG Logo" 
                className={`object-contain object-left transition-all duration-300 h-40 w-auto `} 
              />
            </Link>
          </div>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center">
            <nav className="flex items-center space-x-6 xl:space-x-8">
              
              <Link 
                href="/" 
                className={`font-semibold transition text-sm tracking-wide relative group ${
                    isActiveLink("/") ? "text-green-400" : "text-white hover:text-green-400"
                }`}
              >
                Home
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 transition-all duration-300 ${isActiveLink("/") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>

              {/* SERVICES MEGA MENU */}
              <div className="group static h-full flex items-center"> 
                <button className={`flex items-center gap-1 font-semibold transition text-sm tracking-wide py-6 relative ${pathname?.startsWith('/services') ? "text-green-400" : "text-white hover:text-green-400"}`}>
                  Services <ChevronDown size={14} />
                  <span className={`absolute bottom-4 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 transition-all duration-300 ${pathname?.startsWith('/services') ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </button>
                
                <div className={`absolute left-0 top-full bg-[#041D2D] backdrop-blur-2xl text-white border border-brand-accent/30 rounded-[2rem] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden shadow-2xl mt-2 ${
                    scrolled || forceStatic ? "right-0" : "right-4 md:right-12"
                }`}>
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
                   <div className="max-w-7xl mx-auto px-8 py-4 relative z-10">
                      
                      {/* TABS HEADER */}
                      <div className="flex items-center justify-center border-b border-white/10 mb-8 space-x-6">
                        {Object.values(megaMenuData).map((tab) => {
                          const Icon = tab.icon;
                          const isActiveTab = activeTab === tab.id;
                          return (
                            <button
                              key={tab.id}
                              onMouseEnter={() => setActiveTab(tab.id)}
                              className={`flex items-center gap-2 pb-4 text-sm font-bold tracking-wide transition-all duration-300 relative ${
                                isActiveTab ? "text-brand-accent" : "text-white-400 hover:text-white"
                              }`}
                            >
                              <Icon size={18} /> {tab.label}
                              {isActiveTab && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-green-500 shadow-[0_0_10px_#00A651]"></span>}
                            </button>
                          );
                        })}
                      </div>

                      {/* TABS CONTENT */}
                      <div className="min-h-[300px]">
                           <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                              {megaMenuData[activeTab as keyof typeof megaMenuData].items?.map((item: any, idx: number) => {
                                const label = typeof item === 'string' ? item : item.label;
                                const href = typeof item === 'string' ? '#' : item.href;
                                const isActive = isActiveLink(href);

                                return (
                                  <Link key={idx} href={href} className={`group/link flex items-center gap-3 p-2 rounded-lg transition-all ${isActive ? "bg-white/10" : "hover:bg-white/5"}`}>
                                     <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-green-500 transition-transform ${isActive ? "scale-125" : "group-hover/link:scale-125"}`}></div>
                                     <span className={`text-sm transition-transform ${isActive ? "text-green-400 translate-x-1" : "text-white group-hover/link:text-white group-hover/link:translate-x-1"}`}>{label}</span>
                                  </Link>
                                );
                              })}
                           </div>
                      </div>
                   </div>
                </div>
              </div>

              {/* INSIGHTS */}
              <div className="group relative h-full flex items-center">
                <button className={`flex items-center gap-1 font-semibold transition text-sm tracking-wide py-6 relative ${pathname?.startsWith('/insights') ? "text-green-400" : "text-white hover:text-green-400"}`}>
                    Insights <ChevronDown size={14} />
                    <span className={`absolute bottom-4 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 transition-all duration-300 ${pathname?.startsWith('/insights') ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </button>
                 <div className="absolute left-0 top-full w-56 bg-[#041D2D] backdrop-blur-xl text-white border border-brand-accent/30 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden shadow-2xl py-2 mt-2">
                    <ul>
                    {randomMenuData.insight.items.map((item: any, idx) => (
                        <li key={idx}>
                        <Link href={item.href} className={`block px-5 py-2 text-sm transition-colors border-b border-white/5 last:border-0 ${isActiveLink(item.href) ? "bg-white/10 text-green-400" : "hover:bg-white/10 hover:text-brand-accent"}`}>
                            {item.label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
              </div>

              {/* OUR TEAM */}
              <div className="group relative h-full flex items-center">
                <button className={`flex items-center gap-1 font-semibold transition text-sm tracking-wide py-6 relative ${pathname?.startsWith('/ourteam') ? "text-green-400" : "text-white hover:text-green-400"}`}>
                    Our Team <ChevronDown size={14} />
                    <span className={`absolute bottom-4 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 transition-all duration-300 ${pathname?.startsWith('/ourteam') ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </button>
                 <div className="absolute left-0 top-full w-56 bg-[#041D2D] backdrop-blur-xl text-white border border-brand-accent/30 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden shadow-2xl py-2 mt-2">
                    <ul>
                    {randomMenuData.ourTeam.items.map((item: any, idx) => (
                        <li key={idx}>
                        <Link href={item.href} className={`block px-5 py-2 text-sm transition-colors border-b border-white/5 last:border-0 ${isActiveLink(item.href) ? "bg-white/10 text-green-400" : "hover:bg-white/10 hover:text-brand-accent"}`}>
                            {item.label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
              </div>

              {/* CAREER */}
              <div className="group relative h-full flex items-center">
                <button className={`flex items-center gap-1 font-semibold transition text-sm tracking-wide py-6 relative ${pathname?.startsWith('/career') ? "text-green-400" : "text-white hover:text-green-400"}`}>
                    Career <ChevronDown size={14} />
                    <span className={`absolute bottom-4 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 transition-all duration-300 ${pathname?.startsWith('/career') ? "w-full" : "w-0 group-hover:w-full"}`}></span>
                </button>
                 <div className="absolute left-0 top-full w-56 bg-[#041D2D] backdrop-blur-xl text-white border border-brand-accent/30 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden shadow-2xl py-2 mt-2">
                    <ul>
                    {randomMenuData.career.items.map((item: any, idx) => (
                        <li key={idx}>
                        <Link href={item.href} className={`block px-5 py-2 text-sm transition-colors border-b border-white/5 last:border-0 ${isActiveLink(item.href) ? "bg-white/10 text-green-400" : "hover:bg-white/10 hover:text-brand-accent"}`}>
                            {item.label}
                        </Link>
                        </li>
                    ))}
                    </ul>
                </div>
              </div>

              <Link 
                href="/contact" 
                className={`font-semibold transition text-sm tracking-wide relative group ${
                    isActiveLink("/contact") ? "text-green-400" : "text-white hover:text-green-400"
                }`}
              >
                Contact
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 transition-all duration-300 ${isActiveLink("/contact") ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </Link>

            </nav>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="lg:hidden flex items-center z-50 absolute right-4 top-1/2 -translate-y-1/2">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white hover:text-brand-accent transition p-2 focus:outline-none">
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER */}
      <div 
        className={`fixed inset-y-0 right-0 z-40 w-[85%] max-w-sm bg-[#041D2D] shadow-2xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
         <div className="h-full overflow-y-auto px-6 pb-6 pt-24 flex flex-col">
            <div className="space-y-4 flex-grow">
                <Link href="/" className={`block font-bold text-lg border-b border-gray-700 pb-2 ${isActiveLink("/") ? "text-green-400" : "text-white"}`} onClick={() => setIsOpen(false)}>Home</Link>
                
                {/* Services Section */}
                <div className="space-y-1">
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 font-bold  text-xs tracking-widest mb-2">Services</p>
                  
                  {/* Accounting */}
                  <div>
                    <button onClick={() => toggleMobile('acc')} className="w-full flex justify-between text-gray-300 text-sm py-1.5 hover:text-white items-center">
                        Accounting & Audit Support {mobileExpanded === 'acc' ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === 'acc' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 border-l border-gray-700 ml-1 py-1 space-y-1">
                            {megaMenuData.accounting.items.map((item: any, i) => (
                                <Link key={i} href={item.href} onClick={() => setIsOpen(false)} className={`block text-xs py-1 ${isActiveLink(item.href) ? "text-green-400 font-bold" : "text-gray-400 hover:text-white"}`}>{item.label}</Link>
                            ))}
                        </div>
                    </div>
                  </div>

                  {/* Auditing */}
                  <div>
                    <button onClick={() => toggleMobile('audit')} className="w-full flex justify-between text-gray-300 text-sm py-1.5 hover:text-white items-center">
                        Risk Advisory {mobileExpanded === 'audit' ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === 'audit' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 border-l border-gray-700 ml-1 py-1 space-y-1">
                            {megaMenuData.auditing.items.map((item: any, i) => (
                                <Link key={i} href={item.href} onClick={() => setIsOpen(false)} className={`block text-xs py-1 ${isActiveLink(item.href) ? "text-green-400 font-bold" : "text-gray-400 hover:text-white"}`}>{item.label}</Link>
                            ))}
                        </div>
                    </div>
                  </div>

                  {/* Tax */}
                  <div>
                    <button onClick={() => toggleMobile('tax')} className="w-full flex justify-between text-gray-300 text-sm py-1.5 hover:text-white items-center">
                        Tax Advisory {mobileExpanded === 'tax' ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === 'tax' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 border-l border-gray-700 ml-1 py-1 space-y-1">
                            {megaMenuData.tax.items.map((item: any, i) => (
                                <Link key={i} href={item.href} onClick={() => setIsOpen(false)} className={`block text-xs py-1 ${isActiveLink(item.href) ? "text-green-400 font-bold" : "text-gray-400 hover:text-white"}`}>{item.label}</Link>
                            ))}
                        </div>
                    </div>
                  </div>

                  {/* ✅ Business Setup (Moved from Other) */}
                  <div>
                    <button onClick={() => toggleMobile('businessSetup')} className="w-full flex justify-between text-gray-300 text-sm py-1.5 hover:text-white items-center">
                        Business Setup/PRO {mobileExpanded === 'businessSetup' ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === 'businessSetup' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 border-l border-gray-700 ml-1 py-1 space-y-1">
                            {megaMenuData.businessSetup.items.map((item: any, i) => (
                                <Link key={i} href={item.href} onClick={() => setIsOpen(false)} className={`block text-xs py-1 ${isActiveLink(item.href) ? "text-green-400 font-bold" : "text-gray-400 hover:text-white"}`}>{item.label}</Link>
                            ))}
                        </div>
                    </div>
                  </div>

                  {/* ✅ Legal Advisory (Moved from Other) */}
                  <div>
                    <button onClick={() => toggleMobile('legal')} className="w-full flex justify-between text-gray-300 text-sm py-1.5 hover:text-white items-center">
                        Legal Advisory {mobileExpanded === 'legal' ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === 'legal' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 border-l border-gray-700 ml-1 py-1 space-y-1">
                            {megaMenuData.legal.items.map((item: any, i) => (
                                <Link key={i} href={item.href} onClick={() => setIsOpen(false)} className={`block text-xs py-1 ${isActiveLink(item.href) ? "text-green-400 font-bold" : "text-gray-400 hover:text-white"}`}>{item.label}</Link>
                            ))}
                        </div>
                    </div>
                  </div>

                </div>

                <div className="space-y-1 pt-2 border-t border-gray-700">
                   <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 font-bold  text-xs tracking-widest mb-2">Explore</p>
                   
                   {/* Insight */}
                   <div>
                    <button onClick={() => toggleMobile('insight')} className="w-full flex justify-between text-gray-300 text-sm py-1.5 hover:text-white items-center">
                        Insight {mobileExpanded === 'insight' ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === 'insight' ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 border-l border-gray-700 ml-1 py-1 space-y-1">
                            {randomMenuData.insight.items.map((item, i) => (
                                <Link key={i} href={item.href} onClick={() => setIsOpen(false)} className={`block text-xs py-1 ${isActiveLink(item.href) ? "text-green-400 font-bold" : "text-gray-400 hover:text-white"}`}>{item.label}</Link>
                            ))}
                        </div>
                    </div>
                   </div>

                   {/* Our Team Mobile */}
                   <div>
                    <button onClick={() => toggleMobile('ourTeam')} className="w-full flex justify-between text-gray-300 text-sm py-1.5 hover:text-white items-center">
                        Our Team {mobileExpanded === 'ourTeam' ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === 'ourTeam' ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 border-l border-gray-700 ml-1 py-1 space-y-1">
                            {randomMenuData.ourTeam.items.map((item: any, i) => (
                                <Link key={i} href={item.href} onClick={() => setIsOpen(false)} className={`block text-xs py-1 ${isActiveLink(item.href) ? "text-green-400 font-bold" : "text-gray-400 hover:text-white"}`}>{item.label}</Link>
                            ))}
                        </div>
                    </div>
                   </div>

                   {/* Career */}
                   <div>
                    <button onClick={() => toggleMobile('career')} className="w-full flex justify-between text-gray-300 text-sm py-1.5 hover:text-white items-center">
                        Career {mobileExpanded === 'career' ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === 'career' ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 border-l border-gray-700 ml-1 py-1 space-y-1">
                            {randomMenuData.career.items.map((item, i) => (
                                <Link key={i} href={item.href} onClick={() => setIsOpen(false)} className={`block text-xs py-1 ${isActiveLink(item.href) ? "text-green-400 font-bold" : "text-gray-400 hover:text-white"}`}>{item.label}</Link>
                            ))}
                        </div>
                    </div>
                   </div>

                </div>

                <Link href="/contact" className={`block font-bold text-lg pt-2 border-t border-gray-700 ${isActiveLink("/contact") ? "text-green-400" : "text-white"}`} onClick={() => setIsOpen(false)}>Contact</Link>
            </div>
            
            <div className="mt-6 mb-4">
                <button className="w-full py-3 rounded-full bg-gradient-to-r from-orange-500 to-green-600 text-white font-bold uppercase tracking-wider shadow-lg text-sm">
                    Get In Touch
                </button>
            </div>
         </div>
      </div>
      
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm lg:hidden"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

    </header>
  );
};

export default Navbar;