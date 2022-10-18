import React, { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import SelectComponenet from "./Home/SelectComponenet";
import CityFilter from "./Home/CityFilter";
import AreaFilter from "./Projects/AreaFilter";

const FiltreProjects = () => {
  const [showCityFilter, setShowCityFilter] = useState(false);
  const [showAreaFilter, setShowAreaFilter] = useState(false);
  const cities = ["Istanbul", "Bodrum", "Çeşme", "Alaçatı"];
  const areas = [
    "Bagcilar",
    "Bahcesehir",
    "Bakirkoy",
    "Basaksehir",
    "Bayrampasa",
    "Besiktas",
    "Beykoz",
    "Beylikduzu",
    "Cekmekoy",
    "Eyup",
  ];

  const bedrooms = [
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
      <div className="flex flex-col justify-between w-full my-12 lg:flex-row lg:px-20">
        <h1 className="text-2xl font-bold text-PRIMARY_COLOR">
          Find Your Dream House
        </h1>
        <div className="z-10 flex justify-center w-full grow md:basis-4/6 sm:basis-full md:justify-end">
          <div className="relative flex flex-wrap lg:basis-2/3">
            <AreaFilter data={cities} title="City" />
            <AreaFilter data={areas} title="Area" />
            <div
              onClick={() => {
                setShowCityFilter(false);
                setShowAreaFilter(false);
              }}
              className=" lg:basis-1/5 basis-1/3 grow lg:mr-2 md:basis-1/5 mb-2  px-1 h-[40px] "
            >
              <SelectComponenet data={propertyType} />
            </div>

            <div
              onClick={() => {
                setShowCityFilter(false);
                setShowAreaFilter(false);
              }}
              className=" lg:basis-1/5 basis-1/3 grow mr-2 md:basis-1/5 mb-2  px-1 h-[40px]   "
            >
              <SelectComponenet data={bedrooms} />
            </div>

            <button
              onClick={() => setShowCityFilter(false)}
              className="xl:hidden basis-full md:basis-1/5 grow mr-2  mb-2 flex px-4 py-2 h-[40px] justify-center items-center font-bold rounded-md text-BACKGROUND_COLOR bg-DARK_PRIMARY_COLOR hover:border-PRIMARY_COLOR hover:border hover:bg-PRIMARY_COLOR"
            >
              <HiOutlineSearch className="w-4 h-4 mr-2 text-xl font-bold" />
              Search
            </button>

            <CityFilter
              data={cities}
              title="City"
              visibility={showCityFilter}
              onCancel={() => setShowCityFilter(!showCityFilter)}
            />
            <CityFilter
              data={areas}
              title="Area"
              visibility={showAreaFilter}
              onCancel={() => setShowAreaFilter(!showCityFilter)}
            />
          </div>

          <button
            onClick={() => setShowCityFilter(false)}
            className="mr-2 mb-2 xl:flex px-4 py-2 h-[40px] xl:basis-1/5 hidden  justify-center items-center font-bold rounded-md text-BACKGROUND_COLOR bg-DARK_PRIMARY_COLOR hover:border-PRIMARY_COLOR hover:border hover:bg-PRIMARY_COLOR"
          >
            <HiOutlineSearch className="w-4 h-4 mr-2 text-xl font-bold" />
            Search
          </button>
        </div>
      </div>
    </>
  );
};
export default FiltreProjects;
