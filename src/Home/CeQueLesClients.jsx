import React from 'react'
import { Button } from '../components/Button'
import dashboard from '/img/Home/dashboard.png'
import rating from '/img/Home/rating.png'
import review from '/img/Home/review.png'
export const CeQueLesClients = () => {
  return (
  <section className={`bg-primary px-4 md:px-24 py-12 md:py-38`}>
        <h2 className={`font-oldschol font-bold px-4 text-[24px] leading-[90%] sm:text-[34px] lg:text-[64px] text-center`}>
          Une vue d'ensemble de ce <br />que les clients disent de <br /> votre entreprise.
        </h2>
        <div className='mt-28'>
          <div className='flex flex-col relative items-center'>
            <img className='w-[80%] border-3 border-black font-oldschol rounded-lg shadow-[4px_3px_0_0_black] lg:shadow-[7px_5px_0_0_black]' src={dashboard} alt="" />
            <img className=' absolute top-[20%] left-0 w-[30%] border-3 border-black font-oldschol rounded-lg shadow-[4px_3px_0_0_black] lg:shadow-[7px_5px_0_0_black]' src={rating} alt="" />
            <img className=' absolute top-[24%]  right-0 w-[50%]  font-oldschol rounded-lg border-3 border-black shadow-[4px_3px_0_0_black] lg:shadow-[7px_5px_0_0_black]' src={review} alt="" />
          </div>
          <div className='mt-14 flex md:flex-row w-full justify-center flex-col items-center gap-4'>
                    <Button secondary={true} text={"Démarrer un essai gratuit"} />
        <Button secondary={false} text={"Voir les tarifs"} />

          </div>
        </div>
      </section>  )
}
