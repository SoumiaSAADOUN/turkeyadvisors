import React from "react";
import { HiSearch } from "react-icons/hi";

const Searchbar = () => {
  return <div className="relative h-[44px] items-center justify-center ">
    <div className="m-12 h-[24px] w-[24px] absolute top-[20px] left-4 pl-[3px] font-extrabold  pointer-events-none">
      <HiSearch className="text-SECONDARY_COLOR" />
    </div>
    <input
      type="text"
      placeholder={"Search"}
      id="searchInput"
      className=" w-full my-2 border rounded-md py-[8px] pr-[16px] pl-10 bg-WHITE"
      name="searchKeyword"
    />

  </div>
};
export default Searchbar;
