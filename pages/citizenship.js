import Image from "next/image";
import React, { useState } from "react";
import PagesHeader from "../components/Commun/PagesHeader";
import ProcessCards from "../components/Citizenship/ProcessCards";
import Divider from "../components/Commun/Divider";
import GetInTouch from "../components/AboutUs/GetInTouche";
import ApplicationTypes from "../components/Citizenship/ApplicationTypes";
import EnquireModal from "../components/Modals/EnquireModal";

const Citizenship = () => {
  const [showEnquireModal, setShowEnquireModal] = useState(false);

  return (
    <>
      <PagesHeader title="Turkish Citizenship" link="citizenship" />
      <section className="flex flex-col lg:flex-row justify-center items-center p-4 mx-[10%] my-16">
        <div className="block w-full lg:w-2/5 lg:mr-20">
          <Image
            layout="responsive"
            width={100}
            height={100}
            rel="preload"
            src="https://www.turkeyadvisors.com/sites/img/citizenship.jpg"
          />
        </div>
        <div className="flex flex-col items-center justify-center w-full text-center lg:w-2/5 text-PRIMARY_COLOR">
          <h1 className="my-8 text-3xl font-extrabold text-DARK_PRIMARY_COLOR">
            Turkish Citizenship by Investment Program
          </h1>
          <p className="text-xl leading-10 ">
            The Turkish government is granting Turkish citizenship to
            foreigners, the law gave eligibility to foreigners who are
            interested in Turkish Citizenship, by offering several options.
            However, the government facilities the procedures for real estate
            investors who are interested in investing in Turkey, By buying real
            estate properties with <b>400.000 $ </b>
            meanwhile obtaining Turkish nationality, the foreign investor would
            be eligible to pass it to family, wife, and children under 18. The
            law and the procedure of acquiring Turkish citizenship are
            attainable within additional different 3 different programs, for
            more information
            <a href="#description">
              <b>
                <u>scroll down.</u>
              </b>
            </a>
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center w-full h-[150px] bg-DARK_GREY">
        <button
          onClick={() => setShowEnquireModal(true)}
          className="lg:w-[200px] py-4 m-auto w-full bg-SECONDARY_COLOR font-medium"
        >
          ENQUIRE NOW
        </button>
      </section>

      <section className="flex flex-col  justify-center items-center p-4 mx-[10%] my-8">
        <h1 className="my-8 text-3xl font-extrabold text-center text-DARK_PRIMARY_COLOR">
          Real Estate Investment Minimum <br /> 400.000$
        </h1>
        <ProcessCards />
        <Divider />
      </section>

      <section className="flex flex-col  justify-center items-center p-4 mx-[10%] my-8">
        <h1 className="my-8 text-3xl font-extrabold text-center text-DARK_PRIMARY_COLOR">
          Application Types To Obtain Turkish Citizenship By Investment
        </h1>
        <ApplicationTypes />
        <Divider />
      </section>
      <section className="flex justify-center items-center w-full h-[150px] bg-DARK_GREY">
        <button
          onClick={() => setShowEnquireModal(true)}
          className="lg:w-[500px] p-4 m-auto w-full bg-SECONDARY_COLOR font-medium"
        >
          CONSULT US FOR FREE TO GET MORE INFORMATION
        </button>
      </section>

      <section className="flex flex-col mx-[10%] my-16" id="description">
        <h1 className="my-8 text-3xl font-extrabold text-center text-DARK_PRIMARY_COLOR">
          Turkish Citizenship by Investment Program
        </h1>
        <div className="flex flex-col items-center justify-between p-4 lg:flex-row ">
          <div className="flex flex-col items-center justify-center w-full lg:w-2/5 text-PRIMARY_COLOR">
            <p className="text-xl leading-9 ">
              In 2017, the Turkish government published the first Turkish
              citizenship program for foreign investors. The law gives
              eligibility to foreigners who are interested in Turkish
              Citizenship to obtain Turkish nationality; by investing in 1
              million dollars, the foreign investors would be eligible to pass
              it to his family (wife and children under 18). Still, there was no
              sufficient demand, due to the high budget.
            </p>
            <br />
            <p className="text-xl leading-9 ">
              Therefore, the Turkish parliament got the matter of re-studying
              the law into consideration, accordingly, the costs' value adjusted
              to 500,000 $ in the same year, until 2018, the direction of the
              Turkish citizenship program for foreigners been fixed and become
              under processing, this time the amount set to 400,000 $, Since the
              2018 and until today, 77,000 applications been released. The law
              offers several different options by considering the differences
              between global investors' aspirations in investment in Turkey.
              Here are the different types of Turkish citizenship applications:
            </p>
          </div>
          <div className="block w-full mb-8 lg:w-2/5 lg:ml-20 ">
            <Image
              layout="responsive"
              width={100}
              height={100}
              rel="preload"
              src="https://www.turkeyadvisors.com/sites/img/citizenship.jpg"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col mx-[10%] my-16 gap-16">
        <div
          className="flex flex-col items-center lg:justify-between lg:gap-16 lg:flex-row "
          id="first-one"
        >
          <div className="mb-4 text-xl lg:w-2/5">
            <h1 className="my-8 text-3xl font-bold text-DARK_PRIMARY_COLOR">
              Investing with 400,000 $ in real estate assets:
            </h1>
            <p>
              By buying one or multiple real estates assets in any desirable
              Turkish City, with <strong>400,000$</strong> , you are eligible to
              submit your application, by getting the title deed of the
              property, too (Department of Immigration and Passports?!), with
              additional
              <a href="#legal-papers">
                <b>
                  <u> legal required papers</u>
                </b>
              </a>
              , for your application, and from here on your application will
              take from 2 to 3 months maximum.
            </p>
            <br />
          </div>
          <img
            src="https://www.turkeyadvisors.com/sites/img/ctz1.jpeg"
            alt=" Investing with 400,000 $ in real estate assets"
            className="w-full lg:w-2/5"
          />
        </div>
        <div
          className="flex flex-col items-center lg:justify-between lg:gap-16 lg:flex-row-reverse"
          id="second-one"
        >
          <div className="mb-4 text-xl lg:w-2/5">
            <h1 className="my-8 text-3xl font-bold text-DARK_PRIMARY_COLOR">
              Deposit in a Turkish bank at least 500,000$
            </h1>
            <p>
              in any Turkish bank, whether private or governmental Turkish bank,
              you are eligible to submit your application, by getting the Bank
              deposit receipt to, with additional{" "}
              <a href="#legal-papers">
                <b>
                  <u>legal required papers</u>
                </b>
                ,
              </a>
              for your application, and from here on your application will take
              from 2 to 3 months maximum.
            </p>
            <br />
          </div>
          <img
            src="https://www.turkeyadvisors.com/sites/img/ctz.jpeg"
            alt=" Deposit in a Turkish bank at least 500,000$"
            className="w-full lg:w-2/5"
          />
        </div>
        <div
          className="flex flex-col items-center lg:justify-between lg:gap-16 lg:flex-row"
          id="third-one"
        >
          <div className="mb-4 text-xl lg:w-2/5">
            <h1 className="my-8 text-3xl font-bold text-DARK_PRIMARY_COLOR">
              Establishing a Turkish company and creating 50 job opportunities
              for Turkish citizens:
            </h1>
            <p>
              By Establishing a commercial registry in any Turkish City,
              according to the law, It doesn't matter what the company's
              specialization is, it can be industrial or commercial, the law
              doesn't force a foreign investor to have a specific specialization
              or field of work, what is matter in this section of the law, Is to
              create 50 job opportunities for 50 Turkish citizens By getting
              both the registration number and the tax, you are eligible to
              submit your application to, with additional{" "}
              <a href="#legal-papers">
                <b>
                  <u> legal required papers</u>
                </b>
                ,
              </a>
              for your application, and from here on your application will take
              from 2 to 3 months maximum.
            </p>
            <br />
          </div>
          <img
            src="https://www.turkeyadvisors.com/sites/img/S08.jpg"
            alt="Establishing a Turkish company and creating 50 job opportunities for Turkish
            citizens"
            className="w-full lg:w-2/5"
          />
        </div>
      </section>

      <section
        className="flex flex-col mx-[10%] my-16 justify-center items-center"
        id="legal-papers"
      >
        <h1 className="my-8 text-3xl font-extrabold text-center text-DARK_PRIMARY_COLOR">
          Required Documents for the program.
        </h1>
        <div className="block w-full mb-8 lg:w-4/5 ">
          <Image
            layout="responsive"
            width={100}
            height={100}
            rel="preload"
            src="https://www.turkeyadvisors.com/sites/img/citizenship-paper.png"
          />
        </div>
      </section>
      <section className="flex items-center justify-center w-full">
        <span className="text-xl font-bold text-PRIMARY_COLOR">
          For more information
        </span>
        <button
          onClick={() => setShowEnquireModal(true)}
          className="p-4 mx-2 font-medium rounded bg-SECONDARY_COLOR"
        >
          Click here
        </button>
      </section>
      <GetInTouch />
      <EnquireModal
        visibility={showEnquireModal}
        onCancel={() => setShowEnquireModal(false)}
      />
    </>
  );
};
export default Citizenship;
