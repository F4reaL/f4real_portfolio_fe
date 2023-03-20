import ProjectCard from '@/components/common/ProjectCard'
import React from 'react'
import PLayee from "../../../../public/img/playee.png";
import PLayee2 from "../../../../public/img/playee-2.png";
import ProX from "../../../../public/img/prox.png";
import Gamoni from "../../../../public/img/gamoni.png";
import {projects} from '../../../contants/projects'

const ImgUrl = [Gamoni.src, PLayee.src, PLayee2.src, ProX.src];

const CompleteProject = () => {
  return (
    <div className='mt-[68px]'>
        <div className="font-[500] text-[32px]">
        <span className='text-lavender'>#</span>
        <span>completed-projects</span>
      </div>
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
      {projects.map((project, index) => (
          <ProjectCard  key={index} ImgUrl={ImgUrl[index]} oasOffset={70 * index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default CompleteProject