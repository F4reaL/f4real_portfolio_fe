import React from "react";
import { facts } from "@/contants/facts";
const MyFunFact = () => {
  return (
    <div className="mt-[82px]">
      <div className="font-[500] text-[32px]">
        <span className="text-lavender">#</span>
        <span>my-fun-facts</span>
      </div>
      <div className="mt-6 flex flex-wrap items-start gap-4">
        {facts.map((f, i) => (
          <div key={i} className="border border-cadet-blue text-base p-2 font-[400] text-cadet-blue">
            {f}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyFunFact;
