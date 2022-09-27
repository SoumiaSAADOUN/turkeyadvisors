import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { HiGlobeAlt, HiSearch } from "react-icons/hi";
import { WhatsAppOutlined } from "@ant-design/icons";
import SetLanguages from "./Buttons/SetLanguages.jsx";
import Currencies from "./Buttons/Currencies.jsx";
import EnquireModal from "./Modals/EnquireModal.jsx";
import RegisterModal from "./Modals/RegisterModel.jsx";
import LoginModal from "./Modals/LoginModal.jsx";
import SearchModal from "./Modals/SearchModal.jsx";

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
  const [showSearchModal, setShowSearchModal] = useState(false)
  
  return (
  <><Disclosure
  as="nav"
  className="xl:flex xl:items-center bg-[url('/assets/images/header_bg.jpg')] bg-cover w-full px-[5%] py-[30px] xl:h-[130px]  border-b-4 border-SECONDARY_COLOR"
>
  {({ open }) => (
    <>
      <div className="w-full px-2 mx-auto sm:px-6 lg:px-8 ">
        <div className="relative flex items-center h-16 ">
          <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
            <div className="flex flex-col lg:hidden ">
              <a
                className="flex flex-col items-center w-12 h-12 py-2 justify-strech rounded-xl text-BACKGROUND_COLOR"
                href="https://api.whatsapp.com/send/?phone=00905431441000&text&app_absent=0"
              >
                <WhatsAppOutlined
                  style={{ fontSize: "16px", fontWeight: 900 }}
                />
              </a>

              <button className="flex flex-col items-center w-12 h-12 py-2 justify-strech rounded-xl text-BACKGROUND_COLOR">
                <HiSearch className="text-xl" />
              </button>
            </div>
            <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">

             
                <Bars3Icon
                  className="block w-6 h-6 text-BACKGROUND_COLOR"
                  aria-hidden="true"
                />
            </Disclosure.Button>
          </div>
          <div className="flex items-center w-full lg:justify-center">
            <div className="flex items-center justify-center md:items-stretch md:justify-start">
              <div className="flex items-center">
                <img
                  className="block w-auto h-14 lg:hidden"
                  src="/assets/images/logo.png"
                  alt="Turkey advisores"
                />
                <img
                  className="hidden w-auto h-16 lg:block"
                  src="/assets/images/logo.png"
                  alt="Turkey advisores"
                />
              </div>
            </div>
            <div className="flex items-center justify-between w-fit">
              <div className="flex hidden sm:ml-6 lg:block">
                <div className="flex items-center justify-between pt-4 xl:text-sm 2xl:text-base md:text-xs xl:space-x-8 lg:space-x-2">
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

              <div className="flex flex-col hidden py-2 mx-4 lg:block">
                <div className="flex items-center gap-1 mb-2">
                  <a
                    className="flex flex-col items-center w-8 h-8 py-2 justify-strech rounded-xl text-BACKGROUND_COLOR"
                    href="https://api.whatsapp.com/send/?phone=00905431441000&text&app_absent=0"
                  >
                    <WhatsAppOutlined
                      style={{ fontSize: "16px", fontWeight: 900 }}
                    />
                  </a>

                  <Currencies />
                  <SetLanguages />
                </div>
                <div className="flex items-center gap-2 grow">
                  <button onClick={()=>   setShowSearchModal(true)} className="flex-col items-center w-8 h-8 py-2 justify-strech rounded-xl text-BACKGROUND_COLOR">
                    <HiSearch className="text-xl" />
                  </button>
                  <button onClick={()=>   setShowEnquireModal(true)} className="p-[.3px] rounded-md w-full h-8 bg-BACKGROUND_COLOR text-xs">
                    Enquire Now
                  </button>
                </div>
                <div className="flex items-center gap-4 my-1 justify-evenly">
                  <button onClick={()=>   setShowLoginModal(true)} className="text-sm cursor-pointer text-BACKGROUND_COLOR hover:text-SECONDARY_COLOR">
                    Login
                  </button>
                  <button  onClick={()=>   setShowRegisterModal(true)} className="text-sm cursor-pointer text-BACKGROUND_COLOR hover:text-SECONDARY_COLOR">
                    Register
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Disclosure.Panel className="xl:hidden scroll-auto snap-y overscroll-contain overflow-y-scroll h-[60vh] ">
        <div className="px-2 pt-2 pb-3 space-y-1">
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
            href={"/contact"}
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
            key={"language"}
            as="a"
            href={"#"}
            className={classNames(
              "text-center text-gray-300 text-BACKGROUND_COLOR hover:bg-gray-700 hover:text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR block px-3 py-2  text-xl font-bold border-b-2"
            )}
          >
            EN
          </Disclosure.Button>
          <Disclosure.Button
            key={"enquire"}
            as="button"
            onClick={()=>   setShowEnquireModal(true)}
            className={classNames(
              "text-center w-full text-BACKGROUND_COLOR hover:text-SECONDARY_COLOR hover:bg-BACKGROUND_COLOR block px-3 py-2  text-xl font-bold border-b-2"
            )}
          >
            ENQUIRE NOW
          </Disclosure.Button>
        </div>
      </Disclosure.Panel>
    </>
  )}
</Disclosure>
<EnquireModal visibility={showEnquireModal} onCancel={()=> setShowEnquireModal(false)}/>
<RegisterModal visibility={showRegisterModal} onCancel={()=> setShowRegisterModal(false)}/>
<LoginModal visibility={showLoginModal} onCancel={()=> setShowLoginModal(false)}/>
<SearchModal visibility={showSearchModal} onCancel={()=> setShowSearchModal(false)}/>
</>  
  );
}
