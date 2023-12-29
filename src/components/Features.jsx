import React from 'react'
import { dell, nyt, petal, rakuten, upwork, vice } from '../assets'

const Features = () => {
  const featuresList = [
    {
      number: '16y',
      text: 'Experience'
    },
    {
      number: '250+',
      text: 'Merchant Partner'
    },
    {
      number: '18+',
      text: 'Years Experience'
    },
    {
      number: '10.2k+',
      text: 'Worldwide Clients'
    },
  ]
  return (
    <div className='flex flex-col px-[1rem] md:px-[3rem] lg:px-[5rem] lg:mt-[13rem] mt-[6rem]'>
    {/* flex-col lg:flex-row  */}
      <div className='features-bg xl:mx-[4rem] mx-[1rem] mb-[8rem] xl:p-[70px] md:p-[50px] p-[20px] flex justify-between items-start text-center '>
      {featuresList.map((feature, index) => (
        <div key={index}>
          <h2 className='text-white font-bold xl:text-[45px] md:text-[35px] sm:text-[30px] text-[1.2rem] leading-[56px] tracking-[-0.32px] '> {feature.number} </h2>
          <p className='text-[#2BB32A] font-medium xl:text-[16px] sm:text-[15px] text-[12px]'> {feature.text} </p>
        </div>
      ))}
  
      </div>

      <div className='flex flex-wrap gap-[25px] lg:gap-0 flex-row justify-center lg:justify-between items-center'>
        <img className='lg:w-[105px] w-[70px] order-1 '  src={upwork} alt="" />
        <img className='lg:w-[90px] w-[60px] order-2'  src={petal} alt="" />
        <img className='lg:w-[107px] w-[80px] order-3'  src={rakuten} alt="" />
        <img className='lg:w-[236px] w-[190px] order-6 lg:order-4'  src={nyt} alt="" />
        <img className='lg:w-[101px] w-[70px] order-5'  src={vice} alt="" />
        <img className='lg:w-[100px] w-[70px] order-4 lg:order-6'  src={dell} alt="" />
      </div>
    </div>
  )
}

export default Features