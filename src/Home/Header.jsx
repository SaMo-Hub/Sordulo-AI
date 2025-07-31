import React from 'react'
import { Button } from '../components/Button'
import { Subtitle } from '../components/Subtitle'

export const Header = () => {
  return (
     <header className={`pt-32 flex pb-22 flex-col gap-6 lg:gap-12 items-center`}>
      <div className='flex flex-col items-center justify-center'>
        <Subtitle number={1} text={"Sordulo AI"} />
        <h1 className={`leading-[90%] font-oldschol font-bold px-4 sm:w md:w- text-[28px] sm:text-[42px] md:text-[64px] lg:text-[72px] text-center`}>
          Un logiciel de gestion  <br />d'avis que vous prendrez  <br />plaisir à utiliser
        </h1>
      </div>
        <Button secondary={false} text={"Démarrer un essai gratuit"} />
      </header>
  )
}
