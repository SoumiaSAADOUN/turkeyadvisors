import Head from "next/head";
import React, { useState, useEffect } from "react";
import { HiOutlineChat, HiOutlineChevronUp } from "react-icons/hi";
import Footer from "./Footer";
import Navigation from "./Navigation";
import { classNames } from "../utile/utils";
const Layout = ({ children }) => {
    
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <Navigation />
      {children}
      <a
        href={`mailto:${"soum.saadoun@gmail.com"}`}
        className="fixed z-20 rounded-full animate-bounce text-PRIMARY_COLOR bg-SECONDARY_COLOR bottom-5 left-10 group hover:bg-PRIMARY_COLOR"
      >
        <HiOutlineChat className="w-6 h-6 m-2 group-hover:text-BACKGROUND_COLOR text-PRIMARY_COLOR" />
      </a>

      <button
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "fixed z-10 rounded bg-SECONDARY_COLOR -bottom-1 text-PRIMARY_COLOR right-2 group hover:bg-PRIMARY_COLOR"
        )}
      >
        <HiOutlineChevronUp className="w-6 h-6 m-4 group-hover:text-BACKGROUND_COLOR text-PRIMARY_COLOR" />
      </button>
      <Footer />
    </>
  );
};

export default Layout;
