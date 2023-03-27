import React from "react";
import ImageDots from "/public/img/img-dots.png";
import ImgViewAll from "/public/img/viewall.png";
import Link from "next/link";
const Skills = () => {
  return (
    <div className="mt-[106px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center font-[500] text-[32px]">
          <span className="text-lavender">#</span>
          <span>skills</span>
          <hr className="ml-1 sm:ml-4  w-[30px] sm:w-[120px] lap1366:w-[239px] border-lavender " />
        </div>
        <Link href={"/about-me"}>
          <img
            src={ImgViewAll.src}
            className="cursor-pointer hover:border-b pb-1"
            alt=""
          />
        </Link>
      </div>

      <div className="flex flex-col sm:flex-row gap-2 items-center">
        <img
          src={ImageDots.src}
          className="sm:w-1/3 m-4"
          alt=""
          data-aos="zoom-in-right"
        />
        <div
          className="flex-1 flex flex-wrap sm:grid sm:grid-cols-3 items-start gap-4"
          data-aos="zoom-in"
        >
          <div className="border border-cadet-blue text-base">
            <div className="border-b p-2 font-[600]">Languages</div>
            <div className=" p-2 flex gap-2 flex-wrap font-[400] text-cadet-blue ">
              <span>JavaScript</span>
              <span>NodeJS</span>
              <span>TypeScript</span>
              <span>SQL</span>
              <span>C#</span>
            </div>
          </div>
          <div>
            <div className="border border-cadet-blue text-base mb-4">
              <div className="border-b p-2 font-[600]">Databases</div>
              <div className=" p-2 flex gap-2 flex-wrap font-[400] text-cadet-blue ">
                <span>FireBase</span>
                <span>MongoDB</span>
                <span>MariaDB</span>
              </div>
            </div>
            <div className="border border-cadet-blue text-base">
              <div className="border-b p-2 font-[600]">Other</div>
              <div className="b p-2 flex gap-2 flex-wrap font-[400] text-cadet-blue ">
                <span>HTML</span>
                <span>CSS</span>
                <span>TailwindCSS</span>
                <span>SCSS</span>
                <span>Styled Component</span>
                <span>Redux</span>
                <span>RESTful API</span>
                <span>GraphQL</span>
                <span>OOP</span>
                <span> Data structures and Algorithms</span>
              </div>
            </div>
          </div>
          <div>
            <div className="border border-cadet-blue text-base mb-4">
              <div className="border-b p-2 font-[600]">Tools</div>
              <div className=" p-2 flex gap-2 flex-wrap font-[400] text-cadet-blue ">
                <span>VSCode</span>
                <span>Git</span>
                <span>Figma</span>
                <span>Photoshop</span>
              </div>
            </div>
            <div className="border border-cadet-blue text-base">
              <div className="border-b p-2 font-[600]">Frameworks, Lib</div>
              <div className="b p-2 flex gap-2 flex-wrap font-[400] text-cadet-blue ">
                <span>React</span>
                <span>Bootstrap</span>
                <span>NextJs</span>
                <span>Express</span>
                <span>Ant Design</span>
                <span>MUI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
