import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Article from "./Article";

const Articles = () => {
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
      <section className="flex justify-between mt-10">
        <h1 className="text-3xl font-bold text-PRIMARY_COLOR">
          Recently Added Articles
        </h1>
        <button className="flex items-center justify-between w-1/6 px-4 text-lg font-bold rounded text-PRIMARY_COLOR bg-SECONDARY_COLOR hover:bg-PRIMARY_COLOR hover:text-BACKGROUND_COLOR">
          Articles
          <HiOutlineArrowNarrowRight className="w-6 h-6 mx-4 text-xl font-bold" />
        
        </button>
      </section>
      <section className="flex flex-wrap gap-6 my-10">
        {articles.map((article, index) => (
          <Article data={article} key={`article-${index}`} />
        ))}
      </section>
    </>
  );
};

export default Articles;
