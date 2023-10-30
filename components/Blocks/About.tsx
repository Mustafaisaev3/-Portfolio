import React from 'react'
import BlockTitle from '../BlockTitle'

const About = () => {
  return (
    <div className='px-[8%] py-[30px] md:py-[50px] lg:py-[70px] border-t-[1px] border-[#585d65]' id='about'>
        <BlockTitle title='Обо мне' subtitle='My history' />
        <div className='text-[#ffffff] mb-[30px]'> 
            Меня зовут Мустафа. Мне 26 лет. Я начинающий фронтенд-разработчик.
            <br/>
            <br/>
            Мой опыт фронтенд-разработки включает в себя более года обучения и разработки пет-проектов с современным адаптивным дизайном. При этом я использую следующие технологии и инструменты:
                - React
                - Next.js
                - Vue
                - Nuxt
                - Node.js
                - Express.js и др.
            <br/>
            <br/>
            Также есть комерческий опыт разработки фриланс проектов:
            <br/>
            <p className="ml-[50px]">
                Интернет-магазин светильников - <a href='https://monoled.com.ua/' target="_blank" className='text-[#68e0cf]'>Monoled</a>
            </p>
            <p className="ml-[50px]">
                Интернет-магазин мебели - <a href='https://melitmebel.com.ua/' target="_blank" className='text-[#68e0cf]'>Melitmebel</a>
            </p>
            <br/>
            Фронтенд-разработка является для меня не просто работой, а тем что приносит мне удовольствие и возможнойтть реализовать себя.
            Стремлюсь стать частью дружной и профессиональной команды, в которой я мог бы развивать свои навыки разработки и достигать с ней большх результатов.
        </div>
        <div className='w-full h-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-1'>
            <div className='w-full'>
                <span className='w-[90px] text-[#68e0cf] text-[14px] font-bold uppercase inline-block'>AGE:</span>
                <span className='text-[#ffffff] text-[14px] font-bold'>26</span>
            </div>
            <div className='w-full'>
                <span className='w-[90px] text-[#68e0cf] text-[14px] font-bold uppercase inline-block'>FREELANCE:</span>
                <span className='text-[#ffffff] text-[14px] font-bold'>Available</span>
            </div>
            <div className='w-full'>
                <span className='w-[90px] text-[#68e0cf] text-[14px] font-bold uppercase inline-block'>PHONE:</span>
                <span className='text-[#ffffff] text-[14px] font-bold'>+7 (990) 039-07-90</span>
            </div>
            <div className='w-full'>
                <span className='w-[90px] text-[#68e0cf] text-[14px] font-bold uppercase inline-block'>E-MAIL:</span>
                <span className='text-[#ffffff] text-[14px] font-bold'>isaevmustafa96@gmail.com</span>
            </div>
            <div className='w-full'>
                <span className='w-[90px] text-[#68e0cf] text-[14px] font-bold uppercase inline-block'>TELEGRAM:</span>
                <span className='text-[#ffffff] text-[14px] font-bold'>@MustafaIsaev6</span>
            </div>
            <div className='w-full'>
                <span className='w-[90px] text-[#68e0cf] text-[14px] font-bold uppercase inline-block'>GITHUB:</span>
                <span className='text-[#ffffff] text-[14px] font-bold'>github.com/Mustafaisaev3</span>
            </div>
        </div>
    </div>
  )
}

export default About