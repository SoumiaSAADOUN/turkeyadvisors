import React from "react";
import Divider from "../Commun/Divider.jsx";
import AboutUs from "./AboutUs.jsx";
// import Articles from "./Articles.jsx";
import Citizenship from "./Citizenship.jsx";
import Filter from "./Filter.jsx";
import NewsLetter from "./NewsLetter.jsx";
// import Properties from "./Properties.jsx";
import SomeOffers from "./SomeOffers.jsx";
import Testimonials from "./Testimonials.jsx";
import WhyUs from "./WhyUs.jsx";
import dynamic from "next/dynamic";
const Properties = dynamic(() => import("./Properties"), {
  ssr: false,
});
const Articles = dynamic(() => import("./Articles"), {
  ssr: false,
});
const HomeContent = () => {
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

  return (
    <>
      <div className="w-full ">
        <div className="md:px-4 lg:mx-[4%] xl:mx-[10%] mt-10 border-t-4 border-solid  border-SECONDARY_COLOR rounded-t-3xl">
          <Filter />
          <Properties
            title="Recently added properties."
            propertiesList={properties}
          />

          <Divider />
          <Articles />
        </div>
      </div>
      <Citizenship />
      <div className="w-full ">
        <div className="md:px-4 lg:mx-[10%]  px-3  h-4/5">
          <Properties
            title="Projects Conform To Obtaining Turkish Citizenship"
            propertiesList={properties}
          />
          <Properties
            title="Bargain Properties | Own What you deserve."
            propertiesList={properties}
          />
          <Divider />
        </div>
      </div>

      <AboutUs />
      <div className="w-full ">
        <div className="md:px-4 lg:mx-[10%] px-3  h-4/5">
          <Properties
            title="Sea View Properties | Own What you deserve."
            propertiesList={properties}
          />
        </div>
      </div>

      <SomeOffers />
      <div className="w-full ">
        <div className="md:px-4 lg:mx-[10%] px-3  h-4/5">
          <Properties
            title="Hot properties | Own What you deserve."
            propertiesList={properties}
          />
          <NewsLetter />
          <WhyUs />
          <Testimonials />
        </div>
      </div>
    </>
  );
};

export default HomeContent;
