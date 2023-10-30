import React from 'react'

const Avatar = () => {
  return (
    <div className='w-full md:w-[45%] lg:md:w-[45%] h-[450px] md:h-full lg:h-full lg:fixed top-0 left-0 z-10 bg-[#68e0cf]'>
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