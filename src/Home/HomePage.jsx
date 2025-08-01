
import { Header } from './Header'

import { Faq } from './Faq'

import { AgenciesVsOurSolution } from './AgenciesVsOurSolution'
import { Footer } from './Footer'
import { ProspectsExisant } from './ProspectsExisant'
import { SectionComponent } from '../components/SectionComponent'
import { SectionComponetBottomTop } from '../components/SectionComponetBottomTop'
export const HomePage = ({  }) => {
  return (
    <div className={`bg-[#FFFAEC] custom-selection text-[#151B37] space-y-62 font-oldschol pt-12`}>

      <Header/>
      
      <SectionComponetBottomTop img={"/img/Home/bulle-texte.png"} number={2} subtitle={"Autres agences VS Nous"} title={<>Le seul outil d'IA dont <br /> vous aurez besoin.</>} parapraphe={"L'IA employé vous aide à transformer les prospects de n'importe quel canal en plus de missions, 24h/24 et 7j/7. Votre IA employé est configurée pour connaître votre entreprise et vos clients."}/>
      <ProspectsExisant/>
      <SectionComponent order={1} img={"/img/Home/ai-talking.png"} number={4} subtitle={"Autres agences VS Nous"} title={'Ne perdez plus jamais une autre avance'} parapraphe={"L'IA employé vous aide à transformer les prospects de n'importe quel canal en plus de missions, 24h/24 et 7j/7. Votre IA employé est configurée pour connaître votre entreprise et vos clients."}/>
      <SectionComponent order={0} img={"/img/Home/socialManagement/socialMedia-img.png"} number={5} subtitle={"Autres agences VS Nous"} title={'Ne perdez plus jamais une autre avance'} parapraphe={"L'IA employé vous aide à transformer les prospects de n'importe quel canal en plus de missions, 24h/24 et 7j/7. Votre IA employé est configurée pour connaître votre entreprise et vos clients."}/>
      <SectionComponetBottomTop img={"/img/Home/review.png"} number={6} subtitle={"Autres agences VS Nous"} title={<>Le seul outil d'IA dont <br /> vous aurez besoin.</>} parapraphe={"L'IA employé vous aide à transformer les prospects de n'importe quel canal en plus de missions, 24h/24 et 7j/7. Votre IA employé est configurée pour connaître votre entreprise et vos clients."}/>

     
      <AgenciesVsOurSolution/>
      <Faq/>
      <Footer/>
    
     
    </div>
  );
}
