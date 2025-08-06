import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Subtitle } from "../components/Subtitle";
import { Title } from "../components/Title";

gsap.registerPlugin(ScrollTrigger);

export const Faq = ({title,subtitle,number, center}) => {
  const wrapperRefs = useRef([]);
  const titleRefs = useRef([]);
  const BackgroundRefs = useRef([]);
  const paraRefs = useRef([]);
  const alsoAskBackgroundRefs = useRef([]);
  const alsoAskTitlesRefs = useRef([]);
  const questionList = [
    {
      title: "What is sordullo ?",
      paragraphe: "Sordullo is the first Web3-native big data platform...",
    },
    {
      title: "What is sordullo ?",
      paragraphe: "Sordullo is the first Web3-native big data platform...",
    },
    {
      title: "What is sordullo ?",
      paragraphe: "Sordullo is the first Web3-native big data platform...",
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
  useEffect(() => {
    wrapperRefs.current.forEach((wrapper, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrapper,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        BackgroundRefs.current[i],
        { width: -0, opacity: 1 },
        { width: "100%", opacity: 1, duration: 0.6, ease: "power2.out" }
      )
        .fromTo(
          titleRefs.current[i],
          { x: -150 },
          { x: 0, duration: 0.6, opacity: 1, ease: "power2.out" },
          "<" // starts at the same time as the previous animation
        )
        .fromTo(
          paraRefs.current[i],
          { scale: 0 },
          { scale: 1, duration: 0.6, delay: -0.1, ease: "power2.out" },
          "-=0.3"
        );
    });
    alsoAskBackgroundRefs.current.forEach((question, i) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: question,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });

      tl.fromTo(
        alsoAskBackgroundRefs.current[i],
        { width: -0, opacity: 1 },
        { width: "100%", opacity: 1, duration: 0.6, ease: "power2.out" }
      ).fromTo(
        alsoAskTitlesRefs.current[i],
        { x: -250, opacity: 1 },
        { x: 0, duration: 0.6, opacity: 1, ease: "power2.out" },
        "<" // starts at the same time as the previous animation
      );
    });
  }, []);

  return (
    <section className="flex flex-col bg- items-center gap-32 px-4 md:px-24 xl:px-42 ">
      <div className="flex flex-col items-center justify-center">
<Subtitle number={number} text={subtitle} />
      <Title  title={title} center={center} />
      
      </div>

      <div className="sm:w-[540px] lg:w-[740px] space-y-12">
        {questionList.map((item, index) => (
          <div
            key={index}
            ref={(el) => (wrapperRefs.current[index] = el)}
            className="space-y-4 bg-ambe-500"
          >
            <div className="flex relative  justify-start overflow-hidden text-white bg-blck px-4 w-fit rounded-full py-3">
              <p
                ref={(el) => (titleRefs.current[index] = el)}
                className="  opacity-0 z-10"
              >
                {item.title}
              </p>
              <div
                ref={(el) => (BackgroundRefs.current[index] = el)}
                className="absolute origin-left  top-0 left-0 rounded-full z-0 w-0 h-full bg-dark"
              ></div>
            </div>
            <div className="flex justify-end origin-bottom-right items-end gap-2">
              <div
                ref={(el) => (paraRefs.current[index] = el)}
                className="flex justify-end items-end origin-bottom-right bg-white w-[360px] border-3 shadow-[7px_7px_0_0_black] rounded-lg p-6"
              >
                {item.paragraphe}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="sm:w-[540px]  lg:w-[740px]  space-y-">
          <h3 className="items-start mb-5">Also ask</h3>

          {alsoAsk.map((item, index) => (
            <div
              id={index}
              className={`space-y-4 ${
                faqOpenIndex == index ? "max-h-[350px] " : "max-h-[54px]"
              } overflow-hidden  transition-all duration-500`}
              key={index}
            >
              <div
                onClick={() => toggle(index)}
                className={`flex justify-start relative  px-4  w-fit hover:rounded-2xl duration-300 opacity-100 transition-all rounded-4xl py-3`}
              >
                <p
                  ref={(el) => (alsoAskTitlesRefs.current[index] = el)}
                  className={`${
                    faqOpenIndex == index ? "text-white" : "text-black"
                  } opacity-0 z-10`}
                >
                  {item.title}
                </p>
                <div
                  ref={(el) => (alsoAskBackgroundRefs.current[index] = el)}
                  className={`${
                    faqOpenIndex == index
                      ? "text-white bg-dark border-dark border-3"
                      : "border-3"
                  } absolute top-0 z-0 rounded-full opacity-0 left-0 w-full h-full`}
                ></div>
              </div>

              {/* Message aligné à droite */}
              <div
                className={`${
                  faqOpenIndex == index ? "scale-100 delay-200" : "scale-0"
                }  duration-400 transition-all origin-bottom-right flex justify-end items-end gap-2`}
              >
                <div
                  className={`flex justify-end items-end  bg-white w-[360px] border-3 mb-2 mr-2  shadow-[7px_7px_0_0_black] rounded-lg p-6`}
                >
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
