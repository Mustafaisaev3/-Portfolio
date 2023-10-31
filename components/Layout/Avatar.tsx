import React from 'react'

const Avatar = () => {
  return (
    <div className='w-full lg:w-[45%] h-[500px] lg:h-full lg:fixed top-0 left-0 z-10 bg-[#68e0cf]'>
        <img 
          className='w-full h-full object-cover' 
          src="/moe.png" 
          alt="my-photo" 
          style={{filter: 'grayscale(100%)', mixBlendMode: 'luminosity'}}
        />
        {/* <span className='w-full h-full absolute top-0 left-0 bg-[#258c7ec4] mix-blend-hard-light'></span> */}
    </div>
  )
}

export default Avatar