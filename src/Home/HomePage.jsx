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
import { ProspectsExisant } from './ProspectsExisant'
import { SectionComponent } from '../components/SectionComponent'
import { SectionComponetBottomTop } from '../components/SectionComponetBottomTop'
export const HomePage = ({  }) => {
  return (
    <div className={`bg-[#FFFAEC] text-[#151B37] space-y-62 font-oldschol mt-12`}>

      {/* <Navbar/> */}
      <Header/>
      {/* <CeQueLesClients/> */}
      {/* <LeSeulOutilDIA/> */}
      <SectionComponetBottomTop img={"/img/Home/bulle-texte.png"} number={2} subtitle={"Autres agences VS Nous"} title={<>Le seul outil d'IA dont <br /> vous aurez besoin.</>} parapraphe={"L'IA employé vous aide à transformer les prospects de n'importe quel canal en plus de missions, 24h/24 et 7j/7. Votre IA employé est configurée pour connaître votre entreprise et vos clients."}/>
      <ProspectsExisant/>
      <SectionComponent order={1} img={"/img/Home/texte-automatique.png"} number={4} subtitle={"Autres agences VS Nous"} title={'Ne perdez plus jamais une autre avance'} parapraphe={"L'IA employé vous aide à transformer les prospects de n'importe quel canal en plus de missions, 24h/24 et 7j/7. Votre IA employé est configurée pour connaître votre entreprise et vos clients."}/>
      <SectionComponent order={0} img={"/img/Home/SocialManagement.png"} number={5} subtitle={"Autres agences VS Nous"} title={'Ne perdez plus jamais une autre avance'} parapraphe={"L'IA employé vous aide à transformer les prospects de n'importe quel canal en plus de missions, 24h/24 et 7j/7. Votre IA employé est configurée pour connaître votre entreprise et vos clients."}/>
      <SectionComponetBottomTop img={"/img/Home/review.png"} number={6} subtitle={"Autres agences VS Nous"} title={<>Le seul outil d'IA dont <br /> vous aurez besoin.</>} parapraphe={"L'IA employé vous aide à transformer les prospects de n'importe quel canal en plus de missions, 24h/24 et 7j/7. Votre IA employé est configurée pour connaître votre entreprise et vos clients."}/>

      {/* <ConcentrerDePuissance/>
      <ConcuePourReserver/> */}
      <AgenciesVsOurSolution/>
      <Faq/>
      <Footer/>
    
     
    </div>
  );
}
