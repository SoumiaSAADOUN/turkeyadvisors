import React from "react";
import Divider from "../components/Divider";
import FiltreProjects from "../components/FiltreProjects";
import Properties from "../components/Home/Properties";
import Property from "../components/Home/Property";
import PagesHeader from "../components/PagesHeader";
const Projects = () => {
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
        <PagesHeader title='Our Projects' link='projects'/>
        <FiltreProjects />
        <div className="flex-grow border-t border-PRIMARY_COLOR my-4"></div>

        <div className="mx-24 my-12" >
            <h1 className="text-3xl font-bold text-PRIMARY_COLOR">Properties for sale in Istanbul 2022</h1>
           <div className="grid grid-cols-3 gap-4 my-12">
           {properties.map((property, index) => (
                <Property key={index} data={property} />
            ))}
           </div>
           
<nav className="flex justify-center">
  <ul className="inline-flex -space-x-px">
    <li>
      <a href="#" className="py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
    </li>
    <li>
      <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">1</a>
    </li>
    <li>
      <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">2</a>
    </li>
    <li>
      <a href="#" aria-current="page" className="py-2 px-3 text-blue-600 bg-blue-50 border border-gray-300 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">3</a>
    </li>
    <li>
      <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">4</a>
    </li>
    <li>
      <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">5</a>
    </li>
    <li>
      <a href="#" className="py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Next</a>
    </li>
  </ul>
</nav>

        </div>




    </>
}
export default Projects