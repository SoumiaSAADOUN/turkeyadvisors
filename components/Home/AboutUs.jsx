import Image from "next/image";
import React from "react";
import CardButton from "../Buttons/CardButton";

const AboutUs = () => {
  return (
    <section className="flex justify-between px-0 pl-[5%] text-PRIMARY_COLOR flex-col ">

      <div className="md:hidden">
      <p className="font-semibold text-SECONDARY_COLOR">Who we are !</p>
      <h1 className="text-3xl font-extrabold ">Turkey Advisors</h1>
      </div>
      <div className="flex md:flex-row justify-between pr-0 text-PRIMARY_COLOR items-start flex-col-reverse ">
        <div className="flex flex-col justify-center h-full basis-2/4">
        <div className="md:block hidden">
      <p className="font-semibold text-SECONDARY_COLOR">Who we are !</p>
      <h1 className="text-3xl font-extrabold mb-8">Turkey Advisors</h1>
      </div>
          <p className="w-[80%]  my-12 text-2xl">
            At Turkey Advisors, we believe that our clients are our experience is
            customized so that we accompany you in every step of the way. from
            start to finish. We assure you that you will achieve your goals with
            ease and convenience
          </p>
          <div className="w-[150px]">
            <CardButton title="About us" />
          </div>
        </div>
        <div className="relative basis-2/4">

          <img
            className=" max-w-full mt-4"
            src={"https://www.turkeyadvisors.com/sites/img/about.jpg"}
          />
          <img
            className="invisible absolute -left-20 bottom-12 grow max-w-[20vw] xl:visible"
            src={"https://www.turkeyadvisors.com/sites/img/about2.png"}
          />

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
