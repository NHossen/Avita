// src/MainRoot/MainRoot.jsx

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FloatingWhatsApp from "../components/WhatsApp/FloatingWhatsApp";

const MainRoot = () => {
    return (
        <>
           <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      
      {/* 🔹 The button stays fixed on every page */}
      <FloatingWhatsApp />
    </div>
        </>
    );
};

export default MainRoot;