import React from 'react'

export const Subtitle = ({number,text}) => {
  return (
    <div className='flex items-center gap mb-3'>
       <div className='w-[46px] h-[31px] relative  '>
    <div className='w-[35px] items-center flex justify-center h-full '>
        <h4 className=' text-white relative z-10'>
            {number}
        </h4>
    </div>
        <svg className='absolute top-0 left-0 ' xmlns="http://www.w3.org/2000/svg" width="46" height="31" viewBox="0 0 46 31" fill="none">
<path d="M0 4.5C0 2.29086 1.79086 0.5 4 0.5H33.1102C34.3274 0.5 35.4784 1.05424 36.2374 2.00585L45.0107 13.0058C46.1745 14.465 46.1745 16.535 45.0107 17.9942L36.2374 28.9942C35.4784 29.9458 34.3274 30.5 33.1102 30.5H4C1.79086 30.5 0 28.7091 0 26.5V4.5Z" fill="#151B37"/>
</svg>
       </div>
        <h3 className='bg-primary rounded-full px-6 py-1.5'>{text} </h3>
    </div>
  )
}
