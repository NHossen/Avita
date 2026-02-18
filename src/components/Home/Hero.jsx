import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Hero = () => {
  // Service data to match the grid in your snippet
  const serviceLinks = [
    { title: "Visa Services", icon: "🎫", link: "visa_services" },
    { title: "Air Tickets", 
    icon: "✈️", 
    link: "https://wa.me/971509813991?text=Hello%20Oasis%20Luxury!%20I%20am%20interested%20in%20booking%20Air%20Tickets.%20Please%20provide%20rates.", 
    isWhatsApp: true },
    { title: "Tour Packages", icon: "🧳", link: "tour_packages" },
    { title: "Desert Safari", icon: "🏜️", link: "/desert_safari" },
  ];

  // Logic for slide navigation
  const scrollToSlide = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="slide1" className="carousel-item w-full h-[85vh] md:h-screen snap-center relative flex-shrink-0 overflow-hidden">
      
      {/* Background Image */}
      <motion.img
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
        src="/oasis-airline.jpg" 
        className="object-cover w-full h-full"
        alt="Welcome to Oasis Luxury"
        loading="eager"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 to-black/80 flex flex-col items-center justify-center text-white text-center px-4 sm:px-6">

        <div className="max-w-5xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black mb-4 tracking-tight uppercase text-center">
              {/* Updated Animation */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.3 } }
                }}
              >
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 }
                  }}
                  className="block"
                >
                  Welcome to Oasis
                </motion.span>
              </motion.div>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link 
              to="/services" 
              className="px-6 mt-5 sm:px-10 py-3 rounded-full bg-[#C4B454] text-black hover:bg-white hover:text-[#C4B454] transition-all duration-500 transform hover:scale-105 shadow-2xl font-black uppercase tracking-widest text-xs sm:text-sm md:text-xs inline-block"
              style={{ pointerEvents: 'auto', position: 'relative', zIndex: 10 }}
            >
              Explore More
            </Link>
          </motion.div>

          {/* Service Grid */}
          <motion.div 
            className="mt-8 sm:mt-12 md:mt-16 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 md:gap-6"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.1, delayChildren: 0.8 }
              }
            }}
          >
            {serviceLinks.map((service, idx) => (
              <motion.div
                key={idx}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 }
                }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
              >
                <Link
                  to={service.link}
                  className="group flex flex-col items-center justify-center p-4 sm:p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl transition-all duration-300 hover:bg-white hover:shadow-[0_20px_50px_rgba(196,180,84,0.3)]"
                >
                  <span className="text-3xl sm:text-4xl transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </span>
                  <span className="mt-2 sm:mt-4 font-bold text-[9px] sm:text-[10px] md:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white transition-colors duration-300 group-hover:text-black">
                    {service.title}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2 opacity-0 hover:opacity-100 transition-opacity duration-300 z-50">
        <button 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/20 border border-white/20 text-white hover:bg-[#C4B454] hover:text-black transition-all" 
            onClick={() => scrollToSlide("slide4")}
        >
            ❮
        </button>
        <button 
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center bg-black/20 border border-white/20 text-white hover:bg-[#C4B454] hover:text-black transition-all" 
            onClick={() => scrollToSlide("slide2")}
        >
            ❯
        </button>
      </div>
    </div>
  );
};

export default Hero;