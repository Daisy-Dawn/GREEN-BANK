import React from "react";
import { logo } from "../assets";

const Footer = () => {
  const footer1 = [
    {
      head: "About Us",
      text: ["Investors", "Features", "Book a demo", "Security"],
    },
    {
      head: "Products",
      text: ["Credits Cards", "Gift Cards", "Savings accounts", "NFT"],
    },
    {
      head: "Useful Links",
      text: ["Free Rewards", "Documentation", "Affiliate Program"],
    },
    {
      head: "Social",
      text: ["Changelog", "License", "Site Maps", "News"],
    },
  ];

  return (
    <div className="lg:px-[5rem] px-[2rem] pt-[5rem] footer-bg">
    <div className="flex flex-col md:flex-row lg:gap-[4rem] md:gap-[3.5rem] gap-[2.3rem] items-start justify-start">
      <div className="lg:w-[30%] md:w-[70%] w-full flex flex-col gap-[1rem]">
        <img src={logo} className="w-[120px]" alt="" />
        <p  className="text-[#ADB2B1] text-[16px] leading-6 tracking-[-0.48px] w-[70%] md:w-[90%] lg:w-[70%]">Discover the power of our secure and rewarding credit cards</p>
      </div>

      <div className="grid lg:grid-cols-4 grid-cols-2 lg:gap-4 gap-1 lg:w-[70%] w-full mb-[3rem]">
        {footer1.map((link, index) => (
          <div key={index}>
            <h2 className="text-white hover:text-[#2BB32A] cursor-pointer lg:text-[16px] text-[13px] mt-[10px] lg:mt-[0] font-bold leading-6 mb-[18px]"> {link.head} </h2>
            <div className="flex flex-col gap-[2px]">
              {link.text.map((item, itemIndex) => (
                <p className="text-[#ADB2B1] hover:text-[#2BB32A] text-[13px] lg:text-[16px] cursor-pointer leading-6 xl:mb-[16px] lg:mb-[10px] mb-[5px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300" key={itemIndex}>{item}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
      </div>

      <div className="flex md:flex-row flex-col  justify-between pb-[3rem] items-center ">
        <p className="text-[#ADB2B1] text-[12px] leading-5">Copyright 2024 <span className="text-[#2BB32A] cursor-pointer">Daisy Dawn Cooperation</span> All Rights Reserved</p>
        <p className="text-[#ADB2B1] text-[12px] leading-5">This page uses cookies. See cookies details here </p>
      </div>
    </div>
  );
};

export default Footer;
