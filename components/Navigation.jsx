import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { HiGlobeAlt, HiSearch } from "react-icons/hi";
import { WhatsAppOutlined } from "@ant-design/icons";
import SetLanguages from "./SetLanguages.jsx";
import Currencies from "./Currencies.jsx";
import EnquireModal from "./EnquireModal.jsx";
import RegisterModal from "./RegisterModel.jsx";
import LoginModal from "./LoginModal.jsx";

const navigation = [
  { name: "Home", href: "/", current: true },
  { name: " About Us", href: "aboutUs", current: false },
  { name: "Projects", href: "projects", current: false },
  { name: "Services", href: "services", current: false },
  { name: "Turkish Citizenship", href: "citizenship", current: false },
  { name: "Blog", href: "blog", current: false },
  { name: "Articles", href: "articles", current: false },
  { name: "Contact Us", href: "contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [showEnquireModal, setShowEnquireModal] = useState(false)
  const [showRegisterModal, setShowRegisterModal] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  
  return (
  <><Disclosure
  as="nav"
  className="bg-[url('/assets/images/header_bg.jpg')] bg-cover w-full py-[40px] px-[5%] min-h-[130px]"
>
  {({ open }) => (
    <>
      <div className="mx-auto w-full px-2 sm:px-6 lg:px-8 ">
        <div className="relative flex h-16 items-center ">
          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            <div className="flex flex-col lg:hidden ">
              <a
                className="flex py-2 flex-col justify-strech items-center rounded-xl w-12 h-12 text-BACKGROUND_COLOR"
                href="https://api.whatsapp.com/send/?phone=00905431441000&text&app_absent=0"
              >
                <WhatsAppOutlined
                  style={{ fontSize: "16px", fontWeight: 900 }}
                />
              </a>

              <button className="flex py-2 flex-col justify-strech items-center rounded-xl w-12 h-12 text-BACKGROUND_COLOR">
                <HiSearch className="text-xl" />
              </button>
            </div>
            <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">

              {open ? (
                <Bars3Icon
                  className="block h-6 w-6 text-BACKGROUND_COLOR"
                  aria-hidden="true"
                />
              ) : (
                <Bars3Icon
                  className="block h-6 w-6 text-BACKGROUND_COLOR"
                  aria-hidden="true"
                />
              )}
            </Disclosure.Button>
          </div>
          <div className="flex items-center lg:justify-center w-full">
            <div className="flex items-center justify-center md:items-stretch md:justify-start">
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
            <div className="flex items-center justify-between w-fit">
              <div className="hidden flex sm:ml-6 lg:block">
                <div className="flex justify-between xl:space-x-8 lg:space-x-4 items-center text-base pt-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "text-SECONDARY_COLOR"
                          : "text-BACKGROUND_COLOR hover:text-SECONDARY_COLOR"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>

              <div className="hidden flex flex-col mx-4 py-2 lg:block">
                <div className="flex mb-2 gap-2 items-center">
                  <a
                    className="flex py-2 flex-col justify-strech items-center rounded-xl w-12 h-12 text-BACKGROUND_COLOR"
                    href="https://api.whatsapp.com/send/?phone=00905431441000&text&app_absent=0"
                  >
                    <WhatsAppOutlined
                      style={{ fontSize: "16px", fontWeight: 900 }}
                    />
                  </a>

                  <Currencies />
                  <SetLanguages />
                </div>
                <div className="flex grow gap-2 items-center">
                  <button className=" py-2 flex-col justify-strech items-center rounded-xl w-12 h-12 text-BACKGROUND_COLOR">
                    <HiSearch className="text-xl" />
                  </button>
                  <button onClick={()=>   setShowEnquireModal(true)} className="p-[1px] rounded-md w-28 h-12 bg-BACKGROUND_COLOR text-sm">
                    Enquire Now
                  </button>
                </div>
                <div className="flex grow gap-2 items-center justify-evenly my-2">
                  <button onClick={()=>   setShowLoginModal(true)} className="text-BACKGROUND_COLOR hover:text-SECONDARY_COLOR cursor-pointer">
                    Login
                  </button>
                  <button  onClick={()=>   setShowRegisterModal(true)} className="text-BACKGROUND_COLOR hover:text-SECONDARY_COLOR cursor-pointer">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="xl:hidden scroll-auto snap-y overscroll-contain overflow-y-scroll h-[60vh] ">
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <Disclosure.Button
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR "
                  : "text-gray-300 text-BACKGROUND_COLOR hover:bg-gray-700 hover:text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR",
                "block px-3 py-2  text-xl font-bold border-b-2"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name.toUpperCase()}
            </Disclosure.Button>
          ))}

          <Disclosure.Button
            key={"faq"}
            as="a"
            href={"#"}
            className={classNames(
              "text-gray-300 text-BACKGROUND_COLOR hover:bg-gray-700 hover:text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR block px-3 py-2  text-xl font-bold border-b-2"
            )}
          >
            FAQ
          </Disclosure.Button>
          <Disclosure.Button
            key={"contact"}
            as="a"
            href={"#"}
            className={classNames(
              "text-gray-300 text-BACKGROUND_COLOR hover:bg-gray-700 hover:text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR block px-3 py-2  text-xl font-bold border-b-2"
            )}
          >
            CONTACT US
          </Disclosure.Button>
          <Disclosure.Button
            key={"login"}
            as="a"
            href={"#"}
            className={classNames(
              "text-gray-300 text-BACKGROUND_COLOR hover:bg-gray-700 hover:text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR block px-3 py-2  text-xl font-bold border-b-2"
            )}
          >
            LOGIN
          </Disclosure.Button>
          <Disclosure.Button
            key={"register"}
            as="a"
            href={"#"}
            className={classNames(
              "text-gray-300 text-BACKGROUND_COLOR hover:bg-gray-700 hover:text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR block px-3 py-2  text-xl font-bold border-b-2"
            )}
          >
            REGISTER
          </Disclosure.Button>
          <Disclosure.Button
            key={"currency"}
            as="a"
            href={"#"}
            className={classNames(
              "text-center text-gray-300 text-BACKGROUND_COLOR hover:bg-gray-700 hover:text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR block px-3 py-2  text-xl font-bold border-b-2"
            )}
          >
            $ £
          </Disclosure.Button>
          <Disclosure.Button
            key={"11"}
            as="a"
            href={"#"}
            className={classNames(
              "text-center text-gray-300 text-BACKGROUND_COLOR hover:bg-gray-700 hover:text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR block px-3 py-2  text-xl font-bold border-b-2"
            )}
          >
            EN
          </Disclosure.Button>
        </div>
      </Disclosure.Panel>
    </>
  )}
</Disclosure>
<EnquireModal visibility={showEnquireModal} onCancel={()=> setShowEnquireModal(false)}/>
<RegisterModal visibility={showRegisterModal} onCancel={()=> setShowRegisterModal(false)}/>
<LoginModal visibility={showLoginModal} onCancel={()=> setShowLoginModal(false)}/>
</>  
  );
}
