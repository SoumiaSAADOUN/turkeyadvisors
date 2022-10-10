import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const EnquireForm = () => {
  return <div className=" shadow-lg flex flex-col w-full bg-BACKGROUND_COLOR">
    {/*header*/}
    <div className="flex items-start justify-between p-5">
      <h3 className="text-2xl font-semibold">SEND US AN EMAIL</h3>
    </div>
    {/*body*/}
    <div className="p-4 flex-auto">
      <input
        className="appearance-none bg-transparent border-b-PRIMARY_COLOR border-b-[1px]   py-4 w-full text-lg text-PRIMARY_COLOR mr-3  px-4 leading-tight focus:outline-none focus:border-b-SECONDARY_COLOR mb-8"
        type="text"
        placeholder={`Your Name`}
      />
      <input
        className="appearance-none bg-transparent border-b-PRIMARY_COLOR border-b-[1px]   py-4 w-full text-lg text-PRIMARY_COLOR mr-3  px-4 leading-tight focus:outline-none focus:border-b-SECONDARY_COLOR mb-8"
        type="email"
        placeholder={`Your Email`}
      />

      <div className="flex">
        <select className="border-b-[1px] focus:border-b-SECONDARY_COLOR bg-LIGHT_GREY">
          <option>DZ +213</option>
          <option>FR +33</option>
          <option>TR +00</option>
          <option>UK +00</option>
          <option>USA +1</option>
        </select>
        <input
          className="appearance-none bg-transparent border-b-PRIMARY_COLOR border-b-[1px]   py-4 w-full text-lg text-PRIMARY_COLOR mr-3  px-4 leading-tight focus:outline-none focus:border-b-SECONDARY_COLOR"
          type="tel"
          placeholder={`Your Phone`}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
      </div>
      <textarea
        rows="3"
        cols="50"
        className="appearance-none bg-transparent border-b-PRIMARY_COLOR border-b-[1px]  py-4 w-full text-lg text-PRIMARY_COLOR mr-3  px-4 leading-tight focus:outline-none focus:border-b-SECONDARY_COLOR mt-4"
        type="textArea"
        placeholder={`Your Message`}
      />
    </div>
    {/*footer*/}
    <div className="flex items-center w-full">
      <button
        className="flex justify-center text-SECONDARY_COLOR rounded mx-4 my-2 bg-DARK_PRIMARY_COLOR font-bold py-3 hover:bg-PRIMARY_COLOR focus:outline-none w-full"
        type="button"
      >
        <span> Request For Details</span>
        <HiOutlineArrowNarrowRight className="w-6 h-6 mx-2 text-xl font-extrabold" />
      </button>
    </div>
  </div>;
};
export default EnquireForm;
