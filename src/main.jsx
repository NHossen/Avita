// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// import "flowbite"; // Flowbite-এর প্রয়োজন নেই যদি Navbar কম্পোনেন্ট ব্যবহার না করেন
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRoot from "./MainRoot/MainRoot.jsx";
import Home from "./components/Home/Home.jsx";
import "./i18n/i18n"; // i18n কনফিগারেশন ইম্পোর্ট
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Blog from "./components/Blogs/Blogs.jsx";
import VisaServices from "./components/Services/VisaService/VisaService.jsx";
import TourPackages from "./components/Services/TourPackages/TourPackages.jsx";
import DesertSafari from "./components/Services/DesertSafari/DesertSafari.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/visa_services", element: <VisaServices /> },
      { path: "/tour_packages", element: <TourPackages /> },
      { path: "/desert_safari", element: <DesertSafari /> },
      { path: "/contact", element: <Contact /> },
      { path: "/blogs", element: <Blog /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);