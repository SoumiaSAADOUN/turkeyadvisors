import React from "react";

const ProcessCards = (props) => {
  const steps = [
    {
      num: "01",
      step: "Finding the Property",
    },
    {
      num: "02",
      step: "Buying the Property",
    },
    {
      num: "03",
      step: "Obtaining the Certificate of Conformity",
    },
    {
      num: "04",
      step: "Application for Turkish Residency",
    },
    {
      num: "05",
      step: "Application For Turkish Citizenship",
    },
  ];
  return (
    <>
      <div className="flex flex-row flex-wrap items-center justify-center w-full my-8">
        {steps.map((step, index) => (
          <div
            className=" xl:basis-1/3 md:basis-1/2 basis-full"
            key={`step-${index}`}
          >
            <div className="relative px-4 py-12 m-8 text-2xl font-semibold text-center rounded shadow-md text-PRIMARY_COLOR">
              {step.step}
              <div className="absolute w-16 h-16 p-4 text-2xl font-extrabold text-center rounded-full -top-8 -left-4 bg-PRIMARY_COLOR text-SECONDARY_COLOR">
                {step.num}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
export default ProcessCards;
