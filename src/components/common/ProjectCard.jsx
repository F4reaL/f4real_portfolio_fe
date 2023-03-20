import React from "react";
import ImgLive from "../../../public/img/live.png";
import ImgCache from "../../../public/img/cache.png";
import ButtonComponent from "../common/ButtonComponent";
const ProjectCard = ({ children, ImgUrl, oasOffset, project }) => {
  return (
    <div
      className="border border-cadet-blue hover:border-lavender hover flex flex-col"
      data-aos="fade-up"
      data-aos-offset={oasOffset}
    >
      <div>
        {ImgUrl && (
          <img
            src={ImgUrl}
            className="w-full object-fill md:h-[201px] border-b hover:border hover:border-cadet-blue hover:scale-110 duration-100 cursor-pointer"
            alt=""
          />
        )}
        <div className="hidden sm:block border-b  border-cadet-blue p-2">{project.tech}</div>
      </div>

      <div className=" border-cadet-blue p-2 sm:p-4 flex flex-col flex-1">
        <div className="mb-4 sm:mb-0 font-[500] text-[16px] sm:text-[24px] sm:leading-[31px]">
          {project.name}
        </div>
        <div className="hidden sm:block my-4 font-[400] text-base text-cadet-blue leading-[21px]">
          {project.desc}
        </div>
        <div className="flex gap-4 mt-auto ">
          <a href={project.deployURL} target={"_blank"}>
            <ButtonComponent classname={"border-lavender hover:bg-lavender-20"}>
              <div className="hidden sm:block">
                <img src={ImgLive.src} alt="" />
              </div>
              <div className=" sm:hidden">Live</div>
            </ButtonComponent>
          </a>
          <a href="">
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
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
