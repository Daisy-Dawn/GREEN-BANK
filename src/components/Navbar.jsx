import React, {useState} from 'react';
import { logo } from '../assets';
import { BsFillMenuButtonWideFill } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

const Navbar = () => {
  const [active, setActive] = useState("Why Us")
  const [toggle, setToggle] = useState(false)

  const navLinks = [
    {
      id: "home",
      text: "Why Us",
    },
    {
      id: "services",
      text: "Services",
    },
    {
      id: "process",
      text: "Our Process",
    },
    {
      id: "payment",
      text: "Payments",
    },
    {
      id: "faq",
      text: "FAQs", 
    },
  ]
  return (
    <div className='flex justify-between items-center px-[2rem] md:px-[3rem] lg:px-[5rem]'>
      <div>
        <img className='lg:w-full w-[120px]' src={logo} alt="" />
      </div>

      <ul className='list-none md:flex hidden justify-between items-center gap-5 text-[16px] '>
        {navLinks.map((link) => (
          <li key={link.id} className={`text-white hover:text-[#2BB32A] font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${active === link.text ? "text-emerald-500" : "text-white"}`}
          onClick={() => setActive(link.text)}>
            <a href={`#${link.id}`}> {link.text} </a>
          </li>
        ))}
      </ul>

      <button className=' hidden md:flex btn-transparent bg-transparent rounded-[64px] py-[10px] px-[20px] text-[14px] font-bold leading-5 border-2 text-[#2BB32A] border-[#2BB32A] '>Contact</button>

          {/* responsiveness */}
      <div className='flex md:hidden flex-1 justify-end items-center z-10'>
      <span className='text-[#2BB32A]' onClick={() => setToggle(!toggle)}> {toggle ? <GrClose className='cursor-pointer' size={28} /> : <BsFillMenuButtonWideFill className='cursor-pointer' size={25} />} </span>

      <div className={`${!toggle ? "hidden" : "flex" }  px-8 flex-col py-6 absolute top-20 bg-[#1A1E1C] right-0 mx-8 my-2 min-w-[50%] rounded-xl sidebar`}>
      <ul className='list-none text-[14px] cursor-pointer gap-8 flex flex-col flex-1 items-start justify-end '>
        {navLinks.map((link) => (
          <li key={link.id} className={`text-white hover:text-[#2BB32A] font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ${active === link.text ? "text-emerald-300" : "text-white"}`}
          onClick={() => setActive(link.text)}>
            <a href={`#${link.id}`}> {link.text} </a>
          </li>
        ))}
      </ul>

      <button className='flex justify-center items-center text-center btn-transparent mt-6 bg-transparent rounded-[64px] lg:py-[10px] py-[8px] lg:px-[20px] px-[10px] text-[14px] font-bold leading-5 border-2 text-[#2BB32A] border-[#2BB32A] '>Contact</button>
      </div>
      
      </div>
    </div>
  )
}

export default Navbar