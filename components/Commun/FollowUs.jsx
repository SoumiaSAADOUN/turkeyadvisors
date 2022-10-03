import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
const FollowUs = (props) => {
    const socialMedia = [
        {
            icon: <FaFacebookF />,
            link: "https://www.facebook.com/turkeyadvisors/",
            color: "hover:bg-FACEBOOK"
        },
        {
            icon: <FaInstagram />,
            link: "https://www.instagram.com/turkey__advisors/",
            color: "hover:bg-INSTAGRAM"
        },
        {
            icon: <FaTwitter />,
            link: "https://twitter.com/?lang=en",
            color: "hover:bg-TWITTER"
        },
        {
            icon: <FaYoutube />,
            link: "https://www.youtube.com/",
            color: "hover:bg-YOUTUBE"
        },
        {
            icon: <FaLinkedinIn />,
            link: "https://www.linkedin.com/company/turkey-advisors/",
            color: "hover:bg-LINKEDIN"
        }

    ]
    return <div className="flex gap-1">
        {
            socialMedia.map((item, index) => (
                <a key={index} href={item.link} className={`border border-${props.color} text-${props.color} p-2 rounded text-PRIMARY_COLOR ${item.color} hover:text-BACKGROUND_COLOR`}>
                    {item.icon}
                </a>
            ))
        }
    </div>
}

export default FollowUs;