import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import { BsInstagram } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='w-[100px] h-full flex flex-col items-center justify-end gap-5 py-[50px] border-l-[1px] border-[#585d65] fixed top-0 right-0 z-10'>
        <div className='w-[60px] h-[60px] text-[#ffffff] border border-[#585d65] rounded-full flex items-center justify-center hover:text-[#68e0cf] transition-all duration-300 cursor-pointer'>
            <FaTelegramPlane size={20} />
        </div>
        <div className='w-[60px] h-[60px] text-[#ffffff] border border-[#585d65] rounded-full flex items-center justify-center hover:text-[#68e0cf] transition-all duration-300 cursor-pointer'>
            <BiLogoGmail size={20} />
        </div>
        <div className='w-[60px] h-[60px] text-[#ffffff] border border-[#585d65] rounded-full flex items-center justify-center hover:text-[#68e0cf] transition-all duration-300 cursor-pointer'>
            <BsInstagram size={20} />
        </div>
    </div>
  )
}

export default Sidebar