import React from 'react'
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import { HiGlobeAlt, HiSearch } from 'react-icons/hi'
import LangageSettings from "./Languages.jsx";
import {
    WhatsAppOutlined
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

export default function Navigation() {
    return (
        <Disclosure as="nav" className="bg-[url('/assets/images/header_bg.jpg')] bg-cover w-full py-[50px] px-[5%] min-h-[130px]">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                                <div className='flex flex-col lg:hidden '>
                                    <button className="w-12 h-12 text-BACKGROUND_COLOR">
                                        <WhatsAppOutlined
                                            style={{ fontSize: "16px", fontWeight: 900 }}
                                        />
                                    </button>
                                    <button className="flex py-2 flex-col justify-strech items-center rounded-xl w-12 h-12 text-BACKGROUND_COLOR">
                                        <HiSearch className="text-xl" />
                                    </button>
                                </div>
                                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <Bars3Icon className="block h-6 w-6 text-BACKGROUND_COLOR" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6 text-BACKGROUND_COLOR" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className='flex items-center'>
                                <div className="flex items-center justify-between md:items-stretch md:justify-start">
                                    <div className="flex items-center">
                                        <img
                                            className="block w-auto h-14 lg:hidden"
                                            src="/assets/images/logo.png"
                                            alt="Turkey advisores"
                                        />
                                        <img
                                            className="hidden h-16 w-auto lg:block"
                                            src="/assets/images/logo.png"
                                            alt="Turkey advisores"
                                        />

                                    </div>

                                </div>
                                <div className="flex items-center justify-between">

                                    <div className="hidden flex sm:ml-6 lg:block">

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

                                    <div className="hidden flex flex-col py-2 lg:block">
                                        <div className="flex mb-2 gap-2 items-center">
                                            <button className="w-12 h-12 text-BACKGROUND_COLOR">
                                                <WhatsAppOutlined
                                                    style={{ fontSize: "16px", fontWeight: 900 }}
                                                />
                                            </button>
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
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="xl:hidden scroll-auto snap-y overscroll-contain overflow-y-scroll max-h-screen ">
                        <div className="space-y-1 px-2 pt-2 pb-3">

                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR ' : 'text-gray-300 text-BACKGROUND_COLOR hover:bg-gray-700 hover:text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR',
                                        'block px-3 py-2  text-xl font-bold border-b-2'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name.toUpperCase()}
                                </Disclosure.Button>
                            ))}

                            <Disclosure.Button
                                key={"faq"}
                                as="a"
                                href={"#"}
                                className={classNames(
                                    'text-gray-300 text-BACKGROUND_COLOR hover:bg-gray-700 hover:text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR block px-3 py-2  text-xl font-bold border-b-2'
                                )}

                            >
                                FAQ
                            </Disclosure.Button>
                            <Disclosure.Button
                                key={"contact"}
                                as="a"
                                href={"#"}
                                className={classNames(
                                    'text-gray-300 text-BACKGROUND_COLOR hover:bg-gray-700 hover:text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR block px-3 py-2  text-xl font-bold border-b-2'
                                )}

                            >
                                CONTACT US
                            </Disclosure.Button>
                            <Disclosure.Button
                                key={"login"}
                                as="a"
                                href={"#"}
                                className={classNames(
                                    'text-gray-300 text-BACKGROUND_COLOR hover:bg-gray-700 hover:text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR block px-3 py-2  text-xl font-bold border-b-2'
                                )}

                            >
                                LOGIN
                            </Disclosure.Button>
                            <Disclosure.Button
                                key={"register"}
                                as="a"
                                href={"#"}
                                className={classNames(
                                    'text-gray-300 text-BACKGROUND_COLOR hover:bg-gray-700 hover:text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR block px-3 py-2  text-xl font-bold border-b-2'
                                )}

                            >
                                REGISTER
                            </Disclosure.Button>
                            <Disclosure.Button
                                key={"currency"}
                                as="a"
                                href={"#"}
                                className={classNames(
                                    'text-center text-gray-300 text-BACKGROUND_COLOR hover:bg-gray-700 hover:text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR block px-3 py-2  text-xl font-bold border-b-2'
                                )}

                            >
                                $ £
                            </Disclosure.Button>
                            <Disclosure.Button
                                key={'11'}
                                as="a"
                                href={"#"}
                                className={classNames(
                                    'text-center text-gray-300 text-BACKGROUND_COLOR hover:bg-gray-700 hover:text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR block px-3 py-2  text-xl font-bold border-b-2'
                                )}

                            >
                                EN
                            </Disclosure.Button>
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
