import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom"; // 🔹 Fixed the "Link is not defined" error
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaWhatsapp, 
  FaEnvelope, 
  FaPhoneAlt, 
  FaMapMarkerAlt, 
  FaGlobe 
} from "react-icons/fa";
import logo from '../../assets/logo_oasis.png';

export default function Footer() {
  const { t } = useTranslation();

  return (
    /* 🔹 w-full and bg-[#1a1310] ensure the desert color covers the entire screen width */
    <footer className="w-full text-white pt-16 pb-8 border-t-4 border-[#C4B454]">
      
      {/* Content wrapper with a large max-width to look good on big screens */}
      <div className="max-w-[1440px] mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        
        {/* 1. Brand Identity */}
        <div className="flex flex-col items-center sm:items-start">
          <img src={logo} alt="Oasis Luxury Logo" className="h-16 mb-6 object-contain" />
          <p className="text-gray-400 text-sm leading-relaxed text-center sm:text-left max-w-xs">
            Connecting You To The World — Your Travel And Global Mobility Partner. Experience luxury and excellence with Oasis.
          </p>
          <div className="flex space-x-4 mt-8">
            <a href="https://www.facebook.com/profile.php?id=61568345138204" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#C4B454] hover:bg-[#C4B454] hover:text-black transition-all">
              <FaFacebookF size={16} />
            </a>
            <a href="https://www.instagram.com/oasisluxurytravel/" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#C4B454] hover:bg-[#C4B454] hover:text-black transition-all">
              <FaInstagram size={16} />
            </a>
            <a href="https://wa.me/971509813991" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-[#C4B454] hover:bg-[#C4B454] hover:text-black transition-all">
              <FaWhatsapp size={16} />
            </a>
          </div>
        </div>

        {/* 2. Services (From your card) */}
        <div className="text-center sm:text-left">
          <h2 className="text-[#C4B454] font-bold uppercase tracking-widest mb-6 text-xs">Our Services</h2>
          <ul className="text-gray-400 text-sm space-y-3 font-medium">
            <li>Global Visa Assistance</li>
            <li>Umrah & Holiday Packages</li>
            <li>UAE Visit Visa Services</li>
            <li>Air Ticket & Group Tours</li>
            <li>Desert Safari Specialist</li>
            <li>Luxury Limousine Services</li>
          </ul>
        </div>

        {/* 3. Contact Details (From your card) */}
        <div className="text-center sm:text-left">
          <h2 className="text-[#C4B454] font-bold uppercase tracking-widest mb-6 text-xs">Contact Details</h2>
          <div className="space-y-5 text-gray-400 text-sm">
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <FaPhoneAlt className="text-[#C4B454] shrink-0" />
              <div className="flex flex-col">
                <span>+971 50 981 3991</span>
                <span>+971 56 555 9912</span>
                <span>+971 4 26 15 799</span>
              </div>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <FaEnvelope className="text-[#C4B454] shrink-0" />
              <span className="break-all">oasisluxury.ae@gmail.com
</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-4">
              <FaGlobe className="text-[#C4B454] shrink-0" />
              <span>www.oasisluxuryllc.com</span>
            </div>
          </div>
        </div>

        {/* 4. Location (From your card) */}
        <div className="text-center sm:text-left">
          <h2 className="text-[#C4B454] font-bold uppercase tracking-widest mb-6 text-xs">Location</h2>
          <div className="flex items-start justify-center sm:justify-start gap-4 text-gray-400 text-sm leading-relaxed">
            <FaMapMarkerAlt className="text-[#C4B454] mt-1 shrink-0" />
            <p>
              Al Nasser Bldg, Shop No 3<br />
              Near Al Nakheel Center, Naif,<br />
              Deira, Dubai U.A.E
            </p>
          </div>
        </div>
      </div>

      {/* 🔹 Full-Width Copyright Bar */}
      <div className="w-full mt-16 pt-8 border-t border-white/5 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-[10px] text-gray-500 uppercase tracking-[0.2em]">
          <p>© 2026 Oasis Luxury Travel & Tourism L.L.C. All Rights Reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-[#C4B454] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#C4B454] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}