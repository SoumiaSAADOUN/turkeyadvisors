import React from "react";

const Article = (props) => {
  return (
    <>
      <div className="flex flex-col border border-solid rounded-md grow basis-1/4 hover:cursor-pointer ">
        <img className="h-60" alt={props.data.title} src={props.data.image} />
        <div className="relative mt-20 border-transparent rounded-md border-y-2 hover:border-SECONDARY_COLOR">
          <div className="absolute bottom-0 transition transform group text-PRIMARY_COLOR">
            <div className="flex justify-between px-4 bg-transparent top-2 text-BACKGROUND_COLOR">
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                <span>{props.data.date}</span>
              </div>
              <div className="flex gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>

                <span> {props.data.views} Views</span>
              </div>
            </div>
            <div className="p-2 bg-BACKGROUND_COLOR text-PRIMARY_COLOR hover:bg-SECONDARY_COLOR">
              <h3 className="text-lg text-SECONDARY_COLOR group-hover:text-PRIMARY_COLOR ">
                Articles
              </h3>
              <h1 className="text-xl">{props.data.title}</h1>
              <div>
                <p className="hidden text-xs group-hover:flex">
                  {props.data.summary}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Article;
