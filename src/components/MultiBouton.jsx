import React, { useState } from 'react'

export const MultiBouton = ({setIsBoutonSelected,isBoutonSelected,boutonList}) => {
  return (
    <div className='flex items-center justify-center gap-1 bg-gray-400 p-1 md:p-1.5 w-fit rounded-full border-3 border-black shadow-[4px_3px_0_0_black] lg:shadow-[7px_5px_0_0_black]'>
            {boutonList.map((item,index)=>(
                <div onClick={()=> setIsBoutonSelected(item)} className={` ${isBoutonSelected===item ? 'text-white hover:bg-primary hover:text-black bg-black ' : "text-black  hover:bg-gray-200 bg-white"} px-5 border-3 border-black 3 py-2 w-fit rounded-full` } >
             {item}
            </div>
            ))}
         
          </div>
  )
}
