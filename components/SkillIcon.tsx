import React from 'react'
import { IconType } from 'react-icons'

type SkillIcon = {
    icon: IconType,
}

const SkillIcon: React.FC<SkillIcon> = ({ icon: Icon }) => {
  return (
    <div className='w-[100px] h-[100px] mb-4 rounded-full border border-[#585d65] flex items-center justify-center'>
        <Icon size={30} color='#68e0cf' />
    </div>
  )
}

export default SkillIcon