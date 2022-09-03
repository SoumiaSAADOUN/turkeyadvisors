import React from "react";

import { useRouter } from "next/router";
import en from "../../locales/en";
import fr from "../../locales/fr";
import { Row, Select, Button } from "antd";
const HomeContent = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  return (
    <>
      <div className="absolute w-10/12 p-6 m-20 border-t-4 border-yellow-500 border-solid rounded-t-3xl h-4/5">
        <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{t.home.dreamHome}</h1>
          <Row className="w-3/5" justify="space-between">
            <select className="w-1/4 px-1 rounded-lg shadow-md caret-yellow-100">
              <option value={t.home.city}>{t.home.city}</option>
            </select>
            <select className="w-1/4 px-1 rounded-lg shadow-md caret-yellow-100">
              <option value={t.home.city}>{t.home.city}</option>
            </select>
            <select className="w-1/4 px-1 rounded-lg shadow-md caret-yellow-100">
              <option value={t.home.city}>{t.home.city}</option>
            </select>
            <Button className="w-1/4 px-1 border-2 border-solid rounded-lg border-slate-500">
              {t.home.search}
            </Button>
          </Row>
        </div>
      </div>
    </>
  );
};

export default HomeContent;
