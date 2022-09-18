import React from "react";

import { useRouter } from "next/router";
import en from "../../locales/en";
import fr from "../../locales/fr";
import { FaMapMarkerAlt, FaSortDown } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
import SelectComponenet from "./SelectComponenet";
const Filter = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  const badrooms = [
    { title: "Bedrooms" },
    { title: "1+0" },
    { title: "1+1" },
    { title: "2+1" },
    { title: "3+1" },
    { title: "4+1" },
    { title: "More" },
  ];

  const propertyType = [
    { title: "Property Type" },
    { title: "Apartment" },
    { title: "Villa" },
    { title: "Land" },
    { title: "Shop" },
    { title: "Home Office" },
    { title: "Offices" },
  ];
  return (
    <>
      <section className="flex flex-wrap justify-between mt-4 ml-4">
        <h1 className="text-2xl font-semibold md:basis-2/6 sm:basis-full ">
          {t.home.dreamHome}
        </h1>
        <div className="flex flex-wrap md:basis-4/6 sm:basis-full w-full justify-center md:justify-end">
          <button className="flex items-center justify-between lg:basis-1/5 basis-full grow mr-2 md:basis-1/3 mb-2  px-1 h-[40px] rounded-lg shadow-md caret-yellow-100">
            <span className="flex items-center ">
              <FaMapMarkerAlt
                className="h-4 w-4 mr-2 text-SECONDARY_COLOR"
                aria-hidden="true"
              />
              City
            </span>
            <span className="pointer-events-none ml-3 pb-2 flex ">
              <FaSortDown
                className="h-5 w-5 text-SECONDARY_COLOR"
                aria-hidden="true"
              />
            </span>
          </button>

          <div className=" lg:basis-1/5 basis-full grow mr-2 md:basis-1/3 mb-2  px-1 h-[40px] rounded-lg shadow-md caret-yellow-100">
            <SelectComponenet data={propertyType} />
          </div>
          <div className=" lg:basis-1/5 basis-full grow mr-2 md:basis-1/3 mb-2  px-1 h-[40px] rounded-lg shadow-md caret-yellow-100">
            <SelectComponenet data={badrooms} />
          </div>

          {/* <select className="lg:basis-1/5 basis-full grow md:basis-1/3 mr-2 mb-2 px-1 h-[40px] rounded-lg shadow-md caret-yellow-100">
            <option value={t.home.city}>{t.home.city}</option>
          </select> */}
          <button className=" lg:basis-1/5 basis-full grow md:basis-1/3 mr-2  mb-2 flex px-4 py-2 h-[40px] justify-center items-center font-bold rounded-md text-BACKGROUND_COLOR bg-DARK_PRIMARY_COLOR hover:border-PRIMARY_COLOR hover:border hover:bg-PRIMARY_COLOR">
            <HiOutlineSearch className="w-4 h-4 mr-2 text-xl font-bold" />
            {t.home.search}
          </button>
        </div>
      </section>
    </>
  );
};

export default Filter;
