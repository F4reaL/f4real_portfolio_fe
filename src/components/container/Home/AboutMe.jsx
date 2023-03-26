import ButtonComponent from "@/components/common/ButtonComponent";
import React from "react";
import BlackMan2 from "../../../../public/img/black-man2.png";
import ImgReadMore from "../../../../public/img/readmore.png";
import Link from "next/link";
const AboutMe = () => {
  return (
    <div className="mt-[74px]">
      <div className="flex items-center justify-between">
        <div className="flex items-center font-[500] text-[32px]">
          <span className="text-lavender">#</span>
          <span>about-me</span>
          <hr className="ml-1 sm:ml-4  w-[30px] sm:w-[120px] lap1366:w-[326px] border-lavender " />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row w-full justify-between items-start">
        <div className="mt-6 flex-1 text-base text-cadet-blue font-[400] flex flex-col items-start gap-7">
          <div>
            Hello, I'm{" "}
            <span className="font-[600] text-white">Nguyen Khanh Hoa</span>-
            <span className="font-[600] text-lavender">F4reaL</span>
          </div>
          <div>
            I&apos;m a self-taught front-end developer based in Hanoi, Vietnam. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </div>
          <div className="hidden lg:block">
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </div>
          <Link href={"/about-me"} data-aos="fade-right">
            <ButtonComponent classname={"border-lavender hover:bg-lavender-20"}>
              <img src={ImgReadMore.src} alt="" />
            </ButtonComponent>
          </Link>
        </div>
        <img src={BlackMan2.src} className alt="flex-1 p-8 sm:p-2" />
      </div>
    </div>
  );
};

export default AboutMe;
