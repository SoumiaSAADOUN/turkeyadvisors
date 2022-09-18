import React from "react";
const SomeOffers = () => {
  return (
    <section className="bg-PRIMARY_COLOR/90 px-[10%] py-[10%] w-full my-10 relative  min-h-[200px]">
      <img
        src="https://www.turkeyadvisors.com/sites/img/wwa.jpg"
        className="absolute top-0 left-0 object-cover w-full min-h-full mix-blend-overlay "
      />
      <div className="relative">
        <p className="font-semibold text-SECONDARY_COLOR">Who we are !</p>
        <h1 className="text-4xl font-bold text-BACKGROUND_COLOR">
          Turkey Advisors
        </h1>
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-bold text-SECONDARY_COLOR">
            Some Offers
          </h3>

          <a
            href="https://www.turkeyadvisors.com/citizenship-by-investment"
            className="px-5 py-2 rounded bg-SECONDARY_COLOR text-md text-PRIMARY_COLOR hover:text-PRIMARY_COLOR hover:bg-SECONDARY_COLOR/90"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
};
export default SomeOffers;
