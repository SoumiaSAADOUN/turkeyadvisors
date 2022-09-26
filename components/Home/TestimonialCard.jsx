import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const TestimonialCard = (props) => {
    return <div className={`testimonialCard p-12 m-4 flex flex-col justify-center items-center group cursor-pointer`}>
        <img src={props.testimonial.avatar} className="rounded-full avatar " />
        <h2 className={`text-3xl font-extrabold text-center text-PRIMARY_COLOR m-4 testimonialTitle `}>{props.testimonial.name}</h2>
       

        <div className="w-full px-2 text-center description">
            <div className="flex justify-between w-full mb-4 text-SECONDARY_COLOR">
                <FaQuoteLeft className="text-xs" />
                <FaQuoteRight className="text-xs" />
            </div>
            {props.testimonial.message}
        </div>
    </div>
}

export default TestimonialCard;