import React from "react";
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { HiOutlineTranslate } from "react-icons/hi";

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

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
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
              <Listbox.Button className="relative rounded-xl w-fit h-10 cursor-default border  bg-BACKGROUND_COLOR  text-center shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                <span className="flex items-center">
                  <HiOutlineTranslate className="text-base ml-1" />

                  <span className="mx-1 block">{selected.toUpperCase()}</span>
                </span>
              </Listbox.Button>

              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-BACKGROUND_COLOR py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {languages.map((language) => (
                    <Listbox.Option
                      key={language.id}
                      className={({ active }) =>
                        classNames(
                          active ? "text-white bg-indigo-600" : "text-gray-900",
                          "relative cursor-default select-none py-2 pl-3 pr-9"
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
