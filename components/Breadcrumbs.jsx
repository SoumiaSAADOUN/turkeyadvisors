import React from "react";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";

const Breadcrumbs = (props) => {
    return <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
                <a href="/" className="text-SECONDARY_COLOR inline-flex items-center text-sm font-medium  hover:text-BACKGROUND_COLOR dark:text-gray-400 dark:hover:text-white">
                    <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                    
                </a>
            </li>
            <li>
                <div className="flex items-center">
                <HiOutlineChevronDoubleRight className="text-BACKGROUND_COLOR font-bold text-2xl" />
                <a href={props.link} className="text-SECONDARY_COLOR  ml-1 text-xl font-medium  hover:text-BACKGROUND_COLOR md:ml-2 dark:text-gray-400 dark:hover:text-white">{props.title}</a>
                </div>
            </li>
           
        </ol>
    </nav>

}

export default Breadcrumbs; 