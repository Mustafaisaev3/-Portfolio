'use client'
import React, { useState } from 'react'
import AnimatedText from '../AminatedText/AnimatedText'

interface TabInterface {
    label: string,
    value: string,
    active?: string,
    onClick: (value: string) => any
}

const Tab: React.FC<TabInterface> = ({ label, value, active, onClick }) => {
  const handleTabClick = () => {
    onClick(value)
  }

  return (
    <div className={`text-[16px] hover:text-[#68e0cf] transition-all duration-300 cursor-pointer ${active === value ? 'text-[#68e0cf]' :  'text-[#ffffff]'}`} onClick={handleTabClick} >
        {label}
    </div>
  )
}

export default Tab