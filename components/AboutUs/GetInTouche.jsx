import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const GetInTouch = () => {
    return <section className="bg-PRIMARY_COLOR/70 px-20 py-4 w-full mt-10 relative  min-h-[200px]">
        <img
            src="https://www.turkeyadvisors.com/sites/img/wwa.jpg"
            className="absolute top-0 left-0 w-full object-cover mix-blend-overlay min-h-full "
        />
        <div className="relative w-full">
            <p className="text-SECONDARY_COLOR font-semibold">Who we are !</p>
            <h1 className="text-4xl text-BACKGROUND_COLOR  font-bold">
                Turkey Advisors
            </h1>
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-SECONDARY_COLOR">
                    Contact Us Now
                </h3>

                <a
                    href="https://www.turkeyadvisors.com/citizenship-by-investment"
                    className="bg-SECONDARY_COLOR text-md text-PRIMARY_COLOR px-5 py-2 rounded flex justify-between items-center"
                >
                    <span> Get In Touch </span>
                    <HiArrowNarrowRight className="ml-4" />
                </a>
            </div>
        </div>

    </section>
}

export default GetInTouch;