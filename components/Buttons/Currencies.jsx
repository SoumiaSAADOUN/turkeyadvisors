import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiGlobeAlt, HiOutlineTranslate } from "react-icons/hi";

const currencies = [
  {
    id: 1,
    currency: "USD",
    icon:'https://www.turkeyadvisors.com/sites/img/flags/us.png'
  },
  {
    id: 2,
    currency: "EUR",
    icon:'https://www.turkeyadvisors.com/sites/img/flags/eu.png'
},
  {
    id: 3,
    currency: "TRY",
    icon:'https://www.turkeyadvisors.com/sites/img/flags/tr.png'
  },
  {
    id: 4,
    currency: "GBP",
    icon:'https://www.turkeyadvisors.com/sites/img/flags/gb.png'
  },
];

const Currencies = () => {

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  const handleChange = (value) => {
   
  };
  const [selected, setSelected] = useState(currencies[0]);
  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative ">
              <Listbox.Button className="relative rounded w-fit h-8 cursor-default border  bg-BACKGROUND_COLOR  text-center shadow-sm focus:outline-none focus:ring-1 text-xs">
                <span className="flex items-center">
                  <HiGlobeAlt className="text-base ml-1" />

                  <span className="mx-1 block">{selected.currency.toUpperCase()}</span>
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-fit overflow-auto rounded-md bg-BACKGROUND_COLOR py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {currencies.map((currency) => (
                    <Listbox.Option
                      key={currency.id}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-indigo-600" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
                        )
                      }
                      value={currency}
                      onClick={() => handleChange(currency)}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                          <img src={currency.icon} alt="" className="h-6 w-6 flex-shrink-0 rounded-full mr-2" />
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "block"
                              )}
                            >
                              {currency.currency.toUpperCase()}
                            </span>
                          </div>
                          
                        </>
                      )}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </>
  );
};

export default Currencies;
