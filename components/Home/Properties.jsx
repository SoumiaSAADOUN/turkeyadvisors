import React from "react";
import Property from './Property'
const Properties = () => {
  const data = [
    {
      img: "https://www.turkeyadvisors.com/storage/img/projects/cFlAvUifLOFMZSOIZwaC.jpeg",
      title:
        "Family Friendly Edgy Architectural Design in the Center of European Istanbul",
      overview:
        "The project has a unique, edgy architectural design, located in Kagithane municipality, which has been remodel...",
        price:'$ 2500,000',
        location:'Istanbul',
        nbrBedrooms:'3',
        nbrBathrooms:'2',
        surface:'53 Sq. m'
    },
    {
      img: "https://www.turkeyadvisors.com/storage/img/projects/HrrN8MnLdd653tRKd1pD.jpeg",
      title:
        "Family Friendly Edgy Architectural Design in the Center of European Istanbul",
      overview:
        "The project has a unique, edgy architectural design, located in Kagithane municipality, which has been remodel...",
        price:'$ 3200,000',
        location:'Istanbul',
        nbrBedrooms:'2',
        nbrBathrooms:'2',
        surface:'83 Sq. m'
    },
    {
      img: "https://www.turkeyadvisors.com/storage/img/projects/xdMHESWws3i6qK6H9OSX.jpg",
      title:
        "Family Friendly Edgy Architectural Design in the Center of European Istanbul",
      overview:
        "The project has a unique, edgy architectural design, located in Kagithane municipality, which has been remodel...",
        price:'$ 2800,000',
        location:'Istanbul',
        nbrBedrooms:'2',
        nbrBathrooms:'1',
        surface:'53 Sq. m'
    },
  ];
  return (
    <>
      <div className="flex justify-between mt-20">
        <h1 className="text-3xl font-bold text-PRIMARY_COLOR">Recently added properties.</h1>
        <button className="flex items-center justify-between w-1/6 px-4 text-lg font-bold rounded text-PRIMARY_COLOR  bg-SECONDARY_COLOR hover:bg-PRIMARY_COLOR hover:text-BACKGROUND_COLOR">
          See more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 mx-4 text-xl font-bold"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
      </div>
        
    </>
  );
};

export default Properties;
