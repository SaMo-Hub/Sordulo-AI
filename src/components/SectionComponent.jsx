import React from 'react'
import { Subtitle } from '../components/Subtitle'

export const SectionComponent = ({ order, img, title, parapraphe, subtitle, number }) => {
  return (
    <section className="grid md:grid-cols-2 justify-center wfull itms-center bg-ble-500 gap-12 px-4 md:px-24 py-12 md:py-38">
      <img className={`${order === 0 ? 'order-2' : 'order-2 md:order-1'} w-full`} src={img} alt={title} />
      <div className={`${order === 0 ? 'order-1' : 'order-1 md:order-2'} flex flex-col items-center md:items-baseline`}>
        <Subtitle number={number} text={subtitle} />
        <h2 className='font-bold  text-3xl md:text-3xl lg:text-5xl xl:text-6xl'>{title}</h2>
        <p className='mx-22 md:mx-0 mt-4 md:mt-6 xl:text-lg text-center md:text-start'>{parapraphe}</p>
      </div>
    </section>
  )
}
{ }