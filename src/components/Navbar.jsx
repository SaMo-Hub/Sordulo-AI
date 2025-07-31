import React from 'react'
import { Button } from './Button'

export const Navbar = () => {
  return (
    <nav  className='flex justify-center fixed z-40 w-full'>
        <div className='flex items-center gap-4 bg-black text-white p-2.5 w-fit rounded-lg '>
        <img src="/logo.svg" alt="" />
        <div>
            <ul className='flex g'>
                <li className='hover:bg-white/20 px-3 py-1 rounded-full'>Tarifs</li>
                 <li className='hover:bg-white/20 px-3 py-1 rounded-full'>Fonctionnalités</li>
                 <li className='hover:bg-white/20 px-3 py-1 rounded-full'>Secteur</li>
                <li className='hover:bg-white/20 px-3 py-1 rounded-full'>Ressources</li>
            </ul>
             </div>
        </div>
        <Button text={"Contact"}/>
    </nav>
  )
}
