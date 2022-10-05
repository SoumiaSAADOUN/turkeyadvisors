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
      <div className="flex flex-row flex-wrap justify-center items-center w-full my-8">
        {steps.map((step, index) => (
          <div className=" xl:basis-1/3 md:basis-1/2 basis-full">
            <div
              className="relative m-8 text-center px-4 py-12 rounded shadow-md text-PRIMARY_COLOR text-2xl font-semibold"
              key={`step-${index}`}
            >
              {step.step}
              <div className="absolute -top-8 -left-4 font-extrabold text-2xl rounded-full  bg-PRIMARY_COLOR text-SECONDARY_COLOR w-16 h-16 text-center p-4">
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
