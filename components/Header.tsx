import React from 'react'
import CVButton from './CVButton'
import Menu from './Navigation/Menu'

const Header = () => {
  return (
    <div className='h-[80px] p-[10px] flex items-center justify-between bg-[#585d65] rounded-[85px] fixed left-[50px] right-[50px] top-[40px] z-50'>
        <div className='h-full pl-[80px] flex items-center text-[20px] font-bold text-[#ffffff] leading-6'>
            Мустафа<br />Исаев
        </div>
        <div className='w-auto h-full flex items-center'>
            <Menu />
            <CVButton />
        </div>
    </div>
  )
}

export default Header