import React from 'react'
import BlockTitle from '../BlockTitle'

const About = () => {
  return (
    <div className='px-[8%] py-[70px] border-t-[1px] border-[#585d65]'>
        <BlockTitle title='About Me' subtitle='My story' />
        <p className='text-[#ffffff] mb-[30px]'> 
            Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.
            <br/>
            <br/>
            Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
        </p>
        <div className='w-full h-auto grid grid-cols-2 gap-2'>
            <div className='w-full'>
                <span className='w-[100px] text-[#68e0cf] text-[14px] font-bold uppercase inline-block'>AGE:</span>
                <span className='text-[#ffffff] text-[14px] font-bold'>24</span>
            </div>
            <div className='w-full'>
                <span className='w-[100px] text-[#68e0cf] text-[14px] font-bold uppercase inline-block'>FREELANCE:</span>
                <span className='text-[#ffffff] text-[14px] font-bold'>Available</span>
            </div>
            <div className='w-full'>
                <span className='w-[100px] text-[#68e0cf] text-[14px] font-bold uppercase inline-block'>PHONE:</span>
                <span className='text-[#ffffff] text-[14px] font-bold'>+7990366278</span>
            </div>
            <div className='w-full'>
                <span className='w-[100px] text-[#68e0cf] text-[14px] font-bold uppercase inline-block'>E-MAIL::</span>
                <span className='text-[#ffffff] text-[14px] font-bold'>test@gmail.com</span>
            </div>
        </div>
    </div>
  )
}

export default About