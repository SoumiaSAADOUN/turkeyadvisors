import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { HiGlobeAlt, HiOutlineTranslate } from "react-icons/hi";
import { classNames } from "../../utile/utils";

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

 
  const handleChange = (value) => {
   
  };
  const [selected, setSelected] = useState(currencies[0]);
  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative ">
              <Listbox.Button className="relative h-8 text-xs text-center border rounded shadow-sm cursor-default w-fit bg-BACKGROUND_COLOR focus:outline-none focus:ring-1">
                <span className="flex items-center">
                  <HiGlobeAlt className="ml-1 text-base" />

                  <span className="block mx-1">{selected.currency.toUpperCase()}</span>
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 py-1 mt-1 overflow-auto text-base rounded-md shadow-lg max-h-56 w-fit bg-BACKGROUND_COLOR ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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
                          <img src={currency.icon} alt="" className="flex-shrink-0 w-6 h-6 mr-2 rounded-full" />
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
