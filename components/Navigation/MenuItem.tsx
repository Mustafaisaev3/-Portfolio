import React from 'react'
import AnimatedText from '../AminatedText/AnimatedText'

interface MenuItemProps {
    label: string,
    link?: string,
}

const MenuItem: React.FC<MenuItemProps> = ({label, link}) => {
  return (
    <div className='uppercase text-[#ffffff] font-bold hover:text-[#68e0cf] transition-all cursor-pointer'>
        <AnimatedText text={label} />
    </div>
  )
}

export default MenuItem