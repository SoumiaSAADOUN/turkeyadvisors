import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import {
  HiDotsCircleHorizontal,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination, Thumbs, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import SectionButton from "../Buttons/SectionButton";
import Property from "./Property";
import { FaCircle } from "react-icons/fa";

const Properties = (props) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1280px )" });
  const isMidScreen = useMediaQuery({ query: "(min-width: 1024px )" });

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

      <section className="mt-10 ">
        <Swiper
          slidesPerView={isBigScreen ? 3 : isMidScreen ? 2 : 1}
          loop={true}
          rewind={true}
          freeMode={true}
          watchSlidesProgress={true}
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          // pagination={{
          //   clickable: true,
          // }}
          modules={[Navigation, FreeMode, Thumbs]}
        >
          {props.propertiesList.map((property, index) => (
            <SwiperSlide key={`property-${index}`}>
              <Property data={property} />
            </SwiperSlide>
          ))}
        </Swiper>

        
      </section>
      <Swiper
          onSwiper={setThumbsSwiper}
          loop={true}
          rewind={true}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
         
        >
          {props.propertiesList.map((property, index) => (
            <SwiperSlide key={`property-${index}`}>
              <FaCircle key={`property-${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
    </>
  );
};

export default Properties;
