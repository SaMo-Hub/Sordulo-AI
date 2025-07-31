import React, { useState } from 'react'
import { Button } from '../components/Button'
import { MultiBouton } from '../components/MultiBouton'

export const ConcentrerDePuissance = () => {
    const boutonList = ["Répondre avec l’IA", "Planificateur IA"];
    const [isBoutonSelected, setIsBoutonSelected] = useState(boutonList[0]);
  return (
    
    <section className='p-4 md:p-12'>
      <div className="w-fit bg-white  md:px-24 py-12 md:py-24  pt-10  rounded-lg ">
        <div className='flex flex-col items-center justify-center'>
         <h2 className={`font-oldschol font-bold px-4 text-[24px] leading-[90%] sm:text-[34px] md:text-[52px]  lg:text-[64px] text-center`}>
            Un concentré <br /> de puissance
        </h2>
        <p className='text-sm md:text-base mt-4 w-[80%] md:md:w-2/3 xl:w-2/6  text-center'>
          On s'occupe des tâches ennuyeuses. Vous vous concentrez sur l'augmentation de la visibilité et de la crédibilité de votre marque
        </p>
        </div>
        <div className=' justify-center flex mt-14 flex-col items-center'>
        <MultiBouton isBoutonSelected={isBoutonSelected}  setIsBoutonSelected={setIsBoutonSelected} boutonList={boutonList} />
                {isBoutonSelected === boutonList[0] ? (
<div className='relative text-xs sm:text-[15px] md:text-lg lg:text-2xl  w-scroverflow-hidden flex-col mt-4'>
            <div className=' flex gap-5 sm:gap-12 bg-white flex-col items-center px-5 md:px-12 py-7 pb-24 rounded-xl border-3 border-black shadow-[4px_3px_0_0_black] md:shadow-[8px_8px_0_0_black]'>
                  <p className='text-center  '>
                    How likely are you to recommend <br /> us to a friend or colleague ?
                  </p>
                  <div className='flex gap-2 t'>
                    {[1,2,3,4,5,6,7,8,9].map((item,index)=> (
                      <div className='h-[20px] md:h-8 md:w-8 lg:h-12 w-[20px] lg:w-12 bg-amber-500 flex items-center  justify-center'>
                        {item}
                      </div>
                    ))}
                  </div>
            </div>
            <div className='relative h-full sm:bottom-[75px] bottom-[85px] -left-[8%] sm:-left-[28%] md:-left-[18%] bg-white flex  gap-4 sm:gap-12 w-[60%] sm:w-[80%] flex-col items-center  px-2 sm:px-4 md:px-6 py-5 sm:py-7 sm:pb-4 pb-2  rounded-xl border-3 border-black shadow-[4px_3px_0_0_black] md:shadow-[8px_8px_0_0_black]'>
                  <p className='text-center  '>
                    What do you think <br /> we could do better ?
                  </p>
                  <div className='bg-amber-400 w-full h-38 rounded-md flex gap-2 '>
                   
                  </div>
            </div>
            <div className='absolute top-[28%]  sm:top-[35%] -right-[4%] sm:-right-[35%] pb-2 md:-right-[18%] flex gap-4 sm:gap-12 bg-white  md:w-fit flex-col items-center px-2 sm:px-5 md:px-6 py-5 sm:py-7  rounded-xl border-3 border-black shadow-[4px_3px_0_0_black] md:shadow-[8px_8px_0_0_black]'>
                  <p className='text-center  '>
                    Thank your for <br /> your feedback !
                  </p>
                  <div className='flex text-[10px] sm:text-[15px] md:text-base flex-col gap-2'>
                    <div className='bg-gray-300 px-4 sm:px-6  w-fit py-2 sm:py-3 rounded-full'>
                        Upadate my feedback
                    </div>
                    <div className='bg-blue-500 px-4 text-white sm:px-6  w-fit py-2 sm:py-3 rounded-full'>
                        Upadate my feedback
                    </div>
                  </div>
            </div>
          </div>
                ):(
            <div className=' flex gap-5 sm:gap-12 bg-white flex-col items-center px-5 md:px-12 py-7 pb-24 rounded-xl border-3 border-black shadow-[4px_3px_0_0_black] md:shadow-[8px_8px_0_0_black]'>
                yo
              </div>
                )}

          
          
          <p className='text-center w-[80%] xl:w-2/5'>
            Faites un suivi instantané des demandes NPS et CSAT avec une demande d'avis et augmentez vos taux de collecte d'avis 
<br /><br />
Intégrez-vous facilement à n'importe quelle solution de feedback en utilisant nos liens magiques, ou créez des campagnes de feedback en utilisant nos formulaires de feedback intégrés
          </p>
        </div>
  </div>
      </section> 
       )
}
