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
           <div className="relative">
              <Listbox.Button key='bedrooms' className="relative w-full h-[40px] py-2 pl-3 pr-10 text-left border rounded-md shadow-md cursor-default border-LIGHT_GREY bg-BACKGROUND_COLOR focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                <span className="flex items-center">
                 <span className="block ml-3 truncate">{selected.title}</span>
                </span>
                <span className="absolute right-0 flex items-center pr-2 ml-3 pointer-events-none bottom-3">
                  <FaSortDown className="w-5 h-5 text-SECONDARY_COLOR" aria-hidden="true" />
                </span>
              </Listbox.Button>
  
              <Transition
                show={open}
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options key='bedrooms1' className="absolute z-10 w-full py-1 mt-1 overflow-auto text-base rounded-md shadow-lg max-h-56 bg-BACKGROUND_COLOR ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
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