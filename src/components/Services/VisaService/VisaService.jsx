import React, { useState } from "react";
import { FaWhatsapp, FaGlobe, FaPassport, FaBriefcase } from "react-icons/fa";

const VisaServices = () => {
  const [visaType, setVisaType] = useState("Tourist"); // Default filter

  const visaCountries = [
    { id: 1, name: "Schengen (Italy)", desc: "Explore Rome, Venice, and the rest of Europe with ease.", image: "https://images.unsplash.com/photo-1529260830199-42c24126f198?q=80&w=600&auto=format&fit=crop" },
    { id: 2, name: "Albania", desc: "Discover the hidden gems of the Balkans with our fast processing.", image: "https://images.unsplash.com/photo-1588863674291-364233777085?q=80&w=600&auto=format&fit=crop" },
    { id: 3, name: "Armenia", desc: "Visit the beautiful mountains and ancient history of Armenia.", image: "https://images.unsplash.com/photo-1580991584003-888494b59863?q=80&w=600&auto=format&fit=crop" },
    { id: 4, name: "Kosovo", desc: "Expert assistance for entry permits to the heart of the Balkans.", image: "https://images.unsplash.com/photo-1563294373-958550186719?q=80&w=600&auto=format&fit=crop" },
    { id: 5, name: "Malaysia", desc: "Experience the vibrant culture and beaches of Southeast Asia.", image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e6e?q=80&w=600&auto=format&fit=crop" },
    { id: 6, name: "Thailand", desc: "Simple e-Visa and sticker visa solutions for your Thai holiday.", image: "https://images.unsplash.com/photo-1528181304800-2f5402924d83?q=80&w=600&auto=format&fit=crop" },
    { id: 7, name: "Singapore", desc: "Seamless visa processing for your business or leisure trip.", image: "https://images.unsplash.com/photo-1525625232747-073044b6f068?q=80&w=600&auto=format&fit=crop" },
    { id: 8, name: "Oman", desc: "Quick e-Visa services for your next road trip or flight to Oman.", image: "https://images.unsplash.com/photo-1578912995167-f40656a82755?q=80&w=600&auto=format&fit=crop" },
    { id: 9, name: "Qatar", desc: "Visa assistance for visiting Doha for tourism or transit.", image: "https://images.unsplash.com/photo-1551041777-ed07f99c67d1?q=80&w=600&auto=format&fit=crop" },
    { id: 10, name: "United Kingdom", desc: "Visitor and work visa guidance for England, Scotland, and Wales.", image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=600&auto=format&fit=crop" },
    { id: 11, name: "USA", desc: "Professional B1/B2 visa consultancy for the United States.", image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=600&auto=format&fit=crop" },
    { id: 12, name: "Canada", desc: "Processing for visitor visas and work permit consultations.", image: "https://images.unsplash.com/photo-1503614472-8c93d56e92ce?q=80&w=600&auto=format&fit=crop" },
  ];

  const handleWhatsApp = (country, type) => {
    const phoneNumber = "971509813991";
    const message = encodeURIComponent(`Hello Oasis Luxury! I am interested in a ${type} Visa for ${country}. Please provide me with the requirements and pricing.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="w-full bg-white font-sans">
      {/* 🔹 Hero Section */}
      <section className="relative w-full h-[45vh] flex items-center justify-center bg-[#003366] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')]"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Visa <span className="text-[#C4B454]">Solutions</span>
          </h1>
          <p className="text-blue-100 font-medium uppercase tracking-[0.3em] mt-4 text-xs md:text-sm">
            Your Trusted Global Mobility Partner
          </p>
        </div>
      </section>

      {/* 🔹 Visa Type Selector */}
      <section className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="flex bg-white shadow-2xl p-2 rounded-none border border-gray-100">
          <button 
            onClick={() => setVisaType("Tourist")}
            className={`flex-1 flex items-center justify-center gap-3 py-5 font-black uppercase tracking-widest transition-all ${visaType === "Tourist" ? 'bg-[#003366] text-white' : 'bg-transparent text-[#003366] hover:bg-gray-50'}`}
          >
            <FaPassport /> Tourist Visa
          </button>
          <button 
            onClick={() => setVisaType("Work")}
            className={`flex-1 flex items-center justify-center gap-3 py-5 font-black uppercase tracking-widest transition-all ${visaType === "Work" ? 'bg-[#003366] text-white' : 'bg-transparent text-[#003366] hover:bg-gray-50'}`}
          >
            <FaBriefcase /> Work Visa
          </button>
        </div>
      </section>

      {/* 🔹 Grid of Countries */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
            <h2 className="text-[#C4B454] font-black uppercase tracking-widest text-xs mb-2">Destinations</h2>
            <h3 className="text-3xl font-black text-[#003366] uppercase">Select Your Country</h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visaCountries.map((country) => (
            <div key={country.id} className="group bg-white border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col">
              {/* Image Section */}
              <div className="relative h-56 w-full overflow-hidden bg-gray-200">
                <img 
                  src={country.image} 
                  alt={country.name} 
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 right-4 bg-[#C4B454] text-white font-black text-[9px] px-3 py-1 uppercase tracking-tighter">
                  {visaType}
                </div>
              </div>

              {/* Text Section */}
              <div className="p-6 flex-grow">
                <h4 className="text-xl font-black text-[#003366] uppercase mb-3 border-b-2 border-[#E6F0F8] pb-2 group-hover:border-[#C4B454] transition-colors">
                    {country.name}
                </h4>
                <p className="text-gray-500 text-xs leading-relaxed line-clamp-3 mb-6">
                  {country.desc}
                </p>
                <button 
                  onClick={() => handleWhatsApp(country.name, visaType)}
                  className="w-full py-4 bg-[#003366] text-white font-black text-[10px] uppercase tracking-widest hover:bg-[#C4B454] transition-all flex items-center justify-center gap-2 shadow-xl"
                >
                  Apply Now <FaWhatsapp size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Bottom Call to Action */}
      <section className="w-full bg-[#E6F0F8] py-20 px-6 text-center border-t border-gray-200">
        <h3 className="text-[#003366] font-black text-2xl md:text-4xl uppercase mb-6">Ready to start your application?</h3>
        <p className="text-gray-600 max-w-2xl mx-auto mb-10 font-medium">
          Our experts are ready to assist you with document preparation, appointment booking, and interview coaching for both tourist and work permits.
        </p>
        <button 
          onClick={() => handleWhatsApp("General", visaType)}
          className="px-16 py-6 bg-[#C4B454] text-white font-black uppercase tracking-widest hover:bg-[#003366] transition-all duration-300 shadow-2xl"
        >
          Speak with a Consultant
        </button>
      </section>
    </div>
  );
};

export default VisaServices;