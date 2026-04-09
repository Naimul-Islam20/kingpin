
import BookPage from "@/components/sections/book/booking";
import CustomPage from "@/components/sections/custom/custom";


import HeroSection from "@/components/sections/hero/hero";

import EatsDrinks from "@/components/sections/eats/eats-drinks";
import Attractions from "@/components/sections/attractions/attractions";
import ReserveLane from "@/components/sections/reserve-lane/reserve-lane";
import SummerPass from "@/components/sections/summer-pass/summer-pass";
import DiningTeaser from "@/components/sections/dining/dining-teaser";
import RoyalPage from "@/components/sections/royal/royal";
import Rewards from "@/components/sections/rewards/rewards";
import ExperienceShop from "@/components/sections/shop/experience-shop";
import Newsletter from "@/components/sections/newsletter/newsletter";


export default function Home() {
  return (
    <main>
      <HeroSection />
      <ReserveLane />

      <EatsDrinks />
      <Attractions />
      <SummerPass />
      <ExperienceShop />
      <Rewards />
      <Newsletter />
      {/* <DiningTeaser /> */}

      {/* 
      <BookPage />
      <CustomPage />
      <RoyalPage /> 
      */}
    </main>
  );
}
