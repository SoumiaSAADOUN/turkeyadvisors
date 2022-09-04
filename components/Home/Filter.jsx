import React from 'react'

import { useRouter } from "next/router";
import en from "../../locales/en";
import fr from "../../locales/fr";
const Filter =()=>{
    
  const router = useRouter();
  const { locale } = router;
  const t = locale === "en" ? en : fr;
    return <>
    <div className="flex justify-between">
          <h1 className="text-2xl font-semibold">{t.home.dreamHome}</h1>
          <div className="flex w-3/5 justify-evenly">
            <select className="w-1/5 rounded-lg shadow-md caret-yellow-100" defaultValue= {t.home.city}>
              <option value={t.home.city}>
                {t.home.city}
              </option>
            </select>
            <select className="w-1/5 px-1 rounded-lg shadow-md caret-yellow-100">
              <option  value={t.home.city}>
                {t.home.city}
              </option>
            </select>
            <select className="w-1/5 px-1 rounded-lg shadow-md caret-yellow-100">
              <option  value={t.home.city}>
                {t.home.city}
              </option>
            </select>
            <button className="flex w-1/5 px-4 py-2 font-bold rounded text-BACKGROUND_COLOR bg-PRIMARY_COLOR hover:bg-GREY">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              {t.home.search}
            </button>
          </div>
        </div>
     </>
}


export default Filter;