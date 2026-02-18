import React, { useState } from "react";
import { FaWhatsapp, FaStar, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SafariPaginationSystem = () => {
  // Data set with 6 items to demonstrate the "3 per page" requirement
  const allSafaris = [
    { id: 1, name: "Morning Adventure", price: "AED 120", rating: 4.8, reviews: "2.4k", image: "https://images.unsplash.com/photo-1542332213-9b5a5a3fad35?q=80&w=600&auto=format&fit=crop", type: "Morning" },
    { id: 2, name: "VIP Evening Safari", price: "AED 145", rating: 4.9, reviews: "1.1k", image: "https://images.unsplash.com/photo-1509233725247-49e657c54213?q=80&w=600&auto=format&fit=crop", type: "Evening" },
    { id: 3, name: "ATV Quad Special", price: "AED 250", rating: 4.9, reviews: "10k+", image: "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=600&auto=format&fit=crop", type: "Adventure" },
    { id: 4, name: "Private Camel Trek", price: "AED 600", rating: 4.7, reviews: "803", image: "https://images.unsplash.com/photo-1516616370751-86d6bd8b0329?q=80&w=600&auto=format&fit=crop", type: "Private" },
    { id: 5, name: "Overnight Camping", price: "AED 450", rating: 4.9, reviews: "900", image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?q=80&w=600&auto=format&fit=crop", type: "Overnight" },
    { id: 6, name: "Dune Buggy Drive", price: "AED 800", rating: 5.0, reviews: "1.5k", image: "https://images.unsplash.com/photo-1533118355918-28521099684e?q=80&w=600&auto=format&fit=crop", type: "Self-Drive" },
    { id: 7, name: "Red Dune Safari", price: "AED 90", rating: 4.6, reviews: "3k", image: "https://images.unsplash.com/photo-1445462657202-a0893228a1e1?q=80&w=600&auto=format&fit=crop", type: "Evening" },
    { id: 8, name: "Heritage Dinner", price: "AED 350", rating: 4.8, reviews: "420", image: "https://images.unsplash.com/photo-1578912995167-f40656a82755?q=80&w=600&auto=format&fit=crop", type: "Luxury" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 3; // 🔹 Strictly 3 items per page

  // Logic to slice the data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allSafaris.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(allSafaris.length / itemsPerPage);

  const handleWhatsApp = (name, price) => {
    const phone = "971509813991";
    const msg = encodeURIComponent(`Hi Oasis! I'm interested in the "${name}" (${price}) from Page ${currentPage}.`);
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
  };

  return (
    <section className="bg-white py-16 px-4 md:px-10">
      <div className="max-w-7xl mx-auto">
        
        <div className="mb-10 border-b border-gray-100 pb-6">
          <h2 className="text-[#003366] text-2xl font-black uppercase">
            Safari <span className="text-[#C4B454]">Collection</span>
          </h2>
          <p className="text-gray-400 text-[10px] font-bold uppercase tracking-widest mt-1">
            Showing {indexOfFirstItem + 1}-{Math.min(indexOfLastItem, allSafaris.length)} of {allSafaris.length} Results
          </p>
        </div>

        {/* 🔹 GRID: 3 Columns on Tablet/Desktop, 1 on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 min-h-[500px]">
          {currentItems.map((item) => (
            <div key={item.id} className="group bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full">
              
              {/* Image - Rectangular Full Width */}
              <div className="relative h-56 w-full overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute top-0 right-0 bg-[#003366] text-white text-[9px] font-black px-3 py-2 uppercase">
                  {item.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-1 text-[#C4B454] text-[10px] mb-2 font-bold uppercase">
                  <FaStar /> {item.rating} <span className="text-gray-300 ml-1">({item.reviews})</span>
                </div>
                
                <h3 className="text-lg font-black text-[#003366] uppercase mb-2">
                  {item.name}
                </h3>
                
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-tighter flex items-center gap-1 mb-6">
                  <FaMapMarkerAlt className="text-[#C4B454]" /> Premium Desert Site
                </p>

                <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between">
                  <span className="text-xl font-black text-[#003366]">{item.price}</span>
                  <button 
                    onClick={() => handleWhatsApp(item.name, item.price)}
                    className="flex items-center gap-2 px-5 py-3 bg-[#003366] text-white text-[10px] font-black uppercase tracking-widest hover:bg-[#C4B454] transition-all"
                  >
                    Book <FaWhatsapp size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 🔹 Center Pagination */}
        <div className="mt-16 flex justify-center items-center gap-2">
          <button 
            onClick={() => { setCurrentPage(p => p - 1); window.scrollTo(0,0); }} 
            disabled={currentPage === 1}
            className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#003366] hover:bg-[#003366] hover:text-white disabled:opacity-20 transition-all"
          >
            <FaChevronLeft size={12} />
          </button>
          
          {[...Array(totalPages)].map((_, i) => (
            <button 
              key={i} 
              onClick={() => { setCurrentPage(i + 1); window.scrollTo(0,0); }}
              className={`w-10 h-10 font-black text-xs transition-all ${currentPage === i + 1 ? 'bg-[#C4B454] text-white shadow-md' : 'bg-white border border-gray-200 text-[#003366] hover:bg-gray-50'}`}
            >
              {i + 1}
            </button>
          ))}

          <button 
            onClick={() => { setCurrentPage(p => p + 1); window.scrollTo(0,0); }} 
            disabled={currentPage === totalPages}
            className="w-10 h-10 flex items-center justify-center border border-gray-200 text-[#003366] hover:bg-[#003366] hover:text-white disabled:opacity-20 transition-all"
          >
            <FaChevronRight size={12} />
          </button>
        </div>

      </div>
    </section>
  );
};

export default SafariPaginationSystem;