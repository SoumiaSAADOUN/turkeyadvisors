import React from "react";

const Property = (props) => {
  return (
    <>
      <div className="relative flex flex-col border border-solid rounded-md basis-1/4 grow">
        <button className="absolute w-12 h-12 rounded-full top-5 right-5 bg-PRIMARY_COLOR/50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8 m-2 text-center text-BACKGROUND_COLOR"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>

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
        <div className="flex justify-between m-4">
          <h1 className="text-2xl font-bold text-PRIMARY_COLOR">
            {props.data.price}
          </h1>
          {/* <button type="button" className="px-8 font-bold text-white rounded bg-PRIMARY_COLOR hover:bg-SECONDARY_COLOR">Quick Enquire</button> */}
          <button className="px-10 font-bold text-center rounded text-BACKGROUND_COLOR bg-PRIMARY_COLOR hover:bg-SECONDARY_COLOR hover:text-PRIMARY_COLOR">
            Quick Enquire
          </button>
        </div>
      </div>
    </>
  );
};

export default Property;
