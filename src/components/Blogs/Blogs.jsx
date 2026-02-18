import React, { useState } from "react";
import { FaArrowRight, FaCalendarAlt, FaUser, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Blog = () => {
  // This array is ready to be replaced with dynamic data in the future
  const blogPosts = [
    {
      id: 1,
      title: "Navigating the 2026 Schengen Visa Requirements",
      excerpt: "Everything you need to know about the latest updates for European travel from the UAE.",
      date: "Feb 15, 2026",
      author: "Oasis Expert",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?q=80&w=2070&auto=format&fit=crop",
      category: "Visa Guide"
    },
    {
      id: 2,
      title: "Top 5 Hidden Gems in Georgia for UAE Residents",
      excerpt: "Discover the breathtaking landscapes and cultural heritage just a short flight away.",
      date: "Feb 12, 2026",
      author: "Travel Desk",
      image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070&auto=format&fit=crop",
      category: "Destination"
    },
    {
      id: 3,
      title: "The Ultimate Luxury Desert Safari Experience",
      excerpt: "Why our bespoke desert experiences are rated #1 in Dubai for luxury and hospitality.",
      date: "Feb 10, 2026",
      author: "Desert Lead",
      image: "https://images.unsplash.com/photo-1451337516015-6b6e9a44a8a3?q=80&w=1974&auto=format&fit=crop",
      category: "Luxury"
    },
    {
      id: 4,
      title: "Umrah 2026: Preparation and Planning Tips",
      excerpt: "A comprehensive guide to planning your spiritual journey with peace of mind.",
      date: "Feb 05, 2026",
      author: "Religious Tours",
      image: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?q=80&w=2044&auto=format&fit=crop",
      category: "Religious"
    },
    {
      id: 5,
      title: "Business Travel: Seamless Global Mobility",
      excerpt: "How Oasis Luxury simplifies corporate travel for growing businesses in the Middle East.",
      date: "Jan 28, 2026",
      author: "Corporate Desk",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109c055?q=80&w=2070&auto=format&fit=crop",
      category: "Corporate"
    },
    {
      id: 6,
      title: "The Rise of Digital Nomad Visas in 2026",
      excerpt: "Work from anywhere: A look at the best countries offering remote work visas this year.",
      date: "Jan 20, 2026",
      author: "Visa Expert",
      image: "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?q=80&w=2070&auto=format&fit=crop",
      category: "Visa Guide"
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);

  return (
    <div className="w-full bg-white font-sans text-[#4A4A4A]">
      {/* 🔹 1. Blog Hero (Full Width Rectangular) */}
      <section className="relative w-full h-[45vh] flex items-center justify-center bg-[#003366] overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/world-map.png')] bg-center"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Travel <span className="text-[#C4B454]">Insights</span>
          </h1>
          <p className="text-blue-100 font-medium uppercase tracking-[0.3em] mt-4 text-sm md:text-base">
            Expert advice, news, and inspiration from Dubai
          </p>
          <div className="h-1.5 w-24 bg-[#C4B454] mx-auto mt-6"></div>
        </div>
      </section>

      {/* 🔹 2. Blog Grid Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        
        {/* Category Filter (Visual Only for now) */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {["All Posts", "Visa Guide", "Destination", "Luxury", "Religious"].map((cat) => (
            <button key={cat} className="px-6 py-2 border border-gray-200 text-xs font-black uppercase tracking-widest hover:bg-[#003366] hover:text-white hover:border-[#003366] transition-all">
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="group cursor-pointer">
              {/* Image Container - Strictly Rectangular */}
              <div className="relative h-64 w-full overflow-hidden bg-gray-100 shadow-lg">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-4 left-4 bg-[#C4B454] text-white text-[10px] font-black px-3 py-1 uppercase tracking-widest">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="py-6">
                <div className="flex items-center gap-4 text-[11px] font-bold text-[#C4B454] uppercase tracking-widest mb-3">
                  <span className="flex items-center gap-1"><FaCalendarAlt /> {post.date}</span>
                  <span className="flex items-center gap-1"><FaUser /> {post.author}</span>
                </div>
                <h3 className="text-xl font-black text-[#003366] uppercase leading-tight mb-3 group-hover:text-[#C4B454] transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 line-clamp-2">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-[#003366] font-black text-xs uppercase tracking-widest group-hover:gap-3 transition-all">
                  Read Article <FaArrowRight className="ml-2 text-[#C4B454]" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 🔹 3. Modern Pagination */}
        <div className="mt-20 flex justify-center items-center gap-4">
          <button className="w-12 h-12 flex items-center justify-center border-2 border-[#E6F0F8] text-[#003366] hover:bg-[#003366] hover:text-white transition-all">
            <FaChevronLeft />
          </button>
          {[1, 2, 3].map((num) => (
            <button 
              key={num} 
              className={`w-12 h-12 font-black transition-all ${num === 1 ? 'bg-[#C4B454] text-white' : 'bg-[#E6F0F8] text-[#003366] hover:bg-[#003366] hover:text-white'}`}
            >
              0{num}
            </button>
          ))}
          <button className="w-12 h-12 flex items-center justify-center border-2 border-[#E6F0F8] text-[#003366] hover:bg-[#003366] hover:text-white transition-all">
            <FaChevronRight />
          </button>
        </div>
      </section>

      {/* 🔹 4. Newsletter Section (Desert/Blue Mix) */}
      <section className="bg-[#003366] py-20 px-6 mt-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[#C4B454] font-black uppercase tracking-[0.4em] text-xs mb-4">Stay Informed</h2>
          <h3 className="text-3xl md:text-5xl font-black text-white uppercase mb-8">Get Travel Updates</h3>
          <form className="flex flex-col md:flex-row gap-0 shadow-2xl">
            <input 
              type="email" 
              placeholder="Your Email Address" 
              className="flex-grow p-5 outline-none text-sm md:text-base"
            />
            <button className="bg-[#C4B454] text-white px-10 py-5 font-black uppercase tracking-widest hover:bg-white hover:text-[#003366] transition-all">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;