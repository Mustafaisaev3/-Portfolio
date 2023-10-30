import React from 'react'
import BlockTitle from '../BlockTitle'

const Contact = () => {
  return (
    <div className='px-[8%] py-[30px] md:py-[50px] lg:py-[70px] border-t-[1px] border-[#585d65]' id='contact'>
        <BlockTitle title='Контакты' subtitle="Let's talk" />
        <div className='w-full h-auto border border-[#585d65] rounded-[30px] p-[20px] md:p-[25px] lg:p-[30px] pb-[50px]'>
            <div className='text-[#ffffff] text-[24px] font-bold pb-2'>Мустафа Исаев</div>
            <div className='text-[#68e0cf] text-[14px] font-bold uppercase'>Junior Front-End developer</div>
            <div className='pt-[50px]'>
                <div className='w-full text-[16px] md:text-[24px] lg:text-[24px]'>
                    <span className='w-[180px] text-[#68e0cf] font-bold uppercase inline-block'>AGE:</span>
                    <span className='text-[#ffffff] font-bold'>26</span>
                </div>
                <div className='w-full text-[16px] md:text-[24px] lg:text-[24px]`'>
                    <span className='w-[120px] md:w-[180px] lg:w-[180px] text-[#68e0cf] font-bold uppercase inline-block'>PHONE:</span>
                    <span className='text-[#ffffff] font-bold'>+7 (990) 039-07-90</span>
                </div>
                <div className='w-full text-[16px] md:text-[24px] lg:text-[24px]`'>
                    <span className='w-[120px] md:w-[180px] lg:w-[180px] text-[#68e0cf] font-bold uppercase inline-block'>E-MAIL:</span>
                    <span className='text-[#ffffff] font-bold'>isaevmustafa96@gmail.com</span>
                </div>
                <div className='w-full text-[16px] md:text-[24px] lg:text-[24px]`'>
                    <span className='w-[120px] md:w-[180px] lg:w-[180px] text-[#68e0cf] font-bold uppercase inline-block'>Telegram:</span>
                    <span className='text-[#ffffff] font-bold'>@MustafaIsaev6</span>
                </div>
                <div className='w-full text-[16px] md:text-[24px] lg:text-[24px]`'>
                    <span className='w-[120px] md:w-[180px] lg:w-[180px] text-[#68e0cf] font-bold uppercase inline-block'>Github:</span>
                    <span className='text-[#ffffff] font-bold'>github.com/Mustafaisaev3</span>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Contact