import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Subtitle } from '../components/Subtitle'
import { Title } from './Title'
import { Button } from './Button'

export const SectionComponent = ({ order, img, title, parapraphe, subtitle, number }) => {
  const imageRef = useRef(null);
  const imageBackgroundRef = useRef(null);
  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: imageBackgroundRef.current,
        start: "top 155%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      imageBackgroundRef.current,
      { y: 800 },
      { y: 1, opacity: 1, duration: 1, ease: "power2.out" }
    )
      .fromTo(
        imageRef.current,
        { y: 800 },
        { y: 1, opacity: 1, duration: 1, ease: "power2.out", delay: 0.2 },
        "<"
      )
  }, []);
  return (
    <section className="grid md:grid-cols-2 justify-center wfull itms-center bg-ble-500 gap-12 px-4 md:px-16 lg:px-24 xl:px-40 2xl:px-52 ">
      <div className={`${order === 0 ? 'order-2' : 'order-2 md:order-1'} pb-2 w-full overflow-hidden rounded-3xl`}>
        <div ref={imageBackgroundRef} className={`w-full overflow-hidden bg-primary-50 py-12 pr-25 pl-17 rounded-3xl border-4 border-dark shadow-[0_5px_0_0_black]`}>
          {/* <img className="primary " ref={imageRef}  src={img} alt={title} /> */}
          <style>{`
            @keyframes float {
              0% { transform: translateY(0); }
              50% { transform: translateY(-18px); }
              100% { transform: translateY(0); }
            }
          `}</style>
          <div className="relative">
            <img className="w-auto absolute top-23 -left-12" style={{animation: 'float 3.5s ease-in-out infinite', animationDelay: '0s'}} src="/img/Home/socialManagement/appList.png" alt="" />
            <img className="absolute bottom-22 left-35" style={{animation: 'float 3.5s ease-in-out infinite', animationDelay: '1s'}} src="/img/Home/socialManagement/Autopost.png" alt="" />
            <img className="" style={{animation: 'float 3.5s ease-in-out infinite', animationDelay: '2s'}} src="/img/Home/socialManagement/Description.png" alt="" />
          </div>
        </div>
      </div>
      <div className={`${order === 0 ? 'order-1' : 'order-1 md:order-2'} flex flex-col items-center md:items-baseline`}>
        <Subtitle number={number} text={subtitle} />
        <Title title={title} />
        <p className='mx-22 md:mx-0 mt-4 md:mt-6 xl:text-lg text-center md:text-start'>{parapraphe}</p>
        <Button className={'mt-4'} text={"Réserver une démo"} secondary={true} />
      </div>
    </section>
  )
}
{ }