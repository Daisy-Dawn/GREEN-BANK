import React from 'react'
import { card3 } from '../assets'
import Button from './Button'

const Payment = () => {
  return (
    <div id='payment' className='grid lg:grid-cols-2 grid-cols-1 lg:gap-[12rem] gap-[6rem] items-center w-full px-[2rem] md:px-[3rem] lg:px-[6rem] md:mt-[11rem] mt-[8rem]'>
      
      <div className="flex flex-1 order-2 lg:order-1 relative items-center justify-center">
        <div className="relative">
          <img className="w-[100%] h-[100%] relative z-[5]" src={card3} alt="" />

          {/* Glow effect */}
          <div className="absolute z-[1] w-[50%] h-[50%] left-14 top-0">
            <div className="w-full h-full rounded-full glow__gradient" />
          </div>
          {/* End of glow effect */}
        </div>
      </div>

      <div className='flex flex-col gap-7 w-[100%]'>
        <h2 className='font-bold text-[40px]  text-white'>Find the Perfect Credit Card for You</h2>
        <p className='text-[#ADB2B1] text-[16px] lg:w-[80%] w-[90%] leading-[24px]'>Discover your ideal credit card with ease. Our comprehensive selection caters to every financial need and lifestyle. Whether you seek cashback rewards, travel perks, or building credit, we have the perfect credit card waiting for you. Unleash the possibilities and find the credit card that fits your unique goals and aspirations.</p>
        <span className='w-[50%]'>
        <Button text="Learn More" />
        </span>
      </div>
    </div>
  )
}

export default Payment