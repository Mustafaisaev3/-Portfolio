import React from 'react'

interface BlockTitleTypes {
    title: string,
    subtitle: string,
}

const BlockTitle: React.FC<BlockTitleTypes> = ({ title, subtitle }) => {
  return (
    <div className='w-full h-auto pb-[60px]'>
        <h2 className='text-[white] text-[55px] font-bold'>{title}</h2>
        <span className='text-[#68e0cf] text-[14px] font-bold uppercase'>{subtitle}</span>
    </div>
  )
}

export default BlockTitle