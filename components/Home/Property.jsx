import React from "react";

const Property = (props) => {
  return (
    <>
      <div className="relative rounded-md flex flex-col border-solid border ">
        <button className="absolute top-5 right-5 rounded-full bg-PRIMARY_COLOR/50 w-12 h-12">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 text-center m-2 text-BACKGROUND_COLOR"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
        <img className="h-60" src={props.data.img} />

        <h1 className="mt-8 mx-4 text-xl font-bold text-PRIMARY_COLOR">
          {props.data.title}
        </h1>
        <div className="flex justify-start m-4 gap-4 ">
          <div className="flex">
            <img
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
              className="w-6 h-6 mr-2"
              src="https://www.turkeyadvisors.com/sites/img/project/bathrooms.svg"
            />
            {props.data.nbrBathrooms}
          </div>
          <div className="flex">{props.data.surface}</div>
        </div>
        <h4 className="text-PRIMARY_COLOR my-8 mx-4 font-semibold text-lg">
          Overview:
        </h4>
        <p className="text-TEXT_COLOR mx-4  text-md ">{props.data.overview}</p>
        <div className="flex justify-between m-4">
          <h1 className=" text-2xl font-bold text-PRIMARY_COLOR">
            {props.data.price}
          </h1>
          {/* <button type="button" className=" text-white bg-PRIMARY_COLOR rounded px-8 hover:bg-SECONDARY_COLOR  font-bold">Quick Enquire</button> */}
          <button className="text-center px-10 font-bold rounded text-BACKGROUND_COLOR bg-PRIMARY_COLOR hover:bg-SECONDARY_COLOR hover:text-PRIMARY_COLOR">
            Quick Enquire
          </button>
        </div>
      </div>
    </>
  );
};

export default Property;
