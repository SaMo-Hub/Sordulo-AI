import React, { useState } from "react";
import { MultiBouton } from "../components/MultiBouton";
import bulleText from "/img/Home/bulle-texte.svg";
export const LeSeulOutilDIA = () => {
    const boutonList = ["Répondre avec l’IA", "Planificateur IA"];
  const [isBoutonSelected, setIsBoutonSelected] = useState(boutonList[0]);

  return (
    <section className=" w-full   p-4 md:p-12">
      <h2 className="font-oldschol font-bold px-4 text-[24px] md:text-[52px] leading-[90%] sm:text-[34px] lg:text-[64px] text-center">
        Le seul outil d'IA dont <br /> vous aurez besoin.
      </h2>

      <div className="w-full flex flex-col items-center">
        <MultiBouton
          isBoutonSelected={isBoutonSelected}
          setIsBoutonSelected={setIsBoutonSelected}
          boutonList={boutonList}
        />
        {isBoutonSelected === boutonList[0] ? (
      <div className="flex flex-col items-center justify-center mt-8">
            <img src="/img/Home/outilsIA.svg" alt="" />
            <p className="mt-10 text-center w-[600px]">
          L'IA employé vous aide à transformer les prospects de n'importe quel
          canal en plus de missions, 24h/24 et 7j/7. Votre IA employé est
          configurée pour connaître votre entreprise et vos clients.
        </p>
          </div>
        ) : (
          <div className=" mr-2 shadow-[10px_10px_0_0_black] border-3 rounded-lg p-12  md:w-2xl space-y-4 mt-8">
            Page 2
          </div>
        )}

        
      </div>
  
    </section>
      
  );
};
