import React from 'react'
import BlockTitle from '../BlockTitle'
import PortfolioContent from '../Portfolio/PortfolioContent'

const Potrfolio = () => {
  return (
    <div className='px-[8%] py-[70px] border-t-[1px] border-[#585d65]'>
        <BlockTitle title='Portfolio' subtitle='Latest works' />
        <PortfolioContent />
    </div>
  )
}

export default Potrfolio