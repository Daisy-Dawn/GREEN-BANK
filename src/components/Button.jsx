import React from 'react'
import { arrow } from '../assets'

const Button = ({text}) => {
  return (
    <button className='bg-[#2BB32A] px-[25px] py-[10px] text-white flex rounded-[64px] items-center justify-center gap-2 btn-transparent'>
      <p className='text-[14px] leading-5 font-medium '> {text} </p>
      <span>
        <img className='w-[20px] ' src={arrow} alt="arrow" />
      </span>
     </button>
  )
}

export default Button