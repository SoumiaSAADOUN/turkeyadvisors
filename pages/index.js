import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";
import HomeContent from "../components/Home/Content";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import SwiperCore, {
  Autoplay,
  Pagination,
  Navigation,
  Mousewheel,
  EffectFade,
} from "swiper";
import EnquireModal from "../components/EnquireModal";
import { useState } from "react";
export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  const [showEnquireModal, setShowEnquireModal] = useState(false);
  const imagesCarousel = [
    { src: "/assets/images/u7HPicVLZyPaYyq6V3bK.jpg" },
    { src: "/assets/images/UI9XdW5dbARVEXQgzXhF.jpg" },
  ];
  SwiperCore.use([Autoplay]);

  const handleShowEnquireModal = () => {
    setShowEnquireModal(true);
  };
  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        className="h-full w-full -z-10"
        effect={"fade"}
        rewind={true}
        slidesPerView={1}
        autoplay={{
          delay: 2000,
        }}
        navigation={true}
        // mousewheel={true}
        modules={[Navigation, Pagination, Mousewheel, EffectFade, Mousewheel]}
        // onSlideChange={() => console.log("slide change")}
        // onSwiper={(swiper) => console.log(swiper)}
      >
        {imagesCarousel.map((item, index) => (
          <SwiperSlide key={index}>
            <img className="h-full" src={item.src} />
          </SwiperSlide>
        ))}

        <div
          className=" flex justify-between w-full px-24 "
          slot="container-end"
        >
          <button
            onClick={() => setShowEnquireModal(true)}
            className=" flex items-center justify-center relative z-10 -translate-y-24 font-base  bg-BLACK/30  border border-BLACK text-BACKGROUND_COLOR rounded-full px-4 py-2"
          >
            <span>Enquire Now</span>
            <span class=" z-5">
              <span class="delay-200 animate-ping absolute top-0 left-5 h-[90%] w-[70%] rounded-full bg-BLACK opacity-60"></span>
              <span class="relative inline-flex rounded-full  bg-BLACK"></span>
            </span>
          </button>
          <button
            onClick={() => setShowEnquireModal(true)}
            className=" flex items-center justify-center relative z-10 -translate-y-24 font-base  bg-BLACK/30  border border-BLACK text-BACKGROUND_COLOR rounded-full px-4 py-2"
          >
            <span>More Information</span>
            <span class=" z-5">
              <span class="delay-200 animate-ping absolute top-0 left-5 h-[90%] w-[70%] rounded-full bg-BLACK opacity-60"></span>
              <span class="relative inline-flex rounded-full  bg-BLACK"></span>
            </span>
          </button>
        </div>
      </Swiper>

      <HomeContent />
      <EnquireModal visibility={showEnquireModal} />
    </div>
  );
}
