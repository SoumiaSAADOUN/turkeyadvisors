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
import { FaCircle } from "react-icons/fa";
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
      <section className="flex justify-between mt-20 lg:flex-row flex-col ease-in duration-300 transition delay-300">
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
        className="owl-carousel owl-theme projects mt-3 owl-loaded owl-drag"
        loop
        lazyLoad
        
        // nav
        animateIn="true"
        responsive={
          {0:{
              items:1,
              nav:true
          },
          1024:{
              items:2,
              nav:false
          },
          1280:{
              items:3,
              nav:true,
              loop:false
          }}
      }
      >
        {props.propertiesList.map((property, index) => (
          <Property data={property} key={`property-${index}`} />
        ))}
      </OwlCarousel>

      
      <div className="owl-dots">
        <button role="button" className="owl-dot active">
          <span></span>
        </button>
        <button role="button" className="owl-dot">
          <span></span>
        </button>
      </div>
      <div className="owl-nav">
        <button type="button" role="presentation" className="owl-prev">
          <HiArrowLeft />
        </button>
        <button type="button" role="presentation" className="owl-next">
          <HiArrowRight />
        </button>
      </div>
    </>
  );
};

export default Properties;
