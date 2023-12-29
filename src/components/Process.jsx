import React from 'react'
import Button from './Button'
import { card2 } from '../assets'

const Process = () => {
  return (
    <div id='process' className='grid lg:grid-cols-2 grid-cols-1 lg:gap-0 gap-[4rem] items-center px-[2rem] md:px-[3rem] lg:px-[6rem] mt-[6rem]'>
      <div className='flex flex-col gap-7 md:w-[80%] w-[90%]'>
        <h2 className='font-bold md:text-[40px] text-[33px] leading-[40px] text-white'>Design your personalized credit card.</h2>
        <p className='text-[#ADB2B1] text-[16px] w-[80%] leading-[24px]'>You have the freedom to personalize the design of your credit card, ensuring a truly unique experience that makes you feel extraordinary</p>
        <span className='xl:w-[50%] lg:w-[70%] w-[80%]'>
        <Button text="Create New Card" />
        </span>
      </div>


      <div className="flex flex-1 relative items-center justify-center">
        <div className="relative">
          <img className="w-[100%] h-[100%] relative z-[5]" src={card2} alt="" />

          {/* Glow effect */}
          <div className="absolute z-[1] w-[50%] h-[50%] left-[7rem] top-0">
            <div className="w-full h-full rounded-full glow__gradient" />
          </div>
          {/* End of glow effect */}
        </div>
      </div>

      
    </div>
  )
}

export default Process