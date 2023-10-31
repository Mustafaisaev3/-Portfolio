import React from 'react'
import { IoMdClose, IoMdMenu } from 'react-icons/io'

type MenuBtnType = {
    active: boolean,
    onClick: () => any
}

const MenuBtn: React.FC<MenuBtnType> = ({ active, onClick }) => {
  return (
    <div className='block md:hidden p-4 rounded-full border border-[#ffffff]' onClick={() => onClick()}>
        {active ? (
            <IoMdClose size={30} color={'white'} />
        ) : (
            <IoMdMenu size={30} color={'white'} />
        )}
    </div>
  )
}

export default MenuBtn