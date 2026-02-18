import React from "react";
import { FaWhatsapp, FaRegCompass, FaAward, FaUsers, FaGlobe } from "react-icons/fa";

const OasisLuxury = () => {
  const handleContact = () => {
    const msg = encodeURIComponent("Hello! I want to learn more about Oasis Luxury Travel & Tourism services.");
    window.open(`https://wa.me/971509813991?text=${msg}`, "_blank");
  };

  const stats = [
    { icon: <FaRegCompass />, label: "Unique Tours", value: "500+" },
    { icon: <FaUsers />, label: "Happy Clients", value: "10k+" },
    { icon: <FaAward />, label: "Awards Won", value: "15" },
    { icon: <FaGlobe />, label: "Destinations", value: "40+" },
  ];

  return (
    <div className="w-full bg-white font-sans overflow-hidden">
      {/* 🔹 Hero Section - Brand Story */}
      <section className="relative h-[60vh] flex items-center bg-[#003366]">
        <div className="absolute inset-0 opacity-40 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2070&auto=format&fit=crop" 
            alt="Dubai Skyline" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <h4 className="text-[#C4B454] font-black uppercase tracking-[0.5em] text-xs mb-4">Established Excellence</h4>
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase leading-none mb-6">
            Oasis Luxury <br /> <span className="text-[#C4B454]">Travel & Tourism</span>
          </h1>
          <div className="h-2 w-32 bg-[#C4B454]"></div>
        </div>
      </section>

      {/* 🔹 Our Journey (Split Layout) */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <h2 className="text-[#003366] text-3xl md:text-5xl font-black uppercase mb-8 leading-tight">
              Redefining the <br /> <span className="text-[#C4B454]">Art of Travel</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-6">
              Based in the heart of Dubai, **Oasis Luxury Travel & Tourism** is more than a travel agency. We are architects of experience. Since our inception, we have dedicated ourselves to providing seamless, high-end travel solutions for the global citizen.
            </p>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Whether it's the thrill of a private desert safari, the spiritual peace of an Umrah journey, or the logistical precision of corporate visa services, we handle every detail with royal care.
            </p>
            <button 
              onClick={handleContact}
              className="px-10 py-5 bg-[#003366] text-white font-black uppercase tracking-widest hover:bg-[#C4B454] transition-all flex items-center gap-3 shadow-2xl"
            >
              Contact Our Director <FaWhatsapp size={20} />
            </button>
          </div>

          {/* Rectangular Image Grid */}
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 h-[500px]">
            <div className="h-full">
               <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover shadow-lg" alt="Heritage" />
            </div>
            <div className="grid grid-rows-2 gap-4 h-full">
               <img src="https://images.unsplash.com/photo-1544161515-4ad6ce6db874?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover shadow-lg" alt="Luxury Spa" />
               <img src="https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=600&auto=format&fit=crop" className="w-full h-full object-cover shadow-lg" alt="Private Jet" />
            </div>
          </div>
        </div>
      </section>

      {/* 🔹 Stats Section */}
      <section className="bg-[#E6F0F8] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-[#C4B454] text-4xl mb-4">{stat.icon}</div>
                <h3 className="text-[#003366] text-3xl font-black mb-1">{stat.value}</h3>
                <p className="text-gray-400 font-bold uppercase text-[10px] tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Core Values */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto border-t border-gray-100 pt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            <div>
              <h3 className="text-[#003366] font-black uppercase text-xl mb-4 italic">01. Integrity</h3>
              <p className="text-gray-500 text-sm leading-loose">We believe in transparent pricing and honest consultations. No hidden fees, just pure service.</p>
            </div>
            <div>
              <h3 className="text-[#003366] font-black uppercase text-xl mb-4 italic">02. Excellence</h3>
              <p className="text-gray-500 text-sm leading-loose">From the 4x4 vehicles we use in the desert to the hotels we select, only the best is acceptable.</p>
            </div>
            <div>
              <h3 className="text-[#003366] font-black uppercase text-xl mb-4 italic">03. Support</h3>
              <p className="text-gray-500 text-sm leading-loose">Our 24/7 concierge support means you are never alone, no matter where in the world you are.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OasisLuxury;