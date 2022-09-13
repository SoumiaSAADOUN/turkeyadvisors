import React from "react";
import { HiOutlineSearch } from "react-icons/hi";

const FiltreProjects = () => {
    return <>
        <div className="flex px-20 my-12 gap-4 flex-wrap">
            <h1 className="text-PRIMARY_COLOR text-2xl font-bold">
                Find Your Dream House
            </h1>
            <select
                className="basis-1/8 grow  rounded-lg shadow-md caret-yellow-100"
                defaultValue='City'
            >
                <option value='city'>City</option>
            </select>

            <select
                className="basis-1/8 grow rounded-lg shadow-md caret-yellow-100"
                defaultValue='Area'
            >
                <option value='city'>Area</option>
            </select>
            <select
                className="basis-1/8 grow  rounded-lg shadow-md caret-yellow-100"
                defaultValue='Property type'
            >
                <option value='city'>Property type</option>
            </select>
            <select
                className="basis-1/8 grow rounded-lg shadow-md caret-yellow-100"
                defaultValue='Bedrooms'
            >
                <option value='city'>Bedrooms</option>
            </select>
            <button className="flex basis-1/8 grow px-8 py-2 justify-between items-center font-bold text-xl rounded text-BACKGROUND_COLOR bg-PRIMARY_COLOR hover:text-PRIMARY_COLOR hover:border-PRIMARY_COLOR hover:border hover:bg-BACKGROUND_COLOR">
                Search <HiOutlineSearch className="w-5 h-5  text-xl font-bold" />

            </button>
        </div></>
}
export default FiltreProjects;