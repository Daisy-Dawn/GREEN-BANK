import React from 'react'
import { phone } from '../assets'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa6";

const Download = () => {
  return (
    <div className='grid lg:grid-cols-2 grid-cols-1 xl:gap-[10rem] lg:gap-[3rem] gap-[5rem] items-center px-[2rem] md:px-[3rem] lg:px-[6rem] mt-[6rem] lg:mt-[10rem]'>
      <div className='flex flex-col gap-[2.2rem] w-[100%]'>
        <h2 className='font-bold xl:text-[48px] lg:text-[40px]  md:text-[45px] text-[38px] text-white md:leading-[56px] leading-[45px] font-poppins'>Easy Way to manage your finances</h2>
        <p className='text-[#ADB2B1] text-[18px] tracking-[-0.54px] md:w-[80%] w-[90%] leading-[24px]'>Easy to use mobile app that support on android and ios.</p>
        
        <div className='flex gap-5'>
          <div className='flex cursor-pointer bg-[#3D544D] hover:bg-[#3d525473] rounded-[16px] justify-center items-center gap-2 text-white md:p-[16px] p-[10px] '>
            <span className='md:text-[25px] text-[20px] '>
              <FaApple />
            </span>
            <div className='flex flex-col gap-0 font-poppins'>
              <p className='md:text-[12px] lg:text-[10px] xl:text-[12px] text-[9px]  '>Download on the</p>
              <h2 className='font-semibold xl:text-[20px] md:text-[18px] text-[13px] md:leading-5 leading-4'>App Store</h2>
            </div>
          </div>

          <div className='flex cursor-pointer bg-[#3D544D] hover:bg-[#3d525473] rounded-[16px] justify-center items-center gap-2 text-white md:p-[16px] p-[10px] '>
            <span className='md:text-[25px] text-[20px] '>
              <FaGooglePlay/>
            </span>
            <div className='flex flex-col gap-0 font-poppins'>
              <p className='md:text-[12px] lg:text-[10px] xl:text-[12px] text-[9px] '>GET IT ON</p>
              <h2 className='font-semibold xl:text-[20px] md:text-[18px] text-[13px] md:leading-5 leading-4'>Google Play</h2>
            </div>
          </div> 

        </div>
      </div>

      <div className="flex flex-1 relative items-center justify-center">
        <div className="relative">
          <img className="w-[100%] h-[100%] relative z-[5]" src={phone} alt="" />

          {/* Glow effect */}
          <div className="absolute z-[1] w-[50%] h-[50%] left-20 top-0">
            <div className="w-full h-full rounded-full glow__gradient" />
          </div>
          {/* End of glow effect */}
        </div>
      </div>

      
    </div>
  )
}

export default Download