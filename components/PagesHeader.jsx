import React from "react";
import { HiHome, HiOutlineChevronDoubleRight } from "react-icons/hi";

const PagesHeader = (props) => {
    return <div
        className="bg-PRIMARY_COLOR/70 py-12 w-full  relative h-[200px]">
        <img
            className="absolute top-0 left-0 w-full object-cover mix-blend-overlay min-h-full "
            src="http://turkeyadvisors.com/sites/img/background.jpg" />

        <div className="relative flex flex-col gap-4 justify-center items-center">
            <div className="flex gap-4 ">
                <HiHome className="text-SECONDARY_COLOR text-2xl font-bold" />
                <HiOutlineChevronDoubleRight className="text-BACKGROUND_COLOR font-bold text-2xl" />
                <span className="text-xl text-SECONDARY_COLOR"> {props.title}</span>
            </div>
            <h1 className="text-3xl font-semibold text-BACKGROUND_COLOR">{props.title.toUpperCase()}</h1>
        </div>

    </div>
}

export default PagesHeader;