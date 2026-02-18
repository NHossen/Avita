import Hero from "../Home/Hero";
import Safari from "../Services/DesertSafari/Safari";
import SafariGridSystem from "../Services/DesertSafari/SafariGridSystem";
import HolidayTourCard from "./HolidayTourCard";
import OffersAndReviews from "./OffersAndReviews";
import PremiumVisaService from "./PremiumVisaService";



export default function Home() {
  return (
    <main className="w-full">
      {/* 1. Hero Component */}
      <Hero />

      {/* 2. Spacer (Important: gives room for the floating cards) */}
    
      <Safari />
     <SafariGridSystem />

     <HolidayTourCard />

     <OffersAndReviews />

     <PremiumVisaService />

     
    </main>
  );
}