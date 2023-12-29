import React from "react";
import Button from "./Button";
import { card, cardVector, users } from "../assets";

const Hero = () => {
  return (
    <section
      id="home"
      className="grid lg:grid-cols-2 grid-cols-1 gap-[4rem] lg:gap-2 pl-[2rem] md:pl-[3rem] lg:pl-[5rem] mt-[4rem] lg:mt-[8rem]"
    >
      <div className="md:w-[80%] w-[90%] relative">
        <h2 className="xl:text-[52px] md:text-[50px] text-[38px] text-white font-bold md:leading-[65px] leading-[50px] tracking-[-1.4px] mb-[27px]">
          Discover the Perfect Credit Card for You
        </h2>
        <p className=" text-[#ADB2B1] text-[18px] leading-6 w-[80%] mb-[40px] ">
          Discover the power of our secure and rewarding credit cards. Explore
          our range of credit cards and take control of your finances today.
        </p>
        <img
          src={cardVector}
          className="absolute lg:top-[60px] xl:top-[15px] md:top-[20px] sm:top-[-10px] top-[80px] w-[90%] md:w-[70%] lg:w-[90%] "
          alt=""
        />
        <div className="mb-[40px]">
          <Button text="Get Started" />
        </div>

        <div className="flex items-center gap-5">
          <img className="xl:w-[120px]  w-[100px]" src={users} alt="" />
          <div>
            <h2 className="text-white xl:text-[18px] lg:text-[16px] font-bold leading-6 ">
              10.2k+
            </h2>
            <p className="text-[#ADB2B1] xl:text-[14px] text-[13px] leading-5 ">
              Active users around the world
            </p>
          </div>
        </div>
      </div>

      {/* <div className='flex flex-1 relative items-center justify-center'>
        <img className=' w-[100%] h-[100%] relative z-[5]' src={card} alt="" />

/        <div className="absolute z-[1] w-[50%] h-[50%] rounded-full green__gradient top-2" />
      </div> */}

      <div className="flex flex-1 relative items-center justify-center">
        <div className="relative">
          <img className="w-[100%] h-[100%] relative z-[5]" src={card} alt="" />

          {/* Glow effect */}
          <div className="absolute z-[1] w-[50%] h-[50%] left-14 top-0">
            <div className="w-full h-full rounded-full glow__gradient" />
          </div>
          {/* End of glow effect */}
        </div>
      </div>
    </section>
  );
};

export default Hero;
