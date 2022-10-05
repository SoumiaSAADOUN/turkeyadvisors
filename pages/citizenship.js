import Image from "next/image";
import React from "react";
import PagesHeader from "../components/Commun/PagesHeader";
import ProcessCards from "../components/Citizenship/ProcessCards";
import Divider from "../components/Commun/Divider";

const Citizenship = () => {
  return (
    <>
      <PagesHeader title="Turkish Citizenship" link="citizenship" />
      <section className="flex flex-col lg:flex-row justify-center items-center p-4 mx-[10%] my-16">
        <div className="block w-full lg:w-2/5 lg:mr-20 ">
          <Image
            layout="responsive"
            width={100}
            height={100}
            rel="preload"
            src="https://www.turkeyadvisors.com/sites/img/citizenship.jpg"
          />
        </div>
        <div className="flex text-center flex-col w-4/5 justify-center items-center lg:w-2/5 text-PRIMARY_COLOR">
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
            more information{" "}
            <a href="#description">
              <b>
                <u>scroll down.</u>
              </b>
            </a>
          </p>
        </div>
      </section>
      <section className="flex justify-center items-center w-full h-[150px] bg-DARK_GREY">
        <button className="lg:w-[200px] py-4 m-auto w-full bg-SECONDARY_COLOR font-medium">
          ENQUIRE NOW
        </button>
      </section>

      <section className="flex flex-col  justify-center items-center p-4 mx-[10%] my-8">
        <h1 className=" text-center my-8 text-3xl font-extrabold text-DARK_PRIMARY_COLOR">
          Real Estate Investment Minimum <br /> 400.000$
        </h1>
        <ProcessCards />
        <Divider />
      </section>

      <section className="flex flex-col  justify-center items-center p-4 mx-[10%] my-8">
        <h1 className=" text-center my-8 text-3xl font-extrabold text-DARK_PRIMARY_COLOR">
          Application Types To Obtain Turkish Citizenship By Investment
        </h1>

        <Divider />
      </section>
      <section className="flex justify-center items-center w-full h-[150px] bg-DARK_GREY">
        <button className="lg:w-[500px] p-4 m-auto w-full bg-SECONDARY_COLOR font-medium">
          CONSULT US FOR FREE TO GET MORE INFORMATION
        </button>
      </section>

      <section className="flex flex-col mx-[10%] my-16">
        <h1 className="my-8 text-3xl text-center font-extrabold text-DARK_PRIMARY_COLOR">
          Turkish Citizenship by Investment Program
        </h1>
        <div className="flex flex-col lg:flex-row-reverse justify-between items-center p-4 ">
          <div className="block w-full lg:w-2/5 lg:ml-20 ">
            <Image
              layout="responsive"
              width={100}
              height={100}
              rel="preload"
              src="https://www.turkeyadvisors.com/sites/img/citizenship.jpg"
            />
          </div>
          <div className="flex  flex-col w-4/5 justify-center items-center lg:w-2/5 text-PRIMARY_COLOR">
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
        </div>
      </section>
    </>
  );
};
export default Citizenship;
