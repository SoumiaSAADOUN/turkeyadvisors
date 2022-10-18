import React from "react";
const CityFilter = (props) => {


  return (
    <>
      {props.visibility ? (
        <div className={`absolute left-0 z-10 flex flex-col w-full px-8 py-4 rounded-lg shadow-md top-11 ${props.title==='Area' ? '-top-25': 'top-0' } bg-BACKGROUND_COLOR`}>
          <h1 className="w-fit">
            <span className="font-bold">
              {props.title}
              <div className="flex-grow border-t-2 border-SECONDARY_COLOR"></div>
            </span>
          </h1>
          <div
            className={`flex flex-col lg:grid ${
              props.data.length >6? "lg:grid-cols-4" : "lg:grid-cols-2"
            } `}
          >
            {props.data.map((item, index) => (
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
