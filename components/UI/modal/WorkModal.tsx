'use ui'

import React, { useState } from 'react'
import { useUI } from '@/context/ui.context'
import { AiOutlineLink } from 'react-icons/ai'
import { BiWindowClose } from 'react-icons/bi'

const WorkModal = () => {
  const { modalData, closeModal } = useUI()
  const [hover, setHover] = useState(false)

  return (
    <div className='w-full h-full rounded-lg bg-[#585d65] overflow-hidden p-5'>
        <div 
          className='w-full h-[300px] overflow-hidden'
          style={{
            background: `url(${modalData.images[0]})`, 
            backgroundSize: 'cover', 
            backgroundPositionY: `${hover ? 'bottom' : 'top'}`,
            transitionDuration: '3s'

          }}
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        ></div>
        <div className='w-full h-auto py-[20px] flex flex-col justify-center'>
            <h2 className='text-[18px] text-[#ffffff] pb-1 text-center'>
                <a href={modalData.link} target="_blank">{modalData.title}</a>
            </h2>
            <div className='text-[16px] text-[#68e0cf] pb-2 text-center'>{modalData.technology}</div>
            <p className='text-[14px] text-[#ffffff] pb-2 text-center'>{modalData.description}</p>
        </div>
        <div className='w-full h-auto flex items-center justify-center gap-5'>
            <a href={modalData.link} target="_blank">
                <div className='w-[100px] p-3 rounded-lg bg-[#68e0cf] flex items-center justify-center cursor-pointer'>
                    <AiOutlineLink size={25} color='#ffffff' />
                </div>
            </a>
            <div className='w-[100px] p-3 rounded-lg bg-[#ff5635] flex items-center justify-center cursor-pointer' onClick={() => closeModal()}>
                <BiWindowClose size={25} color='#ffffff' />
            </div>
        </div>
    </div>
  )
}

export default WorkModal