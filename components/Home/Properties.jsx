import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import Property from "./Property";
const Properties = (props) => {
  const data = [
    {
      img: "https://www.turkeyadvisors.com/storage/img/projects/cFlAvUifLOFMZSOIZwaC.jpeg",
      title:
        "Family Friendly Edgy Architectural Design in the Center of European Istanbul",
      overview:
        "The project has a unique, edgy architectural design, located in Kagithane municipality, which has been remodel...",
      price: "$ 2500,000",
      location: "Istanbul",
      nbrBedrooms: "3",
      nbrBathrooms: "2",
      surface: "53 Sq. m",
    },
    {
      img: "https://www.turkeyadvisors.com/storage/img/projects/HrrN8MnLdd653tRKd1pD.jpeg",
      title:
        "Family Friendly Edgy Architectural Design in the Center of European Istanbul",
      overview:
        "The project has a unique, edgy architectural design, located in Kagithane municipality, which has been remodel...",
      price: "$ 3200,000",
      location: "Istanbul",
      nbrBedrooms: "2",
      nbrBathrooms: "2",
      surface: "83 Sq. m",
    },
    {
      img: "https://www.turkeyadvisors.com/storage/img/projects/xdMHESWws3i6qK6H9OSX.jpg",
      title:
        "Family Friendly Edgy Architectural Design in the Center of European Istanbul",
      overview:
        "The project has a unique, edgy architectural design, located in Kagithane municipality, which has been remodel...",
      price: "$ 2800,000",
      location: "Istanbul",
      nbrBedrooms: "2",
      nbrBathrooms: "1",
      surface: "53 Sq. m",
    },
  ];
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
        {data.map((property, index) => (
          <Property data={property} key={`property-${index}`} />
        ))}
      </section>
    </>
  );
};

export default Properties;
