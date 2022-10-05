import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const GetInTouch = () => {
    return <section className="bg-PRIMARY_COLOR/90 px-4 md:px-20 py-4 w-full mt-10 relative  h-full">
        <img
            src="https://www.turkeyadvisors.com/sites/img/wwa.jpg"
            className="absolute top-0 left-0 object-cover w-full h-full mix-blend-overlay "
        />
        <div className="relative flex flex-col w-full gap-4">
            <p className="font-semibold text-SECONDARY_COLOR">Who we are !</p>
            <h1 className="text-4xl font-bold text-BACKGROUND_COLOR">
                Turkey Advisors
            </h1>
            <div className="flex flex-col justify-between gap-8 sm:items-center sm:flex-row">
                <h3 className="text-xl font-bold text-SECONDARY_COLOR">
                    Contact Us Now
                </h3>

                <a
                    href="https://www.turkeyadvisors.com/citizenship-by-investment"
                    className="flex items-center justify-between w-full px-5 py-2 rounded sm:w-fit bg-SECONDARY_COLOR text-md text-PRIMARY_COLOR"
                >
                    <span> Get In Touch </span>
                    <HiArrowNarrowRight className="ml-4" />
                </a>
            </div>
        </div>

    </section>
}

export default GetInTouch;