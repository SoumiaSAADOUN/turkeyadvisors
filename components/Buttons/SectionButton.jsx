import React from "react";

const SectionButton = (props) => {
    return <button className=" grow basis-1/10 text-PRIMARY_COLOR relative flex justify-center items-center py-2 text-xl  overflow-hidden transition-all bg-SECONDARY_COLOR rounded hover:bg-PRIMARY_COLOR  hover:text-SECONDARY_COLOR group">
        <span className="w-full h-0  rounded bg-PRIMARY_COLOR absolute top-0 left-0 ease-out duration-200 transition-all group-hover:w-full group-hover:h-full group-hover:text-SECONDARY_COLOR  ">
        </span>
        <span className="w-full flex justify-center items-center   transition-colors duration-200 ease-in-out group-hover:text-SECONDARY_COLOR z-10 ">    {props.title} {props.icon}
        </span>
    </button>

}

export default SectionButton;