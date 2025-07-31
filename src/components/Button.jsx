import React from 'react'

export const Button = ({ text,secondary }) => {
  return (
    <button className={` ${secondary ? 'bg-white' : ' bg-primary '} h-fit relative hover:left-[2px] hover:top-[2px] w-fit px-4 py-2 font-bold border-[3.5px] border-black font-oldschol rounded-full shadow-[4px_3px_0_0_blac shadow-[7px_5px_0_0_black] hover:shadow-[4px_3px_0_0_black] cursor-pointer`}>
      <div>
        {text}
      </div>
    </button>
  )
}
