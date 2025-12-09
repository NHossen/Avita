// src/MainRoot/MainRoot.jsx

import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const MainRoot = () => {
    return (
        <>
            <Header />

            <main> 
                <Outlet /> 
            </main>
            
            <div className="px-4 container mx-auto">
                <Footer />
            </div>
        </>
    );
};

export default MainRoot;