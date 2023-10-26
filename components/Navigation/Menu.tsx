import React from 'react'
import AnimatedText from '../AminatedText/AnimatedText'
import MenuItem from './MenuItem'

const Menu = () => {
  return (
    <div className='w-full h-full flex items-center gap-5'>
        <MenuItem label='Home' id='main' />
        <MenuItem label='Resume' />
        <MenuItem label='About' id='about' />
        <MenuItem label='Skills' id='skills' />
        <MenuItem label='Portfolio' id='portfolio' />
        <MenuItem label='Language' id='languages'/>
        <MenuItem label='Contacts' id='contact'/>
    </div>
  )
}

export default Menu