import React from "react";
import {
  FaCheckSquare,
  FaCircle,
  FaCloudDownloadAlt,
  FaHourglassHalf,
  FaMapMarkedAlt,
  FaRegCheckSquare,
  FaWhatsapp,
} from "react-icons/fa";
import {
  HiOutlineCalendar,
  HiOutlineEye,
  HiOutlineMailOpen,
  HiOutlineShare,
  HiPrinter,
} from "react-icons/hi";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import dynamic from "next/dynamic";
import Properties from "../../components/Home/Properties";
import EnquireForm from "../../components/Commun/EnquireForm";
import GetInTouche from "../../components/AboutUs/GetInTouche";

const Project = (props) => {
  const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
    ssr: false,
  });
  const imagesCarousel = [
    {
      src: "https://www.turkeyadvisors.com/storage/img/projects/SJp9TX0o92cZnPwRaE9n.jpeg",
    },
    {
      src: "https://www.turkeyadvisors.com/storage/img/projects/HrrN8MnLdd653tRKd1pD.jpeg",
    },
    {
      src: "https://www.turkeyadvisors.com/storage/img/projects/w2IrI5zaDpQo5560sbZA.jpeg",
    },
    {
      src: "https://www.turkeyadvisors.com/storage/img/projects/wUs20Qe22YE61ksr7wpI.jpeg",
    },
    {
      src: "https://www.turkeyadvisors.com/storage/img/projects/HLbj96HftQA4aPE8CtVA.jpeg",
    },
  ];
  const properties = [
    {
      img: "https://www.turkeyadvisors.com/storage/img/projects/cFlAvUifLOFMZSOIZwaC.jpeg",
      title:
        "Family Friendly Edgy Architectural Design in the Center of European Istanbul",
      overview:
        "The project has a unique, edgy architectural design, located in Kagithane municipality, which has been remodel...",
      price: "$ 2500,000",
      location: "Istanbul",
      nbrBedrooms: "3",
      nbrBathrooms: "2",
      surface: "53 Sq. m",
    },
    {
      img: "https://www.turkeyadvisors.com/storage/img/projects/HrrN8MnLdd653tRKd1pD.jpeg",
      title:
        "Family Friendly Edgy Architectural Design in the Center of European Istanbul",
      overview:
        "The project has a unique, edgy architectural design, located in Kagithane municipality, which has been remodel...",
      price: "$ 3200,000",
      location: "Istanbul",
      nbrBedrooms: "2",
      nbrBathrooms: "2",
      surface: "83 Sq. m",
    },
    {
      img: "https://www.turkeyadvisors.com/storage/img/projects/xdMHESWws3i6qK6H9OSX.jpg",
      title:
        "Family Friendly Edgy Architectural Design in the Center of European Istanbul",
      overview:
        "The project has a unique, edgy architectural design, located in Kagithane municipality, which has been remodel...",
      price: "$ 2800,000",
      location: "Istanbul",
      nbrBedrooms: "2",
      nbrBathrooms: "1",
      surface: "53 Sq. m",
    },
    {
      img: "https://www.turkeyadvisors.com/storage/img/projects/xdMHESWws3i6qK6H9OSX.jpg",
      title:
        "Family Friendly Edgy Architectural Design in the Center of European Istanbul",
      overview:
        "The project has a unique, edgy architectural design, located in Kagithane municipality, which has been remodel...",
      price: "$ 2800,000",
      location: "Istanbul",
      nbrBedrooms: "2",
      nbrBathrooms: "1",
      surface: "53 Sq. m",
    },
  ];
  const details = [
    "Property ID",
    "Price",
    "Property Size",
    "Bedrooms",
    "Bathrooms",
    "Delivery Date",
    "Property Type",
    "Property Status",
    "City",
    "Area",
  ];
  const detailsValues = [
    "TA193-1",
    "25 000$",
    "64 Sq m",
    1,
    1,
    2024,
    "Apartment",
    "Selling",
    "Istanbul",
    "Bagcilar",
  ];
  const facilities = [
    "Sauna",
    "Pool",
    "Gym",
    "24/7 Security",
    "Parking",
    "Children playground",
    "Turkish bath",
  ];
  const nearby = ["Metro", "Shopping Mall", "School"];
  const nearbyValues = ["3Km", "2Km", "3Km"];
  return (
    <>
      <div className="flex flex-col md:flex-row gap-8 justify-between mx-[10%] mt-12">
        <div className="flex justify-start gap-4">
          <span className="py-2 px-2 rounded text-xs bg-DARK_PRIMARY_COLOR text-SECONDARY_COLOR">
            Selling
          </span>
          <div className="flex gap-2 items-center">
            <HiOutlineCalendar className="text-SECONDARY_COLOR" />
            <span className="text-sm text-PRIMARY_COLOR">10 oct 2022</span>
          </div>
          <div className="flex gap-2 items-center">
            <HiOutlineEye className="text-SECONDARY_COLOR" />
            <span className="text-sm text-PRIMARY_COLOR">423 Views</span>
          </div>
        </div>
        <div className="flex justify-start gap-4">
          <div className="flex gap-2 items-center justify-end">
            <HiOutlineMailOpen className="text-SECONDARY_COLOR" />
            <a
              href={`mailto:${"soum.saadoun@gmail.com"}`}
              className="text-sm text-PRIMARY_COLOR"
            >
              Email
            </a>
          </div>
          <div className="flex gap-2 items-center">
            <HiOutlineShare className="text-SECONDARY_COLOR" />
            <span className="text-sm text-PRIMARY_COLOR">Share</span>
          </div>
          <div className="flex gap-2 items-center">
            <HiPrinter className="text-SECONDARY_COLOR" />
            <span className="text-sm text-PRIMARY_COLOR">Print</span>
          </div>
          <button className="w-fit px-2 bg-SECONDARY_COLOR text-PRIMARY_COLOR text-xs rounded">
            Enquire Now
          </button>
        </div>
      </div>
      <div className="flex-grow my-6 mx-[10%] border-t border-DARK_GREY"></div>
      <div className="flex flex-col my-6 mx-[10%] ">
        <h1 className="text-4xl text-PRIMARY_COLOR">
          Amazing Investment in the Heart of the New Commercial Center of
          Istanbul
        </h1>
        <div className="flex justify-start gap-4 my-4">
          <div className="flex gap-2 items-center">
            <FaMapMarkedAlt className="text-SECONDARY_COLOR" />
            <span className="text-sm text-PRIMARY_COLOR font-semibold">
              Istanbul
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 40 40.305"
              className="fill-SECONDARY_COLOR"
            >
              <defs></defs>
              <g transform="translate(0 -0.003)">
                <path
                  className="a"
                  d="M1.342,40.308H5.383a1.339,1.339,0,0,0,1.342-1.342V37.624h15.2a18.013,18.013,0,0,0,17.74-14.881l.292-1.649a2.529,2.529,0,0,0-2.042-2.932,2.493,2.493,0,0,0-1.59.233V15.419H37a.679.679,0,0,0,.671-.671.739.739,0,0,0-.19-.481L32.081,8.9a.669.669,0,0,0-.948,0l-1.546,1.546V1.312A.679.679,0,0,0,28.916.64H22.19a.679.679,0,0,0-.671.671v7.4H18.791a11.145,11.145,0,0,0-1.2-2.159L19.3,2.391A1.153,1.153,0,0,0,18.674.874,1.167,1.167,0,0,0,17.711.9l-1.269.642L15.64.48A1.165,1.165,0,0,0,14.006.247c-.058.015-.088.058-.131.088L12.853,1.355l-.671-.89A1.18,1.18,0,0,0,10.548.232c-.044.029-.088.073-.131.1l-1.284,1.3-1.94-.554a1.161,1.161,0,0,0-1.444.8,1.145,1.145,0,0,0,.1.875L7.878,6.505c-1.43,1.284-3.166,4.917-3.166,8.214v2.057a4.05,4.05,0,0,0,4.041,4.041H34.562l-1.415,2.845-3.706,1.59a3.344,3.344,0,0,0-3.21-2.407H16.544a18.652,18.652,0,0,0-9.818,2.787V24.187a1.339,1.339,0,0,0-1.342-1.342H1.342A1.317,1.317,0,0,0,0,24.173V38.966A1.339,1.339,0,0,0,1.342,40.308ZM8.856,2.96a1.163,1.163,0,0,0,1.138-.292l1.225-1.225.686.89a1.18,1.18,0,0,0,1.634.233.834.834,0,0,1,.117-.1l1.021-1.021.773,1.021a1.175,1.175,0,0,0,1.459.35l.977-.5L16.369,6.024H14.531L15.392,4.3l-1.2-.6-1.167,2.32H11.861l-.948-1.955L9.7,4.652l.657,1.371H9.147L7.236,2.493Zm6.609,6.419V19.46H8.739a2.687,2.687,0,0,1-2.684-2.684V14.719c0-3.6,2.232-6.959,2.859-7.353h7.616A7.269,7.269,0,0,1,17.3,8.708H16.136A.679.679,0,0,0,15.464,9.379Zm1.342.671h4.712v9.41H16.807Zm14.793.277,3.749,3.749H27.836ZM22.861,1.983h5.383v9.8L25.75,14.281a.669.669,0,0,0,0,.948.649.649,0,0,0,.481.19H26.9V19.46H22.861Zm5.383,13.451H34.97v4.041H33.628v-2.7a.679.679,0,0,0-.671-.671H30.272a.679.679,0,0,0-.671.671V19.46H28.259V15.434Zm4.041,4.027H30.929V17.447h1.342V19.46ZM16.544,24.173h9.687a2.013,2.013,0,1,1,0,4.027H15.464v1.342H26.231a3.337,3.337,0,0,0,3.312-2.9L33.89,24.8a.653.653,0,0,0,.336-.321L36.4,20.132a1.186,1.186,0,0,1,1.59-.525,1.2,1.2,0,0,1,.642,1.269l-.292,1.649A16.654,16.654,0,0,1,21.927,36.282H6.726v-9.06A17.356,17.356,0,0,1,16.544,24.173Zm-15.2,0H5.383V38.966H1.342Z"
                  transform="translate(0 0)"
                ></path>
                <path
                  className="a"
                  d="M1.84,17.95H3.013v1.76H1.84Z"
                  transform="translate(0.506 8.409)"
                ></path>
                <path
                  className="a"
                  d="M16.59,2.28h.587V3.453H16.59Z"
                  transform="translate(7.665 0.626)"
                ></path>
                <path
                  className="a"
                  d="M17.98,2.28h.587V3.453H17.98Z"
                  transform="translate(8.308 0.626)"
                ></path>
                <path
                  className="a"
                  d="M16.59,5.97h.587V7.143H16.59Z"
                  transform="translate(7.665 2.776)"
                ></path>
                <path
                  className="a"
                  d="M17.98,5.97h.587V7.143H17.98Z"
                  transform="translate(8.308 2.776)"
                ></path>
                <path
                  className="a"
                  d="M12.19,7.92h.587V9.093H12.19Z"
                  transform="translate(5.632 3.683)"
                ></path>
                <path
                  className="a"
                  d="M13.57,7.92h.587V9.093H13.57Z"
                  transform="translate(6.27 3.683)"
                ></path>
                <path
                  className="a"
                  d="M12.19,9.76h.587v1.173H12.19Z"
                  transform="translate(5.632 4.539)"
                ></path>
                <path
                  className="a"
                  d="M13.57,9.76h.587v1.173H13.57Z"
                  transform="translate(6.27 4.539)"
                ></path>
                <path
                  className="a"
                  d="M9.856,7.477H9.269V6.89H8.1v.587H7.509a.593.593,0,0,0-.587.587V9.836a.593.593,0,0,0,.587.587h1.76v.587H6.91V11.6a.593.593,0,0,0,.587.587h.587v.587H9.256v-.587h.587a.593.593,0,0,0,.587-.587V9.836a.593.593,0,0,0-.587-.587H8.1v-.6h2.346V8.063A.593.593,0,0,0,9.856,7.477Z"
                  transform="translate(3.314 3.414)"
                ></path>
              </g>
            </svg>
            <span className="text-sm text-PRIMARY_COLOR font-semibold">
              Installment
            </span>
          </div>
          <div className="flex gap-2 items-center">
            <FaHourglassHalf className="text-SECONDARY_COLOR" />
            <span className="text-sm text-PRIMARY_COLOR font-semibold">
              Selling
            </span>
          </div>
        </div>
        <h1 className="font-bold text-3xl">25 000$</h1>
      </div>
      <div className="w-full">
        <OwlCarousel
          className="my-8 projectDetail owl-carousel owl-theme owl-loaded owl-drag"
          loop
          lazyLoad
          center
          nav
          navText={[`&#8592;`, `&#8594;`]}
          responsive={{
            0: {
              items: 1,
              nav: false,
              center: true,
              dots: true,
              stagePadding: 40,
            },
            768: {
              items: 1,
              nav: false,
              center: true,
              dots: true,
              stagePadding: 80,
            },
            1280: {
              items: 1,
              stagePadding: 280,
              center: true,
            },
          }}
          autoplay
          dots={false}
        >
          {imagesCarousel.map((item, index) => (
            <div className="divCarousel mx-2 lg:mx-12 h-[200px] sm:h-[280px] md:h-[500px] mt-10 rounded-xl relative h-full">
              <img
                key={index}
                src={item.src}
                className="absolute top-0 left-0 object-cover w-fit h-full mix-blend-overlay rounded-xl "
              />
            </div>
          ))}
        </OwlCarousel>
      </div>
      <div className="my-20 lg:mx-[12%] flex gap-8 flex-col lg:flex-row">
        <div className="basis-2/3">
          <div className="flex justify-start border-b-[1px] gap-4">
            <button className="border-t-[1px] border-x-[1px] rounded px-4 py-2">
              <b>
                <u>Overview</u>
              </b>
            </button>
            <button className="flex justify-center items-center p-2 bg-PRIMARY_COLOR rounded mb-2 text-BACKGROUND_COLOR">
              <FaCloudDownloadAlt className="text-SECONDARY_COLOR mx-2" />{" "}
              Brochure
            </button>
          </div>
          <div className="text-PRIMARY_COLOR text-xs my-12 px-8">
            <h3 className="font-semibold">Overview</h3>
            <br />
            <p>
              The project is stationed in the modern Basin Express province, the
              most desirable real estate assets investment location in the
              European division of Istanbul; the division has adopted Maslak's
              concept to become Istanbul's significant second financial capital.
            </p>
            <br />
            <p>
              Due to the substantial fundematls supplied to the Basin Express
              region, it involves the global exhibition center of Istanbul that
              functions 24/7, three significant universities without enough
              student housing, plus a commercial center that involves
              international and local companies.
            </p>
            <br />
            <h3 className="font-semibold">What are the project’s features?</h3>
            <br />
            <p>
              The project comprises 364 residential units, a showroom, and 11
              commercial shops on the ground floor.
            </p>
            <br />
            <p>
              In addition to all the high qualities conveyed within the project,
              you will achieve the best progressive real estate assets
              appreciation in Istanbul, plus excellent long-term earnings,
              according to the project's location, in the urbanized Basin
              Express municipality, plus the land's worth-value.
            </p>
            <br />
          </div>

          <div className="border-t-2 border-GREY"></div>

          <div className="m-8">
            <h2 className="font-bold text-2xl">Project details</h2>
            <div className="shadow lg:w-full rounded-xl my-4 py-16 px-8 flex flex-col lg:flex-row gap-2 lg:justify-between">
              <div className="gap-2 w-full flex flex-col">
                {details.slice(0, 5).map((detail, index) => (
                  <div
                    className="flex  w-full gap-4 text-sm"
                    key={`detail-${index}`}
                  >
                    <span className="lg:w-2/3 w-1/5 text-PRIMARY_COLOR font-demibold">
                      {detail}:
                    </span>

                    <span className=" lg:w-2/3  w-1/5 text-SECONDARY_COLOR font-demibold">
                      {detailsValues[index]}
                    </span>
                  </div>
                ))}
              </div>
              <div className="gap-2 w-full flex flex-col">
                {details.slice(5, 10).map((detail, index) => (
                  <div
                    className="flex  w-full  text-sm gap-8"
                    key={`detail-${index}`}
                  >
                    <span className="lg:w-2/3 w-1/5 text-PRIMARY_COLOR font-demibold">
                      {detail}:
                    </span>

                    <span className=" lg:w-2/3 w-1/5 text-SECONDARY_COLOR font-demibold">
                      {detailsValues[index + 5]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t-2 border-GREY"></div>

          <div className="m-8">
            <h2 className="font-bold text-2xl">Project Facilities</h2>
            <div className="lg:w-full rounded my-4 flex flex-col lg:flex-row gap-2 lg:justify-evenly">
              <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 place-content-between place-items-start  w-full">
                {facilities.map((facility, index) => (
                  <div
                    className="flex gap-4 text-basic"
                    key={`facility-${index}`}
                  >
                    <FaRegCheckSquare className="text-SECONDARY_COLOR font-bold" />
                    <spna className="text-PRIMARY_COLOR">{facility}</spna>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t-2 border-GREY"></div>

          <div className="m-8">
            <h2 className="font-bold text-2xl flex items-center gap-2">
              <img src="https://www.turkeyadvisors.com/sites/img/project/nearby.svg" />
              What's nearby
            </h2>
            <div className="my-8 flex flex-col gap-2">
              <div className="flex flex-col gap-4">
                {nearby.map((item, index) => (
                  <div className="flex gap-4" key={`nearby-${index}`}>
                    <FaCircle />
                    <span className="text-PRIMARY_COLOR">{item}:</span>
                    <span className="text-SECONDARY_COLOR">
                      {nearbyValues[index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t-2 border-GREY"></div>

          <div className="m-8">
            <h2 className="font-bold text-2xl">Property type</h2>
          </div>
        </div>
        <div className="basis-1/3">
          <button className="flex rounded items-center justify-center w-full mx-4 py-4 text-center bg-SECONDARY_COLOR text-PRIMARY_COLOR">
            <FaWhatsapp className="mr-4 text-xl" />
            <span>Contact Us On Whatsapp</span>
          </button>
         <div className="mx-4 my-8 w-full">
           <EnquireForm />
           <GetInTouche/>
         </div>
         <div className="rounded-xl">
       
         </div>
        </div>
      </div>

      <div className="mx-[12%]">
        <h2 className="font-bold text-2xl">Similar properties</h2>
        <Properties propertiesList={properties} />
      </div>
    </>
  );
};

export default Project;
