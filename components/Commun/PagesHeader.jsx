import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const PagesHeader = (props) => {
    return <div
        className="relative w-full h-full py-12 bg-PRIMARY_COLOR/90">
        <img
            className="absolute top-0 left-0 object-cover w-full h-full mix-blend-overlay "
            src="http://turkeyadvisors.com/sites/img/background.jpg" />

        <div className="relative flex flex-col items-center justify-center gap-4">
            <Breadcrumbs title={props.title} link={props.link} />
            <h1 className="text-4xl text-BACKGROUND_COLOR">{props.title.toUpperCase()}</h1>
        </div>

    </div>
}

export default PagesHeader;