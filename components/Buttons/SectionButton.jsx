import React from "react";

const SectionButton = (props) => {
  return (
    <button className="relative flex items-center justify-center px-4 py-2 overflow-hidden text-xl transition-all rounded  grow basis-1/10 text-PRIMARY_COLOR bg-SECONDARY_COLOR hover:bg-PRIMARY_COLOR hover:text-SECONDARY_COLOR group">
      <span className="absolute top-0 left-0 w-full h-0 transition-all duration-200 ease-out rounded bg-PRIMARY_COLOR group-hover:w-full group-hover:h-full group-hover:text-SECONDARY_COLOR "></span>
      <span className="z-10 flex items-center justify-center w-full transition-colors duration-200 ease-in-out group-hover:text-SECONDARY_COLOR ">
        {" "}
        {props.title} {props.icon}
      </span>
    </button>
  );
};

export default SectionButton;
