import React from 'react'
import AnimatedText from '../AminatedText/AnimatedText'
import MenuItem from './MenuItem'

const Menu = () => {
  return (
    <div className='w-full h-auto md:h-full pt-5 md:p-0 flex flex-col md:flex-row items-center gap-5 md:gap-3 xl:gap-5'>
        <MenuItem label='Главная' id='main' />
        <MenuItem label='Обо мне' id='about' />
        <MenuItem label='Навыки' id='skills' />
        <MenuItem label='Портфолио' id='portfolio' />
        <MenuItem label='Языки' id='languages'/>
        <MenuItem label='Контакты' id='contact'/>
    </div>
  )
}

export default Menu