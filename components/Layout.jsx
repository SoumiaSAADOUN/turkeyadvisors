import Head from "next/head";
import React from "react";
import { HiOutlineChat, HiOutlineChevronUp } from "react-icons/hi";
import Footer from "./Footer";
import Header from "./Header";
import Navigation from "./Navigation";

const Layout = ({ children }) => {
    return <>
     
        <Navigation/>
        {children}
        <a
            href={`mailto:${"soum.saadoun@gmail.com"}`}
            className="animate-bounce rounded-full text-PRIMARY_COLOR bg-SECONDARY_COLOR fixed bottom-5 left-10 group hover:bg-PRIMARY_COLOR"
        >

            <HiOutlineChat className="w-6 h-6 m-2 group-hover:text-BACKGROUND_COLOR text-PRIMARY_COLOR" />
        </a>

        <a
            href="#"
            className="z-10 bg-SECONDARY_COLOR rounded fixed -bottom-1 text-PRIMARY_COLOR right-2 group hover:bg-PRIMARY_COLOR"
        >
            <HiOutlineChevronUp className="w-6 h-6 m-4 group-hover:text-BACKGROUND_COLOR text-PRIMARY_COLOR" />
        </a>
        <Footer />
    </>
}

export default Layout;