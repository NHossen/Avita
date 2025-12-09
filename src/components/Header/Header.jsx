import { Link, NavLink } from "react-router-dom";
import { Navbar, NavbarBrand, NavbarCollapse, NavbarToggle } from "flowbite-react";
import { useState } from "react";
import i18n from "../../i18n/i18n";
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const [langOpen, setLangOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("hy");

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setCurrentLang(lng);
    setLangOpen(false);
  };

  return (
    <>
      {/* PROMO + LANGUAGE BAR */}
      <div className="w-full bg-red-500 flex flex-col sm:flex-row items-center justify-between px-6 py-3 relative">
        {/* Promo Text */}
        <p className="text-sm sm:text-base text-orange-400 font-semibold mb-2 sm:mb-0 text-center sm:text-left">
          🚚 <span className="font-bold">{t('promoText')}</span> — {t('deliveryService')}
        </p>

        {/* Language Dropdown */}
        <div className="relative">
          <button
            onClick={() => setLangOpen(!langOpen)}
            className="px-3 py-1 bg-green-600 text-orange-400 rounded text-sm border border-green-700 hover:bg-green-700 font-emoji"
          >
            {currentLang === "hy" && "🇦🇲 Armenian"}
            {currentLang === "ru" && "🇷🇺 Russian"}
            {currentLang === "en" && "🇬🇧 English"}
          </button>

          {langOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 w-40 bg-green-600 rounded shadow-lg z-20 font-emoji">
              <button
                className="w-full px-3 py-2 text-left text-orange-400 hover:bg-green-700 rounded"
                onClick={() => changeLanguage("hy")}
              >
                🇦🇲 {t('armenian')}
              </button>
              <button
                className="w-full px-3 py-2 text-left text-orange-400 hover:bg-green-700 rounded"
                onClick={() => changeLanguage("ru")}
              >
                🇷🇺 {t('russian')}
              </button>
              <button
                className="w-full px-3 py-2 text-left text-orange-400 hover:bg-green-700 rounded"
                onClick={() => changeLanguage("en")}
              >
                🇬🇧 {t('english')}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* MAIN NAVBAR */}
      <header className="w-full">
        <Navbar fluid rounded className="max-w-7xl mx-auto px-4 h-[70px]">
          <NavbarBrand>
            <Link to="/" className="flex items-center gap-2 text-lg md:text-2xl">
              <span className="text-orange-500 font-extrabold">Avita</span>
              <span className="text-green-700 font-extrabold">Logistics</span>
            </Link>
          </NavbarBrand>

          <NavbarToggle className="md:hidden" />

          <NavbarCollapse className="space-y-2 md:space-y-0 md:space-x-6 text-center md:text-left">
            <NavLink to="/" className="hover:text-orange-500 block md:inline">{t('home')}</NavLink>
            <NavLink to="/about" className="hover:text-orange-500 block md:inline">{t('about')}</NavLink>
            <NavLink to="/services" className="hover:text-orange-500 block md:inline">{t('services')}</NavLink>
            <NavLink to="/contact" className="hover:text-orange-500 block md:inline">{t('contact')}</NavLink>
            <NavLink to="/tracking" className="hover:text-orange-500 block md:inline">{t('trackShipment')}</NavLink>
            
          </NavbarCollapse>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
