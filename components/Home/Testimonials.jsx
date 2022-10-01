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
      name: "Kim D",
      message:
        "The team at TurkeyAdvisers are fabulous realtors with solid experience. Ridvan responded fast all the time and helped us find the Perfect Place we were looking for. It turned out to be a great investment as well. Very professional and attentive to personal details, we were extremely lucky to have him help us close the sale and would recommend him and his team to all our friends.",
      avatar:
        "https://www.turkeyadvisors.com/storage/img/testimonials/AVF2xxAcGSilSzPgioCD.jpg",
      active: true,
    },
    {
      name: "Dr.Saud",
      message:
        "I have business with Mouaz and Abdullah for the last 4 years even before they established their new company. All based in honesty and trust. I find theme very sincere and our relationship is still growing based in the same principles.",
      avatar:
        "https://www.turkeyadvisors.com/storage/img/testimonials/zyKqSWbP6SVC3p2xHneE.jpg",
      active: false,
    },
    {
      name: "Kim D",
      message:
        "The team at TurkeyAdvisers are fabulous realtors with solid experience. Ridvan responded fast all the time and helped us find the Perfect Place we were looking for. It turned out to be a great investment as well. Very professional and attentive to personal details, we were extremely lucky to have him help us close the sale and would recommend him and his team to all our friends.",
      avatar:
        "https://www.turkeyadvisors.com/storage/img/testimonials/AVF2xxAcGSilSzPgioCD.jpg",
      active: true,
    },
  ];

  return (
    <section className="flex flex-col justify-center mt-16 ">
      <h1 className="text-3xl font-bold text-PRIMARY_COLOR">
        Gossips about us
      </h1>
      <section>
        <div className="flex justify-center">
          <div className="w-full lg:w-full xl:w-4/5 testimonials-section">
            <OwlCarousel
              className="my-8 owl-carousel owl-theme owl-loaded owl-drag"
              loop={true}
              lazyLoad
              animateIn="fade"
              center
              responsive={{
                0: {
                  items: 1,
                },
                1024: {
                  items: 2,
                },
                1280: {
                  items: 3,
                },
              }}
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard testimonial={testimonial} key={index} />
              ))}
            </OwlCarousel>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Testimonials;
