import React from "react";

import { useRouter } from "next/router";
import en from "../../locales/en";
import fr from "../../locales/fr";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineSearch } from "react-icons/hi";
const Filter = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
  return (
    <>
      <section className="flex flex-wrap justify-between">
        <h1 className="text-2xl font-semibold md:basis-2/6 sm:basis-full ">{t.home.dreamHome}</h1>
        <div className="flex flex-wrap md:basis-4/6 sm:basis-full justify-end">
          <select className=" lg:basis-1/5 sm:basis-full grow md:basis-1/3 mb-2 mr-2 h-[40px] rounded-lg shadow-md caret-yellow-100"
            placeholder={
              <div>
                <FaMapMarkerAlt />
                {t.home.city}
              </div>}
          >
            <option value={t.home.city}>{t.home.city}</option>
          </select>
          <select className=" lg:basis-1/5 basis-full grow mr-2 md:basis-1/3 mb-2  px-1 h-[40px] rounded-lg shadow-md caret-yellow-100">
            <option value={t.home.city}>{t.home.city}</option>
          </select>
          <select className="lg:basis-1/5 basis-full grow md:basis-1/3 mr-2 mb-2 px-1 h-[40px] rounded-lg shadow-md caret-yellow-100">
            <option value={t.home.city}>{t.home.city}</option>
          </select>
          <button className=" lg:basis-1/5 basis-full grow md:basis-1/3 mr-2  mb-2 flex px-4 py-2 h-[40px] justify-center items-center font-bold rounded-md text-BACKGROUND_COLOR bg-DARK_PRIMARY_COLOR hover:border-PRIMARY_COLOR hover:border hover:bg-PRIMARY_COLOR">
            <HiOutlineSearch className="w-4 h-4 mr-2 text-xl font-bold" />
            {t.home.search}
          </button>
        </div>
      </section>
    </>
  );
};

export default Filter;
