import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

const FAQ = () => {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (index) =>
    setOpen((prevIndex) => (prevIndex === index ? null : index));

  const accordion = [
    {
      question: "What credit score do I need to apply for a credit card?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      question: "How can I apply for a credit card online?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      question: "Are there any annual fees associated with the credit card?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      question:
        "How long does it take to receive the credit card once approved?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      question: " How can I check my credit card balance and transactions?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      question: " What should I do if my credit card is lost or stolen?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
    {
      question: "Is my credit card information secure?",
      answer:
        "The required credit score may vary depending on the specific credit card. Generally, a good to excellent credit score (typically 670 or above) increases your chances of approval for premium credit cards.",
    },
  ];

  return (
    <div
      id="faq"
      className="px-[2rem] md:px-[3rem] lg:px-[12rem] lg:mt-[13rem] mt-[5rem] flex flex-col font-poppins"
    >
      <h2 className="lg:text-[40px] md:text-[35px] text-[30px] text-white font-bold text-center font-mPlus1 mb-[2rem] lg:mb-[2rem]">
        FAQ<span className="lg:text-[30px] text-[23px]">S</span>
      </h2>

      <div>
        {accordion.map((list, index) => (
          <Accordion
            className="mb-[15px]"
            key={index}
            open={open === index}
            animate={CUSTOM_ANIMATION}
            icon={open === index ? <FaMinus /> : <FaPlus />}
          >
            <AccordionHeader
              className="text-white lg:text-[22px] md:text-[20px] text-[16px] font-bold leading-6 hover:text-[#2BB32A]"
              onClick={() => handleOpen(index)}
            >
              {list.question}
            </AccordionHeader>
            <AccordionBody className="text-[#ADB2B1] lg:text-[16px] md:text-[14px] text-[12px] leading-6 ">
              {list.answer}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
