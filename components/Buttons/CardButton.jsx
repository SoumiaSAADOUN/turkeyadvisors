import React from "react";

const CardButton = (props) => {
    return <div className="transition-all h-[60px]  group flex flex-col">
        <button className=" px-8  h-fit py-[8px] text-BACKGROUND_COLOR relative flex flex-col justify-center items-center  text-sm bg-DARK_PRIMARY_COLOR rounded">
            <span className="w-0 h-full  rounded bg-SECONDARY_COLOR absolute top-0 right-0 ease-out duration-200 transition-all group-hover:w-full group-hover:h-full group-hover:text-DARK_PRIMARY_COLOR  ">
            </span>
            <span className="w-full flex justify-center items-center transition-all ease-in-out group-hover:text-DARK_PRIMARY_COLOR z-10  ">    {props.title}
            </span>
        </button>
        <button className="relative border-t border-PRIMARY_COLOR my-2 text-BACKGROUND_COLOR  group-hover:border-BACKGROUND_COLOR top-0 left-0 ease-out duration-200 transition-all">
        </button>

    </div>

}

export default CardButton