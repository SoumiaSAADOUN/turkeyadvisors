import React from "react";
import { Menu, Row, Col, Button } from "antd";
import styles from "../styles/Header.module.css";
import {
  SearchOutlined,
  GlobalOutlined,
  WhatsAppOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";

import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";
import LangageSettings from "./Languages.jsx";
import Image from "next/image";

const Header = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  const navs = [
    { text: "Home", href: "#" },
    { text: " About Us", href: "#" },
    { text: "Projects", href: "#" },
    { text: "Services", href: "#" },
    { text: "Turkish Citizenship", href: "#" },
    { text: "Blog", href: "#" },
    { text: "Articles", href: "#" },
    { text: "Contact Us", href: "#" },
  ];
  return (
    <>
      <div className="flex justify-around items-center bg-[url('/assets/images/header_bg.jpg')] bg-cover w-full px-24">
        <div className="basis-1/5 grow">
          <Image
            src="/assets/images/logo.png"
            alt="logo-turkey-advisors"
            width={220}
            height={56}
          />
        </div>
        <div className="basis-4/5 grow  pt-8 pl-5">
          <ul className="flex items-center gap-8 text-base font-semibold ">
            {navs.map((nav, index) => (
              <li className="mr-2" key={`nav-${index}`}>
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
        <div className="basis-1/5 grow">
          <div className={styles.params}>
            <Button
              className={styles.buttonTrans}
              icon={
                <WhatsAppOutlined
                  style={{ fontSize: "16px", fontWeight: 900 }}
                />
              }
              type="link"
            />
            <Button className={styles.buttonSimple}>
              <GlobalOutlined style={{ fontSize: "16px", fontWeight: 900 }} />
              USD
            </Button>
            <LangageSettings className={styles.buttonSimple} />
            {/* <Button className={styles.buttonSimple}>
              <GlobalOutlined style={{ fontSize: "16px",  fontWeight: 900 }}/>
              EN
            </Button> */}
            <Button
              className={styles.buttonTrans}
              icon={
                <SearchOutlined style={{ fontSize: "16px", fontWeight: 900 }} />
              }
              type="link"
            />
            <Button className={styles.buttonDouble}>
              {t.header.enquireNow}
            </Button>
            <Button className={styles.buttonLogin} type="link">
              {t.header.login}
            </Button>
            <Button className={styles.buttonLogin} type="link">
              {t.header.register}
            </Button>
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
