import React from "react";

import { useRouter } from "next/router";
import en from "../../locales/en";
import fr from "../../locales/fr";
import { HiOutlineSearch } from "react-icons/hi";
const Filter = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  return (
    <>
      <section className="flex justify-between">
        <h1 className="text-2xl font-semibold">{t.home.dreamHome}</h1>
        <div className="flex w-3/5 justify-evenly">
          <select
            className="w-1/5 rounded-lg shadow-md caret-yellow-100"
            defaultValue={t.home.city}
          >
            <option value={t.home.city}>{t.home.city}</option>
          </select>
          <select className="w-1/5 px-1 rounded-lg shadow-md caret-yellow-100">
            <option value={t.home.city}>{t.home.city}</option>
          </select>
          <select className="w-1/5 px-1 rounded-lg shadow-md caret-yellow-100">
            <option value={t.home.city}>{t.home.city}</option>
          </select>
          <button className="flex w-1/5 px-2 py-2 justify-between font-bold rounded text-BACKGROUND_COLOR bg-PRIMARY_COLOR hover:text-PRIMARY_COLOR hover:border-PRIMARY_COLOR hover:border hover:bg-BACKGROUND_COLOR">
            <HiOutlineSearch className="w-5 h-5 mx-2 text-xl font-bold" />
            {t.home.search}
          </button>
        </div>
      </section>
    </>
  );
};

export default Filter;
