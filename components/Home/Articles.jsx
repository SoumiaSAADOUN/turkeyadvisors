import React from "react";
import { useMediaQuery } from "react-responsive";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SectionButton from "../Buttons/SectionButton";
import Article from "./Article";

const Articles = () => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 1280px )" });
  const isMidScreen = useMediaQuery({ query: "(min-width: 1024px )" });

  const articles = [
    {
      title: "What Do We Know About International Marmara Road",
      summary:
        "Once upon a time, Fikirtepe was a shabby, messy, and disorganized region, but within 18 years became...",
      image:
        "https://www.turkeyadvisors.com/storage/img/posts/6q8swdHMDaIRR6Ge1hXM.jpg",
      date: "13 Jul 2022",
      views: "292",
    },
    {
      title:
        "Straightforward talks: Is Fikirtepe District Suitable for Real Estate Investment:",
      summary:
        "Once upon a time, Fikirtepe was a shabby, messy, and disorganized region, but within 18 years became...",
      image:
        "https://www.turkeyadvisors.com/storage/img/posts/zPz6jZJVHsk1mbuC1Zu8.jpg",
      date: "20 Jul 2022",
      views: "162",
    },
    {
      title:
        "Straightforward talks: Is Fikirtepe District Suitable for Real Estate Investment:",
      summary:
        "Once upon a time, Fikirtepe was a shabby, messy, and disorganized region, but within 18 years became...",
      image:
        "https://www.turkeyadvisors.com/storage/img/posts/zPz6jZJVHsk1mbuC1Zu8.jpg",
      date: "20 Jul 2022",
      views: "162",
    },
  ];
  return (
    <>
      <section className="flex justify-between mt-10 lg:flex-row flex-col ">
        <h1 className="text-3xl font-bold text-PRIMARY_COLOR grow md:basis-2/3">
          Recently Added Articles
        </h1>
        <div>
          <SectionButton
            title="Articles"
            icon={
              <HiOutlineArrowNarrowRight className="w-6 h-6 mx-2 text-xl font-extrabold" />
            }
          />
        </div>
      </section>
      <section className="mt-10 ">
        <Swiper
          slidesPerView={isBigScreen? 3 : isMidScreen? 2 :1 }
          grabCursor={true}
          loop={true}
          loopFillGroupWithBlank={true}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[FreeMode, Pagination]}
        >
          {articles.map((article, index) => (
            <SwiperSlide key={`property-${index}`}>
              <Article data={article} key={`article-${index}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    
    </>
  );
};

export default Articles;
