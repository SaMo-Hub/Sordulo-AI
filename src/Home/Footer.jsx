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
    <footer className='bg-primary pb-12 flex justify-end  px-12 items-center flex-col h-screen overflow-hidden'>

          <img className='w-[104px] ' src="/img/Logo/logo-bordure.svg" alt="" />
        <div className='w-full border-dark shadow-[0px_10px_0_0_#151B37] border-4 drop-shadow-2xl flex rou text-primary rounded-xl bg-secondary px-12 py-8 justify-between items-center gap-2 mt-4'>
          <p>Dema</p>
          <p>© Copyright Sordulo.  All rights reserved.</p>
          <p>Dema</p>
        </div>
   
    </footer>
  )
}
