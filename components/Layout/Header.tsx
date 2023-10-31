'use client'

import React, { useEffect, useState } from 'react'
import CVButton from '../CVButton'
import Menu from '../Navigation/Menu'
import MenuBtn from '../Navigation/MenuBtn'

const Header = () => {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false)
  const [changeColor, setChangeColor] = useState(false)

  const onChangeColor = () => {
    if(window.scrollY >= 80) {
      setChangeColor(true)
    } else {
      setChangeColor(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', onChangeColor)

    return () => {
      window.removeEventListener('scroll', onChangeColor)
    }
  })


  return (
    <div className={`
      left-0 
      right-0 
      top-0 
      z-50
      fixed
      overflow-hidden
      transition-all
      duration-[1s]
      
      lg:bg-transparent
      lg:h-auto
      lg:top-[40px]
      lg:left-[50px]
      lg:right-[50px] 

      ${activeMobileMenu ? 'h-screen bg-[#585d65]' : 'h-[80px]'}
    `}
    style={{backgroundColor: `${changeColor || activeMobileMenu  ? '#585d65' : 'transparent'}`}}
    >
      <div className={`
        h-[80px] 
        p-[10px] 
        flex 
        items-center 
        justify-between 
        bg-transparent 
        rounded-0 
        relative
        bg-[#585d65]
        
        lg:bg-[#585d65] 
        lg:rounded-[85px]
        
        transition-all
        duration-[1s]
      `}
      
      >
          <div className='w-full h-full lg:w-auto flex justify-between items-center '>
            <div className='h-full lg:pl-[40px] flex items-center text-[20px] font-bold text-[#ffffff] leading-6'>
                Мустафа<br />Исаев
            </div>
            <MenuBtn active={activeMobileMenu} onClick={() => setActiveMobileMenu(!activeMobileMenu)} />
          </div>
          <div className='w-full h-[calc(100vh-80px)] lg:h-full lg:rounded-md flex flex-col lg:flex-row items-center bg-[#585d65] absolute top-[100%] left-0 lg:w-auto lg:static overflow-hidden transition-all duration-[1s]'>
              <Menu closeMenu={() => setActiveMobileMenu(false)} />
              <CVButton />
          </div>
      </div>
    </div>
  )
}

export default Header


// 'use client'

// import React, { useState } from 'react'
// import CVButton from '../CVButton'
// import Menu from '../Navigation/Menu'
// import MenuBtn from '../Navigation/MenuBtn'

// const Header = () => {
//   const [activeMobileMenu, setActiveMobileMenu] = useState(true)

//   return (
//     <div className='
//       h-screen
//       left-0 
//       right-0 
//       top-0 
//       z-50
//       fixed
      
//       md:bg-transparent
//       md:h-auto
//       md:top-[40px]
//       md:left-[50px]
//       md:right-[50px] 
//     '>
//       <div className='
//         h-[80px] 
//         p-[10px] 
//         flex 
//         items-center 
//         justify-between 
//         bg-transparent 
//         rounded-0 
//         relative
//         bg-[#585d65]
        
//         md:bg-[#585d65] 
//         md:rounded-[85px] 
        
//       '>
//           <div className='w-full h-full md:w-auto flex justify-between items-center '>
//             <div className='h-full md:pl-[40px] flex items-center text-[20px] font-bold text-[#ffffff] leading-6'>
//                 Мустафа<br />Исаев
//             </div>
//             <MenuBtn active={activeMobileMenu} onClick={() => setActiveMobileMenu(!activeMobileMenu)} />
//           </div>
//           <div className={`
//             w-full md:h-full flex flex-col md:flex-row items-center bg-[#585d65] absolute top-[100%] left-0 md:w-auto md:static overflow-hidden transition-all duration-[1s]
//             ${activeMobileMenu ? 'h-[calc(100vh-80px)]' : 'h-0'}
//           `}>
//               <Menu />
//               <CVButton />
//           </div>
//       </div>
//     </div>
//   )
// }

// export default Header