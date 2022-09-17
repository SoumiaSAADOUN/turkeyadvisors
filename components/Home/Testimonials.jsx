import React from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {

    const testimonials = [
        {
            name: 'Dr. Alaam',
            message: 'Excellent team..hardworking and helpful..follows no pressure advice and gives great recommendations on location and respect budget..highly recommended',
            avatar: 'http://turkeyadvisors.com/storage/img/testimonials/G1IAopJ2E7gTqshLoW31.jpg',
            active: true
        },
        {
            name: 'Dr. Alaam',
            message: 'Excellent team..hardworking and helpful..follows no pressure advice and gives great recommendations on location and respect budget..highly recommended',
            avatar: 'http://turkeyadvisors.com/storage/img/testimonials/G1IAopJ2E7gTqshLoW31.jpg',
            active:false
        },
        {
            name: 'Dr. Alaam',
            message: 'Excellent team..hardworking and helpful..follows no pressure advice and gives great recommendations on location and respect budget..highly recommended',
            avatar: 'http://turkeyadvisors.com/storage/img/testimonials/G1IAopJ2E7gTqshLoW31.jpg',
            active:false
        },
        {
            name: 'Dr. Alaam',
            message: 'Excellent team..hardworking and helpful..follows no pressure advice and gives great recommendations on location and respect budget..highly recommended',
            avatar: 'http://turkeyadvisors.com/storage/img/testimonials/G1IAopJ2E7gTqshLoW31.jpg',
            active:false
        },
        {
            name: 'Dr. Alaam',
            message: 'Excellent team..hardworking and helpful..follows no pressure advice and gives great recommendations on location and respect budget..highly recommended',
            avatar: 'http://turkeyadvisors.com/storage/img/testimonials/G1IAopJ2E7gTqshLoW31.jpg',
            active:false
        },
        
        {
            name: 'Dr. Alaam',
            message: 'Excellent team..hardworking and helpful..follows no pressure advice and gives great recommendations on location and respect budget..highly recommended',
            avatar: 'http://turkeyadvisors.com/storage/img/testimonials/G1IAopJ2E7gTqshLoW31.jpg',
            active:false
        },
        {
            name: 'Dr. Alaam',
            message: 'Excellent team..hardworking and helpful..follows no pressure advice and gives great recommendations on location and respect budget..highly recommended',
            avatar: 'http://turkeyadvisors.com/storage/img/testimonials/G1IAopJ2E7gTqshLoW31.jpg',
            active:false
        },
    ]

    return <section className="flex flex-col px-8 mt-16 ">
         <h1 className="text-3xl font-bold text-PRIMARY_COLOR">
          Gossips about us
        </h1>
        <div className="flex flex-col md:flex-row md:basis-1/2 lg:basis-1/2 justtify-center  items-center  scroll-auto snap-x overscroll-contain overflow-x-scroll">
        {testimonials.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} key={index} />
        ))}
        </div>
      

    </section>
}

export default Testimonials;