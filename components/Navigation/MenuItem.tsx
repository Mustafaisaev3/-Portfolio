import React from 'react'
import AnimatedText from '../AminatedText/AnimatedText'

interface MenuItemProps {
    label: string,
    link?: string,
    id?: string,
}

const MenuItem: React.FC<MenuItemProps> = ({label, link, id}) => {
  return (
    <a href={`#${id}`}>
        <div className='uppercase text-[#ffffff] font-bold hover:text-[#68e0cf] transition-all cursor-pointer'>
            <AnimatedText text={label} />
        </div>
    </a>
  )
}

export default MenuItem