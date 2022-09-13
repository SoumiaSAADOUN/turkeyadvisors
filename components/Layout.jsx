import Head from "next/head";
import React from "react";
import { HiOutlineChat, HiOutlineChevronUp } from "react-icons/hi";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
    return <>
        <Head>
            <meta charset="utf-8" />
            <link
                rel="icon"
                sizes="192x192"
                type="image/png"
                href="https://www.turkeyadvisors.com/favicon-192x192.ico"
            ></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link
                rel="preconnect"
                href="https://fonts.gstatic.com"
                crossorigin
            ></link>
            <link
                href="https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap"
                rel="stylesheet"
            ></link>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>
                Turkey Advisors | Real estate & Investment advisors In Turkey
            </title>
        </Head>
        <Header />
        {children}
        <a
            href={`mailto:${"soum.saadoun@gmail.com"}`}
            className="animate-bounce rounded-full text-PRIMARY_COLOR bg-SECONDARY_COLOR fixed bottom-5 left-10 group hover:bg-PRIMARY_COLOR"
        >

            <HiOutlineChat className="w-6 h-6 m-2 group-hover:text-BACKGROUND_COLOR text-PRIMARY_COLOR" />
        </a>

        <a
            href="#"
            className="bg-SECONDARY_COLOR rounded fixed -bottom-1 text-PRIMARY_COLOR right-2 group hover:bg-PRIMARY_COLOR"
        >
            <HiOutlineChevronUp className="w-6 h-6 m-4 group-hover:text-BACKGROUND_COLOR text-PRIMARY_COLOR" />
        </a>
        <Footer />
    </>
}

export default Layout;