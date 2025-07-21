import React, { useState } from "react";

export const Faq = () => {
  const questionList = [
    {
      title: "What is sordullo ?",
      paragraphe:
        "Sordullo is the first Web3-native big data platform gamifying and decentralizing the collection of training data. Its mission is to build a decentralized intelligence platform that enables individuals to earn from the valuable data they generate everyday.",
    },
    {
      title: "What is sordullo ?",
      paragraphe:
        "Sordullo is the first Web3-native big data platform gamifying and decentralizing the collection of training data. Its mission is to build a decentralized intelligence platform that enables individuals to earn from the valuable data they generate everyday.",
    },
    {
      title: "What is sordullo ?",
      paragraphe:
        "Sordullo is the first Web3-native big data platform gamifying and decentralizing the collection of training data. Its mission is to build a decentralized intelligence platform that enables individuals to earn from the valuable data they generate everyday.",
    },
  ];
  const alsoAsk = [
    {
      title: "What is sordullo ?",
      paragraphe:
        "Sordullo is the first Web3-native big data platform gamifying and decentralizing the collection of training data. Its mission is to build a decentralized intelligence platform that enables individuals to earn from the valuable data they generate everyday.",
    },
    {
      title: "What is sordullo ?",
      paragraphe:
        "Sordullo is the first Web3-native big data platform gamifying and decentralizing the collection of training data. Its mission is to build a decentralized intelligence platform that enables individuals to earn from the valuable data they generate everyday.",
    },
    {
      title: "What is sordullo ?",
      paragraphe:
        "Sordullo is the first Web3-native big data platform gamifying and decentralizing the collection of training data. Its mission is to build a decentralized intelligence platform that enables individuals to earn from the valuable data they generate everyday.",
    },
  ];
const [faqOpenIndex, setfaqOpenIndex] = useState(null);
     
      const toggle = (index) => {
        setfaqOpenIndex(faqOpenIndex === index ? null : index);
      };
  return (
    <section className="flex flex-col items-center gap-32  px-4 md:px-24 py-12 md:py-38 ">
      <h2
        className={`font-oldschol font-bold px-4 text-[24px] leading-[90%] sm:text-[34px] md:text-[52px] lg:text-[64px] text-center`}
      >
        Most Common <br /> Questions
      </h2>
      <div className="sm:w-[540px] lg:w-[740px] space-y-12">
        {questionList.map((item, index) => (
          <div id={index} className="space-y-4">
            <div className="flex justify-start text-white bg-black px-4 w-fit rounded-full py-3">
              {item.title}
            </div>

            {/* Message aligné à droite */}
            <div className="flex justify-end items-end gap-2">
              <div className="flex justify-end items-end  bg-white w-[360px] border-3  shadow-[7px_7px_0_0_black] rounded-lg p-6">
                {item.paragraphe}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col items-center">
          <div className="lg:w-[740px]  space-y-5">
                  <h3 className="items-start">Also ask</h3>

        {alsoAsk.map((item, index) => (
          <div id={index} className={`space-y-4 ${faqOpenIndex == index ? "max-h-[350px] " : "max-h-[54px]"} overflow-hidden  transition-all duration-700` } key={index}>
            <div 
              onClick={() => toggle(index)}
              className={`flex justify-start ${faqOpenIndex == index ? "text-white bg-black border-black border-3" : "border-3"}  px-4 w-fit hover:rounded-2xl duration-300 transition-all rounded-4xl py-3`}>
              {item.title}
            </div>

            {/* Message aligné à droite */}
          <div className={`${faqOpenIndex == index ? "scale-100 delay-300" : "scale-0"}  duration-400 transition-all origin-bottom-right flex justify-end items-end gap-2`}>
  <div className={`flex justify-end items-end bg-white w-[360px] border-3 mb-2 mr-2  shadow-[7px_7px_0_0_black] rounded-lg p-6`}>
    {item.paragraphe}
  </div>
</div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};
