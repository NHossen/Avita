import { useTranslation } from "react-i18next";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="w-full bg-green-700 text-white py-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">
        
        {/* About / Social */}
        <div>
          <h2 className="text-xl font-bold mb-3">{t("footer.aboutTitle")}</h2>
          <p>{t("footer.aboutDesc")}</p>
          <div className="flex justify-center sm:justify-start space-x-4 mt-4 text-gray-300">
            <FaFacebookF className="hover:text-blue-500 cursor-pointer transition-colors duration-200" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition-colors duration-200" />
            <FaLinkedinIn className="hover:text-blue-700 cursor-pointer transition-colors duration-200" />
          </div>
        </div>

        {/* Contacts */}
        <div>
          <h2 className="text-xl font-bold mb-3">{t("footer.contactsTitle")}</h2>
          <p>{t("footer.tel")}</p>
          <p>+374 11 335757</p>
          <p>+374 95 335757</p>
          <p>{t("footer.email")}: info@avita.am</p>
        </div>

        {/* Address */}
        <div>
          <h2 className="text-xl font-bold mb-3">{t("footer.addressTitle")}</h2>
          <p>{t("footer.addressLine1")}</p>
          <p>{t("footer.addressLine2")}</p>
        </div>
      </div>

      <div className="text-center text-gray-300 mt-8 border-t border-green-800 pt-4 text-sm sm:text-base">
        © 2013 Avita. {t("footer.rights")}
      </div>
    </footer>
  );
}
