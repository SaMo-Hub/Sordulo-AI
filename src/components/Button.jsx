import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const Button = ({ text, secondary, className }) => {
  const boutonRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: boutonRef.current,
        start: "top 95%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      boutonRef.current,
      { scale: 0 },
      { scale: 1, opacity: 1, duration: 0.5, ease: "power2.out" }
    ).fromTo(
      boutonRef.current,
      { boxShadow: "0 0 0px 0px black", y: "6px" },
      { boxShadow: "0px 5px 0px 0px black", duration: 0.5, ease: "power2.inOut", y: "0px" },
      "0.3"
    );
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    gsap.to(boutonRef.current, {
      y: "4px",
      boxShadow: "0 2px 0 0 black",
      duration: 0.1,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    gsap.to(boutonRef.current, {
      y: "0px",
      boxShadow: "0px 5px 0px 0px black",
      duration: 0.1,
      ease: "power2.out"
    });
  };

  return (
    <button
      ref={boutonRef}
      className={`${className} ${secondary ? 'bg-white' : 'bg-primary'} h-fit relative w-fit px-4 py-2 font-bold border-[3.5px] border-black font-oldschol rounded-full cursor-pointer`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        {text}
      </div>
    </button>
  );
};