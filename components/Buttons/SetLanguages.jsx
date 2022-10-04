import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { HiOutlineTranslate } from "react-icons/hi";
import { classNames } from "../../utile/utils";

const languages = [
  {
    id: 1,
    lang: "en",
  },
  {
    id: 2,
    lang: "fr",
  },
  {
    id: 3,
    lang: "tr",
  },
];

const SetLanguages = () => {
  const router = useRouter();
  const { locale } = router;

 
  const handleChange = (value) => {
    const locale = value;
    router.push("/", "/", { locale });
  };
  const [selected, setSelected] = useState(locale);
  return (
    <>
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
            <div className="relative ">
              <Listbox.Button className="relative h-8 text-xs text-center border rounded shadow-sm cursor-default w-fit bg-BACKGROUND_COLOR focus:outline-none focus:ring-1">
                <span className="flex items-center">
                  <HiOutlineTranslate className="ml-1 text-base" />

                  <span className="block mx-1">{selected.toUpperCase()}</span>
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
                  {languages.map((language) => (
                    <Listbox.Option
                      key={language.id}
                      className={({ active }) =>
                        classNames(
                          active && "text-white" ,
                          "relative cursor-default select-none py-2 pl-3 pr-9 w-full overflow-auto"
                        )
                      }
                      value={language.lang}
                      onClick={() => handleChange(language.lang)}
                    >
                      {({ selected, active }) => (
                        <>
                          <div className="flex items-center">
                            <span
                              className={classNames(
                                selected ? "font-semibold" : "font-normal",
                                "block"
                              )}
                            >
                              {language.lang.toUpperCase()}
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

export default SetLanguages;
