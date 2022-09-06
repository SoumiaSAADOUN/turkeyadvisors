import React from "react";
const SomeOffers = () => {
  return (
    <section className="bg-PRIMARY_COLOR/70 px-40 py-4 w-full my-10 relative">
      <img
        src="https://www.turkeyadvisors.com/sites/img/wwa.jpg"
        className="absolute top-0 left-0 w-full object-cover mix-blend-overlay "
      />
      <div className="relative w-full">
        <p className="text-SECONDARY_COLOR font-semibold">Who we are !</p>
        <h1 className="text-4xl text-BACKGROUND_COLOR  font-bold">
          Turkey Advisors
        </h1>
        <div className="flex justify-between">
          <h3 className="text-xl font-bold text-SECONDARY_COLOR">
            Some Offers
          </h3>

          <a
            href="https://www.turkeyadvisors.com/citizenship-by-investment"
            class="bg-SECONDARY_COLOR text-md text-PRIMARY_COLOR px-5 py-2 rounded"
          >
            Enquire Now
          </a>
        </div>
      </div>
    </section>
  );
};
export default SomeOffers;
