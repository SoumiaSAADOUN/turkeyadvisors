import React from "react";
import { HiHome, HiOutlineChevronDoubleRight } from "react-icons/hi";
import Header from "../components/Header";

const AboutUsPage = () => {

    const team = [
        {
            image: "http://turkeyadvisors.com/storage/img/testimonials/rxjFMyFwybbnw5LoPcfh.jpg",
            name: "AHMED",
            title: "SALES RESPRESENTATIVE",
            message: " He was born in Lebanon, studied at Lebanese University, Department of Political Philosophy also did several courses about Economy, and IT - After graduation, he worked in the sales staff in Turkey Advisors. That way, he obtained experience in international real estate sales. He speaks Arabic, English, French, and Turkish. - Ahmad Favorite subjects to talk about: are politics, history, and Economy; in consequence, you are in safe hands, while he likes to call himself a moveable open social book, who believes that the minor details make all the difference, meanwhile, the perfection in his attitude is an endless admiration, he will always seek for obtain. Ahmad's hobbies: in the morning, Ahamd likes to listen to metal music but with a cup of coffee. We think Ahmad would give you all the knowledge you deserve to obtain."
        }
    ]
    return <>
        <Header />

        <div
            className="bg-PRIMARY_COLOR/70 px-32 py-12 w-full  relative h-[200px]">
            <img
                className="absolute top-0 left-0 w-full object-cover mix-blend-overlay min-h-full "
                src="http://turkeyadvisors.com/sites/img/background.jpg" />

            <div className="relative flex flex-col gap-4 justify-center items-center">
                <div className="flex gap-4 ">
                    <HiHome className="text-SECONDARY_COLOR text-2xl font-bold" />
                    <HiOutlineChevronDoubleRight className="text-BACKGROUND_COLOR font-bold text-2xl" />
                    <span className="text-xl text-SECONDARY_COLOR"> About Us</span>
                </div>
                <h1 className="text-3xl font-semibold text-BACKGROUND_COLOR">About Us</h1>
            </div>

        </div>

        <section className="px-20 flex flex-col items-center">

            <div className="flex gap-8 items-center justify-between flex-wrap mt-8">
                <div className="text-TEXT_COLOR grow basis-1/3">
                    <h1 className="text-PRIMARY_COLOR text-4xl font-bold">About Us</h1>
                    <p >
                        Turkey Advisors company has been built based on offering what our buyers deserve and owning what they deserve; we have been functioning in the real estate sector since 2015. Meanwhile, we created a long-lasting experience that adopts the mentality of sharing with you the advice, knowledge, seven years of vast experience, not only a property but a lifetime experience.</p>

                    <p>
                        Regardless of the purpose that brought you Turkey, To build a new investment solid-grounded or establish a new foothold for your family, we will guide you as an integrated global team.</p>
                    <p>
                        We'll serve you to be able to take the first step to purchase the next destination in Turkey, until receiving the key to your new property.
                    </p>
                </div>
                <img className="grow basis-1/3" src="http://turkeyadvisors.com/storage/img/aboutPage/mhBC2yMHmL57WTp6Tfss.png" alrt='about us' />

            </div>

            <img src="http://turkeyadvisors.com/sites/img/about-icons.png" className="w-[80%] my-12" />


            <div className="flex flex-col gap-4">

                <div className="flex gap-40 items-center flex-wrap my-8">
                    <div className="basis-1/3 grow text-TEXT_COLOR">
                        <h1 className="text-5xl text-PRIMARY_COLOR font-bold">A message from the owners</h1>
                        <p>
                            As real estate agency owners within the Turkish market, we have considered ourselves a bridge between the developer and the international buyer. Meanwhile, we show the exact way you need to go for and share the knowledge you've been seeking. Therefore, you can decide to build a new life and new investment in Turkey.
                        </p>
                        <p>
                            As founders of Turkey Advisors company, our mentality has been designed and constructed to meet the ambitiousness of our client, meanwhile, the process of buying a property in Turkey goes beyond the buy-sell process with us, cus we shifted and transferred the notion of selling to sharing, sharing you the knowledge, profit, confidence, transparency which you deserve to earn as a foreigner investor in Turkey
                        </p>
                        <p>
                            We believe that the buyer's trust is based on the excellence of permanency and continuity in business. This permanency, built based on giving the customers what they deserve, will allow us not to compete with anyone within the Turkish real estate market. Still, we will always compete to maintain the strength of trust
                        </p>
                        <p>
                            ur company's name, which will always make you own what you deserve.
                        </p>
                    </div>
                    <img src="http://turkeyadvisors.com/storage/img/aboutPage/dIYnGA3sIpDSHRdv0MTN.jpg" className="basis-1/3 grow  w-[539]" />
                </div>
                <div className="flex gap-40 items-center flex-wrap my-8">
                    <img className="basis-1/3 grow  w-[539]" src="http://turkeyadvisors.com/storage/img/aboutPage/JWTGKbfqQpeYDA3STUfO.jpg" />
                    <div className="basis-1/3 grow text-TEXT_COLOR">
                        <h1 className="text-5xl text-PRIMARY_COLOR font-bold">Our mission</h1>
                        <p>
                            Is to be the trustable legible partner, that you would get along with during your next satisfying journey in Turkey, the partner who you recommend as the best agency in Turkey for your family and colleagues; our mission is to build a bridge of Trust, Transparency between you and the developers, so you would own what you deserve.
                        </p>

                    </div>
                </div>
                <div className="flex gap-40 items-center flex-wrap my-8">
                    <div className="basis-1/3 grow text-TEXT_COLOR">
                        <h1 className="text-5xl text-PRIMARY_COLOR font-bold">Our vision</h1>
                        <p>
                            We believe that real estate is the best investment in life. Due to our consideration of perfection, We've worked to create a global environment in our company, therefore reaching all the diverse categories of the world, from different languages, various mindsets.
                        </p>
                        <p>
                            This step came within our vision, which aspires to be a global company with several branches worldwide. Because Istanbul city is located in the heart of the world, From which we started, we built Turkey Advisors company; therefore, we aspire to be a global brand in the next ten years.
                        </p>
                    </div>
                    <img className="basis-1/3 grow w-[539]" src="http://turkeyadvisors.com/storage/img/aboutPage/jl9m8R14sJi2hlqm13uk.jpg" />
                </div>

                <div className="flex gap-40 items-center flex-wrap my-8">
                    <img src="http://turkeyadvisors.com/storage/img/aboutPage/4bwjLh4CiZAZbYMTtC0Y.jpg" className="basis-1/3 grow  max-w-[539px]" />

                    <div className="basis-1/3 grow text-TEXT_COLOR">
                        <h1 className="text-5xl text-PRIMARY_COLOR font-bold">Team</h1>
                        <p>
                            Due to our vast experience in the Turkish real estate market, we have established an integrated combined team, multinational and multilingual. Because our location is in the core of the world's continents, in Istanbul, our sales team, in particular, was able to keep pace with developments in the world, at the local and global levels.
                        </p>
                        <p>
                            Our team has been trained to meet the buyers' needs individually, relying on extensive knowledge in various fields that concern real estate in Turkey at the local, national, and global levels.
                        </p>
                        <p>
                            We have worked on planting the principles we believe in within the work spirit among our team; therefore, the buyers would get the WIN-WIN deal concept they seek for, where everyone is satisfied and happy.
                        </p>
                    </div>

                </div>

            </div>

            <div >
                <h1 className="text-5xl text-PRIMARY_COLOR font-bold">Our team</h1>


                {team.map((member, index) => (
                    <div className="flex flex-wrap gap-8 items-center" key={index}>
                        <div className="flex flex-col justify-center  items-center">
                            <img className="basis-1/4 grow" src={member.image} />
                            <h1>{member.name}</h1>
                            <p>{member.title}</p>
                        </div>
                        <p className="basis-1/4 grow text-lg">
                            {member.message}
                        </p>
                    </div>
                ))}




            </div>



        </section>

    </>
}

export default AboutUsPage;