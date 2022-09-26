import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from "next/dynamic";
import SectionButton from "../Buttons/SectionButton";
import Article from "./Article";

const Articles = () => {
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

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
      <section className="flex flex-col justify-between mt-10 md:flex-row ">
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

      <OwlCarousel
        items={3}
        className="mt-8 owl-carousel owl-theme owl-loaded owl-drag"
        loop={true}
        lazyLoad
        nav="true"
        navText={[
          `<img src='assets/images/leftArrow.png'/>`,
          `<img src='assets/images/rightArrow.png'/>`,
        ]}
        animateIn="true"
        responsive={{
          0: {
            items: 1,
            nav:false,
          },
          768: {
            items: 2,
          },
          1280: {
            items: 3,
          },
        }}
      >
        {articles.map((article, index) => (
          <Article data={article} key={`article-${index}`} />
        ))}
      </OwlCarousel>
    </>
  );
};

export default Articles;
