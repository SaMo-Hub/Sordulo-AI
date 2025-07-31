import React, { useState } from "react";
import { MultiBouton } from './MultiBouton'
import { Subtitle } from "./Subtitle";

export const SectionComponetBottomTop = ({ img, title, parapraphe, subtitle, number }) => {
    const boutonList = ["Répondre avec l’IA", "Planificateur IA"];
    const [isBoutonSelected, setIsBoutonSelected] = useState(boutonList[0]);
    return (
        <section className=" w-full   p-4 md:p-12">
            <div className="flex flex-col items-center justify-center">
                <Subtitle number={number} text={subtitle} />
            <h2 className="font-oldschol font-bold px-4 text-[24px] md:text-[52px] leading-[90%] sm:text-[34px] lg:text-[64px] text-center">
               {title}
            </h2>
            </div>

            <div className="w-full flex flex-col items-center">
         
                    <div className="flex flex-col items-center justify-center mt-8">
                        <img src={img} alt="" />
                        <p className="mt-10 text-center w-[600px]">
                            {parapraphe}
                        </p>
                    </div>
              


            </div>

        </section>
    )
}
