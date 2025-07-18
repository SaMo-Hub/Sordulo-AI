import React from 'react'
import { Button } from '../components/Button'
import dashboard from '/img/Home/dashboard.png'
import rating from '/img/Home/rating.png'
import review from '/img/Home/review.png'
import { Header } from './Header'
import { ConcentrerDePuissance } from './ConcentrerDePuissance'
import { CeQueLesClients } from './CeQueLesClients'
import { Navbar } from '../components/Navbar'
export const HomePage = ({  }) => {
  return (
    <div className={`font-oldschol mt-32`}>

      {/* <Navbar/> */}
      <Header/>
      <CeQueLesClients/>
      <ConcentrerDePuissance/>
    
     
    </div>
  );
}
