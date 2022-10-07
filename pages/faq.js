import React from "react";
import GetInTouch from "../components/AboutUs/GetInTouche";
import { HiOutlinePlus, HiPlusSm } from "react-icons/hi";

const FAQ = () => {
  const faqs = [
    {
      qst:
        "What privileges are obtained from buying real estate property in Turkey?",
      resp:
        "Turkish citizenship once the investors purchase a property with 250,000 $ and grant it to family, wife, and children under 18, secondly high income from renting the property which owns specific features, that would secure the possessor at least 9 up to 10% from the purchasing value. ",
    },
    {
      qst: "What is real estate investment in Turkey?",
      resp:
        "There're various types of real estate investment, such as resale for the property after a while from the purchasing date, at least 2 up to 3 years, or getting a property that guarantees the buyer a specific percentage of income annually.",
    },
    {
      qst:
        "Can I transfer the title deed to any of my family members after three years of ownership in order to apply for citizenship?",
      resp:
        "In Turkey, the title deed owns a history file that can show all the previous owners, and in case one of the previous possessors was a foreigner, So the title deed cannot be used again to get Turkish citizenship. You can protect yourself from scams by withdrawing the title deed history from the (Title deed administration = Tapu Idaresi) and checking whether one of the property's previous owners was a foreigner.",
    },
    {
      qst:
        "How can I know if I am paying the property's actual value without any extra fees or being defrauded?",
      resp:
        "The foreign investors are eligible to extract (an expertise report from the title deed department) in Istanbul that evaluates the property and prices the property correctly, without any exaggeration in fees.",
    },
    {
      qst:
        "If I have a child beyond 18, what can I do to involve him/her in the Turkish citizenship application?",
      resp:
        "The parents, wife, or husband are not eligible to grant their children who are beyond 18 Turkish citizenship, but instead can increase the purchasing value to 270,000 $ to share them in the title deed; meanwhile, they are capable of extracting a real estate residence permit in Turkey.",
    },
  ];

  return (
    <>
      <div className="my-16">
        <h1 className="mb-12 text-3xl font-bold text-center text-PRIMARY_COLOR">
          Most Popular Questions
        </h1>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 lg:flex-row w-fit lg:gap-16 lg:mx-[8%] mx-4">
          {faqs.slice(0, 5).map((qst, index) => (
            <div className="flex flex-col w-full gap-4 ">
              <details
                key={`question-${index}`}
                className="pb-8 m-4 border-b-2"
              >
                <summary className="flex items-start justify-between w-full text-xl font-bold cursor-pointer">
                  <span className='w-5/6'>{qst.qst}</span>
                  <HiPlusSm className="items-start w-1/6 p-0 ml-8 text-4xl font-extrabold" />
                </summary>
                <div className="mt-8 text-lg">
                  <p>{qst.resp}</p>
                </div>
              </details>
            </div>
          ))}
        </div>
      </div>
      <GetInTouch />
    </>
  );
};
export default FAQ;
