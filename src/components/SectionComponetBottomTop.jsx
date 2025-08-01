import React, { useState } from "react";
import { MultiBouton } from './MultiBouton'
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";

export const SectionComponetBottomTop = ({ img, title, parapraphe, subtitle, number }) => {
    const boutonList = ["Répondre avec l’IA", "Planificateur IA"];
    const [isBoutonSelected, setIsBoutonSelected] = useState(boutonList[0]);
    return (
        <section className=" w-full px-4 md:px-16 lg:px-24 xl:px-40 2xl:px-52">
            <div className="flex flex-col items-center justify-center">
                <Subtitle number={number} text={subtitle} />
          <Title title={title} center={true} />
            </div>

            <div className="w-full flex flex-col items-center">
         
                    <div className="flex w-full  flex-col items-center justify-center mt-8">
                        <img className="w-full " src={img} alt="" />
                        <p className="mt-10 text-center xl:text-lg md:w-[600px] lg:w-[800px] ">
                            {parapraphe}
                        </p>
                    </div>
              


            </div>

        </section>
    )
}
