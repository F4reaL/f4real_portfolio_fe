import React from "react";
import IconTear from '/public/img/tear-double.png'

const Story = () => {
  
  return (
    <div data-aos="zoom-in" className="relative mx-auto mt-[112px] mb-[137px] border border-cadet-blue w-full p-6 lg:w-[712px]  flex items-center justify-center text-[24px]">
      With great power comes great electricity bill
      <img src={IconTear.src} className='w-10 h-7 absolute top-[-15%] left-3' alt="" />
      <img src={IconTear.src} className='w-10 h-7 absolute bottom-[-15%] right-3 z-10' alt="" />
      <div className="absolute top-full right-0 border border-cadet-blue p-4 text-[24px] font-[400] leading-[29px]">- Dr. Who</div>
    </div>
  );
};

export default Story;
