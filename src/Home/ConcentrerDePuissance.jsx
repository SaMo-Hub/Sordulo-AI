import React from 'react'
import { Button } from '../components/Button'

export const ConcentrerDePuissance = () => {
  return (
 <section className='p-4 py-12 md:py-38'>
        <div className='flex flex-col items-center justify-center'>
         <h2 className={`font-oldschol font-bold px-4 text-[24px] leading-[90%] sm:text-[34px] lg:text-[64px] text-center`}>
            Un concentré <br /> de puissance
        </h2>
        <p className='text-sm mt-4 w-[80%] md:md:w-2/7  text-center'>
          On s'occupe des tâches ennuyeuses. Vous vous concentrez sur l'augmentation de la visibilité et de la crédibilité de votre marque
        </p>
        </div>
        <div className=' justify-center flex mt-14 flex-col items-center'>
          <div className='flex items-center justify-center gap-1 bg-gray-400 p-1 md:p-1.5 w-fit rounded-full border-3 border-black shadow-[4px_3px_0_0_black] lg:shadow-[7px_5px_0_0_black]'>
            <div className='cursor-pointer text-sm md:text-base text-white hover:bg-primary hover:border- hover:text-black bg-black px-5 border-3 border-black 3 py-2 w-fit rounded-full'>
              Liens magique
            </div>
            <div className='cursor-pointer text-sm md:text-base text-black border-3 hover:bg-gray-200 bg-white px-5 py-2 w-fit rounded-full'>
              Liens magique
            </div>
          </div>
          <div className='relative text-xs sm:text-[15px] xl:text-2xl  w-scroverflow-hidden flex-col mt-4'>
            <div className=' flex gap-5 sm:gap-12 bg-white flex-col items-center px-5 md:px-12 py-7 pb-24 rounded-xl border-3 border-black shadow-[4px_3px_0_0_black] md:shadow-[8px_8px_0_0_black]'>
                  <p className='text-center  '>
                    How likely are you to recommend <br /> us to a friend or colleague ?
                  </p>
                  <div className='flex gap-2 t'>
                    {[1,2,3,4,5,6,7,8,9].map((item,index)=> (
                      <div className='h-[20px] xl:h-12 w-[20px] xl:w-12 bg-amber-500 flex items-center  justify-center'>
                        {item}
                      </div>
                    ))}
                  </div>
            </div>
            <div className='relative h-full sm:bottom-[75px] bottom-[85px] -left-[8%] sm:-left-[28%] bg-white flex gap-12 w-[60%] sm:w-[80%] flex-col items-center  px-2 sm:px-5 md:px-6 py-5 sm:py-7 sm:pb-7 pb-2  rounded-xl border-3 border-black shadow-[4px_3px_0_0_black] md:shadow-[8px_8px_0_0_black]'>
                  <p className='text-center  '>
                    What do you think <br /> we could do better ?
                  </p>
                  <div className='bg-amber-400 w-full h-38 rounded-md flex gap-2 '>
                   
                  </div>
            </div>
            <div className='absolute top-[28%] sm:top-[40%] -right-[2%]  md:-right-[32%] flex gap-4 sm:gap-12 bg-white  md:w-[60%] flex-col items-center px-2 sm:px-5 md:px-6 py-5 sm:py-7  rounded-xl border-3 border-black shadow-[4px_3px_0_0_black] md:shadow-[8px_8px_0_0_black]'>
                  <p className='text-center  '>
                    Thank your for <br /> your feedback !
                  </p>
                  <div className='flex flex-col gap-2'>
                    <div className='bg-gray-300 px-4 sm:px-6 text-[10px] w-fit py-2 sm:py-3 rounded-full'>
                        Upadate my feedback
                    </div>
                    <div className='bg-blue-500 px-4 text-white sm:px-6 text-[10px] w-fit py-2 sm:py-3 rounded-full'>
                        Upadate my feedback
                    </div>
                  </div>
            </div>
          </div>
          <p className='text-center md:w-2/3'>
            Faites un suivi instantané des demandes NPS et CSAT avec une demande d'avis et augmentez vos taux de collecte d'avis 
<br /><br />
Intégrez-vous facilement à n'importe quelle solution de feedback en utilisant nos liens magiques, ou créez des campagnes de feedback en utilisant nos formulaires de feedback intégrés
          </p>
        </div>
      </section>  )
}
