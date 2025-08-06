import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Subtitle } from '../components/Subtitle'
import { Title } from './Title'
import { Button } from './Button'

export const SectionComponent = ({ order, img, title, parapraphe, subtitle, number, part }) => {
  const imageRef = useRef(null);
  const imageBackgroundRef = useRef(null);
    const wordsRefs = useRef([]);
  
  // Découpe le paragraphe en lignes (par exemple avec \n)
   let words = [];
  if (Array.isArray(parapraphe)) {
    words = parapraphe.join(' ').split(' ');
  } else if (typeof parapraphe === 'string') {
    words = parapraphe.split(/\s+/);
  } else {
    words = [parapraphe];
  }
  const lines = typeof parapraphe === "string" ? parapraphe.split('\n') : [parapraphe];
  const imageRefs = useRef([]);
console.log([imageRefs]);

  useEffect(() => {
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
    )
      .fromTo(
        imageRef.current,
        { x:  order === 1 ? -600 : 600 },
        { x: 0, opacity: 1, duration: 1.4, ease: "power3.inOut", },
        "0.3"
      )
      .fromTo(
        wordsRefs.current,
        { y: 40, opacity: 1 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.01, ease: "power2.out" },
        "0.5"
      )
      imageRefs.current.forEach((img, i) => {
      if (!img) return;
      tl.fromTo(
        img,
        { x: i % 2 === 0  ? -400 : 400 },
        { x: 0, opacity: 1, duration: 1, ease: "power2.inOut" },
        "0.5+=" + (i * 0.08)
      )
      imageRefs.current.forEach((img, i) => {
    if (!img) return;
    gsap.to(img, {
      y: -20,
      yoyo: true,
      repeat: -1,
      duration: 2,
      ease: "power1.inOut",
      delay: i * 0.2
    });
  });;
    });
  }, [lines.length]);

  return (
    <section className="grid md:grid-cols-2 justify-center wfull itms-center bg-ble-500 gap-12 px-4 md:px-16 lg:px-24 xl:px-40 2xl:px-52 ">
      <div className={`${order === 0 ? 'order-2' : 'order-2 md:order-1'} pb-2 w-full overflow-hidden rounded-3xl`}>
        {part === 1 ? (
          <div ref={imageBackgroundRef} className={`w-full  overflow-hidden bg-primary-50 px-8 py-12 rounded-3xl border-4 border-dark shadow-[0_5px_0_0_black]`}>
            {/* <img className="primary " ref={imageRef}  src={img} alt={title} /> */}
            <div  className="flex flex-col gap-12" >
            <img ref={el => imageRefs.current[0] = el} src="/img/Home/textRespond/firstText.png"  alt="" />
            <img ref={el => imageRefs.current[1] = el} src="/img/Home/textRespond/respond.png"  alt="" />
            <img ref={el => imageRefs.current[2] = el} src="/img/Home/textRespond/appel.png"  alt="" />
            </div>
          </div>
        ) : part === 2 ? (
          <div ref={imageBackgroundRef} className={`w-full overflow-hidden bg-primary-50 py-12 pr-25 pl-17 rounded-3xl border-4 border-dark shadow-[0_5px_0_0_black]`}>
            {/* <img className="primary " ref={imageRef}  src={img} alt={title} /> */}
            <div className="relative ">
              <img  ref={el => imageRefs.current[0] = el} className="z-10 w-auto absolute top-23 -left-12" src="/img/Home/socialManagement/appList.png" alt="" />
              <img  ref={el => imageRefs.current[2] = el} className="z-10 absolute bottom-22 left-35"  src="/img/Home/socialManagement/Autopost.png" alt="" />
              <img  ref={el => imageRefs.current[1] = el} className="z-0" src="/img/Home/socialManagement/Description.png" alt="" />
            </div>
          </div>
        ) : (
          <div ref={imageBackgroundRef} className={`w-full overflow-hidden bg-primary-50 px-8 py-12 rounded-3xl border-4 border-dark shadow-[0_5px_0_0_black]`}>
            {/* <img className="primary " ref={imageRef}  src={img} alt={title} /> */}
                        <div  className="flex flex-col gap-12" >

            <img ref={el => imageRefs.current[0] = el} src="/img/Home/basicText/first.png"  alt="" />
            <img ref={el => imageRefs.current[1] = el} src="/img/Home/basicText/second.png"  alt="" />
            <img ref={el => imageRefs.current[2] = el} src="/img/Home/basicText/third.png"  alt="" />
            <img ref={el => imageRefs.current[3] = el} src="/img/Home/basicText/quatre.png"  alt="" />
            <img ref={el => imageRefs.current[4] = el} src="/img/Home/basicText/cinq.png" alt="" />
          </div>
          </div>
        )
        }
      </div>
      <div className={`${order === 0 ? 'order-1' : 'order-1 md:order-2'} flex flex-col items-center md:items-baseline`}>
        <Subtitle number={number} text={subtitle} />
        <Title title={title} />
        <div className="sm:mx-22 md:mx-0  xl:text-lg text-center md:text-start">
          {words.map((word, i) => (
            <span
            key={i}
            className="overflow-hidden inline-block mr-1  bg-amer-200"
          >
            <span
              ref={el => (wordsRefs.current[i] = el)}
              className="inline-block will-change-transform will-change-opacity"
            >
              {word}
            </span>
          </span>
          ))}
        </div>
        <Button className={'mt-4'} text={"Réserver une démo"} secondary={true} />
      </div>
    </section>
  )
}
