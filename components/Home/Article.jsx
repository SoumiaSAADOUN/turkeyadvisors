
import Link from "next/link";
import React from "react";
import { HiOutlineCalendar, HiOutlineEye } from "react-icons/hi";

const Article = (props) => {
  return (

    <article className="relative flex flex-col flex-wrap border rounded-lg border-LIGHT_GREY group hover:cursor-pointer hover:bg-SECONDARY_COLOR md:mr-8">

      <Link href={`/blog/${props.data.title.toLowerCase().replaceAll(' ', '-')}`} >
        <img className="rounded-lg h-60 " alt={props.data.title} src={props.data.image} />
      </Link>
      <div className="relative mt-20 border-transparent rounded-md border-y-2 ">
        <div className="absolute bottom-0 transition transform text-PRIMARY_COLOR">
          <div className="flex justify-between px-4 py-2 bg-transparent top-2 text-BACKGROUND_COLOR">
            <div className="flex gap-2">
              <HiOutlineCalendar className="w-6 h-6 mx-2 text-xl font-bold" />
              <span>{props.data.date}</span>
            </div>
            <div className="flex gap-2">
              <HiOutlineEye className="w-6 h-6 mx-2 text-xl font-bold" />
              <span> {props.data.views} Views</span>
            </div>
          </div>
          <div className="p-2 transition-transform duration-200 bg-BACKGROUND_COLOR text-PRIMARY_COLOR group-hover:bg-SECONDARY_COLOR group-hover:-translate-y-2 group-hover:ease-in ">
            <h3 className="text-lg text-SECONDARY_COLOR group-hover:text-PRIMARY_COLOR ">
              Articles
            </h3>
            <h1 className="text-xl">{props.data.title}</h1>
            <div>
              <Link href={`/blog/${props.data.title.toLowerCase().replaceAll(' ', '-')}`} >
                <p className="hidden text-xs group-hover:block ">
                  {props.data.summary}
                </p></Link>
            </div>

          </div>
        </div>
      </div>
    </article>

  );
};

export default Article;
