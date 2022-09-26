import React from "react";
import FollowUs from "./Commun/FollowUs";

const Footer = () => {
  const lastArticles = [
    {
      title: "Turkish Citizenship",
      href: "https://www.turkeyadvisors.com/blog/the-new-law-of-obtaining-turkish-citizenship-for-foreign-investors",
    },
    {
      title: "Life in Turkey",
      href: "https://www.turkeyadvisors.com/blog/the-new-law-of-obtaining-turkish-citizenship-for-foreign-investors",
    },
    {
      title: "Investment in Turkey",
      href: "https://www.turkeyadvisors.com/blog/how-do-we-know-that-a-country-s-economy-is-structurally-robust-what-about-turkey",
    },
    {
      title: "Cryptocurrency in Turkey",
      href: "https://www.turkeyadvisors.com/blog/buying-a-property-in-turkey-by-using-cryptocurrency",
    },
  ];
  const links = [
    { title: "About Us", href: "https://www.turkeyadvisors.com/about" },
    { title: "Our office", href: "https://www.turkeyadvisors.com/contact" },
    { title: "Contact Us", href: "https://www.turkeyadvisors.com/contact" },
    {
      title: "Review us on Trustpilot",
      href: "https://www.trustpilot.com/evaluate/turkeyadvisors.com?utm_medium=trustbox&utm_source=TrustBoxReviewCollector",
    },
  ];
  const socialIcons = [
    {
      img: "https://www.turkeyadvisors.com/sites/img/btc.svg",
      href: "https://www.turkeyadvisors.com/blog/buying-a-property-in-turkey-by-using-cryptocurrency",
    },
    {
      img: "https://www.turkeyadvisors.com/sites/img/ethereum.svg",
      href: "https://www.turkeyadvisors.com/blog/buying-a-property-in-turkey-by-using-cryptocurrency",
    },
    {
      img: "https://www.turkeyadvisors.com/sites/img/litecoin.svg",
      href: "https://www.turkeyadvisors.com/blog/buying-a-property-in-turkey-by-using-cryptocurrency",
    },
    {
      img: "https://www.turkeyadvisors.com/sites/img/binanceCoin.svg",
      href: "https://www.turkeyadvisors.com/blog/buying-a-property-in-turkey-by-using-cryptocurrency",
    },
  ];
 
  const SectionTitle = (title) => (
    <h2 className="my-2 text-xl font-semibold text-BACKGROUND_COLOR">
      {title}
    </h2>
  );
  return (
    <>
      <div className="flex flex-col w-full min-h-[400px] wrap  border-t-4 border-SECONDARY_COLOR">
        <div className="bg-[url('https://www.turkeyadvisors.com/sites/img/footer-backgournd.jpg')] px-36 w-full h-full bg-cover flex items-center py-12 gap-20 flex-wrap">
          <div className="flex flex-col gap-4 basis-1/4 grow">
            {SectionTitle("Turkey Advisors".toUpperCase())}

            <p className="text-BACKGROUND_COLOR">
              Turkey Advisors is an independent Turkish real estate agent. We
              have the finest selection of luxury properties in the market.
            </p>
           <FollowUs color='BACKGROUND_COLOR'/>
          </div>

          <div className="flex flex-col basis-1/4 grow">
            {SectionTitle("Latest Articles")}
            {lastArticles.map((item, index) => (
              <p key={`article-link-${index}`} className="m-1">
                <a className="text-BACKGROUND_COLOR" href={item.href}>
                  {item.title}
                </a>
              </p>
            ))}

            <ul className="flex gap-4 my-2">
              {socialIcons.map((item, index) => (
                <li key={`social-icon-${index}`}>
                  <a href={item.href}>
                    <img
                      rel="preload"
                      className="w-8 h-8"
                      loading="lazy"
                      src={item.img}
                      alt=""
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col basis-1/3 grow">
            {SectionTitle("Useful Links")}
            {links.map((link, index) => (
              <p key={`useful-link-${index}`} className="m-1">
                <a className="text-BACKGROUND_COLOR" href={link.href}>
                  {link.title}
                </a>
              </p>
            ))}
          </div>
        </div>
        <div className="px-20 py-2 bg-SECONDARY_COLOR">
          <p className="text-lg text-center text-PRIMARY_COLOR">
            All Rights Reserved For turkeyadvisors.com © 2022 |
            <a
              className="px-2 font-medium underline text-PRIMARY_COLOR"
              href="https://www.turkeyadvisors.com/privacy-policy"
            >
              Privacy Policy
            </a>
            <a
              className="px-2 font-medium underline text-PRIMARY_COLOR"
              href="https://www.turkeyadvisors.com/terms-of-use"
            >
              Terms Of Use
            </a>
            .
          </p>
        </div>
        <div className="px-20 py-1 border-t-4 bg-BACKGROUND_COLOR text-PRIMARY_COLOR border-PRIMARY_COLOR">
          <p>
            Your experience on this site will be improved by allowing cookies.
            <a
              className="px-2 mx-2 rounded m-t-2 bg-SECONDARY_COLOR text-PRIMARY_COLOR"
              href="#"
            >
              Allow cookies
            </a>
            <a
              className="px-2 text-PRIMARY_COLOR"
              href="https://www.turkeyadvisors.com/terms-of-use"
            >
              Read more
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
