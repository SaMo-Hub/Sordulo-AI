import React from 'react'

export const Title = ({title, center}) => {
  return (
           <h2 className={`${center ? "text-center" :"text-center md:text-start mx-12 sm:mx-32 md:mx-0  "} font-bold  text-3xl sm:text-4xl md:text-5xl xl:text-5xl 2xl:text-6xl`}>{title}</h2>

  )
}
