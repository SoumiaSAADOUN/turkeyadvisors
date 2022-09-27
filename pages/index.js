import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";
import HomeContent from "../components/Home/Content";

import EnquireModal from "../components/Modals/EnquireModal";
import { useState } from "react";

// import OwlCarousel from 'react-owl-carousel';

import "owl.carousel/dist/assets/owl.carousel.css";

import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  const [showEnquireModal, setShowEnquireModal] = useState(false);
  const imagesCarousel = [
    { src: "/assets/images/u7HPicVLZyPaYyq6V3bK.jpg" },
    { src: "/assets/images/UI9XdW5dbARVEXQgzXhF.jpg" },
  ];

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <OwlCarousel
        className="owl-carousel owl-theme owl-loaded owl-drag h-full"
        loop
        lazyLoad
        animateOut="fadeOut"
        // animateIn
        center
        items={1}
        autoplay
        dots={false}
      >
        {imagesCarousel.map((item, index) => (
          <img key={index} src={item.src} />
        ))}
      </OwlCarousel>
      <div className="flex justify-between w-full px-24 ">
        <button
          onClick={() => setShowEnquireModal(true)}
          className="relative z-10 flex items-center justify-center px-4 py-2 -translate-y-36 border rounded-full font-base bg-BLACK/30 border-BLACK text-BACKGROUND_COLOR"
        >
          <span>Enquire Now</span>
          <span className=" z-5">
            <span className="delay-200 animate-ping absolute top-0 left-5 h-[90%] w-[70%] rounded-full bg-BLACK opacity-60"></span>
            <span className="relative inline-flex rounded-full bg-BLACK"></span>
          </span>
        </button>
        <button
          onClick={() => setShowEnquireModal(true)}
          className="relative z-10 flex items-center justify-center px-4 py-2 -translate-y-36 border rounded-full font-base bg-BLACK/30 border-BLACK text-BACKGROUND_COLOR"
        >
          <span>More Information</span>
          <span className=" z-5">
            <span className="delay-200 animate-ping absolute top-0 left-5 h-[90%] w-[70%] rounded-full bg-BLACK opacity-60"></span>
            <span className="relative inline-flex rounded-full bg-BLACK"></span>
          </span>
        </button>
      </div>
      <HomeContent />
      <EnquireModal
        visibility={showEnquireModal}
        onCancel={() => setShowEnquireModal(false)}
      />
    </div>
  );
}
