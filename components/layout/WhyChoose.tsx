"use client";

import { UserCheck, Headset, ShieldCheck } from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      icon: UserCheck,
      title: "Experienced Advisors",
      desc: "Qualified professional having different industries experience",
      gradient: "from-orange-500 to-pink-500", // Icon Background Gradient
      textGradient: "from-orange-200 via-white to-pink-200", // Text Gradient
    },
    {
      icon: Headset,
      title: "24/7 Dedicated Team Support",
      desc: "Our dedicated team will be available 24/7",
      gradient: "from-blue-500 to-cyan-500",
      textGradient: "from-blue-200 via-white to-cyan-200",
    },
    {
      icon: ShieldCheck,
      title: "Unparalleled Quality",
      desc: "We believe in high integrity & quality",
      gradient: "from-green-500 to-emerald-600",
      textGradient: "from-green-200 via-white to-emerald-200",
    },
  ];

  return (
    <section className="relative w-full py-20 bg-[#041D2D] overflow-hidden">
      {/* --- Background Elements --- */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-20 left-[-100px] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-20 right-[-100px] w-96 h-96 bg-green-600/20 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* --- HEADER SECTION --- */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-green-400 font-bold uppercase text-base tracking-widest">
              Why Choose Us
            </span>
          </span>

          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-green-200">
            We bring our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-pink-500">
              expertise
            </span>{" "}
            and{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              integrity
            </span>{" "}
            to your business
          </h2>

          <p className="text-transparent bg-clip-text bg-gradient-to-br from-gray-200 via-blue-100 to-gray-200 text-base md:text-lg leading-relaxed">
            Our firm represents a combination of specialized skills that is
            geared to offer sound corporate solutions and advices. The
            organization is a congregation of professionally qualified and
            experienced advisors who are committed to add value and optimize the
            benefits accruing to clients.
          </p>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT: IMAGE (Styled) */}
          <div className="relative group">
            {/* Image Border/Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 to-green-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000"></div>

            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2041629/pexels-photo-2041629.jpeg"
                alt="Why Choose Us"
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay Gradient on Image */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#041D2D] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>

          {/* RIGHT: FEATURE CARDS */}
          <div className="space-y-6">
            {features.map((item, idx) => (
              <div
                key={idx}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-x-[-10px]"
              >
                <div className="flex items-start gap-5">
                  {/* Icon Box */}
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center  flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <item.icon className="text-white" size={28} />
                  </div>

                  {/* Text Content */}
                  <div>
                    <h3
                      className={`text-sm md:text-xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r ${item.gradient}`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`text-xs md:text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r ${item.textGradient}`}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
