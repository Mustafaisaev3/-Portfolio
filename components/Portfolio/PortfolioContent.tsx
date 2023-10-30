'use client'

import React, { useEffect, useState } from 'react'
import Tab from '../UI/Tab'
import { TechnologiesData } from '@/data/technologies'
import { WorkExamples } from '@/data/work-examples'
import PortfolioItem from './PortfolioItem'

const PortfolioContent = () => {
  const [activeTab, setActiveTab] = useState<string>(TechnologiesData[0].value)
  const [filteredWorkExamples, setFilteredWorkExamples] = useState(WorkExamples)

  useEffect(() => {
    if(activeTab === 'all') {
        setFilteredWorkExamples(WorkExamples)
    } else {
        setFilteredWorkExamples(WorkExamples.filter(item => {
            return item.category === activeTab
        }))
    }
  }, [activeTab])

  return (
    <div className='w-full h-auto'>
        <div className='flex gap-10 overflow-x-auto lg:overflow-x-visible'>
            {TechnologiesData.map(item => (
                <Tab key={item.id} label={item.label} value={item.value} onClick={setActiveTab} active={activeTab} />
            ))}
        </div>
        <div className='py-[30px] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5'>
            {filteredWorkExamples.map(item => (
                <PortfolioItem item={item}/>
            ))}
        </div>
    </div>
  )
}

export default PortfolioContent