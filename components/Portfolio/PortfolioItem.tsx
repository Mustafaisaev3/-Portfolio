import React, { useState } from 'react'
import { WorkExamplesInterface } from '@/data/work-examples'
import { HiOutlineArrowsExpand } from 'react-icons/hi'
import { useUI } from '@/context/ui.context'

interface PortfolioItemInterfcae {
    item: WorkExamplesInterface
}

const PortfolioItem: React.FC<PortfolioItemInterfcae> = ({ item }) => {
  const [hover, setHover] = useState<boolean>(false)
  const { openModal, setModalData } = useUI()

  const handleClick = () => {
    setModalData(item)
    openModal()
  }

  return (
    <div className='w-full h-[300px] '>
      <div className='w-full h-[200px] overflow-hidden relative' onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <img 
          src={item.images[0]} 
          alt={item.title} 
        />
        <div className={`w-full h-full p-2 absolute left-0 top-0 cursor-pointer ${hover ? 'block' : 'hidden'}`} onClick={handleClick}>
            <div className='w-full h-full bg-[#68e0d0a8] flex items-center justify-center'>
                <HiOutlineArrowsExpand size={30} color='#ffffff' />
            </div>
        </div>
      </div>
      <div className='w-full h-auto py-[20px] flex flex-col justify-center'>
        <h2 className='text-[18px] text-[#ffffff] pb-1 text-center'>
            <a href={item.link} target="_blank">{item.title}</a>
        </h2>
        <div className='text-[16px] text-[#68e0cf] pb-2 text-center'>{item.technology}</div>
      </div>
    </div>
  )
}

export default PortfolioItem