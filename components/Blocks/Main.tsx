'use client'

import React from 'react'
import Button from '../UI/Button'
import { BiSolidChevronRight } from 'react-icons/bi'

const Main = () => {
  return (
    <div className='w-full h-screen flex items-center' id='main'>
        <div className='w-full h-auto relative p-[30px] mt-[250px]'>
            <div className='w-full h-[250px] flex items-center absolute top-[-125px] left-[-130px] rounded-[300px] bg-[#373b40] z-10'>
                <span className='pl-[50px] text-[#ffffff] text-[40px] font-bold leading-[50px]'>Мустафа <br /> Исаев</span> 
            </div>
            <div className='mt-[125px]'>
                <div className='text-[#68e0cf] text-lg font-semibold'>Front-End Developer</div>
                <p className='w-[60%] pt-5 text-[#ffffff]'>
                    Hello! I am Web Developer from United States, New York. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique.
                </p>
                <div className='pt-5'>
                    <Button label='Contact Me' rightIcon={BiSolidChevronRight} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main