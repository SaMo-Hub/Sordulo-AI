import React from "react";

export const ConcuePourReserver = () => {
  return (
  <section className={`bg-primary flex-col flex items-center justify-center gap-32  px-4 md:px-24 py-12 md:py-38`}>
      <h2
        className={`font-oldschol font-bold px-4 text-[24px] md:text-[52px]  leading-[90%] sm:text-[34px] lg:text-[64px] text-center`}
      >
        L'IA CSR conçue pour <br /> réserver plus d'emplois.
      </h2>
      <div className="flex">
        <div className=" shadow-[10px_10px_0_0_black] mr-2 bg-white px-24 py-16 rounded-2xl border-4 gap-12  flex flex-col items-center justify-center text-center">

            <div className="flex flex-col gap-5">
                <h3 className="font-oldschol font-bold text-4xl">
                    Ne manquez plus <br /> jamais un appel.
                </h3>
                <p>
                    Avec votre employé IA, chaque appel est <br /> répondu, même lorsque vous êtes en <br /> déplacement ou au téléphone avec un <br /> autre client.
                </p>
            </div>
            <img className="w-"  src="/img/Home/AppelStardullo.svg" alt="" />
        </div>
       
      </div>
    </section>
  );
};
