import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Property from "./Property";
const Properties = (props) => {
 return (
    <>
      <section className="flex justify-between mt-20">
        <h1 className="text-3xl font-bold text-PRIMARY_COLOR">{props.title}</h1>
        <button className="flex items-center justify-between w-1/6 px-4 text-lg font-bold rounded text-PRIMARY_COLOR bg-SECONDARY_COLOR hover:bg-PRIMARY_COLOR hover:text-BACKGROUND_COLOR">
          See more
          <HiOutlineArrowNarrowRight className="w-6 h-6 mx-4 text-xl font-bold" />
        </button>
      </section>
      <section className="flex flex-wrap gap-6 my-10">
        {props.propertiesList.map((property, index) => (
          <Property data={property} key={`property-${index}`} />
        ))}
      </section>
    </>
  );
};

export default Properties;
