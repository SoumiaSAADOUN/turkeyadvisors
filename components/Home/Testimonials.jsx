import React from "react";
import TestimonialCard from "./TestimonialCard";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";

const Testimonials = () => {
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  const testimonials = [
    {
      name: "Dr. Alaam",
      message:
        "Excellent team..hardworking and helpful..follows no pressure advice and gives great recommendations on location and respect budget..highly recommended",
      avatar:
        "http://turkeyadvisors.com/storage/img/testimonials/G1IAopJ2E7gTqshLoW31.jpg",
      active: false,
    },
    {
      name: "Dr. Alaam",
      message:
        "Excellent team..hardworking and helpful..follows no pressure advice and gives great recommendations on location and respect budget..highly recommended",
      avatar:
        "http://turkeyadvisors.com/storage/img/testimonials/G1IAopJ2E7gTqshLoW31.jpg",
      active: true,
    },
    {
      name: "Dr. Alaam",
      message:
        "Excellent team..hardworking and helpful..follows no pressure advice and gives great recommendations on location and respect budget..highly recommended",
      avatar:
        "http://turkeyadvisors.com/storage/img/testimonials/G1IAopJ2E7gTqshLoW31.jpg",
      active: false,
    },
  ];

  return (
    <section className="flex flex-col justify-center px-8 mt-16 ">
      <h1 className="text-3xl font-bold text-PRIMARY_COLOR">
        Gossips about us
      </h1>
      <section className="lg:w-3/5 m-auto">
        <OwlCarousel
          className="my-8 owl-carousel owl-theme owl-loaded owl-drag "
          loop={true}
          lazyLoad
          stagePadding={120}
          animateIn="fade"
          responsive={{
            0: {
              items: 1,
            },
            768: {
              items: 2,
            },
            1280: {
              items: 1,
            },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard testimonial={testimonial} key={index} />
          ))}
        </OwlCarousel>
      </section>
    </section>
  );
};

export default Testimonials;
