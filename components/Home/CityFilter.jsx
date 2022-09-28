import React from "react";
const CityFilter = (props) => {
  const filters = ["Istanbul", "Bodrum", "Çeşme", "Alaçatı"];
  
  return (
    <>
      {props.visibility ? (
        <div  className="absolute left-0 z-10 flex flex-col w-full px-8 py-4 rounded-lg shadow-md top-11 bg-BACKGROUND_COLOR">
          <h1 className="w-fit">
            <span className="font-bold">
              City
              <div className="flex-grow border-t-2 border-SECONDARY_COLOR"></div>
            </span>
          </h1>
          <div className="flex flex-col lg:grid lg:grid-cols-2 lg:grid-rows-2">
            {filters.map((item, index) => (
              <div className="flex my-4" key={`${item}-${index}`}>
                <div className="flex items-center mr-3">
                  <input
                    id={`city-${item}`}
                    name={`city-${item}`}
                    type="checkbox"
                    className="w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
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
