import React from 'react'
import { Subtitle } from '../components/Subtitle'

export const SectionComponent = ({order,img,title, parapraphe, subtitle, number}) => {
  return (
    <section className="grid md:grid-cols-2 itms-center gap-12 px-4 md:px-24 py-12 md:py-38">
        <img className={`${order === 0 ? 'order-2' : 'order-2 md:order-1'}`} src={img} alt={title} />
        <div className={`${order === 0 ? 'order-1' : 'order-1 md:order-2'}`}>
          <Subtitle number={number} text={subtitle} />
            <h2 className='font-bold  text-3xl md:text-3xl lg:text-5xl'>{title}</h2>
            <p className='mt-4 md:mt-6'>{parapraphe}</p>
        </div>
    </section>
  )
}
{}