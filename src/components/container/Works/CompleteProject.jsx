import ProjectCard from '@/components/common/ProjectCard'
import React from 'react'
import { projects } from '@/contants/projects'


const CompleteProject = () => {
  return (
    <div className='mt-[68px]'>
      <div className="font-[500] text-[32px]">
        <span className='text-lavender'>#</span>
        <span>completed-projects</span>
      </div>
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {projects.filter(p => p.type === 'big').map((project, index) => (
          <ProjectCard key={index} oasOffset={100 * index} project={project} />
        ))}
      </div>
    </div>
  )
}

export default CompleteProject