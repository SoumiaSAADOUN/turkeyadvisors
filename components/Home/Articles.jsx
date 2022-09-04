import React from "react";
import Article from "./Article";

const Articles = () => {
  const articles = [
    {
      title: "What Do We Know About International Marmara Road",
      summery: "",
      image: "https://www.turkeyadvisors.com/storage/img/posts/6q8swdHMDaIRR6Ge1hXM.jpg",
      date: " 13 Jul 2022",
      views: "292",
    },
    {
      title: "Straightforward talks: Is Fikirtepe District Suitable for Real Estate Investment:",
      summery: "Once upon a time, Fikirtepe was a shabby, messy, and disorganized region, but within 18 years became...",
      image: "https://www.turkeyadvisors.com/storage/img/posts/zPz6jZJVHsk1mbuC1Zu8.jpg",
      date: "  20 Jul 2022",
      views: "162",
    },
  ];
  return <>
   <div className="flex justify-between mt-20">
        <h1 className="text-3xl font-bold text-PRIMARY_COLOR">Recently Added Articles</h1>
        <button className="flex items-center justify-between w-1/6 px-4 text-lg font-bold rounded text-PRIMARY_COLOR bg-SECONDARY_COLOR hover:bg-PRIMARY_COLOR hover:text-BACKGROUND_COLOR">
          Articles
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mx-4 text-xl font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
      <div className="flex gap-8 my-10">
    {articles.map((article,index)=>(
        <Article  data={article} key={`article-${index}`}/>
      ))}
    </div>
  </>;
};

export default Articles;
