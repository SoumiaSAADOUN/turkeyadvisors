import React from "react";
import GetInTouch from "../components/AboutUs/GetInTouche";
import PagesHeader from "../components/Commun/PagesHeader";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const AboutUsPage = () => {
  const team = [
    {
      image:
        "http://turkeyadvisors.com/storage/img/testimonials/rxjFMyFwybbnw5LoPcfh.jpg",
      name: "AHMED",
      title: "SALES RESPRESENTATIVE",
      message:
        " He was born in Lebanon, studied at Lebanese University, Department of Political Philosophy also did several courses about Economy, and IT - After graduation, he worked in the sales staff in Turkey Advisors. That way, he obtained experience in international real estate sales. He speaks Arabic, English, French, and Turkish. - Ahmad Favorite subjects to talk about: are politics, history, and Economy; in consequence, you are in safe hands, while he likes to call himself a moveable open social book, who believes that the minor details make all the difference, meanwhile, the perfection in his attitude is an endless admiration, he will always seek for obtain. Ahmad's hobbies: in the morning, Ahamd likes to listen to metal music but with a cup of coffee. We think Ahmad would give you all the knowledge you deserve to obtain.",
    },
    {
      image:
        "https://www.turkeyadvisors.com/storage/img/testimonials/S9uVWlk8Y86AwYNmgS4y.jpg",
      name: "DATI",
      title: "",
      message:
        " She was born In Jordan, Amman, with Chechen roots; she studied business administration department at Aydin University; Dati holds a Master's degree in the same major; also, she is doing a Ph.D. in the same department which is business administration and management at Aydin University, in Istanbul Turkey - After graduation, she shifted to the volunteer job at the (SOS Organization) and (GO GREEN NGO) in Jordan; eventually. She moved to Turkey and joined the Turkey Advisors team in 2020; in this way, she obtained experience in international real estate sales; Dati speaks English, Turkish, and Chechen language. - Dati Favorite subjects to talk about is: Economy, cultures, books, Datiti likes to make friendships with her clients, progressively she becomes a trustable advisor for her client due to the vast knowledge she has, literally about everything not only in Turkey, but the world, Dati likes to call herself, open-minded and determined, super-organized - Dati's Hobbies: she likes to spend her off-days within nature, with her book and cup of coffee.",
    },
    {
      image:
        "https://www.turkeyadvisors.com/storage/img/testimonials/m16YGvMMdTedEkhxft2R.jpg",
      name: "SAMIN",
      title: "",
      message:
        "She was born in Iran, studied at BA, the Department of English Translation. Samin did several courses about marketing and art. - After graduation, she worked in sales marketing. In this way, She obtained experience being a professional real estate consultant; She speaks English, Turkish, and Persian. - Samin likes to call herself a strong independent woman who believes that the power of independence brings more creativity in the minor details; meanwhile, the perfection in her attitude is an endless admiration she will always seek to achieve. - Samin's Favorite subjects to talk about are sales strategies and philosophy. Samin's hobbies: reading books maybe for days, she likes spending her off-day within a calm place with a warm cup of Tea. ",
    },
    {
      image:
        "https://www.turkeyadvisors.com/storage/img/testimonials/dEwQWOzwCr0zxUHNKr4x.jpg",
      name: "SOROOCH",
      title: "",
      message:
        "He was born in Iran, studied at CMU university in Tehran, the Department of English. Soroosh did several courses for IT and (TESOL - teaching English as a foreign language ). - After graduation, he worked in sales marketing, As a sales supervisor in the fire extinguishers sector in Iran, then he moved to Turkey; Soroosh's started teaching for a while, and then did a significant shift in his career; to enter the real estate market, and after gaining valuable experience, he joined the Turkey Advisor team, In this way, He obtained experience being a professional real estate consultant; He speaks English, Turkish, and Persian. - Soroosh likes to call himself a friendly, helpful interactive addition to any place he would join to, who believes that good human relation would benefit both sides of the relation; meanwhile, the determination in his progress is a solid ground to build his successful career - Soroosh's Favorite subjects to talk about are politics, sociology, technology, and what the future might look like - Soroosh's hobbies: Soroosh would spend his day-off watching action movie, listening to Persian pop music, and taking care of his cats. We think Soroosh would help you find the dream property you've always been looking for; Soroosh is waiting for your call. ",
    },
    {
      image:
        "https://www.turkeyadvisors.com/storage/img/testimonials/tCWEsSbZohbjwJn2qPpm.jpg",
      name: "ZIBO",
      title: "",
      message:
        "She was born in Turkmenistan, studied at 18 MART University, Department of emergency assistance and disaster management. - After graduation, she worked as a sales managing assistant, then shifted eventually to Turkey and joined the Turkey Advisors team in 2020; in this way, she obtained experience in international real estate sales; Zibo speaks English and Turkish, Russian language. - Zibo's Favorite subject to talk about is not politics or Economy, she hates news but keeps trying to make herself updated, but she admires philosophy, music, and social sciences. Zibo likes to have a progressive energy environment with her clients. She progressively becomes a reliable advisor for her client due to her comprehensive knowledge of everything in Turkey and Russia. She likes to call herself wanderlust. - Zibo believes that ambition is the key to success;",
    },
  ];
  return (
    <>
      <PagesHeader title="About Us" link="aboutus" />

      <section className="flex flex-col lg:m-8">
        <div className="flex flex-col justify-between px-4 mt-8 lg:flex-row lg:items-center md:px-20">
          <div className="lg:w-2/5 text-PRIMARY_COLOR">
            <h1 className="mb-8 text-5xl font-bold text-DARK_PRIMARY_COLOR">
              About Us
            </h1>
            <p className="text-lg font-medium">
              Turkey Advisors company has been built based on offering what our
              buyers deserve and owning what they deserve; we have been
              functioning in the real estate sector since 2015. Meanwhile, we
              created a long-lasting experience that adopts the mentality of
              sharing with you the advice, knowledge, seven years of vast
              experience, not only a property but a lifetime experience.
            </p>
            <br />
            <p className="text-lg font-medium">
              Regardless of the purpose that brought you Turkey, To build a new
              investment solid-grounded or establish a new foothold for your
              family, we will guide you as an integrated global team.
            </p>
            <br />
            <p className="text-lg font-medium">
              We'll serve you to be able to take the first step to purchase the
              next destination in Turkey, until receiving the key to your new
              property.
            </p>
            <br />
          </div>
          <div className="lg:w-2/5">
            <img
              className="m-auto"
              src="/assets/images/aboutus.png"
              alrt="about us"
            />
          </div>
        </div>
        <img
          src="http://turkeyadvisors.com/sites/img/about-icons.png"
          className="w-[80%] my-12 lg:px-20 m-auto"
        />
        <section className="flex flex-col m-2 md:m-16 lg:gap-16 md:px-8">
          <div className="flex flex-col items-center my-4 lg:justify-between lg:flex-row">
            <div className="mb-4 text-base lg:w-2/5">
              <h1 className="my-8 text-5xl font-bold text-DARK_PRIMARY_COLOR">
                A message from the owners
              </h1>
              <p>
                As real estate agency owners within the Turkish market, we have
                considered ourselves a bridge between the developer and the
                international buyer. Meanwhile, we show the exact way you need
                to go for and share the knowledge you've been seeking.
                Therefore, you can decide to build a new life and new investment
                in Turkey.
              </p>
              <br />
              <p>
                As founders of Turkey Advisors company, our mentality has been
                designed and constructed to meet the ambitiousness of our
                client, meanwhile, the process of buying a property in Turkey
                goes beyond the buy-sell process with us, cus we shifted and
                transferred the notion of selling to sharing, sharing you the
                knowledge, profit, confidence, transparency which you deserve to
                earn as a foreigner investor in Turkey
              </p>
              <br />
              <p>
                We believe that the buyer's trust is based on the excellence of
                permanency and continuity in business. This permanency, built
                based on giving the customers what they deserve, will allow us
                not to compete with anyone within the Turkish real estate
                market. Still, we will always compete to maintain the strength
                of trust
              </p>
              <br />
              <p>
                ur company's name, which will always make you own what you
                deserve.
              </p>
            </div>
            <img
              src="http://turkeyadvisors.com/storage/img/aboutPage/dIYnGA3sIpDSHRdv0MTN.jpg"
              alt="A message from the owners"
              className="w-full lg:w-2/5"
            />
          </div>

          <div className="flex flex-col items-center my-4 lg:justify-between lg:flex-row-reverse">
            <div className="mb-4 text-base lg:w-2/5">
              <h1 className="my-8 text-5xl font-bold text-DARK_PRIMARY_COLOR">
                Our mission
              </h1>
              <p>
                Is to be the trustable legible partner, that you would get along
                with during your next satisfying journey in Turkey, the partner
                who you recommend as the best agency in Turkey for your family
                and colleagues; our mission is to build a bridge of Trust,
                Transparency between you and the developers, so you would own
                what you deserve.
              </p>
            </div>
            <img
              className="w-full lg:w-2/5"
              alt=" Our mission"
              src="http://turkeyadvisors.com/storage/img/aboutPage/JWTGKbfqQpeYDA3STUfO.jpg"
            />
          </div>

          <div className="flex flex-col items-center my-4 lg:justify-between lg:flex-row">
            <div className="mb-4 text-base lg:w-2/5">
              <h1 className="my-8 text-5xl font-bold text-DARK_PRIMARY_COLOR">
                Our vision
              </h1>
              <p>
                We believe that real estate is the best investment in life. Due
                to our consideration of perfection, We've worked to create a
                global environment in our company, therefore reaching all the
                diverse categories of the world, from different languages,
                various mindsets.
              </p>
              <br />
              <p>
                This step came within our vision, which aspires to be a global
                company with several branches worldwide. Because Istanbul city
                is located in the heart of the world, From which we started, we
                built Turkey Advisors company; therefore, we aspire to be a
                global brand in the next ten years.
              </p>
              <br />
            </div>
            <img
              className="w-full lg:w-2/5"
              alt="Our vision"
              src="http://turkeyadvisors.com/storage/img/aboutPage/jl9m8R14sJi2hlqm13uk.jpg"
            />
          </div>

          <div className="flex flex-col items-center my-4 lg:justify-between lg:flex-row-reverse">
            <div className="mb-4 text-base lg:w-2/5">
              <h1 className="my-8 text-5xl font-bold text-DARK_PRIMARY_COLOR">
                Team
              </h1>
              <p>
                Due to our vast experience in the Turkish real estate market, we
                have established an integrated combined team, multinational and
                multilingual. Because our location is in the core of the world's
                continents, in Istanbul, our sales team, in particular, was able
                to keep pace with developments in the world, at the local and
                global levels.
              </p>
              <br />
              <p>
                Our team has been trained to meet the buyers' needs
                individually, relying on extensive knowledge in various fields
                that concern real estate in Turkey at the local, national, and
                global levels.
              </p>
              <br />
              <p>
                We have worked on planting the principles we believe in within
                the work spirit among our team; therefore, the buyers would get
                the WIN-WIN deal concept they seek for, where everyone is
                satisfied and happy.
              </p>
              <br />
            </div>
            <img
              src="http://turkeyadvisors.com/storage/img/aboutPage/4bwjLh4CiZAZbYMTtC0Y.jpg"
              className="w-full lg:w-2/5"
              alt="Team"
            />
          </div>
        </section>
        <section className="flex flex-col m-2 lg:m-16 lg:gap-16 md:px-8">
          <h1 className="my-4 text-5xl font-bold text-PRIMARY_COLOR">
            Our team
          </h1>
          {team.map((member, index) => (
            <div
              className="flex flex-col items-center mt-20 lg:my-4 lg:justify-between lg:flex-row"
              key={index}
            >
              <div className="flex flex-col items-center justify-center lg:w-1/4 ">
                <img className="h-full mb-2 w-ful" src={member.image} />
                <h1 className="my-2 text-xl font-semibold text-SECONDARY_COLOR">
                  {member.name}
                </h1>
                {member.title && <p>{member.title}</p>}
              </div>
              <p className="relative flex h-full text-2xl font-light leading-10 lg:w-3/4 lg:ml-8 text-PRIMARY_COLOR">
                <span>
                  <FaQuoteLeft className="mr-2 text-xs" />
                </span>
                {member.message}
                <span className="absolute right-0 bottom-6">
                  <FaQuoteRight className="ml-2 text-xs" />
                </span>
              </p>
            </div>
          ))}
        </section>
      </section>
      <GetInTouch />
    </>
  );
};

export default AboutUsPage;
