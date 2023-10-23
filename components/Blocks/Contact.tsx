import React from 'react'
import BlockTitle from '../BlockTitle'

const Contact = () => {
  return (
    <div className='px-[8%] py-[70px] border-t-[1px] border-[#585d65]'>
        <BlockTitle title='Contact' subtitle="Let's talk" />
        <div className='w-full h-auto border border-[#585d65] rounded-[30px] p-[30px] pb-[50px]'>
            <div className='text-[#ffffff] text-[24px] font-bold pb-2'>Мустафа Исаев</div>
            <div className='text-[#68e0cf] text-[14px] font-bold uppercase'>Junior Front-End developer</div>
            <div className='pt-[50px]'>
                <div className='w-full'>
                    <span className='w-[200px] text-[#68e0cf] text-[24px] font-bold uppercase inline-block'>AGE:</span>
                    <span className='text-[#ffffff] text-[24px] font-bold'>26</span>
                </div>
                <div className='w-full'>
                    <span className='w-[200px] text-[#68e0cf] text-[24px] font-bold uppercase inline-block'>PHONE:</span>
                    <span className='text-[#ffffff] text-[24px] font-bold'>+7990366278</span>
                </div>
                <div className='w-full'>
                    <span className='w-[200px] text-[#68e0cf] text-[24px] font-bold uppercase inline-block'>E-MAIL:</span>
                    <span className='text-[#ffffff] text-[24px] font-bold'>test@gmail.com</span>
                </div>
                <div className='w-full'>
                    <span className='w-[200px] text-[#68e0cf] text-[24px] font-bold uppercase inline-block'>Telegram:</span>
                    <span className='text-[#ffffff] text-[24px] font-bold'>@telegram</span>
                </div>
            </div>
        </div> 
    </div>
  )
}

export default Contact