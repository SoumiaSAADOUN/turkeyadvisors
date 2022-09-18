import React from "react"
import { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { FaSortDown } from "react-icons/fa"
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
const SelectComponenet =(props)=>{
    const [selected, setSelected] = useState(props.data[0])

    return (
      <Listbox value={selected} onChange={setSelected}>
        {({ open }) => (
          <>
           <div className="relative mt-1">
              <Listbox.Button key='bedrooms' className="relative w-full cursor-default rounded-md border border-LIGHT_GREY bg-BACKGROUND_COLOR py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                <span className="flex items-center">
                 <span className="ml-3 block truncate">{selected.title}</span>
                </span>
                <span className="pointer-events-none absolute bottom-3 right-0 ml-3 flex items-center pr-2">
                  <FaSortDown className="h-5 w-5 text-SECONDARY_COLOR" aria-hidden="true" />
                </span>
              </Listbox.Button>
  
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options key='bedrooms1' className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-BACKGROUND_COLOR py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {props.data.map((item) => (
                    <Listbox.Option
                      key={`${item.name} - ${item.id}`}
                      className={({ active }) =>
                        classNames(
                          active ? 'text-white bg-BACKGROUND_COLOR' : 'text-gray-900',
                          'relative cursor-default select-none py-2 pl-3 pr-9'
                        )
                      }
                      value={item}
                    >
                      {({ selected }) => (
                        <>
                          <div className="flex items-center">
                           <span
                              className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                            >
                              {item.title}
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
    )
}

export default SelectComponenet