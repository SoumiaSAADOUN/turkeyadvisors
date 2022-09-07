import React from "react";
import Divider from "../Divider.jsx";
import AboutUs from "./AboutUs.jsx";
import Articles from "./Articles.jsx";
import Citizenship from "./Citizenship.jsx";

import Filter from "./Filter.jsx";
import NewsLetter from "./NewsLetter.jsx";
import Properties from "./Properties.jsx";
import SomeOffers from "./SomeOffers.jsx";
import WhyUs from "./WhyUs.jsx";
const HomeContent = () => {
  return (
    <>
      <div className="w-10/12  p-6 mt-20 border-t-4 border-solid  border-SECONDARY_COLOR rounded-t-3xl h-4/5">
        <Filter />
        <Properties title="Recently added properties." />

        <Divider />
        <Articles />
      </div>
      <Citizenship />
      <div className="w-10/12 p-6 h-4/5">
        <Properties title="Projects Conform To Obtaining Turkish Citizenship" />
        <Properties title="Bargain Properties | Own What you deserve." />
        <Divider />
      </div>
      <AboutUs />
      <div className="w-10/12 pl-6 h-4/5">
        <Properties title="Sea View Properties | Own What you deserve." />
      </div>
      <SomeOffers /> 
      <div className="w-10/12 pl-6 h-4/5">
        <Properties title="Hot properties | Own What you deserve." />
        <NewsLetter/>
        <WhyUs/>
      </div>
    </>
  );
};

export default HomeContent;
