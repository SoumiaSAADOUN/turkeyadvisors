import Image from "next/image";
import React from "react";
import CardButton from "../Buttons/CardButton";

const AboutUs = () => {
  return (
    <section className="flex justify-between px-0 pl-[5%] text-PRIMARY_COLOR flex-col ">

      <p className="font-semibold text-SECONDARY_COLOR">Who we are !</p>
      <h1 className="text-3xl font-bold ">Turkey Advisors</h1>
      <div className="flex md:flex-row justify-between px-0 text-PRIMARY_COLOR items-start flex-col-reverse ">
        <div className="flex flex-col justify-center h-full basis-1/3 grow">
          <p className="w-[90%]  my-12 text-xl">
            At Turkey Advisors, we believe that our clients are our experience is
            customized so that we accompany you in every step of the way. from
            start to finish. We assure you that you will achieve your goals with
            ease and convenience
          </p>
          <div className="w-[150px]">
            <CardButton title="About us" />
          </div>
        </div>
        <div className="relative basis-2/3 grow w-full">

          <img
            className=" w-fit"
            src={"https://www.turkeyadvisors.com/sites/img/about.jpg"}
          />
          <img
            className="invisible absolute -left-2 -bottom-52 grow max-w-[20vw] xl:visible"
            src={"https://www.turkeyadvisors.com/sites/img/about2.png"}
          />

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
