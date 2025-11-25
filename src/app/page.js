
import BookPage from "@/components/sections/book/booking";
import CustomPage from "@/components/sections/custom/custom";


import HeroSection from "@/components/sections/hero/hero";
import RoyalPage from "@/components/sections/royal/royal";


export default function Home() {
  return (
    <main>
      <HeroSection />

      <BookPage />
      <CustomPage />
      
      <RoyalPage />
    </main>
  );
}
