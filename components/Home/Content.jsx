import React from "react";
import Divider from "../Divider.jsx";
import AboutUs from "./AboutUs.jsx";
import Articles from "./Articles.jsx";
import Citizenship from "./Citizenship.jsx";
import Filter from "./Filter.jsx";
import NewsLetter from "./NewsLetter.jsx";
import Properties from "./Properties.jsx";
import SomeOffers from "./SomeOffers.jsx";
import Testimonials from "./Testimonials.jsx";
import WhyUs from "./WhyUs.jsx";
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
  ];
  return (
    <>
      <div className="w-11/12  p-6 mt-20 border-t-4 border-solid  border-SECONDARY_COLOR rounded-t-3xl h-4/5">
        <Filter />
        <Properties title="Recently added properties." propertiesList={properties} />

        <Divider />
        <Articles />
      </div>
      <Citizenship />
      <div className="w-10/12 p-6 h-4/5">
        <Properties title="Projects Conform To Obtaining Turkish Citizenship" propertiesList={properties} />
        <Properties title="Bargain Properties | Own What you deserve." propertiesList={properties} />
        <Divider />
      </div>
      <AboutUs />
      <div className="w-10/12 pl-6 h-4/5">
        <Properties title="Sea View Properties | Own What you deserve." propertiesList={properties} />
      </div>
      <SomeOffers />
      <div className="w-10/12 pl-6 h-4/5">
        <Properties title="Hot properties | Own What you deserve." propertiesList={properties}/>
        <NewsLetter />
        <WhyUs />

        <Testimonials />
      </div>
    </>
  );
};

export default HomeContent;
