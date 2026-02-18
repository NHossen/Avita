import React from "react";
// Added FaWhatsapp to the imports so it is available if needed
import { FaWhatsapp, FaShieldAlt, FaFileSignature, FaUserTie } from "react-icons/fa";

const PremiumVisaService = () => {
  const features = [
    { icon: <FaShieldAlt />, title: "Secure Processing", desc: "Data privacy & document safety." },
    { icon: <FaFileSignature />, title: "Full Documentation", desc: "We handle all forms and letters." },
    { icon: <FaUserTie />, title: "Expert Consultants", desc: "Professional interview coaching." }
  ];

  const handleConsultation = () => {
    const msg = encodeURIComponent("Hello Oasis Luxury! I am looking for Premium Visa Assistance. Please connect me with a consultant.");
    window.open(`https://wa.me/971509813991?text=${msg}`, "_blank");
  };

  return (
    <section className="bg-white py-24 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[#003366] text-4xl md:text-5xl font-black uppercase mb-6">
          Premium <span className="text-[#C4B454]">Visa</span> Services
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-16 font-medium">
          Oasis Luxury provides bespoke immigration and travel visa solutions for high-net-worth individuals 
          and frequent flyers. We take the stress out of global travel.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {features.map((f, i) => (
            <div key={i} className="flex flex-col items-center group">
              {/* Icon Box - Square design as per Oasis theme */}
              <div className="w-16 h-16 bg-[#E6F0F8] text-[#003366] flex items-center justify-center text-2xl mb-6 group-hover:bg-[#C4B454] group-hover:text-white transition-all duration-300">
                {f.icon}
              </div>
              <h4 className="text-[#003366] font-black uppercase text-sm mb-2">{f.title}</h4>
              <p className="text-gray-500 text-xs font-medium leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>

        <button 
          onClick={handleConsultation}
          className="px-16 py-6 bg-[#003366] text-white font-black uppercase tracking-widest hover:bg-[#C4B454] transition-all shadow-2xl flex items-center justify-center gap-3 mx-auto"
        >
          Consult an Expert <FaWhatsapp size={20} />
        </button>
      </div>
    </section>
  );
};

// ✅ CORRECT EXPORT: No curly braces around the component name
export default PremiumVisaService;