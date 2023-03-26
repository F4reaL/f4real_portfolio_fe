import React from "react";
import ProjectCard from "@/components/common/ProjectCard";
import {projects} from '../../../contants/projects'

const SmallProject = () => {
  return (
    <div className="mt-[81px]">
      <div className="font-[500] text-[32px]">
        <span className="text-lavender">#</span>
        <span>small-projects</span>
      </div>
      <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 gap-4">
      {projects.filter(p => p.type === 'small').map((project, index) => (
          <ProjectCard key={index} oasOffset={70 * index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default SmallProject;
