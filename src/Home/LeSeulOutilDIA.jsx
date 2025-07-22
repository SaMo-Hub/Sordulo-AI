import React, { useState } from "react";
import { MultiBouton } from "../components/MultiBouton";
import bulleText from "/img/Home/bulle-texte.svg";
export const LeSeulOutilDIA = () => {
    const boutonList = ["Répondre avec l’IA", "Planificateur IA"];
  const [isBoutonSelected, setIsBoutonSelected] = useState(boutonList[0]);

  return (
    <section className=" w-full   p-4 md:p-12">
      <div className="w-it bg-white p-4  md:px-24 py-12 md:py-24  pt-10  rounded-lg flex-col flex items-center justify-center gap-16 lg:gap-32">
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
          <div className=" mr-2 shadow-[10px_10px_0_0_black] border-3 rounded-lg p-8 sm:p-12 w-fit sm:w-xl md:w-2xl space-y-4 mt-8">
            <div className="flex w-[80  gap-12 sm:w-full">
              <div className="
                           shadow-[5px_5px_0_0_black]  sm:shadow-[8px_8px_0_0_black]   md:shadow-[10px_10px_0_0_black] border-3

              flex bg-gray-00 p-2  h-full rounded-xl justify-start items-start gap-2">
                <div className="min-w-[80px] h-[80px] bg-primary flex justify-center items-center rounded-md">
                  <p>BT</p>
                </div>
                <p className=" pt-2">
                  Hi, I’m looking for an estimate on a new heater.
                </p>
              </div>
              <img
                className="hidden sm:block  h-fit rotate-180 w-2/9 pb-[2rem]"
                src={bulleText}
                alt=""
              />
            </div>
            <div className="flex  gap-12 relative justify-end ">
              <img
                className="hidden sm:block  h-fit w-2/9"
                src={bulleText}
                alt=""
              />
              <div className="
             shadow-[5px_5px_0_0_black]  sm:shadow-[8px_8px_0_0_black]   md:shadow-[10px_10px_0_0_black] border-3
              flex  w-] sm:w-full relative mt-8 bg-primary p-2 h-full rounded-xl justify-start items-start gap-2">
                <p className="pl-2 pt-2">
                  Hi, I’m looking for an estimate on a new heater.
                </p>
                <img className="min-w-[80px] h-[80px]" src="/logo-black-orange.svg" alt="" />
               
              </div>
            </div>
          </div>
        ) : (
          <div className=" mr-2 shadow-[10px_10px_0_0_black] border-3 rounded-lg p-12  md:w-2xl space-y-4 mt-8">
            Page 2
          </div>
        )}

        <p className="mt-10 w-[80%]">
          L'IA employé vous aide à transformer les prospects de n'importe quel
          canal en plus de missions, 24h/24 et 7j/7. Votre IA employé est
          configurée pour connaître votre entreprise et vos clients.
        </p>
      </div>
     </div>
    </section>
      
  );
};
