import React from "react";
import {
  WhatsAppOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";
import LangageSettings from "./Languages.jsx";
import Image from "next/image";
import { HiGlobeAlt, HiSearch } from "react-icons/hi";

const Header = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  const navs = [
    { text: "Home", href: "/" },
    { text: " About Us", href: "aboutUs" },
    { text: "Projects", href: "#" },
    { text: "Services", href: "#" },
    { text: "Turkish Citizenship", href: "#" },
    { text: "Blog", href: "#" },
    { text: "Articles", href: "#" },
    { text: "Contact Us", href: "#" },
  ];
  return (
    <>
      <div className="flex justify-around items-center bg-[url('/assets/images/header_bg.jpg')] bg-cover w-full px-12">
        <div className="basis-1/5 grow">
          <Image
            src="/assets/images/logo.png"
            alt="logo-turkey-advisors"
            width={220}
            height={56}
          />
        </div>
        <div className="basis-4/5 grow  pt-8 pl-5">
          <ul className="flex items-center gap-8 text-base ">
            {navs.map((nav, index) => (
              <li key={`nav-${index}`}>
                <a
                  className="text-BACKGROUND_COLOR hover:text-SECONDARY_COLOR"
                  href={nav.href}
                >
                  {nav.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col basis-1/5 grow">
          <div className="flex mb-2 gap-2 items-center">
            <button className="w-12 h-12 text-BACKGROUND_COLOR"> <WhatsAppOutlined
              style={{ fontSize: "16px", fontWeight: 900 }}
            /></button>
            <button className="flex flex-col py-2 justify-strech items-center rounded-xl w-12 h-12 bg-BACKGROUND_COLOR">
              <HiGlobeAlt className="text-xl" />
              USD
            </button>
            <LangageSettings/>


          </div>
          <div className="flex grow gap-2 items-center">
            <button className="flex py-2 flex-col justify-strech items-center rounded-xl w-12 h-12 text-BACKGROUND_COLOR">
              <HiSearch className="text-xl" />
            </button>
            <button className="p-2 items-center rounded-xl w-28 h-12 bg-BACKGROUND_COLOR">

              {t.header.enquireNow}
            </button>
          </div>
          <div className="flex grow gap-2 items-center justify-evenly my-2">

            <a className="text-BACKGROUND_COLOR hover:text-SECONDARY_COLOR" >
              {t.header.login}
            </a>
            <a className="text-BACKGROUND_COLOR hover:text-SECONDARY_COLOR" >
              {t.header.register}
            </a>
          </div>
        </div>

        {/* <div className={styles.menu}>
          <Button type={'link'} className={styles.menu_item}>Contact Us</Button>
        </div> */}
      </div>
    </>
  );
};

export default Header;
