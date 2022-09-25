import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  HiArrowLeft,
  HiArrowRight,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SectionButton from "../Buttons/SectionButton";
import Property from "./Property";
//import  "../../styles/Properties.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const Properties = (props) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1280px )" });
  const isMidScreen = useMediaQuery({ query: "(min-width: 1024px )" });
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <>
      <section className="flex flex-col justify-between mt-20 transition duration-300 ease-in delay-300 lg:flex-row">
        <h1 className="text-3xl font-bold text-PRIMARY_COLOR grow md:basis-2/3 ">
          {props.title}
        </h1>
        <div>
          <SectionButton
            title="See more "
            icon={
              <HiOutlineArrowNarrowRight className="w-6 h-6 mx-2 text-xl font-extrabold" />
            }
          />
        </div>
      </section>
      <OwlCarousel
        items={3}
        className="mt-8 owl-carousel owl-theme owl-loaded owl-drag"
        loop={true}
        lazyLoad
        nav
        navText={[
          `<img src='assets/images/leftArrow.png'/>`,
          `<img src='assets/images/rightArrow.png'/>`,
        ]}
        animateIn="true"
        responsive={{
          0: {
            items: 1,
          },
          1024: {
            items: 2,
          },
          1280: {
            items: 3,
          },
        }}
      >
        {props.propertiesList.map((property, index) => (
          <Property data={property} key={`property-${index}`} />
        ))}
      </OwlCarousel>
    </>
  );
};

export default Properties;
