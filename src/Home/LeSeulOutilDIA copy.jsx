import React, { useState } from "react";
import { MultiBouton } from "../components/MultiBouton";

export const LeSeulOutilDIA = () => {
  const boutonList = ["Liens magique", "Liens magiques"];
  const [isBoutonSelected, setIsBoutonSelected] = useState(boutonList[0]);

  return (
    <section className="bg-primry w-full flex-col flex items-center justify-center gap-16 lg:gap-32  px-4 md:px-24 py-12 md:py-38">
      
      <h2 className="font-oldschol font-bold px-4 text-[24px] md:text-[52px] leading-[90%] sm:text-[34px] lg:text-[64px] text-center">
        Le seul outil d'IA dont <br /> vous aurez besoin.
      </h2>

      <div className="w-full flex flex-col items-center">
        <MultiBouton isBoutonSelected={isBoutonSelected}  setIsBoutonSelected={setIsBoutonSelected} boutonList={boutonList} />
      {isBoutonSelected === boutonList[0] ? (
        <div className=" mr-2 shadow-[10px_10px_0_0_black] border-3 rounded-lg p-12  md:w-2xl space-y-4 mt-8">
          <div className="flex justify-start items-end gap-2">
            <div className="w-[45px] h-[45px] bg-primary flex justify-center items-center rounded-md">
              <p>BT</p>
            </div>
            <div className="bg-gray-300 rounded-md p-4 w-full md:w-[424px]">
              <p>Hi, I’m looking for an estimate on a new heater.</p>
            </div>
          </div>

          <div className="flex justify-end items-end gap-2">
            <div className="bg-black text-white rounded-md p-4 w-full md:w-[424px]">
              <p>
                Hi there, we can definitely get you an estimate on a new
                furnace! Do you know what size your current one is?
              </p>
            </div>
            <div className="w-[45px] h-[45px] bg-primary flex justify-center items-center rounded-md">
              <p>BT</p>
            </div>
          </div>
        </div>
      ): (
         <div className=" mr-2 shadow-[10px_10px_0_0_black] border-3 rounded-lg p-12  md:w-2xl space-y-4 mt-8">          
          Page 2
        </div>
      )}
        
       
        <p className="mt-10">L'IA employé vous aide à transformer les prospects de n'importe quel canal en plus de missions, 24h/24 et 7j/7. Votre IA employé est configurée pour connaître votre entreprise et vos clients.</p>
      </div>
    </section>
  );
};
