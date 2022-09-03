import React from "react";

import  Filter from "./Filter.jsx";
import  Properties from "./Properties.jsx";
const HomeContent = () => {
  return (
    <>
      <div className="absolute w-10/12 p-6 m-20 border-t-4 border-solid border-SECONDARY_COLOR rounded-t-3xl h-4/5">
        <Filter />
        <Properties/>
      </div>
    </>
  );
};

export default HomeContent;
