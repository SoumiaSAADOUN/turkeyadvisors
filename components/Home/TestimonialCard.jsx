import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
const TestimonialCard = (props) => {
    return <div className={`border snap-center rounded-xl p-12 m-4 flex flex-col items-center basis-1/2  group cursor-pointer  ${props.testimonial.active && 'bg-DARK_PRIMARY_COLOR text-BACKGROUND_COLOR'} hover:bg-DARK_PRIMARY_COLOR hover:text-BACKGROUND_COLOR hover:self-center place-self-center justify-self-center hover:origin-center`}>
        <img src={props.testimonial.avatar} className="rounded-full h-20 w-20" />
        <h2 className={`text-lg font-bold text-center text-PRIMARY_COLOR m-4 ${props.testimonial.active && 'text-BACKGROUND_COLOR'} group-hover:text-BACKGROUND_COLOR`}>{props.testimonial.name}</h2>
        <div className="flex justify-between text-SECONDARY_COLOR font-bold text-2xl">

        </div>

        <p className={`text-center text-center ${props.testimonial.active ? 'block' : 'hidden'} ${props.testimonial.active && 'w-48'} group-hover:w-48 group-hover:block `}>
            <div className="flex justify-between w-full text-SECONDARY_COLOR mb-4">
                <FaQuoteLeft className="text-xs" />
                <FaQuoteRight className="text-xs" />
            </div>
            {props.testimonial.message}
        </p>
    </div>
}

export default TestimonialCard;