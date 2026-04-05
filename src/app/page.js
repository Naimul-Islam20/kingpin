
import BookPage from "@/components/sections/book/booking";
import CustomPage from "@/components/sections/custom/custom";


import HeroSection from "@/components/sections/hero/hero";
import PartySlider from "@/components/sections/party/party-slider";
import EatsDrinks from "@/components/sections/eats/eats-drinks";
import Attractions from "@/components/sections/attractions/attractions";
import ReserveLane from "@/components/sections/reserve-lane/reserve-lane";
import SummerPass from "@/components/sections/summer-pass/summer-pass";
import DiningTeaser from "@/components/sections/dining/dining-teaser";
import RoyalPage from "@/components/sections/royal/royal";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <ReserveLane />
      <PartySlider />
      <EatsDrinks />
      <Attractions />
      <SummerPass />
      {/* <DiningTeaser /> */}

      {/* 
      <BookPage />
      <CustomPage />
      <RoyalPage /> 
      */}
    </main>
  );
}
