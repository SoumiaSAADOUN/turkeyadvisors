import React from "react";
import { Image, Menu, Row, Col, Button } from "antd";
import styles from "../styles/Header.module.css";
import {
  SearchOutlined,
  GlobalOutlined,
  WhatsAppOutlined,
  MoneyCollectOutlined,
} from "@ant-design/icons";

import { useRouter } from 'next/router'
import en from '../locales/en'
import fr from '../locales/fr'
import  LangageSettings from './Languages.jsx'

const Header = () => {
  const router = useRouter();
  const {locale}= router;
  const t= locale ==='en'? en: fr;
  return (
    <>
      <Row
        className={styles.site_page_header}
        align="middle"
        justify="space-around"
      >
        <Col lg={2}></Col>
        <Col lg={4}>
          <Image
            src="/assets/images/logo.png"
            alt="logo-turkey-advisors"
            width={220}
            height={56}
          />
        </Col>
        <Col lg={13}>
          <Menu mode="inline" className={styles.menu}>
            <Menu.Item key="contact" className={styles.menu_item}>
            {t.header.contactUs}
            </Menu.Item>
          </Menu>
        </Col>
        <Col lg={3}>
          <div className={styles.params}>
            <Button
              className={styles.buttonTrans}
              icon={
                <WhatsAppOutlined
                  style={{ fontSize: "16px",  fontWeight: 900 }}
                />
              }
              type="link"
            />
            <Button className={styles.buttonSimple}>
              <GlobalOutlined style={{ fontSize: "16px", fontWeight: 900 }} />
              USD
            </Button>
            <LangageSettings className={styles.buttonSimple}/>
            {/* <Button className={styles.buttonSimple}>
              <GlobalOutlined style={{ fontSize: "16px",  fontWeight: 900 }}/>
              EN
            </Button> */}
            <Button
              className={styles.buttonTrans}
              icon={
                <SearchOutlined
                style={{ fontSize: "16px",  fontWeight: 900 }}
                />
              }
              type="link"
            />
            <Button className={styles.buttonDouble}>{t.header.enquireNow}</Button>
            <Button className={styles.buttonLogin} type="link">{t.header.login}</Button>
            <Button className={styles.buttonLogin} type="link">{t.header.register}</Button>
          </div>
        </Col>
        <Col lg={2}></Col>

        {/* <div className={styles.menu}>
          <Button type={'link'} className={styles.menu_item}>Contact Us</Button>
        </div> */}
      </Row>
    </>
  );
};

export default Header;
