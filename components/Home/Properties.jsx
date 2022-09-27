import React from "react";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import SectionButton from "../Buttons/SectionButton";
import Property from "./Property";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
const Properties = (props) => {
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });

  return (
    <div >
      <section className="flex flex-col justify-between mt-20 lg:flex-row ">
        <h1 className="text-3xl font-bold text-PRIMARY_COLOR grow md:basis-2/3 ">
          {props.title}
        </h1>
        <div>
          <SectionButton
            title="See more "
            icon={
              <HiOutlineArrowNarrowRight className="w-6 h-6 mx-2 text-xl font-extrabold" />
            }
          />
        </div>
      </section>
      <OwlCarousel
        items={3}
        className="mt-8  owl-carousel owl-theme owl-loaded owl-drag"
        loop={true}
        lazyLoad
        nav
        center
        stagePadding={0}
        navText={[
          `<img src='assets/images/leftArrow.png'/>`,
          `<img src='assets/images/rightArrow.png'/>`,
        ]}
        animateIn="true"
        responsive={{
          0: {
            items: 1,
            nav:false,
          },
          1024: {
            items: 2,
            nav:false,
            center:false
          },
          1280: {
            items: 3,
          },
        }}
      >
        {props.propertiesList.map((property, index) => (
          <Property data={property} key={`property-${index}`} />
        ))}
      </OwlCarousel>
    </div>
  );
};

export default Properties;
