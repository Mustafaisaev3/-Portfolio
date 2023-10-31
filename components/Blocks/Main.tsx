'use client'

import React from 'react'
import Button from '../UI/Button'
import { BiSolidChevronRight } from 'react-icons/bi'

const Main = () => {
  return (
    <div className='w-full lg:h-screen flex items-center' id='main'>
        <div className='w-full h-auto relative p-[30px] lg:mt-[250px]'>
            <div className='w-[200px] h-[200px] md:h-[250px] md:w-[250px] lg:w-full lg:h-[250px] ml-auto mr-auto lg:ml-0 flex items-center absolute left-0 right-0 top-[-125px] lg:left-[-130px] rounded-[300px] bg-[#373b40] z-10 p-[4.2vw]'>
                <span className='w-[100%] lg:w-auto text-[#ffffff] text-[30px] lg:text-left text-center md:text-[4.2vw] font-bold lg:leading-[70px]'>Мустафа <br /> Исаев</span> 
            </div>
            <div className='flex flex-col justify-center items-center lg:block mt-[50px] md:mt-[125px] lg:mt-[125px]'>
                <div className='text-[#68e0cf] text-lg font-semibold'>Front-End Developer</div>
                <p className='w-full lg:w-[60%] pt-5 text-[#ffffff]'>
                    Привет! Меня зовут Мустафа. Я Junior Front-End Developer. Буду рад работать и развиваться вместе с Вами!
                </p>
                <div className='pt-5'>
                    <a href="#contact">
                        <Button label='Contact Me' rightIcon={BiSolidChevronRight} />
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main