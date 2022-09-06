import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="pl-40 flex gap-10 text-PRIMARY_COLOR px-0 justify-between">
      <div className="basis-1/3 flex flex-col py-24 grow">
        <p className="text-SECONDARY_COLOR font-semibold">Who we are !</p>
        <h1 className="text-3xl font-bold ">Turkey Advisors</h1>
        <p className="my-12 max-w-lg text-lg">
          At Turkey Advisors, we believe that our clients are our experience is
          customized so that we accompany you in every step of the way. from
          start to finish. We assure you that you will achieve your goals with
          ease and convenience
        </p>
        <button className="w-40 p-2 text-lg font-semibold rounded hover:bg-SECONDARY_COLOR bg-PRIMARY_COLOR text-BACKGROUND_COLOR">
          About Us
        </button>
      </div>
      <div className="relative basis-3/5 flex justify-self-end">
        <div className="w-full grow">
          <img
            className=""
            src={"https://www.turkeyadvisors.com/sites/img/about.jpg"}
          />
          <img
            className="absolute -left-36 bottom-12 w-80 grow"
            src={"https://www.turkeyadvisors.com/sites/img/about2.png"}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
