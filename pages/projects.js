import React from "react";
import Divider from "../components/Divider";
import FiltreProjects from "../components/FiltreProjects";
import Properties from "../components/Home/Properties";
import PagesHeader from "../components/PagesHeader";
const Projects = () => {
    const properties=[
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
      ];
    return <>
        <PagesHeader title='Our Projects' />
        <FiltreProjects />
        <div className="flex-grow border-t border-PRIMARY_COLOR my-4"></div>

        <div className="mx-24 my-12" >
            <Properties title="Properties for sale in Istanbul 2022" propertiesList={properties}/>
        </div>




    </>
}
export default Projects