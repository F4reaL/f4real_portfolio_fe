import Introduction from '@/components/container/Introduction/Introduction'
import MyFunFact from '@/components/container/Introduction/MyFunFact'
import MySkill from '@/components/container/Introduction/MySkill'
import React from 'react'

const index = () => {
  return (
    <div>
      <div className="font-[600] text-[32px]">
        <span className='text-lavender'>/</span>
        <span>about-me</span>
      </div>
      <div className="font-[400] text-base mt-1">Who am i?</div>
      <Introduction />
      <MySkill />
      <MyFunFact/>
    </div>
  )
}

export default index