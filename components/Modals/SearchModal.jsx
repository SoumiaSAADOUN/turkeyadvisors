import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const SearchModal = (props) => {
  return (
    <>
      {props.visibility ? (
        <>
          <div className="justify-center w-full items-start flex fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-full ">
              {/*content*/}
              <div className=" shadow-lg relative flex flex-col w-full bg-PRIMARY_COLOR h-[180px] outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2">
                  <button
                    className=" ml-auto bg-transparent border-0  text-GREY float-right text-4xl leading-none font-base outline-none focus:outline-none "
                    onClick={() => props.onCancel()}
                  >
                    ×
                  </button>
                </div>
                {/*body*/}
                <div className="relative pb-4 flex justify-center items-center h-full ">
                  <input
                    className="lg:w-2/5 md:w-3/4 w-full appearance-none bg-transparent border-b-BACKGROUND_COLOR border-b-[1px]  py-3 w-full text-lg text-BACKGROUND_COLOR  px-4 leading-tight focus:outline-none focus:border-b-SECONDARY_COLOR "
                    type="text"
                    placeholder={`Example: Appartment Istanbul Sea View`}
                  />
                  <button className="flex items-center h-[50px] w-fit justify-between  px-8 font-md text-PRIMARY_COLOR bg-SECONDARY_COLOR hover:bg-SECONDARY_COLOR/90 ">
                    Search
                  </button>
                </div>
                {/*footer*/}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default SearchModal;
