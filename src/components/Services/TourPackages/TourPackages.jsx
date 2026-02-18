import React, { useState } from "react";
import { FaWhatsapp, FaStar, FaClock, FaMapMarkerAlt, FaSuitcase } from "react-icons/fa";

const TourPackages = () => {
  const packages = [
    {
      id: 1,
      name: "Luxury Desert Safari",
      location: "Dubai, UAE",
      duration: "6 Hours",
      price: "From AED 250",
      rating: 5,
      image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=600&auto=format&fit=crop",
      desc: "Premium dune bashing, camel riding, and 5-star dinner under the stars."
    },
    {
      id: 2,
      name: "Classic Umrah Package",
      location: "Makkah & Madinah",
      duration: "10 Days",
      price: "Call for Pricing",
      rating: 5,
      image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=600&auto=format&fit=crop",
      desc: "Complete spiritual journey with premium hotel stays and visa assistance."
    },
    {
      id: 3,
      name: "Georgia Mountain Escape",
      location: "Tbilisi & Kazbegi",
      duration: "5 Days / 4 Nights",
      price: "From AED 1,800",
      rating: 4,
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=600&auto=format&fit=crop",
      desc: "Explore the Caucasus mountains and the historic charm of Georgia."
    },
    {
      id: 4,
      name: "Baku City Explorer",
      location: "Azerbaijan",
      duration: "4 Days / 3 Nights",
      price: "From AED 1,550",
      rating: 4,
      image: "https://images.unsplash.com/photo-1527068561639-bfa22899480b?q=80&w=600&auto=format&fit=crop",
      desc: "Discover the Flame Towers and the ancient Old City of Baku."
    },
    {
      id: 5,
      name: "Tropical Thailand Tour",
      location: "Phuket & Bangkok",
      duration: "7 Days / 6 Nights",
      price: "From AED 2,200",
      rating: 5,
      image: "https://images.unsplash.com/photo-1528181304800-2f5402924d83?q=80&w=600&auto=format&fit=crop",
      desc: "Crystal clear waters, island hopping, and vibrant city nightlife."
    },
    {
      id: 6,
      name: "Singapore City Lights",
      location: "Singapore",
      duration: "5 Days",
      price: "From AED 2,900",
      rating: 5,
      image: "https://images.unsplash.com/photo-1525625232747-073044b6f068?q=80&w=600&auto=format&fit=crop",
      desc: "Modern wonders, Gardens by the Bay, and premium shopping experiences."
    }
  ];

  const handleBookNow = (packageName, location) => {
    const phoneNumber = "971509813991";
    const message = encodeURIComponent(`Hello Oasis Luxury! I want to book the "${packageName}" tour to ${location}. Please send me the itinerary and details.`);
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <div className="w-full bg-white font-sans">
      {/* 🔹 Hero Section */}
      <section className="relative w-full h-[50vh] flex items-center justify-center bg-[#003366] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-40 bg-cover bg-center"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=2070&auto=format&fit=crop')" }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Exclusive <span className="text-[#C4B454]">Tours</span>
          </h1>
          <p className="text-white font-medium uppercase tracking-[0.4em] mt-4 text-xs md:text-sm">
            Crafting Memories, One Destination At A Time
          </p>
          <div className="h-1.5 w-24 bg-[#C4B454] mx-auto mt-6"></div>
        </div>
      </section>

      {/* 🔹 Filter Info Bar */}
      <section className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center border-b border-gray-100">
        <div>
          <h2 className="text-[#003366] font-black text-2xl uppercase">Trending Packages</h2>
          <p className="text-gray-400 text-sm">Explore our most popular hand-picked destinations</p>
        </div>
        <div className="flex gap-4 mt-6 md:mt-0">
          <span className="flex items-center gap-2 text-xs font-black uppercase text-[#C4B454] bg-[#E6F0F8] px-4 py-2">
            <FaSuitcase /> Fully Customizable
          </span>
        </div>
      </section>

      {/* 🔹 Tour Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <div key={pkg.id} className="group bg-white flex flex-col shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100">
              
              {/* Rectangular Image with Price Overlay */}
              <div className="relative h-72 w-full overflow-hidden">
                <img 
                  src={pkg.image} 
                  alt={pkg.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-[#003366]/80 to-transparent opacity-60"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center gap-1 text-[#C4B454] text-xs mb-1">
                    {[...Array(pkg.rating)].map((_, i) => <FaStar key={i} />)}
                  </div>
                  <p className="text-xl font-black uppercase">{pkg.price}</p>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 flex-grow flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-[#003366] uppercase leading-none mb-2">
                      {pkg.name}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest">
                      <FaMapMarkerAlt className="text-[#C4B454]" /> {pkg.location}
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-[10px] font-black bg-[#E6F0F8] text-[#003366] px-2 py-1 uppercase">
                    <FaClock /> {pkg.duration}
                  </div>
                </div>

                <p className="text-gray-500 text-sm leading-relaxed mb-8">
                  {pkg.desc}
                </p>

                <button 
                  onClick={() => handleBookNow(pkg.name, pkg.location)}
                  className="w-full py-5 bg-[#003366] text-white font-black uppercase tracking-widest hover:bg-[#C4B454] transition-all duration-300 flex items-center justify-center gap-3 shadow-xl mt-auto"
                >
                  Book This Tour <FaWhatsapp size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Custom Request Section */}
      <section className="w-full bg-[#003366] py-24 px-6 text-center text-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-[#C4B454] font-black uppercase tracking-[0.4em] text-xs mb-4">Bespoke Travel</h2>
          <h3 className="text-3xl md:text-5xl font-black uppercase mb-8">Plan a Custom Itinerary</h3>
          <p className="text-blue-100/70 mb-12 leading-relaxed">
            Don't see exactly what you're looking for? Our travel architects can design a completely unique 
            journey tailored to your specific preferences, budget, and schedule.
          </p>
          <button 
            onClick={() => handleBookNow("Custom Itinerary", "Global")}
            className="px-12 py-6 border-2 border-[#C4B454] text-[#C4B454] font-black uppercase tracking-widest hover:bg-[#C4B454] hover:text-white transition-all duration-300"
          >
            Request Custom Package
          </button>
        </div>
      </section>
    </div>
  );
};

export default TourPackages;