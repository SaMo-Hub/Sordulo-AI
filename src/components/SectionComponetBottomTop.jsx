import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";

export const SectionComponetBottomTop = ({ img, title, parapraphe, subtitle, number, part }) => {
  const imageRefs = useRef([]);
  const imageBackgroundRef = useRef(null);

  useEffect(() => {
    // Apparition
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageBackgroundRef.current,
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
    );

    // Animation infinie (exemple : rotation)
    imageRefs.current.forEach((img, i) => {
      if (!img) return;
      // Choisis le type d'animation selon l'index ou le nom du fichier
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
      } else if (i === 1 || i === 4) {
        gsap.to(img, {
          rotate: -6,
          yoyo: true,
          repeat: -1,
          duration: 2,
          ease: "sine.inOut",
          transformOrigin: "50% 50%",
          yoyoEase: true,
        });
      } else if (i === 2) {
        gsap.to(img, {
          x: 20,
          yoyo: true,
          repeat: -1,
          duration: 2,
          ease: "sine.inOut",
          yoyoEase: true,
        });
      } else if (i === 3) {
        gsap.to(img, {
          x: -20,
          yoyo: true,
          repeat: -1,
          duration: 2,
          ease: "sine.inOut",
          yoyoEase: true,
        });
      } else if (i === 6) {
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
          <div  className="relative w-fit ">
            <img ref={el => imageRefs.current[0] = el} className="z-10 w-auto absolute left-0 top-0" src="/img/Home/respondPhoneText/topl.png" alt="" />
            <img ref={el => imageRefs.current[1] = el} className="z-10 absolute right-0 top-0" src="/img/Home/respondPhoneText/topr.png" alt="" />
            <img ref={el => imageRefs.current[2] = el} className="z-10 absolute bottom-35 left-0" src="/img/Home/respondPhoneText/midl.png" alt="" />
            <img ref={el => imageRefs.current[3] = el} className="z-10 absolute bottom-35 right-0" src="/img/Home/respondPhoneText/midr.png" alt="" />
            <img ref={el => imageRefs.current[4] = el} className="z-10 absolute bottom-0 left-0" src="/img/Home/respondPhoneText/botl.png" alt="" />
            <img ref={el => imageRefs.current[5] = el} className="z-10 absolute bottom-0 right-0" src="/img/Home/respondPhoneText/botr.png" alt="" />
            <img ref={el => imageRefs.current[6] = el} className="z-0 relative" src="/img/Home/respondPhoneText/stardulo.png" alt="" />
          </div>
        </div>
      ) : (
        <div  className={`w-full overflow-hidden bg-primary-50 py-12 pr-25 pl-17 rounded-3xl border-4 border-dark shadow-[0_5px_0_0_black]`}>
          <div ref={imageBackgroundRef} className="relative flex items-center    justify-center">
            <img className="z-10 w-auto absolute right-0 bottom-9" style={{ animation: 'float 3.5s ease-in-out infinite', animationDelay: '0s' }} src="/img/Home/review/feedback.png" alt="" />
            <img className="z-10 absolute bottom-0 left-0" style={{ animation: 'float 3.5s ease-in-out infinite', animationDelay: '1s' }} src="/img/Home/review/couldtobetter.png" alt="" />
            <img className="z-0" style={{ animation: 'float 3.5s ease-in-out infinite', animationDelay: '2s' }} src="/img/Home/review/recommend.png" alt="" />
          </div>
        </div>
      )}
    </section>
  );
};
