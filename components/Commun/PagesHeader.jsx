import React from "react";
import Breadcrumbs from "./Breadcrumbs";

const PagesHeader = (props) => {
    return <div
        className="bg-PRIMARY_COLOR/90 py-12 w-full  relative h-[200px]">
        <img
            className="absolute top-0 left-0 object-cover w-full min-h-full mix-blend-overlay "
            src="http://turkeyadvisors.com/sites/img/background.jpg" />

        <div className="relative flex flex-col items-center justify-center gap-4">
            <Breadcrumbs title={props.title} link={props.link} />
            <h1 className="text-3xl font-semibold text-BACKGROUND_COLOR">{props.title.toUpperCase()}</h1>
        </div>

    </div>
}

export default PagesHeader;