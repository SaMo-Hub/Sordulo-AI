import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const Title = ({ title, center }) => {
  
  // Découper le titre en mots (supporte string ou tableau)
  let words = [];
  if (Array.isArray(title)) {
    words = title.join(' ').split(' ');
  } else if (typeof title === 'string') {
    words = title.split(/\s+/);
  } else {
    words = [title];
  }
  
  const wordsRefs = useRef([]);
  useEffect(() => {
    if (wordsRefs.current.length) {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: wordsRefs.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

    tl.fromTo(
      wordsRefs.current,
      { y: 100 },
      { y: 0, opacity: 1, duration: 1, stagger:0.04, ease: "power3.inOut" }
    )
  }
  }, [words.length]);



return (
    <h2 className={`${center ? "text-center" : "text-center md:text-start mx-12 sm:mx-32 md:mx-0"} h- mb-3 md:mb-5 font-bold text-3xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl`}>
      {words.map((word, i) => {
        if (word === '<br>' || word === '<br/>' || word === 'br') {
          return <br key={i} />;
        }
        return (
          <span
            key={i}
            className="overflow-hidden inline-block mr-3  sm:h-10 sm:leading-10 md:h-15 md:leading-15 xl:h-17 xl:leading-15 2xl:h-17 2xl:leading-15 -mb-5    bgamber-200"
          >
            <span
              ref={el => (wordsRefs.current[i] = el)}
              className="inline-block will-change-transform will-change-opacity"
            >
              {word}
            </span>
          </span>
        );
      })}
    </h2>
);
}
