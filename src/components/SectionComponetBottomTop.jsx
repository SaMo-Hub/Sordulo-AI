import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";

// Import des images
import imgTopL from "../../public/img/Home/respondPhoneText/topl.png";
import imgTopR from "../../public/img/Home/respondPhoneText/topr.png";
import imgMidL from "../../public/img/Home/respondPhoneText/midl.png";
import imgMidR from "../../public/img/Home/respondPhoneText/midr.png";
import imgBotL from "../../public/img/Home/respondPhoneText/botl.png";
import imgBotR from "../../public/img/Home/respondPhoneText/botr.png";
import imgStar from "../../public/img/Home/respondPhoneText/stardulo.png";
import imgFeedback from "../../public/img/Home/review/feedback.png";
import imgCouldBeBetter from "../../public/img/Home/review/couldtobetter.png";
import imgRecommend from "../../public/img/Home/review/recommend.png";

export const SectionComponetBottomTop = ({ img, title, parapraphe, subtitle, number, part }) => {
  const imageRefs = useRef([]);
  const image2Refs = useRef([]);
  const imageBackgroundRef = useRef(null);
  const imageBackgroundRef2 = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageBackgroundRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: imageBackgroundRef2.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      imageBackgroundRef.current,
      { scale: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power4.inOut" }
    ).fromTo(
      imageRefs.current.filter(Boolean),
      { scale: 0 },
      { scale: 1, opacity: 1, duration: 1, ease: "power2.inOut", stagger: 0.08 },
      "0.2"
    )

    tl2.fromTo(
      imageBackgroundRef2.current,
      { scale: 0 },
      { scale: 1, opacity: 1, duration: 1.5, ease: "power4.inOut" }
    )
     image2Refs.current.forEach((img, i) => {
      if (!img) return;
      tl2.fromTo(
        img,
        { scale: 0 },
        { scale: 1, opacity: 1, duration: 1, ease: "power2.inOut", stagger: 0.08 },

        "0.3+=" + (i * 0.08)
      );
      gsap.to(img, {
        y: -20,
        yoyo: true,
        repeat: -1,
        duration: 2,
        ease: "power1.inOut",
        delay: i * 0.8
      });
    })

    // Animation infinie (exemple : rotation)
    imageRefs.current.forEach((img, i) => {
      if (!img) return;
      if (i === 0 || i === 5) {
        gsap.to(img, {
          rotate: 6,
          yoyo: true,
          repeat: -1,
          duration: 2,
          ease: "sine.inOut",
          transformOrigin: "50% 50%",
          yoyoEase: true,
        });
        // } else if (i === 1 || i === 4) {
        //   gsap.to(img, {
        //     rotate: -6,
        //     yoyo: true,
        //     repeat: -1,
        //     duration: 2,
        //     ease: "sine.inOut",
        //     transformOrigin: "50% 50%",
        //     yoyoEase: true,
        //   });
        // } else if (i === 2) {
        //   gsap.to(img, {
        //     x: 20,
        //     yoyo: true,
        //     repeat: -1,
        //     duration: 2,
        //     ease: "sine.inOut",
        //     yoyoEase: true,
        //   });
        // } else if (i === 3) {
        //   gsap.to(img, {
        //     x: -20,
        //     yoyo: true,
        //     repeat: -1,
        //     duration: 2,
        //     ease: "sine.inOut",
        //     yoyoEase: true,
        //   });
        // } else if (i === 6) {
        gsap.to(img, {
          rotate: 12,
          yoyo: true,
          repeat: -1,
          duration: 3,
          ease: "sine.inOut",
          transformOrigin: "50% 50%",
          yoyoEase: true,
        });
      }
    });
  }, [part]);

  return (
    <section className="w-full px-4 md:px-16 lg:px-24 xl:px-40 2xl:px-52">
      <div className="flex flex-col items-center justify-center">
        <Subtitle number={number} text={subtitle} />
        <Title title={title} center={true} />
      </div>
      {part === 1 ? (
        <div ref={imageBackgroundRef} className="w-full overflow-hidden bg-primary-50 py-12 pr-25 pl-17 flex items-center justify-center rounded-3xl border-4 border-dark shadow-[0_5px_0_0_black]">
          <div className="relative w-fit ">
            <img ref={el => imageRefs.current[0] = el} className="z-10 w-auto absolute left-0 top-0" src={imgTopL} alt="top left" />
            <img ref={el => imageRefs.current[1] = el} className="z-10 absolute right-0 top-0" src={imgTopR} alt="top right" />
            <img ref={el => imageRefs.current[2] = el} className="z-10 absolute bottom-35 left-0" src={imgMidL} alt="mid left" />
            <img ref={el => imageRefs.current[3] = el} className="z-10 absolute bottom-35 right-0" src={imgMidR} alt="mid right" />
            <img ref={el => imageRefs.current[4] = el} className="z-10 absolute bottom-0 left-0" src={imgBotL} alt="bottom left" />
            <img ref={el => imageRefs.current[5] = el} className="z-10 absolute bottom-0 right-0" src={imgBotR} alt="bottom right" />
            <img ref={el => imageRefs.current[6] = el} className="z-0 relative" src={imgStar} alt="star" />
          </div>
        </div>
      ) : (
        <div ref={imageBackgroundRef2} className="w-full overflow-hidden bg-primary-50 py-12 pr-25 pl-17 rounded-3xl border-4 border-dark shadow-[0_5px_0_0_black]">
          <div className="relative flex items-center justify-center">
            <img ref={el => image2Refs.current[0] = el} className="z-10 w-auto absolute right-0 bottom-9" src={imgFeedback} alt="feedback" />
            <img ref={el => image2Refs.current[1] = el} className="z-10 absolute bottom-0 left-0" src={imgCouldBeBetter} alt="could be better" />
            <img ref={el => image2Refs.current[2] = el} className="z-0" src={imgRecommend} alt="recommend" />
          </div>
        </div>
      )}
    </section>
  );
};
