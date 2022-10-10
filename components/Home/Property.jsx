import React from "react";
import { HiOutlineHeart } from "react-icons/hi";
import CardButton from "../Buttons/CardButton";
import Link from "next/link";

const Property = (props) => {
  return (
    <div className="relative flex flex-col border rounded shadow-lg item border-GREY md:mr-8">
      <button className="absolute w-12 h-12 rounded-full top-5 right-5 bg-PRIMARY_COLOR/50">
        <HiOutlineHeart className="w-8 h-8 m-2 text-center text-BACKGROUND_COLOR" />
        {/* <Heart className="w-8 h-8 m-2 text-center text-BACKGROUND_COLOR"/> */}
      </button>
      <Link href={`/projects/${props.data.title.toLowerCase().replaceAll(' ','-')}`} >
        <img
          className="h-[240px] rounded cursor-pointer"
          alt={props.data.title}
          src={props.data.img}
        />
      </Link>

      <Link href={`/projects/${props.data.title.toLowerCase().replaceAll(' ','-')}`} >
        <h1 className="mx-4 mt-8 text-xl font-bold cursor-pointer text-PRIMARY_COLOR">
          {props.data.title}
        </h1>
      </Link>
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
      <h4 className="mx-4 my-4 text-lg font-semibold text-PRIMARY_COLOR">
        Overview:
      </h4>
      <p className="mx-4 text-TEXT_COLOR text-md ">{props.data.overview}</p>
      <div className="flex flex-wrap items-center justify-between m-4">
        <h1 className="text-xl font-bold text-PRIMARY_COLOR">
          {props.data.price}
        </h1>
        {/* <button type="button" className="px-8 font-bold text-white rounded bg-PRIMARY_COLOR hover:bg-SECONDARY_COLOR">Quick Enquire</button> */}
        <CardButton title="Quick Enquire" />
      </div>
    </div>
  );
};

export default Property;
