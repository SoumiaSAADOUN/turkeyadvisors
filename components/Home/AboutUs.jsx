import Image from "next/image";
import React from "react";

const AboutUs = () => {
  return (
    <section className="flex flex-wrap justify-between gap-10 px-0 pl-40 text-PRIMARY_COLOR">
      <div className="flex flex-col py-24 basis-1/3 grow">
        <p className="font-semibold text-SECONDARY_COLOR">Who we are !</p>
        <h1 className="text-3xl font-bold ">Turkey Advisors</h1>
        <p className="max-w-lg my-12 text-lg">
          At Turkey Advisors, we believe that our clients are our experience is
          customized so that we accompany you in every step of the way. from
          start to finish. We assure you that you will achieve your goals with
          ease and convenience
        </p>
        <button className="w-40 p-2 text-lg font-semibold rounded hover:bg-SECONDARY_COLOR bg-PRIMARY_COLOR text-BACKGROUND_COLOR">
          About Us
        </button>
      </div>
      <div className="relative flex basis-3/5 justify-self-end">
        <div className="w-full grow">
          <img
            className=""
            src={"https://www.turkeyadvisors.com/sites/img/about.jpg"}
          />
          <img
            className="invisible absolute -left-36 bottom-12 grow max-w-[20vw] 2xl:visible"
            src={"https://www.turkeyadvisors.com/sites/img/about2.png"}
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
