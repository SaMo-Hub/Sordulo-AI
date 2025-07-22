import React from "react";

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
      className={`bg-primary flex-col flex items-center justify-center gap-12  px-4 md:px-24 py-12 md:py-38`}
    >
      <h2
        className={`font-oldschol font-bold px-4 text-[24px] md:text-[52px]  leading-[90%] sm:text-[34px] lg:text-[64px] text-center`}
      >
        Agencies Vs Our Solution
      </h2>
      <div className="flex  flex-col sm:flex-row  gap-4">
  {optionList.map((item, index) => (
   
   <div key={index} className="flex h-fit w-full sm:w-fit items-start gap-3 flex-col border-3 shadow-[10px_10px_0_0_black] py-5   mr-2 rounded-lg bg-white">
      <div className="w-full flex items-center justify-center pb-5 border-b-2 ">
        <h3 className=" font-bold">{item.name}</h3>
      </div>
      {item.list.map((text, i) => (
        <div key={i} className="px-5 flex items-center justify-center gap-4">
          
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
          <p className="flex items-center justify-center mt-1">{text}</p>
        </div>
      ))}
    </div>
  ))}
</div>
    </section>
  );
};
