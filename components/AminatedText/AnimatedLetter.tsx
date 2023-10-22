import React from 'react'

type AnimatedLetter = {
    letter: string,
    active: boolean,
    delay: number
}

const AnimatedLetter: React.FC<AnimatedLetter> = ({ letter, active, delay }) => {
  return (
    <div className='flex flex-col'>
        <span style={{transitionDelay: `${delay}s`}} className={`text-[#ffffff] transition-all duration-[0.3s] ${active ? ' -translate-y-[100%]' : 'translate-y-0'}`}>{letter}</span>
        <span style={{transitionDelay: `${delay}s`}} className={`text-[#68e0cf] transition-all duration-[0.3s] ${active ? '-translate-y-[100%]' : 'translate-y-0'}`}>{letter}</span>
    </div>
  )
}

export default AnimatedLetter