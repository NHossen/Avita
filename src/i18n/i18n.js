// src/i18n/i18n.js

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// 💡 নিশ্চিত করুন: এই JSON ফাইলগুলো (en.json, hy.json, ru.json) আপনার src/i18n ফোল্ডারে বিদ্যমান।
import en from "./en.json";
import hy from "./hy.json";
import ru from "./ru.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    hy: { translation: hy },
    ru: { translation: ru }
  },
  lng: "hy", // ডিফল্ট ভাষা হিসেবে 'hy'
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;