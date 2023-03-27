import React from "react";
import IconLinkedin from "/public/icon/Linkedin.svg";
import IconTelegram from "/public/icon/Telegram.svg";
import IconEmail from "/public/icon/Email.svg";
// import IconFacebook from "/public/icon/FaceBook.svg";
import ImgViewAll from '/public/img/viewall.png'
import ContactsForm from "@/components/common/ContactsForm";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="mt-[74px]" id="contacts">
      <div className="flex items-center justify-between">
        <div className="flex items-center font-[500] text-[32px]">
          <span className="text-lavender">#</span>
          <span>contacts</span>
          <hr className="ml-1 sm:ml-4  w-[30px] sm:w-[120px] lap1366:w-[127px] border-lavender " />
        </div>
        <Link href={'/contacts'}><img src={ImgViewAll.src} className='hidden sm:inline-block cursor-pointer hover:border-b pb-1' alt="" />
          <span className="sm:hidden  text-lavender">View all</span></Link>
      </div>
      <div className="mt-11 flex flex-col sm:flex-row gap-10 w-full">
        <div className="flex-1 flex flex-col gap-4">
          <div className="text-base text-cadet-blue font-[400] ">
            I’m interested in freelance opportunities. However, if you have other
            request or question, don’t hesitate to contact me
          </div>
          <div className="border border-cadet-blue p-4 text-base ">
            <div className="font-[600] text-white text-center text-[18px]">Message me here</div>
            <a href="https://t.me/F4reaL99" target={"_blank"} className="font-[400] text-cadet-blue flex gap-1 items-center cursor-pointer hover:underline">
              <img src={IconTelegram.src} className="w-8 h-8" alt="" />
              @F4reaL99
            </a>
            <a href="mailto:f4realisme@gmail.com" target={"_blank"} className="font-[400] text-cadet-blue flex gap-1 items-center cursor-pointer hover:underline">
              <img src={IconEmail.src} className="w-8 h-8" alt="" />
              f4realisme@gmail.com
            </a>
            {/* <a href="https://www.facebook.com/khanhhoa.d.nguyen/" target={"_blank"} className="font-[400] text-cadet-blue flex gap-1 items-center cursor-pointer hover:underline">
              <img src={IconFacebook.src} className="w-8 h-8 p-1 my-0.5" alt="" />
              fb.com/khanhhoa.d.nguyen.3
            </a> */}
            <a href="https://www.linkedin.com/in/kh%C3%A1nh-h%C3%B2a-nguy%E1%BB%85n-6a86aa244/" target={"_blank"} className="font-[400] text-cadet-blue flex gap-1 items-center cursor-pointer hover:underline">
              <img src={IconLinkedin.src} className="w-8 h-8" alt="" />
              F4reaL
            </a>
          </div>
        </div>
        <div className="flex-1">
          <div className="text-center mb-4 font-[700] text-[22px]">
            Send messsage to me
          </div>
          <div className="max-w-[600px] mx-auto">
            <ContactsForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
