import { useTranslation } from "react-i18next";
import { 
  FaGlobeAmericas, 
  FaAward, 
  FaUsers, 
  FaHandshake, 
  FaEye, 
  FaRocket, 
  FaGem 
} from "react-icons/fa";

const About = () => {
  const { t } = useTranslation();

  // Color Palette:
  // Desert Gold/Sand: #C4B454
  // Deep Sea Blue: #003366
  // Soft Sky Blue: #E6F0F8
  // Text Gray: #4A4A4A

  const stats = [
    { label: "Years Excellence", value: "12+", icon: <FaAward /> },
    { label: "Happy Clients", value: "50K+", icon: <FaUsers /> },
    { label: "Countries Covered", value: "150+", icon: <FaGlobeAmericas /> },
    { label: "Partnerships", value: "200+", icon: <FaHandshake /> },
  ];

  return (
    <div className="w-full bg-white font-sans text-[#4A4A4A]">
      {/* 🔹 1. Hero Header Section - Rectangular Full Width */}
      <section className="relative w-full h-[60vh] flex items-center justify-center bg-[#003366] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-70 bg-cover bg-center transition-transform duration-[10000ms] hover:scale-105"
          style={{ backgroundImage: "url('/oasis-airline.jpg')" }}
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Our Legacy
          </h1>
          <p className="text-[#C4B454] font-bold uppercase tracking-[0.3em] mt-2 text-sm md:text-lg">
            Oasis Luxury Travel & Tourism L.L.C
          </p>
          <div className="h-1.5 w-24 bg-[#C4B454] mx-auto mt-6"></div>
        </div>
      </section>

      {/* 🔹 2. Motto & Intro Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-[#003366] font-black uppercase tracking-widest text-sm mb-4">Our Motto</h2>
          <blockquote className="text-3xl md:text-5xl font-black text-[#003366] leading-tight uppercase mb-8">
            "Connecting You To The World — <span className="text-[#C4B454] italic">Your Global Mobility Partner.</span>"
          </blockquote>
          <div className="space-y-6 text-gray-600 leading-relaxed border-l-4 border-[#C4B454] pl-8">
            <p>
              Based in the heart of Dubai at **Al Nasser Bldg, Deira**, Oasis Luxury is more than a travel agency. We are a premier Global Visa Consultant and Tourism partner dedicated to providing "One place for everything."
            </p>
            <p>
              Whether it is Global Visa Assistance, specialized Umrah Packages, or luxury Desert Safaris, our team ensures every detail is handled with precision and desert-standard hospitality.
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="p-10 bg-[#E6F0F8] text-center border-b-4 border-transparent hover:border-[#C4B454] transition-all duration-500 shadow-sm hover:shadow-xl group">
              <div className="text-[#003366] text-3xl flex justify-center mb-4 group-hover:scale-110 transition-transform">
                {stat.icon}
              </div>
              <div className="text-3xl font-black text-[#003366]">{stat.value}</div>
              <div className="text-[10px] uppercase font-black text-[#C4B454] tracking-widest mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 3. Vision, Mission & Values - Swapped Black for Deep Blue */}
      <section className="w-full bg-[#003366] py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Vision */}
          <div className="text-center group">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-[#C4B454] mx-auto mb-8 border border-white/20 group-hover:bg-[#C4B454] group-hover:text-[#003366] transition-all">
              <FaEye size={35} />
            </div>
            <h3 className="text-white font-black uppercase tracking-widest mb-4">Our Vision</h3>
            <p className="text-blue-100/80 text-sm leading-relaxed">
              To be the world's most trusted gateway for global mobility, setting the benchmark for luxury travel and seamless visa transitions.
            </p>
          </div>

          {/* Mission */}
          <div className="text-center group">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-[#C4B454] mx-auto mb-8 border border-white/20 group-hover:bg-[#C4B454] group-hover:text-[#003366] transition-all">
              <FaRocket size={35} />
            </div>
            <h3 className="text-white font-black uppercase tracking-widest mb-4">Our Mission</h3>
            <p className="text-blue-100/80 text-sm leading-relaxed">
              To simplify international travel through expert visa consultancy and create unforgettable memories with bespoke holiday and luxury services.
            </p>
          </div>

          {/* Core Values */}
          <div className="text-center group">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center text-[#C4B454] mx-auto mb-8 border border-white/20 group-hover:bg-[#C4B454] group-hover:text-[#003366] transition-all">
              <FaGem size={35} />
            </div>
            <h3 className="text-white font-black uppercase tracking-widest mb-4">Core Values</h3>
            <p className="text-blue-100/80 text-sm leading-relaxed">
              Integrity in consultancy, excellence in service, and a commitment to making global travel accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 4. Full-Width CTA */}
      <section className="py-24 px-6 text-center bg-[#E6F0F8]">
        <h2 className="text-[#C4B454] font-black uppercase tracking-[0.4em] text-xs mb-4">Start Your Story</h2>
        <h3 className="text-4xl md:text-6xl font-black text-[#003366] uppercase mb-10 max-w-4xl mx-auto">
          Ready to explore the world with us?
        </h3>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a 
            href="https://wa.me/971509813991" 
            target="_blank"
            className="px-12 py-5 bg-[#C4B454] text-white font-black uppercase tracking-widest hover:bg-[#003366] transition-all duration-300 shadow-xl"
          >
            Chat with an Expert
          </a>
          <a 
            href="/contact" 
            className="px-12 py-5 border-2 border-[#003366] text-[#003366] font-black uppercase tracking-widest hover:bg-[#003366] hover:text-white transition-all duration-300"
          >
            Visit Our Office
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;