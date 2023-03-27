import React from "react";
import Logo from "/public/img/Logo.png";
import IconGithub from "/public/icon/Github.svg";
import IconEmail from "/public/icon/Email.svg";
import IconTelegram from "/public/icon/Telegram.svg";

const Bottom = () => {
  return (
    <div className="relative z-[10] w-full mt-14 lg:mt-[145px] border-t border-cadet-blue py-8 bg-main-bg">
      <div className=" flex justify-between items-center sm:items-end pb-2 px-5 sm:px-15 lg:px-[100px] lap1366:px-[170px] w-full ">
        <div>
          <div className="flex gap-6">
            <div className="flex gap-2 items-center">
              <img src={Logo.src} className="shrink-0 w-4 h-4" />
              <div className="font-[500] text-base">F4reaL</div>
            </div>
            <span className="hidden sm:inline-block font-[400] text-cadet-blue text-base">
              f4realisme@gmail.com
            </span>
          </div>
          <div className="hidden sm:inline-block mt-3">Web designer and front-end developer</div>
        </div>
        <div>
          <div className="hidden sm:inline-block font-[500] text-[24px] pl-1">Media</div>
          <div className="flex items-center gap-1">
            <a href="https://github.com/F4reaL" target={"_blank"} >
              <img src={IconGithub.src} className="h-4 mr-1 hover:scale-110" alt="" />
            </a>
            <a href="https://t.me/F4reaL99" target={"_blank"} >
              <img src={IconTelegram.src} className="h-6 hover:scale-110" alt="" />
            </a>
            <a href="mailto:f4realisme@gmail.com" target={"_blank"} >
              <img src={IconEmail.src} className="h-6 hover:scale-110" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div className="text-center text-cadet-blue text-base font-[400] mt-4 sm:mt-10">
        © Copyright 2022. Made by F4reaL
      </div>
    </div>
  );
};

export default Bottom;
