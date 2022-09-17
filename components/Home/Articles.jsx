import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import SectionButton from "../Buttons/SectionButton";
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
      <section className="flex justify-between mt-10 flex-wrap ">
        <h1 className="text-3xl font-bold text-PRIMARY_COLOR grow basis-4/5">
          Recently Added Articles
        </h1>
        <SectionButton title='Articles' icon={<HiOutlineArrowNarrowRight className="w-6 h-6 mx-4 text-xl font-bold" />} />
      </section>
      <section className="flex flex-wrap justify-center my-10">
        {articles.map((article, index) => (
          <Article data={article} key={`article-${index}`} />
        ))}
      </section>
    </>
  );
};

export default Articles;
