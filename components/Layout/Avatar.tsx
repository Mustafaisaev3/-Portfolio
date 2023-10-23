import React from 'react'

const Avatar = () => {
  return (
    <div className='w-[45%] h-full fixed top-0 left-0 z-10'>
        <img className='w-full h-full object-cover' src="/moe.png" alt="my-photo" />
        <span className='w-full h-full absolute top-0 left-0 bg-[#258c7ec4] mix-blend-hard-light'></span>
    </div>
  )
}

export default Avatar