import React from 'react'
import AnimatedText from '../AminatedText/AnimatedText'

interface MenuItemProps{
    label: string,
    link?: string,
    id?: string,
    onClick: () => any
}

const MenuItem: React.FC<MenuItemProps> = ({label, link, id, onClick}) => {
  return (
    <a href={`#${id}`} onClick={() => onClick()}>
        <div className='uppercase text-[#ffffff] font-bold hover:text-[#68e0cf] transition-all cursor-pointer'>
            <AnimatedText text={label} />
        </div>
    </a>
  )
}

export default MenuItem