import React from "react";
import { Mail } from "heroicons-react";

const NewsLetter = () => {
  return (
    <div className="bg-DARK_PRIMARY_COLOR mt-[10%] flex lg:flex-row flex-col items-center rounded-xl border lg:gap-20 py-8 px-[10%]">
      <div className="items-center justify-center md:basis-1/3 basis-full grow ">
        <img
          src="https://www.turkeyadvisors.com/sites/img/newsletter.png"
          alt="newsletter"
          loading="lazy-loading"
        />
      </div>
      <div className="flex flex-col justify-center pr-12 my-12 md:basis-1/3 basis-full grow">
        <h4 className="text-lg font-semibold text-BACKGROUND_COLOR">
          Subscribe via Email
        </h4>
        <p className="text-SECONDARY_COLOR">
          Let us help you choose the right property for you
        </p>
        <div className="flex flex-col items-center justify-between gap-4 py-2 md:flex-row">
          <div className="flex w-full mr-4 border-b border-SECONDARY_COLOR">
            <Mail className="w-8 h-8 text-SECONDARY_COLOR " />

            <input
              className="w-full px-2 py-1 mr-3 leading-tight bg-transparent appearance-none text-BACKGROUND_COLOR focus:outline-none"
              type="text"
              placeholder={`Email Address`}
            />
          </div>

          <button className="flex items-center justify-between px-4 py-1 rounded w-fit font-md text-PRIMARY_COLOR bg-SECONDARY_COLOR hover:bg-SECONDARY_COLOR/90 ">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
