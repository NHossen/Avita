// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

// import "flowbite"; // Flowbite-এর প্রয়োজন নেই যদি Navbar কম্পোনেন্ট ব্যবহার না করেন
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainRoot from "./MainRoot/MainRoot.jsx";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import "./i18n/i18n"; // i18n কনফিগারেশন ইম্পোর্ট

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/services", element: <div className="p-10 text-center">Services Page</div> },
      { path: "/gallery", element: <div className="p-10 text-center">Video Gallery</div> },
      { path: "/tracking", element: <div className="p-10 text-center">Track Shipment</div> },
      { path: "/offer", element: <div className="p-10 text-center">Hot Offer Page</div> },
      { path: "/webcam", element: <div className="p-10 text-center">Webcam Page</div> },
      { path: "/contact", element: <div className="p-10 text-center">Contact Page</div> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);