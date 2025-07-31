import React from "react";
import { Subtitle } from "../components/Subtitle";

export const AgenciesVsOurSolution = () => {
  const optionList = [
   
    {
      name:'Agencies',
      icon: "x",
      list: [
        "Lengthy contracts: 3-4 months.",
        "Zero trial period.",
        "Expensive: $2,000+/month.",
        "Lead generation service.",
        // "Limited online presence growth.",
        "Get You More 'Leads'"
      ],
    },
     {
      name:'Sordulo',
      icon: "check",
      list: [
        "Pas de contrats",
        "7-day free trial",
        "Affordabble : 297€/mois",
        "Appointment generation solution.",
        "Grow your online presence",
      ],
    },
  ];

  return (
    <section
      className={`bg-primary-50 flex-col flex items-center justify-center gap-12  px-4 md:px-24 py-12 md:py-38`}
    >
      <div>

      <Subtitle number={5} text={"Agencies Vs Our Solution"} />
      <h2
        className={`font-oldschol font-bold px-4 text-[24px] md:text-[52px]  leading-[90%] sm:text-[34px] lg:text-[64px] text-center`}
        >
       Nous prenons soin <br /> de vos projets.
      </h2>
        </div>
      <div className="flex  flex-col sm:flex-row  gap-4">
  {optionList.map((item, index) => (
   
   <div key={index} className={`${item.name === "Sordulo" ? "bg-secondary text-primary" : ""} p-7 border-dark flex h-fit w-full sm:w-fit items-start gap-10 flex-col border-4 shadow-[0px_10px_0_0_#151B37]   mr-2 rounded-xl`}>
      <div className="w-full h-fit flex items-center gap-2 border-dark pb-">
        {item.name === "Sordulo" && (
        <img className="h-full" src="/img/Logo/orange.svg" alt="Sordulo Logo" />
        )}

        <h3 className="text-2xl font-bold">{item.name}</h3>
      </div>
      <div className="flex flex-col gap-2 w-full items-start">

    
      {item.list.map((text, i) => (
        <div key={i} className=" flex items-center justify-center gap-4">
          
          <div className={`flex p-1 rounded-full text-white ${item.icon === "check" ? "bg-green-500" : "bg-red-500"}`}>
            {item.icon === "check" ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </div>
          <p className="flex  items-center justify-center mt-1">{text}</p>
        </div>
      ))}
    </div>
      </div>
  ))}
</div>
    </section>
  );
};
