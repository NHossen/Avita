import React from "react";
import { useTranslation } from "react-i18next";
import { 
  FaWhatsapp, 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn
} from "react-icons/fa";

const Contact = () => {
  const { t } = useTranslation();

  const contactDetails = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Our Location",
      desc: "Al Nasser Building,Shop No 3 Near Al Nakheel Center,Naif, Deira, Dubai, UAE",
      link: "https://maps.google.com"
    },
    {
      icon: <FaPhoneAlt />,
      title: "Call Support",
      desc: "+971 50 981 3991",
      link: "tel:+971509813991"
    },
    {
      icon: <FaEnvelope />,
      title: "Email Us",
      desc: "oasisluxury.ae@gmail.com",
      link: "mailto:oasisluxury.ae@gmail.com"
    },
    {
      icon: <FaClock />,
      title: "Working Hours",
      desc: "Mon - Sat: 09:00 - 22:00",
      link: "#"
    }
  ];

  return (
    <div className="w-full bg-[#F8FAFC] font-sans">
      {/* 🔹 1. Modern Hero Header (Full Width Rectangular) */}
      <section className="relative w-full h-[40vh] flex items-center justify-center bg-[#003366] overflow-hidden">
        <div 
          className="absolute inset-0 opacity-30 bg-cover bg-center"
          style={{ backgroundImage: "url('/dubai-skyline.jpg')" }} // Use a desert/cityscape wide shot
        ></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
            Get In <span className="text-[#C4B454]">Touch</span>
          </h1>
          <p className="text-blue-100 font-medium uppercase tracking-[0.3em] mt-4 text-sm md:text-base">
            Your journey to the world starts with a conversation
          </p>
        </div>
      </section>

      {/* 🔹 2. Main Contact Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-20 relative z-20 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactDetails.map((item, i) => (
              <a 
                href={item.link} 
                key={i} 
                className="flex items-center p-6 bg-white border-l-4 border-[#C4B454] shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-[#E6F0F8] text-[#003366] flex items-center justify-center text-xl group-hover:bg-[#003366] group-hover:text-white transition-colors">
                  {item.icon}
                </div>
                <div className="ml-5">
                  <h4 className="text-xs font-black uppercase tracking-widest text-[#C4B454]">{item.title}</h4>
                  <p className="text-[#003366] font-bold text-sm md:text-base">{item.desc}</p>
                </div>
              </a>
            ))}

            {/* Social Connect */}
            <div className="p-8 bg-[#003366] text-white shadow-xl">
              <h4 className="font-black uppercase tracking-widest text-sm mb-6 text-[#C4B454]">Follow Our Travels</h4>
              <div className="flex gap-4">
                {[<FaFacebookF />, <FaInstagram />, <FaLinkedinIn />].map((social, idx) => (
                  <button key={idx} className="w-10 h-10 border border-white/20 flex items-center justify-center hover:bg-[#C4B454] hover:border-[#C4B454] transition-all">
                    {social}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Modern Glass-morphism Form */}
          <div className="lg:col-span-2 bg-white p-8 md:p-12 shadow-2xl border border-gray-100">
            <h2 className="text-3xl font-black text-[#003366] uppercase mb-2">Send a Message</h2>
            <p className="text-gray-500 mb-10">Have a specific inquiry? Our consultants will get back to you within 24 hours.</p>
            
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Full Name</label>
                <input type="text" placeholder="John Doe" className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-[#C4B454] outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-[#C4B454] outline-none transition-all" />
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Subject</label>
                <select className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-[#C4B454] outline-none transition-all">
                  <option>Global Visa Assistance</option>
                  <option>Umrah Packages</option>
                  <option>Holiday Packages</option>
                  <option>Other Inquiry</option>
                </select>
              </div>
              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-gray-400">Your Message</label>
                <textarea rows="4" placeholder="How can we help you?" className="w-full p-4 bg-gray-50 border-none focus:ring-2 focus:ring-[#C4B454] outline-none transition-all"></textarea>
              </div>
              
              <button className="md:col-span-2 py-5 bg-[#003366] text-white font-black uppercase tracking-widest hover:bg-[#C4B454] transition-all duration-300 shadow-lg">
                Send Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* 🔹 3. Interactive Map / WhatsApp CTA */}
      <section className="w-full bg-[#E6F0F8] py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <FaWhatsapp className="text-[#C4B454] text-6xl mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-black text-[#003366] uppercase mb-6">Need an Instant Answer?</h2>
          <p className="text-gray-600 mb-10">Our travel experts are available on WhatsApp for real-time visa guidance and booking assistance.</p>
          <a 
            href="https://wa.me/971509813991" 
            target="_blank"
            className="inline-block px-12 py-5 bg-[#C4B454] text-white font-black uppercase tracking-widest hover:bg-[#003366] transition-all duration-300 shadow-xl"
          >
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;