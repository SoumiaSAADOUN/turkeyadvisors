import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import SectionButton from "../Buttons/SectionButton";
import Property from "./Property";
const Properties = (props) => {
  return (
    <>
      <section className="flex justify-between mt-20 flex-wrap">
        <h1 className="text-3xl font-bold text-PRIMARY_COLOR grow md:basis-2/3 ">{props.title}</h1>
        <SectionButton title='See more ' icon={<HiOutlineArrowNarrowRight className="w-6 h-6 mx-2 text-xl font-extrabold" />} />
      </section>
      <section className="flex flex-wrap my-10">
        {props.propertiesList.map((property, index) => (
          <Property data={property} key={`property-${index}`} />
        ))}
      </section>
    </>
  );
};

export default Properties;
