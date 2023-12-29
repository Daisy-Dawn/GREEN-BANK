import React from "react";
import { quote } from "../assets";

const Card = ({ text, image, name, occupation }) => {
  return (
    <div className="lg:py-[30px] xl:py-[48px] py-[20px] lg:px-[24px] px-[20px] flex flex-col justify-center item-start gap-[1rem] lg:gap-[2rem] rounded-[32px] bg-card ">
      <span className="lg:p-[16px] p-[10px] lg:rounded-[56px] rounded-[20px] bg-[#3D544D] flex items-center justify-center lg:w-[56px] w-[40px] lg:h-[56px] ">
        <img className="lg:w-[24px] w-[18px] h-[18px] lg:h-[24px]" src={quote} alt="quote" />
      </span>

      <h2 className="text-white leading-6 text-[15px] lg:text-[16px] "> {text} </h2>

      <div className="flex gap-3">
        <img className="w-[35px] h-[35px] lg:w-[48px] lg:h-[48px]" src={image} alt="" />

        <div className="flex flex-col">
          <h2 className="text-white font-medium leading-6 tracking-[-0.32px] text-[14px] lg:text-[16px]"> {name} </h2>
          <p className="text-[#ADB2B1] leading-[20px] text-[10px] lg:text-[12px]"> {occupation} </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
