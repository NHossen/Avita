// src/components/Home/Home.jsx

import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-5xl font-extrabold text-green-700">{t('welcomeTitle', 'Welcome to Avita Logistics')}</h2>
      <p className="mt-4 text-xl text-gray-600">{t('homeSlogan', 'Your trusted connection to Armenia and beyond.')}</p>
      
      {/* স্ক্রল করার জন্য লম্বা কন্টেন্ট যোগ করা হলো */}
      <div className="mt-10 h-[1500px] bg-gray-50 p-10 rounded-lg shadow-inner">
         <p className="text-gray-500">Scroll down to see the fixed header in action.</p>
         {/*  */}
      </div>
    </div>
  );
}