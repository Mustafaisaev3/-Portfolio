'use client'

import React from 'react'
import Button from '../UI/Button'
import { BiSolidChevronRight } from 'react-icons/bi'

const Main = () => {
  return (
    <div className='w-full md:h-screen lg:h-screen flex items-center' id='main'>
        <div className='w-full h-auto relative p-[30px]  md:mt-[250px] lg:mt-[250px]'>
            <div className='w-[200px] h-[200px] md:w-full md:h-[250px] lg:w-full lg:h-[250px] ml-auto mr-auto md:ml-0 lg:ml-0 flex items-center absolute left-0 right-0 top-[-125px] md:left-[-130px] lg:left-[-130px] rounded-[300px] bg-[#373b40] z-10 p-[4.2vw]'>
                <span className='w-[100%] md:w-auto text-[#ffffff] text-[30px] md:text-left text-center md:text-[4.2vw] font-bold md:leading-[70px]'>Мустафа <br /> Исаев</span> 
            </div>
            <div className='flex flex-col justify-center items-center md:block lg:block mt-[50px] md:mt-[125px] lg:mt-[125px]'>
                <div className='text-[#68e0cf] text-lg font-semibold'>Front-End Developer</div>
                <p className='w-full md:w-[60%] lg:w-[60%] pt-5 text-[#ffffff]'>
                    Привет! Меня зовут Мустафа. Я Junior Front-End Developer. Буду рад работать и развиваться вместе с Вами!
                    {/* Hello! I am Web Developer from United States, New York. I have rich experience in web site design and building, also I am good at wordpress. I love to talk with you about our unique. */}
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