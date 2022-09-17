import React from "react";
import { Mail } from "heroicons-react";

const NewsLetter = () => {
  return (
    <div className="bg-DARK_PRIMARY_COLOR my-[10%] flex lg:flex-row flex-col items-center rounded-xl border lg:gap-20 py-8 px-[10%]">
      <div className="md:basis-1/3 basis-full justify-center items-center grow ">
        <img
          src="https://www.turkeyadvisors.com/sites/img/newsletter.png"
          alt="newsletter"
          loading="lazy-loading"
        />
      </div>
      <div className="md:basis-1/3 basis-full justify-center grow flex flex-col my-12 pr-12">
        <h4 className="text-lg font-semibold text-BACKGROUND_COLOR">
          Subscribe via Email
        </h4>
        <p className="text-SECONDARY_COLOR">
          Let us help you choose the right property for you
        </p>
        <div className="flex md:flex-row flex-col gap-4 items-center py-2 justify-between">
          <div className="flex  border-b border-SECONDARY_COLOR w-full mr-4">
            <Mail className="w-8 h-8 text-SECONDARY_COLOR  " />

            <input
              className="appearance-none bg-transparent w-full text-BACKGROUND_COLOR mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder={`Email Address`}
            />
          </div>

          <button className="flex items-center w-fit py-1 justify-between w-1/6 px-4 font-md rounded text-PRIMARY_COLOR bg-SECONDARY_COLOR hover:bg-SECONDARY_COLOR/90 ">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
