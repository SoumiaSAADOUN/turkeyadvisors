import React, { useState } from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const LoginModal = (props) => {
  const [visible, setVisible] = useState(props.visibility);

  return (
    <>
      {props.visibility ? (
        <>
          <div className="justify-center items-start my-8 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-[450px] mx-auto max-w-3xl">
              {/*content*/}
              <div className=" shadow-lg relative flex flex-col w-full bg-BACKGROUND_COLOR outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5">
                  <h3 className="text-2xl font-semibold">SEND US AN EMAIL</h3>
                  <button
                    className=" ml-auto bg-transparent border-0  text-GREY float-right text-4xl leading-none font-base outline-none focus:outline-none "
                    onClick={() => props.onCancel()}
                  >
                    ×
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-4 flex-auto">
                  <input
                    className="appearance-none bg-transparent border-b-PRIMARY_COLOR border-b-[1px]   py-2 w-full text-lg text-PRIMARY_COLOR mr-3  px-4 leading-tight focus:outline-none focus:border-b-SECONDARY_COLOR mb-2"
                    type="email"
                    placeholder={`Your Email`}
                  />
                  <input
                    className="appearance-none bg-transparent border-b-PRIMARY_COLOR border-b-[1px]   py-2 w-full text-lg text-PRIMARY_COLOR mr-3  px-4 leading-tight focus:outline-none focus:border-b-SECONDARY_COLOR mb-2"
                    type="password"
                    placeholder={`Your password`}
                  />
                  <div className="flex my-2">
                    <div className="mr-3 flex items-center">
                      <input
                        name={`remember-me`}
                        type="checkbox"
                        className=" h-4 w-4rounded"
                      />
                    </div>
                    <label
                      htmlFor={`remember-me`}
                      className="font-medium select-none"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                {/*footer*/}
                <div className="flex flex-col items-center w-full px-4">
                  <button
                    className="flex justify-center text-SECONDARY_COLOR rounded mx-4 bg-DARK_PRIMARY_COLOR font-bold py-3 hover:bg-PRIMARY_COLOR focus:outline-none w-full mb-10"
                    type="button"
                  >
                    <span> Login</span>
                    <HiOutlineArrowNarrowRight className="w-6 h-6 mx-2 text-xl font-extrabold" />
                  </button>

                  <button
                    className="flex text-sm justify-center items-center text-DARK_PRIMARY_COLOR rounded mx-4 bg-BACKGROUND_COLOR hover:text-BACKGROUND_COLOR font-base py-1 border hover:bg-PRIMARY_COLOR focus:outline-none w-full mb-1"
                    type="button"
                  >
                    <FaFacebookF className="w-3 h-3 mx-1 text-xl font-extrabold" />
                    <span> Login with facebook</span>
                  </button>
                  <button
                    className="flex text-sm justify-center items-center text-DARK_PRIMARY_COLOR rounded border mx-4 hover:text-BACKGROUND_COLOR bg-BACKGROUND_COLOR font-base py-1 hover:bg-PRIMARY_COLOR focus:outline-none w-full mb-2"
                    type="button"
                  >
                    <FaGoogle className="w-3 h-3 mx-1 text-xl font-extrabold" />
                    <span> Login with Google</span>
                  </button>
                </div>

                <div className="flex justify-between px-4 text-sm font-semibold mb-12">
                    <a href='#'><u> Forget password?</u></a>
                    <a href='#'><u>Register</u></a>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default LoginModal;
