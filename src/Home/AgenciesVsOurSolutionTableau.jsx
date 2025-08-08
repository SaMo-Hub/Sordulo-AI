import React from 'react'

export const AgenciesVsOurSolution = () => {

    const optionList= 
        [
            [ "Options","Augmentation des revenus","Capture de prospects après les heures de bureau","Résumés d'appels générés par l'IA"],
           ["Sordulo","30%","30%","30%",],
            ["Autres services d'IA","30%","30%","30%",],
]


  return (
   <section className={`bg-primary flex-col flex items-center justify-center gap-32  px-4 md:px-24 py-12 md:py-38`}>
      <h2
        className={`font-oldschol font-bold px-4 text-[24px] md:text-[52px]  leading-[90%] sm:text-[34px] lg:text-[64px] text-center`}
      >
Agencies Vs Our Solution
      </h2>
    <div className='flex border-3 shadow-[10px_10px_0_0_black]  w-fit mr-2 rounded-lg bg-white'>
        {optionList.map((collum,index)=> (
            <div className={`${index==0 && ""} `}>
                 {collum.map((item,i)=> (
            <div className={`${i===collum.length-1 ? "border-r-3 " :'border-b-3 border-r-3 ' }  ${item === "Options" ? '' : item === "Sordulo" ? "bg-primary" : index === 1 && "bg-primary"  } h-[80px] p-3`}>
                {item}
            </div>
        ))}
            </div>
        ))}
    </div>
    </section>
  )
}
