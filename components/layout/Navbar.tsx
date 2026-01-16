"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Menu, X, ChevronDown, ChevronRight,
  FileText, BarChart3, Wallet, Grid,
  Users, Briefcase, Lightbulb 
} from 'lucide-react';

// ================== DATA ==================
const megaMenuData = {
  accounting: { id: 'accounting', label: 'Accounting', icon: FileText, items: ["Accounting and Book Keeping", "Outsourced Payroll Services", "IFRS Advisory Services", "Financial Statement Preparation"] },
  auditing: { id: 'auditing', label: 'Auditing', icon: BarChart3, items: ["Financial Audit Support", "Stock Audit and Verification", "Internal Audit", "Standard Operating Procedure (SOP)", "Forensic and Fraud Audit", "Internal Control (ICFR)", "Enterprise Risk Management (ERM)"] },
  tax: { id: 'tax', label: 'TAX Services', icon: Wallet, items: ["International Taxation & Transfer Pricing", "VAT/Excise Compliance", "VAT/Excise Health Checks", "VAT/Excise Registration/Deregistration", "VAT/Excise Audit Support", "VAT Refund Support", "Voluntary Disclosure"] },
  other: { id: 'other', label: 'Other Services', icon: Grid, categories: [
      { title: "Business Setup/PRO", items: ["UAE Mainland Company Formation", "Free Zone Company Formation", "Offshore Company Formation", "Sponsorship Services", "Corporate PRO Services", "Company Liquidation"] },
      { title: "Corporate Advisory", items: ["Business Strategic Formulation", "Organisational Restructuring", "Business Expansion Advisory", "Process Improvement", "Feasibility Studies", "Cross-Border Expansion", "Business Continuity Planning (BCP)"] },
      { title: "Legal Advisory", items: ["Labour Law Advisory", "Corporate and Commercial Law Advisory", "Litigation and Dispute Resolution", "Anti-Money Laundering", "Economic Substance Advisory", "Ultimate Beneficial Owner Advisory"] },
      { title: "Merger & Acquisition", items: ["Financial Due Diligence", "Tax Due Diligence", "Legal Due Diligence", "Operational Due Diligence", "Post-Merger Integration"] },
      { title: "Technology Advisory", items: ["Technology Consulting Services", "IT & Cyber Security Audit", "Robotic Process Automation (RPA)", "Cyber Security Management", "Managed Security Services (MSSP)"] },
      { title: "Digital & Development", items: ["Website Development", "App Development", "Blockchain Development", "Digital Marketing"] }
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
    items: ["Leadership", "Advisors", "Join Us", "Alumni Network"] 
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
                    pathname === "/" ? "text-brand-accent" : "text-white hover:text-brand-accent"
                }`}
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>

              {/* SERVICES MEGA MENU */}
              <div className="group static h-full flex items-center"> 
                <button className="flex items-center gap-1 font-semibold text-white hover:text-brand-accent transition text-sm  tracking-wide py-6 relative">
                  Services <ChevronDown size={14} />
                  <span className="absolute bottom-4 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
                
                {/* ✅ UPDATED: Adjusted Right Position for Symmetry */}
                <div className={`absolute left-0 top-full bg-[#041D2D] backdrop-blur-2xl text-white border border-brand-accent/30 rounded-[2rem] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden shadow-2xl mt-2 ${
                    scrolled || forceStatic ? "right-0" : "right-4 md:right-12"
                }`}>
                   <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
                   <div className="max-w-7xl mx-auto px-8 py-4 relative z-10">
                      
                      {/* TABS HEADER */}
                      <div className="flex items-center justify-center border-b border-white/10 mb-8 space-x-8">
                        {Object.values(megaMenuData).map((tab) => {
                          const Icon = tab.icon;
                          const isActive = activeTab === tab.id;
                          return (
                            <button
                              key={tab.id}
                              onMouseEnter={() => setActiveTab(tab.id)}
                              className={`flex items-center gap-2 pb-4 text-sm font-bold  tracking-wide transition-all duration-300 relative ${
                                isActive ? "text-brand-accent" : "text-white-400 hover:text-white"
                              }`}
                            >
                              <Icon size={18} /> {tab.label}
                              {isActive && <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-green-500 shadow-[0_0_10px_#00A651]"></span>}
                            </button>
                          );
                        })}
                      </div>

                      {/* TABS CONTENT */}
                      <div className="min-h-[300px]">
                        {activeTab !== 'other' ? (
                           <div className="grid grid-cols-3 gap-x-8 gap-y-4">
                              {megaMenuData[activeTab as keyof typeof megaMenuData].items?.map((item, idx) => (
                                <Link key={idx} href="#" className="group/link flex items-center gap-3 p-2 hover:bg-white/5 rounded-lg transition-all">
                                   <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-orange-500 to-green-500 group-hover/link:scale-125 transition-transform"></div>
                                   <span className="text-white text-sm group-hover/link:text-white group-hover/link:translate-x-1 transition-transform">{item}</span>
                                </Link>
                              ))}
                           </div>
                        ) : (
                          <div className="grid grid-cols-3 gap-x-8 gap-y-8">
                            {megaMenuData.other.categories.map((cat, idx) => (
                              <div key={idx}>
                                <div className="border-l-2 border-transparent relative pl-3 mb-2">
                                    <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500 to-green-500"></div>
                                    <h4 className="text-brand-accent font-bold  text-[12px]">{cat.title}</h4>
                                </div>
                                <ul className="space-y-1">
                                  {cat.items.map((item, i) => (
                                    <li key={i}><Link href="#" className="text-white hover:text-white text-[12px] hover:underline decoration-brand-accent/50 block py-0.5">{item}</Link></li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                   </div>
                </div>
              </div>

              {/* OTHER DROPDOWN MENUS */}
              {Object.entries(randomMenuData).map(([key, data]) => {
                const isParentActive = data.items.some((item: any) => {
                    const href = typeof item === 'object' ? item.href : '#';
                    const itemPath = href.split('?')[0]; 
                    return href !== '#' && pathname?.startsWith(itemPath);
                });

                return (
                    <div key={key} className="group relative h-full flex items-center">
                    <button className={`flex items-center gap-1 font-semibold transition text-sm tracking-wide py-6 relative ${
                        isParentActive ? "text-brand-accent" : "text-white hover:text-brand-accent"
                    }`}>
                        {data.title} <ChevronDown size={14} />
                        <span className="absolute bottom-4 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
                    </button>
                    <div className="absolute left-0 top-full w-56 bg-[#041D2D] backdrop-blur-xl text-white border border-brand-accent/30 rounded-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 overflow-hidden shadow-2xl py-2 mt-2">
                        <ul>
                        {data.items.map((item: any, idx) => {
                            const isObject = typeof item === 'object';
                            const label = isObject ? item.label : item;
                            const href = isObject ? item.href : "#";

                            return (
                                <li key={idx}>
                                <Link href={href} className="block px-5 py-2 hover:bg-white/10 hover:text-brand-accent text-sm transition-colors border-b border-white/5 last:border-0">
                                    {label}
                                </Link>
                                </li>
                            );
                        })}
                        </ul>
                    </div>
                    </div>
                );
              })}

              <Link 
                href="/contact" 
                className={`font-semibold transition text-sm tracking-wide relative group ${
                    pathname === "/contact" ? "text-brand-accent" : "text-white hover:text-brand-accent"
                }`}
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-green-500 transition-all duration-300 group-hover:w-full"></span>
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
                <Link href="/" className="block text-white font-bold text-lg border-b border-gray-700 pb-2" onClick={() => setIsOpen(false)}>Home</Link>
                
                <div className="space-y-1">
                  <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 font-bold  text-xs tracking-widest mb-2">Services</p>
                  
                  {/* Accounting Dropdown */}
                  <div>
                    <button onClick={() => toggleMobile('acc')} className="w-full flex justify-between text-gray-300 text-sm py-1.5 hover:text-white items-center">
                        Accounting & Audit {mobileExpanded === 'acc' ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === 'acc' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 border-l border-gray-700 ml-1 py-1 space-y-1">
                            {megaMenuData.accounting.items.map((item, i) => (
                                <Link key={i} href="#" onClick={() => setIsOpen(false)} className="block text-gray-400 text-xs py-1 hover:text-white">{item}</Link>
                            ))}
                            {megaMenuData.auditing.items.map((item, i) => (
                                <Link key={i} href="#" onClick={() => setIsOpen(false)} className="block text-gray-400 text-xs py-1 hover:text-white">{item}</Link>
                            ))}
                        </div>
                    </div>
                  </div>

                  {/* Tax Dropdown */}
                  <div>
                    <button onClick={() => toggleMobile('tax')} className="w-full flex justify-between text-gray-300 text-sm py-1.5 hover:text-white items-center">
                        Tax Services {mobileExpanded === 'tax' ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === 'tax' ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 border-l border-gray-700 ml-1 py-1 space-y-1">
                            {megaMenuData.tax.items.map((item, i) => (
                                <Link key={i} href="#" onClick={() => setIsOpen(false)} className="block text-gray-400 text-xs py-1 hover:text-white">{item}</Link>
                            ))}
                        </div>
                    </div>
                  </div>

                  {/* Other Dropdown */}
                  <div>
                    <button onClick={() => toggleMobile('other')} className="w-full flex justify-between text-gray-300 text-sm py-1.5 hover:text-white items-center">
                        Other Services {mobileExpanded === 'other' ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === 'other' ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 border-l border-gray-700 ml-1 py-1 space-y-3">
                            {megaMenuData.other.categories.map((cat, i) => (
                                <div key={i}>
                                    <p className="text-orange-400 text-[10px] font-bold uppercase mb-1">{cat.title}</p>
                                    {cat.items.map((item, j) => (
                                        <Link key={j} href="#" onClick={() => setIsOpen(false)} className="block text-gray-400 text-xs py-0.5 hover:text-white">{item}</Link>
                                    ))}
                                </div>
                            ))}
                        </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-1 pt-2 border-t border-gray-700">
                   <p className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 font-bold  text-xs tracking-widest mb-2">Explore</p>
                   
                   {/* Insight Dropdown */}
                   <div>
                    <button onClick={() => toggleMobile('insight')} className="w-full flex justify-between text-gray-300 text-sm py-1.5 hover:text-white items-center">
                        Insight {mobileExpanded === 'insight' ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === 'insight' ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 border-l border-gray-700 ml-1 py-1 space-y-1">
                            {randomMenuData.insight.items.map((item, i) => (
                                <Link key={i} href={item.href} onClick={() => setIsOpen(false)} className="block text-gray-400 text-xs py-1 hover:text-white">{item.label}</Link>
                            ))}
                        </div>
                    </div>
                   </div>

                   {/* Our Team Dropdown */}
                   <div>
                    <button onClick={() => toggleMobile('team')} className="w-full flex justify-between text-gray-300 text-sm py-1.5 hover:text-white items-center">
                        Our Team {mobileExpanded === 'team' ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === 'team' ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 border-l border-gray-700 ml-1 py-1 space-y-1">
                            {randomMenuData.ourTeam.items.map((item, i) => (
                                <Link key={i} href="#" onClick={() => setIsOpen(false)} className="block text-gray-400 text-xs py-1 hover:text-white">{item}</Link>
                            ))}
                        </div>
                    </div>
                   </div>

                   {/* Career Dropdown */}
                   <div>
                    <button onClick={() => toggleMobile('career')} className="w-full flex justify-between text-gray-300 text-sm py-1.5 hover:text-white items-center">
                        Career {mobileExpanded === 'career' ? <ChevronDown size={14}/> : <ChevronRight size={14}/>}
                    </button>
                    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${mobileExpanded === 'career' ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
                        <div className="pl-4 border-l border-gray-700 ml-1 py-1 space-y-1">
                            {randomMenuData.career.items.map((item, i) => (
                                <Link key={i} href={item.href} onClick={() => setIsOpen(false)} className="block text-gray-400 text-xs py-1 hover:text-white">{item.label}</Link>
                            ))}
                        </div>
                    </div>
                   </div>

                </div>

                <Link href="/contact" className="block text-white font-bold text-lg pt-2 border-t border-gray-700" onClick={() => setIsOpen(false)}>Contact</Link>
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