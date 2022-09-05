import React from "react";

const Citizenship = () => {
  return (
    <>
      <div className="bg-PRIMARY_COLOR/70 px-32 py-24 w-full mt-10  relative min-h-[65vh]">
        <img
          src="https://www.turkeyadvisors.com/sites/img/citizenship-bg.jpg"
          className="absolute top-0 left-0 w-full object-cover mix-blend-overlay min-h-full "
        />
        <div className="absolute">
          <h1 className="text-4xl text-RED  font-bold">Turkish Citisenship</h1>
          <h3 className="text-xl text-BACKGROUND_COLOR">
            By Investment Program
          </h3>
          <p className=" text-BACKGROUND_COLOR max-w-lg text-base">
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
            class="bg-SECONDARY_COLOR text-md text-PRIMARY_COLOR px-5 py-2 rounded"
          >
            Learn More...
          </a>
        </div>
      </div>
    </>
  );
};

export default Citizenship;
