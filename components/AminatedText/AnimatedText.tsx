'use client'

import React, { useState } from 'react'
import AnimatedLetter from './AnimatedLetter'

type AnimatedTextType = {
    text: string,
    animationDuration?: number
}

const AnimatedText: React.FC<AnimatedTextType> = ({ text, animationDuration = 0.5 }) => {
  const lettersArr = text.split('')
  const [hover, setHover] = useState(false)
  let delay = 0.10

  return (
    <div className='w-auto h-auto flex items-center cursor-pointer' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div className='relative h-[20px] flex overflow-hidden'>
            {lettersArr.map((l, id) => { 
                delay += 0.03
                return (
                    <AnimatedLetter letter={l} active={hover} delay={delay} key={id}/>
                )
            })}
        </div>
    </div>
  )
}

export default AnimatedText