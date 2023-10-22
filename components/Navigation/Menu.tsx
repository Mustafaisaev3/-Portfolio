import React from 'react'
import AnimatedText from '../AminatedText/AnimatedText'
import MenuItem from './MenuItem'

const Menu = () => {
  return (
    <div className='w-full h-full flex items-center gap-5'>
        <MenuItem label='Home' />
        <MenuItem label='Resume' />
        <MenuItem label='About' />
        <MenuItem label='Portfolio' />
        <MenuItem label='Contacts' />
    </div>
  )
}

export default Menu