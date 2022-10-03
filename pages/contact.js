import React from "react";
import {
  HiOutlineMailOpen,
  HiPhone,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import FollowUs from "../components/Commun/FollowUs";
import PagesHeader from "../components/Commun/PagesHeader";

const Contact = () => {
  return (
    <>
      <PagesHeader title="Contact Us" link="contact" />
      <div className="flex flex-col gap-32 md:mx-[10%] mx-2 my-12 lg:flex-row text-PRIMARY_COLOR">
        <div className="flex flex-col gap-12 basis-1/3 grow">
          <h1 className="text-4xl font-bold text-PRIMARY_COLOR">
            LET'S CHAT !
          </h1>
          <div className="flex items-center lg:gap-8 gap-2 text-[1rem]  text-PRIMARY_COLOR">
            <HiPhone className="p-1 text-3xl border rounded" />
            <a href="tel://00905431441000/" className="text-PRIMARY_COLOR">
              00905431441000
            </a>
            <span>|</span>
            <a href="tel://00905431441000/" className="text-PRIMARY_COLOR">
              00905431441000
            </a>
          </div>

          <div className="flex-grow my-4 border-t border-PRIMARY_COLOR"></div>
          <div className="flex items-center lg:gap-8 gap-2 text-[1rem] text-PRIMARY_COLOR">
            <HiOutlineMailOpen className="p-1 text-3xl border rounded" />
            <a
              href="mailto:info@turkeyadvisors.com"
              className="text-PRIMARY_COLOR"
            >
              info@turkeyadvisors.com
            </a>
          </div>

          <div className="flex-grow my-4 border-t border-PRIMARY_COLOR"></div>
          <div className="flex items-center gap-8">
            <p className="m-0 text-xl"> Follow Us: </p>
            <FollowUs color="PRIMARY_COLOR" />
          </div>

          <div className="flex-grow my-4 border-t border-PRIMARY_COLOR"></div>
        </div>
        <div className="flex flex-col gap-8 basis-1/3 grow ">
          <h1 className="text-4xl font-bold text-PRIMARY_COLOR">
            SEND US AN EMAIL
          </h1>

          <input
            className="appearance-none bg-transparent border-b-PRIMARY_COLOR border-b-[1px]   py-4 w-full text-xl text-PRIMARY_COLOR mr-3  px-4 leading-tight focus:outline-none"
            type="text"
            placeholder={`Your Name`}
          />
          <input
            className="appearance-none bg-transparent border-b-PRIMARY_COLOR border-b-[1px]   py-4 w-full text-xl text-PRIMARY_COLOR mr-3  px-4 leading-tight focus:outline-none"
            type="email"
            placeholder={`Your Email`}
          />

          <div className="flex">
            <select className="border-b-[1px]">
              <option>DZ</option>
              <option>FR</option>
              <option>TR</option>
              <option>UK</option>
              <option>USA</option>
            </select>
            <input
              className="appearance-none bg-transparent border-b-PRIMARY_COLOR border-b-[1px]   py-4 w-full text-xl text-PRIMARY_COLOR mr-3  px-4 leading-tight focus:outline-none"
              type="tel"
              placeholder={`Your Phone`}
              pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
            />
          </div>
          <textarea
            rows="4"
            cols="50"
            className="appearance-none bg-transparent border-b-PRIMARY_COLOR border-b-[1px]  py-4 w-full text-xl text-PRIMARY_COLOR mr-3  px-4 leading-tight focus:outline-none"
            type="textArea"
            placeholder={`Your Message`}
          />
          <button className="flex justify-center items-center  h-[50px] w-[200px] text-xl border rounded bg-BACKGROUND_COLOR text-PRIMARY_COLOR hover:bg-PRIMARY_COLOR border-PRIMARY_COLOR hover:text-BACKGROUND_COLOR">
            <span>Submit</span>
            <HiOutlineArrowNarrowRight className="w-6 h-6 mx-4 text-xl font-extrabold " />
          </button>
        </div>
      </div>
      <div className="w-full h-[500px]">
        <iframe
          width="100%"
          height="100%"
          title="map"
          scrolling="no"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d375.804803686728!2d28.983156!3d41.103115!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x833b8190a0edbd15!2sTurkey%20Advisors!5e0!3m2!1sen!2sus!4v1664824227643!5m2!1sen!2sus"
          className="w-full h-full"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
