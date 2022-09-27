import React from "react";

const Citizenship = () => {
  return (
    <>
      <section className="bg-PRIMARY_COLOR/40 px-[10%] md:py-24 py-[10%] w-full mt-10  relative h-full">
        <img
          src="https://www.turkeyadvisors.com/sites/img/citizenship-bg.jpg"
          className="absolute top-0 left-0 object-cover w-full h-full mix-blend-overlay "
        />
        <div className="z-10 flex flex-col justify-center">
          <h1 className="z-20 mb-4 text-[2.5rem] font-bold text-RED ">Turkish Citizenship</h1>
          <h3 className="mb-2 text-2xl font-md text-BACKGROUND_COLOR">
            By Investment Program
          </h3>
          <div className="flex-grow w-[150px] mb-4 border-t-4 border-BACKGROUND_COLOR"></div>
          <p className="w-full py-4 text-lg md:w-1/2 text-BACKGROUND_COLOR">
            You can apply for Turkish citizenship by speculation whenever you
            have put at least $250,000 in private or business property in
            Turkey. Your companion and your childern younger than 18 will
            likewise be qualified for Turkish identity. Kindly get in touch with
            us for furthur subtleties, legitimate guidance and a rundown of
            properties in Turkey that are pre-endorsed for the citizenship by
            venture program.
          </p>
          <a
            href="https://www.turkeyadvisors.com/citizenship-by-investment"
            className="z-10 px-5 py-2 rounded max-w-[150px] bg-SECONDARY_COLOR text-md text-PRIMARY_COLOR hover:text-PRIMARY_COLOR hover:bg-SECONDARY_COLOR/90"
          >
            Learn More...
          </a>
        </div>
      </section>
    </>
  );
};

export default Citizenship;
