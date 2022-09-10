import { Menu, Dropdown, Button } from "antd";
import React, { useState, useEffect } from "react";
import {
  SearchOutlined,
  GlobalOutlined,
  WhatsAppOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";
import { LIGHT_GREY } from "../constants/colors";

import styles from "../styles/Header.module.css";

import { useRouter } from "next/router";
import en from "../locales/en";
import fr from "../locales/fr";
import { HiOutlineTranslate } from "react-icons/hi";

const LangageSettings = () => {
  // const { Option } = Select;
  //const [langue, setLangue] = useState(`En`);
  const router = useRouter();
  const {locale}= router;
  //const t= locale ==='en'? en: fr;
 

  
 // const t= locale ==='en'? en: locale ==='fr'? fr : 'ar';

  const handleChange = (value) => {
    //setLangue(value);
    //window.localStorage.setItem("i18nextLng", langue);
    const locale= value;
    router.push('/','/', {locale})
  };

  return (
    <>
      <Dropdown
        onChange={handleChange}
        overlay={
          <Menu
            id="lang"
            name="lang"
            value={locale}
            defaultValue={"EN"}
            style={{ color: LIGHT_GREY }}
          >
            <Menu.Item value="FR" key={"FR"} onClick={() => handleChange("fr")}>
              Français
            </Menu.Item>
            <Menu.Item value="AR" key={"AR"} onClick={() => handleChange("ar")}>
              عربي
            </Menu.Item>

            <Menu.Item value="EN" key={"EN"} onClick={() => handleChange("en")}>
              English
            </Menu.Item>
          </Menu>
        }
      >
        <button className="flex py-2 flex-col justify-strech items-center rounded-xl w-12 h-12 bg-BACKGROUND_COLOR">
          <HiOutlineTranslate className="text-xl"/>
          <span>{locale.toUpperCase()}</span>
        </button>
      </Dropdown>
    </>
  );
};
export default LangageSettings;
