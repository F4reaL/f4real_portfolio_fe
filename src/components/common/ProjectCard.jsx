import React from "react";
import ImgLive from "/public/img/live.png";
import ImgCache from "/public/img/cache.png";
import ButtonComponent from "../common/ButtonComponent";
const ProjectCard = ({ oasOffset, project }) => {
  return (
    <div
      className="border border-cadet-blue hover:border-lavender hover flex flex-col"
      data-aos="fade-up"
      data-aos-offset={oasOffset}
    >
      <div>
        {project.imgUrl && (
          <img
            src={project.imgUrl}
            className="w-full object-fill h-[100px] sm:h-[150px] md:h-[201px] border-b hover:border hover:border-cadet-blue hover:scale-110 duration-100 cursor-pointer"
            alt=""
          />
        )}
      </div>
      <div className="flex-1 flex flex-col">
        <div className="hidden sm:block border-b  border-cadet-blue p-2 h-16">
          <p className="line-clamp-2">{project.tech}</p></div>
        <div className=" border-cadet-blue p-2 sm:p-4 flex flex-col flex-1 mt-auto">
          <div className="mb-4 sm:mb-0 font-[500] text-[16px] sm:text-[24px] sm:leading-[31px]">
            {project.name}
          </div>
          <div className="hidden sm:block my-4 font-[400] text-base text-cadet-blue leading-[21px]">
            {project.desc}
          </div>
          <div className="flex gap-4 mt-auto ">
            {project.deployURL &&
              <a href={project.deployURL} target={"_blank"}>
                <ButtonComponent classname={"border-lavender hover:bg-lavender-20"}>
                  <div className="hidden sm:block">
                    <img src={ImgLive.src} alt="" />
                  </div>
                  <div className=" sm:hidden">Live</div>
                </ButtonComponent>
              </a>
            }
            {project.gitUrl &&
              <a href={project.gitUrl}>
                <ButtonComponent
                  classname={
                    "text-cadet-blue border-cadet-blue hover:bg-cadet-blue-20"
                  }
                >
                  <div className="hidden sm:block">
                    <img src={ImgCache.src} alt="" />
                  </div>
                  <div className=" sm:hidden">Cache</div>
                </ButtonComponent>
              </a>
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
