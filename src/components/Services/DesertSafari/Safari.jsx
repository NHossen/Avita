import React from "react";
import { FaWhatsapp, FaCheck, FaClock, FaMapMarkerAlt, FaStar } from "react-icons/fa";

const Safari = () => {
  const packages = [
    {
      id: 1,
      title: "Evening Desert Safari",
      price: "AED 80",
      image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=600&auto=format&fit=crop",
      desc: "Enjoy the ultimate Evening Desert Safari in Dubai — thrilling dune bashing, sunset views, live shows, and a delicious BBQ dinner under the stars.",
      inclusions: [
        "Pickup & Drop-off by 4×4 Vehicle",
        "30-35 Mins Dune Bashing & Sunset Photography",
        "Sandboarding & Camel Ride",
        "Live BBQ Dinner (Veg & Non-Veg)",
        "Fire, Tanura & Belly Dance Shows",
        "Arabic Coffee, Tea & Sweet Dates"
      ]
    },
    {
      id: 2,
      title: "VIP Desert Safari",
      price: "AED 145",
      image: "https://images.unsplash.com/photo-1539129790489-e820061fa637?q=80&w=600&auto=format&fit=crop",
      desc: "Experience a luxurious VIP Desert Safari in Dubai with exclusive seating, table service, and premium performances for an unforgettable evening.",
      inclusions: [
        "Pickup & Drop-off by 4×4 Vehicle",
        "Dune Bashing (30-35 min) & Sunset Photos",
        "VIP Seating & Table Service",
        "Unlimited Buffet Dinner (Veg & Non-Veg)",
        "Fire, Belly & Tanura Dance Shows",
        "Arabic Coffee, Dates & Refreshments",
        "Sandboarding, Camel Ride & Henna Tattoo"
      ]
    },
    {
      id: 3,
      title: "Private Desert Safari",
      price: "AED 600",
      image: "https://images.unsplash.com/photo-1489493173505-60ecb92d357d?q=80&w=600&auto=format&fit=crop",
      desc: "Enjoy exclusivity and comfort with a Private Desert Safari in Dubai — designed for couples and families seeking privacy and luxury.",
      inclusions: [
        "Private 4×4 Pick-up & Drop-off",
        "30-35 Mins Dune Bashing & Sunset Photos",
        "Sandboarding & Camel Ride",
        "Live Belly, Fire & Tanura Shows",
        "Arabic Coffee, Dates & Refreshments",
        "Henna Painting & Traditional Dress Photos"
      ]
    }
  ];

  const handleWhatsApp = (pkgName, price) => {
    const phoneNumber = "971509813991";
    const message = encodeURIComponent(`Hello Oasis Luxury! I want to book the "${pkgName}" for ${price}. Please confirm availability.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="w-full bg-[#F8FAFC] font-sans pb-20">
      {/* 🔹 1. Hero Header */}
      <section className="relative w-full h-[40vh] flex items-center justify-center bg-[#003366] overflow-hidden">
        <div className="absolute inset-0 opacity-30 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1974&auto=format&fit=crop')" }}></div>
        <div className="relative z-10 text-center px-4">
          <h2 className="text-[#C4B454] font-black uppercase tracking-[0.4em] text-xs mb-2">Adventure Awaits</h2>
          <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
            Our Top <span className="text-[#C4B454]">Desert Safari</span> Packages
          </h1>
          <p className="text-blue-100 font-medium mt-4 text-xs md:text-sm max-w-xl mx-auto">
            Choose a curated desert experience perfect for families, couples, and adventure seekers. Book instantly via WhatsApp.
          </p>
        </div>
      </section>

      {/* 🔹 2. Special Offer Banner */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 relative z-20">
        <div className="bg-[#FFF9E6] border-2 border-[#C4B454] py-3 px-6 inline-block rounded-full shadow-lg left-1/2 transform -translate-x-1/2 md:translate-x-0">
          <p className="text-[#003366] font-black text-sm uppercase flex items-center gap-2">
            🌅 Starting from <span className="text-[#C4B454]">AED 45</span> – Self Drive
          </p>
        </div>
      </div>

      {/* 🔹 3. Pricing Cards Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div key={pkg.id} className="bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col border border-gray-100 group">
              {/* Image Header */}
              <div className="relative h-64 overflow-hidden">
                <img src={pkg.image} alt={pkg.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-4 left-4 bg-[#C4B454] w-10 h-10 rounded-full flex items-center justify-center text-white font-black">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-black text-[#003366] uppercase leading-tight w-2/3">
                    {pkg.title}
                  </h3>
                  <div className="text-right">
                    <p className="text-[#C4B454] font-black text-2xl leading-none">{pkg.price}</p>
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {pkg.desc}
                </p>

                {/* Inclusions List */}
                <div className="mb-8">
                  <h4 className="text-[#C4B454] font-black uppercase text-[10px] tracking-widest mb-4">Inclusions</h4>
                  <ul className="space-y-2">
                    {pkg.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-xs text-[#003366] font-medium">
                        <FaCheck className="text-[#C4B454] mt-0.5 flex-shrink-0" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Button */}
                <button 
                  onClick={() => handleWhatsApp(pkg.title, pkg.price)}
                  className="mt-auto w-full py-4 bg-[#003366] text-white font-black uppercase tracking-widest hover:bg-[#C4B454] transition-all rounded-xl flex items-center justify-center gap-2 shadow-lg"
                >
                  <FaWhatsapp className="text-xl" /> Book via WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 4. Bottom Explorer CTA */}
      <div className="mt-16 text-center">
        <a 
  href="https://wa.me/971509813991?text=Hello%20Oasis%20Luxury!%20I%20just%20viewed%20your%20Desert%20Safari%20packages%20and%20would%20like%20to%20explore%20more%20of%20your%20best%20tours." 
  target="_blank"
  rel="noopener noreferrer"
  className="inline-flex items-center gap-3 px-10 py-4 bg-green-500 hover:bg-green-600 text-white font-black uppercase tracking-widest rounded-full transition-all shadow-xl"
>
  🏝️ Explore Best Tours 🌴
</a>
      </div>
    </div>
  );
};

export default Safari;