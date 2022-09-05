import React from "react";
import Divider from "../Divider.jsx";
import Articles from "./Articles.jsx";
import Citizenship from "./Citizenship.jsx";

import  Filter from "./Filter.jsx";
import  Properties from "./Properties.jsx";
const HomeContent = () => {
  return (
    <>
      <div className="w-10/12  p-6 mt-20 border-t-4 border-solid  border-SECONDARY_COLOR rounded-t-3xl h-4/5">
        <Filter />
        <Properties title="Recently added properties."/>

        <Divider/>
        <Articles/>
      </div>
      <Citizenship/>
      <div className="w-10/12 p-6 h-4/5">
        <Properties title="Projects Conform To Obtaining Turkish Citizenship"/>
        <Properties title="Bargain Properties | Own What you deserve."/>
        <Divider/>
      </div>
      
      <div className="w-full pl-6 h-4/5">
       
      </div>
    </>
  );
};

export default HomeContent;
