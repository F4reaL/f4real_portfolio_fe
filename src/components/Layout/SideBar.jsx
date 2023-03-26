import React from "react";
import IconGithub from "../../../public/icon/Github.svg";
import IconLinkedin from "../../../public/icon/Linkedin.svg";
import IconTelegram from "../../../public/icon/Telegram.svg";
import IconEmail from "../../../public/icon/Email.svg";
import IconFacebook from "../../../public/icon/FaceBook.svg";

const SideBar = () => {

  return (
    <>
      <div className="hidden fixed h-full bg-main-bg z-10 top-0 left-4 bottom-0 lg:flex flex-col  gap-2 justify-start items-center">
        <div className="w-[1px] h-[191px] bg-cadet-blue"></div>
        <a href="https://github.com/F4reaL" target={"_blank"} >
          <img src={IconGithub.src} alt="" className="w-7 h-8 hover:scale-110" />
        </a>
        <a href="https://www.linkedin.com/in/kh%C3%A1nh-h%C3%B2a-nguy%E1%BB%85n-6a86aa244/" target={"_blank"} >
          <img src={IconLinkedin.src} alt="" className="w-8 h-8 hover:scale-110" />
        </a>
        <a href="https://t.me/F4reaL99" target={"_blank"} >
          <img src={IconTelegram.src} alt="" className="w-[34px] h-8 hover:scale-110" />
        </a>
        <a href="mailto:f4realisme@gmail.com" target={"_blank"} >
          <img src={IconEmail.src} alt="" className="w-8 h-8 hover:scale-110" />
        </a>
        <a href="https://www.facebook.com/khanhhoa.d.nguyen/" target={"_blank"} >
          <img src={IconFacebook.src} alt="" className="w-6 h-8 hover:scale-110" />
        </a>
      </div>
    </>
  );
};

export default SideBar;
