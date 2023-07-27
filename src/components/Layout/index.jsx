import React, { useEffect, useState } from "react";
import Header from "./Header";
import Head from "next/head";
import SideBar from "./SideBar";
import Bottom from "./Bottom";
import AOS from "aos";
import "aos/dist/aos.css";
import MobileSidebar from "./MobileSidebar";

const Index = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    AOS.init()
  },[]);


  return (
    <div className="  bg-main-bg text-white font-FiraCode">
      <Head>
        <title>F4reaL Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      </Head>
      <Header isOpen={isOpen} setIsOpen={setIsOpen}/>
      <SideBar />
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen}/>
      <div className="  h-full  main-bg ">
        <main className=" pt-[124px] px-5 sm:px-20 lg:px-[100px] lap1366:px-0 lap1366:max-w-[1024px]  mx-auto">
          {children}
        </main>
      </div>
      <Bottom />
    </div>
  );
};

export default Index;
