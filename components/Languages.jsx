import { Menu, Dropdown,  } from "antd";
import { LIGHT_GREY } from "../constants/colors";
import { useRouter } from "next/router";
import { HiOutlineTranslate } from "react-icons/hi";

const LangageSettings = () => {
  const router = useRouter();
  const {locale}= router;
 
  const handleChange = (value) => {
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
