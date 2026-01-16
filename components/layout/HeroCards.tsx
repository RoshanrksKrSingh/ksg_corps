import { ZoomIn, Users, Clock, MonitorSmartphone } from 'lucide-react';

const HeroCards = () => {
  const cards = [
    {
      icon: ZoomIn,
      title: "Analyze Your Business",
      fullText: "Our team is well equipped to analyse all aspects of your business and provide solution to ensure they are maximising shareholder value. Provide framework for how a company will create value."
    },
    {
      icon: Users,
      title: "A Team of Professionals",
      text: "Our Team members are qualified professional (Chartered Accountant, ACCA, MBA) having different industries experience and are able to handle your business operation with integrity and efficiency."
    },
    {
      icon: Clock,
      title: "Unparalleled Client Engagement",
      text: "Gaining a competitive edge through unparalleled customer service. Exceptional client engagement which goes beyond doing what is necessary for our client to truly caring about the client."
    },
    {
      icon: MonitorSmartphone,
      title: "Advanced IT Solutions",
      text: "Our IT wing comprises qualified Computer Science Engineers (B.Tech, M.Tech, BCA, MCA) specializing in Web & App Development, Digital Marketing, and Blockchain technologies to future-proof your business."
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-6 max-w-[90rem] mx-auto px-4 sm:px-6 relative z-20 bg-[#041D2D]">
      {cards.map((card, index) => (
        <div 
          key={index} 
          className="group relative bg-[#041D2D] backdrop-blur-md text-white p-6 rounded-xl  border-t-4 border-t-orange-500 border-x border-b border-white/10 hover:-translate-y-3 transition-all duration-300 flex flex-col h-full"
        >
           {/* Decorative background element */}
           <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
              <card.icon size={80} className="md:w-[90px] md:h-[90px]" />
           </div>

           {/* Icon Container */}
           <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300  flex-shrink-0">
             <card.icon size={32} className="text-white" strokeWidth={1.5} />
           </div>

           {/* ✅ Heading: Orange + Green Gradient (Always Visible) */}
           <h3 className="text-[11px] font-bold mb-4 tracking-wide uppercase text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400">
             {card.title}
           </h3>
           
           {/* Divider Line */}
           <div className="w-12 h-1 bg-gray-500 mb-4 rounded group-hover:w-20 group-hover:bg-orange-500 transition-all duration-300"></div>

           {/* ✅ Paragraph: Blue + Green + Orange Gradient (Always Visible) */}
           {/* 'from-blue-300 via-green-300 to-orange-300' ensures readability on dark background */}
           <p className="text-sm leading-relaxed text-justify flex-grow text-transparent bg-clip-text bg-gradient-to-br from-blue-300 via-green-300 to-orange-300">
             {card.fullText || card.text}
           </p>
        </div>
      ))}
    </div>
  );
};

export default HeroCards;