import AvailablePage from "@/components/common/available-venu";
import BookNowSection from "@/components/common/booking";
import FaqPage from "@/components/common/faq-common";
import ReusableGalleryPage from "@/components/common/gallary";
import HeroSection from "@/components/common/hero-second";
import ImagePage from "@/components/common/image";
import ThreeColumnSection from "@/components/common/other-activities";
import DynamicTitle from "@/components/ui/TitleText";
import KaraokeSection from "./arcade-section";

export default function Page() {
  const images = [
    {
      id: 1,
      src: "/home/deals2.jpg",
      title: "$29 parties",
      subtitle: "Kids Bronze Parties",
      desc: "Enjoy the best kids bronze parties with fun and games! Have a delicious meal and enjoy our fun activities!",
    },
    {
      id: 2,
      src: "/home/deals2.jpg",
      title: "Eat and Play",
      subtitle: "Spend $65 and Get 20",
      desc: "Have a delicious meal and enjoy our fun activities!",
    },
    {
      id: 3,
      src: "/home/deals3.jpg",
      title: "New Drinks Menu",
      subtitle: "Sip Royal",
      desc: "Try our latest drinks menu and refresh yourself!",
    },
  ];

  const items = [
    {
      imgUrl:
        "/img/things-page/kp-melbourne-website-cta-activity-list-grid-bowling_690_460.jpg",
      overlayText: "First Item",
    },
    {
      imgUrl:
        "/img/things-page/kp-melbourne-website-cta-activity-list-grid-darts_690_460.jpg",
      overlayText: "Second Item",
    },
    {
      imgUrl:
        "/img/things-page/kp-melbourne-website-cta-activity-list-grid-batting-cage_690_460.jpg",
      overlayText: "Third Item",
    },
    {
      imgUrl:
        "/img/things-page/kp-melbourne-website-cta-activity-list-grid-bowling_690_460.jpg",
      overlayText: "First Item",
    },
    {
      imgUrl:
        "/img/things-page/kp-melbourne-website-cta-activity-list-grid-darts_690_460.jpg",
      overlayText: "Second Item",
    },
    {
      imgUrl:
        "/img/things-page/kp-melbourne-website-cta-activity-list-grid-batting-cage_690_460.jpg",
      overlayText: "Third Item",
    },
    {
      imgUrl:
        "/img/things-page/kp-melbourne-website-cta-activity-list-grid-bowling_690_460.jpg",
      overlayText: "First Item",
    },
    {
      imgUrl:
        "/img/things-page/kp-melbourne-website-cta-activity-list-grid-darts_690_460.jpg",
      overlayText: "Second Item",
    },
    {
      imgUrl:
        "/img/things-page/kp-melbourne-website-cta-activity-list-grid-batting-cage_690_460.jpg",
      overlayText: "Third Item",
    },
  ];
  return (
    <>
      <HeroSection title="bowling" imageUrl="/second-hero.jpg" />
      <div className="max-w-[1330px] mx-auto md:px-12 lg:px-16 ">
        <BookNowSection title="MAKE A BOWLING BOOKING" />
        <KaraokeSection />
        <AvailablePage />

        <ThreeColumnSection title="other activities" items={items} />
        <FaqPage />
        <div className="">
          <div className="py-3 md:py-8 ">
            <DynamicTitle blackText={"DEALS AND SPECIALS"} />
          </div>
          <ReusableGalleryPage images={images} />
        </div>

        <div className="pb-5  md:pb-12">
          <ImagePage />
        </div>
      </div>
    </>
  );
}
