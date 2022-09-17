import React, { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { HiGlobeAlt, HiSearch } from 'react-icons/hi'
import LangageSettings from './Languages'
import {
  WhatsAppOutlined,
} from "@ant-design/icons";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: " About Us", href: "aboutUs", current: false },
  { name: "Projects", href: "projects", current: false },
  { name: "Services", href: "services", current: false },
  { name: "Turkish Citizenship", href: "citizenship", current: false },
  { name: "Blog", href: "blog", current: false },
  { name: "Articles", href: "articles", current: false },
  { name: "Contact Us", href: "contact", current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <Disclosure as="nav" className=" flex items-center bg-[url('/assets/images/header_bg.jpg')] bg-cover w-full py-2 px-[5%] h-[130px]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6 text-BACKGROUND_COLOR" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6 text-BACKGROUND_COLOR" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex items-center justify-between">
                <div className="hidden basis-1/5 grow sm:block">
                  <Image
                    src="/assets/images/logo.png"
                    alt="logo-turkey-advisors"
                    width={220}
                    height={56}
                  />
                </div>
                <div className="hidden flex sm:ml-6 sm:block">

                  <div className="flex space-x-4 items-center text-base pt-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-BACKGROUND_COLOR hover:text-SECONDARY_COLOR'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </a>
                    ))}

                  </div>

                </div>
                <div className="hidden flex flex-col py-2 sm:block">
                  <div className="flex mb-2 gap-2 items-center">
                    <button className="w-12 h-12 text-BACKGROUND_COLOR"> <WhatsAppOutlined
                      style={{ fontSize: "16px", fontWeight: 900 }}
                    /></button>
                    <button className="flex flex-col py-2 justify-strech items-center rounded-xl w-12 h-12 bg-BACKGROUND_COLOR">
                      <HiGlobeAlt className="text-xl" />
                      USD
                    </button>
                    <LangageSettings />


                  </div>
                  <div className="flex grow gap-2 items-center">
                    <button className="flex py-2 flex-col justify-strech items-center rounded-xl w-12 h-12 text-BACKGROUND_COLOR">
                      <HiSearch className="text-xl" />
                    </button>
                    <button className="p-2 items-center rounded-xl w-28 h-12 bg-BACKGROUND_COLOR">

                      Enquire Now
                    </button>
                  </div>
                  <div className="flex grow gap-2 items-center justify-evenly my-2">

                    <a className="text-BACKGROUND_COLOR hover:text-SECONDARY_COLOR" >
                      Login
                    </a>
                    <a className="text-BACKGROUND_COLOR hover:text-SECONDARY_COLOR" >
                      Register
                    </a>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">


              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar;

