import React, { useRef, useEffect } from "react";
import ButtonComponent from "../../common/ButtonComponent";
import BlackMan from "../../../../public/img/black-man.png";
import { Link as LinkScroll } from "react-scroll";
import Typed from "typed.js";

const Banner = () => {
  const elRef = useRef(null);
  useEffect(() => {
    const typed = new Typed(elRef.current, {
      strings: ["web developer", "font-end developer"],
      typeSpeed: 120,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);
  return (
    <div className="flex gap-5 flex-col-reverse sm:flex-row ">
      <div className="shrink-0 sm:flex-1 flex flex-col h-[310px]" data-aos="fade-up">
        <div className=" mb-8 font-[600] text-[32px] leading-[42px]">
          <div>Welcome to F4reaL&apos;s Portfolio</div>
          <div>
            I&apos;m a{" "}
            <span className="text-lavender text-[32px]" ref={elRef}></span>
          </div>
        </div>
        <div className="flex-1 flex flex-col justify-start ">
          <div className=" text-base text-cadet-blue leading-[25px]">
            He crafts responsive websites where technologies meet creativity
          </div>

          <LinkScroll to="contacts" smooth={true}>
            <ButtonComponent
              classname={"mt-6 border-lavender hover:bg-lavender-20"}
            >
              Contact me!!
            </ButtonComponent>
          </LinkScroll>
        </div>
      </div>
      <div
        className="flex-1 flex flex-col items-center"
        data-aos="fade-left"
        data-aos-offset="500"
        data-aos-easing="ease-in-sine"
      >
        <img src={BlackMan.src} alt="" />
        <div className="max-w-[402px] flex items-center border border-cadet-blue gap-[10px] p-2">
          <div className="w-4 h-4 bg-lavender"></div>
          <div className="text-cadet-blue leading-[19px]">
            Currently working on{" "}
            <span className="font-[500] text-white">Portfolio</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
