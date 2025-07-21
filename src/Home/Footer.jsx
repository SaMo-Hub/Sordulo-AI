import React from 'react'
import sLetter from "/img/Footer/s.svg"
import oLetter from "/img/Footer/o.svg"
import rLetter from "/img/Footer/r.svg"
import dLetter from "/img/Footer/d.svg"
import uLetter from "/img/Footer/u.svg"
import lLetter from "/img/Footer/l.svg"

const footerImages = [
  sLetter,
  oLetter,
  rLetter,
  dLetter,
  uLetter,
  lLetter,
  oLetter,
];
export const Footer = () => {
  return (
    <footer className='bg-primary pt-42 overflow-hidden'>
      <div className='flex relative top-6 items-end w-full'>
        <p className='text-white tracking-[-0.045em] font-bold font-oldschol text-[30.2vw] '>
          <span>
            s
          </span>
          <span className='tracking-[-0.06em] '>
            o
          </span>
          <span className='tracking-[-0.045em] '>
            r
          </span>
          <span className='tracking-[-0.08em] '>
            d
          </span>
          <span className='tracking-[-0.08em] '>
            u
          </span>
          <span className='tracking-[-0.06em] '>
            l
          </span>
          <span>
            o
          </span>
        </p>
        {/* {footerImages.map((img, idx) => (
          <img className='w-[100] duration-300   hover:-translate-y-20 transition-all' src={img} alt={`footer-letter-${idx}`} key={idx} />
        ))} */}
      </div>
    </footer>
  )
}
