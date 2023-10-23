'use client'

import React, { useState } from 'react'
import { IconType } from 'react-icons'
import AnimatedText from '../AminatedText/AnimatedText'

interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string,
    action?: () => any,
    icon?: IconType,
    leftIcon?: IconType,
    rightIcon?: IconType,
}

const Button: React.FC<ButtonInterface> = ({ label, action, icon: Icon, leftIcon: LeftIcon, rightIcon: RightIcon, ...props }) => {
  const [hover, setHover] = useState(false)

  return (
    <button className='w-auto h-[64px] flex items-center gap-1 px-[35px] border border-[#585d65] hover:border-[#68e0cf] transition-all duration-300 rounded-[64px]' {...props} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        {LeftIcon && <LeftIcon size={18} className={`transition-all duration-500 ${hover ? 'text-[#68e0cf] -translate-x-1' : 'text-[white]'}`} />}
        <AnimatedText text={label} active={hover} />
        {Icon && <Icon size={18} className={`transition-all duration-500 ${hover ? 'text-[#68e0cf] translate-x-1' : 'text-[white]'}`} />}
        {RightIcon && <RightIcon size={18} className={`transition-all duration-500 ${hover ? 'text-[#68e0cf] translate-x-1' : 'text-[white]'}`} />}
    </button>
  )
}

export default Button