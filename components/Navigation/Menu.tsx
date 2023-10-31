import React from 'react'
import AnimatedText from '../AminatedText/AnimatedText'
import MenuItem from './MenuItem'

type MenuTypes = {
  closeMenu: () => any
}

const Menu: React.FC<MenuTypes> = ({ closeMenu }) => {
  return (
    <div className='w-full h-auto lg:h-full pt-5 lg:p-0 flex flex-col lg:flex-row items-center gap-5 lg:gap-3 xl:gap-5'>
        <MenuItem label='Главная' id='main' onClick={closeMenu} />
        <MenuItem label='Обо мне' id='about' onClick={closeMenu} />
        <MenuItem label='Навыки' id='skills' onClick={closeMenu} />
        <MenuItem label='Портфолио' id='portfolio' onClick={closeMenu} />
        <MenuItem label='Языки' id='languages' onClick={closeMenu} />
        <MenuItem label='Контакты' id='contact' onClick={closeMenu} />
    </div>
  )
}

export default Menu