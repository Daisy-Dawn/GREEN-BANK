import React from "react";
import security from "../assets/security.png";
import pie from "../assets/pie.png";
import analytics from "../assets/analytics.png";

const Services = () => {
  const services = [
    {
      icon: security,
      title: "Security Guarantee",
      text: "Your data and funds will be securely protected.",
    },
    {
      icon: pie,
      title: "Investing",
      text: "Your data and funds will be securely protected.",
    },
    {
      icon: analytics,
      title: "Multiple Method",
      text: "Your data and funds will be securely protected.",
    },
  ];

  return (
    <div id="services" className="px-[2rem] md:px-[3rem] lg:px-[5rem] lg:mt-[10rem] mt-[7rem] justify-center flex flex-col">
      <h2 className="text-white md:text-[35px] text-[28px] font-bold text-center ">What do we offer?</h2>

      <div className="flex flex-col md:flex-row md:flex-wrap justify-between items-center mt-[2rem] lg:mt-[4rem]">
        {services.map((service, index) => (
          <div className="flex items-start gap-5 md:gap-3 lg:gap-5 p-8 md:p-3 lg:p-10 rounded-[28px] w-full md:w-[50%] lg:w-1/3 md:mb-7 lg:mb-0 service-container relative z-[1] " key={index}>
            <span className="z-10 rounded-[18px] bg-[#3D544D] p-3 md:p-2 lg:p-3">
              <img className="w-[32px] md:w-[25px] lg:w-[32px]" src={service.icon} alt="" />
            </span>
            <div className="z-10">
              <h2 className="text-white text-[20px] md:text-[18px] lg:text-[20px] font-medium ">{service.title}</h2>
              <p className=" text-[#ADB2B1] text-[16px] w-[100%] md:w-full lg:w-[80%] ">{service.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
