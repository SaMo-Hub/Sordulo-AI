import React, { useState } from "react";
import { MultiBouton } from './MultiBouton'
import { Subtitle } from "./Subtitle";
import { Title } from "./Title";

export const SectionComponetBottomTop = ({ img, title, parapraphe, subtitle, number,part }) => {
    const boutonList = ["Répondre avec l’IA", "Planificateur IA"];
    const [isBoutonSelected, setIsBoutonSelected] = useState(boutonList[0]);
    return (
        <section className=" w-full px-4 md:px-16 lg:px-24 xl:px-40 2xl:px-52">
            <div className="flex flex-col items-center justify-center">
                <Subtitle number={number} text={subtitle} />
          <Title title={title} center={true} />
            </div>

            {/* <div className="w-full flex flex-col items-center">
         
                    <div className="flex w-full  flex-col items-center justify-center mt-8">
                        <img className="w-full " src={img} alt="" />
                        <p className="mt-10 text-center xl:text-lg md:w-[600px] lg:w-[800px] ">
                            {parapraphe}
                        </p>
                    </div>
              


            </div> */}
            {part === 1 ? (
                 <div  className={`w-full overflow-hidden bg-primary-50 py-12 pr-25 pl-17 flex items-center    justify-center rounded-3xl border-4 border-dark shadow-[0_5px_0_0_black]`}>
          <div className="relative w-fit ">
            <img className="z-10 w-auto absolute left-0 top-0" style={{animation: 'rotate 3.5s ease-in-out infinite', animationDelay: '0s'}} src="/img/Home/respondPhoneText/topl.png" alt="" />
            <img className="z-10 absolute  right-0 top-0" style={{animation: 'rotatePlus 3.5s ease-in-out infinite',animationDelay: '0s'}} src="/img/Home/respondPhoneText/topr.png" alt="" />
            <img className="z-10 absolute bottom-35 left-0" style={{animation: 'moveRight 3.5s ease-in-out infinite'}} src="/img/Home/respondPhoneText/midl.png" alt="" />
            <img className="z-10 absolute bottom-35 right-0" style={{animation: 'moveLeft 3.5s ease-in-out infinite',}} src="/img/Home/respondPhoneText/midr.png" alt="" />
            <img className="z-10 absolute bottom-0 left-0" style={{animation: 'rotatePlus 3.5s ease-in-out infinite',animationDelay: '0s'}} src="/img/Home/respondPhoneText/botl.png" alt="" />
            <img className="z-10 absolute bottom-0 right-0" style={{animation: 'rotate 3.5s ease-in-out infinite',animationDelay: '0s'}} src="/img/Home/respondPhoneText/botr.png" alt="" />
            <img className="z-0 relative" style={{animation: 'rotateFull 3.5s ease-in-out infinite', }} src="/img/Home/respondPhoneText/stardulo.png" alt="" />
          </div>
        </div>
            ) : (

 <div  className={`w-full overflow-hidden bg-primary-50 py-12 pr-25 pl-17 rounded-3xl border-4 border-dark shadow-[0_5px_0_0_black]`}>
          <div className="relative flex items-center    justify-center">
            <img className="z-10 w-auto absolute right-0 bottom-9" style={{animation: 'float 3.5s ease-in-out infinite', animationDelay: '0s'}} src="/img/Home/review/feedback.png" alt="" />
            <img className="z-10 absolute bottom-0 left-0" style={{animation: 'float 3.5s ease-in-out infinite', animationDelay: '1s'}} src="/img/Home/review/couldtobetter.png" alt="" />
            <img className="z-0" style={{animation: 'float 3.5s ease-in-out infinite', animationDelay: '2s'}} src="/img/Home/review/recommend.png" alt="" />
          </div>
        </div>
            )}


        </section>
    )
}
