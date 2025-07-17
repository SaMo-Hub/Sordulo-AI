import React from 'react'
import { Button } from './components/Button'

export const HomePage = () => {
  return (
    <div>
        <header>
            <h1 className='font-oldschol font-bold w-2/5  text-[42px] text-center  '>
Un logiciel de gestion d'avis que vous prendrez plaisir à utiliser
            </h1>
            <Button text={"Prenre"}/>
        </header>
    </div>
  )
}
