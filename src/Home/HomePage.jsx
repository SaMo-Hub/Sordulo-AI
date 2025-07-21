import React from 'react'
import { Button } from '../components/Button'
import dashboard from '/img/Home/dashboard.png'
import rating from '/img/Home/rating.png'
import review from '/img/Home/review.png'
import { Header } from './Header'
import { ConcentrerDePuissance } from './ConcentrerDePuissance'
import { CeQueLesClients } from './CeQueLesClients'
import { Navbar } from '../components/Navbar'
import { Faq } from './Faq'
import { ConcuePourReserver } from './ConcuePourReserver'
import { LeSeulOutilDIA } from './LeSeulOutilDIA'
import { AgenciesVsOurSolution } from './AgenciesVsOurSolution'
import { Footer } from './Footer'
export const HomePage = ({  }) => {
  return (
    <div className={`font-oldschol mt-12`}>

      {/* <Navbar/> */}
      <Header/>
      <CeQueLesClients/>
      <ConcentrerDePuissance/>
      <ConcuePourReserver/>
      <LeSeulOutilDIA/>
      <AgenciesVsOurSolution/>
      <Faq/>
      <Footer/>
    
     
    </div>
  );
}
