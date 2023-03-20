import CompleteProject from '@/components/container/Works/CompleteProject'
import SmallProject from '@/components/container/Works/SmallProject'
import React from 'react'

const works = () => {
  return (
    <div>
      <div className="font-[600] text-[32px]">
        <span className='text-lavender'>/</span>
        <span>projects</span>
      </div>
      <div className="font-[400] text-base mt-1">List of my projects</div>
      <CompleteProject/>
      <SmallProject />
    </div>
  )
}

export default works