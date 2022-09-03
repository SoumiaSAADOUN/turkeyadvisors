import React from "react";

const Properties = () => {
  return (
    <>
      <div className="flex justify-between my-20">
        <h1 className="text-3xl font-bold">Recently added properties.</h1>
        <button className="flex items-center justify-between w-1/6 px-4 text-lg font-bold rounded text-PRIMARY_COLOR text-BACKGROUND_COLOR bg-SECONDARY_COLOR hover:bg-GREY">
         See more <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 mx-4 text-xl font-bold"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
          
        </button>
      </div>
    </>
  );
};

export default Properties;
