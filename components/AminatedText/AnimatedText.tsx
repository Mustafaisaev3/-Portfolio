'use client'

import React, { useState } from 'react'
import AnimatedLetter from './AnimatedLetter'

type AnimatedTextType = {
    text: string,
    animationDuration?: number,
    active?: boolean
}

type AnimatedWordType = {
    word: string,
    hover: boolean,
    delay: number
}

const AnimatedWord: React.FC<AnimatedWordType> = ({ word, hover, delay }) => {
    const lettersArr = word.split('')

    return (
        <>
            {lettersArr.map((l, id) => { 
                delay += 0.03
                return (
                    <AnimatedLetter letter={l} active={hover} delay={delay} key={id}/>
                )
            })}
        </>
    )
}

const AnimatedText: React.FC<AnimatedTextType> = ({ text, animationDuration = 0.5, active }) => {
  const wordsArr = text.split(' ')
  const [hover, setHover] = useState(false)
  let delay = 0.0

  return (
    <div className='w-auto h-auto flex items-center cursor-pointer' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div className='relative h-[20px] flex overflow-hidden'>
            {wordsArr.map((word) => {
                return (
                    <>
                        <AnimatedWord word={word} hover={active ? active : hover} delay={delay} />&nbsp;
                    </>
                )
            })}
        </div>
    </div>
  )
}

export default AnimatedText