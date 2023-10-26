import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { BiLogoGmail } from 'react-icons/bi'
import { BsGithub } from 'react-icons/bs'

const Sidebar = () => {
  return (
    <div className='w-[100px] h-full flex flex-col items-center justify-end gap-5 py-[50px] border-l-[1px] border-[#585d65] fixed top-0 right-0 z-10'>
        <a href="https://telegram.me/MustafaIsaev6" target="_blank" >
            <div className='w-[60px] h-[60px] text-[#ffffff] border border-[#585d65] rounded-full flex items-center justify-center hover:text-[#68e0cf] transition-all duration-300 cursor-pointer'>
                <FaTelegramPlane size={20} />
            </div>
        </a>
        <a href="mailto:isaevmustafa96@gmail.com" target="_blank" >
            <div className='w-[60px] h-[60px] text-[#ffffff] border border-[#585d65] rounded-full flex items-center justify-center hover:text-[#68e0cf] transition-all duration-300 cursor-pointer'>
                <BiLogoGmail size={20} />
            </div>
        </a>
        <a href="https://github.com/Mustafaisaev3" target="_blank" >
            <div className='w-[60px] h-[60px] text-[#ffffff] border border-[#585d65] rounded-full flex items-center justify-center hover:text-[#68e0cf] transition-all duration-300 cursor-pointer'>
                <BsGithub size={20} />
            </div>
        </a>
    </div>
  )
}

export default Sidebar