import React from "react";
// Added FaGlobeAmericas and FaWhatsapp to the import list
import { FaWhatsapp, FaQuoteLeft, FaStar, FaGlobeAmericas } from "react-icons/fa";

const OffersAndReviews = () => {
  const reviews = [
    { name: "Ahmed Khan", text: "The Desert Safari was spectacular! Oasis Luxury handled everything perfectly.", rating: 5 },
    { name: "Sarah J.", text: "Best visa service in Dubai. Got my Schengen visa in record time. Highly recommended!", rating: 5 }
  ];

  const handleClaimOffer = () => {
    const msg = encodeURIComponent("Hello Oasis Luxury! I want to claim the Summer Special 20% OFF offer. Please let me know the details.");
    window.open(`https://wa.me/971509813991?text=${msg}`, "_blank");
  };

  return (
    <section className="bg-[#E6F0F8] py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Offer Card */}
        <div className="bg-[#003366] p-10 md:p-14 text-white relative overflow-hidden shadow-2xl">
          <div className="relative z-10">
            <span className="bg-[#C4B454] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest mb-6 inline-block">Limited Time</span>
            <h3 className="text-4xl font-black uppercase mb-4">Summer Special <br/><span className="text-[#C4B454]">20% OFF</span></h3>
            <p className="text-blue-100/70 mb-8 max-w-sm font-medium">Book any 3-day tour package this month and get a complimentary dinner cruise.</p>
            <button 
              onClick={handleClaimOffer}
              className="flex items-center gap-2 text-[#C4B454] font-black uppercase tracking-widest text-sm hover:text-white transition-colors"
            >
              Claim Offer <FaWhatsapp size={18} />
            </button>
          </div>
          {/* Background decoration icon */}
          <FaGlobeAmericas className="absolute -bottom-10 -right-10 text-white/5 text-[200px]" />
        </div>

        {/* Right: Reviews */}
        <div className="space-y-6">
          <h3 className="text-[#003366] text-2xl font-black uppercase mb-8 border-b-2 border-[#C4B454] inline-block pb-2">What Our Clients Say</h3>
          {reviews.map((rev, i) => (
            <div key={i} className="bg-white p-8 border-l-4 border-[#C4B454] shadow-sm hover:shadow-md transition-shadow">
              <FaQuoteLeft className="text-[#C4B454] opacity-20 text-3xl mb-4" />
              <p className="text-gray-600 italic mb-4 font-medium leading-relaxed">"{rev.text}"</p>
              <div className="flex items-center justify-between">
                <span className="text-[#003366] font-black uppercase text-sm">{rev.name}</span>
                <div className="flex text-[#C4B454] text-xs">
                  {[...Array(rev.rating)].map((_, i) => <FaStar key={i} />)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ✅ CORRECT EXPORT (No curly braces)
export default OffersAndReviews;