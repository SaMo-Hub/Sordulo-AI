import React from 'react'

export const Button = ({text}) => {
  return (
    <button className='px-4 bg-primary border-2 font-oldschol rounded-full'> 
        <div>
        {text} 
        </div>
        </button>
  )
}
