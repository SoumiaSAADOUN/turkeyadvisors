import React from "react";
import { HiSearch } from "react-icons/hi";
import Article from "../components/Home/Article";
import Property from "../components/Home/Property";
import SomeOffers from "../components/Home/SomeOffers";
import PagesHeader from "../components/Commun/PagesHeader";
import Searchbar from "../components/Commun/Searchbar";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const Articles = () => {
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
  const properties = [
    {
      img: "https://www.turkeyadvisors.com/storage/img/projects/cFlAvUifLOFMZSOIZwaC.jpeg",
      title:
        "Family Friendly Edgy Architectural Design in the Center of European Istanbul",
      overview:
        "The project has a unique, edgy architectural design, located in Kagithane municipality, which has been remodel...",
      price: "$ 2500,000",
      location: "Istanbul",
      nbrBedrooms: "3",
      nbrBathrooms: "2",
      surface: "53 Sq. m",
    },
    {
      img: "https://www.turkeyadvisors.com/storage/img/projects/HrrN8MnLdd653tRKd1pD.jpeg",
      title:
        "Family Friendly Edgy Architectural Design in the Center of European Istanbul",
      overview:
        "The project has a unique, edgy architectural design, located in Kagithane municipality, which has been remodel...",
      price: "$ 3200,000",
      location: "Istanbul",
      nbrBedrooms: "2",
      nbrBathrooms: "2",
      surface: "83 Sq. m",
    },
    {
      img: "https://www.turkeyadvisors.com/storage/img/projects/xdMHESWws3i6qK6H9OSX.jpg",
      title:
        "Family Friendly Edgy Architectural Design in the Center of European Istanbul",
      overview:
        "The project has a unique, edgy architectural design, located in Kagithane municipality, which has been remodel...",
      price: "$ 2800,000",
      location: "Istanbul",
      nbrBedrooms: "2",
      nbrBathrooms: "1",
      surface: "53 Sq. m",
    },
    {
      img: "https://www.turkeyadvisors.com/storage/img/projects/xdMHESWws3i6qK6H9OSX.jpg",
      title:
        "Family Friendly Edgy Architectural Design in the Center of European Istanbul",
      overview:
        "The project has a unique, edgy architectural design, located in Kagithane municipality, which has been remodel...",
      price: "$ 2800,000",
      location: "Istanbul",
      nbrBedrooms: "2",
      nbrBathrooms: "1",
      surface: "53 Sq. m",
    },
  ];
 
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
  ];

  return (
    <>
      <PagesHeader title="Articles" link="articles" />
      <div className="block w-4/5 mx-8 mt-16 relaive grow lg:hidden">
        <Searchbar />
      </div>
      <div className="flex flex-col my-16  gap-8 xl:ml-36 xl:mr-28 mx-[3%]">
        <div className="flex flex-col lg:mx-2 lg:w-3/5 ">
          <h1 className="text-3xl font-bold text-PRIMARY_COLOR">
            All Articles About Real Estate
          </h1>
          <p className="pt-4">
            Turkey Advisories articles are genuinely created to grant you the
            feeling as if you are in Turkey yourself by giving you the full
            comprehension knowledge about the Life, Economy, Politics, and
            Traditions of Turkey
          </p>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 h-fit lg:w-3/5">
            {articles.map((article, index) => (
              <Article data={article} key={`article-${index}`} />
            ))}
          </div>
          <div className="flex flex-col w-full lg:w-2/5">
            <div className="hidden mb-8 mr-8 lg:block h-fit">
              <Searchbar />
            </div>

            <h1 className="px-4 my-8 text-2xl border-l-2 border-SECONDARY_COLOR">
              Special Offers
            </h1>
            <div className="md:px-4 xl:mx-[10%] px-3">
              <OwlCarousel
                items={1}
                className="owl-carousel owl-theme owl-loaded owl-drag"
                loop={true}
                lazyLoad
                nav={false}
                center
                stagePadding={0}
                animateIn="true"
              >
                {properties.map((property, index) => (
                  <Property data={property} key={`property-${index}`} />
                ))}
              </OwlCarousel>
            </div>

            <SomeOffers />

            <h1 className="px-4 my-8 text-2xl border-l-2 border-SECONDARY_COLOR">
              Last Articles
            </h1>
            <div className="flex flex-col gap-8 mx-[5%]">
              {articles.map((article, index) => (
                <Article data={article} key={`article-${index}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Articles;
