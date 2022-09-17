import React from "react";
import { HiOutlineHeart } from "react-icons/hi";
import CardButton from "../Buttons/CardButton";

const Property = (props) => {
  return (
    <div className="lg:basis-1/3  md:basis-1/2  ">
      <div className="relative flex flex-col border border-solid rounded-md basis-1/4 grow mr-4 my-4 ">
        <button className="absolute w-12 h-12 rounded-full top-5 right-5 bg-PRIMARY_COLOR/50">
          <HiOutlineHeart className="w-8 h-8 m-2 text-center text-BACKGROUND_COLOR" />
          {/* <Heart className="w-8 h-8 m-2 text-center text-BACKGROUND_COLOR"/> */}
        </button>
        <img className="h-60" alt={props.data.title} src={props.data.img} />

        <h1 className="mx-4 mt-8 text-xl font-bold text-PRIMARY_COLOR">
          {props.data.title}
        </h1>
        <div className="flex justify-start gap-4 m-4 ">
          <div className="flex">
            <img
              alt={props.data.title}
              src="https://www.turkeyadvisors.com/sites/img/project/map.svg"
              className="w-6 h-6 mr-2"
            />
            {props.data.location}
          </div>
          <div className="flex">
            <img
              className="w-6 h-6 mr-2"
              src="https://www.turkeyadvisors.com/sites/img/project/bedrooms.svg"
            />
            {props.data.nbrBedrooms}
          </div>
          <div className="flex">
            <img
              alt={props.data.title}
              className="w-6 h-6 mr-2"
              src="https://www.turkeyadvisors.com/sites/img/project/bathrooms.svg"
            />
            {props.data.nbrBathrooms}
          </div>
          <div className="flex">{props.data.surface}</div>
        </div>
        <h4 className="mx-4 my-8 text-lg font-semibold text-PRIMARY_COLOR">
          Overview:
        </h4>
        <p className="mx-4 text-TEXT_COLOR text-md ">{props.data.overview}</p>
        <div className="flex justify-between m-4 flex-wrap items-center">
          <h1 className="text-xl font-bold text-PRIMARY_COLOR">
            {props.data.price}
          </h1>
          {/* <button type="button" className="px-8 font-bold text-white rounded bg-PRIMARY_COLOR hover:bg-SECONDARY_COLOR">Quick Enquire</button> */}
          <CardButton title="Quick Enquire"/>
        </div>
      </div>
    </div>
  );
};

export default Property;
