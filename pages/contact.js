import React from "react";
import { HiOutlineMailOpen, HiPhone } from "react-icons/hi";
import FollowUs from "../components/Commun/FollowUsollowUs";
import PagesHeader from "../components/Commun/PagesHeader";

const Contact = () => {
    return <>
        <PagesHeader title='Contact Us' link='contact'/>
        <div className="flex flex-wrap gap-32 mx-20 my-12 text-PRIMARY_COLOR">
            <div className="flex flex-col gap-12 basis-1/3 grow">
                <h1 className="text-4xl font-bold text-PRIMARY_COLOR">LET'S CHAT !</h1>
                <div className="flex items-center gap-8 text-lg text-PRIMARY_COLOR">
                    <HiPhone className="p-1 text-3xl border rounded" />
                    <a href='tel://00905431441000/' className="text-PRIMARY_COLOR">00905431441000</a>
                    <span>|</span>
                    <a href='tel://00905431441000/' className="text-PRIMARY_COLOR">00905431441000</a>
                </div>

                <div className="flex-grow my-4 border-t border-PRIMARY_COLOR"></div>
                <div className="flex items-center gap-8 text-lg text-PRIMARY_COLOR">
                    <HiOutlineMailOpen className="p-1 text-3xl border rounded" />
                    <a href="mailto:info@turkeyadvisors.com" className="text-PRIMARY_COLOR">info@turkeyadvisors.com</a>
                </div>

                <div className="flex-grow my-4 border-t border-PRIMARY_COLOR"></div>
                <div className="flex items-center gap-8">
                    <p className="m-0 text-xl"> Follow Us: </p>
                    <FollowUs color='PRIMARY_COLOR' />
                </div>

                <div className="flex-grow my-4 border-t border-PRIMARY_COLOR"></div>
            </div>
            <div className="flex flex-col gap-8 basis-1/3 grow ">
                <h1 className="text-4xl font-bold text-PRIMARY_COLOR">SEND US AN EMAIL</h1>

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
                        <option>
                            DZ
                        </option>
                        <option>
                            FR
                        </option>
                        <option>
                            TR
                        </option>
                        <option>
                            UK
                        </option>
                        <option>
                            USA
                        </option>
                    </select>
                    <input
                        className="appearance-none bg-transparent border-b-PRIMARY_COLOR border-b-[1px]   py-4 w-full text-xl text-PRIMARY_COLOR mr-3  px-4 leading-tight focus:outline-none"
                        type="tel"
                        placeholder={`Your Phone`}
                        pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                    />
                </div>
                <textarea
                    rows="4" cols="50"
                    className="appearance-none bg-transparent border-b-PRIMARY_COLOR border-b-[1px]  py-4 w-full text-xl text-PRIMARY_COLOR mr-3  px-4 leading-tight focus:outline-none"
                    type="textArea"
                    placeholder={`Your Message`}
                />
                <button className="flex justify-center w-1/5 px-24 py-2 font-bold rounded text-BACKGROUND_COLOR bg-PRIMARY_COLOR hover:text-PRIMARY_COLOR hover:border-PRIMARY_COLOR hover:border hover:bg-BACKGROUND_COLOR">
                    Submit
                </button>
            </div>
        </div></>
}

export default Contact;