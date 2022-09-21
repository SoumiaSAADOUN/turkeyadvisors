import React from "react";
const CityFilter = (props) => {
  const filters = ["Istanbul", "Bodrum", "Çeşme", "Alaçatı"];
  return (
    <>
      {props.visibility ? (
        <div className="z-10 absolute left-0 top-11 bg-BACKGROUND_COLOR flex flex-col w-full  px-8 py-4 rounded-lg shadow-md">
          <h1 className="w-fit">
            <span className="font-bold">
              City
              <div className="flex-grow  border-t-2 border-SECONDARY_COLOR"></div>
            </span>
          </h1>
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2">
            {filters.map((item) => (
              <div className="flex my-4">
                <div className="mr-3 flex items-center">
                  <input
                    id={`city-${item}`}
                    name={`city-${item}`}
                    type="checkbox"
                    className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                </div>
                <label
                  htmlFor={`city-${item}`}
                  className="font-medium text-gray-700 select-none"
                >
                  {item}
                </label>
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </>
  );
};
export default CityFilter;
