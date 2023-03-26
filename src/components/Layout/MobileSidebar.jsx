import React from 'react'
import Link from "next/link";
import { useRouter } from "next/router";

const MobileSidebar = ({isOpen, setIsOpen}) => {
  const router = useRouter()

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
    <div className={`mobile-sidebar fixed flex flex-col gap-4 items-start p-4 lg:hidden bg-main-bg  z-[6] inset-0 ${isOpen? "isOpen w-[100vw] top-[61px]":"w-[100vw] top-[61px] left-[200vw]"}`}>
      <Link onClick={()=> setIsOpen(false)} href={"/"} className={`block w-[70%]  rounded-[10px] text-cadet-blue px-4 py-1 text-[20px] ${router.pathname === "/" ? "bg-cadet-blue-20 text-white" : ""}`}>
        <span className="text-lavender">#</span>
        <span className="">home</span>
      </Link>
      <Link onClick={()=> setIsOpen(false)} href={"/works"} className={`block w-[70%]  rounded-[10px] text-cadet-blue px-4 py-1 text-[20px] ${router.pathname === "/works" ? "bg-cadet-blue-20 text-white" : ""}`}>
        <span className="text-lavender">#</span>
        <span className="">works</span>
      </Link>
      <Link onClick={()=> setIsOpen(false)} href={"/about-me"} className={`block w-[70%]  rounded-[10px] text-cadet-blue px-4 py-1 text-[20px] ${router.pathname === "/about-me" ? "bg-cadet-blue-20 text-white" : ""}`}>
        <span className="text-lavender">#</span>
        <span className="">about me</span>
      </Link>
      <Link onClick={()=> setIsOpen(false)} href={"/contacts"} className={`block w-[70%]  rounded-[10px] text-cadet-blue px-4 py-1 text-[20px] ${router.pathname === "/contacts" ? "bg-cadet-blue-20 text-white" : ""}`}>
        <span className="text-lavender">#</span>
        <span className="">contacts</span>
      </Link>
      <button onClick={onButtonClick} className="text-left border px-4 py-1 mt-4 ">
        <span className="">Download cv</span>
      </button>
    </div>
  )
}

export default MobileSidebar