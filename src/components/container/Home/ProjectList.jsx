import ProjectCard from "@/components/common/ProjectCard";
import React from "react";
import PLayee from "../../../../public/img/playee.png";
import PLayee2 from "../../../../public/img/playee-2.png";
import ProX from "../../../../public/img/prox.png";
import Gamoni from "../../../../public/img/gamoni.png";
import ImgViewAll from "../../../../public/img/viewall.png";
import {projects} from '../../../contants/projects'
import Link from "next/link";
const ImgUrl = [Gamoni.src, PLayee.src, PLayee2.src, ProX.src];
const ProjectList = () => {
  return (
    <div className="mt-[74px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center font-[500] text-[32px]">
          <span className="text-lavender">#</span>
          <span>projects</span>
          <hr className="ml-1 sm:ml-4  w-[30px] sm:w-[120px] lap1366:w-[511px] border-lavender " />
        </div>
        <Link href={"/works"}>
          <img
            src={ImgViewAll.src}
            className="cursor-pointer hover:border-b pb-1"
            alt=""
          />
        </Link>
      </div>
      <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, index) => (
          <ProjectCard key={index} ImgUrl={ImgUrl[index]} oasOffset={70 * index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
