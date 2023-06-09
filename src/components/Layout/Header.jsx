import React, { useState } from "react";
import Logo from "/public/img/Logo.png";
import Link from "next/link";
const Header = ({setIsOpen, isOpen}) => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('NguyenKhanhHoa-Resume.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'NguyenKhanhHoa-Resume.pdf';
        alink.click();
      })
    })
  }
  return (
    <div className="fixed top-0 left-0 z-[7] bg-main-bg w-full  ">
      <div className="h-[61px] flex justify-between items-center sm:items-end pb-2 px-5 sm:px-15 lg:px-[100px] lap1366:px-[170px] w-full ">
        <Link href={'/'} className="flex gap-2 items-center">
          <img src={Logo.src} className="shrink-0 w-4 h-4" />
          <div className="font-[700] text-base">F4reaL</div>
        </Link>
        <div className="hidden sm:flex gap-2 sm:gap-8 font-[400] text-base text-cadet-blue">
          <Link href={"/"} className="hover:font-[500] hover:text-white">
            <span className="text-lavender">#</span>
            <span className="">home</span>
          </Link>
          <Link href={"/works"} className="hover:font-[500] hover:text-white">
            <span className="text-lavender">#</span>
            <span className="">works</span>
          </Link>
          <Link href={"/about-me"} className="hover:font-[500] hover:text-white">
            <span className="text-lavender">#</span>
            <span className="">about me</span>
          </Link>
          <Link href={"/contacts"} className="hover:font-[500] hover:text-white">
            <span className="text-lavender">#</span>
            <span className="">contacts</span>
          </Link>
          <button onClick={onButtonClick} >
            <span className="text-lavender">#</span>
            <span className="">download cv</span>
          </button>

        </div>
        <div className={`flex flex-col sm:hidden ${isOpen?"open":""}`} id="humberger" onClick={()=> setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Header;
