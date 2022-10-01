import Head from "next/head";
import React from "react";
import { HiOutlineChat, HiOutlineChevronUp } from "react-icons/hi";
import Footer from "./Footer";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
    return <>
     
        <Navigation/>
        {children}
        {/* <a
            href={`mailto:${"soum.saadoun@gmail.com"}`}
            className="fixed z-10 rounded-full animate-bounce text-PRIMARY_COLOR bg-SECONDARY_COLOR bottom-5 left-10 group hover:bg-PRIMARY_COLOR"
        >

            <HiOutlineChat className="w-6 h-6 m-2 group-hover:text-BACKGROUND_COLOR text-PRIMARY_COLOR" />
        </a> */}

        {/* <a
            href="#"
            className="fixed z-10 rounded bg-SECONDARY_COLOR -bottom-1 text-PRIMARY_COLOR right-2 group hover:bg-PRIMARY_COLOR"
        >
            <HiOutlineChevronUp className="w-6 h-6 m-4 group-hover:text-BACKGROUND_COLOR text-PRIMARY_COLOR" />
        </a> */}
        <Footer />
    </>
}

export default Layout;