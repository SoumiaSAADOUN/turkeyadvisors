import React from "react";
import { HiOutlineCalendar, HiOutlineEye } from "react-icons/hi";

const Article = (props) => {
  return (
    <>
      <article className="relative flex flex-col border border-solid rounded-md grow basis-1/4 flex-wrap group hover:cursor-pointer hover:bg-SECONDARY_COLOR ">
        <img className="h-60 " alt={props.data.title} src={props.data.image} />
        <div className="relative  mt-20 border-transparent rounded-md border-y-2 hover:border-SECONDARY_COLOR ">
          <div className="absolute bottom-0 transition transform  text-PRIMARY_COLOR">
            <div className="flex justify-between px-4 bg-transparent top-2 py-2 text-BACKGROUND_COLOR">
              <div className="flex gap-2">
                <HiOutlineCalendar className="w-6 h-6 mx-2 text-xl font-bold" />
                <span>{props.data.date}</span>
              </div>
              <div className="flex gap-2">
                <HiOutlineEye className="w-6 h-6 mx-2 text-xl font-bold" />
                <span> {props.data.views} Views</span>
              </div>
            </div>
            <div className="p-2 bg-BACKGROUND_COLOR text-PRIMARY_COLOR group-hover:bg-SECONDARY_COLOR group-hover:-translate-y-1  group-hover:ease-in transition duration-200 ">
              <h3 className="text-lg text-SECONDARY_COLOR group-hover:text-PRIMARY_COLOR  ">
                Articles
              </h3>
              <h1 className="text-xl">{props.data.title}</h1>
              <div>
                <p className="hidden text-xs group-hover:flex ">
                  {props.data.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Article;
