import React from "react";
import IconLinkedin from "/public/icon/Linkedin.svg";
import IconTelegram from "/public/icon/Telegram.svg";
import IconEmail from "/public/icon/Email.svg";
// import IconFacebook from "/public/icon/FaceBook.svg";
import IconGithub from "/public/icon/Github.svg";

import ContactsForm from "@/components/common/ContactsForm";
import ButtonComponent from "@/components/common/ButtonComponent";
const index = () => {
  return (
    <div>
      <div className="mt-11 flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-start">
        <div className="text-base text-cadet-blue font-[400] flex-1">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </div>
        <div className="flex-1 hidden sm:flex items-start gap-3">
          <div className="sm:border border-cadet-blue p-1 sm:p-4">
            <div className="font-[600] text-white  text-[18px]">My phone</div>
            <div className="text-cadet-blue">0981597609</div>
          </div>
          <div className="sm:border border-cadet-blue p-1 sm:p-4 text-base">
            <div className="font-[600] text-white  text-[18px] mb-2">
              Message me here
            </div>
            <a href="https://t.me/F4reaL99" target={"_blank"} className="font-[400] text-cadet-blue flex gap-1 items-center cursor-pointer hover:underline">
              <img src={IconTelegram.src} className="w-8 h-8" alt="" />
              @F4reaL99
            </a>
            <a href="mailto:f4realisme@gmail.com" target={"_blank"} className="font-[400] text-cadet-blue flex gap-1 items-center cursor-pointer hover:underline">
              <img src={IconEmail.src} className="w-8 h-8" alt="" />
              f4realisme@gmail.com
            </a>
          </div>
        </div>
      </div>
      <div className="font-[600] text-[32px] mt-6 mb-4">
        <span className="text-lavender">#</span>
        <span>all-media</span>
      </div>
      <div className="flex flex-col sm:flex-row gap-10">
        <div className="flex-1">
          {/* <a href="https://www.facebook.com/khanhhoa.d.nguyen/" target={"_blank"} className="font-[400] text-cadet-blue flex gap-1 items-center cursor-pointer hover:underline">
            <img src={IconFacebook.src} className="w-8 h-8 p-1 my-0.5" alt="" />
            <span className="mx-2">fb.com/khanhhoa.d.nguyen.3</span>
          </a> */}
          <a href="https://www.linkedin.com/in/kh%C3%A1nh-h%C3%B2a-nguy%E1%BB%85n-6a86aa244/" target={"_blank"} className="font-[400] text-cadet-blue flex gap-1 items-center cursor-pointer hover:underline">
            <img src={IconLinkedin.src} className="w-8 h-8" alt="" />
            <span className="mx-2">Linkedin: F4reaL</span>
          </a>
          <a href="https://t.me/F4reaL99" target={"_blank"} className="font-[400] text-cadet-blue flex gap-1 items-center cursor-pointer hover:underline">
            <img src={IconTelegram.src} className="w-8 h-8" alt="" />
            <span className="mx-2">@F4reaL99</span>
          </a>
          <a href="https://github.com/F4reaL" target={"_blank"} className="font-[400] text-cadet-blue flex gap-1 items-center cursor-pointer hover:underline">
            <img src={IconGithub.src} className="mx-1 w-6 h-8" alt="" />
            <span className="mx-2">Github: F4reaL</span>
          </a>
          <a href="mailto:f4realisme@gmail.com" target={"_blank"} className="font-[400] text-cadet-blue flex gap-1 items-center cursor-pointer hover:underline">
            <img src={IconEmail.src} className="w-8 h-8" alt="" />
            <span className="mx-2">f4realisme@gmail.com</span>
          </a>
        </div>
        <div className="flex-1 self-center">
          <ButtonComponent classname={` border-lavender hover:bg-lavender-20`}><div className="text-[48px] px-10 py-4 leading-[54px] text-center">Download CV</div></ButtonComponent>
        </div>
      </div>
      <div className="mt-16"><ContactsForm /></div>

    </div>
  );
};

export default index;
