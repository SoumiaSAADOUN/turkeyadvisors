import { Fragment, useState } from "react";
import {
  Menu,
  Transition,
} from "@headlessui/react";
import { FaMapMarkerAlt, FaSortDown } from "react-icons/fa";

export default function AreaFilter(props) {

  return (
    <section>
      <Menu as="div">
        <Menu.Button className="flex items-center justify-between  mr-2 px-1 h-[40px] rounded-lg shadow-md">
          <span className="flex w-full items-center justify-center ">
            <FaMapMarkerAlt
              className="w-4 h-4 mr-2 text-SECONDARY_COLOR"
              aria-hidden="true"
            />
            {props.title}
          </span>
          <span className="flex pb-2 ml-3 pointer-events-none ">
            <FaSortDown
              className="w-5 h-5 text-SECONDARY_COLOR"
              aria-hidden="true"
            />
          </span>
        </Menu.Button>

        <Transition
          as={Fragment}
          className="absolute z-10 bg-BACKGROUND_COLOR mt-[1px] rounded-xl shadow"
          // className="z-10"
          // className="z-10"
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items>
            <form className="z-10 px-8 py-2 crounded-md shadow-2xl bg-BACKGROUN_COLOR">
              <h1 className="w-fit ">
                <span className="font-bold">
                  {props.title}
                  <div className="flex-grow border-t-2 border-SECONDARY_COLOR"></div>
                </span>
              </h1>
              <div
                className={`flex flex-col lg:grid ${
                  props.data.length > 6 ? "lg:grid-cols-4" : "lg:grid-cols-2"
                } gap-2 bg-BACKGROUND_COLOR`}
              >
                {props.data.map((item, optionIdx) => (
                  <Menu.Item key={item}>
                    <div
                      className="flex my-4"
                      key={`${optionIdx}-${optionIdx}`}
                    >
                      <div className="flex items-center mr-3">
                        <input
                          id={`city-${item}`}
                          name={`city-${item}`}
                          type="checkbox"
                          className="w-4 h-4 text-SECONDARY_COLOR border-DARK_GREY rounded focus:ring-SECONDARY_COLOR"
                        />
                      </div>
                      <label
                        htmlFor={`city-${item}`}
                        className="ml-3 pr-6 text-sm font-medium text-gray-900 whitespace-nowrap"
                      >
                        {item}
                      </label>
                    </div>
                  </Menu.Item>
                ))}
              </div>
            </form>
          </Menu.Items>
        </Transition>
      </Menu>
    </section>
  );
}
