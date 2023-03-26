import React from "react";
import BlackMan2 from "../../../../public/img/black-man2.png";
import ImgViewAll from "../../../../public/img/viewall.png";
const Introduction = () => {
  return (
    <div className="mt-[74px]">
     

      <div className="flex  flex-col sm:flex-row gap-10">
        <div className="mt-6 flex-1 text-base text-cadet-blue font-[400] flex flex-col justify-center gap-7">
          <div>
            Hello, I&apos;m{" "}
            <span className="font-[600] text-white">Nguyen Khanh Hoa</span>-
            <span className="font-[600] text-lavender">F4reaL</span>
          </div>
          <div>
            I&apos;m a self-taught front-end developer based in Hanoi, Vietnam. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
          </div>
          <div>
            Transforming my creativity and knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </div>
        </div>
        <img src={BlackMan2.src} className alt="flex-1 p-8 sm:p-2" />
      </div>
    </div>
  );
};

export default Introduction;
