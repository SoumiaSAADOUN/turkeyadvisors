import React from "react";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import Article from "../../components/Home/Article";
import Property from "../../components/Home/Property";
import Searchbar from "../../components/Commun/SearchBar";
import SomeOffers from "../../components/Home/SomeOffers";
import PagesHeader from "../../components/Commun/PagesHeader";

import FollowUs from "../../components/Commun/FollowUs";
import { Eye } from "heroicons-react";
import { CalendarFilled } from "@ant-design/icons";

const ArticlePage = () => {
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
    
  ];

  const articles = [
   
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
  ];
  const tags = ['#Turkey', '#Istanbul', '#Residence_permit', '#Living_in_turkey', '#Turkey', '#Istanbul', '#Residence_permit',]
  return (
    <>
      <PagesHeader title="Snack your way through Istanbul Stereet food" link="Snack-your-way-through-Istanbul-Stereet-food" />
      <div className="block w-4/5 mx-8 mt-16 relaive grow lg:hidden">
        <Searchbar />
      </div>
      <div className="flex flex-col my-16  gap-8  mx-[5%]">
        <div className="flex flex-col lg:w-2/3 ">
          <h1 className="text-3xl font-bold text-DARK_PRIMARY_COLOR">
            Snack your way through Istanbul Stereet food
          </h1>
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full h-fit lg:w-2/3">
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <CalendarFilled className="text-SECONDARY_COLOR" />
                <span className="text-base font-semibold text-DARK_PRIMARY_COLOR"> 12 OCT 2022</span>
              </div>
              <div className="flex gap-2 items-center">
                <Eye className="text-SECONDARY_COLOR" />
                <span className="text-base font-semibold text-DARK_PRIMARY_COLOR"> 568 views</span>
              </div>
            </div>

            <div className="leading-9 text-lg text-DARK_PRIMARY_COLOR">
              <img className="w-full my-4" src="https://www.turkeyadvisors.com/storage/img/posts/Yht7XxuyIiPwKX4OFQqY.jpg" alt="post" />
              <p>Istanbul is a historic city with a rich culinary history that has hosted several civilizations throughout the years. It boasts the finest cuisine selections because it is Turkey's most populous and diversified metropolis. Istanbul and Turkey's incredible flavours are perfectly captured in the street cuisine there.&nbsp;</p>
              <p>Lahmacun:</p>
              <img className="w-full my-4" src="https://www.turkeyadvisors.com/images/63454cfacdf1d.jpeg" />
              <p>One of the most democratic culinary creations from Turkey is dürüm. Why? It may be found at even the most exclusive restaurants and on street corners alike. This meal in a wrap will definitely satisfy your appetite, whether you favor the chicken, beef, cheese, or vegetarian options. Visit Taksim Square any time of day for crowd-pleasing dürüm.</p>
              <p>An extremely thin tortilla is used to wrap meat, tomatoes, peppers, and a considerable amount of spices in tantuni, a dish that is closely related to dürüm. The majority of Mersin inhabitants (the hometown of tantuni) say it isn't the real thing unless it burns your lips. It typically comes in hot and less-spicy varieties.&nbsp;</p>
            </div>

            <div className="my-8 border-y-[1px] border-PRIMARY_COLOR flex gap-4 flex-col md:flex-row justify-between md:items-center py-8">

              <div className="flex flex-wrap">
                {tags.map((tag, index) => (
                  <div className="h-fit w-fit m-2 px-2 bg-DARK_PRIMARY_COLOR text-SECONDARY_COLOR text-xs rounded" key={`tag-${index}`}> {tag}</div>
                ))}
              </div>
              <FollowUs />

            </div>

          </div>
          <div className="flex flex-col w-full lg:w-1/3">
            <div className="hidden mb-8 mr-8 lg:block h-fit">
              <h1 className="px-4  font-bold text-2xl border-l-2 border-SECONDARY_COLOR">
                Search for something
              </h1>
              <Searchbar />
            </div>

            <h1 className="px-4 mb-8 font-bold text-2xl border-l-2 border-SECONDARY_COLOR">
              Special Offers
            </h1>
            <div className="md:px-4 px-3">
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

export default ArticlePage;
