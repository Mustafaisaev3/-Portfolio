import React from 'react'
import AnimatedText from '../AminatedText/AnimatedText'

interface ButtonInterface extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string,
    action?: () => any
}

const Button: React.FC<ButtonInterface> = ({ label, action, ...props }) => {
  return (
    <button className='w-auto h-[64px] px-[35px] border border-[#9e9e9e] rounded-[64px]' {...props}>
        <AnimatedText text={label} />
    </button>
  )
}

export default Button