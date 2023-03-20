import React from "react";
import IconLinkedin from "../../../../public/icon/Linkedin.svg";
import IconTelegram from "../../../../public/icon/Telegram.svg";
import IconEmail from "../../../../public/icon/Email.svg";
import IconFacebook from "../../../../public/icon/FaceBook.svg";
import ImgViewAll from '../../../../public/img/viewall.png'

const Contact = () => {
  return (
    <div className="mt-[74px]" id="contacts">
      <div className="flex items-center justify-between">
        <div className="flex items-center font-[500] text-[32px]">
          <span className="text-lavender">#</span>
          <span>contacts</span>
          <hr className="ml-1 sm:ml-4  w-[30px] sm:w-[120px] lap1366:w-[127px] border-lavender " />
        </div>
        <img src={ImgViewAll.src} className='cursor-pointer hover:border-b pb-1' alt="" />
      </div>
      <div className="mt-11 flex flex-col sm:flex-row gap-10 w-full">
        <div className="text-base text-cadet-blue font-[400] flex-[3]">
          I’m interested in freelance opportunities. However, if you have other
          request or question, don’t hesitate to contact me
        </div>
        <div className="border border-cadet-blue p-4 text-base flex-[2]">
          <div className="font-[600] text-white text-center text-[18px]">Message me here</div>
          <div className="font-[400] text-cadet-blue flex gap-1 items-center cursor-pointer hover:underline">
            <img src={IconTelegram.src} className="w-8 h-8" alt="" />
            @F4reaL99
          </div>
          <div className="font-[400] text-cadet-blue flex gap-1 items-center cursor-pointer hover:underline">
            <img src={IconEmail.src} className="w-8 h-8" alt="" />
            f4realisme@gmail.com
          </div>
          <div className="font-[400] text-cadet-blue flex gap-1 items-center cursor-pointer hover:underline">
            <img src={IconFacebook.src} className="w-8 h-8 p-1 my-0.5" alt="" />
            fb.com/khanhhoa.d.nguyen.3
          </div>
          <div className="font-[400] text-cadet-blue flex gap-1 items-center cursor-pointer hover:underline">
            <img src={IconLinkedin.src} className="w-8 h-8" alt="" />
            F4reaL
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
