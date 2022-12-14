import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Link from "next/link";

const GetInTouch = () => {
  return (
    <section className="relative w-full h-full px-4 py-4 mt-10 bg-PRIMARY_COLOR/90 md:px-[10%]">
      <img
        src="https://www.turkeyadvisors.com/sites/img/wwa.jpg"
        className="absolute top-0 left-0 object-cover w-full h-full mix-blend-overlay "
      />
      <div className="relative flex flex-col w-full gap-4">
        <p className="font-semibold text-SECONDARY_COLOR">Who we are !</p>
        <h1 className="text-4xl font-bold text-BACKGROUND_COLOR">
          Turkey Advisors
        </h1>
        <div className="flex flex-col justify-between gap-8 sm:items-center sm:flex-row">
          <h3 className="text-xl font-bold text-SECONDARY_COLOR">
            Contact Us Now
          </h3>

          <Link href="/contact">
            <span className="flex items-center justify-between w-full px-5 py-2 rounded sm:w-[200px] cursor-pointer bg-SECONDARY_COLOR text-md text-PRIMARY_COLOR">
              Get In Touch <HiArrowNarrowRight className="ml-[2%]" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
