import React from "react";
// Added FaWhatsapp here to ensure it works
import { FaWhatsapp } from "react-icons/fa";

const HolidayTourCard = () => {
  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hello Oasis Luxury! I want to book a holiday tour with you. Please share your best seasonal packages.");
    window.open(`https://wa.me/971509813991?text=${msg}`, "_blank");
  };

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row bg-white border border-gray-100 shadow-2xl overflow-hidden">
        {/* Left Side: Rectangular Image (Full Width/Height inside box) */}
        <div className="md:w-1/2 h-[400px]">
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop" 
            alt="Holiday Tour" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Side: Text & CTA */}
        <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
          <h4 className="text-[#C4B454] font-black uppercase tracking-[0.3em] text-xs mb-4">Dream Destinations</h4>
          <h2 className="text-[#003366] text-3xl md:text-5xl font-black uppercase leading-tight mb-6">
            Book Your Next <br /> Holiday <span className="text-[#C4B454]">With Us</span>
          </h2>
          <p className="text-gray-500 leading-relaxed mb-10">
            From the turquoise waters of the Maldives to the historic streets of Europe, we craft 
            personalized itineraries that turn trips into lifetime memories.
          </p>
          <button 
            onClick={handleWhatsApp}
            className="w-full md:w-max px-12 py-5 bg-[#003366] text-white font-black uppercase tracking-widest hover:bg-[#C4B454] transition-all flex items-center justify-center gap-3 shadow-xl"
          >
            Book My Holiday <FaWhatsapp size={20} />
          </button>
        </div>
      </div>
    </section>
  );
};

// ✅ CORRECT EXPORT
export default HolidayTourCard;