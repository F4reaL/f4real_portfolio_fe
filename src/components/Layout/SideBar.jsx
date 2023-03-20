import React from "react";
import IconGithub from "../../../public/icon/Github.svg";
import IconLinkedin from "../../../public/icon/Linkedin.svg";
import IconTelegram from "../../../public/icon/Telegram.svg";
import IconEmail from "../../../public/icon/Email.svg";
import IconFacebook from "../../../public/icon/FaceBook.svg";

const SideBar = () => {
  return (
    <>
      <div className="hidden fixed h-full bg-main-bg z-10 top-0 left-0 bottom-0 pl-4 w-10 mr-[101px] lg:flex flex-col  gap-2 justify-start items-center">
        <div className="w-[1px] h-[191px] bg-cadet-blue"></div>
        <img src={IconGithub.src} alt="" className="w-9  shrink-0" />
        <img src={IconLinkedin.src} alt="" className="w-6  " />
        <img src={IconTelegram.src} alt="" className="w-8  " />
        <img src={IconEmail.src} alt="" className="w-6  " />
        <img src={IconFacebook.src} alt="" className="w-6  " />
      </div>
    </>
  );
};

export default SideBar;
